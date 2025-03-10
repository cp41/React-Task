const gallery = [
    {
        id : 1,
        url : "https://i.snap.as/yTqEGPkt.jpg",
        caption : "Nature"
    },
    {
        id : 2,
        url : "https://www.alternateending.com/wp-content/uploads/2020/04/7CQgFitGHGXeZDZotg9VMnxrln2.jpg",
        caption : "City"
    },
    {
        id : 3,
        url : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmkC9dU6dHKD_3-FTJUJ9_MCvQLGV8ZZeXyik7hL3aFxbDge4X",
        caption : "Forest"
    }
];
const Gallery=()=>{
    return (
        <>
            {gallery.map(e=>(

                <div key={e.id}>
                <img src={e.url} alt={e.caption} />
                </div>
            )
            )}
        </>
    )
}

export default Gallery