import React from 'react'
import { Form } from 'react-bootstrap';
 
class BootstrapDatePickerComponent extends React.Component{

    state = {
        val: ""
    };
 
    render(){
 
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="date" placeholder="Date"  value={this.state.val} onChange={e => this.setState({ val: e.target.value })}/>
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
     
}
 
export default BootstrapDatePickerComponent;