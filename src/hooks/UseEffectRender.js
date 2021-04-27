import React, { useState } from 'react';
import ListItemDepProps from '../components/ListItemDepProps';
import ListItemDepColor from '../components/ListItemDepColor';

export default function UseEffectRender() {
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
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">React useEffect Render Dependency Example</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The card on the left runs the dummy expensive operation everytime any of its props are changed. The card on the right only runs the expensive operation and rerenders when its color prop changes</p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <ListItemDepProps color={color} val={count} key={0} />
            <ListItemDepColor color={color} val={count} key={1} />
          </div>
          <button onClick={setRandomColor} className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Change Color</button>
          <button onClick={incCount} className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Increase Count</button>
        </div>
      </section>
  )
};
