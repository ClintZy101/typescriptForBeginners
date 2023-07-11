// for larger code bases it is better to store types or interfaces under 1 folder/file and then export it from there

export type ContainerProps = {
    styles: React.CSSProperties
}

// Reusing types or interfaces
export type Name = {
    firstName: string
    lastName: string
}

export type UserDataType = {
    name: string
    email: string
}

export type PersonProps = {
    name: Name
}

export type PersonNameList = {
    names: Name[]
}
