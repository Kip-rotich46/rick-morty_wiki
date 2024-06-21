import React from 'react';
import FilterBtn from '../FilterBtn';

const Status = () => {
  let status = ['Alive', 'Dead', 'Unknown'];

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
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {status.map((items, index) => (
                <FilterBtn key={index} index={index} name='status' items={items}/>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Status
