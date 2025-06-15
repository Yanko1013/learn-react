const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function Profile({message}) {
  // console.log(message);
  return (
    <div>
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
      <h2>{message?.fir}, {person.name}, {message?.sec}</h2>
    </div>
  );
}
