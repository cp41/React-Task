// import React from 'react'
// import { people } from '../data'

// function Peoples() {
//   return (
//     <>
//       {people.map((value) => {

//         return (
//           <>
//             <h1>id:{value.id}</h1>
//             <h1>name:{value.name}</h1>
//             <h1>age:{value.age}</h1>
//             <h1>email:{value.email}</h1>
//             <hr />
//           </>

//         )
//       })}
//     </>
//   )
// }

// export default Peoples

///////////////////////////////////
// import React from 'react'
// import { people } from '../data'

// function Peoples() {
//   return (
//     <>
//       {people.map((value,index) => {
//         const {id,name,age,email} = value
//         return (
//           <div key={index}>
//             <h1>id:{id}</h1>
//             <h1>name:{name}</h1>
//             <h1>age:{age}</h1>
//             <h1>email:{email}</h1>
//             <hr />
//           </div>

//         )
//       })}
//     </>
//   )
// }

// export default Peoples
///////////////////////////////////


function Peoples({ id,name,age,email }) {
  

    return (
      <>
     
        <div>
          <h1>{id ? `id : ${id}` : ``} </h1>
          <h1>{name ? `name : ${name}` : ``}</h1>
          <h1>{age ? `age : ${age}` : ``}</h1>
          <h1>{email ? `email : ${email}` : ``}</h1>
          <hr />
        </div>
        
      </>
    )
  }
  
  export default Peoples
  