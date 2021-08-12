import React from "react";
import { Col, Typography, Avatar, Space, Button, Divider } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Fade, Slide } from "react-awesome-reveal";
import WhiteBox from "../../modules/WhiteBox";
import { HeaderRow, PaddedLightRow, PaddedDarkRow, SkillTag } from "./styles";

const { Title } = Typography;

const green = "#59a947";
const brown = "#736357";
const orange = "#f26522";
const fuschia = "#ec008c";
const blue = "#4775a9";

function Home() {
  return (
    <div>
      <HeaderRow>
        <Col
          xs={{ span: 24, pull: 5 }}
          sm={{ span: 24, pull: 7 }}
          md={{ span: 12, pull: 0 }}
          style={{ textAlign: "right" }}
        >
          <Fade>
            <Avatar
              src="/img/me.jpg"
              size={260}
              style={{
                border: "5px solid #eee",
                boxShadow: "0 1px 10px rgba(0, 0, 0, 0.7)",
              }}
            />
          </Fade>
        </Col>
        <Col
          xs={{ span: 24, push: 6 }}
          sm={{ span: 24, push: 8 }}
          md={{ span: 11, push: 0, offset: 1 }}
          style={{ textAlign: "left", paddingTop: 26 }}
        >
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
      <PaddedLightRow>
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
            <Title level={2}>Brewerwall Creator</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              <Space wrap={true} size={6}>
                <SkillTag color={green}>PHP 7</SkillTag>
                <SkillTag color={green}>Javascript</SkillTag>
                <SkillTag color={brown}>Mysql</SkillTag>
                <SkillTag color={orange}>Laravel</SkillTag>
                <SkillTag color={orange}>React</SkillTag>
                <SkillTag color={orange}>Cypress</SkillTag>
                <SkillTag color={fuschia}>Docker</SkillTag>
                <SkillTag color={fuschia}>GIT</SkillTag>
                <SkillTag color={fuschia}>Codeship</SkillTag>
                <SkillTag color={fuschia}>Docker</SkillTag>
                <SkillTag color={fuschia}>AWS</SkillTag>
                <SkillTag color={blue}>Photoshop</SkillTag>
              </Space>
            </p>
            <Divider />
            <Button>Go to Site</Button>
          </WhiteBox>
        </Col>
      </PaddedLightRow>
      <PaddedLightRow>
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
            <p>
              <Space wrap={true} size={6}>
                <SkillTag color={green}>PHP 7</SkillTag>
                <SkillTag color={green}>PHP 5</SkillTag>
                <SkillTag color={green}>Javascript</SkillTag>
                <SkillTag color={brown}>Mysql</SkillTag>
                <SkillTag color={brown}>Postgres</SkillTag>
                <SkillTag color={orange}>Laravel</SkillTag>
                <SkillTag color={orange}>React</SkillTag>
                <SkillTag color={orange}>Cypress</SkillTag>
                <SkillTag color={orange}>Backbone</SkillTag>
                <SkillTag color={orange}>Zend</SkillTag>
                <SkillTag color={fuschia}>Docker</SkillTag>
                <SkillTag color={fuschia}>GIT</SkillTag>
                <SkillTag color={fuschia}>Codeship</SkillTag>
                <SkillTag color={fuschia}>Docker</SkillTag>
                <SkillTag color={fuschia}>AWS</SkillTag>
                <SkillTag color={blue}>Photoshop</SkillTag>
              </Space>
            </p>
            <Divider />
            <Button>Go to Site</Button>
          </WhiteBox>
        </Col>
      </PaddedLightRow>
      <PaddedLightRow>
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
            <Title level={2}>Fullstack Blogger</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              <Space wrap={true} size={6}>
                <SkillTag color={green}>Javascript</SkillTag>
                <SkillTag color={orange}>Hexo</SkillTag>
                <SkillTag color={fuschia}>Heroku</SkillTag>
              </Space>
            </p>
            <Divider />
            <Button>Go to Site</Button>
          </WhiteBox>
        </Col>
      </PaddedLightRow>
      <PaddedDarkRow>
        <Col span={23} offset={1} style={{ textAlign: "center" }}>
          <Title
            className="bebasNeueRegular"
            style={{ fontSize: "3em", marginBottom: 0, color: "white" }}
          >
            Github Contributions
          </Title>
          <img
            src="http://ghchart.rshah.org/griffithben"
            alt="Ben Griffith Github Chart"
          ></img>
        </Col>
      </PaddedDarkRow>
    </div>
  );
}

export default Home;
