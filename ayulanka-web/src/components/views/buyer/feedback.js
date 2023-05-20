import React, { useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Swal from "sweetalert2";
import Navbar from "../Home widgets/Navbar";
import Footer from "../Home widgets/Footer";


export default function Feedback() {
    const [FeedbackType, setFeedbackType] = useState("");
    const [Category, setCategory] = useState("");
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Message, setMessage] = useState("");

    function sendData(e) {
        e.preventDefault();
        console.log("send Data");

        axios.post(`http://localhost:3001/api/buyer/addFeedback`, {
            FeedbackType,
            Category,
            Name,
            Address,
            Email,
            MobileNumber,
            Message
        }).then(() => {
            // alert("Feedback Added");
            Swal.fire({
                title:'Thank You!',
                text:'Your Feedback Added Succesfully',
                icon:'success',
                showConfirmButton: false,
                timer:2000
            }).then(()=>{
                window.location.reload();
            })
            
        }).catch((err) => {
            console.log("error")
            alert(err)
        })
    }


    return (
        <div>
            <div>
                <Navbar/>
                <br></br>
                <br></br>
            </div>
            <div className="container-fluid" style={{backgroundImage: "url(https://mysoreayurveda.in/wp-content/uploads/2020/10/jar.jpg)",backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100%" }}>
            <div className="container" style={{ textAlign: 'start'}}>
                <div className="p-5  col-lg-10 col-xl-7 flex-row mx-auto px-0">
                    {/* <Header></Header> */}
                    {/* <div class="py-5 text-center">
                        <h2>Your FeedBack</h2>
                    </div> */}
{/* <div className="row p-5"> */}
                    <Card style={{ padding: '20px' , backdropFilter: "blur(10px)", backgroundColor: "rgba(275, 275, 275, 0.550)", borderRadius: "15px"}} className="p-5 ms-auto me-auto pt-4 pb-0 mt-2  shadow-sm">
                        <Card.Header><Card.Title className="py-2 text-center ">
                            <h2>
                                Your FeedBack
                                </h2>
                            </Card.Title></Card.Header>
                        
                        <Card.Body>
                            <div className="container">
                                <div className="row p-3">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <form id="contact-form" className="form" role="form" onSubmit={sendData}>

                                            <div class="form-group col-sm">
                                                <label class="form-label" for="type">FeedBack Type</label>
                                                <select
                                                    id="type"
                                                    className="form-control"
                                                    tabindex="1"
                                                    required
                                                    placeholder="Choose"
                                                    onChange={(e) => {
                                                        setFeedbackType(e.target.value); // assign value
                                                    }}
                                                >
                                                    <option id="choose1">Choose</option>
                                                    <option value="Comment">Comment</option>
                                                    <option value="Complaint">Complaint</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-sm">
                                                <label class="form-label" for="category">Category</label>
                                                <select
                                                    id="category"
                                                    className="form-control"
                                                    tabindex="2"
                                                    placeholder="Choose"
                                                    required
                                                    onChange={(e) => {
                                                        setCategory(e.target.value); // assign value
                                                    }}
                                                >
                                                    <option id="choose1">Choose</option>
                                                    <option value="General Inquiry">General Inquiry</option>
                                                    <option value="Technical">Technical</option>
                                                    <option value="Order Related">Order Related</option>
                                                    <option value="Payment Related">Payment Related</option>
                                                    <option value="Product Availability">Product Availability</option>
                                                    <option value="Product Quality">Product Quality</option>
                                                    <option value="Pricing">Pricing</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-sm">
                                                <label class="form-label" for="name">Name </label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Buyer Name"
                                                    tabindex="3"
                                                    required
                                                    onChange={(e) => {
                                                        setName(e.target.value); // assign value
                                                    }}
                                                />
                                            </div>

                                            <div class="form-group col-sm">
                                                <label class="form-label" for="address">Address </label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="address"
                                                    name="address"
                                                    placeholder="Default Address"
                                                    // tabindex="1"
                                                    required
                                                    onChange={(e) => {
                                                        setAddress(e.target.value); // assign value
                                                    }}
                                                />
                                            </div>

                                            <div class="form-group col-sm">
                                                <label class="form-label" for="email">Email </label>
                                                <input
                                                    type="email"
                                                    class="form-control formInput"
                                                    id="email"
                                                    name="email"
                                                    placeholder="E-mail"
                                                    tabindex="4"
                                                    required
                                                    onChange={(e) => {
                                                        console.log("set email");
                                                        setEmail(e.target.value); // assign value
                                                    }}
                                                />
                                            </div>

                                            <div class="form-group col-sm">
                                                <label class="form-label" for="mobile">Mobile No. </label>
                                                <input
                                                    type="text"
                                                    class="form-control formInput"
                                                    id="mobile"
                                                    name="mobile"
                                                    placeholder="Mobile No."
                                                    tabindex="5"
                                                    required
                                                    onChange={(e) => {
                                                        setMobileNumber(e.target.value); // assign value
                                                    }}
                                                />
                                            </div>


                                            <div class="form-group col-sm">
                                                <label class="form-label" for="message">Message</label>
                                                <textarea
                                                    class="form-control formInput"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    tabindex="5"
                                                    required
                                                    onChange={(e) => {
                                                        setMessage(e.target.value); //assign value
                                                    }}
                                                />

                                            </div>

                                            <div className="row mt-2 mb-3">
                                                <div className="col py-3 text-center">
                                                    <button type="submit" className="btn  btn-success">
                                                        Save
                                                    </button>
                                                </div>
                                                <div className="col py-3 text-center">
                                                    <button type="reset" className="btn btn-danger">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
            <br></br><br></br>
          <Footer/>
        </div>
    )
}