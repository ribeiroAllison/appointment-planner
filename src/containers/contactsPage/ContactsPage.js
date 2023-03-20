import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [duplicateName,setDuplicateName] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    
    !duplicateName &&
    props.addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {
    const duplicated = props.contacts.find((contact) => {
      return contact.name === name;
    })

    duplicated && setDuplicateName(true);

  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit}
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        phone={phone} setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts}/>
      </section>
    </div>
  );
};
