'use client'

import Link, { LinkProps } from 'next/link'
import cx from '@/utils/cx'
import { HTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'

export default function AppNav({ tags }: { tags: string[] }) {
  return (
    <nav className="mt-8 flex flex-wrap gap-x-3 gap-y-1">
      <AppNavItem href="/">All</AppNavItem>
      {tags.map((tag) => (
        <AppNavItem href={`/tag/${tag}`} key={tag}>
          {tag}
        </AppNavItem>
      ))}
    </nav>
  )
}

function AppNavItem({
  className,
  children,
  ...props
}: LinkProps & HTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <Link
      className={cx(
        'font-display text-xl capitalize opacity-50',
        'hover:underline hover:opacity-100',
        isActive && 'underline opacity-100',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
