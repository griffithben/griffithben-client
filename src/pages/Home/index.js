import React from "react";
import { Col, Typography, Space, Button, Divider } from "antd";
import { Slide } from "react-awesome-reveal";
import HeaderAvatar from "../../modules/HeaderAvatar";
import HeaderInfo from "../../modules/HeaderInfo";
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
        <Col xs={0} md={12} style={{ textAlign: "right" }}>
          <HeaderAvatar />
        </Col>
        <Col xs={24} md={0} style={{ textAlign: "center" }}>
          <HeaderAvatar />
        </Col>
        <Col
          xs={0}
          md={{ span: 11, offset: 1 }}
          style={{ textAlign: "left", paddingTop: 26 }}
        >
          <HeaderInfo />
        </Col>
        <Col xs={24} md={0} style={{ textAlign: "center" }}>
          <HeaderInfo />
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
            <Button href="https://oberd.com" target="_blank">
              Go to Site
            </Button>
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
              Brewerwall started as a collection of open source data
              repositories and calculation components for
              homebrewers/programmers to use. Later, Brewerwall evolved into an
              online searchable resource for homebrew ingredients. Currently,
              Brewerwall is exanding into an online service to facilitate the
              management of homebrew competitions.
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
            <Button href="https://brewerwall.com" target="_blank">
              Go to Site
            </Button>
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
            <Title level={2}>Fullstack Blog</Title>
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
            <Button href="http://www.fullstackbrewing.com" target="_blank">
              Go to Site
            </Button>
          </WhiteBox>
        </Col>
      </PaddedLightRow>
      <PaddedDarkRow>
        <Col span={24} style={{ textAlign: "center" }}>
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
      <PaddedDarkRow>
        <Col span={24} style={{ textAlign: "center" }}>
          <Title
            className="bebasNeueRegular"
            style={{ fontSize: "3em", marginBottom: 0, color: "white" }}
          >
            Open Source Repositories
          </Title>
        </Col>
      </PaddedDarkRow>
    </div>
  );
}

export default Home;
