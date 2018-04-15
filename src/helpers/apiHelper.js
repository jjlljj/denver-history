export const apiGet = async url => {
  try {
    const response = await fetch(url);

    if (response.status < 300) {
      return  await response.json();
    } else {
      throw new Error('failed to get requested data');
    }
  } catch (error) {
    throw error;
  }
}

export const getDistrictBuildings = async districtNum => {
  const url = `https://denver-history.herokuapp.com/api/v1/districts/${districtNum}/buildings/map`;

  return await apiGet(url);
}
