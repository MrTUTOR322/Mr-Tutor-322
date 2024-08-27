const stripe = Stripe('your-publishable-key-here');
const elements = stripe.elements();
const cardElement = elements.create('card');

cardElement.mount('#card-element');

const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const {token, error} = await stripe.createToken(cardElement);
    
    if (error) {
        console.error(error);
    } else {
        console.log(token);
    }
});