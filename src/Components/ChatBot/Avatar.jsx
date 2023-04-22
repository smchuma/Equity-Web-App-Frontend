import { useState } from "react";
import PropTypes from "prop-types";

import { styles } from "./Styles";

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={props.style}>
      <div
        className="transition-3"
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? "1" : "0" },
        }}
      >
        Ask me a question?
      </div>

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        className="transition-3"
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? "1px solid #f9f0ff" : "2px solid #ffffff" },
        }}
      />
    </div>
  );
};
Avatar.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Avatar;
