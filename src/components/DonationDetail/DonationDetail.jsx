import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationCard } from "../utilitys/localstorage";


const DonationDetail = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));
  const { picture, title, description, price, text_button_bg } = card;
  const handleDonationAdd = () => {
    toast.success("Donation Successfully Added");
    saveDonationCard(parseInt(id));
   
  };
  //   console.log(card);
  return (
    <div>
      <h2>Donation Details</h2>
      <div className="relative mb-6">
        <img className="w-full" src={picture} alt="dummy-image" />

        <div className="absolute bottom-0 bg-[#0B0B0B] w-full h-32 opacity-50 "></div>
        <button
          className="absolute bottom-0 text-white p-2 rounded hover:bg-blue-800 m-9 align-middle"
          style={{ backgroundColor: `${text_button_bg}` }}
          onClick={handleDonationAdd}
        >
          Donate $ {price}
        </button>
      </div>

      <h2>{title}</h2>
      <p>{description}</p>
      <ToastContainer />
    </div>
  );
};

export default DonationDetail;
