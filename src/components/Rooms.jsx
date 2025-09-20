import Room from './Room';
import roomss from "../data/roomsData.js";

export default function Rooms() {
  return (
    <>
      <div className="w3-container w3-margin-top" id="rooms">
        <h3>Rooms</h3>
        <p>
          Make yourself at home is our slogan. We offer the best beds in the
          industry. Sleep well and rest well.
        </p>
      </div>

      <div className="w3-row-padding">
        <div className="w3-col m3">
          <label>
            <i className="fa fa-calendar-o"></i> Check In
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="DD MM YYYY"
          />
        </div>
        <div className="w3-col m3">
          <label>
            <i className="fa fa-calendar-o"></i> Check Out
          </label>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="DD MM YYYY"
          />
        </div>
        <div className="w3-col m2">
          <label>
            <i className="fa fa-male"></i> Adults
          </label>
          <input className="w3-input w3-border" type="number" placeholder="1" />
        </div>
        <div className="w3-col m2">
          <label>
            <i className="fa fa-child"></i> Kids
          </label>
          <input className="w3-input w3-border" type="number" placeholder="0" />
        </div>
        <div className="w3-col m2">
          <label>
            <i className="fa fa-search"></i> Search
          </label>
          <button className="w3-button w3-block w3-black">Search</button>
        </div>
      </div>
      <div className="w3-row-padding w3-padding-16">
        {roomss.map((data) => (
          <Room dataRoom={data} key={data.id} />
        ))}
      </div>
    </>
  );
}
