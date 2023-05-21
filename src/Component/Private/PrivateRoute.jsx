import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => { 
    const{user,loadding}=useContext(AuthContext) 
    const location=useLocation()
    if(loadding)
    {
        return <div className='flex justify-center items-center'>   <progress className="progress w-56 "></progress></div>
  
    }
    if(user)
    {
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;