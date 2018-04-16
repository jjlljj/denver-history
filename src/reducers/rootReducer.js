import { combineReducers } from 'redux';
import { buildingReducer } from './buildingReducer';
import { districtReducer } from './districtReducer';

const rootReducer = combineReducers({
  building: buildingReducer,
  district: districtReducer
});

export default rootReducer;
