
const products = {
    'iPhone 14': 1000,
     'iPhone 15': 1250,
      'Samsung S23S': 1100
};
function Products(props) {

    return (
        <>
            {Object.entries(products).map(([phone, price]) => {

                const priceWithTax = price + (price * props.tax / 100);

                return (
                    <p key={phone}>
                        {phone}, price: {price}, with tax: {priceWithTax}
                    </p>
                );
            })}
        </>
    );
}


export default Products;