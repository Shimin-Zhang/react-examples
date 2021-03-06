import React, { useState } from 'react';
import ListItemDepColor from '../components/ListItemDepColor';
import ListItemInfty from '../components/ListItemInfty';

export default function UseEffectInfty() {
  const [color, setColor] = useState("red");
  const possibleColors = ['red', 'blue', 'green', 'yellow', 'indigo'];
  const setRandomColor = () => {
    const nextIdx = (possibleColors.findIndex(i => i === color) + 1) % 5;
    setColor(possibleColors[nextIdx]);
  };
  const [count, setCount] = useState(1);
  const incCount = () => {
    setCount(count+1);
  };

  return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">React useEffect Infinite Render Example</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The card on the left runs its dummy expensive state updating useEffect operation in an endless loop. The card on the right correctly only runs the dummary operation and rerenders when its color props changes.</p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <ListItemInfty color={color} val={count} key={0} />
            <ListItemDepColor color={color} val={count} key={1} />
          </div>
          <button onClick={setRandomColor} className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Change Color</button>
          <button onClick={incCount} className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Increase Count</button>
        </div>
      </section>
  )
};
