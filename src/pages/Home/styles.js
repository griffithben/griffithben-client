import styled from "styled-components";
import { Row, Tag, Card } from "antd";

export const HeaderRow = styled(Row)`
  padding: 3em 0;
  background-image: url(/img/bg.png);
  margin: 0em -24px 2em -24px;
  -moz-box-shadow: inset 0 -10px 10px #262626;
  -webkit-box-shadow: inset 0 -10px 10px #262626;
  box-shadow: inset 0 -10px 10px #262626;
`;

export const PaddedLightRow = styled(Row)`
  padding-top: 2em;
  padding-bottom: 2em;
`;

export const PaddedDarkRow = styled(Row)`
  padding-top: 2em;
  padding-bottom: 2em;
  background-image: url(/img/bg.png);
  margin: 0px -24px;
  -moz-box-shadow: inset 0 10px 10px #262626;
  -webkit-box-shadow: inset 0 10px 10px #262626;
  box-shadow: inset 0 10px 10px #262626;
`;

export const SkillTag = styled(Tag)`
  margin-right: 0px;
`;

export const OpenSourceCard = styled(Card)`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: solid 6px white;
  -webkit-transition: border 250ms ease-out;
  -moz-transition: border 250ms ease-out;
  -o-transition: border 250ms ease-out;
  transition: border 250ms ease-out;
  border-radius: 6px;
  height: 140px;
  margin-bottom: .8em;

  &:hover {
    border: solid 6px #59a947;
    cursor: pointer;
  }
`;
