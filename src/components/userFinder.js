import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';

import classes from './userFinder.module.css'
import UserContext from "../store/user-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component{
    static contextType = UserContext;

    constructor() {
        super();
        this.state ={
            filteredUsers: [],
            searchTerm: ''
        }
    }

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);
//
// const searchChangeHandler = (event) => {
//     setSearchTerm(event.targe t.value);
// };
    componentDidMount() {
        this.setState({filteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchTerm !== this.state.searchTerm){
        this.setState({
            filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
        })}
    }

    searchChangeHandler (event) {
        this.setState( {
                searchTerm: event.target.value
            }
        )
    }

    render(){
    return (
        <Fragment>
            <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
            </div>
            <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
            </ErrorBoundary>
        </Fragment>
    );
    }
};

export default UserFinder;