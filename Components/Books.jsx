const books = [
    {id : 101, title : "To Kill a Mockingbird", author : "Harper Lee", year : 1920},
    {id : 102, title : "Pride and Prejudice", author : "Jane Austen", year : 1967 },
    {id : 103, title : "The Great Gatsby", author : "F. Scott Fitzgerald", year : 1984 }
];

const Books=()=>{
    return (
        <>
            {books.map(e=>(

                <div key={e.id}>
                    <h1>Name: {e.title}</h1>
                    <h2>Author: {e.director}</h2>
                    <h2>Date released:{e.year} </h2>
                </div>
            )
            )}
        </>
    )
}
export default Books