import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import container from 'react-bootstrap/Container';
import { Rating } from 'react-simple-star-rating';
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import Announcement from '../../views/Home widgets/Announcement'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Directions } from '@material-ui/icons';
import styled from 'styled-components';
import { getAllProductService } from '../../../services/productService';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation, useHistory } from "react-router-dom";
import { addCartItemsService } from '../../../services/cartService'
import Navbar from '../../views/Home widgets/Navbar'
import Footer from '../../views/Home widgets/Footer'


const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 30px;
`;

const ProductCatelog = () => {
  const [rating, setRating] = useState(0) // initial rating value
  const [selectedCategory, setSelectedCategory] = useState("")
  const [productDetails, setProductDetails] = useState([])

  //cart details
  const [cartQuantity, setCartQuantity] = useState(1)
  const [userId, setUserId] = useState("1")


  let history = useHistory();

  const getAllProducts = async () => {
    let response = await getAllProductService()
    if (response.ok) {
      setProductDetails(response.data.data)
      //  (let i = 0; i < response.data.data.length; i++) {

      //   setProductDetails((prevData) => [...prevData, response.data.data[i]]);
        
      //    }for

    }
    console.log(">>>>", response)
  }

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  const addCart = async (data) => {
    console.log("dataaaaaa", data);
    let newCart = {
      itemId: data._id,
      item: data.productName,
      itemPrice: data.productPrice,
      cartQuantity: cartQuantity,


    }

    let respons = await addCartItemsService(newCart)
  }

  const viewOne = async (data) => {
    console.log(">>", data)
    history.push({
      pathname: '/single',
      state: data
    })
  }

  useEffect(() => {
    getAllProducts()
  }, [selectedCategory])

  return (
    <div>
      <div>
        <Navbar/>
        <br></br>
        <br></br>
      </div>

      <br></br>
      <div className='container'>

        <Left>
          <div style={{


          }}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categories"
              // menuVariant="dark"
              onSelect={(e) => setSelectedCategory(e)}
            >
              <NavDropdown.Item href="/catelog" eventKey="1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

            </NavDropdown>
          </div>
        </Left>

        {console.log("aa>>>>", productDetails)}

        
        {productDetails.length == 0 ?

<Row xs={1} md={5} className="g-4 mb-5">
  <h2>Loading ...</h2>
</Row>
:
<Row xs={1} md={5} className="g-4 mb-5">
  {
    productDetails.length != 0 && productDetails.map((products) => {
      return (
        <Col>
          {console.log("image>>>", products)}
          <Card className='mb-4' >
            <Card.Img variant="top" style={{ maxWidth: '300px', maxHeight: '150px'}} src={products.productImages.length != 0 ? products.productImages[0].url : "images/img.jpg"} />
            <Card.Body>
              <Card.Title onClick={() => { viewOne(products) }} style={{ textAlign: 'start' }}>{products.productName}</Card.Title>
              <Card.Text style={{ textAlign: 'start' }}>
                {products.productDescription}
              </Card.Text>
              <Card.Title style={{ textAlign: 'start', color: 'red' }}> Rs.{products.productPrice}.00   <FiShoppingCart style={{ fontSize: '25px', marginLeft: '20px', color: 'black' }} onClick={() => { addCart(products) }} />
                <FiHeart style={{ fontSize: '25px', marginLeft: '20px', color: 'black' }} /></Card.Title>

            </Card.Body>
            <Card.Footer>

              <div className='App'>

                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  size={20}
                  label
                  transition
                  fillColor='orange'
                  emptyColor='gray'
                  className='foo' // Will remove the inline style if applied
                />
                {/* Use rating value */}
                {rating}

              </div>

            </Card.Footer>
          </Card>
        </Col>
      )
    })
  }

</Row>
}




      </div>
      {/* </CardGroup> */}
          <br></br>
          <Footer/>
    </div>
  )
}

export default ProductCatelog;