import {GET_QUESTIONS,ADD_QUESTIONS,SEARCH_QUESTIONS} from '../actions/types';

export const getQuestions = () =>{
    return {
        type:GET_QUESTIONS
    };
};

export const addQuestions = (data) =>{
    return {
        type:ADD_QUESTIONS,
        payload:data
    }
}

export const searchFilter = (data) =>{
    return {
        type:SEARCH_QUESTIONS,
        payload:data
    }
}