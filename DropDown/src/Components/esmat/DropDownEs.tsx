// import React and useState hook from React Library
import React, { useState } from "react";

// a functional component name "Dropdownes" 
const DropDownEs: React.FC = () => {

  // a state variable "subject" of type string
  // initial it with an array containing some options
  const [subject, setSubject] = useState<string[]>([
    "facebook",
    "Instagram",
    "Tiktok",
    "X",
    "Whatsapp",
  ]);

  // a state variable "selectedOption" 
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <>
    {/* Render the dropdown component */}
      <div className="dropdown-container">
        <div className="card-header">
          <h2>Dropdown</h2>
        </div>
        <div className="card-body">
          <form className="form-card">
           {/* Render a select dropdown element */}
            <select className={`select-option ${selectedOption ? "selected" : ""}`}
              name=""
              id="form-select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option className="placeholder"
                value=""
                disabled={selectedOption !== undefined} // Disable the default option if an option is already selected
              >
                Select Option
              </option>
              {subject.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default DropDownEs;