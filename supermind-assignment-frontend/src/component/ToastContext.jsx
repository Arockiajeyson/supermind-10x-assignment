import React from 'react'
import { createContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const ToastCon = createContext()
export function ToastContext({children}) {
    return (
        <div>
            <ToastCon.Provider value={{ toast }}>
                <Toaster position="top-center" gutter={8} reverseOrder={false}
                    toastOptions={{
                        className: '',
                        duration: 4000,
                        style: {
                            background: '#363636',
                            color: '#fff',
                        },
                        success: {
                            duration: 4000,
                            theme: {
                                primary: 'green',
                                secondary: 'black',
                            },
                        }
                    }}
                />
                {children}
            </ToastCon.Provider>
        </div>
    )
}
export default ToastCon