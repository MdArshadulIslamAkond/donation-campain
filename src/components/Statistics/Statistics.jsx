// import React, { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { getStordDonationCard } from "../utilitys/localstorage";
import { useEffect, useState } from "react";



//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
  
  const COLORS = ["#0088FE", "#00C49F"];
//   , "#FFBB28", "#FF8042"
  
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

const Statistics = () => {
    const [donationTotal, setDonationTotal] = useState(0)
    const cards = useLoaderData();
    const totalPrice = cards.reduce((total,card)=>total+= card.price ,0)
    console.log(totalPrice);
    useEffect(()=>{
        const totalDonationCards = getStordDonationCard();
        if(cards.length){
            const stordDonation = cards.filter(card => totalDonationCards.includes(card.id)) 
            let totalDonationPrice  = stordDonation.reduce((total, card)=> total +=card.price ,0)
            setDonationTotal(totalDonationPrice);
            console.log(totalDonationPrice);
        }
    
    } ,[cards])
    const data = [
        { name: "Group A", value: totalPrice },
        { name: "Group B", value:donationTotal }
       
      ];
   
return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Statistics;
