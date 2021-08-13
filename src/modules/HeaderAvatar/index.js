import React from "react";
import { Avatar } from "antd";
import { Fade } from "react-awesome-reveal";

function HeaderAvatar() {
  return (
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
  );
}

export default HeaderAvatar;
