import { useEffect,useState } from "react";
import Card from "../Card/Card";
// import { Link } from "react-router-dom";
const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("donationCampain.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleClick = (e)=>{
    const id = e.target.id;
    console.log(id);
    // <Link to={`/card/${id}`}></Link>
  }
 
  return <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-9 mt-6" onClick={handleClick}>
    {/* cards:{cards.length} */}
    {
        cards.map((card)=>(
            <Card key={card.id} card={card} />
        ))
    }
  </div>;
};

export default Cards;
