import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import './TopContent.css';
import {addQuestions} from '../actions/questionActions';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
import { connect } from 'react-redux';
class TopContent extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            question_name: "",
            category:"",
            state:""
        };
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
    };

    onSubmit = () =>{
        if(this.state.question_name && this.state.category && this.state.state ){
            const data = {
                    id:'11234',
                    question:this.state.question_name,
                    category:this.state.category,
                    state: this.state.state,
                    question_group:'view',
                    license:'view',
                    status:1
            }
            this.props.addQuestions(data);

        }else{
            alert("Please fill blanks");
        }
    //    console.log(data);
    }

    render() {
        return (
            <div className="topcontent">
                <div className="topcontent_left">
                    <p>Custom Question Manager</p>
                </div>
                <div className="topcontent_right">
                    <Button variant="contained"  onClick={this.toggle}  >Add New Question</Button>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle} >Add Questions</ModalHeader>

                    <ModalBody>
                        <Form >
                        <FormGroup>
                            <Label for="item">Question Name</Label>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            onChange={(e) => this.setState({ question_name:e.target.value})}
                            placeholder="Add Question"
                            />

                            <Label for="item">Category</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                onChange={(e) => this.setState({ category:e.target.value})}
                                placeholder="Add Category"
                            />

                            <Label for="item">State</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                onChange={(e) => this.setState({ state:e.target.value})}
                                placeholder="Add State"
                            />

                            {/* <Label for="item">Group</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add State"
                            /> */}
                            
                            <Button onClick={this.onSubmit}   variant="contained"  color="primary" style={{ marginTop: "2rem" }} >
                            Add Item
                            </Button>
                        </FormGroup>
                        </Form>
                    </ModalBody>
            </Modal>
            </div>
        )
    }
}

const mapStateTpProps = (state) =>({
    questions:state.question
})

export default connect(mapStateTpProps,{addQuestions})(TopContent);
