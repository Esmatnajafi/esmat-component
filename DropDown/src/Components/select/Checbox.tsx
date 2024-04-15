import React, { useState } from "react";
import "./Checkbox.scss";

const Checbox: React.FC = () => {
    const [checkbox, setCheckbox] = useState<boolean>(false);  

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckbox(e.target.checked)
    }
    return (
        <>
        <div className="checkbox-container">
            <input className="checkbox-input" type="checkbox" checked={checkbox} onChange={handleCheckboxChange} />
            <label htmlFor="checkbox" className="checkbox-label">Checkbox</label>
        </div>
        </>
    );
}


export default Checbox;  
