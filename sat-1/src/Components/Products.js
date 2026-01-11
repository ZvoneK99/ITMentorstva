
const products = [
    'iPhone 14', 'iPhone 15', 'Samsung S23S'];

function Products() {

    return (
        <>
        {products.map(phone => {
            return <p>{phone}</p>
        })};
        </>
    );
}

export default Products;