import roomss from "../data/roomsData";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function RoomDetail() {
  const { id } = useParams();
  const roomId = parseInt(id, 10);
  const room = roomss.find((r) => r.id === roomId);

  const [slideIndex, setSlideIndex] = useState(0);

  if (!room) return <h2 className="w3-container">Room not found</h2>;

  const nextSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= room.image.length) newIndex = 0;
    if (newIndex < 0) newIndex = room.image.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <div className="w3-main w3-white" style={{ marginLeft: "260px" }}>
      <div className="w3-container" id="apartment">
        <h2 className="w3-text-green">{room.name}</h2>

        {/* Slideshow */}
        <div className="w3-display-container mySlides">
          <img
            src={room.image[slideIndex]}
            alt={room.name}
            style={{ width: "100%", marginBottom: "-6px" }}
          />
          <div className="w3-display-bottomleft w3-container w3-black">
            <p>{room.name}</p>
          </div>
        </div>

        {/* Buttons to change slides */}
        <div className="w3-center w3-section">
          <button className="w3-button w3-green" onClick={() => nextSlide(-1)}>
            ❮ Prev
          </button>
          <button className="w3-button w3-green" onClick={() => nextSlide(1)}>
            Next ❯
          </button>
        </div>

        {/* Thumbnails */}
        <div className="w3-row-padding w3-section">
          {room.image.map((img, index) => (
            <div className="w3-col s3" key={index}>
              <img
                className={`demo w3-opacity ${
                  index === slideIndex ? "w3-opacity-off" : ""
                }`}
                src={img}
                alt={room.name + " " + index}
                style={{ width: "100%", cursor: "pointer" }}
                onClick={() => setSlideIndex(index)}
              />
            </div>
          ))}
        </div>

        {/* Room Info */}
        <div className="w3-container">
          <h4>
            <strong>Details</strong>
          </h4>
          <p>
            <strong>Price:</strong> ${room.price} USD
          </p>
          <p>
            <strong>Type:</strong> {room.type}
          </p>
          <p>
            <strong>Size:</strong> {room.size}
          </p>
        </div>

        {/* Extra Sections */}
        <div className="w3-container">
          <h4>
            <strong>The space</strong>
          </h4>
          <div className="w3-row w3-large">
            <div className="w3-col s6">
              <p>
                <i className="fa fa-fw fa-male"></i> Max people: 4
              </p>
              <p>
                <i className="fa fa-fw fa-bath"></i> Bathrooms: 2
              </p>
              <p>
                <i className="fa fa-fw fa-bed"></i> Bedrooms: 1
              </p>
            </div>
            <div className="w3-col s6">
              <p>
                <i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM
              </p>
              <p>
                <i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM
              </p>
            </div>
          </div>
          <hr />

          <h4>
            <strong>Amenities</strong>
          </h4>
          <div className="w3-row w3-large">
            <div className="w3-col s6">
              <p>
                <i className="fa fa-fw fa-shower"></i> Shower
              </p>
              <p>
                <i className="fa fa-fw fa-wifi"></i> WiFi
              </p>
              <p>
                <i className="fa fa-fw fa-tv"></i> TV
              </p>
            </div>
            <div className="w3-col s6">
              <p>
                <i className="fa fa-fw fa-cutlery"></i> Kitchen
              </p>
              <p>
                <i className="fa fa-fw fa-thermometer"></i> Heating
              </p>
              <p>
                <i className="fa fa-fw fa-wheelchair"></i> Accessible
              </p>
            </div>
          </div>
          <hr />

          <h4>
            <strong>Extra Info</strong>
          </h4>
          <p>
            Our apartment is really clean and we like to keep it that way.
            Enjoy the lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            We accept:{" "}
            <i className="fa fa-credit-card w3-large"></i>{" "}
            <i className="fa fa-cc-mastercard w3-large"></i>{" "}
            <i className="fa fa-cc-amex w3-large"></i>{" "}
            <i className="fa fa-cc-visa w3-large"></i>
            <i className="fa fa-cc-paypal w3-large"></i>
          </p>
          <hr />

          <h4>
            <strong>Rules</strong>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>Subscribe to receive updates on available dates and special offers.</p>
          <p>
            <button className="w3-button w3-green w3-third">
              Subscribe
            </button>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
}

