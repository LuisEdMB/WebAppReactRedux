import { studentDefault } from './../../types/student/index';
import IStudent from "../../types/student";
import { LIST_STUDENT, SET_PROPERTY_STUDENT, SET_STUDENT, OPEN_FORM_STUDENT, CLOSE_FORM_STUDENT } from '../../const/student';

const INITIAL = {
    students: Array<IStudent>(),
    student: studentDefault,
    modalOpen: false
}

export function studentReducer(state = INITIAL, action:any){
    switch (action.type) {
        case LIST_STUDENT:
            return{
                ...state, students: action.payload
            }
        case SET_PROPERTY_STUDENT:
            const student = {
                ...state.student, [action.name]: action.value
            }
            return{
                ...state, student: student
            }
        case SET_STUDENT:
            return{
                ...state, student: action.payload
            }
        case OPEN_FORM_STUDENT:
            return{
                ...state, modalOpen: true
            }
        case CLOSE_FORM_STUDENT:
            return{
                ...state, modalOpen: false
            }
        default:
            return state;
    }
}