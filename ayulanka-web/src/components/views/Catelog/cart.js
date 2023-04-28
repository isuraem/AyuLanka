import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { QuantityPicker } from 'react-qty-picker';
import './CartView.css';
import Navbar from '../../views/Home widgets/Navbar'
import Footer from '../../views/Home widgets/Footer'
import { FaTrash } from 'react-icons/fa';
import { getCartItemsService, updateCartItemsService, deleteCartItemsService } from '../../../services/cartService';
import { useLocation, useHistory } from "react-router-dom";
import Swal from 'sweetalert2'



const CartItem = ({ item, onUpdateQuantity, onDeleteItem }) => {
  console.log("item>>>", item);

  const [productData, setProductData] = useState([])

  const updateQty = async (value) => {
    console.log("qty", value, item.productDetails._id)

    let updateObj = {
      cartQuantity: value,
      itemId: item.productDetails._id

    }

    let response = await updateCartItemsService(updateObj)
    if (response.ok) {
      window.location.reload()
    }
  }

  const deleteCartItem = async () => {
    let delCartObj = {
      itemId: item.productDetails._id
    }
    let response = await deleteCartItemsService(delCartObj)
    if (response.ok) {
      Swal.fire({
        icon: "warning",
        title: "Item Deleted !",
        showConfirmButton: false,
        timer: 2500,
      });
      window.location.reload();
    }
  }


  return (
    
    <Card className="my-3 shadow-sm cart-item">
      <Row className="no-gutters">
        <Col md={3}>
          <Card.Img className="cart-item-img mt-2" style={{ maxWidth: '200px', maxHeight: '200px' }}  src={item.productDetails.productImages.length != 0 ? item.productDetails.productImages[0].url : "images/img.jpg"} alt={item.productDetails.productName} />
          
        </Col>
        <Col md={9}>
          <Card.Body>
            <Card.Title>{item.productDetails.productName}</Card.Title>
            <Card.Text>LKR. {item.productDetails.productPrice * item.cartDetails.cartQuantity}.00</Card.Text>
            <QuantityPicker className=" mr-5" value={item.cartDetails.cartQuantity} onChange={updateQty} />
            <Button variant="danger" className="mt-2 ml-5 " onClick={() => deleteCartItem()}>
              <FaTrash /> Remove
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

const CartView = ({ cartItems, removeFromCart }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false)
  let history = useHistory();

  const getCartItems = async () => {
    let response = await getCartItemsService()
    if (response.ok) {
      setItems(response.data.data)



    }
    console.log(">>>>", response)
  }

  const cartChechkout = async (data) => {
    console.log(">>", data)
    history.push({
      pathname: '/payment',
      state: data
    })
  }


  const onUpdateQuantity = (id, quantity) => {
    const updatedItems = items.map(item => {
      if (item._id === id) {
        return {
          ...item,
          quantity
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const onDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  let productDataArray = []

  const proceedToCHeckout = async () => {
    setLoading(true)
    let response = await getCartItemsService()
    if (response.ok) {
      setItems(response.data.data)
      for (let index = 0; index < items.length; index++) {
        let productdata = {
          productDetails: items[index].productDetails,
          selectedQunatity: items[index].cartDetails.cartQuantity
        }

        productDataArray.push(productdata)
      }


    }
    setLoading(false)

    history.push({
      pathname: '/payment',
      state: productDataArray
    })
    console.log(">>>>", response)
    console.log("array>>", productDataArray)
  }

  // const total = items && items.length > 0 ? items.reduce((acc, curr) => acc + curr.items.productDetails.productPrice * curr.items.cartDetails.cartQuantity, 0) : 0;

  useEffect((response) => {
    getCartItems()

  }, [])


  return (
    <div>
      <Navbar/>
      <br></br>
      <br></br>
    <div className='container'>
      {/* <h2>Shopping Cart</h2> */}
      {items && items.length > 0 ? (
        <div>
          {items.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          {/* <h3>Total: ${total.toFixed(2)}</h3> */}
          <button style={{width:"1298px"}} className="checkout-btn" onClick={() => proceedToCHeckout()}>
            {isLoading ?
              <span>
                <div class="spinner-border text-light" role="status">

                </div>
                <span className='m-5'>Loading...</span>
              </span>

              :
              "CheckOut to Proceed"
            }
          </button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )
      }
    </div >
    <br></br>
    <Footer/>
    </div>
  );
};


export default CartView;
