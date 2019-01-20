import React, {Component} from 'react';
import {Input, Dropdown} from 'semantic-ui-react'
import { connect } from 'react-redux';

import changeNumberOne from '../redux/actions/changenumberone';
import changeNumberTwo from '../redux/actions/changenumbertwo';
import changeOperation from '../redux/actions/changeoperation';
import Store from '../../imports/redux/store/store';

operatorOptions = [
  {
    text: 'Add',
    value: 'Add'
    },{
    text: 'Subtract',
    value: 'Subtract'
    },{
    text: 'Multiply',
    value: 'Multiply'
  },{
    text: 'Divide',
    value: 'Divide'
  }
]
class Hello extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleChange(e, {name, value}) {
    //this.setState({[name]: value})
    if (name === 'numberone')
      this.props.dispatch(changeNumberOne(value))
    else
      this.props.dispatch(changeNumberTwo(value))
  }

  handleDropdownChange (e, { value }) {
    this.props.dispatch(changeOperation(value))
  }



  render() {
    return (
        <div>
            <Input placeholder='first number' name='numberone' value={ this.props.firstNumber } onChange={this.handleChange}/>
            <Input placeholder='second number' name='numbertwo' value={ this.props.secondNumber } onChange={this.handleChange}/>
            <Dropdown
              onChange={this.handleDropdownChange}
              options={operatorOptions}
              placeholder='Choose an option'
              selection
              value={this.props.operation}
            />
            <p>{this.props.operation(parseInt(this.props.firstNumber),parseInt(this.props.secondNumber))}</p>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstNumber: state.rootReducer.numberone,
    secondNumber: state.rootReducer.numbertwo,
    operation : state.rootReducer.operation,
  }
}

export default connect(mapStateToProps)(Hello);
