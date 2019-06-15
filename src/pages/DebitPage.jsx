import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



import Balance from '../components/Balance'
import Listing from '../components/listing'
import DebitsForm from '../components/DebitsForm'

class DebitPage extends Component {
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
          <button onClick={this.ToggleForm}>Add Debit</button>
          <Listing fileList = {this.props.debits}/>
    
        </div>
      )
    } else{
      return(
        <div>
          <DebitsForm toggleForm={this.ToggleForm.bind(this)}/>
        </div>
      )
    }

  }

}

function mapState(state){
  return {
    debits: state.Debits
  }
}

export default connect(mapState)(DebitPage);