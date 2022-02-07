// import React, { useState } from "react";

import { FamilyTreeProps } from "./FamilyTree";

import ieyasu from "../../../data/ieyasu.json"
import { RawNodeDatum } from "react-d3-tree/lib/types/common";

export const useFamilyTreeProps = () : FamilyTreeProps => {
  const nodes = ieyasu as RawNodeDatum;

  return {
    nodes
  }
}