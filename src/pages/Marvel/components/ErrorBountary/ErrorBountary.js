
import { Component } from 'react'
import ErrorMassage from '../ErrorMassage/ErrorMassage'


class ErrorBountary extends Component{
   state ={
      error: false
   }
  componentDidCatch(error,errInfo){
   
   this.setState({
      error: true
   })
  }

  render(){
     if(this.state.error){
        return(
           <>
           <ErrorMassage />
     
           </>
        )
     }

     return this.props.children
  }
}

export default ErrorBountary