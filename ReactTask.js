const ReactTask = () => (
    <>  
    <hr/>  
    <ProductDisplay/>
    <UserProfile/>
    <StudentDetails/>
    <CarInfo/>
    <JobInfo/>
    <Bio/>
    <TaskDetails/>
    </>
)

function ProductDisplay() {
  return <Product name='HP Laptop' price={62000} />;
}

const Product = (props) => {
  return (
    <div>
    <h3>{props.name}</h3>
    <p>Price: ₹{props.price}</p>
    </div>
  );
};



function UserProfile() {
  return <User username='Pranav Gurram' city='Pune' />;
}

const User = (props) => {
  return (
    <div>
    <h2>User: {props.username}</h2>
    <p>Location: {props.city}</p>
    </div>
  );
};


function StudentDetails() {
  return <Student name='Pranav Gurram' grade='A+' />;
}

const Student = (props) => {
  return (
    <div>
    <h4>{props.name}</h4>
    <p>Grade: {props.grade}</p> 
    </div>
  );
};


function CarInfo() {
  return <Car brand='FORD' model='Endeavour' />;
}

const Car = (props) => {
  return (
    <div>
    <h2>{props.brand}</h2>
    <p>Model: {props.model}</p> 
    </div>
  );
};


function JobInfo() {
  return <Job title='MERN Stack Developer' company='HCL' />;
}

const Job = (props) => {
  return (
    <div>
    <h2>{props.title}</h2>
    <p>Company: {props.company}</p> 
    </div>
  );
};


function Bio() {
  return <Person name='PRANAV' hobby='Watching Food Videos' />;
}

const Person = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <p>Hobby: {props.hobby}</p> 
    </div>
  );
};


function TaskDetails() {
  return <Task name='Shopping' status='Pending' />;
}

const Task = (props) => {
  return (
    <div>
    <h3>Task: {props.name}</h3>
    <p>Status: {props.status}</p>
    </div>
  );
};


export default ReactTask;