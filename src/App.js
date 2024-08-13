
import { useEffect, useState } from 'react';
import './App.css';
import uuid4 from 'uuid4'
import AddContacts from './components/AddContacts.js'
import ContactList from './components/ContactList.js';
import Header from './components/Header.js'
function App() {
  const localStorageKey="contact"
  const [contact,setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  || []})
  useEffect(()=>{
   localStorage.setItem(localStorageKey,JSON.stringify(contact))
  },[contact])

  const addcontact=(data)=>{
     setContact([...contact,{id:uuid4(),data}])
  }
  const removeContact=(id)=>{
    const updatedCOntacts=contact.filter((val)=>{
      return val.id!==id;

    })
    setContact(updatedCOntacts)
 }
  return (
    <>
    <Header/>
    <AddContacts addcontact={addcontact}/>
    <ContactList contact={contact} removeContact={removeContact}/>
    </>
  );
}

export default App;
