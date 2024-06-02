 import { useEffect, useState } from "react";
import { getStordDonationCard } from "../utilitys/localstorage";
import { useLoaderData } from "react-router-dom";
import DonationCard from "../DnationCard/DonationCard";
const Donation = () => {
    const [donationCards, setDonationCards] = useState([]);
    const [dataLength, setDatalength] = useState(4);
    const cards = useLoaderData();
    

   useEffect(()=>{
    const stordCard = getStordDonationCard ();
    console.log(stordCard)
    if(cards.length){
        
        const stordDonation = cards.filter(card =>stordCard.includes(card.id));
    //     const stordDonation = [];
    //   for (const id of stordCard) {
    //     const card = cards.find((card) =>{
    //        return card.id === id
    //     });
    //     if (card) {
    //         stordDonation.push(card);
    //     }
    //   }
        
        setDonationCards(stordDonation);

    }

   } ,[cards])
//    console.log(donationCards)
    return (
   
        <div>
            <h2>Donation: {donationCards.length}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {donationCards.slice(0, dataLength).map((card) => (
                    <DonationCard card={card} key={card.id} />
                ))}
            </div>
            <div className={`text-center mt-4 ${(donationCards.length <= 4 && 'hidden') || (dataLength === donationCards.length && 'hidden')}`}>
                <button onClick={()=>setDatalength(donationCards.length)} className="btn btn-primary">Show all</button>
            </div>
        </div>
    );
};

export default Donation;