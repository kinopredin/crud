import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCompany } from '../Redux/CompanyDetailSlice';
import { useNavigate } from 'react-router-dom';



function Create() {
   
    const [companys,setCompanys] =useState({});

    const navigate=useNavigate();

    const dispatch=useDispatch();

    const getCompanyData=(e)=>{
        setCompanys({...companys,[e.target.name]:e.target.value})
        // console.log(companys);

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(companys);
        dispatch(createCompany(companys))
        navigate("/read")
    }

   
  



  return (
    <div className='text-center'>
        
       <Container>

        <div className='text-center mt-5'> <h2>FILL THE DATA</h2></div>
           <div className='mt-5 border '>
                <Container>
                  <Form className='p-5' onSubmit={handleSubmit} >
                      <div>
                        <Form.Group>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Name"  
                          className='border-0'  
                          required     
                          onChange={getCompanyData}             
                        />
                        <hr />
          
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email"  
                          className='border-0' 
                          required      
                          onChange={getCompanyData}   
                       />
                       <hr />
          
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Phone"  
                          className='border-0'   
                          required     
                          onChange={getCompanyData}  
                       />
                       <hr />
  
                       <Form.Control
                          type="text"
                          name="address"
                          placeholder="Address"  
                          className='border-0'  
                          required    
                          onChange={getCompanyData}    
                       />
                       <hr />
                       <input
                     
                      name="type"
                      value="MNC"
                      type="radio"
                     className='m-1'
                      required
                      onChange={getCompanyData}
                      
                    />
                    <label class="form-check-label">MNC</label>
                 
                 
                    <input
                      class="form-check-input"
                      name="type"
                      value="DOMESTIC"
                      type="radio"
                      className='m-1'
                      onChange={getCompanyData}
                     
                    />
                    <label class="form-check-label">DOMESTIC</label>
                        </Form.Group>
                      </div>
  
                      <button type="submit" class="btn btn-primary m-3">
            Submit
          </button>
          
          
                  </Form>
                </Container>
           </div>
       </Container>
    </div>
  )
}

export default Create