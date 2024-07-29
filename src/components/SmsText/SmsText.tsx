import { useState } from "react";

function SmsTxt() {
  const [customText, setCustomText] = useState("");

  console.log(customText,"customtext")

  return (
    <div className="w-full h-screen bg-[#18181b] flex flex-col justify-center items-center">
      <label className=" text-white mb-4 text-xl">
        متن دلخواه برای ارسال به کاربران
      </label>

      <textarea
        onChange={(e) => setCustomText([e.target.value])}
        id="text"
        name="text"
        rows="6"
        cols="33"
        className="  rounded-xl border-[#5bcabf] focus:border-[#3aa79a] bg-[#ffffff25] text-white outline-none shadow-inputShadow shadow-[#5bcabf] max-h-96 p-6"
      ></textarea>

      <button className=" w-28 h-10 bg-[#3aa79a] rounded-xl mt-8 text-white">
        ارسال
      </button>
    </div>
  );
}
export default SmsTxt;
