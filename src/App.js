import React from 'react';
import Clock from './Clock/clock';
import NewsContainer from './News/NewsContainer/newsContainer';
import SearchBar from './SearchBar/searchBar';
import './App.css'

function App() {
  return (
   <div>
    <Clock></Clock>
    <SearchBar></SearchBar>
    <NewsContainer></NewsContainer>
    

   </div>
  )   
}


export default App;
