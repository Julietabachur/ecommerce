import  "./ItemListContainer.sass";

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className="display-1 d-flex justify-content-center">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer