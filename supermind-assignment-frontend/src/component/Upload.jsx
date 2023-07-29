import React, { useState,useEffect } from 'react'
import FileBase64 from 'react-file-base64';
import axios from 'axios'
import ToastCon from './ToastContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Upload() {
    const { toast } = useContext(ToastCon)
    const navigator = useNavigate()
    const [state, setState] = useState({
        Title: '',
        Dis: '',
        img: ''
    })
    useEffect(() => {
        let tokenChecking = localStorage.getItem('token')
        if (!tokenChecking) {
            navigator('/')
            toast.error('Login')
        }
        
    }, [])
    const handler = async () => {
        const {Title,Dis,img} =state
        if(Title ==''){
            return toast.error('Please give title for your blog')
        }
        if(Dis ==''){
            return toast.error('Please give discription for your blog')
        }
        if(img ==''){
            return toast.error('Please add image for your blog')
        }
        const headers = { 'Authorization': localStorage.getItem('token') }
        const res = await axios.post('http://localhost:3004/upload/posting', {Title,Dis,img}, { headers })
        if (res.data === 'uploaded') {
            toast.success(res.data)
            navigator('/blog')
        }
    }
    const goTo =async()=>{
        const headers = { 'Authorization': localStorage.getItem('token') }
        const res = await axios.post('http://localhost:3004/upload/checking', null, { headers })
        if(res.data =='Successful'){
            toast.success(res.data)
            navigator('/blog')
        }else{
            return toast.error(`${res.data}... Upload blog please`)
        }
    }
    return (
        <div>
            <div className='post-div'>
                <button className='go-to-blog' onClick={goTo}>Go to Blog</button>
                <div className='up-data'>
                    <div>
                        <h1>Title :</h1>
                        <input type="text" onChange={(e) => setState({ ...state, Title: e.target.value })} className='tile'/>
                    </div>
                    <div>
                        <h1>Discription :</h1>
                        <textarea name="area" id="" cols="30" rows="5" onChange={(e) => setState({ ...state, Dis: e.target.value })} className='textArea'></textarea>
                    </div>
                    <h1>Image :</h1>
                    <div className='post-img'>
                        <FileBase64 onDone={(file) => setState({ ...state, img: file.base64 })} className='file' />
                    </div>
                    <div>
                        <button className='send-btn' onClick={handler}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
