import { combineReducers } from 'redux';
import { buildingReducer } from './buildingReducer';
import { districtReducer } from './districtReducer';
import { sidebarReducer, showLoadingReducer } from './sidebarReducer';

const rootReducer = combineReducers({
  building: buildingReducer,
  district: districtReducer,
  showSidebar: sidebarReducer,
  showLoading: showLoadingReducer
});

export default rootReducer;
