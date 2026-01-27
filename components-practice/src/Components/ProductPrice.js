

function ProductPrice({price, discount}) {
    let fullPrice=0;

    if(discount===0){
        fullPrice = price;
    }
    else if (discount>0){
        fullPrice =price- (price*discount/100);
    }

    return (
        <>
        <h1>Price's are:</h1>
        <h2>Price: {price}</h2>
        <h2>Discount: {discount}%</h2>
        <h2>Full price: {fullPrice}</h2>
        </>
    );
}
export default ProductPrice;