import { useParams } from "react-router-dom";
let rooms = [
    {
        "name": "Single Room",
        "id":1,
        "price": 99,
        "type" : "Single Room",
        "image": "https://www.w3schools.com/w3images/room_single.jpg",
        "size": "15m²",
    },
    {
        "name": "Double Room",
        "id":2,
        "price": 149,
        "type" : "Couple Room",
        "image": "https://www.w3schools.com/w3images/room_deluxe.jpg",
        "size": "25m²",
    },
    {
        "name": "Deluxe Room",
        "id":3,
        "price": 199,
        "type" : "Family Room",
        "image": "https://www.w3schools.com/w3images/room_double.jpg",
        "size": "40m²",
    }
];

export default function RoomDetail() {
  const { id } = useParams();
  const roomId = parseInt(id, 10);

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <h2>Room not found</h2>;
  }

  const { name, price, type, image, size } = room;

  return (
    <div className="w3-container w3-padding-16">
      <img src={image} alt={name} style={{ width: "100%", maxWidth: "600px" }} />
      <h2>{name}</h2>
      <p><strong>Type:</strong> {type}</p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Price:</strong> ${price} USD</p>
      <button className="w3-button w3-black">Book this room</button>
    </div>
  );
}
