import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import './ContactList.css'
export default function ContactList(props) {
  const{contact,removeContact}=props
  const contactlist=contact.map((val)=>{
    return(
      <div className="contact">
        <div className="name">{val.data.name}</div>
        <div className="email">{val.data.email}</div>
        <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
      </div>
    )
  })
  return (
    <>
      <div className="contact-list-header">Contact List</div>
      <div className="contact-list-container">{contactlist}</div>
    </>
  )
};

