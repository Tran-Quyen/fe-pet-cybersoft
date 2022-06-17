import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import * as act from "../../store/action";
import { useStyles } from "./useStyles";
function SimpleSelect({ data, id, getDetailData }) {
 const classes = useStyles();
 const [options, setOptions] = React.useState([]);
 const [sheet, setSheet] = useState("");
 useEffect(() => {
  setOptions(data);
 }, [data]);
 const handleChange = (event) => {
  setSheet(event.target.value);
  let option = event.target.value;
  let data = { id, option };
  getDetailData(data);
 };
 return (
  <div>
   <FormControl className={classes.formControl}>
    <InputLabel id='demo-simple-select-label'>Chọn Bảng</InputLabel>
    <Select
     labelId='demo-simple-select-label'
     id='demo-simple-select'
     value={sheet}
     onChange={handleChange}
    >
     {options.length > 0 ? (
      options.map((item, index) => {
       return (
        <MenuItem value={item.properties.title} key={index}>
         {item.properties.title}
        </MenuItem>
       );
      })
     ) : (
      <MenuItem value={0}>Nhập Link để chọn bảng</MenuItem>
     )}
    </Select>
   </FormControl>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  data: state.reducer.data,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getDetailData: (data) => {
   dispatch(act.getSheetsDetail(data));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleSelect);
