import React, { FC } from 'react'
import './Button.scss'

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large',
  children?: React.ReactNode,
  onClick?: () => void
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, size = 'medium' } = props
  return <button className={` btn btn__${size}`} {...props}>{children}</button>
}

export default Button;