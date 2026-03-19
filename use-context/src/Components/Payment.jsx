import Paypal from "./PayPal";

const Payment = ({ currency }) => {
    return (<>
        <Paypal currency={currency} />
    </>)
}
export default Payment;