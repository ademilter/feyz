import React from 'react'
import cx from '@/utils/cx'
import Container from '@/components/container'

export interface IAppFooter extends React.HTMLAttributes<HTMLDivElement> {}

export default function AppFooter({ className, ...props }: IAppFooter) {
  return (
    <footer className={cx('py-32 text-center', className)} {...props}>
      <Container className="max-w-screen-md">
        <p>dasda</p>
      </Container>
    </footer>
  )
}
