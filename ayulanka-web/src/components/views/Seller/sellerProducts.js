import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Header from "./header";
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import { sellerProductsService, deleteProductsService } from "../../../services"
import UpdateProductModal from './updateProduct'
const customStyles = {
    content: {
        top: '52%',
        left: '50%',
        right: 'auto',
        height: 'fit-content',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



const SellerProducts = () => {

    const [products, setProducts] = useState([]);
    const [oneProductDetails, setoneProductDetails] = useState([]);

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(value) {
        setoneProductDetails((prevData) => [...prevData, value]);
        console.log(value);
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {

        setIsOpen(false);
    }

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        let id = "6438d8edb14f6a9b1dd11f35"

        let response = await sellerProductsService(id);
        if (response.ok) {
            for (let i = 0; i < res.data.data.length; i++) {
                setProducts((prevData) => [...prevData, res.data.data[i]]);
            }

        }
        
        // axios.post(`http://localhost:5000/product/sellerProducts/${id}`).then((res) => {
        //     for (let i = 0; i < res.data.data.length; i++) {
        //         setProducts((prevData) => [...prevData, res.data.data[i]]);
        //     }
        // }).catch((err) => {
        //     alert(err)
        // })
    }

    async function deleteData(value) {
        let id = value._id;

        let response = await deleteProductsService(id);
        if (response.ok) {
            Swal.fire({
              icon: "warning",
              title: "Item Deleted !",
              showConfirmButton: false,
              timer: 2500,
            });
            window.location.reload();
          }
        // axios.post(`http://localhost:5000/product/deleteProducts/${id}`).then((res) => {
        //     window.location.reload();
        // }).catch((err) => {
        //     alert(err)
        // })
    }
    return (
        <div>
            <Header />
            <Row className='mt-5 justify-content-md-center'>
                <div class="col-md-6 col-sm-1 col-lg-8">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Code</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, i) => (
                                <tr>
                                    <td>{product.productName}</td>
                                    <td>{product.productCode}</td>
                                    <td>{product.productCategory}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.productDiscount}</td>
                                    <td>{product.productQuantity}</td>
                                    <td>
                                        <span className='mr-3' onClick={() => openModal(product)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </span>
                                        <span className='ml-3' onClick={() => deleteData(product)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                            </svg>
                                        </span>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </Row>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Edit Modal"
            >
                <Row className='mt-5'>
                    <div class="col-md-6 offset-md-10">
                        <span style={{ marginTop: "60px" }} onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </span>
                    </div>
                </Row>
                <UpdateProductModal
                    data={oneProductDetails} />

            </Modal>
        </div >
    )
}

export default SellerProducts