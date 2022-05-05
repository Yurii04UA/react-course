import React from 'react';
import "./EmploeersListItem.css";
import {Component} from "react"

class EmploeersListItem extends Component  {
    constructor(props){
        super(props)

        this.state = {
            increase: false,
            like: false,
        }

    }
    
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    onLike = () => {
       
       this.setState(({like}) =>({
           like: !like
       }))
       
    }

    render(){
        const {name,salary,onDelete} = this.props;
        const {increase} = this.state;
        const {like} = this.state
       

        // let classNames = increase? `list-group-item d-flex justify-content-between increase` :`list-group-item d-flex justify-content-between `
        let classNames = increase? `list-group-item increase` :`list-group-item`
        let classNameLike = like? ' like': ' '
    return (
    
      <li className={classNames + classNameLike}>
          <span className="list-group-item-label"
                onClick={this.onLike}
          >{name}</span>
          <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
          {/* <div className='d-flex justify-content-center align-items-center time'> */} 
          <div className='time'>
              <button type="button"
                  className="btn-cookie btn-sm "
                  onClick={this.onIncrease}>
                  <i className="fas fa-cookie"></i>
              </button>

              <button type="button"
                      className="btn-trash btn-sm"
                      onClick={onDelete}>
                  <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
          </div>
      </li>
  
  )
    }
}

export default EmploeersListItem