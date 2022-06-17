import * as ActionType from "./action.type";
let initialState = {
 data: [],
 sheetData: [],
 option:null
};
const reducer = (state = initialState, action) => {
 switch (action.type) {
  case ActionType.GET_SHEETS: {
   state.data = action.data;
   return { ...state };
  }
  case ActionType.GET_SHEETS_DETAIL: {
   state.sheetData = action.sheetData;
   state.option=action.option
   return { ...state };
  }
  default:
   return { ...state };
 }
};
export default reducer;
