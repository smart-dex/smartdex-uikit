import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const SocialLink = styled(Link)`
  color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.87)' : '#5F5E76'};
  width: 142px;
  max-width: 100%;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 25px;
`
const StyleIconT = styled(Link)`
  svg {
    fill: ${({ theme }) => theme.isDark ? '#0085FF' : '#FFFFFF'};
  }
`
const StyleIconTl = styled.span`
  padding-top: 2px;
  display: inline-block;
  svg {
    fill: ${({ theme }) => theme.isDark ? '#0085FF' : '#FFFFFF'};
    width: 23px;
  }
`
const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SocialLinks: React.FC = () => (
  <Flex style={{paddingTop: 8}}>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "24px", color: "#FFFFFF", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? "10px" : 0;
      if (social.items) {
        return (
          <Dropdown key={social.label} position="top" target={<StyleIconTl><Icon {...iconProps} mr={mr} /></StyleIconTl>}>
            {social.items.map((item) => (
              <SocialLink external key={item.label} href={item.href} aria-label={item.label}>
                {item.label}
              </SocialLink>
            ))}
          </Dropdown>
        );
      }
      return (
        <StyleIconT external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </StyleIconT>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
