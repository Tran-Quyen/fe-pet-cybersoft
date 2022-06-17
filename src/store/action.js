import * as ActionTypes from "./action.type";
import {  toast } from 'material-react-toastify';
import axios from "axios";
export const getSheets = (spreadsheetsId) => {
 return (dispatch) => {
  axios({
   method: "GET",
   url: `https://googlesheetapi274.herokuapp.com/?id=${spreadsheetsId}&sheets=fill_inblank_html_css`,
  })
   .then(async (result) => {
    dispatch({
     type: await ActionTypes.GET_SHEETS,
     data: await result.data,
    });
    toast.success('Get Success');
   })
   .catch((err) => {
    toast.error('Have Error! Please Check Again');
    return err;
   });
 };
};
export const getSheetsDetail = (data) => {
 let { id, option } = data;
 return (dispatch) => {
  axios({
   method: "GET",
   url: `https://googlesheetapi274.herokuapp.com/sheets?id=${id}&sheets=${option}`,
  })
   .then(async (result) => {
    dispatch({
     type: await ActionTypes.GET_SHEETS_DETAIL,
     sheetData: await result.data,
     option: option
    });
   })
   .catch((err) => {
    toast.error('Have Error! Please Check Again');
    return err;
   });
 };
};
