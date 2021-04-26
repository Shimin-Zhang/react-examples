import React, { useState, useEffect } from 'react';

export default function ListItemDepAll(props) {
  const {color, val} = props;
  const [expOp, setExpOp] = useState(0);

  useEffect(() => {
    setTimeout(() => { setExpOp((e) => e + 1) }, 1000);
  }, [props]);

  const className = `text-${color}-500 w-6 h-6 flex-shrink-0 mr-4`;
  console.log('rendering from dep props');
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 rounded flex p-4 w-full items-center">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className={className} viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span className="title-font font-medium">All Props Dependency</span>
      </div>
      <div className="bg-gray-100 rounded flex p-4 w-full items-center">
        <span className="title-font font-medium">Count: {val}</span>
      </div>
      <div className="bg-gray-100 rounded flex p-4 w-full items-center">
        <span className="title-font font-medium">Expensive Operation Ran {expOp} Times</span>
      </div>
    </div>
  );
}
