import styled from "styled-components";
import { Row, Tag } from "antd";

export const HeaderRow = styled(Row)`
    padding: 6em 0;
    background-image: url(/img/bg.png);
    margin: 0em -24px 2em -24px;
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
`;

export const SkillTag = styled(Tag)`
    margin-right: 0px;
`;
