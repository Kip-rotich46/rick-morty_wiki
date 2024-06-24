import React from "react";
import Gender from "../Filters/Category/Gender";
import Status from "../Filters/Category/Status";
import Species from "../Filters/Category/Species";

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies }) => {

  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  }

  return (
    <div className="col-3">
      <div className="text-center fs-4 mb-2">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
