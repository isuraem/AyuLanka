import { React, useEffect, useState } from "react";
import { Modal, ModalTitle } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { updateBuyerService } from "../../../services/buyerService";

export default function UpdateProfile({ data }) {
  console.log("UpdateProfile", data);

  useEffect(() => {
    try {
      console.log("set data>>>>>>", data);
      setName(data.BuyerName);
      setDOB(data.DOB);
      setGender(data.Gender);
      setEmail(data.Email);
      setMobile(data.MobileNumber);
      setPassword(data.Password);
      setProvince(data.Province);
      setCity(data.City);
      setArea(data.Area);
      setAddress(data.Address);
      setPostalCode(data.PostalCode);
    } catch (err) {
      window.alert("something went wrong", err);
    }
  }, []);

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

  // console.log("UpdateProfile", data);

  async function sendData(e) {
    e.preventDefault();

    console.log("sendData");

    const updateProfile = {
      BuyerName,
      DOB,
      Gender,
      Email,
      MobileNumber,
      Province,
      City,
      Area,
      Address,
      PostalCode,
    };

    let response = await updateBuyerService(data._id, updateProfile);
    if (response.ok) {
      console.log(data._id);
      Swal.fire({
        title: "Success!",
        text: "Profile Updated Succesfully",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.replace("/buyerProfile");
      });
    } else {
      console.log("error", response);
    }

    // axios.post(`http://localhost:5000/buyer/updateBuyer/${data._id}`, updateProfile).then(() => {
    //     console.log(data._id);
    //     Swal.fire({
    //         title:'Success!',
    //         text:'Profile Updated Succesfully',
    //         icon:'success',
    //         showConfirmButton: false,
    //         timer:2000
    //     }).then(()=>{
    //         window.location.replace("/buyerProfile");
    //     })
    //     // alert("Buyer Updated")

    // }).catch((err) => {
    //     console.log("error")
    //     alert(err)
    // })
  }

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
    <div
      style={{
        borderColor: "#31b448",
        backgroundImage:
          "url(https://th.bing.com/th/id/OIP.-L55eg3eSeKFQS1WwgscZgHaE7?pid=ImgDet&rs=1)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "798px 1045px",
        height: "100%",
        backdropFilter: "blur(10px)",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Profile: {data.BuyerName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4" style={{ backdropFilter: "blur(100px)" }}>
        <div>
          {/* <hr></hr> */}
          <div className="container border-top">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form
                  id="contact-form"
                  className="form"
                  role="form"
                  onSubmit={sendData}
                >
                  <div class="form-group col-sm">
                    <label class="form-label" for="name">
                      Name{" "}
                    </label>
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
                      value={BuyerName}
                    />
                  </div>

                  <div class="form-group col-sm">
                    <label class="form-label" for="dob">
                      Date of Birth{" "}
                    </label>
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
                      value={DOB}
                    />
                  </div>

                  <div class="form-group col-sm">
                    <label class="form-label" for="gender">
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="form-control"
                      tabindex="3"
                      required
                      onChange={(e) => {
                        setGender(e.target.value); // assign value
                      }}
                      value={Gender}
                    >
                      <option id="choose1">Choose</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div class="form-group col-sm">
                    <label class="form-label" for="email">
                      Email{" "}
                    </label>
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
                      value={Email}
                      disabled
                    />
                  </div>

                  <div class="form-group col-sm">
                    <label class="form-label" for="mobile">
                      Mobile No.{" "}
                    </label>
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
                      value={MobileNumber}
                    />
                  </div>

                  {/* <div class="form-group col-sm">
                                        <label class="form-label" for="password">Password</label>
                                        <input
                                            type="password"
                                            class="form-control formInput"
                                            id="passwword"
                                            name="password"
                                            // placeholder="Enter Strong Password"
                                            tabindex="6"
                                            required
                                            value={Password}
                                            onChange={(e) => {
                                                console.log("set password");
                                                setPassword(e.target.value); // assign value
                                            }}
                                            disabled
                                        />
                                    </div> */}

                  <div class="form-group col-sm">
                    <label class="form-label" for="province">
                      Province
                    </label>
                    <select
                      id="province"
                      className="form-control"
                      // tabindex="3"
                      required
                      onChange={(e) => {
                        setProvince(e.target.value); // assign value
                        searchCity();
                      }}
                      value={Province}
                    >
                      <option>Choose</option>
                      <option id="p1" value="Central">
                        Central
                      </option>
                      <option id="p2" value="Eastern">
                        Eastern
                      </option>
                      <option id="p3" value="North Central">
                        North Central
                      </option>
                      <option id="p4" value="Nothern">
                        Nothern
                      </option>
                      <option id="p5" value="North Western">
                        North Western
                      </option>
                      <option id="p6" value="Sabaragamuwa">
                        Sabaragamuwa
                      </option>
                      <option id="p7" value="Southern">
                        Southern
                      </option>
                      <option id="p8" value="Uwa">
                        Uwa
                      </option>
                      <option id="p9" value="Western">
                        Western{" "}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col-sm">
                    <label class="form-label" for="city">
                      City
                    </label>
                    <select
                      id="city"
                      className="form-control"
                      // tabindex="3"
                      required
                      onChange={(e) => {
                        setCity(e.target.value); // assign value
                      }}
                      value={City}
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
                    <label class="form-label" for="area">
                      Area{" "}
                    </label>
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
                      value={Area}
                    />
                  </div>

                  <div class="form-group col-sm">
                    <label class="form-label" for="address">
                      Address{" "}
                    </label>
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
                      value={Address}
                    />
                  </div>

                  <div class="form-group col-sm">
                    <label class="form-label" for="postalCode">
                      Postal Code{" "}
                    </label>
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
                      value={PostalCode}
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
      </Modal.Body>
    </div>
  );
}
