import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddStudent } from '../../redux/action/adminAction'
import AdminHomeHelper from '../../Components/AdminHomeHelper'
import Button from '../../Components/Button/Button'
import './AdminAddStudent.css'
import {AiOutlinePlus} from 'react-icons/ai'
import '../../Style/Loader2.css'


const AdminAddStudent = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [section, setSection] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [studentMobileNumber, setContactNumber] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [fatherMobileNumber, setFatherContactNumber] = useState('')
    const [aadharCard, setAadharCard] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const refresh = ()=>{
        Location.reload()
    }

    const formHandler = (e) => {
        e.preventDefault()
        setTimeout(()=>refresh,300)
        setIsLoading(true)
        dispatch(adminAddStudent({
            name,
            email,
            year,
            department,
            fatherName,
            aadharCard,
            gender,
            section: section.toUpperCase(),
            dob: dob.split("-").reverse().join("-"),
            studentMobileNumber,
            fatherMobileNumber
        }))
    } 
    useEffect(() => {
        if (store.admin.adminAddStudentFlag) {
            setError({})
        }
    }, [store.admin.adminAddStudentFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddStudentFlag) {
            setIsLoading(false)
        }
    }, [store.error, store.admin.adminAddStudentFlag])
    return (
        <section className='add-student-admin'>
            {store.admin.isAuthenticated ? <><AdminHomeHelper />
                <div className="add-student-section">
                    <div className="add-student-container ">
                       
                            <form noValidate onSubmit={formHandler}>
                                <div className="row">
                                    <div className="col-md-6">
                                       <div className="container-inputs">
                                       <div className="form-group">
                                            <label htmlFor="nameId">Nome do Aluno</label>
                                            <input onChange={(e) => setName(e.target.value)} type="text" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.name
                                                })} id="nameId" />
                                            {error.name && (<div className="invalid-feedback">{error.name}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailId">Email</label>
                                            <input onChange={(e) => setEmail(e.target.value)} type="email" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.email
                                                })} id="emailId" />
                                            {error.email && (<div className="invalid-feedback">{error.email}</div>)}
                                        </div>
                                       </div>
                                        <div className="container-inputs">
                                        <div className="form-group">
                                            <label htmlFor="departmentId">Departamento</label>
                                            <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.department
                                                })} id="departmentId">
                                                <option>Selecione</option>
                                                <option value="maternal/jardin de infancia/alfabetiza????o">Maternal/jardin de infancia/alfabetiza????o</option>
                                        <option value="fundamental 1">Fundamental 1</option>
                                        <option value="fundamental 2">Fundamental 2</option>
                                        <option value="ensino m??dio">Ensino M??dio</option>
                                            </select>
                                            {error.department && (<div className="invalid-feedback">{error.department}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="yearId">Ano</label>
                                            <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.year
                                                })} id="yearId">
                                                <option>Selecione</option>
                                                <option value="1">Maternal/jardin de infancia/alfabetiza????o</option>
                                        <option value="2">1?? ano ensino fundamental</option>
                                        <option value="3">2?? ano ensino fundamental</option>
                                        <option value="4">3?? ano ensino fundamental</option>
                                        <option value="5">4?? ano ensino fundamental</option>
                                        <option value="6">5?? ano ensino fundamental</option>
                                        <option value="7">6?? ano ensino fundamental</option>
                                        <option value="8">7?? ano ensino fundamental</option>
                                        <option value="9">8?? ano ensino fundamental</option>
                                        <option value="10">9?? ano ensino fundamental</option>
                                        <option value="11">1?? ano ensino m??dio</option>
                                        <option value="12">2?? ano ensino m??dio</option>
                                        <option value="13">3?? ano ensino m??dio</option>
                                            </select>
                                            {error.year && (<div className="invalid-feedback">{error.year}</div>)}
                                        </div>
                                        </div>
                                        
                                        <div className="container-inputs">
                                        <div className="form-group">
                                            <label htmlFor="sectionId">Per??odo</label>
                                            <input onChange={(e) => setSection(e.target.value)} type="text" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.section
                                                })} id="sectionId" />
                                            {error.section && (<div className="invalid-feedback">{error.section}</div>)}
                                        </div>
                                        <div class="form-group">
                                            <label htmlFor="dobId">Data de entrada</label>
                                            <input onChange={(e) => setDob(e.target.value)} type="date" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.dob
                                                })} id="dobId" />
                                            {error.dob && (<div className="invalid-feedback">{error.dob}</div>)}
                                        </div>
                                        </div>
                                    </div>
                                   
                                        
                                       <div className="container-inputs">
                                       <div className="form-group">
                                            <label htmlFor="genderId">G??nero</label>
                                            <select onChange={(e) => setGender(e.target.value)} class="form-control" id="genderId">
                                                <option>Selecione</option>
                                                <option value="Male">Masculino</option>
                                                <option value="Female">Feminino</option>
                                                <option value="Other">Outro...</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="numberId">N??mero de Contato</label>
                                            <input onChange={(e) => setContactNumber(e.target.value)} required type="number" class="form-control" id="numberId" />
                                        </div>
                                       </div>
                                        <div className="container-inputs">
                                        <div className="form-group">
                                            <label htmlFor="fatherId">Nome do Pai/M??e</label>
                                            <input onChange={(e) => setFatherName(e.target.value)} type="text" class="form-control" id="fatherId" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="fathercnId">N??mero do Pai/M??e</label>
                                            <input onChange={(e) => setFatherContactNumber(e.target.value)} type="number" className="form-control" id="fathercnId" />
                                        </div>
                                        </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-1">
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <div class="loader-2">Cerregando...</div>
                                            </div>
                                        }
                                    </div>
                                </div>
                               <div className="center-btn">
                               {!isLoading && <Button type='submit' className='btn' title='Adicionar Aluno +'/>}
                               </div>
                            </form>
                        </div>
                    </div>
                </>:(history.push('/'))}
            
            </section>

            
      
    )
}

export default AdminAddStudent
