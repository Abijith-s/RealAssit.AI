import React, { useRef } from 'react';
import './button.css';
import ReactToPrint from "react-to-print";
import BurglaryGraph from '../Chart/BurglaryGraph';

function PrintButton({data}) {
  let componentRef = useRef();

  return (
    <>
      <div className='print-button-main'>
        <ReactToPrint
          trigger={() => <button className='btn btn-dark print-button'>
          <i className="fa-solid fa-print print-icon" />
              Print
          </button>}
          content={() => componentRef}
        />
      </div>
      <BurglaryGraph ref={(el) => (componentRef = el)} data={data}/>
    </>
  );
};

export default PrintButton;