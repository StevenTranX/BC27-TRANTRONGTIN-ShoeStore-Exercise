import React from 'react';
import data from './data.json';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
class ShoeStore extends React.Component {
   constructor(props) {
     super(props)
   
     this.state = {
        selectedProduct : null ,
        isOpen : false,
     }
   }
  handleOpen = () => {
    this.setState({isOpen:true })
  }
  handleClose = () => {
    this.setState({ isOpen : false})
  }

  handleSelect = (product) => {
    console.log(product)
    this.setState( {selectedProduct : product})
    this.setState({isOpen:true })
  }

  render () {
    const {selectedProduct} = this.state
    return (
      <div>
          <h1 className = "text-center text-danger">Shoe Store</h1>
          <ProductList products = {data} onSelect = {this.handleSelect}/>
          <ProductDetails isOpen = {this.state.isOpen} onClose = {this.handleClose} product = {selectedProduct} />
      </div>
    )
  }
  
 
}

export default ShoeStore