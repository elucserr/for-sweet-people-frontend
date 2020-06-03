import React, { Component } from "react";
import Button from '../../components/Button';
import './Medicine.css'

class AddMedicine extends Component {


    render() {
     const { onSubmit, onChange, date, time, medicine } = this.props;
     return (
       <div>
         <form className="login-form" onSubmit={ onSubmit }>
           
           <input
             className="input-options"
             type="date"
             name="date"
             id="date"
             placeholder="DATE"
             value= {date}
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
             name="medicine"
             id="medicine"
             placeholder="MEDICINE"
             value= {medicine}
             onChange={onChange}
           />
    
           <Button onClick={() => {console.log('Clicked')}}
            type="submit"
            buttonStyle="btn--white--solid--2"
            buttonSize="btn--options"
            value="submit">ADD</Button>
         </form>
       </div>
     );
   }
 }
 
 export default AddMedicine;
 