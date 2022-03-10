import React, { useState, useEffect } from 'react'
import Ipify from './Ipify'
import Arrow from '../images/icon-arrow.svg'
import Maps from './Maps'
import Info from './Info'
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const Form = () => {
    const [ipAddress, setIpAddress] = useState('')
    const [domain, setDomain] = useState('') 
    const [datas, setData] = useState(null)
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const color = "#ffffff";

    const key = process.env.REACT_APP_IP_API_KEY
    

    const handleSubmit = (e) => {
        if(e) {
            e.preventDefault();
        }

        setIsPending(true);
        setData(null);
        setError(null)
        
        try{
          getLocation()
        } catch {

        } 
    }

    useEffect(() => {
        handleSubmit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const getLocation = async() => {
        try {
          const data = await Ipify.get(`country,city?apiKey=${key}&ipAddress=${ipAddress}&domain=${domain}`);
          setData(data.data);
          setIsPending(false);
          setError(null)
        }
        catch(err) {
            console.log(err);
            setError('Something went wrong ...');
            setIsPending(false);
        }   
    }
    const handlesearch = (e) => {
      setIpAddress(e.target.value)
      setDomain(e.target.value)
    }
    console.log(datas)
    console.log(error)
    console.log(isPending)

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    color: white;
   `;

  return (
    <div>
       <div className='bg-style'>
            <h1 className='header-text'>IP Address Tracker</h1>
            <div className='form-action'> 
                <form action="" onSubmit={handleSubmit} className='form-style' >
                    <input type="text" defaultValue={ipAddress} value={domain} onChange={handlesearch} placeholder="Search for any IP address and Domain here..." className='input-style' />
                    <button onClick={handleSubmit} className='btn-submit'>
                        <img src={Arrow} alt="arrow" />
                    </button>
                </form>
                {isPending ? <p className='loading-text'>Please Wait <BeatLoader css={override} color={color} size={15} /></p> : <p></p> }
                {error && <p className='loading-text'>{error}</p> }
                {datas ? <Info datas={datas} isPending={ isPending } error={ error } /> : <div></div> }
            </div>
       </div>
        {datas ? <Maps datas={datas} error={error} isPending={ isPending } /> : <div></div>}
    </div>
  )
}

export default Form