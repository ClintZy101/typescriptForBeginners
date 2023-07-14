// https://www.developerway.com/posts/typescript-generics-for-react-developers
// an article about generic types in react typescript

type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}
// <T extends {}> = the least restriction when passing in props
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {/* {
        items.map((item, index) =>
          <div key={index} onClick={() => onClick(item)}>
            <p>{item}</p>
          </div>
        )
      } */}
    </div>
  )
}


