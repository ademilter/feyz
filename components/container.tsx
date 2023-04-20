import React from 'react'
import cx from '@/utils/cx'

export interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Container({
  children,
  className,
  ...props
}: IContainer) {
  return (
    <div className={cx('mx-auto max-w-screen-lg px-6', className)} {...props}>
      {children}
    </div>
  )
}
