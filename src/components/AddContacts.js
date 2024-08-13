import React, { useState } from "react"
import './AddContacts.css'
export default function AddContacts({addcontact}) {
    const [COntactData,setContactData]=useState({name:"",email:""})
    function handleChange(e){
        if(e.target.name==="name"){
            setContactData({...COntactData,name:e.target.value})
        }
        else{
            setContactData({...COntactData,email:e.target.value})

        }
    }
    function handleAdd(){
        if(COntactData.name===""&& COntactData.email===""){
            alert("Please Fill Your Name and Email Address")
            return
        }
        else if(COntactData.name==="")
        {
            alert("Please Fill Your Name")
            return
        }
        else if(COntactData.email===""){
            alert("Please Fill Your Email Address")
            return
        }
        addcontact(COntactData)
        setContactData({name:"",email:""})
    }
  return (
    <div className="form-header">
        <div className="add-contact">Add Contacts</div>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter Your Name" name="name" value={COntactData.name} onChange={handleChange}></input><br/>
        <label>Email:</label>
        <input type="email" placeholder="Enter Your Email" name="email" value={COntactData.email} onChange={handleChange}></input>
      </form>
      <button className="btn" onClick={handleAdd}>Add Contact</button>
    </div>
  )
};

