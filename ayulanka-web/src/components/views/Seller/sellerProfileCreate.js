import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Header from "./header";
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import country from '../../../country.json';
import AllStates from '../../../states.json';


const SellerProfileCreate = () => {

    const [SellerName, setSellerName] = useState("");
    const [ShopName, setShopName] = useState("");
    const [Email, setEmail] = useState("");
    const [ShopAddress, setShopAddress] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [ZipCode, setZipCode] = useState("");
    const [image, setImage] = useState([]);
    const [SecondShopAddress, setSecondShopAddress] = useState("");
    const [Countryid, setCountryid] = useState("");
    const [selectState, setSelectState] = useState([]);
    const [SelectCountry, setSelectCountry] = useState("");
    const [NewSelectState, setNewSelectState] = useState("");
    let stateArray = [];


    //handle and convert it in base 64
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }

    }
    const handlecountry = (event) => {
        const getcoutryid = event.target.value;
        setCountryid(getcoutryid);
        for (let i = 0; i < country.length; i++) {
            if (country[i].country_id === getcoutryid) {
                setSelectCountry(country[i].country_name)
            }
        }
        event.preventDefault();
    }
    const handleState = (event) => {
        const getStateid = event.target.value;
        setNewSelectState(getStateid);
        event.preventDefault();
    }

    useEffect(() => {

        for (let i = 0; i < AllStates.length; i++) {
            if (AllStates[i].country_id === Countryid) {
                console.log(AllStates[i])
                stateArray.push(AllStates[i]);
            }

        }
        setSelectState(stateArray)


    }, [Countryid])


    async function sendData(e) {
        e.preventDefault();

        const newSeller = {
            SellerName,
            ShopName,
            ShopAddress,
            SecondShopAddress,
            NewSelectState,
            SelectCountry,
            ZipCode,
            Email,
            MobileNumber,
            image,


        }

        let response = await createSellerService(newSeller);
        if (response.ok) {
            Swal.fire({
              icon: "warning",
              title: "Item Added !",
              showConfirmButton: false,
              timer: 2500,
            });
            window.location.reload();
          }

        // axios.post(`http://localhost:5000/seller/add`, newSeller).then(() => {

        //     alert("booking Added")

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
                <br></br>
                <br></br>


                <div class="d-flex justify-content-center">
                <div class="card m-5 p-5">
                <Row >
                    <Col >

                        <Form onSubmit={sendData} className='form-reg text-left'>
                            <center>
                            <h4 className='reg'>Seller Registration</h4>
                            </center>
                            

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Seller Name</Form.Label>
                                <Form.Control type="name" placeholder="Name"
                                    onChange={(e) => {
                                        setSellerName(e.target.value);  //asign values
                                    }}

                                    required />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formShopName">
                                <Form.Label>Shop Name</Form.Label>
                                <Form.Control type="ShopName" placeholder="ShopName"
                                    onChange={(e) => {
                                        setShopName(e.target.value);  //asign values
                                    }}

                                    required />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"

                                    onChange={(e) => {
                                        setEmail(e.target.value);  //asign values
                                    }}

                                    required />

                                {Email &&
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                }

                            </Form.Group>

                            <Row>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicShopAddress">
                                        <Form.Label>Address </Form.Label>
                                        <Form.Control type="text" placeholder="Pick Up"

                                            onChange={(e) => {
                                                setShopAddress(e.target.value);  //asign values
                                            }}
                                            required />
                                    </Form.Group>

                                </Col>

                                <Col>

                                    <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control type="MobileNumber" placeholder="MobileNumber"
                                            onChange={(e) => {
                                                setSecondShopAddress(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label className="mb-2">Country</label>
                                    <select name="country" className="form-control" onChange={(e) => handlecountry(e)}>
                                        <option>--Select Country--</option>
                                        {
                                            country.map((getcon) => (
                                                <option key={getcon.country_id} value={getcon.country_id}> {getcon.country_name}</option>
                                            ))
                                        }

                                    </select>

                                </Col>
                                <Col>
                                    <label className="mb-2">State</label>
                                    <select name="state" className="form-control" onChange={(e) => handleState(e)}>
                                        <option>--Select State--</option>
                                        {
                                            selectState.map((st) => (
                                                <option key={st.state_id} value={st.state_id}>{st.state_name}</option>
                                            ))
                                        }
                                    </select>


                                </Col>
                                <Col>

                                    <Form.Group className="mb-3" controlId="formZipCode">
                                        <Form.Label>ZipCode</Form.Label>
                                        <Form.Control type="zipcode" placeholder="Zipcode"
                                            onChange={(e) => {
                                                setZipCode(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicBusService">
                                        <Form.Label>MobileNumber</Form.Label>
                                        <Form.Control type="MobileNumber" placeholder="MobileNumber"
                                            onChange={(e) => {
                                                setMobileNumber(e.target.value);  //asign values
                                            }}

                                            required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form4Example2">Image</label>
                                        <input onChange={handleImage} type="file" id="formupload" name="image" className="form-control" />

                                    </div>
                                </Col>
                            </Row>
                            <Row className='justify-content-center text-center'>
                                <Col className="h-50 md-3 center-block">
                                    <img className="img-fluid" src={image} alt="" />
                                </Col>

                            </Row>
                            <Row >
                                <Col>
                                    <div className='text-right mr-5'>
                                        <Button className='w-25 booking-btn align-right' variant="success" type="submit">
                                            Add Booking
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

export default SellerProfileCreate