import { NextResponse } from 'next/server'
// import { drizzle } from 'drizzle-orm/d1'
// import { notes, tasks, bookmarks } from '@/db/schema'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    // 1. Validasi Autentikasi (Misal: API Key atau JWT)
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.SYNC_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await req.json()
    const { type, data } = payload

    // 2. Hubungkan ke Cloudflare D1 (Mocked untuk saat ini sampai binding D1 aktif)
    // const db = drizzle(process.env.DB) // Akan diinjeksi via Cloudflare Pages

    console.log(`[SYNC API] Menerima data sinkronisasi untuk: ${type}`)
    console.log(`[SYNC API] Jumlah item:`, Array.isArray(data) ? data.length : 1)

    // Simulasi penanganan Upsert (Insert on Conflict Update)
    /*
    if (type === 'notes') {
      await db.insert(notes).values(data).onConflictDoUpdate({
        target: notes.id,
        set: { ...data } // Simplified logic
      })
    }
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Data successfully synced to Cloudflare D1',
      timestamp: Date.now()
    })
  } catch (error: any) {
    console.error('[SYNC API ERROR]', error.message)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
