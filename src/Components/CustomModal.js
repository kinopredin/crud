import React from 'react'
import { useSelector } from 'react-redux'



function CustomModal({id, showPopup, setShowPopup}) {

    const  allCompanys =useSelector((state)=>state.app.companys)

    const singleCompany=allCompanys.filter((ele)=>ele.id===id)
    console.log(singleCompany);

  return (
    <div className='modalBg'>
         <div className='modalContainer'>
                <button onClick={()=> setShowPopup(false)}>Close</button>
                <h2>{singleCompany[0].name}</h2>
                <h4>{singleCompany[0].email}</h4>
                <h4>{singleCompany[0].phone}</h4>
                <h4>{singleCompany[0].address}</h4>
                <h4>{singleCompany[0].type}</h4>
         </div>
    </div>
  )
}

export default CustomModal