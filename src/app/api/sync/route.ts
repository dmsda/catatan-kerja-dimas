import { NextResponse } from 'next/server'
import { drizzle } from 'drizzle-orm/d1'
import { notes, tasks, bookmarks } from '@/db/schema'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization')
    let env
    
    // Safely get request context (works in Cloudflare Pages)
    try {
      env = getRequestContext().env
    } catch (e) {
      // Fallback for local development if next-on-pages context is missing
      env = process.env as any
    }

    const secret = env.SYNC_SECRET || process.env.SYNC_SECRET
    
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await req.json()
    const { type, data } = payload

    if (type !== 'all_data') {
      return NextResponse.json({ error: 'Invalid sync type' }, { status: 400 })
    }

    if (!env.DB) {
      return NextResponse.json({ error: 'D1 Database binding not found' }, { status: 500 })
    }

    const db = drizzle(env.DB)

    // Helper to safely parse Zustand persist string
    const parseZustandData = (jsonStr: string | null, key: string) => {
      if (!jsonStr) return []
      try {
        const parsed = JSON.parse(jsonStr)
        return parsed?.state?.[key] || []
      } catch (e) {
        return []
      }
    }

    const notesData = parseZustandData(data.notes, 'notes')
    const tasksData = parseZustandData(data.tasks, 'tasks')
    const bookmarksData = parseZustandData(data.bookmarks, 'bookmarks')

    console.log(`[SYNC API] Syncing ${notesData.length} notes, ${tasksData.length} tasks, ${bookmarksData.length} bookmarks.`)

    // Upsert Notes
    if (notesData.length > 0) {
      for (const item of notesData) {
        await db.insert(notes).values(item).onConflictDoUpdate({
          target: notes.id,
          set: item
        })
      }
    }

    // Upsert Tasks
    if (tasksData.length > 0) {
      for (const item of tasksData) {
        await db.insert(tasks).values(item).onConflictDoUpdate({
          target: tasks.id,
          set: item
        })
      }
    }

    // Upsert Bookmarks
    if (bookmarksData.length > 0) {
      for (const item of bookmarksData) {
        await db.insert(bookmarks).values(item).onConflictDoUpdate({
          target: bookmarks.id,
          set: item
        })
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Data successfully synced to Cloudflare D1',
      timestamp: Date.now()
    })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error'
    console.error('[SYNC API ERROR]', msg)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
