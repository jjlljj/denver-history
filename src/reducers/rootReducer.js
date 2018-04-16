import { combineReducers } from 'redux';
import { buildingReducer } from './buildingReducer';
import { districtReducer } from './districtReducer';
import { sidebarReducer } from './sidebarReducer';

const rootReducer = combineReducers({
  building: buildingReducer,
  district: districtReducer,
  showSidebar: sidebarReducer
});

export default rootReducer;
