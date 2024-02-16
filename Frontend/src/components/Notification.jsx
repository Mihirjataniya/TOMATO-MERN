import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultOptions = {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
}

const notifcation = (type,message) => {
    switch(type){
        case 'success' :
            toast.success(message,defaultOptions)
            break
        
        case 'error' :
            toast.error(message,defaultOptions)
            break
        
        case 'warning' :
            toast.warning(message,defaultOptions)
            break

        default:
            toast.info("Something went wrong",defaultOptions)
            break
    }
}

export default notifcation