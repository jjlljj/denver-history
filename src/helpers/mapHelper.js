export const mapParams = (mapContainer) => ({
  container: mapContainer,
  style: 'mapbox://styles/mapbox/light-v9',
  //  maxbounds: [lng, lat],
  center: [-104.994813, 39.7452204],
  zoom: 16,
  bearing: -17.6,
  pitch: 45
})

export const threedParams = {
  'id': '3d-buildings',
  'source': 'composite',
  'source-layer': 'building',
  'filter': ['==', 'extrude', 'true'],
  'type': 'fill-extrusion',
  'minzoom': 15,
  'paint': {
      'fill-extrusion-color': '#aaa',
      'fill-extrusion-height': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "height"]
      ],
      'fill-extrusion-base': [
          "interpolate", ["linear"], ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
      ],
      'fill-extrusion-opacity': .6
  }
}

const formatPoints = data => {
    return data.map(({ lat, lon, id, ldmk_name, aka_name, year_built, ldmk_num }) => {
      return { 
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [ lon, lat ] 
        }, 
         "properties": {
           "title": ldmk_name,
           "icon": "monument",
           "id": id
        }
      }
    }
  )
}

export const formatGeoJSON = geoJSON => {
  return {
      "id": "points",
      "type": "symbol",
      "source": {
          "type": "geojson",
          "data": {
              "type": "FeatureCollection",
              "features": formatPoints(geoJSON)
          }
      },
      "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
      }
    }
}
