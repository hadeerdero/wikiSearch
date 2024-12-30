import React from "react"
const List = ({items,children})=>{
    const child = items.map((el)=>React.cloneElement(children,{item:el, key:el.id}));
return(
    <div className="list">
{child}
    </div>
)
}
export default List