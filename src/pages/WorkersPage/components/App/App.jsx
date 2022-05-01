import React from 'react';
import AppFilter from '../AppFilter/AppFilter';
import AppInfo from '../AppInfo/AppInfo';
import SearchPanel from '../SearchPanel/SearchPanel';
import EmploeersAddForm from '../EmploeersAddForm/EmploeersAddForm';
import EmploeersList from '../EmploeersList/EmploeersList';
import EmploeersListItem from '../EmploeersListItem/EmploeersListItem';

import "./App.css"

const App = () => {
  return (
    <div className='app'>
      <AppInfo />

      <div className="search_panel">
        <SearchPanel />
        <AppFilter />
      </div>
      
      <EmploeersAddForm />
      <EmploeersList />
      <EmploeersListItem />
    
    </div>
  )
}

export default App