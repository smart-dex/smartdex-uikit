import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Box/Flex";
import { ArrowBackIcon, CloseIcon, WarningModalIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background: ${({ theme }) => theme.isDark ? '#00071C' : '#FFFFFF'};
  border: 1px solid ${({ theme }) => theme.isDark ? '#2F344B' : '#E2E2E8'};
  box-shadow: 50px 38px 102px rgba(120, 118, 148, 0.14);
  border-radius: 40px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: calc(100% - 70px);
  }
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 22px;
  min-height: 64px;
  padding-right: 45px;
  ${({ theme }) => theme.mediaQueries.nav} {
    min-height: 80px;
    padding: 12px 44px;
    padding-right: 55px;
  }
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const IconButtonStyle = styled(IconButton)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 17px;
  right: 17px;
  background: ${({ theme }) => theme.isDark ? '#9296A3' : '#D8D8D8'};
  svg {
    width: 15px;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    svg {
      width: 20px;
    }
  }
`;

const StyleFlexBody = styled(Flex)`
  border-top: 1px dashed  ${({ theme }) => theme.isDark ? 'rgba(239, 239, 241, 0.1)' : '#EFEFF1'};
  width: auto;
  margin: auto 22px;
  padding: 23px 0px;
  ${({ theme }) => theme.mediaQueries.nav} {
    margin: auto 44px;
  }
`;

const StyleWarningModalIcon = styled(WarningModalIcon)`
  fill: #FFA14E;
  width: 28px;
  height: 28px;
  margin-right: 20px;
  display: inline-block;
  position: relative;
  top: 10px;
  ${({ theme }) => theme.mediaQueries.nav} {
    width: 40px;
    height: 37px;
    margin-right: 34px;
  }
`;


const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "",
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButtonStyle variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="#FFFFFF" />
          </IconButtonStyle>
        )}
        <Heading>
          {title === 'Warning' && <StyleWarningModalIcon /> }
          {title}
          </Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButtonStyle variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon color="#FFFFFF" />
        </IconButtonStyle>
      )}
    </ModalHeader>
    <StyleFlexBody flexDirection="column" p={bodyPadding}>
      {children}
    </StyleFlexBody>
  </StyledModal>
);

export default Modal;
