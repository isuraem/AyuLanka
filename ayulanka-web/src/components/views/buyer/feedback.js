import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import Navbar from "../Home widgets/Navbar";
import Footer from "../Home widgets/Footer";
import { createFeedbackService } from "../../../services/buyerService";

export default function Feedback() {
  const [FeedbackType, setFeedbackType] = useState("");
  const [Category, setCategory] = useState("");
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Message, setMessage] = useState("");

  async function sendData(e) {
    e.preventDefault();
    console.log("send Data");

    const newFeedback = {
      FeedbackType,
      Category,
      Name,
      Address,
      Email,
      MobileNumber,
      Message,
    };

    let response = await createFeedbackService(newFeedback);
    if (response.ok) {
      Swal.fire({
        title: "Thank You!",
        text: "Your Feedback Added Succesfully",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        window.location.reload();
      });
    } else {
      console.log("error", response);
    }
    // axios.post(`http://localhost:5000/feedback/addFeedback`, {
    //     FeedbackType,
    //     Category,
    //     Name,
    //     Address,
    //     Email,
    //     MobileNumber,
    //     Message
    // }).then(() => {
    //     // alert("Feedback Added");
    //     Swal.fire({
    //         title:'Thank You!',
    //         text:'Your Feedback Added Succesfully',
    //         icon:'success',
    //         showConfirmButton: false,
    //         timer:2000
    //     }).then(()=>{
    //         window.location.reload();
    //     })

    // }).catch((err) => {
    //     console.log("error")
    //     alert(err)
    // })
  }

  return (
    <div>
      <div>
        <Navbar />
        <br></br>
      </div>
      <div className="container" style={{ textAlign: "start" }}>
        <div>
          {/* <Header></Header> */}
          <div class="py-5 text-center">
            <h2>Your FeedBack</h2>
          </div>

          <Card style={{ padding: "20px" }}>
            <Card.Body>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form
                      id="contact-form"
                      className="form"
                      role="form"
                      onSubmit={sendData}
                    >
                      <div class="form-group col-sm">
                        <label class="form-label" for="type">
                          FeedBack Type
                        </label>
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
                        <label class="form-label" for="category">
                          Category
                        </label>
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
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Technical">Technical</option>
                          <option value="Order Related">Order Related</option>
                          <option value="Payment Related">
                            Payment Related
                          </option>
                          <option value="Product Availability">
                            Product Availability
                          </option>
                          <option value="Product Quality">
                            Product Quality
                          </option>
                          <option value="Pricing">Pricing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

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
                          tabindex="3"
                          required
                          onChange={(e) => {
                            setName(e.target.value); // assign value
                          }}
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
                        />
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
                            setMobileNumber(e.target.value); // assign value
                          }}
                        />
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="message">
                          Message
                        </label>
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
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
