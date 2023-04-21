'use client'

import Link, { LinkProps } from 'next/link'
import { TAGS } from '@/utils/const'
import cx from '@/utils/cx'
import { HTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'

export default function AppNav() {
  return (
    <nav className="mt-8 flex flex-wrap gap-x-3 gap-y-1">
      <AppNavItem href="/">Tümü</AppNavItem>
      {TAGS.map((tag) => (
        <AppNavItem href={tag.slug} key={tag.slug}>
          {tag.title}
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
        'font-display text-xl opacity-50',
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
