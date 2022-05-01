import React from 'react'



function Alert(props) {
    
    // const capitalize= (d)=>{
    //     let word1 = d.toLowerCase();
    //     return word1.charAt(0).toUpperCase() + word1.slice(1);
    // }
  return (
    
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>
    
  )
}

export default Alert