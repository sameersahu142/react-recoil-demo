import React from "react";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";
import './style.css';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

export default App;
