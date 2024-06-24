import React from "react";
import FilterBtn from "../FilterBtn";

const Status = ({ setPageNumber, setStatus }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBtn
              key={index}
              index={index}
              name="status"
              items={items}
              setPageNumber={setPageNumber}
              task={setStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
