import React from 'react'
import cx from '@/utils/cx'
import Container from '@/components/container'
import Link from 'next/link'

export interface IAppHeader extends React.HTMLAttributes<HTMLDivElement> {}

export default function AppHeader({ className, ...props }: IAppHeader) {
  return (
    <header className={cx('pt-8', className)} {...props}>
      <Container>
        <h1 className="font-display text-8xl font-black leading-none hover:underline">
          <Link href="/">Feyz</Link>
        </h1>
      </Container>
    </header>
  )
}
