import React from 'react'
import cx from '@/utils/cx'
import Container from '@/components/container'

export interface IAppHeader extends React.HTMLAttributes<HTMLDivElement> {}

export default function AppHeader({ className, ...props }: IAppHeader) {
  return (
    <header className={cx('py-32 text-center', className)} {...props}>
      <Container className="max-w-screen-md">
        <p>dasda</p>
      </Container>
    </header>
  )
}
