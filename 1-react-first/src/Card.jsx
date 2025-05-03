function Card(props) {
  return (
    <div className="Card">
        <hr />
      <h1>Headering of {props.title}</h1>
      <p>Discription of card {props.disc}</p>
      
    </div>
  );
}

export default Card;
