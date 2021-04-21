import React, { Component } from 'react'
import './DetailsContent.css';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/questionActions';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';

class DetailsContent extends Component {
    // static propTypes = {
    //     questions: PropTypes.object.isRequired,
    // };
    

    render() {
        const {questions} = this.props.question;
        const {searchRes} = this.props.searchRes;
        return (
            <div className="detailscontent">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Question</th>
                        <th scope="col">Category</th>
                        <th scope="col">State</th>
                        <th scope="col">Question Group</th>
                        <th scope="col">License</th>
                        <th scope="col">Status</th>
                        <th scope="col">Display</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.filter(quest => quest.question.includes(searchRes)).map((quest) => (
                            <tr>
                               <th scope="row">{quest.id}</th>
                                <td>{quest.question}</td>
                                <td>{quest.category}</td>
                                <td>{quest.state}</td> 
                                <td>{quest.question_group}</td>
                                <td>{quest.license}</td>
                                <td>{quest.status=1?'Active':'Deactive'}</td>
                                <td>
                                    <Button variant="contained"
                                    color="secondary"
                                    size="small"
                                    >Published</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    question:state.question,
    searchRes:state.question
})

export default connect(mapStateToProps,{getQuestions})(DetailsContent);