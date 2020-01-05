import React from 'react'
import StudentService from '../../services/student'

export default function StudentListItem(props:any) {
    const getStudent = (idStudent:number) => {
        StudentService.getStudent(idStudent).then(student => {
            props.setStudent(student);
            props.openFormStudent();
        })
    }
    const inactivateStudent = (idStudent:number) => {
        StudentService.inactivateStudent(idStudent).then(response => {
            StudentService.getStudents().then(students => {
                props.listStudents(students);
            })
        })
    }
    return(
        <tr key={props.student.CodigoAlumno}>
            <td className="text-center">{props.student.NombreAlumno} {props.student.ApellidoAlumno} </td>
            <td className="text-center">{props.student.Edad}</td>
            <td className="text-center">{props.student.FechaNacimiento}</td>
            <td className="text-center">
                <button className="btn btn-warning btn-sm" onClick={() => {
                    getStudent(props.student.CodigoAlumno)
                }}>
                    <span>Modifiy</span>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => {
                    inactivateStudent(props.student.CodigoAlumno)
                }}>
                    <span>Inactivate</span>
                </button>
            </td>
        </tr>
    )
}