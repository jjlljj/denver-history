import { Threebox } from 'threebox';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import mapboxgl from 'mapbox-gl';

export const mapParams = (mapContainer) => ({
  container: mapContainer,
  style: 'mapbox://styles/nogully/cjg2lpcwt61xp2rmenlcq9ce2',
  //  maxbounds: [lng, lat],
  center: [-104.994813, 39.7452204],
  zoom: 16,
  bearing: -17.6,
  pitch: 45
})

const threedParams = {
  'id': '3d-buildings',
  'source': 'composite',
  'source-layer': 'building',
  'filter': ['==', 'extrude', 'true'],
  'type': 'fill-extrusion',
  'minzoom': 10,
  'paint': {
    'fill-extrusion-color': '#fff',
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
    'fill-extrusion-opacity': .3
  }
}

const formatPoints = data => {
  return data.map(({ lat, lon, id, ldmk_name, aka_name, year_built, ldmk_num, photo_link }) => {
    return { 
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [ lon, lat ] 
      }, 
      "properties": {
        "title": ldmk_name,
        "icon": "building",
        "id": id,
        "description": `<img src="https://denver-history.herokuapp.com/images/${photo_link[0]}"><div id="wrapper"><p>${ldmk_name}</p></div>`
      }
    }
  }
)
}

const formatGeoJSON = geoJSON => {
  return {
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "cluster": false,
      "data": {
        "type": "FeatureCollection",
        "features": formatPoints(geoJSON)
      }
    },
    "layout": {
      "text-optional": true,
      "icon-image": "building-alt1-15",
      "icon-size": 1.5,
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.7],
      "text-anchor": "top"
    }
  }
}



export const renderMapElements = (map, geoJSON, handleBuildingClick, toggleLoad) => {
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false, 
    offset: {
      'top': [0, 40],
      'bottom': [0, -10]
    }
  });

  map.on('load', () => {
    render3dLayers(map, geoJSON)
    renderThreebox(map)

    map.on('click', 'points', event => {
      const { id } = event.features[0].properties;
      handleBuildingClick(id);
    });

    map.on('mouseenter', 'points', event => {
      map.getCanvas().style.cursor = 'pointer';

      const coordinates = event.features[0].geometry.coordinates.slice();
      const title = event.features[0].properties.title;
      const description = event.features[0].properties.description;

      while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      popup.setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    })

    map.on('mouseleave', 'points', event => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    })

    setTimeout(() => toggleLoad(), 1800)
  })
}

const render3dLayers = (map, geoJSON) => {
  const layers = map.getStyle().layers;
  let labelLayerId;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    };
  }

  map.addLayer(threedParams, labelLayerId);
  map.addLayer(formatGeoJSON(geoJSON));
}

const renderThreebox = map => {
  const threebox = new Threebox(map);
  threebox.setupDefaultLights();

  const loader = new GLTFLoader();

  loader.load("models/unionStation.gltf", gltf => {
    const bufferGeometry = gltf.scene.children[0].children[1].children[0].geometry;
    const geometry = new THREE.Geometry().fromBufferGeometry( bufferGeometry );

    geometry.rotateY((90/360)*4*Math.PI);
    geometry.rotateX((90/360)*2*Math.PI);

    const material = new THREE.MeshPhongMaterial( {color: 0xaaaaff, side: THREE.DoubleSide}); 
    const position = [-105.00006, 39.75317, 0];

    const build = new THREE.Mesh( geometry, material );
    threebox.addAtCoordinate(build, position, {scaleToLatitude: true, preScale: 1});
  });
}
