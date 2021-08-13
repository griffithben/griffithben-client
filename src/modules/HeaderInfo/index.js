import React from "react";
import { Space, Typography, Button } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";

const { Title } = Typography;

function HeaderInfo() {
  return (
    <Fade>
      <Title
        className="bebasNeueRegular"
        style={{ fontSize: "5em", marginBottom: 0, color: "white" }}
      >
        Ben Griffith
      </Title>
      <Title
        className="bebasNeueRegular"
        style={{
          fontSize: "2.7em",
          marginTop: 0,
          backgroundColor: "#59a947",
          display: "inline-block",
          color: "white",
          padding: "0em .2em",
        }}
      >
        Full-Stack Developer
      </Title>
      <Space>
        <Button
          size="large"
          shape="circle"
          icon={<GithubFilled />}
          href="https://github.com/griffithben"
          target="_blank"
        />
        <Button
          size="large"
          shape="circle"
          icon={<LinkedinFilled />}
          href="https://www.linkedin.com/in/griffithben/"
          target="_blank"
        />
        <Button
          size="large"
          shape="circle"
          icon={<TwitterCircleFilled />}
          href="https://twitter.com/griffithben"
          target="_blank"
        />
        <Button
          size="large"
          shape="circle"
          icon={<FacebookFilled />}
          href="https://www.facebook.com/griffithben/"
          target="_blank"
        />
      </Space>
    </Fade>
  );
}

export default HeaderInfo;
