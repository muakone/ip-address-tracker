import React, { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import osm from './Osm-provider'
import 'leaflet/dist/leaflet.css';
import L from "leaflet"
import MarkLocation from "../images/icon-location.svg"

const markerIcon = new L.Icon({
    iconUrl: MarkLocation,
    iconRetinaUrl: MarkLocation,
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46], //[left/right, top/bottom]
})

const Maps = ({datas}) => {
    const ZOOM_LEVEL = 14;
    const mapRef = useRef()
    const lat = datas.location.lat;
    const lng = datas.location.lng;
    const city = datas.location.city
   
    
  return (
    <div>
        <MapContainer className='leaflet-container' center={[lat, lng]} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} tileSize={osm.maptiler.tileSize} zoomOffset={osm.maptiler.zoomOffset} id={osm.maptiler.id} maxZoom={osm.maptiler.maxZoom} />
            <Marker position={[lat, lng]} icon={markerIcon}>
            <Popup>
                {city}
            </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Maps