import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Home widgets/Footer";
import { loginBuyerService } from "../../../services/buyerService";

export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [id, setId] = useState("");
    const [login, setLogin] = useState([]);

    let history = useHistory();
    const win = window.sessionStorage;

    async function checkUser(e) {
        e.preventDefault();
        console.log('check user', Email,Password);

        // validate user
        let response = await loginBuyerService(Email,Password);
        if(response.ok){
            console.log(response.data);
                setLogin(response.data.login);
                console.log(login);
                // setId(response.data.id);
                console.log(response.data.data[0]._id);

                if (response.data.login === null) {
                    alert("User not available")
                } else {
                    // alert("Success...!")
                    Swal.fire({
                        title:'Success!',
                        text:'Login Succesful',
                        icon:'success',
                        showConfirmButton: false,
                        timer:2000
                    }).then(()=>{
                        win.setItem('Email', Email);
                        win.setItem('_id', id);
    
                        history.push("/buyerProfile");
                        window.location.reload();
                    })
                   
                }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: "User not available",
                confirmButtonColor: '#1fc191',

            })
        }

        // axios.get(`http://localhost:5000/login/login/${Email}/${Password}`)
        //     .then((response) => {
        //         console.log(response.data);
        //         setLogin(response.data.login);
        //         console.log(login);
        //         // setId(response.data.id);
        //         console.log(response.data.data[0]._id);

        //         if (response.data.login === null) {
        //             alert("User not available")
        //         } else {
        //             // alert("Success...!")
        //             Swal.fire({
        //                 title:'Success!',
        //                 text:'Login Succesful',
        //                 icon:'success',
        //                 showConfirmButton: false,
        //                 timer:2000
        //             }).then(()=>{
        //                 win.setItem('Email', Email);
        //                 win.setItem('_id', id);
    
        //                 history.push("/buyerProfile");
        //                 window.location.reload();
        //             })
                   
        //         }
        //     }).catch((err) => {
        //         // alert(err.response.data.error);
        //         // alert("User not available");
        //         Swal.fire({
        //             icon: 'warning',
        //             title: 'Oops...',
        //             text: "User not available",
        //             confirmButtonColor: '#1fc191',

        //         })
        //     });
    }

    return (
        <div>
            <br /><br /><br /><br />
            <div className="container">
                <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                    <div className="img-left d-none d-md-flex">
                        <img src="/images/imgLogin.png" width="350px" height="350px" />
                    </div>
                    <div className="card-body mt-4">
                        <h4 className="title text-center mt-5">Login</h4>
                        <form className="form-box px-3" onSubmit={checkUser}>

                            <div className="form-input form-group col-sm">
                                <input
                                    type="email"
                                    class="form-control formInput"
                                    id="email"
                                    name="email"
                                    placeholder="E-mail"
                                    // tabindex="4"
                                    required
                                    onChange={(e) => {
                                        console.log("set email");
                                        setEmail(e.target.value); // assign value
                                    }}
                                />
                            </div>

                            <div className="form-input form-group col-sm">
                                <input
                                    type="password"
                                    class="form-control formInput"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    // tabindex="4"
                                    required
                                    onChange={(e) => {
                                        console.log("set passwword");
                                        setPassword(e.target.value); // assign value
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-outline-success text-uppercase"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="center ml-6">
                                <p >
                                    New Member ? <a href="/signup" class="link-success">Sign Up</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <Footer/>
        </div>
    )
}
