/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { picture, category, title, category_bg, text_button_bg, card_bg, id } =
    card;

  return (
    <Link to={`/card/${id}`}>
      <div
        className="card bg-base-100 shadow-xl"
        style={{ backgroundColor: `${card_bg}` }}
        id={id}
      >
        <figure id={id}>
          <img src={picture} alt="Shoes" />
        </figure>
        <div
          className="card-body m-4 p-0"
          style={{ color: `${text_button_bg}` }}
          id={id}
        >
          <h1
            className="card-title rounded-lg p-1 inline-block text-start"
            style={{ backgroundColor: `${category_bg}` }}
            id={id}
          >
            {category}
          </h1>
          <p className="text-start font-semibold text-xl" id={id}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
