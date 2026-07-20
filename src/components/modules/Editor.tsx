"use client"

import * as React from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import { Bold, Italic, Strikethrough, Heading1, Heading2, List, ListOrdered, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNotesStore } from "@/store/useNotesStore"

interface NoteEditorProps {
  noteId: string;
  initialContent: string;
}

export function NoteEditor({ noteId, initialContent = "" }: NoteEditorProps) {
  const updateNote = useNotesStore(state => state.updateNote)
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Ketik draf pertama Anda di sini...",
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "prose prose-neutral dark:prose-invert max-w-none focus:outline-none min-h-[400px] font-body text-lg leading-relaxed",
      },
    },
    onUpdate: ({ editor }) => {
      // Autosave content on update
      updateNote(noteId, { content: editor.getHTML() })
    }
  })

  if (!editor) {
    return null
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Floating Toolbar Retro */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-neutral-900 dark:bg-card border-2 border-border rounded-[10px] shadow-retro-md sticky top-20 z-10">
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 ${editor.isActive("bold") ? "bg-neutral-800 text-white" : ""}`}
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 ${editor.isActive("italic") ? "bg-neutral-800 text-white" : ""}`}
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 ${editor.isActive("strike") ? "bg-neutral-800 text-white" : ""}`}
        >
          <Strikethrough className="w-4 h-4" />
        </Button>
        <div className="w-px h-5 bg-neutral-700 mx-1"></div>
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 font-bold font-heading ${editor.isActive("heading", { level: 1 }) ? "bg-neutral-800 text-white" : ""}`}
        >
          H1
        </Button>
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 font-bold font-heading ${editor.isActive("heading", { level: 2 }) ? "bg-neutral-800 text-white" : ""}`}
        >
          H2
        </Button>
        <div className="w-px h-5 bg-neutral-700 mx-1"></div>
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 ${editor.isActive("bulletList") ? "bg-neutral-800 text-white" : ""}`}
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 ${editor.isActive("orderedList") ? "bg-neutral-800 text-white" : ""}`}
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost" size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`h-8 w-8 text-neutral-100 hover:text-white hover:bg-neutral-800 ${editor.isActive("blockquote") ? "bg-neutral-800 text-white" : ""}`}
        >
          <Quote className="w-4 h-4" />
        </Button>
      </div>

      {/* Editor Canvas */}
      <div className="mt-4 px-2 sm:px-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
