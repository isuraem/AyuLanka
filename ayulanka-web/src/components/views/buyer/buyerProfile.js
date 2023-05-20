import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import UpdateProfile from "./updateProfile";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Home widgets/Navbar";
import Footer from "../Home widgets/Footer";
import {
  deleteBuyer,
  getOneBuyerService,
} from "../../../services/buyerService";

export default function BuyerProfile() {
  const [buyer, setBuyer] = useState([]);
  const [id, setId] = useState("");

  const [BuyerName, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNumber, setMobile] = useState("");
  // const [Password, setPassword] = useState("");
  const [Province, setProvince] = useState("");
  const [City, setCity] = useState("");
  const [Area, setArea] = useState("");
  const [Address, setAddress] = useState("");
  const [PostalCode, setPostalCode] = useState("");

  const DefaultAddress = [];
  DefaultAddress.push(Province);
  DefaultAddress.push(City);
  DefaultAddress.push(Area);
  DefaultAddress.push(Address);

  const [ModalProfileUpdate, setModalProfileUpdate] = useState([]);
  const [ModalUpdateConfirm, setModalUpdateConfirm] = useState(false);

  const [ModalProfileDelete, setModalProfileDelete] = useState([]);
  const [ModalDeleteConfirm, setModalDeleteConfirm] = useState(false);

  let history = useHistory();
  const win = window.sessionStorage;

  async function loadData() {
    // fetch buyer data
    let response = await getOneBuyerService(Email);
    if (response.ok) {
      console.log(response.data);
      console.log(response.data.data[0]);
      let data = {
        Name: response.data.data[0].BuyerName,
      };

      setBuyer(response.data.data[0]);

      setName(response.data.data[0].BuyerName);
      setDOB(response.data.data[0].DOB);
      setGender(response.data.data[0].Gender);
      setMobile(response.data.data[0].MobileNumber);
      setProvince(response.data.data[0].Province);
      setCity(response.data.data[0].City);
      setArea(response.data.data[0].Area);
      setAddress(response.data.data[0].Address);
      setPostalCode(response.data.data[0].PostalCode);

      console.log(buyer);
    }

    // axios.get(`http://localhost:5000/buyer/getBuyer/${Email}`).then((response) => {

    //     console.log(response.data);
    //     console.log(response.data.data[0])
    //     let data = {
    //         Name :response.data.data[0].BuyerName
    //     }

    //     setBuyer(response.data.data[0]);

    //     setName(response.data.data[0].BuyerName);
    //     setDOB(response.data.data[0].DOB);
    //     setGender(response.data.data[0].Gender);
    //     setMobile(response.data.data[0].MobileNumber);
    //     setProvince(response.data.data[0].Province);
    //     setCity(response.data.data[0].City);
    //     setArea(response.data.data[0].Area);
    //     setAddress(response.data.data[0].Address);
    //     setPostalCode(response.data.data[0].PostalCode);

    //     console.log(buyer);
    // })
  }

  useEffect(() => {
    if (win.getItem("Email")) {
      setEmail(win.getItem("Email"));
      win.getItem("_id");
    }
    if (Email) {
      loadData();
      console.log(Email);
    }
  }, [Email]);

  const deleteProfile = async (data) => {
    console.log("dalateProfile>>>", data);

    let response = await deleteBuyer(data);
    if (response.ok) {
      console.log("profileDeleted>>>", id);
      Swal.fire({
        title: "Success!",
        text: "Profile Deleted Succesfully",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        history.push("/Home");
        window.location.reload();
      });
    } else {
      const msgerr = err.response.data.errorCode;
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: `${msgerr}`,
        confirmButtonColor: "#1fc191",
      });
    }

    // await axios.delete(`http://localhost:5000/buyer/deleteBuyer`,{data}).then((response) => {
    //     // alert("Buyer deleted");
    //     console.log("profileDeleted>>>", id);
    //     Swal.fire({
    //         title:'Success!',
    //         text:'Profile Deleted Succesfully',
    //         icon:'success',
    //         showConfirmButton: false,
    //         timer:2000
    //     }).then(()=>{
    //         history.push("/Home");
    //     window.location.reload();
    //     })

    // }).catch((err) => {
    //     const msgerr = err.response.data.errorCode
    //     Swal.fire({
    //         icon: 'warning',
    //         title: 'Oops...',
    //         text: `${msgerr}`,
    //         confirmButtonColor: '#1fc191',

    //     })
    //     // window.location.reload();
    // })
  };

  const openmodalUpdate = (data) => {
    console.log("openModalUpdate", data);
    setModalProfileUpdate(data);
    setModalUpdateConfirm(true);
  };

  const openModalDelete = (data) => {
    console.log("profile delete modal", data);
    setModalProfileDelete(data);
    setModalDeleteConfirm(true);
  };

  return (
    <div>
      <div>
        <Navbar />
        <br></br>
        <br></br>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/photos/alternative-medicine-naturopath-and-dietary-supplement-picture-id1175523239?k=6&m=1175523239&s=612x612&w=0&h=1zhikKLkCHqTkFis2iovP_jDyL8hkeli7QbX06HaShw=)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="container" style={{ textAlign: "start" }}>
          <div className="p-5 col-lg-10 col-xl-7 flex-row mx-auto px-0">
            {/* <div class="py-4 text-center">
                        <h2>My Profile</h2>
                    </div> */}

            <Card
              style={{
                padding: "20px",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(275, 275, 275, 0.550)",
                borderRadius: "15px",
              }}
              className="p-5 ms-auto me-auto pt-4 pb-0 mt-2  shadow-sm"
            >
              <Card.Header>
                <Card.Title className="py-2 text-center ">
                  <h2>My Profile</h2>
                </Card.Title>
              </Card.Header>
              <Card.Body className="px-4">
                {/* <Card.Title>My Profile</Card.Title> */}
                <Card.Text>
                  <Form className="form-reg">
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Buyer Name"
                        disabled
                        value={BuyerName}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>DOB</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="DOB"
                        disabled
                        value={DOB}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Gender"
                        disabled
                        value={Gender}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        disabled
                        value={Email}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Mobile No.</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mobile"
                        disabled
                        value={MobileNumber}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Default Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        disabled
                        value={DefaultAddress}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>PostalCode</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Postal Code"
                        disabled
                        value={PostalCode}
                      ></Form.Control>
                    </Form.Group>

                    <Row>
                      <div className="row">
                        <div className="mt-5 col-6">
                          <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={() => openmodalUpdate(buyer)}
                          >
                            Update
                          </button>
                        </div>

                        <div className="text-right col-6 mt-5">
                          <button
                            className="btn btn-outline-danger"
                            type="button"
                            onClick={() => openModalDelete(buyer)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </Row>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>

            <Modal
              show={ModalUpdateConfirm}
              onHide={() => setModalUpdateConfirm(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <UpdateProfile
                data={ModalProfileUpdate}
                onHide={() => setModalProfileUpdate(false)}
              />
            </Modal>

            <Modal
              show={ModalDeleteConfirm}
              onHide={() => setModalDeleteConfirm(false)}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Would you like to remove your profile ?</p>
              </Modal.Body>
              <Modal.Footer>
                <Row>
                  <div className="row">
                    <div className="col-6 mt-1">
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteProfile(ModalProfileDelete);
                        }}
                      >
                        Confirm
                      </button>
                    </div>

                    <div
                      className="col-6 text-right mt-1"
                      onClick={() => setModalDeleteConfirm(false)}
                    >
                      <button type="reset" className="btn btn-warning">
                        cancel
                      </button>
                    </div>
                  </div>
                </Row>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}
