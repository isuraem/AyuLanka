import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCatelog from "../views/Catelog/productCatelog";
import SingleProduct from "../views/Catelog/singleProduct";
import Checkout from "../views/Catelog/checkout";
import Payment from '../views/Payment/payment'
import Home from "../views/home"
import CartView from "../views/Catelog/cart";
import Admin from "../views/admin";
import OrderlList from "../views/Admin Pannel/orderList";
import DeliverylList from "../views/Admin Pannel/deliveryList";

export const RouterComponentsProduct = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/catelog" exact component={ProductCatelog} />
          <Route path="/single" exact component={SingleProduct} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/home" exact component={Home} />
          <Route path="/cart" exact component={CartView} />
          <Route path="/" exact component={Admin}/>
          <Route path="/admin/order" exact component={OrderlList}/>
          <Route path="/admin/deliveries" exact component={DeliverylList}/>
        </Switch>
      </Router>
    </div>
  );
};
