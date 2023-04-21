'use client'

import Link, { LinkProps } from 'next/link'
import { pageFill } from '@/utils/helper'
import { DATA_PER_PAGE } from '@/utils/const'
import cx from '@/utils/cx'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function Pagination({
  totalData,
  tag
}: {
  totalData: number
  tag?: string
}) {
  const PAGES = pageFill(totalData, DATA_PER_PAGE)
  const pathname = usePathname()

  const isActiveFirstPage = pathname === `/tag/${tag}` || pathname === '/'

  return (
    <div className="mt-8 flex items-center gap-3 font-display text-4xl">
      {tag ? (
        <Item
          href={`/tag/[${tag}]`}
          as={`/tag/${tag}`}
          active={isActiveFirstPage}
        >
          1
        </Item>
      ) : (
        <Item href="/" active={isActiveFirstPage}>
          1
        </Item>
      )}

      {PAGES.map((page) => {
        const isActivePage =
          pathname === `/tag/${tag}/${page}` || pathname === `/${page}`

        return tag ? (
          <Item
            key={page}
            href={`/tag/[${tag}]/[page]`}
            as={`/tag/${tag}/${page}`}
            active={isActivePage}
          >
            {page}
          </Item>
        ) : (
          <Item key={page} href="/[page]" as={`/${page}`} active={isActivePage}>
            {page}
          </Item>
        )
      })}
    </div>
  )
}

function Item({
  active,
  children,
  ...props
}: LinkProps & {
  children: ReactNode
  active: boolean
}) {
  return (
    <Link className={cx('opacity-50', active && 'opacity-100')} {...props}>
      {children}
    </Link>
  )
}
