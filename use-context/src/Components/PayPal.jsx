import { useContext } from "react";
import { AmountContext, CurrencyContext } from "../App";

const PayPal = () => {

    const { currency } = useContext(CurrencyContext);

    const { amount } = useContext(AmountContext);
    console.log(currency);
    console.log(amount);
    return (<>
        <h1>PayPal: {amount} {currency}</h1>
    </>);
}

export default PayPal;