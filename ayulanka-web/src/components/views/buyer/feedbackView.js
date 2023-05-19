import React from "react";
import { Modal } from "react-bootstrap";

export default function FeedbackView(feedback) {
    console.log("open feedbsck view modal",feedback);

    return( 
        <div>
            <Modal.Header closeButton>
                <Modal.Title>{feedback.data.Category} Feedback</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped table-hover ">
                            <tbody>
                                <tr>
                                    <th className="text-left" scope="row">Feeback Type: </th>
                                    <td className="text-left">{feedback.data.FeedbackType}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Category: </th>
                                    <td className="text-left">{feedback.data.Category}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Name: </th>
                                    <td className="text-left">{feedback.data.Name}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Email: </th>
                                    <td className="text-left">{feedback.data.Email}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Mobile No: </th>
                                    <td className="text-left">{feedback.data.MobileNumber}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Address: </th>
                                    <td className="text-left">{feedback.data.Address}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Message: </th>
                                    <td className="text-left">{feedback.data.Message}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={feedback.onHide}>Close</button>
            </Modal.Footer>
        </div>
    )
}