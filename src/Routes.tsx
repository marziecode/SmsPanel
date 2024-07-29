import { RouteObject } from "react-router-dom";
import SendSms from "./screens/SendSms";
import SmsText from "./components/SmsText/SmsText";
import Users from "./components/Users/Users";
import { PrivateRoute } from "./PrivateRoute";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute Page={<SendSms />} />,
  },
  {
    path: "/Text",
    element: <PrivateRoute Page={<SmsText />} />,
  },
  {
    path: "/users",
    element: <PrivateRoute Page={<Users />} />,
  },
];
