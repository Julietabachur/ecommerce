
const ItemDetail = ({dataProducts}) => {
  return (
    <>
        {dataProducts.map((product)=>{
            return <ItemDetail key={product.id} data={product}/>

        })}
    </>
  )
}

export default ItemDetail