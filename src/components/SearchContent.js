import { TextField,Button } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import './SearchContent.css';
import {searchFilter} from '../actions/questionActions';

 class SearchContent extends Component {
    constructor(){
        super()
        this.state ={
            search_question:"",
            search_category:""
        }
    }

    onSearch = () =>{
        const data = {
            search_question:this.state.search_question,
            search_category:this.state.search_category
        }
        this.props.searchFilter(data);
    }


    render() {
        return (
            <form >

            <div className="searchcontent">
                    <div className="searchcontent_fields" >
                        <TextField 
                            id="outlined-search" 
                            label="Search By Question" 
                            type="search" 
                            variant="outlined" 
                            style={{marginRight:'10px',width:'600px'}}
                            onChange={(e) => this.props.searchFilter(e.target.value)}
                            size="small"/>
                        {/* <TextField 
                            id="outlined-search" 
                            label="Search By Category" 
                            type="search" 
                            variant="outlined" 
                            onChange={(e) => this.setState({search_category:e.target.value})}
                            size="small"/> */}
                    </div>
                    <div>
                        <Button onSubmit={this.onSearch}  variant="contained" color="primary">Search</Button>
                    </div>
            </div>
                </form>
        )
    }
}

const mapStateToProps = (state) =>({
    question:state.question
});

export default connect(mapStateToProps,{searchFilter})(SearchContent);