import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LinkIcon from "@material-ui/icons/Link";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import DropDown from "../../components/DropDown/dropdown.component";
import * as act from "../../store/action";
import {  toast } from 'material-react-toastify';
import { useStyles } from "./useStyles";
function AddLinkBar({ getData }) {
 const classes = useStyles();
 const [txtLink, setTxtLink] = useState("");
 const [ID, setID] = useState("");
 const handleSubmit = () => {
          if(txtLink.match(RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)"))){
                    let spreadsheetId = new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(
                              txtLink
                             )[1];
                    setID(spreadsheetId);
                    getData(spreadsheetId);
            }
            else {
                      toast.error('Please check your link')
            }
 };
 return (
  <div>
   <div className={classes.margin}>
    <Grid className={classes.grid} container spacing={1} alignItems='flex-end'>
     <Grid item>
      <LinkIcon />
     </Grid>
     <Grid item>
      <TextField
       id='input-with-icon-grid'
       label='Add Link'
       onChange={(event) => setTxtLink(event.target.value)}
      />
     </Grid>
     <Grid item>
      <Button variant='contained' color='primary' onClick={handleSubmit}>
       GET DATA
      </Button>
     </Grid>
    </Grid>
   </div>
   {ID ? <DropDown id={ID} /> : null}
  </div>
 );
}
const mapDispatchToProps = (dispatch) => {
 return {
  getData: (spreadsheetId) => {
   dispatch(act.getSheets(spreadsheetId));
  },
 };
};
export default connect(null, mapDispatchToProps)(AddLinkBar);
