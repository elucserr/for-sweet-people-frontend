import React, { Component } from "react";
import Button from '../../components/Button';
import './Medicine.css'

class AddMedicine extends Component {


    render() {
     const { onSubmit, onChange, date, time, type } = this.props;
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
             type="number"
             name="time"
             id="time"
             placeholder="TIME"
             value= {time}
             onChange={onChange}
           />
           
           <select
             className="input-options"
             type="text"
             name="type"
             id="type"
             placeholder="TYPE OF MEDICINE"
             value= {type}
             onChange={onChange}
           ><option value="Glucotrol">Glucotrol</option>
           <option value="Orinase">Orinase</option>
           <option value="Amaryl">Amaryl</option>
           <option value="Micronase">Micronase</option>
           <option value="DiaBeta">DiaBeta</option>
           <option value="Lantus">Lantus</option>
           <option value="Levemir">Levemir</option>
           <option value="Insulatard">Insulatard</option>
           <option value="Novarapid">Novarapid</option></select>
    
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
 