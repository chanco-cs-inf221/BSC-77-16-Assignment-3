import React, {Component} from 'react';
import UserFormDetails from './UserFormDetails';
import PersonalDetails from  './PersonalDetails';
import Confirm from  './Confirm';
import Success from  './Success';



export class UserForm extends Component {

    state = {
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        program:'',
        year:'',
        address:'',
        hostel:''
    }

    
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }
    

     previousStep = () => {
         const {step} = this.setState;
        this.setState({
            step: step - 1});
     }
     
     handleChange = input => e => {
         this.setState({[input]: e.target.value});

     }

     render() {
         const{step} = this.state;
         const{firstName,lastName,email,program,year,address,hostel} = this.state;
         const values = {firstName,lastName,email,program,year,address,hostel}
         //const values = this.state
     

     switch (step) {
         case 1:
            return (
                <UserFormDetails 
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                
                />
      );
      case 2:
              return (
                  <PersonalDetails 
                   nextStep = {this.nextStep}
                   previousStep = {this.previousStep}
                   handleChange = {this.handleChange}
                   values = {values}
        
                />
      );
        case 3:
               return (
                  <Confirm
                   nextStep = {this.nextStep}
                   previousStep = {this.previousStep}
                   values = {values}
  
                   />
                ); 
        case 4:
            return <Success />
               
     }
  }
}

export default UserForm;