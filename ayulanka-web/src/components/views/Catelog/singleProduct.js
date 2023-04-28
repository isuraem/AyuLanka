import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { QuantityPicker } from 'react-qty-picker';
import Badge from 'react-bootstrap/Badge';
import { useLocation, useHistory } from "react-router-dom";
import Footer from '../../views/Home widgets/Footer'
import Navbar from '../../views/Home widgets/Navbar'

const SingleProduct = (props) => {

  const [productDetails, setProductDetails] = useState(props.history.location.state)
  const [selectedQunatity, setSelectedQuntity] = useState(0)

  let history = useHistory();
  let productDataArray = []

  const onClickBuyNow = async () => {

    let productData = {
      productDetails: productDetails,
      selectedQunatity: selectedQunatity
    }

    productDataArray.push(productData)

    history.push({
      pathname: '/payment',
      state: productDataArray
    })
  }

  console.log(">>>", productDetails)
  return (
    <div style={{ background: '#eff0f5' }}>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <Container>
        <Card style={{ borderBlockStyle: 'groove' }}>
          <Row>
            <Col>
              <img src={productDetails.productImages.length != 0 ? productDetails.productImages[0].url : "images/img.jpg"} style={{ maxWidth: '400px', maxHeight: '500px' }} alt="Product" />
            </Col>
            <Col xs={5}>
              <Card style={{ borderRadius: 0 }}>
                <Card.Header>
                  <div style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>
                    {productDetails.productName}
                  </div>
                  <div style={{ color: '#6c757d', fontSize: '16px', marginBottom: '10px' }}>by [seller name]</div>
                  <div style={{ color: '#fbbc05', marginBottom: '10px' }}>
                    <span className="mr-2">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="mr-2">
                      <i className="far fa-star"></i>
                    </span>
                    (4.0)
                  </div>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ fontSize: '18px', paddingTop: '20px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Price and description</div>
                    <div style={{ marginBottom: '10px' }}>
                      <span style={{ fontWeight: 'bold', color: '#3399a3' }}>LKR.{productDetails.productPrice}.00</span>
                      <span style={{ color: '#6c757d', marginLeft: '10px' }}>Discount: LKR.{productDetails.productDiscount}.00</span>
                    </div>
                    <div style={{ color: '#6c757d' }}>Free shipping on orders over LKR. 100.00</div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Badge bg={productDetails.productQuantity == 0 ? "danger" : "success"}>
                      {productDetails.productQuantity == 0 ? "Not Available" : "Available"} <Badge bg="secondary">{productDetails.productQuantity == 0 ? "0" : productDetails.productQuantity}</Badge>
                      <span className="visually-hidden">unread messages</span>
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs={5} style={{ fontSize: '18px', paddingTop: '15px' }}>
                        <div style={{ fontWeight: 'bold' }}>Quantity:</div>
                      </Col>
                      <Col xs={7}>
                        <QuantityPicker smooth min={0} onChange={setSelectedQuntity} />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="mb-2">
                      <Button
                        size="lg"

                        onClick={() => onClickBuyNow()}
                        style={{
                          marginLeft: '20px',
                          background: '#3399a3',
                          border: '#3399a3',
                          width: '180px',
                          borderRadius: '0',
                        }}
                      >
                        Buy Now
                      </Button>
                      <Button
                        size="lg"
                        style={{
                          marginLeft: '20px',
                          background: '#fbbc05',
                          border: '#fbbc05',
                          width: '80px',
                          borderRadius: '0',
                        }}
                      >
                        <FiHeart />
                      </Button>
                      <Button
                        size="lg"
                        style={{
                          marginLeft: '20px',
                          background: '#fbbc05',
                          border: '#fbbc05',
                          width: '80px',
                          borderRadius: '0',
                        }}
                      >
                        <FiShoppingCart />
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card className="border-0 shadow-sm mt-5 mb-5">
          <Card.Body>
            <Card.Title className="font-weight-bold fs-4">Customer Reviews</Card.Title>
            <div className="d-flex align-items-center">
              <span className="text-warning mr-2">
                <i className="fas fa-star"></i>
              </span>
              <span className="text-warning mr-2">
                <i className="fas fa-star"></i>
              </span>
              <span className="text-warning mr-2">
                <i className="fas fa-star"></i>
              </span>
              <span className="text-warning mr-2">
                <i className="fas fa-star"></i>
              </span>
              <span className="text-muted mr-2">
                <i className="far fa-star"></i>
              </span>
              (4.0)
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-muted mr-2">
                  <i className="far fa-star"></i>
                </span>
                <span className="text-muted">(3)</span>
              </div>
              <div className="progress" style={{ height: '15px', width: '60%' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-muted mr-2">
                  <i className="far fa-star"></i>
                </span>
                <span className="text-muted mr-2">(1)</span>
              </div>
              <div className="progress" style={{ height: '15px', width: '60%' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-muted mr-2">(2)</span>
              </div>
              <div className="progress" style={{ height: '15px', width: '60%' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-warning mr-2">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-muted mr-2">
                  <i className="far fa-star"></i>
                </span>
                <span className="text-muted mr-2">
                  <i className="far fa-star"></i>
                </span>
                <span className="text-muted mr-2">
                  <i className="far fa-star"></i>
                </span>
                <span className="text-muted mr-2">
                  <i className="far fa-star"></i>
                </span>
                <span className="text-muted">(0)</span>
              </div>
              <div className="progress" style={{ height: '15px', width: '60%' }}>
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <br></br>
      <Footer></Footer>
    </div>
  )
}

export default SingleProduct