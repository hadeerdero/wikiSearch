import React, { useState } from "react";
const ButtonGroup = ({ children }) => {
    console.log(children,"childrens")
    // const calBackFun = (e)=>{
    //     console.log(e)
    // }
    // const [clonedElements,setClonedElements] = useState([])
//     children.map((el)=>{
//         const text = el.props.children + "?";
//   const cloneElement = React.cloneElement(el, {
//     color: "red",
//     customClass: "group",
//     calBackFun
//   },text);
//   setClonedElements((prev) => [...prev, cloneElement]);
//     })
// const newClonedElements = children.map((el,index) => {
//     const text = el.props.children + "?";
//     return React.cloneElement(el, {
//         key:index,
//       color: "red",
//       customClass: "group",
//       calBackFun,
//     }, text);
//   });
const newClonedElements = React.Children.map(children,(el,index)=>{
    const text = el.props.children + "?";
    const {calBackFun} = el.props

    return React.cloneElement(el, {
                key:index,
              color: "red",
              customClass: "group",
              calBackFun,
            }, text);
          });


  // Update state with cloned elements
//   setClonedElements(newClonedElements);
  
  return (
    <>
      <div>{newClonedElements}</div>
    </>
  );
};
export default ButtonGroup;
