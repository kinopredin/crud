import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom'
import { updateCompany } from '../Redux/CompanyDetailSlice';








function Update() {

  const{id}=useParams();

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [updateData,setUpdateData]=useState()
  const {companys,loading}=useSelector((state)=>state.app);


  useEffect(()=>{
    if(id){
      const singalCompany=companys.filter((ele)=>ele.id===id)
      setUpdateData(singalCompany[0])

    }

  },[])

  const newData =(e)=>{
     setUpdateData({...updateData,[e.target.name]:e.target.value})
  }
  console.log(updateData);

  // console.log(updateData);

  const handleUpdate=(e)=>{
    e.preventDefault();
    dispatch(updateCompany(updateData))
    navigate("/read")
  }
  return (
    <div> <Container>

    <div className='text-center'><h2>EDIT THE DATA</h2></div>
      <div className='mt-5 border'>
           <Form className='p-5' 
           onSubmit={handleUpdate}
            >
               <div>
                 <Form.Group>
                 <Form.Control
                   type="text"
                   name="name"
                   placeholder="Name"  
                   className='border-0'  
                   required    
                   value={updateData &&updateData.name}
                //  value={updateData.name}
                   onChange={newData}             
                 />
                 <hr />
   
                 <Form.Control
                   type="email"
                   name="email"
                   placeholder="Email"  
                   className='border-0' 
                   required      
                   value={updateData &&updateData.email}
                   onChange={newData}   
                />
                <hr />
   
                 <Form.Control
                   type="tel"
                   name="phone"
                   placeholder="Phone"  
                   className='border-0'   
                   required   
                   value={updateData &&updateData.phone}  
                   onChange={newData}    
                />
                <hr />

                <Form.Control
                   type="text"
                   name="address"
                   placeholder="Address"  
                   className='border-0'  
                   required 
                   value={updateData && updateData.address}   
                   onChange={newData}    
                />
                <hr />
                <input
              
               name="type"
               value="MNC"
               type="radio"
              className='m-1'
               required
               checked={ updateData &&updateData.type==='MNC'}
              
               onChange={newData}   
               
             />
             <label class="form-check-label">MNC</label>
          
          
             <input
               class="form-check-input"
               name="type"
               value="DOMESTIC"
               type="radio"
               className='m-1'
               checked={updateData &&updateData.type=='DOMESTIC'}
              
               onChange={newData}   
              
             />
             <label class="form-check-label">DOMESTIC</label>
                 </Form.Group>
               </div>

               <button type="submit" class="btn btn-primary m-3">
                 Submit
              </button>
   
   
           </Form>
      </div>
  </Container>
  </div>
  )
}

export default Update