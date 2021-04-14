import React from 'react'

const Form = () => {
    
    return (
      <div className="container">
        <div className="row">
          <form className="col-md-5 mt-5">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter department"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="col-md-5 offset-1 mt-5">
              
          </div>
        </div>
      </div>
    );
}

export default Form
