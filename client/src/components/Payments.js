import React, { component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends component {
  render() {
    return;
    <StripeCheckout
      amount={5 * 100}
      token={token => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />;
  }
}
