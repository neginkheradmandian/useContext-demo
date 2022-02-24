import React , {useState} from "react";
import {ThemeProvider} from './ThemeContext'
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent"

function App() {
  return (
   <ThemeProvider>
     <FunctionContextComponent/>
     <ClassContextComponent/>
   </ThemeProvider>
  );
}

export default App;
