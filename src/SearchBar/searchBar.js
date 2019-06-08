import React from 'react';
import './searchBar.css';


class SearchBar extends React.Component {


    render() {
        return (
            <div class="search-box">
            <input type="text" name="" class="search-txt" placeholder="Type to search"/>
            <a class="search-btn" href="#">
            <i class="fas fa-search"></i>
            </a>
          </div>
     
        );
    }


}

export default SearchBar;







 