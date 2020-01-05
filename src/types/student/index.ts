import { StateObject } from './../../utils/stateObject';
export default interface IStudent{
    CodigoAlumno: number,
    NombreAlumno: string,
    ApellidoAlumno: string,
    Edad: number,
    FechaNacimiento: string,
    IndicadorEstado: string,
    EstadoObjeto: StateObject
}

export const studentDefault:IStudent = {
    CodigoAlumno: 0,
    NombreAlumno: "",
    ApellidoAlumno: "",
    Edad: 0,
    FechaNacimiento: "",
    IndicadorEstado: "",
    EstadoObjeto: StateObject.New
}