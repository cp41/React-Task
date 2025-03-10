const product = [
    {id : 1, name : "Hp Laptop", price : "$799", stock : "Available"},
    {id : 3, name : "Lenovo Laptop", price : "$600", stock : "Not Available"},
    {id : 2, name : "Dell Laptop", price : "$577", stock : "Available"},
];


const Products=()=>{
    return (
        <>
            {product.map(e=>(

                <div key={e.id}>
                    <h1>Product: {e.name}</h1>
                    <h2>Price: {e.price}</h2>
                    <h2>stock:{e.stock} </h2>
                </div>
            )
            )}
        </>
    )
}
export default Products