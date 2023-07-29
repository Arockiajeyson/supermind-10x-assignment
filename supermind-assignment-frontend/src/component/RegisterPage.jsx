import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ToastCon from './ToastContext'
export default function RegisterPage() {
    const { toast } = useContext(ToastCon)
    const navigate = useNavigate()
    const [state, setState] = useState({ Email: '', Password: '', Confirmpassword: '' })
    const handler = async() => {
        const {Email,Password,Confirmpassword} =state
        if(Password !== Confirmpassword){
            return toast.error("Password and confirm password must be same")
        }
        const res =await axios.post('https://supermind-backend.onrender.com/register',{Email,Password})
        if(res.data ==='Successful'){
            toast.success(res.data)
            navigate('/')
        }else if(res.data ==='Data exist already'){
            toast.error(res.data)
        }
    }
    const handler2 = () => {
        navigate('/')
    }
  return (
    <div className='main-div'>
    <div className='inp'>
        <div>
            <h2>Email :</h2>
            <input type="email" onChange={(e) => setState({ ...state, Email: e.target.value })} className='input-field'/>
        </div>
        <div>
            <h2>Password :</h2>
            <input type="password" onChange={(e) => setState({ ...state, Password: e.target.value })} className='input-field'/>
        </div>
        <div>
            <h2>Confirm password :</h2>
            <input type="password" onChange={(e) => setState({ ...state, Confirmpassword: e.target.value })} className='input-field'/>
        </div>
        <div>
            <button  className='btn-home-register' onClick={handler}>Register</button>
        </div>
        <div>
            <h3  className='extra'>Already have an account?<span className='sp-tag' style={{color:'blue',cursor:'pointer'}} onClick={handler2}>Click</span></h3>
        </div>
    </div>
</div>
  )
}
