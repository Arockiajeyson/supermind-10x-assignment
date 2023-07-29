import React from 'react'
import axios from 'axios'
import { useEffect, useContext } from 'react'
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import ToastCon from './ToastContext';
export default function PostView() {
    const navigator = useNavigate()
    const [state, setState] = useState([])
    const { toast } = useContext(ToastCon)
    const [iset, iState] = useState()
    const [st, setSt] = useState(false)
    const [iofRead, setIodread] = useState()
    useEffect(() => {
        let tokenChecking = localStorage.getItem('token')
        if (!tokenChecking) {
            navigator('/')
            toast.error('Login')
        }
        const func = async () => {
            console.log(localStorage.getItem('token'))
            const headers = { 'Authorization': localStorage.getItem('token') }
            const res = await axios.post('http://localhost:3004/upload/geting', null, { headers })
            setState(res.data)
        }
        func()
    }, [])
    const goTo = () => {
        localStorage.clear()
        navigator('/')
    }
    const datas = (i) => {
        iState(i)
    }
    const over =(i)=>{
        iState(i)
        setSt(true)
    }
    const out =()=>{
        setSt(false)
    }
    const create =()=>{
        toast.success("Going back")
        navigator('/post')
    }
    return (
        <div>
            <button className='create-btn' onClick={create}>+ Create</button>
            <button className='go-to-blog' onClick={goTo}>Log out</button>
            <h1 style={{textAlign:'center'}}>Blogs</h1>
            <div className='blogs'>
                {state.length !== 0 ?
                    <div className='content' style={{ marginTop: '40px' }}>
                        {state.map((e,i)=>{
                            return(
                                <div key={i} className='posted-data-blog' onMouseOver={()=>over(i)} onMouseOut={()=>out()}>
                                    <p className='title-blog'>{e.Title}</p>
                                    <img src={e.img} alt="" className={iset ==i && st ?'img-blog moseover':'img-blog'}/>
                                    {iset ==i && st ?<p className='discription'>Discription: {e.Dis}</p>:''}
                                </div>
                            )
                        })}
                    </div> :
                    <div className='loader'>
                        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                            <CircularProgress color="inherit" />
                        </Stack>
                    </div>
                }
            </div>
        </div>
    )
}
