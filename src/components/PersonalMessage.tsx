type PersonalMessageProps = {
    children: React.ReactNode
}

export const PersonalMessage = (props: PersonalMessageProps) => {
  return (
    <div>{props.children}</div>
  )
}
