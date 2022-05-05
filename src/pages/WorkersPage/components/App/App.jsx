import { Component } from "react";

import React from "react";
import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import EmploeersAddForm from "../EmploeersAddForm/EmploeersAddForm";
import EmploeersList from "../EmploeersList/EmploeersList";

import "./App.css";

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      data : [
        { name: "Jonn C", salary: 800 ,increase: false, id: 1},
        { name: "Par L", salary: 1000 ,increase: true, id: 2},
        { name: "Mar S", salary: 1100 ,increase: false, id: 3},
        { name: "Had A", salary: 950 ,increase: false, id: 4},
      ]
    }
    this.maxId = this.state.data.length+1
  }
 deleteItem = (id) => {
   this.setState(({data}) => {
    //  const index = data.findIndex((elem => elem.id == id))
    //  const before = data.slice(0,index)
    //  const after = data.slice(index+1)
    //  const newData = [...before, ...after]
    const newData = data.filter(item => item.id !== id)

     return{
       data: newData
     }
   })
 }

 AddItem = (name,salary) => {
   const newItem = {
     name: name,
     salary: salary,
     increase: false,
     id: this.maxId++
   }
   this.setState(({data})=>{
     const newArr = [...data,newItem]
     return{
      data: newArr
    }
   })
   
 }

 render(){
    return (
      <div className="app">
        <AppInfo />

        <div className="search_panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmploeersList 
          data={this.state.data}
          onDelete={this.deleteItem}/>

        <EmploeersAddForm onAdd={this.AddItem}/>
      </div>
    );
 }
};

export default App;
