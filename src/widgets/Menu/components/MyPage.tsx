import React from "react";
import styled from "styled-components";
import Dropdown from "../../../components/Dropdown/Dropdown";
import MenuLink from "./MenuLink";
import Text from "../../../components/Text/Text";
import { ChevronDownIcon } from "../../../components/Svg";
import Button from "../../../components/Button/Button";
import { MenuEntryHeader } from "../types";

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
  &:hover {
    opacity: 0.6;
  }
`;

const MyPage: React.FC<MenuEntryHeader> = ({ linkMyPage }) => {
    return (
      // linkMyPage.length > 0 && 
        <Dropdown
          position="bottom"
          target={
            <StyleButton variant="text" endIcon={<StyleChevronDownIcon width="24px" />}>
              <Text color="textSubtle">{linkMyPage[0].label}</Text>
            </StyleButton>
          }
        >
          {linkMyPage[0].items &&
            linkMyPage[0].items.map((itemMyPage) => (
              <MenuLink href={itemMyPage?.href}>
                <LinkStyle>{itemMyPage?.label}</LinkStyle>
              </MenuLink>
            ))}
        </Dropdown>
    )
};

export default MyPage;
