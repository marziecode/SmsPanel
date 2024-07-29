// import { NavLink } from "react-router-dom";
import cardIcon from "../assets/icons/credit-card.svg";

function Header() {
  return (
    <div className="w-full bg-white  flex justify-between items-center shadow-md rounded-b-2xl px-6 py-4 font-sans ">
      <button className=" bg-primary rounded-md text-white h-11 w-28 ">
        خرید شارژ
      </button>
      <div className=" flex justify-between items-center ">

        <h4 className=" mr-2 text-xl">اعتبار : 50 تومان</h4>
        <img src={cardIcon} alt="" className=" w-8 h-8"/>
      </div>
    </div>
  );
}
export default Header;
