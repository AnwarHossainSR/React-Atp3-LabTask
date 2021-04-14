import React,{useState} from 'react'
import Navbar from './Navbars'


const Form = () => {

    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [dept,setDept]=useState('');

    function Show()
    {
        document.getElementById('name').innerHTML='Name : '+name;
        document.getElementById('email').innerHTML='Email : '+email;
        document.getElementById('dept').innerHTML='Department : '+dept;
    }
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-5">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter department"
                  onChange={(e) => setDept(e.target.value)}
                />
              </div>
              <button type="submit" onClick={Show} className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="col-md-5 offset-1 mt-5">
              <h1 id="name"> </h1>
              <h1 id="email"> </h1>
              <h1 id="dept"></h1>
            </div>
          </div>
        </div>
      </>
    );
}

export default Form
