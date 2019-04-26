import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    };
    render (){
        
        return (
            <MuiThemeProvider>

                <React.Fragment>

                    <AppBar title = "Success" />

                    <h1>Thank You!!!!</h1>
                    
                    <h1>You belong to computer science</h1> 

                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default Success;