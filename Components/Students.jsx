const student = [
    {id : 1, name : "Pranav gurram", batch : "NOV mern stack 2024", time : "11am to 1pm"},
    {id : 2, name : "Arpita Tayade", batch : "NOV Mern stack 2024", time : "11am to 1pm"},
    {id : 3, name : "Chetan patil", batch : "NOV mern stack 2024", time : "11am to 1pm"},
    {id : 4, name : "Rushabh Shewatkar", batch : "NOV mern stack 2024", time : "11am to 1pm"}
]


const Students=()=>{
    return (
        <>
            {student.map(e=>(

                <div key={e.id}>
                    <h1>Student Name: {e.name}</h1>
                    <h2>Batck: {e.batch}</h2>
                    <h2>Time:{e.time} </h2>
                </div>
            )
            )}
        </>
    )
}
export default Students