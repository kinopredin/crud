import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompany, showCompany } from '../Redux/CompanyDetailSlice';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import CustomModal from './CustomModal';
import Table from 'react-bootstrap/Table';





function Read() {

    const dispatch = useDispatch();

    const [radioData, setRadioData] = useState("")

    const [id, setId] = useState()

    const [showPopup, setShowPopup] = useState(false)

    const { companys, loading, searchData } = useSelector((state) => state.app)
    const allCompanys=useSelector((state)=>state.app.companys)
    const singalCompany=allCompanys.filter((ele)=>ele.id===id)
    console.log(singalCompany);

    useEffect(() => {
        dispatch(showCompany())
    }, [])

    if (loading) {
        return <h2><i class="fa-solid fa-spinner fa-spin-pulse"></i></h2>
    }

    return (
        <div className='text-center'>
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
            <div className='text-center mt-5'><h2>ALL COMPANIES</h2></div>

            <input

                name="type"
                type="radio"
                className='m-1'
                required
                checked={radioData === ""}
                onChange={(e) => setRadioData("")}


            />
            <label class="form-check-label">ALL</label>

            <input

                name="type"
                type="radio"
                className='m-1'
                value="MNC"
                checked={radioData === "MNC"}
                required
                onChange={(e) => setRadioData(e.target.value)}

            />
            <label class="form-check-label">MNC</label>


            <input
                class="form-check-input"
                name="type"
                value="DOMESTIC"
                type="radio"
                checked={radioData === "DOMESTIC"}

                className='m-1'
                onChange={(e) => setRadioData(e.target.value)}

            />
            <label class="form-check-label">DOMESTIC</label>

            <div>
                {
                    companys &&
                    companys.filter((ele) => {
                        if (searchData.length === 0) {
                            return ele
                        }
                        else {
                            return ele.name.toLowerCase().includes(searchData.toLowerCase())
                        }
                    })
                        .filter((ele) => {
                            if (radioData === "MNC") {
                                return ele.type === radioData;
                            }
                            else if (radioData === "DOMESTIC") {
                                return ele.type === radioData
                            }
                            else {
                                return ele
                            }
                        })

                        .map((ele) => (

                           <Container>
                                <div className='d-flex justify-content-center ' key={ele.id} style={{float:'left'}}>
                                                 <Card style={{ width: '18rem',height:'360px' }} className='m-3'>
                        
                                                <Card.Body>
                                                    <Card.Title>{ele.name}</Card.Title>
                                                    <Card.Text>
                                                        <p>{ele.email}</p>
                                                        <p>{ele.phone}</p>
                                                        <p>{ele.address}</p>
                                                        <p>{ele.type}</p>
                        
                                                    </Card.Text>
                                                   <Button className='m-2' onClick={()=>[setId(ele.id),setShowPopup(true)]}>View</Button>
                                                   <Link to={`/edit/${ele.id}`}><Button  className='m-2'>Edit</Button></Link>
                                                   <Link><Button onClick={()=>dispatch(deleteCompany(ele.id))}  className='m-2'>Delete</Button></Link>
                                                </Card.Body>
                                            </Card>
                                   
                                </div>
    
                           </Container>
                        )
                        )

                }
            </div>
        </div>
    )
}

export default Read