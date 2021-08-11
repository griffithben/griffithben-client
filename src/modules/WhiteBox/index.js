import React from "react";
import { WhiteBoxDiv } from "./styles";

function WhiteBox(props) {
  return <WhiteBoxDiv>{props.children}</WhiteBoxDiv>;
}

export default WhiteBox;
