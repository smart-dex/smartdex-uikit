import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [sizes.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [sizes.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
  },
  [sizes.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  font-size: 18px;
  font-weight: 600;
  line-height: 29px;
  color: ${({ theme }) => theme.isDark? 'rgba(255, 255, 255, 0.87)' : '#5F5E76'};

  ${({ theme }) => theme.mediaQueries.nav} {
    font-size: 24px;
  }
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
