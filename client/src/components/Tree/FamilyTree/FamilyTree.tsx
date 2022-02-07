import React from "react"

import Tree from 'react-d3-tree'
import { RawNodeDatum } from 'react-d3-tree/lib/types/common'

import { GenderNode } from "../GenderNode"

export interface FamilyTreeProps {
  nodes: RawNodeDatum;
}

export const Template = ({
  nodes
}: FamilyTreeProps) => {
  const orientation = "vertical";
  const pathFunctionType = "step";
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Tree 
        data={nodes}
        orientation={orientation}
        pathFunc={pathFunctionType}
        renderCustomNodeElement={(rd3tNodeProps) =>
          GenderNode({
            ...rd3tNodeProps
          })
        }
        />
    </div>
  )
}