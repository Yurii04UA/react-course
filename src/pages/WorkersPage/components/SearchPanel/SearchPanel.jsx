import React from 'react';
import "./SearchPanel.css";
import { Component } from 'react';

class SearchPanel extends Component{
    constructor(props){
      super(props);
      this.state= {
        term: ''
      }
   
    }
    onChangeInput = (e) => {
      const termValue = e.target.value
      this.setState({
        term:termValue
      })
      this.props.onUpdateSearch(termValue)
    }
  render(){
    return( 
     <>
        <input type="text"
              className='form-control search-input' 
              placeholder='Search emploeers'
              value={this.state.term}
              onChange={this.onChangeInput}
              />
            
     </>
     )         
    
  }
}

export default SearchPanel