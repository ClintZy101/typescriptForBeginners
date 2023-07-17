import React from 'react'

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

// Combination of Types to come up with a Template Literals
// exclude the keyword: 'center-center' and replace it with 'center
type ToastProps = {
    position: | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

export default function Toast({ position }: ToastProps) {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}
