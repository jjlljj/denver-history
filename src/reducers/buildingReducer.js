export const buildingReducer = ( state={}, action ) => {
  switch(action.type) {
    case 'ADD_BUILDING':
      return action.district;
    case 'CLEAR_BUILDING':
      return {}; 
    default:
      return state;
  };
}
