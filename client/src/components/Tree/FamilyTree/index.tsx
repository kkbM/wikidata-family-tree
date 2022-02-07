import React from "react"

import { useFamilyTreeProps } from "./dependencies";
import { Template } from "./FamilyTree"

export const FamilyTree = () => {
  const props = useFamilyTreeProps();
  return (
    <Template 
      {...props}
    />
  )
}