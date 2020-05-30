import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';

import CreateBook from './CreateBook';
import DisplayBookList from './DisplayBookList';
import DisplayBookDetails from './DisplayBookDetails';
import UpdateBookInfo from './UpdateBookInfo';

class Main extends Component {
    render(){
        return(
            <div>
                <Route exact path ='/' component={DisplayBookList} />
                <Route  path ='/create-book' component={CreateBook} />
                <Route exact path ='/edit-book/:id' component={UpdateBookInfo} />
                <Route exact path ='/show-book/:id' component={DisplayBookDetails} />       
            </div>
        );
    }
}

export default Main;