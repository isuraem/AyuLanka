import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {createProductService} from '../../../services'
import Button from 'react-bootstrap/Button';
import categories from '../../../categories.json';
import { Switch } from 'antd';
import Header from "./header";
import Swal from 'sweetalert2'

const SellerProductCreate = () => {
    const [delivery, setDelivery] = useState(false);
    const [productTitle, setproductTitle] = useState("");
    const [productName, setproductName] = useState("");
    const [productCode, setproductCode] = useState("");
    const [productPrice, setproductPrice] = useState("");
    const [productDescription, setproductDescription] = useState("");
    const [productQuantity, setproductQuantity] = useState("");
    const [image, setImage] = useState([]);
    const [productDiscount, setproductDiscount] = useState("");
    const [SelectCategory, setSelectCategory] = useState("");

    //handle and convert it in base 64
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage((prevFriends) => [...prevFriends, reader.result]);
        }
    }

    const handlecategory = (event) => {
        const getcategoryid = event.target.value;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].category_id === getcategoryid) {
                setSelectCategory(categories[i].category_name)
            }
        }
        event.preventDefault();
    }

    const toggler = () => {
        delivery ? setDelivery(false) : setDelivery(true);
    }

    const sendData = async (e) => {
        e.preventDefault();
        const newSeller = {
            productTitle,
            productName,
            productPrice,
            productDiscount,
            productQuantity,
            productCode,
            productDescription,
            SelectCategory,
            image,
            delivery,
        }
        let response = await createProductService(newSeller);
        if (response.ok) {
            Swal.fire({
              icon: "warning",
              title: "Item Added !",
              showConfirmButton: false,
              timer: 2500,
            });
            window.location.reload();
          }
        // axios.post(`http://localhost:5000/product/add`, newSeller).then(() => {
        //     window.location.reload();
        // }).catch((err) => {
        //     alert(err)
        // })
    }

    return (
        <div>
            <Header />
            <div>
                <br></br>

                <div class="d-flex justify-content-center">
                    <div class="card m-5 p-5">
                        <Row >
                            <Col >
                                <Form onSubmit={sendData} className='form-reg text-left'>
                                    <center>
                                        <h4 className='reg'>Add Product</h4>
                                    </center>

                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Product Title</Form.Label>
                                        <Form.Control type="text" placeholder="productTitle"
                                            onChange={(e) => {
                                                setproductTitle(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formproductName">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control type="text" placeholder="productTitle"
                                            onChange={(e) => {
                                                setproductName(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicproductCode">
                                        <Form.Label>Product Code</Form.Label>
                                        <Form.Control type="text" placeholder="Product Code"

                                            onChange={(e) => {
                                                setproductCode(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>

                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicproductPrice">
                                                <Form.Label>Product Price </Form.Label>
                                                <Form.Control type="number" placeholder="Pick Up"

                                                    onChange={(e) => {
                                                        setproductPrice(e.target.value);  //asign values
                                                    }}
                                                    required />
                                            </Form.Group>
                                        </Col>
                                        <Col>

                                            <Form.Group className="mb-3" controlId="formBasicproductDescription">
                                                <Form.Label>Product Discount</Form.Label>
                                                <Form.Control type="number" placeholder="ProductDiscount"
                                                    onChange={(e) => {
                                                        setproductDiscount(e.target.value);  //asign values
                                                    }}

                                                    required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label className="mb-2">Category</label>
                                            <select name="category" className="form-control" onChange={(e) => handlecategory(e)}>
                                                <option>--Select Category--</option>
                                                {
                                                    categories.map((getcon) => (
                                                        <option key={getcon.category_id} value={getcon.category_id}> {getcon.category_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formproductQuantity">
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control type="number" placeholder="Quantity"
                                                    onChange={(e) => {
                                                        setproductQuantity(e.target.value);  //asign values
                                                    }}

                                                    required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Product Description</Form.Label>
                                            <Form.Control as="textarea" rows={3}
                                                onChange={(e) => {
                                                    setproductDescription(e.target.value);  //asign values
                                                }} />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example2">Image</label>
                                                <input onChange={handleImage} type="file" id="formupload" name="image" className="form-control" />

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ width: "10px" }}>
                                            <Switch onClick={toggler} />
                                            <span className='ml-3 mt-1'>Cash on delivery</span>
                                        </Col>
                                    </Row>
                                    <Row className='mw-75 justify-content-center text-center'>
                                        <div className='d-flex flex-row'>
                                            {
                                                image.map((images) => (
                                                    <img style={{ width: "100px", height: "200px" }} src={images} />
                                                ))
                                            }
                                        </div>
                                        {/* <img className="img-fluid" src={image} alt="" /> */}
                                    </Row>
                                    <Row >
                                        <Col>
                                            <div className='text-right mr-2'>
                                                <Button className='w-50 booking-btn align-right' variant="success" type="submit">
                                                    Add Product
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
                <br></br>



            </div>



        </div >
    )
}

export default SellerProductCreate