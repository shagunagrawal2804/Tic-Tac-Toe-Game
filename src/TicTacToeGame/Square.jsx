// import React from 'react';

const Square = (props)=> {
    return(
        <div 
        onClick={props.onClick}
        style={{
        border: '2px solid',
        height:'100px',
        width:'100px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
    
    }}
        className='box'>
            <h5 style={{
                fontSize:'40px'
            }}>{props.value}</h5>
        </div>
    )
}

export default Square;