import React from "react"
import { CustomNodeElementProps, TreeNodeDatum } from 'react-d3-tree/lib/types/common'

type GenderType = 
  | "男性"
  | "女性"
  | undefined;

const getGenderColor = (gender: GenderType | undefined) : string => {
  switch(gender){
    case "男性":
      return "blue";
    case "女性":
      return "red";
    default:
      return "black";
  }
}
const getHasChild = (nodeDatum: TreeNodeDatum) => {
  if (nodeDatum.children) {
    return true;
  }
  else {
    return false;
  }
}
const getRectColor = (nodeDatum: TreeNodeDatum) => {
  return getHasChild(nodeDatum) ? "#eeeeee" : "white";
}

export const GenderNode = ({
  nodeDatum,
  toggleNode,
}: CustomNodeElementProps) => {
  const rectColor = getRectColor(nodeDatum);
  const hasChild = getHasChild(nodeDatum);
  const attributes = nodeDatum.attributes;
  const shogun = (attributes && attributes["shogun"]) ? true : false;
  const genderColor = getGenderColor(nodeDatum?.attributes?.gender as GenderType);

  return (
    <g>
      {hasChild && <circle
        cy="40"
        r="8"
        fill="white"
      />}
      <rect
        x="-60"
        rx="5"
        ry="5"
        fill={rectColor}
        stroke={genderColor}
        style={{
          width: '120',
          height: '40',
          strokeWidth: '2'
        }}
      />
      <text
        x="-50"
        y="25"
        fill="black"
        stroke="none"
        onClick={toggleNode}
        fontFamily="Yuji Syuku"
        fontSize={17}
        fontWeight={shogun ? "bold": "none"}
        textDecoration={shogun ? "underline": "none"}
      >
        {nodeDatum.name}
      </text>
      {shogun && 
        <>
          <rect
            x="19"
            y="5"
            fill="#D68E31"
            rx="15"
            ry="15"
            style={{
              width: '30',
              height: '30',
              strokeWidth: '1'
            }}
          />
          <text 
            x="20"
            y="30"
            fill="black"
            strokeWidth={1}
            fontSize={28}
            fontFamily="Yuji Syuku"
          >
            将
          </text>
        </>
      }
    </g>
  )
}