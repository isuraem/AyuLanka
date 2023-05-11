import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import categories from '../../../categories.json';
import { updateProductService } from '../../../services/productService';
import { Switch } from 'antd'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const SellerProductCreate = ({ data }) => {
    const [productId,setProductId] = useState("");
    const [delivery, setDelivery] = useState(false);
    const [productTitle, setproductTitle] = useState("");
    const [productName, setproductName] = useState("");
    const [productCode, setproductCode] = useState("");
    const [productPrice, setproductPrice] = useState("");
    const [productDescription, setproductDescription] = useState("");
    const [productQuantity, setproductQuantity] = useState("");
    const [image, setImage] = useState([]);
    const [productDiscount, setproductDiscount] = useState("");
    const [productCategory, setproductCategory] = useState("");
    const [SelectCategory, setSelectCategory] = useState("");

    useEffect(() => {
        console.log(data)
        setProductId(data[0]._id)
        setDelivery(data[0].delivery);
        setproductTitle(data[0].productTitle);
        setproductName(data[0].productName);
        setproductCode(data[0].productPrice);
        setproductPrice(data[0].productPrice);
        setproductDescription(data[0].productDescription);
        setproductQuantity(data[0].productQuantity);
        setImage(data[0].image);
        setproductDiscount(data[0].productDiscount)
        setproductCategory(data[0].productCategory)


    }, [data])
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

    const sendData = async(e) => {
        e.preventDefault();
        const newProduct = {
            productId,
            productTitle,
            productName,
            productPrice,
            productDiscount,
            productQuantity,
            productCode,
            productDescription,
            productCategory,
            image,
            delivery,
        }

        let response = await updateProductService(newProduct);
        if (response.ok) {
            Swal.fire({
              icon: "warning",
              title: "Item Updated !",
              showConfirmButton: false,
              timer: 2500,
            });
            window.location.reload();
          }

        // axios.post(`http://localhost:5000/product/update`, newProduct).then(() => {
        //     window.location.reload();
        // }).catch((err) => {
        //     alert(err)
        // })
    }

    return (
        <div>
            <div>
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
                                        <Form.Control type="text" value={productTitle}
                                            onChange={(e) => {
                                                setproductTitle(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formproductName">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control type="text" value={productName}
                                            onChange={(e) => {
                                                setproductName(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicproductCode">
                                        <Form.Label>Product Code</Form.Label>
                                        <Form.Control type="text" value={productCode}

                                            onChange={(e) => {
                                                setproductCode(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>

                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicproductPrice">
                                                <Form.Label>Product Price </Form.Label>
                                                <Form.Control type="number" value={productPrice}

                                                    onChange={(e) => {
                                                        setproductPrice(e.target.value);  //asign values
                                                    }}
                                                    required />
                                            </Form.Group>
                                        </Col>
                                        <Col>

                                            <Form.Group className="mb-3" controlId="formBasicproductDescription">
                                                <Form.Label>Product Discount</Form.Label>
                                                <Form.Control type="number" value={productDiscount}
                                                    onChange={(e) => {
                                                        setproductDiscount(e.target.value);  //asign values
                                                    }}

                                                    required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formproductQuantity">
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control type="number" value={productQuantity}
                                                    onChange={(e) => {
                                                        setproductQuantity(e.target.value);  //asign values
                                                    }}

                                                    required />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            {/* <Form.Group className="mb-3" controlId="formproductQuantity">
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control type="number" placeholder="Quantity"
                                                    onChange={(e) => {
                                                        setproductQuantity(e.target.value);  //asign values
                                                    }}

                                                    required />
                                            </Form.Group> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Product Description</Form.Label>
                                            <Form.Control as="textarea" rows={3} value={productDescription}
                                                onChange={(e) => {
                                                    setproductDescription(e.target.value);  //asign values
                                                }} />
                                        </Form.Group>
                                    </Row>
                                    <Row >
                                        <Col>
                                            <div className='text-right mr-2'>
                                                <Button className='w-50 booking-btn align-right' variant="success" type="submit">
                                                    Update
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