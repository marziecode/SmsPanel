import mobile from "../assets/icons/mobile.svg";
import Sms from "../assets/icons/chat-messages.svg";
import GroupSms from "../assets/icons/chat-dots.svg";
import users from "../assets/icons/users-group.svg";

const Options = [
  {
    icon: Sms,
    title: "مدیریت پیام ها",
  },
  {
    icon: users,
    title: "لیست مشتریان",
  },
  {
    icon: GroupSms,
    title: "پیامک  گروهی",
  },
  {
    icon: mobile,
    title: "پیامک به شماره",
  },
];

function SendSms() {
  return (
    <div className="w-full flex gap-4 px-6 mt-8 items-center justify-end flex-wrap">
      {Options.map((item, idx) => (
        <div
          className=" w-28  shadow-inputShadow bg-white rounded-xl flex flex-col items-center py-8 px-2"
          key={idx}
        >
          <img src={item.icon} />
          <div className="flex flex-1 bg-red-400 h-36">
            <p className=" text-center text-sm flex flex-1 bg-slate-500">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SendSms;
