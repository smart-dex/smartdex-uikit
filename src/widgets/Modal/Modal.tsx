import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Box/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
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
    max-width: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 44px;
  min-height: 80px;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const IconButtonStyle = styled(IconButton)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.isDark ? '#9296A3' : '#D8D8D8'};
`;

const StyleFlexBody = styled(Flex)`
  border-top: 1px dashed  ${({ theme }) => theme.isDark ? 'rgba(239, 239, 241, 0.1)' : '#EFEFF1'};
  width: auto;
  margin: auto 44px;
  padding: 23px 0px;
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
        <Heading>{title}</Heading>
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
