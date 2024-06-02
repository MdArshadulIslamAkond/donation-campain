const getStordDonationCard = ()=>{
    // if (typeof localStorage !== 'undefined') {
    //     localStorage.setItem('key', 'value');
    //   } 
    const stordDonationCard = localStorage.getItem('donation_card');
    if(stordDonationCard){
        return JSON.parse(stordDonationCard);
    }
    return [];
}

const saveDonationCard = (id)=>{
    // console.log(id)
 const getStordDonationCards = getStordDonationCard();
 const exists = getStordDonationCards.find(card=>card===id);
 if(!exists){
     getStordDonationCards.push(id);
     localStorage.setItem('donation_card',JSON.stringify(getStordDonationCards));
 }
}

export{getStordDonationCard, saveDonationCard};