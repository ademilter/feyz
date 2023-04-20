import React from 'react'
import cx from '@/utils/cx'
import Container from '@/components/container'
import Nav from '@/components/nav'
import Link from 'next/link'

export interface IAppHeader extends React.HTMLAttributes<HTMLDivElement> {}

export default function AppHeader({ className, ...props }: IAppHeader) {
  return (
    <header className={cx('py-6', className)} {...props}>
      <Container>
        <h1 className="font-display text-8xl font-black leading-none">
          <Link href="/">Feyz</Link>
        </h1>

        <Nav />
      </Container>
    </header>
  )
}
