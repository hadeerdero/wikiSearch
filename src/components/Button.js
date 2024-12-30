import React from "react"
const Button = ({ label, color, customClasses, chilren})=>{
    console.log("button")
return(
    <div className={`${customClasses ? 'button' + customClasses : 'button'}`}
        style={{color:color}}
    >
    <button>{label}</button>
    </div>
)
}
export default Button