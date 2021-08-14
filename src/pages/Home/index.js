import React from "react";
import { Row, Col, Typography, Space, Button, Divider, Card } from "antd";
import { Slide, Fade } from "react-awesome-reveal";
import { GithubFilled } from "@ant-design/icons";
import HeaderAvatar from "../../modules/HeaderAvatar";
import HeaderInfo from "../../modules/HeaderInfo";
import WhiteBox from "../../modules/WhiteBox";
import {
  HeaderRow,
  PaddedLightRow,
  PaddedDarkRow,
  SkillTag,
  OpenSourceCard,
} from "./styles";

const { Title } = Typography;
const { Meta } = Card;

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
              Contributed in a team environment as a lead developer to produce
              an international online based research data collection system for
              orthopaedic surgeons.
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
              Fullstack brewing started as an alias to my homebrewing efforts.
              As my experience and knowledge grew over time, I thought it would
              be great to start a blog about things I have learned. So I decided
              to make a simple blog dedicated to ideas and journeys of
              homebrewing.
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
          <br />
          <Title
            className="bebasNeueRegular"
            style={{ fontSize: "3em", marginBottom: 0, color: "white" }}
          >
            Github Contributions
          </Title>
          <p>
            <a
              href="https://github.com/griffithben"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="http://ghchart.rshah.org/griffithben"
                alt="Ben Griffith Github Chart"
                style={{ maxWidth: 663, width: "80%", margin: "0em 2em" }}
              />
            </a>
          </p>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <br />
          <br />
          <Title
            className="bebasNeueRegular"
            style={{ fontSize: "3em", marginBottom: 0, color: "white" }}
          >
            Open Source Repositories
          </Title>
          <br />
        </Col>
        <Col span={22} offset={1} style={{marginBottom: "4em"}}>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Fade duration={500}>
                <OpenSourceCard
                  onClick={() => {
                    window.open(
                      "https://github.com/brewerwall/php-barcode-generator",
                      "_blank"
                    );
                  }}
                >
                  <Meta
                    avatar={<GithubFilled style={{ fontSize: "3.5em" }} />}
                    title="php-barcode-generator"
                    description="Refactor of a PHP barcode generator."
                  />
                </OpenSourceCard>
              </Fade>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Fade duration={500} delay={250}>
                <OpenSourceCard
                  onClick={() => {
                    window.open(
                      "https://github.com/brewerwall/beercalc_js",
                      "_blank"
                    );
                  }}
                >
                  <Meta
                    avatar={<GithubFilled style={{ fontSize: "3.5em" }} />}
                    title="beercalc_js"
                    description="A class of useful brewing calculations."
                  />
                </OpenSourceCard>
              </Fade>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Fade duration={500} delay={500}>
                <OpenSourceCard
                  onClick={() => {
                    window.open(
                      "https://github.com/brewerwall/yeasts",
                      "_blank"
                    );
                  }}
                >
                  <Meta
                    avatar={<GithubFilled style={{ fontSize: "3.5em" }} />}
                    title="yeasts"
                    description="A collection of brewing yeast data."
                  />
                </OpenSourceCard>
              </Fade>
            </Col>
          </Row>
        </Col>
      </PaddedDarkRow>
    </div>
  );
}

export default Home;
