import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Announcement from '../../views/Home widgets/Announcement'
import Navbar from '../../views/Home widgets/Navbar'
import styles from './payment.module.scss';
import Button from 'react-bootstrap/Button';
import PhoneInput from 'react-phone-input-2'
import CardForm from './paymentComponents/CardForm';
import "react-credit-cards/es/styles-compiled.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./styles.css";
import Results from './paymentComponents/Results';
import { createOrder, createDilerveryForOrderService } from '../../../services/orderService';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import { createPayment } from '../../../services/paymentService';
import Swal from 'sweetalert2'
import Footer from '../../views/Home widgets/Footer'



const Payment = (props) => {

    console.log("Payment>>", props.history.location.state)

    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)

    const [isLoading, setLoading] = useState(false)

    const [isSuccess, setIsSuccess] = useState(true)

    const [singleProductData, setSingleProductData] = useState(props.history.location.state)

    const [totalPayment, setTotalPaymet] = useState()


    //delivery data
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [country, setCountry] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [email, setEmail] = useState("")
    const [contactNo, setContactNo] = useState("");
    const [deliverService, setDeliverService] = useState()


    ///payment data
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [submittedData, setSubmittedData] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedData({ name, cardNumber, expiry, cvc });
    }

    const PLATFORM_COMMISION_FEE = 0.05


    const totalPaymentCalculate = () => {

        console.log("singleProductData.length", singleProductData.length)
        let productsPayment = 0
        for (let index = 0; index < singleProductData.length; index++) {


            let ProductPayment = singleProductData[index].productDetails.productPrice * singleProductData[index].selectedQunatity
            console.log("singleProducPrice", singleProductData[index].selectedQunatity)
            productsPayment = productsPayment + ProductPayment
        }

        let Commision_Payment = parseFloat(productsPayment).toFixed(2) * PLATFORM_COMMISION_FEE
        let Total_Payment = Commision_Payment + productsPayment
        setTotalPaymet(Total_Payment)
        console.log("Tooooo>>", parseFloat(Total_Payment).toFixed(2))
    }

    // let ProductPayment = singleProductData.productDetails.productPrice * singleProductData.selectedQunatity
    // const Total_Payment = parseFloat(ProductPayment).toFixed(2) * PLATFORM_COMMISION_FEE

    // console.log("Tooooo>>", Total_Payment)


    const makePayment = async () => {
        setLoading(true)

        const orderId = uuidv4();

        console.log("uuid>>>>", orderId)

        let order = {
            street: street,
            city: city,
            province: province,
            country: country,
            postalCode: postalCode,
            email: email,
            contactNo: contactNo,
            deliverService: deliverService,
            name: name,
            cardNumber: cardNumber,
            expiry: expiry

        }

        let deliveryObj = {
            orderID: orderId,
            street: street,
            city: city,
            province: province,
            country: country,
            postalCode: postalCode,
            email: email,
            phone: contactNo,
        }



        for (let index = 0; index < singleProductData.length; index++) {

            let orderObj = {
                orderID: orderId,
                productID: singleProductData[index].productDetails._id,
                sellerID: singleProductData[index].productDetails.shop,
                deliveryServiceID: deliverService,
                isOnlinePayment: true,
                unitPrice: singleProductData[index].productDetails.productPrice,
                quantity: singleProductData[index].selectedQunatity,
                total: 100

            }

            let reponse = await createOrder(orderObj)

            console.log("respOrder>>", reponse)

            Swal.fire({
                icon: "success",
                title: "Your Order Successfully Done !",
                showConfirmButton: false,
                timer: 2500,
              });

              window.location.replace("http://localhost:3000/catelog");

        }

        const date = new Date()

        let paymentObj = {
            cardNo: cardNumber,
            cardHolder: name,
            date: date,
            orderID: orderId
        }

        // let reponse = await createOrder(orderObj)
        // if (reponse.ok) {
        let dilresponse = await createDilerveryForOrderService(deliveryObj)
        console.log("dilresponse>>", dilresponse)

        if (dilresponse.ok) {
            let paymentResponse = await createPayment(paymentObj)
            console.log("paymentResponse>>", paymentResponse)

        }

        setLoading(false)
        // }
    }



    const increaseStepFunc = () => {

        setStep(step + 1)
    }

    const decreaseStepFunc = () => {
        setStep(step - 1)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedData({ name, cardNumber, expiry, cvc });
    }
    const selectDelvery = (value) => {
        setDeliverService(value)
    }

    useEffect(() => {

        totalPaymentCalculate()

        switch (step) {
            case 1:
                setProgress(0)
                break;
            case 2:
                setProgress(30)
                break;
            case 3:
                setProgress(75)
                break;
            case 4:
                setProgress(100)
                break;

            default:
                break;
        }
    }, [step]);

    useEffect(() => {
        setSubmittedData({ name, cardNumber, expiry, cvc })
    }, [name, cardNumber, expiry, cvc])

    return (
        <div>
            <div>
                {/* <Announcement /> */}
                <Navbar />
                <br></br>
                <br></br>
            </div>

            {/* <div style={{ textAlign: 'start', backgroundColor: '#e3e2e5', paddingBottom: 50 }}>

                <div style={{ marginLeft: 50, marginRight: 50, }}>
                    <div class="py-5 text-center">

                        <h2>Payment form</h2>
                    </div> */}

            <div className="content-body">
                <div className="body">
                    <div className={styles.addReservation_container} >
                        <div className="progress mb-5">
                            <div className={styles.progress_bar} role="progressbar" style={{ width: `${progress}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="99">{progress}%</div>
                        </div>
                        {step === 1 && (
                            <div className={styles.step_container} class="container" >
                                <h2 className='mb-5'>Order Details</h2>
                                {singleProductData.map((product) => {
                                    return (
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src={product.productDetails.productImages.length != 0 ? product.productDetails.productImages[0].url : "images/img.jpg"} style={{ maxWidth: '70px', maxHeight: '70px' }} alt="Product" />

                                            </div>
                                            <div className="col-md-3">
                                                <div className='pt-4'>
                                                    <strong for="last" >{product.productDetails.productName}</strong>

                                                </div>

                                            </div>
                                            <div className="col-md-3">
                                                <div className='pt-4'>
                                                    <strong for="last" >LKR.{product.productDetails.productPrice * product.selectedQunatity}.00</strong>

                                                </div>

                                            </div>

                                            <div className="col-md-3">
                                                <div className='pt-4'>
                                                    <strong for="last" >{product.selectedQunatity}</strong>

                                                </div>

                                            </div>
                                            <hr className='mt-3 '></hr>

                                        </div>
                                    )
                                })}







                                {/* <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation from</label>
                                            <input type="date" className="form-control" id="fromdate" placeholder="from" value={dateFrom} onChange={(e) => { setDateFrom(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation to</label>
                                            <input type="date" className="form-control" id="todate" placeholder="to" value={dateTo} onChange={(e) => { setDateTo(e.target.value) }} />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )}

                        {step === 2 && (
                            <div className={styles.step_container} class="container" >
                                <h2 className='mb-5'>Delivery Details</h2>

                                <div className='row mb-4'>



                                    <div className='col-md-6'>
                                        <Card style={{ minHeight: '104px' }}>
                                            {/* <Card.Header>Quote</Card.Header> */}
                                            <Card.Body>
                                                <blockquote className="blockquote mb-0">
                                                    {console.log(">>>", deliverService)}
                                                    <div className='row '>
                                                        <div className='col-1 pl-3 pt-4'>
                                                            <Form.Check
                                                                inline
                                                                onChange={() => selectDelvery(1)}
                                                                name="group1"
                                                                type={"radio"}
                                                                id={`inline-radio-1`}
                                                            />
                                                        </div>

                                                        <div className='col-2 pl-4'>
                                                            <img src={"images/dhl2.png"} style={{ maxWidth: '60px', maxHeight: '70px' }} alt="Product" />

                                                        </div>
                                                        <div className='col pt-3'>
                                                            <strong>DHL Delivery Service</strong>
                                                        </div>
                                                    </div>

                                                </blockquote>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-md-6'>
                                        <Card style={{ minHeight: '100px' }}>
                                            {/* <Card.Header>Quote</Card.Header> */}
                                            <Card.Body>
                                                <blockquote className="blockquote mb-0">

                                                    <div className='row '>
                                                        <row className='col-1 pl-3 pt-4'>
                                                            <Form.Check
                                                                inline
                                                                onChange={() => selectDelvery(2)}
                                                                name="group1"
                                                                type={"radio"}
                                                                id={`inline-radio-2`}
                                                            />
                                                        </row>

                                                        <div className='col-2'>
                                                            <img src={"images/ups.png"} style={{ maxWidth: '70px', maxHeight: '70px' }} alt="Product" />

                                                        </div>
                                                        <div className='col pt-3'>
                                                            <strong>UPS Delivery Service</strong>
                                                        </div>
                                                    </div>

                                                </blockquote>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="first" className='align-left'>Street</label>
                                            <input type="text" className="form-control" placeholder="" id="first" value={street} onChange={(e) => { setStreet(e.target.value) }} />
                                        </div>
                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="first" className='align-left'>City</label>
                                            <input type="text" className="form-control" placeholder="" id="first" value={city} onChange={(e) => { setCity(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="first" className='align-left'>Province</label>
                                            <input type="text" className="form-control" placeholder="" id="first" value={province} onChange={(e) => { setProvince(e.target.value) }} />
                                        </div>
                                    </div>



                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="first" className='align-left'>Country</label>
                                            <input type="text" className="form-control" placeholder="" id="first" value={country} onChange={(e) => { setCountry(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="first" className='align-left'>PostalCode</label>
                                            <input type="text" className="form-control" placeholder="" id="first" value={postalCode} onChange={(e) => { setPostalCode(e.target.value) }} />
                                        </div>
                                    </div>




                                </div>
                                <div className='row '>
                                    <div className="col-md-6">

                                        <div className="form-group">
                                            <label for="phone">Phone Number</label>
                                            {/* <input type="tel" className="form-control" id="phone" placeholder="phone" value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} /> */}
                                            <PhoneInput specialLabel="" inputStyle={{ width: "100%" }} country={'lk'} value={contactNo} enableAreaCodes="true" onChange={(e) => { setContactNo(e) }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="email">Email <span class="text-muted">(Optional)</span></label>
                                        <input type="email" class="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                </div>






                                {/* <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation from</label>
                                            <input type="date" className="form-control" id="fromdate" placeholder="from" value={dateFrom} onChange={(e) => { setDateFrom(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation to</label>
                                            <input type="date" className="form-control" id="todate" placeholder="to" value={dateTo} onChange={(e) => { setDateTo(e.target.value) }} />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )}
                        {step === 3 && (
                            <div className={styles.step_container} class="container">
                                <h2 className='mb-4'>Payment Details</h2>
                                <div class="row">
                                    <div className="col-lg-12">
                                        {/* <!-- credit card info--> */}
                                        <div id="credit-card">
                                            <div className="form-group">
                                                <label>Payment amount</label>
                                                <h2> LKR.{totalPayment}.00</h2>
                                                <sup>* 5% Commision Charge Was Added As Platform Subscription Fee</sup>
                                            </div>
                                            <div className="form-group"> <label for="cardOwner">
                                                <h6>Card Owner</h6>
                                            </label>
                                                <input type="text" name="cardOwner" placeholder="Card Owner Name" required class="form-control "
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} /> </div>
                                            <div className="form-group"> <label for="cardNumber">
                                                <h6>Card number</h6>
                                            </label>
                                                <div className="input-group">
                                                    <input type="text" name="cardNumber" maxLength={16} minLength={16} placeholder="**** **** **** ****" className=" form-control " required
                                                        value={cardNumber}
                                                        onChange={(e) => setCardNumber(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="form-group"> <label><span className="hidden-xs">
                                                        <h6>Expiration Date</h6>
                                                    </span></label>
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control expiration-date-field"
                                                                placeholder="MM/YY"
                                                                value={expiry}
                                                                onChange={(e) => setExpiry(e.target.value)}
                                                            />
                                                            {/* <input type="number" placeholder="MM" name="" className="form-control" max={12} min={1} required
                                                                value={expiryMonth} onChange={(e) => { setExpiryMonth(e.target.value) }} />
                                                            <input type="number" placeholder="YY" name="" className="form-control" min={22} required value={expiryYear} onChange={(e) => { setExpiryYear(e.target.value) }} /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                        <h6>CVV <i className="fa fa-question-circle d-inline"></i></h6>
                                                    </label>
                                                        <input type="number" required className="form-control" max={999} min={1}
                                                            value={cvc}
                                                            onChange={(e) => setCvc(e.target.value)} /> </div>
                                                </div>
                                            </div>
                                            {/* <button
                                                type="submit"
                                                className="btn btn-primary btn-block"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </button> */}
                                            <hr />
                                            <Results data={submittedData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 4 && (
                            <div className={styles.step_container_step03} class="container" >
                                <h2 className='mb-3'>Summary</h2>


                                {singleProductData.map((product) => {
                                    return (
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src={product.productDetails.productImages.length != 0 ? product.productDetails.productImages[0].url : "images/img.jpg"} style={{ maxWidth: '70px', maxHeight: '70px' }} alt="Product" />

                                            </div>
                                            <div className="col-md-3">
                                                <div className='pt-4'>
                                                    <strong for="last" >{product.productDetails.productName}</strong>

                                                </div>

                                            </div>
                                            <div className="col-md-3">
                                                <div className='pt-4'>
                                                    <strong for="last" >LKR.{product.productDetails.productPrice * product.selectedQunatity}.00</strong>

                                                </div>

                                            </div>

                                            <div className="col-md-3">
                                                <div className='pt-4'>
                                                    <strong for="last" >{product.selectedQunatity}</strong>

                                                </div>

                                            </div>
                                            <hr className='mt-3 '></hr>

                                        </div>
                                    )
                                })}

                                <div className="row mb-2">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="first">Total Payment</strong>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group text-left">
                                            <div className='row'>
                                                <label for="company ">LKR.{totalPayment}.00</label>
                                                <sub>* 5% Commision Charge Was Added As Platform Subscription Fee</sub>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="first">Delivery Service</strong>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group text-left">
                                            {deliverService == 1 ?
                                                <div className='row'>
                                                    {/* <label for="company ">{deliverService == 1 ? "DHL Delivery Service" : "UPS Delivery Service"}</label> */}
                                                    <div className='row'>
                                                        <div className='col-1'>
                                                            <img src={"images/dhl2.png"} style={{ maxWidth: '40px', }} alt="Product" />

                                                        </div>
                                                        <div className='col '>
                                                            <label>DHL Delivery Service</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className='row'>
                                                    {/* <label for="company ">{deliverService == 1 ? "DHL Delivery Service" : "UPS Delivery Service"}</label> */}
                                                    <div className='row'>
                                                        <div className='col-1'>
                                                            <img src={"images/ups.png"} style={{ maxWidth: '40px', }} alt="Product" />

                                                        </div>
                                                        <div className='col '>
                                                            <label>UPS Delivery Service</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            }

                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="first">Address</strong>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group text-left">
                                            <label for="company ">{street} , {city} , {province} , {country} ,{postalCode}</label>
                                        </div>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="first">Payment Details</strong>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group text-left">
                                            <label for="company">Card Holder's Name : {name}</label>
                                            <br></br>
                                            <label for="company">Card Number : {cardNumber}</label>

                                        </div>
                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <strong for="first">Contact Details</strong>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group text-left">
                                            <label for="company ">Contact Number : +{contactNo}</label>
                                            <br></br>
                                            <label for="company ">Email : {email}</label>
                                        </div>
                                    </div>


                                </div>





                                {/* <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation from</label>
                                            <input type="date" className="form-control" id="fromdate" placeholder="from" value={dateFrom} onChange={(e) => { setDateFrom(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Reservation to</label>
                                            <input type="date" className="form-control" id="todate" placeholder="to" value={dateTo} onChange={(e) => { setDateTo(e.target.value) }} />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        )}

                        <div className={styles.buttongroup}>
                            {((step === 2) || (step === 3)) &&
                                <Button variant="warning w-25" onClick={() => { decreaseStepFunc() }}>Previous</Button>

                            }
                            {((step === 1) || (step === 2)) &&
                                <Button variant="success w-25" onClick={() => { increaseStepFunc() }}>Next</Button>
                            }
                            {step === 3 &&
                                <Button variant="success w-25" onClick={() => { increaseStepFunc(); }}>Submit</Button>

                            }
                            {step === 4 &&


                                <Button variant="success w-25" onClick={() => { makePayment() }}>
                                    {isLoading ?
                                        <span>
                                            <div class="spinner-border text-light" role="status">

                                            </div>
                                            <span className='m-5'>Loading...</span>
                                        </span>

                                        :
                                        "Proceed  To Payment"
                                    }
                                </Button>

                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* 
                </div>

            </div> */}
        <br></br>
        {/* <Footer/> */}
        </div >
    )
}

export default Payment