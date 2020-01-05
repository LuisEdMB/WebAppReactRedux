import React from 'react'
import { Modal, Col, Form } from 'react-bootstrap'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import * as actions from '../../actions/student'
import { connect } from 'react-redux'
import { StateObject } from '../../utils/stateObject'
import StudentService from '../../services/student';
import IStudent from '../../types/student'

function StudentForm(props:any) {
    const MappingErrors = yup.object().shape({
        NombreAlumno: yup.string().required("Insert the First Name."),
        ApellidoAlumno: yup.string().required("Insert the Last Name."),
        Edad: yup.number().required("Insert the age.").integer("The age must be integer."),
        FechaNacimiento: yup.string().required("Insert the date of birth.")
    })
    const {register, handleSubmit, errors} = useForm({
        mode: "onChange",
        validationSchema: MappingErrors
    });
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        props.setPropertiesStudent(name, value)
    }
    const saveStudent = () => {
        if(props.student.student.EstadoObjeto == StateObject.New){
            StudentService.saveStudent(props.student.student).then(response => {
                getStudents();
            })
        }
        else{
            StudentService.modifyStudent(props.student.student).then(response => {
                getStudents();
            })
        }
    }
    const getStudents = () => {
        StudentService.getStudents().then(students => {
            props.listStudents(students);
            props.closeStudentFormAction();
        })
    }
    const closeModal = () => {
        props.closeStudentFormAction();
    }
    return(
        <Modal 
            show={props.student.modalOpen}
            onHide={closeModal}
            size="lg"
            centered
            backdrop="static"
            >
            <Modal.Header>
                <Modal.Title>Maint. Students</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control name="NombreAlumno" type="text" value={props.student.student.NombreAlumno} onChange={handleInputChange} ref={register}/>
                            { errors.NombreAlumno && <p>{ errors.NombreAlumno.message }</p> }
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control name="ApellidoAlumno" type="text" value={props.student.student.ApellidoAlumno} onChange={handleInputChange} ref={register}/>
                            { errors.ApellidoAlumno && <p>{ errors.ApellidoAlumno.message }</p> }
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Age:</Form.Label>
                            <Form.Control name="Edad" type="text" value={props.student.student.Edad} onChange={handleInputChange} ref={register}/>
                            { errors.Edad && <p>{ errors.Edad.message }</p> }
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Date of Birth:</Form.Label>
                            <Form.Control name="FechaNacimiento"type="date" value={props.student.student.FechaNacimiento} onChange={handleInputChange} ref={register}/>
                            { errors.FechaNacimiento && <p>{ errors.FechaNacimiento.message }</p> }
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-sm btn-success" onClick={handleSubmit(saveStudent)}>
                    <span>Save</span>
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => closeModal()}>
                    <span>Cancel</span>
                </button>
            </Modal.Footer>
        </Modal>
    )
}

function mapStateToProps(state:any){
    return{
        student: state.student
    }
}

function mapDispatchToProps(dispatch:any){
    return{
        setPropertiesStudent: (name:any, value:any) => { dispatch(actions.setPropertiesStudentAction(name, value)) },
        closeStudentFormAction: () => { dispatch(actions.closeStudentFormAction()) },
        listStudents: (students:Array<IStudent>) => { dispatch(actions.listStudentsAction(students)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)