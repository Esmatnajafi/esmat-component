import React, { useState } from "react";

interface IOptions {
  value: string;
  options: string[];
}
interface IDropdownsProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    options: IOptions[];
    value?: string;
}
export const DropDownEs = (props: IDropdownsProps) => {
   const {label, options, value} = props;

  return (
    <>
      <div className="dropdown-container">
        <label> {label}</label>
        <select value={value}>
            <option>Select {label}</option>
            {options.map((option: IOptions) => {
                return <option>{option.value}</option>
            })}
        </select>
      </div>
    </>
  );
};

export default DropDownEs;
