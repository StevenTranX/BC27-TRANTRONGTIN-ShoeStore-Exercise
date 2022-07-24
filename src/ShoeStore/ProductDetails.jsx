import React from 'react'

const ProductDetails = ({product}) => {
  if (!product) {
    return null
  }

    return (
    <div className = "row mt-5">
        <div className = "col-sm-6">
            <img src = {product.image} alt = {product.name}/>
        </div>
        <div className = "col-sm-6">
            <h1> Shoe's Detail</h1>
           <table className = "table">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{product.name}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{product.description}</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>{product.quantity}</td>
                    </tr>
                 
                </tbody>
           </table>
        </div>
    </div>
  )
}

export default ProductDetails