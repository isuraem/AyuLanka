import React, { useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Home widgets/Navbar";
import Footer from '../Home widgets/Footer';
import { createBuyerService } from "../../../services/buyerService";

export default function Signup() {

    const [BuyerName, setName] = useState("");
    const [DOB, setDOB] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobile] = useState("");
    const [Password, setPassword] = useState("");
    const [Province, setProvince] = useState("");
    const [City, setCity] = useState("");
    const [Area, setArea] = useState("");
    const [Address, setAddress] = useState("");
    const [PostalCode, setPostalCode] = useState("");

    let history = useHistory();


    async function sendData(e) {
        e.preventDefault();
        console.log("send data");

        const newBuyer = {
            BuyerName,
            DOB,
            Gender,
            Email,
            MobileNumber,
            Password,
            Province,
            City,
            Area,
            Address,
            PostalCode
        };

        let response = await createBuyerService(newBuyer);
        if(response.ok){
            Swal.fire({
                title:'Success!',
                text:'Signup Succesfully',
                icon:'success',
                showConfirmButton: false,
                timer:2000
            }).then(()=>{
                history.push("/login");
            window.location.reload();
            })
        } else{
            const msgerr = err.response.data.status
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: `${msgerr}`,
                confirmButtonColor: '#1fc191',

            })
        }

        // axios.post("http://localhost:5000/buyer/addBuyer", {
        //     BuyerName,
        //     DOB,
        //     Gender,
        //     Email,
        //     MobileNumber,
        //     Password,
        //     Province,
        //     City,
        //     Area,
        //     Address,
        //     PostalCode
        // }).then(() => {
        //     Swal.fire({
        //         title:'Success!',
        //         text:'Signup Succesfully',
        //         icon:'success',
        //         showConfirmButton: false,
        //         timer:2000
        //     }).then(()=>{
        //         history.push("/login");
        //     window.location.reload();
        //     })
        // }).catch((err)=>{
            // const msgerr = err.response.data.status
            // Swal.fire({
            //     icon: 'warning',
            //     title: 'Oops...',
            //     text: `${msgerr}`,
            //     confirmButtonColor: '#1fc191',

            // })
        // })
            // alert("Buyer Added")
            // window.location.reload();
            
        // }).catch((err) => {
        //     console.log("error")
        //     alert(err)
        // })
    }

    // select city under province
    function searchCity() {
        console.log("search for city", Province);

        if (document.getElementById("province").value == "Central") {
            document.getElementById("c1").value = "Kandy";
            document.getElementById("c1").innerHTML = "Kandy";
            document.getElementById("c2").value = "Mathale";
            document.getElementById("c2").innerHTML = "Mathale";
            document.getElementById("c3").value = "Nuwara Eliya";
            document.getElementById("c3").innerHTML = "Nuwara Eliya";

        } else if (document.getElementById("province").value == "Eastern") {
            document.getElementById("c1").value = "Ampara";
            document.getElementById("c1").innerHTML = "Ampara";
            document.getElementById("c2").value = "Batticaloa";
            document.getElementById("c2").innerHTML = "Batticaloa";
            document.getElementById("c3").value = "Trincomalee";
            document.getElementById("c3").innerHTML = "Trincomalee";

        } else if (document.getElementById("province").value == "North Central") {
            document.getElementById("c1").value = "Anuradhapura";
            document.getElementById("c1").innerHTML = "Anuradhapura";
            document.getElementById("c2").value = "Polonnaruwa";
            document.getElementById("c2").innerHTML = "Polonnaruwa";

        } else if (document.getElementById("province").value == "Nothern") {
            document.getElementById("c1").value = "Jaffna";
            document.getElementById("c1").innerHTML = "Jaffna";
            document.getElementById("c2").value = "Kilinochchi";
            document.getElementById("c2").innerHTML = "Kilinochchi";
            document.getElementById("c3").value = "Mannar";
            document.getElementById("c3").innerHTML = "Mannar";
            document.getElementById("c4").value = "Mulativu";
            document.getElementById("c4").innerHTML = "Mulativu";
            document.getElementById("c5").value = "Vavuniya";
            document.getElementById("c5").innerHTML = "Vavuniya";

        } else if (document.getElementById("province").value == "North Western") {
            document.getElementById("c1").value = "Kurunegala";
            document.getElementById("c1").innerHTML = "Kurunegala";
            document.getElementById("c2").value = "Puttalam";
            document.getElementById("c2").innerHTML = "Puttalam";

        } else if (document.getElementById("province").value == "Sabaragamuwa") {
            document.getElementById("c1").value = "Kegalle";
            document.getElementById("c1").innerHTML = "Kegalle";
            document.getElementById("c2").value = "Ratnapura";
            document.getElementById("c2").innerHTML = "Ratnapura";

        } else if (document.getElementById("province").value == "Southern") {
            document.getElementById("c1").value = "Galle";
            document.getElementById("c1").innerHTML = "Galle";
            document.getElementById("c2").value = "Hambantota";
            document.getElementById("c2").innerHTML = "Hambantota";
            document.getElementById("c3").value = "Matara";
            document.getElementById("c3").innerHTML = "Matara";

        } else if (document.getElementById("province").value == "Uwa") {
            document.getElementById("c1").value = "Badulla";
            document.getElementById("c1").innerHTML = "Badulla";
            document.getElementById("c2").value = "Monaragala";
            document.getElementById("c2").innerHTML = "Monaragala";

        } else if (document.getElementById("province").value == "Western") {
            document.getElementById("c1").value = "Colombo (1 - 15)";
            document.getElementById("c1").innerHTML = "Colombo (1 - 15)";
            document.getElementById("c2").value = "Colombo - Greater";
            document.getElementById("c2").innerHTML = "Colombo - Greater";
            document.getElementById("c3").value = "Gampaha";
            document.getElementById("c3").innerHTML = "Gampaha";
            document.getElementById("c4").value = "Kalutara";
            document.getElementById("c4").innerHTML = "Kalutara";

        }
    }

    return (
        <div>
            <div>
                <Navbar/>
                <br></br>
                <br></br>
            </div>
            <div className="container" style={{ textAlign: 'start' }}>
                <div>
                    {/* <Header></Header> */}
                    {/* <div className="container input-main-form pl-5"> */}
                    <div class="py-5 text-center">
                        <h2>Create New Account</h2>
                    </div>
                    <Card style={{ padding: '15px' }}>
                        <Card.Body>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    id="home-tab"
                                    data-toggle="tab"
                                    href="#home"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                >
                                    User
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link "
                                    id="profile-tab"
                                    data-toggle="tab"
                                    href="#profile"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    Address
                                </a>
                            </li>
                        </ul>
                        <hr></hr>
                        <div className="tab-content tab-content-V" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpane1" aria-labelledby="home-tab">
                                <div className="container border-top">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                            <h3 className="topic-V text-left mt-4 mb-4">User Details</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <form id="contact-form" className="form" role="form">

                                                <div class="form-group col-sm">
                                                    <label class="form-label" for="name">Name </label>
                                                    <input
                                                        type="text"
                                                        class="form-control formInput"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Buyer Name"
                                                        tabindex="1"
                                                        required
                                                        onChange={(e) => {
                                                            setName(e.target.value); // assign value
                                                        }}
                                                    />
                                                </div>

                                                <div class="form-group col-sm">
                                                    <label class="form-label" for="dob">Date of Birth </label>
                                                    <input
                                                        type="date"
                                                        class="form-control"
                                                        id="date"
                                                        placeholder="Pick Your Birth Day"
                                                        tabindex="2"
                                                        required
                                                        onChange={(e) => {
                                                            setDOB(e.target.value); // assign value
                                                        }}
                                                    />
                                                </div>

                                                <div class="form-group col-sm">
                                                    <label class="form-label" for="gender">Gender</label>
                                                    <select
                                                        id="gender"
                                                        className="form-control"
                                                        tabindex="3"
                                                        required
                                                        onChange={(e) => {
                                                            setGender(e.target.value); // assign value
                                                        }}
                                                    >
                                                        <option id="choose1">Choose</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
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
                                                            setMobile(e.target.value); // assign value
                                                        }}
                                                    />
                                                </div>

                                                <div class="form-group col-sm">
                                                    <label class="form-label" for="password">Password</label>
                                                    <input
                                                        type="password"
                                                        class="form-control formInput"
                                                        id="passwword"
                                                        name="password"
                                                        placeholder="Enter Strong Password"
                                                        tabindex="6"
                                                        required
                                                        onChange={(e) => {
                                                            console.log("set password");
                                                            setPassword(e.target.value); // assign value
                                                        }}
                                                    />
                                                </div>

                                                {/* <div className="row pt-3 pb-4"> */}
                                                    {/* <div className="col py-3 text-center"> */}
                                                        {/* <li> */}
                                                            {/* <button type="submit" className="btn btn-ok"> */}
                                                            {/* <a
                                                                class="btn btn-ok-V"
                                                                id="profile-tab"
                                                                data-toggle="tab"
                                                                href="#profile"
                                                                role="tab"
                                                                aria-controls="profile"
                                                                aria-selected="true"
                                                            >
                                                                Next
                                                            </a> */}
                                                            {/* </button> */}
                                                        {/* </li> */}
                                                    {/* </div> */}

                                                    {/* <div className="col py-3 text-center">
                                                        <button type="reset" className="btn btn-reset">
                                                            Cancel
                                                        </button>
                                                    </div> */}
                                                {/* </div> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="container border-top">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                            <h3 className="topic-V text-left mt-4 mb-4">Address Details</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <form id="contact-form" className="form" role="form" action="POST" onSubmit={sendData}>

                                                <div class="form-group col-sm">
                                                    <label class="form-label" for="province">Province</label>
                                                    <select
                                                        id="province"
                                                        className="form-control"
                                                        // tabindex="3"
                                                        required
                                                        onChange={(e) => {
                                                            setProvince(e.target.value); // assign value
                                                            searchCity();
                                                        }}
                                                    >
                                                        <option>Choose</option>
                                                        <option id="p1" value="Central">Central</option>
                                                        <option id="p2" value="Eastern">Eastern</option>
                                                        <option id="p3" value="North Central">North Central</option>
                                                        <option id="p4" value="Nothern">Nothern</option>
                                                        <option id="p5" value="North Western">North Western</option>
                                                        <option id="p6" value="Sabaragamuwa">Sabaragamuwa</option>
                                                        <option id="p7" value="Southern">Southern</option>
                                                        <option id="p8" value="Uwa">Uwa</option>
                                                        <option id="p9" value="Western">Western </option>

                                                    </select>
                                                </div>

                                                <div class="form-group col-sm">
                                                    <label class="form-label" for="city">City</label>
                                                    <select
                                                        id="city"
                                                        className="form-control"
                                                        // tabindex="3"
                                                        required
                                                        onChange={(e) => {
                                                            setCity(e.target.value); // assign value
                                                        }}
                                                    >
                                                        <option>Choose</option>
                                                        <option id="c1"></option>
                                                        <option id="c2"></option>
                                                        <option id="c3"></option>
                                                        <option id="c4"></option>
                                                        <option id="c5"></option>
                                                    </select>
                                                </div>

                                                <div class="form-group col-sm">
                                                    <label class="form-label" for="area">Area </label>
                                                    <input
                                                        type="text"
                                                        class="form-control formInput"
                                                        id="area"
                                                        name="area"
                                                        placeholder="Area of the Location"
                                                        // tabindex="1"
                                                        required
                                                        onChange={(e) => {
                                                            setArea(e.target.value); // assign value
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
                                                    <label class="form-label" for="postalCode">Postal Code </label>
                                                    <input
                                                        type="number"
                                                        class="form-control formInput"
                                                        id="postalCode"
                                                        name="postalCode"
                                                        placeholder="Postal Code"
                                                        // tabindex="1"
                                                        required
                                                        onChange={(e) => {
                                                            setPostalCode(e.target.value); // assign value
                                                            console.log("set postal code");
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
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </ul> */}
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <br></br>
          <Footer/>
        </div>
    )
}
