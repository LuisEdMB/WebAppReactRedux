import IStudent from "../../types/student"
import { LIST_STUDENT, SET_PROPERTY_STUDENT, SET_STUDENT, OPEN_FORM_STUDENT, CLOSE_FORM_STUDENT } from "../../const/student"

export const listStudentsAction = (students:Array<IStudent>) => {
    return{
        type: LIST_STUDENT,
        payload: students
    }
}

export const setPropertiesStudentAction = (name:any, value:any) => {
    return{
        type: SET_PROPERTY_STUDENT,
        name: name,
        value: value
    }
}

export const setStudentAction = (student:IStudent) => {
    return{
        type: SET_STUDENT,
        payload: student
    }
}

export const openStudentFormAction = () => {
    return{
        type: OPEN_FORM_STUDENT
    }
}

export const closeStudentFormAction = () => {
    return{
        type: CLOSE_FORM_STUDENT
    }
}