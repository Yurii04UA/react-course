import React from 'react';
import AppFilter from '../AppFilter/AppFilter';
import EmploeersAddForm from '../EmploeersAddForm/EmploeersAddForm';
import EmploeersList from '../EmploeersList/EmploeersList';
import EmploeersListItem from '../EmploeersListItem/EmploeersListItem';

const App = () => {
  return (
    <div>
       <AppFilter />
       <EmploeersAddForm />
       <EmploeersList />
       <EmploeersListItem />
    
    </div>
  )
}

export default App