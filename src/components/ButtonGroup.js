import React from "react";
const ButtonGroup = ({ children }) => {
  console.log(children);
  const clonedElement = React.cloneElement(children, {
    color: 'red',
    customClasses: 'group',
  });
  return (
    <>
      <div>{clonedElement}</div>
    </>
  );
};
export default ButtonGroup;
