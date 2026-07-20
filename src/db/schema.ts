import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const notes = sqliteTable('notes', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  folderId: text('folder_id'),
  isFavorite: integer('is_favorite', { mode: 'boolean' }).default(false),
  isArchived: integer('is_archived', { mode: 'boolean' }).default(false),
  isTrash: integer('is_trash', { mode: 'boolean' }).default(false),
  tags: text('tags', { mode: 'json' }).$type<string[]>(),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
})

export const tasks = sqliteTable('tasks', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  completed: integer('completed', { mode: 'boolean' }).default(false),
  dueDate: integer('due_date'),
  hasReminder: integer('has_reminder', { mode: 'boolean' }).default(false),
  priority: text('priority', { enum: ['low', 'medium', 'high'] }).default('medium'),
  projectId: text('project_id'),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
})

export const bookmarks = sqliteTable('bookmarks', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  category: text('category', { enum: ['documentation', 'video', 'github', 'tools', 'other'] }).default('other'),
  createdAt: integer('created_at').notNull(),
})
