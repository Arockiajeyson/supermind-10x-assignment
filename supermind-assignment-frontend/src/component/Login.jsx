import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useRef } from 'react'
import ToastCon from './ToastContext'
export default function Login() {
    const { toast } = useContext(ToastCon)
    const ref1 = useRef()
    const ref2 = useRef()
    const navigate = useNavigate()
    const [state, setState] = useState({ Email: '', Password: '' })
    const handler = () => {
        navigate('/register')
    }
    const handler2 = async() => {
        const {Email,Password} =state
        const res =await axios.post('https://supermind-backend.onrender.com/login',{Email,Password})
        console.log(res.data)
        if(res.data ==='Register first'){
            return toast.error(res.data)
        }else if(res.data ==='invalid password'){
            console.log(res.data)
            ref1.current.style.borderBottom='2px solid red'
            ref2.current.style.borderBottom='2px solid red'
            ref1.current.style.color='red'
            ref2.current.style.color='red'
            return toast.error(res.data)
        }else{
            ref1.current.style.borderBottom='2px solid black'
            ref2.current.style.borderBottom='2px solid black'
            ref1.current.style.color='black'
            ref2.current.style.color='black'
            toast.success(res.data[0])
            localStorage.setItem('token',res.data[1])
            navigate('/post',{replace:true})
        }
    }
  return (
    <div className='main-div'>
            <div className='inp'>
                <div >
                    <h2>Email :</h2>
                    <input type="text" ref={ref1} onChange={(e) => setState({ ...state, Email: e.target.value })} className='input-field'/>
                </div>
                <div>
                    <h2>Password :</h2>
                    <input type="password" ref={ref2} onChange={(e) => setState({ ...state, Password: e.target.value })} className='input-field'/>
                </div>
                <div>
                    <button onClick={handler2} className='btn-home-register'>Login</button>
                </div>
                <div>
                    <h3 className='extra'>Need an account?<span className='sp-tag' style={{color:'blue',cursor:'pointer'}} onClick={handler}>Click</span></h3>
                </div>
            </div>
        </div>
  )
}
