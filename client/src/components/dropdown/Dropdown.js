import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Moment from "moment";

function Dropdown({ options, prompt, value, onChange, q, setQ }) {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setOpen(e && e.target === ref.current);
  }

  function displayValue(){
    if (q.length > 0) return q
    if(choice) return choice
    return ""
  }

  return (
    <div className="dropdown" style={{width:160}}>
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value" >
          <input
            type="text"
            placeholder={`Select ${prompt}`}
            ref={ref}
            value={displayValue()}
            required
            style={{width:110, fontSize:'10pt'}}
            onChange={(e) => {
              setQ(e.target.value);
              onChange(0);
            }}
            onClick={() => setOpen((prev) => !prev)}
          ></input>{" "}
        </div>
        <div className={`arrow ${open ? "open" : null}`} onClick={() => setOpen( prev => !prev)} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {q.length > 2 || choice
          ? options
              .filter((p) =>
                p.name_display_first_last
                  .toLowerCase()
                  .includes(q.toLowerCase())
              )
              .map((p) => (
                <div
                  className="option"
                  onClick={() => {
                    setQ("");
                    onChange(p)
                    setOpen(false);
                    setChoice(p.name_display_first_last)
                  }}
                  key={p.player_id}
                >
                  {p.name_display_first_last}, {Moment(new Date(p.pro_debut_date)).format('YYYY')}
                </div>
              ))
          : "please enter at least 3 characters"}

        {/* options.map(option => <div className='option'>{option.name}</div>)
        } */}
      </div>
    </div>
  );
}

export default Dropdown;
