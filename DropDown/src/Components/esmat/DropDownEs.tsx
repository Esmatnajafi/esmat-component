import React, { useState } from "react";

const DropDownEs: React.FC = () => {
  const [subject, setSubject] = useState<string[]>([
    "facebook",
    "Instagram",
    "Tiktok",
    "X",
    "Whatsapp",
  ]);
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <>
      <div className="dropdown-container">
        <div className="card-header">
          <h2>Dropdown</h2>
        </div>
        <div className="card-body">
          <form className="form-card">
            <select className={`select-option ${selectedOption ? "selected" : ""}`}
              name=""
              id="form-select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option className="placeholder"
                value=""
                disabled={selectedOption !== undefined}
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
