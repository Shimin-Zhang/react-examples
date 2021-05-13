import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UseEffectRender from './hooks/UseEffectRender';
import UseEffectInfty from './hooks/UseEffectInfty';
import UseLayoutEffect from './hooks/UseLayoutEffect';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/useeffect-render">
          <UseEffectRender />
        </Route>
        <Route path="/useeffect-loop">
          <UseEffectInfty />
        </Route>
        <Route path="/uselayouteffect">
          <UseLayoutEffect/>
        </Route>
      </Switch>
    </Router>
  )
};
