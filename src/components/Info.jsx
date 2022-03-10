import React from 'react'

const Info = ({datas}) => {
  
  return (
    <section className='info-section'>
        <div className='info-container'>
            <div className='each-info'>
                <div className='info-text'>
                    <p>IP ADDRESS</p>
                    {datas ? <h4>{datas.ip}</h4>: <p>""</p> }
                </div>
                <div className='vr-line'></div>
            </div>
            <div className='each-info'>
                <div className='info-text'>
                    <p>LOCATION</p>
                    {datas ? <h4>{datas.location.city}</h4>: <p>""</p> }
                </div>
                <div className='vr-line'></div>
            </div>
            <div className='each-info'>
                <div className='info-text'>
                    <p>TIMEZONE</p>
                    {datas ? <h4>{datas.location.timezone}</h4>: <p>""</p> }
                </div>
                <div className='vr-line'></div>
            </div>
            <div className='each-info'>
                <div className='info-text'>
                    <p>ISP</p>
                    {datas ? <h4>{datas.isp}</h4>: <p>""</p> }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info