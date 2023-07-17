import React from 'react'
// use Omit<> to restrict property types
type ButtonProps = {
    variant: 'primary' | 'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}
