import PropTypes from "prop-types";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import mark from "../../assets/marker-single.png";

function Location({ details }) {
    const { estate_title, coordinates } = details;
    const position = [coordinates.latitude, coordinates.longitude];
    const marker = new icon({
        iconUrl: mark,
        iconSize: [50, 40],
    });

    return (
        <>
            <div id="location" className="mt-10 rounded-lg">
                <h1
                    className="text-3xl font-bold font-lato text-[#1b3980] mb-5"
                    data-aos="fade-up"
                >
                    Location
                </h1>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="50"
                    data-aos-offset="0"
                >
                    <MapContainer
                        center={position}
                        zoom={15}
                        scrollWheelZoom={false}
                        className="h-[50vh]"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={marker}>
                            <Tooltip>{estate_title}</Tooltip>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    );
}

Location.propTypes = {
    details: PropTypes.object,
};

export default Location;
