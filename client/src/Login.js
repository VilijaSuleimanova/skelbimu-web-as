import React from "react"
export default function Login() {

    const handleSubmit = (values) => {
        axios.post("http://localhost:3001/login", values)
    }

    return (
        <form>
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Password</label>
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div>
                </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4" onClick={(values) => handlesubmit(values)}>Sign in</button>

            </form>
    )


}