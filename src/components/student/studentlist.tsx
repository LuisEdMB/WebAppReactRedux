import React from 'react'
import IStudent, { studentDefault } from '../../types/student';
import StudentListItem from './studentlistitem';
import { connect } from 'react-redux';
import * as actions from '../../actions/student'
import StudentForm from './studentform';

function StudentList(props:any) {
    const OpenStudentForm = () => {
        props.setStudent(studentDefault);
        props.openFormStudent();
    }
    return(
        <div className="container-responsive">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center col-md-18">First and Last Name</th>
                        <th className="text-center col-md-2">Age</th>
                        <th className="text-center col-md-3">Date of Birth</th>
                        <th className="text-center col-md-1">
                            <button className="btn btn-success btn-sm" onClick={() => 
                                OpenStudentForm()}> 
                                <span>Add</span>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.student.students.map((student:IStudent) => {
                            return(
                                <StudentListItem key={student.CodigoAlumno} {...props} student={student}/>
                            );
                        })
                    }
                </tbody>
            </table>
            <StudentForm/>
        </div>
    )
}

function mapStateToProps(state:any){
    return{
        student: state.student
    }
}

function mapDispatchToProps(dispatch:any){
    return{
        setStudent: (student:IStudent) => { dispatch(actions.setStudentAction(student)) },
        openFormStudent: () => { dispatch(actions.openStudentFormAction()) },
        listStudents: (students:Array<IStudent>) => { dispatch(actions.listStudentsAction(students)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);