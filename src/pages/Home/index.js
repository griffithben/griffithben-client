import React from "react";
import { Col, Typography, Avatar, Space, Button } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Fade, Slide } from "react-awesome-reveal";
import WhiteBox from "../../modules/WhiteBox";
import { HeaderRow, PaddedRow } from "./styles";

const { Title } = Typography;

function Home() {
  return (
    <div>
      <HeaderRow>
        <Col span={12} style={{ textAlign: "right" }}>
          <Fade>
            <Avatar
              src="/img/me.jpg"
              size={210}
              style={{
                border: "5px solid #eee",
                boxShadow: "0 1px 10px rgba(0, 0, 0, 0.7)",
              }}
            />
          </Fade>
        </Col>
        <Col span={11} offset={1} style={{ textAlign: "left" }}>
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
        </Col>
      </HeaderRow>
      <PaddedRow>
        <Col
          md={{ span: 16, pull: 4, push: 4 }}
          lg={{ span: 12, pull: 0, push: 0 }}
          style={{ textAlign: "center" }}
        >
          <Slide>
            <img
              src="/img/brewerwall.png"
              alt="brewerwall screenshot"
              style={{ width: "100%" }}
            />
          </Slide>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 10, offset: 1 }}>
          <WhiteBox>
            <Title level={2}>Brewerwall</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Go to Site</Button>
          </WhiteBox>
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col
          md={{ span: 16, pull: 4, push: 4 }}
          lg={{ span: 12, pull: 0, push: 0 }}
          style={{ textAlign: "center" }}
        >
          <Slide>
            <img
              src="/img/oberd.png"
              alt="oberd screenshot"
              style={{ width: "100%" }}
            />
          </Slide>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 10, offset: 1 }}>
          <WhiteBox>
            <Title level={2}>Oberd Founder</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Go to Site</Button>
          </WhiteBox>
        </Col>
      </PaddedRow>
      <PaddedRow>
        <Col
          md={{ span: 16, pull: 4, push: 4 }}
          lg={{ span: 12, pull: 0, push: 0 }}
          style={{ textAlign: "center" }}
        >
          <Slide>
            <img
              src="/img/fullstack.png"
              alt="fullsatck screenshot"
              style={{ width: "100%" }}
            />
          </Slide>
        </Col>
        <Col md={{ span: 24 }} lg={{ span: 10, offset: 1 }}>
          <WhiteBox>
            <Title level={2}>Fullstack Blog</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Go to Site</Button>
          </WhiteBox>
        </Col>
      </PaddedRow>
    </div>
  );
}

export default Home;
