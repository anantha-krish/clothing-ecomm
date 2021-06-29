import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
interface Props {
  price: number;
}
const onToken = (token: Token) => {
  console.log(token);
  alert("Payment Sucessful");
};
const StripeCheckoutButton = ({ price }: Props) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J7doaSIrf4hhOM7vQasq7NgqmnJnMzcEt630GD5wxlLqwWymBEKwFt5hSqIGX3vWqTarn6r0e5tZkyo6Lre0o5y007HgSofrz";
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ananthas Clothing Pvt. Ltd."
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
