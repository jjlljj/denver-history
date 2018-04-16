export const sidebarReducer = ( state=false, action ) => {
  switch(action.type) {
    case 'SHOW_SIDEBAR':
      return true;
    case 'HIDE_SIDEBAR':
      return false; 
    default:
      return state;
  };
}
