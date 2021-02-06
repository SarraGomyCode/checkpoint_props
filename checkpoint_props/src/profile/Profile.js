import React from "react";
import PropTypes from "prop-types";

const Profile = ({ FullName, bio, profession, handleName, children }) => {
  handleName(FullName);
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "cyan",
        height: "600px",
      }}
    >
      <h1>{FullName}</h1>
      <h4>{bio}</h4>
      <h4>{profession}</h4>
      {children}
    </div>
  );
};

export default Profile;
Profile.defaultProps = {
  FullName: "inconnu",
  bio: "inconnu",
  profession: "inconnu",
};
Profile.propTypes = {
  profession: PropTypes.string,
  bio: PropTypes.string,
  FullName: PropTypes.string,
};
