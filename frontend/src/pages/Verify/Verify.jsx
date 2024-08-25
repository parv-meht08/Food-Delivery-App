/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './Verify.css'

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    
    const verifyPayement = async () => {
        const responce = await axios.post(url + "/api/order/verify", {success, orderId});
        if (responce.data.success) {
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }

    useEffect(() => {
      verifyPayement();
    }, [])
    
    return (
        <div className='verify'>
           <div className="spinner">

           </div>
        </div>
    );
};

export default Verify;
