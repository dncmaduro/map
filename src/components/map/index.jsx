import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Map = () => {

  return (
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    url="https://tmdt.fimo.edu.vn/hot/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  );
}

export default Map;