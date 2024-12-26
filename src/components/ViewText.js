import React from 'react';
const ViewText = ({name, addAge})=>{
    console.log('view text component')
    const apiConnect = ()=>{
        for(let i = 0 ; i <=500_00_000; i++){}
        console.log('view text component');
    }
    apiConnect();
return(

    <>
    <div style={{border:'1px solid black' , width:"25%" , margin:"auto", padding:'20px', marginTop:"50px"}}>
        <button onClick={addAge}>add Age</button>
    <p>
        the included text
        </p>
        <p>
        {name.name}
        </p>
        <p>
        {name.age}
        </p>
        
    </div>
    </>
 
)

}
export default React.memo(ViewText)