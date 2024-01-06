import React from 'react'

const ForgotPassword = () => {
  return (
    <>
      <div className="container">
        <div className="nrow col-md-8">
          <form>
            <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <button type="button" className="btn btn-primary" id='btn'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword