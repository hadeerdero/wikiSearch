import React from "react"
const Button = ({label,color,customClass,calBackFun,children})=>{
    console.log("button")
return(
    <div className={`${customClass ? 'button'+ customClass:'button'}`}
    style={{color:color,border:'1px solid black', width:'20%'}} onClick={()=>calBackFun(children)}>
    {/* <button>{label}</button> */}
    {children}
    </div>
)
}
export default Button 