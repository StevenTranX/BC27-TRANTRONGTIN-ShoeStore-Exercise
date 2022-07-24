import React from "react";

const ProductDetails = ({ product, isOpen = false, onClose }) => {
  if (!product) {
    return null;
  }

  return (
    <>
    <div className='modal fade show modal-lg' style = {{ display : isOpen ? 'block' : 'none'}} tabindex='-1' role='dialog'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Shoe's detail</h5>
            <button
              type='button'
              className='close'

               onClick = {onClose}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='row mt-5'>
              <div className='col-sm-6'>
                <img src={product.image} alt={product.name} width = '100%' />
              </div>
              <div className='col-sm-6'>
                <h1> Shoe's Detail</h1>
                <table className='table'>
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
          </div>
          <div className='modal-footer'>
         
            <button
              type='button'
              className='btn btn-secondary'
              onClick = {onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    { isOpen && <div className = 'modal-backdrop fade show'></div>}
    </>
  );
};

export default ProductDetails;
