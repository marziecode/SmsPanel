import React from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from './App';
import Header from "./layouts/Header";
import BottomMenu from "./screens/BottomMenu";

export function PrivateRoute({ Page }: { Page: React.ReactElement }) {
  const authenticated = true;

  if (authenticated) {
    return (
      <div className="flex flex-col h-screen  ">
        <Header />
        {Page} <BottomMenu />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
