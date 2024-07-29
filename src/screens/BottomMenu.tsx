import user from "../assets/icons/user.svg";
import home from "../assets/icons/home.svg";
import send from "../assets/icons/Vector.svg";
function BottomMenu() {
  return (
    <div className="flex justify-between px-8 py-4 rounded-t-2xl bg-white shadow-inputShadow fixed bottom-0 w-full ">
      <div className="flex flex-col items-center">
        <img src={user} alt=""  />
        <p className="">پروفایل</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={home} alt="" />
        <p className="">خانه</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={send} alt=""  />
        <p className="">ارسال</p>
      </div>
    </div>
  );
}
export default BottomMenu;
