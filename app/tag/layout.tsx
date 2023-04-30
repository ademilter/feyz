import { ReactNode } from 'react'

export const revalidate = 21600 // 60 * 60 * 6 = 6 hours

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
