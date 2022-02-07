import React from "react";
import "./style.css";

import { FamilyTree } from "components/Tree/FamilyTree";

export const Template = () => {
  return (
    <div>
      <header className="header">
        徳川家系図
      </header>
      <div className="page">
        <FamilyTree />
      </div>
    </div>
  )
}