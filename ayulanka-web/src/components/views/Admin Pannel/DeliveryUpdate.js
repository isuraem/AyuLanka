import { React, useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

import { Modal } from "react-bootstrap";




function DeliveryUpdate({data}) {

    console.log("update modal dataaaaaa", data);//getting the modal data to consol


    console.log("came dataaaaa", data)

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");

    useEffect(() => {
        setStreet(data.street)
        setCity(data.city)
        setProvince(data.province)
        setPostalCode(data.postalCode)
    }, [data]);

    console.log(street)

    const onSubmit = async e => {
        e.preventDefault();//to prevent the default submission by submit button

        //alert(penDay);
        //alert(rem);

        //const answer = window.confirm("Are you sure you want to update details?");
        Swal.fire({
            title: "Are you sure you want to confirm submission? ",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Proceed",
            denyButtonText: "Cancel",
            confirmButtonColor: "#1fc191",

        }).then((result) => {

            if (result.isConfirmed) {

                const newDelivery = { street, city, province, postalCode}

                axios.post(`http://localhost:3005/order/updateDelivery/${data._id}`, newDelivery).then(() => {
                    //alert("Rental Record successfully Updated");
                    Swal.fire({
                        title: "Rental Record successfully Updated! ",
                        icon: 'success',
                        confirmButtonColor: "#207159",


                    }).then((res) => {
                        if (res.isConfirmed) {
                            window.location.replace('/admin/deliveries');
                        }
                    })


                }).catch((err) => {
                    //alert(err.response.data.error);
                    Swal.fire({
                        title: "Error occured ! ",
                        text: `${err.response.data.error}`,
                        icon: 'error',
                        confirmButtonColor: "#207159",

                    })

                })

            } else if (result.isDenied) {
                refreshPage();
            }

            //window.location.replace("/rentalList");
        })
    }

    //const loadDelivery = async () => {
        //console.log(delivery);
        // await axios.get(`http://localhost:5000/delivery/getDeliveryByID/${delivery.data[0]._id}`).then((res) => {
        //     console.log(res.data)
        //     setStreet(res.data.delivery.street);
        //     setCity(res.data.delivery.city);
        //     setProvince(res.data.delivery.province);
        //     setPostalCode(res.data.delivery.postalCode);
            
        // }).catch((err) => {
        //     //alert(err.response.data.error);
        //     Swal.fire({
        //         title: "Error occured !",
        //         text: `${err.response.data.error}`,
        //         icon: 'error',
        //         confirmButtonColor: "#207159",

        //     })
        // })

    //}

    function refreshPage() {
        window.location.reload();
    }






    return (

        <div>
            <Modal.Header closeButton>
                <Modal.Title>Return of Rental :</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form onSubmit={onSubmit} action="post" id="contact-form" class="form" role="form">
                            <div class="container">
                                <div class="form-row">
                                    <div class="col-md-3">
                                        <label class="customersize2" for="customer">Delivery Details :</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <br></br>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                            <div className="form-group col-md-6 ">
                                                <label class="form-label" for="cName">Street Name :</label>
                                                <input
                                                    required
                                                    id="sName"
                                                    type="text"
                                                    className="form-control formInput"
                                                    value={street}
                                                    
                                                    onChange={(e) => {
                                                        setStreet(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label class="form-label" for="contactNo">City:</label>
                                                <input
                                                    required
                                                    id="city"
                                                    type="text"
                                                    className="form-control formInput "
                                                    value={city}
                                                    
                                                    onChange={(e) => {
                                                        setCity(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cAddress">Province:</label>
                                                        <input
                                                            required
                                                            id="province"
                                                            type="text"
                                                            className="form-control formInput "
                                                            value={province}
                                                            
                                                            onChange={(e) => {
                                                                setProvince(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cNIC">Postal Code:</label>
                                                        <input
                                                            required
                                                            id="postal"
                                                            type="text"
                                                            className="form-control formInput"
                                                            value={postalCode}
                                                            
                                                            onChange={(e) => {
                                                                setPostalCode(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col py-3 text-center">
                                        <button type="submit" className="btn btn-ok">
                                            Update
                                        </button>
                                    </div>
                                    <div className="col py-3 text-center">
                                        <button type="reset" className="btn btn-reset">
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div >
    )
}

export default DeliveryUpdate;