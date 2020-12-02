import React from "react";
import Adresse from "./profile/Adresse";
import FullName from "./profile/FullName";
import ProfilPhoto from "./profile/ProfilPhoto";
import "./style.css";
const Main = () => {
  return (
    <div className="global">
      <div>
        <ProfilPhoto />
        <FullName />
        <Adresse />
      </div>
    </div>
  );
};

export default Main;
