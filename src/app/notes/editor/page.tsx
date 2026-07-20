import { Suspense } from 'react'
import Client from './Client'

export default function Page() {
  return (
    <Suspense fallback={<div>Memuat Catatan...</div>}>
      <Client />
    </Suspense>
  )
}
