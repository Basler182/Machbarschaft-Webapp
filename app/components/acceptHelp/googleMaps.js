import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import RequestTypeGeneral from "../../assets/img/request-category/request-category-general.svg";
import RequestTypeGrocery from "../../assets/img/request-category/request-category-grocery.svg";
import RequestTypeMedicine from "../../assets/img/request-category/request-category-medicine.svg";
import MapMarker from "./mapMarker";
import CurrentLocationMarker from "./currentLocationMarker";


export default function MapContainer({currentLocation, onMapClick, markers, selectedMarkerIndex, hoverMarkerIndex, onMarkerSelect, onMarkerEnter, onMarkerLeave}) {
    const [mapCenter, setMapCenter] = React.useState({lat: 48.189280, lng: 11.564758});

    React.useEffect(() => {
        if(currentLocation.lat != 0 || currentLocation.lng != 0) {
            setMapCenter(currentLocation);
        }
    }, [currentLocation]);

    return (
        <div className="accept-help-map-container">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "YOUR_KEY" }}
              center={mapCenter}
              defaultZoom={11}
              onClick={() => onMapClick()}
            >
                {markers.map((entry, index) => 
                    <MapMarker
                        lat={entry.lat}
                        lng={entry.lng}
                        onMarkerSelect={() => onMarkerSelect(index)}
                        selected={selectedMarkerIndex == index}
                        hover={hoverMarkerIndex == index}
                        onMarkerEnter={() => onMarkerEnter(index)}
                        onMarkerLeave={() => onMarkerLeave()}
                        categories={entry.categories}
                        distance={entry.distance}
                        key={index}
                    />
                )}

                {(currentLocation.lat != 0 && currentLocation.lng != 0) &&
                    <CurrentLocationMarker
                        lat={currentLocation.lat}
                        lng={currentLocation.lng}
                    />
                }
           </GoogleMapReact>
        </div>
    );
}
MapContainer.propTypes = {
    currentLocation: PropTypes.object.isRequired,
    onMapClick: PropTypes.func.isRequired,
    markers: PropTypes.array.isRequired,
    selectedMarkerIndex: PropTypes.number.isRequired,
    hoverMarkerIndex: PropTypes.number.isRequired,
    onMarkerSelect: PropTypes.func.isRequired,
    onMarkerEnter: PropTypes.func.isRequired,
    onMarkerLeave: PropTypes.func.isRequired
};