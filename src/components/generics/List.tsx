
type ListProps = {
    items: string[] | number[]
    onClick: (value: string | number) => void
}

export const List = ({items, onClick}: ListProps) => {
  return (
    <div>
        <h2>List of Items</h2>
        {
            items.map((item, index)=> (
            <div key={index} onClick={ ()=>onClick(item) }>
                {item}
            </div>
            ))
        }
    </div>
  )
}
