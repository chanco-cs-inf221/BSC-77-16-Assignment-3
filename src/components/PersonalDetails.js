import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    };
    render (){
        const {values,handleChange} = this.props;
        
        return (
            <MuiThemeProvider>

                <React.Fragment>

                    <AppBar title = "Enter Personal Details" />
                    
                    <TextField
                    hintText = "Enter Your program"
                    floatingLabelText ="Program"
                    onChange = {handleChange('program')}
                    defaultValue = {values.program}
                    />

                    <br />
                    
                    <TextField
                    hintText = "Enter Your Year"
                    floatingLabelText ="Year"
                    onChange = {handleChange('year')}
                    defaultValue = {values.year}
                    />
                    <br />
                    <TextField
                    hintText = "Enter Your Address"
                    floatingLabelText ="Address"
                    onChange = {handleChange('address')}
                    defaultValue = {values.address}
                    />
                    
                    <br />

                    <TextField
                    hintText = "Enter Your Hostel"
                    floatingLabelText ="Hostel"
                    onChange = {handleChange('hostel')}
                    defaultValue = {values.hostel}
                    />

                    <br />

                    <RaisedButton
                    label = "Continue"
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                    />

                    <br />

                    <RaisedButton
                    label = "Back"
                    primary = {false}
                    style = {styles.button}
                    onClick = {this.back}/>

                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}
const styles = {
    button: {
        margin: 10
    }
}
export default PersonalDetails;