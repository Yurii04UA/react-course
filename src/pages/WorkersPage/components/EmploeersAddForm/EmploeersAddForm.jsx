import React from 'react';
import "./EmploeersAddForm.css";
import { Component } from 'react';

class EmploeersAddForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

  render(){
    const {name,salary} = this.state
    return (
      <div className="app-add-form">
              <h3>Add new employees</h3>
              <form
                  className="add-form d-flex">
                  <input type="text"
                      className="form-control new-post-label"
                      placeholder="What his name?"
                      onChange={this.onValueChange}
                      name='name'
                      value={name}
                      />
                  <input type="number"
                      className="form-control new-post-label"
                      placeholder="Salary ?"
                      onChange={this.onValueChange}
                      name='salary'
                      value={salary}
                      />
  
                  <button type="submit"
                          className="btn btn-outline-light">Add</button>
              </form>
          </div>
    )
  }
}

export default EmploeersAddForm