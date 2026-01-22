import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"


interface LeafletProps {
  id?: string
}


export function Leaflet({ id }:LeafletProps) {

  const markers = [
    {
    geocode: [57.04870595490507, 9.969904512714782],
    popUp: "TechCollege"
    }
  ]

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
    iconSize: [48, 48]
  })

  return (
    <div id={id}>
    <MapContainer center={[57.04870595490507, 9.969904512714782]} zoom={13}>
      <TileLayer 
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map((marker) => 
      <Marker position={marker.geocode} icon={customIcon}>
        <Popup><h3>{marker.popUp}</h3></Popup>
      </Marker>
      )}
    </MapContainer>
    </div>
  )
}