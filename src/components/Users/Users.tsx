import { useState } from "react";
import fakeApi from "../../fakeApi.json";
function Users() {
  const [selectUser, setSelectUser] = useState(false);
  console.log(selectUser, "selectUser");

  return (
    <div className="w-full h-screen bg-[#18181b] flex flex-col justify-center items-center p-32">
      <table className="min-w-full border border-gray-300 ">
        <thead>
          <tr>
            <th className="border border-gray-300 p-4 text-white text-center ">
              کاربران
            </th>
          </tr>
        </thead>
        <tbody>
          {fakeApi.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-600 p-2 text-center text-white">
                {user.phone}
              </td>
              <td className="border border-gray-600 p-2 text-center w-[120px]">
                <input
                  onChange={(e) => setSelectUser([e.target.value])}
                  className=" w-5 h-5"
                  type="checkbox"
                  id="subscribeNews"
                  name="subscribe"
                  value="newsletter"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Users;
