import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



import Balance from '../components/Balance'
import Listing from '../components/listing'
import CreditsForm from '../components/CreditsForm'

class CreditPage extends Component {
  constructor(){
    super();
    this.state = {
      isFormHidden: true
    }
    //Changing Display
    this.ToggleForm = this.ToggleForm.bind(this);
  }

  ToggleForm(){
    this.setState({
      isFormHidden: !this.state.isFormHidden
    })
  }

  render(){
    if(this.state.isFormHidden){
      return(
        <div>
          <ul>
            <li><Link to='/'>Go Back To Home</Link></li>
          </ul>
          
          <Balance/>
          <button onClick={this.ToggleForm}>Add Credit</button>
          <Listing fileList = {this.props.credits}/>
    
        </div>
      )
    } else{
      return(
        <div>
          <CreditsForm toggleForm={this.ToggleForm.bind(this)}/>
        </div>
      )
    }

  }

}

function mapState(state){
  return {
    credits: state.Credits
  }
}

export default connect(mapState)(CreditPage);