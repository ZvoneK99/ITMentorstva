import { useContext } from "react";
import { CurrencyContext } from "../App";

const PayPal = () => {

    const { currency } = useContext(CurrencyContext);
    console.log(currency);
    return (<>
        <h1>PayPal: 100 {currency}</h1>
    </>);
}

export default PayPal;