import SellerProfileCreate from "./sellerProfileCreate";
import SellerProductCreate from "./sellerProductCreate";
import SellerAllProducts from "./sellerProducts";
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./header";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const SellerHome = () => {

    return (
        <div>
            <Header />
            <Row>
                <Col>
                    <img src="images/sellerHome.jpg" style={{
                        width: '1000px', height: '750px', marginLeft: '20px'
                    }} alt="logo" />
                </Col>
                <Col>
                    <h1 style={{ fontSize: "55px", marginTop: "100px" }}>Welcome !!!</h1>
                    <p style={{ fontSize: "30px", marginTop: "50px" }}>A high-quality image showcasing the <br />seller's products or services</p>
                    <p style={{ fontSize: "30px", marginTop: "50px" }}>A catchy tagline that represents the seller's <br /> brand and mission</p>
                    <button style={{ width: "150px", height: "50px" }} type="button" class="btn btn-outline-warning">Woohoo !</button>
                </Col>
            </Row>
            <Row>
                <h1 style={{ fontSize: "55px", marginTop: "10px" }}>Over Services</h1>
            </Row>
            <Row style={{marginTop: "30px" }}>
                <Col>
                <div class="card bg-light mb-3" style={{maxwidth: '16rem',height :'13rem'}}>
                    <div class="card-header"><h5 class="card-title">Add new products</h5></div>
                    <div class="card-body">
                        
                        <p class="card-text">The seller should be able to easily add new products to their store. This can be done by creating a form with input fields for product name, description, price, images, and other relevant details. The seller can then submit the form to add the product to their store.</p>
                    </div>
                </div>
                </Col>

                <Col>
                <div class="card bg-light mb-3" style={{maxwidth: '16rem',height :'13rem'}}>
                    <div class="card-header"><h5 class="card-title">Order management</h5></div>
                    <div class="card-body">
                        
                        <p class="card-text"> The seller should be able to manage their incoming orders, such as marking orders as shipped, cancelling orders, and refunding orders.</p>
                    </div>
                </div>
                </Col>
                <Col>
                <div class="card bg-light mb-3" style={{maxwidth: '16rem',height :'13rem'}}>
                    <div class="card-header"><h5 class="card-title">Payment processing</h5></div>
                    <div class="card-body">
                        
                        <p class="card-text"> The seller should have access to a payment processing system that allows them to receive payments for their products. This can be done using various payment gateway integrations in React, such as PayPal or Stripe</p>
                    </div>
                </div>
                </Col>
                <Col>
                <div class="card bg-light mb-3" style={{maxwidth: '16rem',height :'13rem'}}>
                    <div class="card-header"><h5 class="card-title">Sales promotions</h5></div>
                    <div class="card-body">
                        
                        <p class="card-text">The seller should be able to create and manage sales promotions, such as discount codes and limited-time offers, to attract more customers to their store.</p>
                    </div>
                </div>
                </Col>
            </Row>

        </div>
    )


}
export default SellerHome