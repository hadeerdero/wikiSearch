
import { useState, useEffect, useRef, useMemo } from "react";

const ViewCounter = ({num,increaseCount})=>{
    console.log("conter component view")
  return (
<>
<div style={{border:'1px solid black' , width:"25%" , margin:"auto", padding:'20px' ,marginTop:"50px"}}>
<p>
    {num}
</p>
<button onClick={increaseCount}> increase</button>
</div>

</>
  )
    

  
}
export default ViewCounter