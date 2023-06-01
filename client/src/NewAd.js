import React from "react"
import axios from "axios";

export default function NewAd() {

    const handleSubmit = (values) => {
        axios.post("http://localhost:3001/newAd", values)
    }


    return (


        <form className="mx-1 mx-md-4">

        <div class="input-group mb-3">
            <input type="text" className="form-control" placeholder="Advertisment title" aria-label="Advertisment title" aria-describedby="basic-addon1"/>
        </div>

        <div class="input-group mb-3">
            <input type="text" className="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1"/>
        </div>

        
        <div class="input-group">
            <span class="input-group-text">Advertisment description</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <select class="form-select" aria-label="Select category">
            <option value="Mašinos">Mašinos</option>
            <option value="Drabužiai">Drabužiai</option>
            <option value="Nekilnajamas turtas">Nekilnajamas turtas</option>
        </select>


        <div classNameName="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="button" className="btn btn-primary btn-lg" onClick={(values) => handlesubmit(values)} >Add new advertisment</button>
        </div>

        </form>
    )



}

