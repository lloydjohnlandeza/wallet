import * as React from "react";
import { ButtonBase, Typography, Icon } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import blue from "@material-ui/core/colors/blue";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import theme from "../../../theme";
const StyledBox = styled(Box)`
  text-align: center;
  background-color: ${blue["500"]};
`;
const StyledAddButton = styled(ButtonBase)`
  display: block;
  color: #fff;
  position: relative;
`;
const StyledIconButton = styled(Icon)`
  position: absolute;
  top: 30%;
  right: 5%;
`;
const AddButton = () => (
  <StyledAddButton>
    <StyledBox py={1} pr={2} borderRadius={5}>
      <Typography variant="body2">ADD</Typography>
      <Typography variant="body2">ACCOUNT</Typography>
      <StyledIconButton>
        <Add />
      </StyledIconButton>
    </StyledBox>
  </StyledAddButton>
);

export default AddButton;
