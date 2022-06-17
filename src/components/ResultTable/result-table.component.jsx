import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { DateTime } from "luxon";
import {  toast } from 'material-react-toastify';
import { useStyles } from "./useStyles";
import { convertData } from "./convertData";
function DetailedAccordion({ sheetData ,option}) {
 const classes = useStyles();
 const textAreaRef = useRef(null);
 const [data, setData] = useState([]);
 useEffect(() => {
  setData(sheetData);
 }, [sheetData]);
 function mapData() {
  let currentDate = DateTime.now().toFormat("yyyy-LL-dd HH:mm:ss");
  let copyData = [];
  let sheetOptionNumber = filterSheetOption();
  data.values.map((item, index) => {
    let rawData = [
      `N'` + `${item[1]}`,
      `N'` + `${item[2]}`,
      sheetOptionNumber==='1' ? "" : `N'` + `${item[3]}`,
      sheetOptionNumber==='1' ? `N'` + `${item[3]}` : `N'` + `${item[4]}`,
      sheetOptionNumber,
      "",
      item[8],
      "",
      "",
      currentDate,
    ];
    return index > 0 && item[1] !== "" ? copyData.push(rawData) : null;
  });
  return copyData;
}
function filterSheetOption() {
  let sheetOptionNumber = '';
  switch (option) {
    case 'single_choice':
      sheetOptionNumber = '4';
      break;
    case 'multiple_choice':
      sheetOptionNumber = '5';
      break;
    case 'fill_inblank_input':
      sheetOptionNumber = '3';
      break;
    case 'fill_inblank_html_css':
      sheetOptionNumber = '2';
      break;
    case 'fill_inblank_code':
      sheetOptionNumber = '1';
      break;
    default:
      break;
  }
  return sheetOptionNumber;
}
function showResult() {
  let copyData = mapData();
  let convertedData = convertData(copyData);
  return convertedData;
}
 const handleClick = event => {
  let convertedData = showResult();
  navigator.clipboard.writeText('INSERT INTO tblBaiTap (TieuDe,NoiDung,NoiDungCSS,OUTPUT,LoaiBaiTap,NgonNgu,CapDo,GhiChu,DaXoa,NgayTao) VALUES'+convertedData);
  toast.success(`Copied Table ${filterSheetOption()}!`);
 };
 return data.values.length > 0 ? (
  <div className={classes.root}>
   <AccordionDetails className={classes.details}>
    <div className={classes.columnSQLHeading}>
     <IconButton aria-label='delete' onClick={handleClick}>
      <FileCopyIcon />
     </IconButton>
    </div>
    <div className={clsx(classes.columnSQL, classes.helper)}>
     <Accordion>
      <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls='panel1a-content'
       id='panel1a-header'
      >
       <Typography className={classes.heading}>Result</Typography>
      </AccordionSummary>
      <AccordionDetails>
       <pre className={classes.pre}>
        <code ref={textAreaRef}>
         INSERT INTO tblBaiTap(
    TieuDe,
    NoiDung,
    NoiDungCSS,
    OUTPUT,
    LoaiBaiTap,
    NgonNgu,
    CapDo,
    GhiChu,
    DaXoa,
    NgayTao
)
VALUES {showResult()}
        </code>
       </pre>
       <br />
      </AccordionDetails>
     </Accordion>
    </div>
   </AccordionDetails>
   <Accordion defaultExpanded>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls='panel1c-content'
     id='panel1c-header'
    >
     <div className={classes.column}>
      <Typography className={classes.heading}>Tiêu Đề</Typography>
     </div>
     <div className={classes.column}>
      <Typography className={classes.heading}>Nội Dung</Typography>
     </div>
     <div className={classes.column}>
      <Typography className={classes.heading}>OUTPUT</Typography>
     </div>
     <div className={classes.column}>
      <Typography className={classes.heading}>DS Câu trả lời</Typography>
     </div>
    </AccordionSummary>
    {data.values.map((item, index) => {
     return index > 0 ? (
      <AccordionDetails className={classes.details} key={index}>
       <div className={classes.column}>
        <Typography className={classes.heading}>
         {item[0] + ". " + item[1]}
        </Typography>
       </div>
       <div className={classes.column}>
        <b>Nội Dung (HTML): </b>
        <pre className={classes.pre}>
         <code dangerouslySetInnerHTML={{ __html: item[2].replaceAll("&lsqb;&quest;&rsqb;", "♥") }}></code>
        </pre>
        <b>Nội Dung CSS: </b>
        <br />
        {data.values[0][3].toLocaleLowerCase().includes("input_css") ||
        data.values[0][3] === "input_CSS" ? (
         <pre className={classes.pre}>
          <code
           dangerouslySetInnerHTML={{
            __html: item[3].replaceAll("&lsqb;&quest;&rsqb;", "♥"),
           }}
          ></code>
         </pre>
        ) : null}
       </div>
       <div className={clsx(classes.column, classes.helper)}>
        <pre className={classes.pre}>
         <code className={classes.code}>
          {item[4] === "" ? item[3] : item[4]}
         </code>
        </pre>
       </div>
       <div className={clsx(classes.column, classes.helper)}>
        <Typography variant='caption'>
         {item[5]
          ? JSON.parse(item[5]).map((item, index) => {
             return (
              <pre className={classes.pre} key={index}>
               <code>
                <b>{item.ma}:</b> {item.noiDung}
                <br />
               </code>
              </pre>
             );
            })
          : null}
        </Typography>
        <Typography>
         <b>Đáp án:</b>
         {item[6]
          ? JSON.parse(item[6]).map((item, index) => {
             return index === 0 ? (
              <code key={index}> {item} </code>
             ) : (
              <code key={index}>
               {" và "}
               {item}
              </code>
             );
            })
          : null}
        </Typography>
        <Typography>
         <b>Độ Khó:</b> {item[8]}
        </Typography>
       </div>
      </AccordionDetails>
     ) : null;
    })}
    <Divider />
   </Accordion>
  </div>
 ) : null;
}
const mapStateToProps = (state) => {
 return {
  sheetData: state.reducer.sheetData,
  option:state.reducer.option
 };
};
export default connect(mapStateToProps, null)(DetailedAccordion);
