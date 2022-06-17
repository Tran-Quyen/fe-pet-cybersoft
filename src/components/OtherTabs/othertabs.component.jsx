import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default function Switches() {
 const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
 });

 const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
 };

 return (
  <div>
   <span> </span>
  </div>
 );
}
