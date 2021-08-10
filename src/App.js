import React from "react";
import { Row, Col, Typography, Avatar, Space, Button } from "antd";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import "./App.less";

const { Title } = Typography;

const App = () => (
  <div>
    <Row
      style={{
        backgroundImage: "url('/img/y-so-serious-white.png')",
        paddingTop: "3em",
        paddingBottom: "3em",
      }}
      gutter={36}
    >
      <Col span={12} style={{ textAlign: "right" }}>
        <Avatar
          src="/img/me.jpg"
          size={210}
          style={{
            border: "5px solid #eee",
            boxShadow: "0 1px 10px rgba(0, 0, 0, 0.4)",
          }}
        />
      </Col>
      <Col span={12} style={{ textAlign: "left" }}>
        <Title
          className="bebasNeueRegular"
          style={{ fontSize: "5em", marginBottom: 0 }}
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
        <br />
        <Space>
          <Button
            size="large"
            icon={<GithubFilled />}
            href="https://github.com/griffithben"
            target="_blank"
          >
            Github
          </Button>
          <Button
            size="large"
            icon={<LinkedinFilled />}
            href="https://www.linkedin.com/in/griffithben/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Space>
      </Col>
    </Row>
  </div>
);

export default App;
