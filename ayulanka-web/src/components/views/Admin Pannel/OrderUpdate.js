import { React, useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

import { Modal } from "react-bootstrap";




function OrderUpdate({data}) {

    console.log("update modal dataaaaaa", data);//getting the modal data to consol


    console.log("came dataaaaa", data)

    const [deliveryServiceID, setDeliveryServiceID] = useState("");
    //const [isOnlinePayment, setIsOnlinePayment] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [total, setTotal] = useState("");

    useEffect(() => {
        setDeliveryServiceID(data.deliveryServiceID)
        //setIsOnlinePayment(data.isOnlinePayment)
        setUnitPrice(data.unitPrice)
        setQuantity(data.quantity)
        setTotal(data.total)
    }, [data]);


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

                const newOrder = { deliveryServiceID, unitPrice, quantity, total}

                axios.post(`http://localhost:5000/order/updateOrder/${data._id}`, newOrder).then(() => {
                    //alert("Rental Record successfully Updated");
                    Swal.fire({
                        title: "Order Record successfully Updated! ",
                        icon: 'success',
                        confirmButtonColor: "#207159",


                    }).then((res) => {
                        if (res.isConfirmed) {
                            window.location.replace('/admin/order');
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
                                        <label class="customersize2" for="customer">Order Details :</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <br></br>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                            <div className="form-group col-md-6 ">
                                                <label class="form-label" for="cName">Delivery ID :</label>
                                                <input
                                                    required
                                                    id="sName"
                                                    type="text"
                                                    className="form-control formInput"
                                                    value={deliveryServiceID}
                                                    
                                                    onChange={(e) => {
                                                        setDeliveryServiceID(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            
                                        </div>

                                        <div className="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cAddress">Unit Price:</label>
                                                        <input
                                                            required
                                                            id="province"
                                                            type="text"
                                                            className="form-control formInput "
                                                            value={unitPrice}
                                                            
                                                            onChange={(e) => {
                                                                setUnitPrice(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cNIC">Quantity:</label>
                                                        <input
                                                            required
                                                            id="postal"
                                                            type="text"
                                                            className="form-control formInput"
                                                            value={quantity}
                                                            
                                                            onChange={(e) => {
                                                                setQuantity(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cAddress">Total:</label>
                                                        <input
                                                            required
                                                            id="province"
                                                            type="text"
                                                            className="form-control formInput "
                                                            value={total}
                                                            
                                                            onChange={(e) => {
                                                                setTotal(e.target.value);
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

export default OrderUpdate;