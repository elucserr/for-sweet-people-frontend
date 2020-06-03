import React, { Component } from "react";
import Button from '../../components/Button';
import './Activity.css'

class AddActivity extends Component {


    render() {
     const { onSubmit, onChange, type, time, km } = this.props;
     return (
       <div>
         <form className="login-form" onSubmit={ onSubmit }>
           
           <input
             className="input-options"
             type="text"
             name="type"
             id="type"
             placeholder="SPORT"
             value= {type}
             onChange={ onChange }
           />
           
           <input
             className="input-options"
             type="time"
             name="time"
             id="time"
             placeholder="TIME"
             value= {time}
             onChange={onChange}
           />
           
           <input
             className="input-options"
             type="text"
             name="km"
             id="km"
             placeholder="KM"
             value= {km}
             onChange={onChange}
           />
    
           <Button onClick={() => {console.log('Clicked')}}
            type="submit"
            buttonStyle="btn--white--solid--3"
            buttonSize="btn--options"
            value="submit">ADD</Button>
         </form>
       </div>
     );
   }
 }
 
 export default AddActivity;
 