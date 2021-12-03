import React from 'react';
import { Paper, TextField} from '@material-ui/core';

export default class SearchBar extends React.Component{
    state= {
        searchTerm: ''
    }

    handleChange= event=> this.setState({ searchTerm: event.target.value})

    handleSubmit= (event)=>{
        const { searchTerm }= this.state;
        const { onFormSubmit }= this.props;

        onFormSubmit(searchTerm);
    }

    render(){
        return(
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit= { this.handleSubmit }>
                    <TextField fullwidth label="Search...." onChange= { this.handleChange} />
                </form>
            </Paper>
        )
    }
}