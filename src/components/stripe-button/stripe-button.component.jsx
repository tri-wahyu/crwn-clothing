import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KKMW8I0B78dTgmaJBeW3bKa28Gjw8duO1EXjY600s1kdgkqP4C9QgvO8IklhK526ektZEVxMegaotNrfFMADz4Y00RAwXL3yy'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name= 'Irt Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;