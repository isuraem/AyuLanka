import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Swal from 'sweetalert2';


import DeliveryUpdateModal from "./DeliveryUpdate";

function DeliverylList() {

    let history = useHistory();

    
    const [deliveryList, setDeliveryList] = useState([]);
   
    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);
   

    useEffect(() => {

      
            function getDelivery() {
                axios.get(`http://localhost:5000/delivery/view`).then((res) => { //normally the fetched rental record details are displayed through this
                    //setRentals(res.data.reverse());
                    setDeliveryList(res.data.data);
                }).catch((error) => {
                    alert(error.message);
                    
                })
            }
            getDelivery();
    }, []);

    useEffect(() => {

    }, [modalDataDelete]);

    // set delete modal
    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    };

    // set update modal
    const openModalUpdate = (data) => {
        console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);

    }

    function deleteDelivery(data) {
        axios.delete(`http://localhost:5000/delivery/deleteDelivery`, { data, }).then(() => {
            alert("Data deleted");
            window.location.reload();
        }).catch((err) => {
            alert("error", err);
        })
    }

    // refresh page
    function refreshPage() {
        window.location.reload();
    }


    return (
        <div className="page-component-body">
            
            
            <div className="table-emp ">
                <div class="row table-head mt-3">
                    <div class="col">
                        <center><h3 className="float-left">List of Deliveries</h3></center>
                    </div>
                    
                    
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="input-group input-group-search">
                           
                        </div>
                    </div>

                </div>


                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Street</th>
                            <th>City</th>
                            <th>Province</th>
                            <th>Postal Code</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {deliveryList.map((delivery) => {
                            return (

                                <tr >

                                    <td >{delivery.street}</td>
                                    <td >{delivery.city}</td>
                                    <td >{delivery.province}</td>
                                    <td >{delivery.postalCode}</td>
                                    <td>

                                        <button
                                            class="btn btn-light btn-sm"
                                            type="button"
                                            onClick={() => openModalUpdate(delivery)}
                                        >
                                            update
                                        </button>
                                        
                                        <button
                                            class="btn btn-danger btn-sm"
                                            onClick={() => {
                                                openModalDelete(delivery);
                                            }}
                                            role="button">
                                                    remove
                                        </button>

                                    </td>
                                   
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            
            <Modal
                show={modalDeleteConfirm}
                size='md'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this delivery ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className='row'>
                        <div className='col-6 mt-1'>
                            <button
                                type='submit'
                                className='btn btn-danger'
                                onClick={()=>{
                                    deleteDelivery(modalDataDelete);
                                }}
                            >
                                Confirm
                            </button>
                        </div>
                        <div
                            className='col-6 text-right mt-1'
                            onClick={()=>setModalDeleteConfirm(false)}
                        >
                            <button type='reset' className='btn btn-warning'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <DeliveryUpdateModal
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>


        </div >
    )


}

export default DeliverylList;