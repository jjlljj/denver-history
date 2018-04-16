export const districtReducer = ( state=[], action ) => {
  switch(action.type) {
    case 'LOAD_DISTRICT':
      return action.district;
    case 'CLEAR_DISTRICT':
      return [];
    default:
      return state;
  };
}

