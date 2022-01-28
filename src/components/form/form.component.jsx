import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './form.component.scss';
import Sectionh2 from '../../components/sectionH2/sectionh2.component.jsx';
import Input from '../../components/input/input.component.jsx';
import Textarea from '../../components/textarea/textarea.component.jsx';
import Button from '../../components/button/button.component.jsx';

export default function Form() {

  const [name, setName] = useState("");
  console.log(name)
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [validity, setValidity] = useState(false);
  const [status, setStatus] = useState("SEND INQUIRY");
  const [ inUse, setInUSe ] = useState(false);

  const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = (e) => {
    if(e.match(mailformat)){
        setValidity(true);
    }else{
        setValidity(false);
    }
  }

  const handleChange = (e) => {
    let stateName = e.target.name
    let stateValue = e.target.value
    if(stateName === "name"){
        setName(stateValue);
    }
    if(stateName === "email"){
        setEmail(stateValue);
        validateEmail(stateValue);
    }
    if(stateName === "message"){
        setMessage(stateValue);
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    setSent(true);
    setInUSe(false);
    setStatus("THANK YOU!");
    try {
        const response = await axios.post('/contact', {
            name, email, message
        })
        console.log("Request back", response)
    } catch (error) {
        console.error(error.code);
        console.error(error.message);
        console.error(error.stack);
    }
  }

  useEffect(() => {
    if(sent){
        setTimeout(function(){ 
            setStatus("SEND INQUIRY"); 
            setName("");
            setEmail("");
            setMessage("");
            setValidity(false);
            const dropdown = document.getElementById("selectbox");
            dropdown.selectedIndex = 0;
            setSent(false)
        }, 3000);
    }
  }, [sent]);

  

  return (
    <form onSubmit={handleSubmit}>
      <Sectionh2 h2={'Send your inquiry'} />
      <Input 
        label={'name'} 
        type={'text'} 
        placeholder={'Your name'} 
        handleChange={handleChange}
        name={"name"}
        value={name}
      />
      <Input
        label={'email'}
        type={'email'}
        placeholder={'Your email address'}
        handleChange={handleChange}
        name={"email"}
        value={email}
      />
      <Textarea 
        label={'message'} 
        placeholder={'Please type your message'}
        handleChange={handleChange}
        name={"message"}
        value={message}
       />
      <Button type={'submit'} status={status}/>
    </form>
  );
}
