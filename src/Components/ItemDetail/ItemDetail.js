
const ItemDetail = ({dataProducts}) => {
  return (
    <>
        {dataProducts.map((product)=>{

          const {id,title,price,image,image1,image2,image3,stock} = product

          
            
            return (

              <div key={id}>   
                <div>
                  
                </div>           
                <image src={image}/>
                <div>
                  <h2>{title}</h2>
                  <span>$ {price}</span>
                </div>

              </div>
            )

        })}
    </>
  )
}

export default ItemDetail