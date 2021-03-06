import { Component } from "react";

import React from "react";
import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import EmploeersAddForm from "../EmploeersAddForm/EmploeersAddForm";
import EmploeersList from "../EmploeersList/EmploeersList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Jonn C", salary: 800, increase: false, like: false, id: 1 },
        { name: "Par L", salary: 1000, increase: false, like: false, id: 2 },
        { name: "Mar S", salary: 1100, increase: false, like: false, id: 3 },
        { name: "Had A", salary: 950, increase: false, like: false, id: 4 },
      ],
      term:'',
      filter:'all',
      

    };
    this.maxId = this.state.data.length + 1;
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      //  const index = data.findIndex((elem => elem.id == id))
      //  const before = data.slice(0,index)
      //  const after = data.slice(index+1)
      //  const newData = [...before, ...after]
      const newData = data.filter((item) => item.id !== id);

      return {
        data: newData,
      };
    });
  };

  AddItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      like:false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  onToggleProps = (id,props) => {
   this.setState(({data})=>({
     data:data.map(item=>{
       if(item.id ===id){
         return{...item,[props]: !item[props]}
       }
       return item;
     })
   }))
  };

  searhEmp = (item, term) => {
    if(term.length ===0){
      return item
    }

    return item.filter(item => {
      return item.name.indexOf(term) > -1 
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term:term})
  }
 
  filterPost = (item, filter) => {
    if(filter === 'like'){
      return item.filter(item => item.like)
    } else if(filter === 'moreThem1000'){
      return item.filter(item => item.salary > 1000)
    } else{
      return item
    }
  }

  onFilterSelect = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {
    const {filter,term,data} = this.state
    const employees = this.state.data.length;
    const increaseTotal = this.state.data.filter(item => item.increase).length
    
    const visibelData= this.filterPost(this.searhEmp(data,term),filter);

    return (
      <div className="app">
        <AppInfo 
          employees ={employees}
          increaseTotal={increaseTotal}/>

        <div className="search_panel">
          <SearchPanel 
            onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter 
           filter={filter}
           onFilterSelect={this.onFilterSelect}
            />
        </div>
        <EmploeersList
          data={visibelData}
          onDelete={this.deleteItem}
          onToggleProps={this.onToggleProps}
        />

        <EmploeersAddForm onAdd={this.AddItem} />
      </div>
    );
  }
}

export default App;
