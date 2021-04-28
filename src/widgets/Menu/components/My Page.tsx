import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../../../components/Dropdown/Dropdown";
import MenuLink from "./MenuLink";
import Text from "../../../components/Text/Text";
import { ChevronDownIcon } from "../../../components/Svg";
import Button from "../../../components/Button/Button";

const linkMyPage = {
  label: "My Page",
  icon: "MyPageIcon",
  items: [
    {
      label: "Wallet",
      href: "/wallet",
    },
    {
      label: "Referral",
      href: "/referral",
    },
    {
      label: "Refferral Management",
      href: "/refferral-management",
    },
  ],
};

const StyleButton = styled(Button)`
  height: 37px;
  padding-left: 16px;
  padding-right: 16px;
  > div {
    font-size: 13px;
    color: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.87)" : "#6F6C99")};
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    min-width: 150px;
    height: 56px;
    > div {
      font-size: 16px;
    }
  }
`;

const StyleChevronDownIcon = styled(ChevronDownIcon)`
  color: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.87)" : "#6F6C99")};
`;

const LinkStyle = styled.div`
  color: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.87)" : "#6F6C99")};
  padding: 0 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
`;

const MyPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Dropdown
      position="bottom"
      target={
        <StyleButton variant="text" endIcon={<StyleChevronDownIcon width="24px" />}>
          <Text color="textSubtle">{linkMyPage.label}</Text>
        </StyleButton>
      }
    >
      {linkMyPage.items.map((itemMyPage) => (
        <MenuLink href={itemMyPage.href} onClick={handleClick}>
          <LinkStyle>{itemMyPage.label}</LinkStyle>
        </MenuLink>
      ))}
    </Dropdown>
  );
};

export default MyPage;
