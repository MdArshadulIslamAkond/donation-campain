/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationCard = ({card}) => {
    const { picture, category, title, category_bg, text_button_bg, card_bg, price, id} = card;
    return (
        <div style={{backgroundColor:`${card_bg}`}} className="flex rounded-lg items-center gap-4">
            <div >
                <img src={picture} alt="" className="h-auto rounded-lg" />
            </div>
            <div>
                <p style={{backgroundColor:`${category_bg}`, color:`${text_button_bg}`}}className="inline-block py-1 px-2 rounded-lg">{category}</p>
                <h2 className="text-2xl font-extrabold">{title}</h2>
                <p style={{color:`${text_button_bg}`}}>${price}</p>
                <Link to={`/card/${id}`}>
                    <button style={{backgroundColor:`${text_button_bg}`}} className=" text-white btn rounded-lg">View Ditails</button>
                </Link>
            
            </div>
        </div>
    );
};

export default DonationCard;