import React, { useEffect, useRef } from 'react'
import StudentList from './studentlist'
import StudentService from '../../services/student';
import * as actions from '../../actions/student'
import IStudent from '../../types/student';
import { connect } from 'react-redux';

function IndexStudent(props:any) {
    const didRun = useRef(false);
    useEffect(() => {
        if(!didRun.current){
            StudentService.getStudents().then(students => {
                props.listStudents(students);
            })
            didRun.current = true;
        }
    }, [])
    return(
        <StudentList/>
    )
}

function mapDispatchToProps(dispatch:any){
    return{
        listStudents: (students:Array<IStudent>) => { dispatch(actions.listStudentsAction(students)) }
    }
}

export default connect(null,mapDispatchToProps)(IndexStudent);