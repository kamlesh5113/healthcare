import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
  return (
    <div>
        <center>

            <h1>Contact Us</h1>
        </center>

        <div className='container-fluid'>
            <div className='col-lg-12 col-md-12 col-sm-6'>
        
            <form className='form'>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' placeholder='enter username'/>
        
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder='enter email'/>
                </div>

                <div className='form-group'>
                    <label>Mobile Number</label>
                    <input type='digit' className='form-control' placeholder='enter mobile number'/>
        
                </div>
                <div className='form-group'>
                    <label>Comment</label>
                    <textarea type='text' placeholder='enter comment' style={{width:'100%'}}/>
        
                </div>
                <div className='form-group'>
                    <button type='button' className='btn btn-success'>Submit</button>
        
                </div>

            </form>

        
        </div>
        </div>


    </div>
  )
}

export default Contact
