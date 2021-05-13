
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import ListItemDepColor from '../components/ListItemDepColor';
import ListItemInfty from '../components/ListItemInfty';

export default function UseLayoutEffect() {
  const [text, setText] = useState('Initial Text');
  const [text2, setText2] = useState('Initial Text');
  const [label, setLabel] = useState('Label');
  const [label2, setLabel2] = useState('Label2');
  const span = useRef(null);
  const span2 = useRef(null);
  const effectArrow = useRef(null);
  const layoutArrow = useRef(null);

  const changeText= () => {
    setText('');
    setText2('');
    const text = 'Dummy Text ';
    const n = Math.round(Math.random() * 10) + 1;
    setText(text.repeat(n));
    setText2(text.repeat(n));
  };

  useEffect(() => {
    setLabel('');
    effectArrow.current.style.color= `red`;
    const style = window.getComputedStyle(span.current);
    const width = style.width;
    const halfWidth = Number(style.width.replace('px', '')) / 2;
    effectArrow.current.style.marginLeft = `${halfWidth}px`;
    effectArrow.current.style.color= `black`;
    setLabel(halfWidth);
  }, [text]);

  useLayoutEffect(() => {
    setLabel2('');
    layoutArrow.current.style.color= `red`;
    const style = window.getComputedStyle(span2.current);
    const width = style.width;
    const halfWidth = Number(style.width.replace('px', '')) / 2;
    layoutArrow.current.style.marginLeft = `${halfWidth}px`;
    layoutArrow.current.style.color= `black`;
    setLabel2(halfWidth)
  }, [text2]);

  console.log('rendering', span);
  console.log('rendering', span2);

  return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">React useEffect Infinite Render Example</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The card on the left runs its dummy expensive state updating useEffect operation in an endless loop. The card on the right correctly only runs the dummary operation and rerenders when its color props changes.</p>
          </div>
          <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="block">
              <span>{label}</span>
              <svg ref={effectArrow} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
            <div className="w-full flex">
              <span ref={span}>{text }</span>
            </div>
            <div className="w-full flex">
              <span ref={span2}>{text2}</span>
            </div>
            <div className="block">
              <svg ref={layoutArrow} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
              </svg>
              <span>{label2}</span>
            </div>
          </div>
          <button onClick={changeText} className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Change Text</button>
        </div>
      </section>
  )
};
