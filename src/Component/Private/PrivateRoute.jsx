import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => { 
    const{user,loadding}=useContext(AuthContext)
    if(loadding)
    {
        return <div className='flex justify-center items-center'>   <progress className="progress w-56 "></progress></div>
  
    }
    if(user)
    {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;