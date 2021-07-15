import React from "react"

function linesToParagraphs(...nodes) {
  return nodes
    .map(node =>
      typeof node === "string"
        ? node
            .split("\n")
            .map((text, index) => <p key={"p-" + index}>{text}</p>)
        : node
    )
    .reduce((nodes, node) => nodes.concat(node), [])
}

export default linesToParagraphs
