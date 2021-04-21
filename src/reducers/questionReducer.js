import {GET_QUESTIONS,ADD_QUESTIONS,SEARCH_QUESTIONS} from '../actions/types';
import questionJson from '../components/questions.json';
const initialstate = {
    questions:questionJson,
    loading:false,
    searchRes:""
}

export default function(state=initialstate,action){
    switch(action.type){
        case GET_QUESTIONS:
            return{
                ...state,
                questions:[state.questions]
            }

        case ADD_QUESTIONS:
            return{
                ...state,
                questions:[...state.questions,action.payload]
            }
        
        case SEARCH_QUESTIONS:
            // console.log(action.payload.search_question );
            return {
                ...state,
                searchRes:action.payload 
            }
        default:
            return state
    }
}