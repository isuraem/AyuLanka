import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../views/buyer/login";
import Signup from '../views/buyer/signup';
import BuyerProfile from "../views/buyer/buyerProfile";
import AllBuyers from "../views/buyer/viewAllBuyers";
import Feedback from "../views/buyer/feedback";
import AllFeedbacks from "../views/buyer/viewAllFeedbacks";

export const RouterComponentsBuyer = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/buyerProfile" exact component={BuyerProfile}/>
                    <Route path="/viewAllB" exact component={AllBuyers}/>
                    <Route path="/feedback" exact component={Feedback}/>
                    <Route path="/allFeedback" exact component={AllFeedbacks}/>
                </Switch>
            </Router>
        </div>
    );
};