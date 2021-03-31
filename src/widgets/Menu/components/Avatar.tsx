import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "../types";
import NoProfileAvatar from "../../../components/Svg/Icons/NoProfileAvatar";

interface AvatarProps {
  profile: Profile;
}

const StyledAvatar = styled.div`
  margin-left: 24px;
  position: relative;

  img {
    border-radius: 50%;
  }
`;

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`;

const StyleNoProfileAvatar = styled(NoProfileAvatar)`
  width: 37px;
  height: 37px;
  fill: #E2E2E8;

  ${({ theme }) => theme.mediaQueries.nav} {
    width: 56px;
    height: 56px;
  }
`

const StyleImg = styled.img`
  width: 37px;
  height: 37px;

  ${({ theme }) => theme.mediaQueries.nav} {
    width: 56px;
    height: 56px;
  }
`

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { username = "Bunny", image, profileLink, noProfileLink, showPip = false } = profile;
  const link = profile.username ? profileLink : noProfileLink;
  const isExternal = link.startsWith("http");
  const ariaLabel = "Link to profile";
  const icon = image ? (
    <StyleImg src={image} alt="profile avatar" />
  ) : (
    <StyleNoProfileAvatar  />
  );

  if (isExternal) {
    return (
      <StyledAvatar title={username}>
        <a href={link} aria-label={ariaLabel}>
          {icon}
        </a>
        {/* {showPip && <Pip />} */}
      </StyledAvatar>
    );
  }

  return (
    <StyledAvatar title={username}>
      <Link to={link} aria-label={ariaLabel}>
        {icon}
      </Link>
      {/* {showPip && <Pip />} */}
    </StyledAvatar>
  );
};

export default Avatar;
