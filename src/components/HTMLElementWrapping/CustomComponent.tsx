import React from 'react'
import { Greet } from '../Greet'

// extracting property types from another component assuming we don't have access to type in here
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}
