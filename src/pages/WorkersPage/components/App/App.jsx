import React from "react";
import AppFilter from "../AppFilter/AppFilter";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import EmploeersAddForm from "../EmploeersAddForm/EmploeersAddForm";
import EmploeersList from "../EmploeersList/EmploeersList";

import "./App.css";

const App = () => {
  const data = [
    { name: "Jonn C", salary: 800 ,increase: false, id: 1},
    { name: "Par L", salary: 1000 ,increase: true, id: 2},
    { name: "Mar S", salary: 1100 ,increase: false, id: 3},
    { name: "Had A", salary: 950 ,increase: false, id: 4},
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search_panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmploeersList data={data}/>

      <EmploeersAddForm />
    </div>
  );
};

export default App;
