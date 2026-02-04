

function ObjectProducts() {

    const PRODUCTS = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Miš", price: 25 },
        { id: 3, name: "Tipkovnica", price: 70 }
    ];

    return (
        <>
            <h1>Object of Products</h1>
            {PRODUCTS.map(((product) => (
                <p key={product.id}>{product.name} - {product.price}€</p>
            )))}
        </>
    );
}

export default ObjectProducts;