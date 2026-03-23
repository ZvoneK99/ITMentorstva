import { useContext } from "react";
import { AmountContext, ConvertedAmountContext, CurrencyContext } from "../App";

const PayPal = () => {

    const { currency } = useContext(CurrencyContext);
    const { amount } = useContext(AmountContext);
    const { convertedAmount } = useContext(ConvertedAmountContext)
    // console.log(currency);
    // console.log(amount);
    return (<>
        <h1>{amount} BAM = {convertedAmount.toFixed(2)} {currency}</h1>
    </>);
}

export default PayPal;