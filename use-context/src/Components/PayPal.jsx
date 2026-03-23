import { useContext } from "react";
import { AmountContext, ConvertedAmountContext, CurrencyContext, InitialCurrencyContext } from "../App";

const PayPal = () => {
    const { initialCurrency } = useContext(InitialCurrencyContext);
    const { currency } = useContext(CurrencyContext);
    const { amount } = useContext(AmountContext);
    const { convertedAmount } = useContext(ConvertedAmountContext)
    // console.log(currency);
    // console.log(amount);
    return (<>
        <h1>{amount} {initialCurrency} = {convertedAmount.toFixed(2)} {currency}</h1>
    </>);
}

export default PayPal;