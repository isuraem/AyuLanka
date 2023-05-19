// this is the modal of buyer profile view
import React from "react";
import { Modal } from "react-bootstrap";

export default function ProfileView(profile){
    console.log("open profile view modal",profile);

    return(
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Buyer Name: {profile.data.BuyerName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped table-hover">
                            <tbody>
                                <tr>
                                    <th className="text-left" scope="row">Buyer Name: </th>
                                    <td className="text-left">{profile.data.BuyerName}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Date of birth: </th>
                                    <td className="text-left">{profile.data.DOB}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Gender: </th>
                                    <td className="text-left">{profile.data.Gender}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Email: </th>
                                    <td className="text-left">{profile.data.Email}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Mobile No: </th>
                                    <td className="text-left">{profile.data.MobileNumber}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Province: </th>
                                    <td className="text-left">{profile.data.Province}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">City: </th>
                                    <td className="text-left">{profile.data.City}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Area: </th>
                                    <td className="text-left">{profile.data.Area}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Address: </th>
                                    <td className="text-left">{profile.data.Address}</td>
                                </tr>
                                <tr>
                                    <th className="text-left" scope="row">Postal Code: </th>
                                    <td className="text-left">{profile.data.PostalCode}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={profile.onHide}>Close</button>
            </Modal.Footer>
        </div>
    )
}