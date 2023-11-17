import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchCompany } from '../Redux/CompanyDetailSlice';



function Header() {


    const  allCompanys =useSelector((state)=>state.app.companys)

    const [searchData,setSearchData]=useState("")

    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(searchCompany(searchData))
    },[searchData])


  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary ">
      <Container >
       <Link to='/' style={{textDecoration:'none'}}> <Navbar.Brand ><img src="https://i.postimg.cc/N04x4VxG/63fdf75ad4a978704fe9ac9c-CRUD-Preview-removebg-preview.png" style={{height:'100px'}} alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to={'/add'} className='mt-2 m-2' style={{textDecoration:'none',color:'black'}} ><Nav><b>Add New </b>  <i class="fa-solid fa-plus mt-1 m-1"></i></Nav></Link>
           <Link to={'/read'} className='mt-2 m-2' style={{textDecoration:'none',color:'black'}} ><Nav><b>All Companies({allCompanys.length})</b> </Nav></Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchData}
              onChange={(e)=>setSearchData(e.target.value)}
            />
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    </div>
  )
}

export default Header