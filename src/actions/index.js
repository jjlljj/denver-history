export const addBuilding = building => ({
  type: 'ADD_BUILDING',
  building
});

export const clearBuilding = () => ({
  type: 'CLEAR_BUILDING'
});

export const addDistrict = district => ({
  type: 'ADD_DISTRICT',
  district
});

export const clearDistrict = () => ({
  type: 'CLEAR_DISTRICT'
});

export const showSidebar = () => ({
  type: 'SHOW_SIDEBAR'
});

export const hideSidebar = () => ({
  type: 'HIDE_SIDEBAR'
});
