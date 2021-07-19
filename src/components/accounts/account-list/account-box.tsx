import * as React from "react";
import { ButtonBase, Typography } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background-color: ${blue["500"]};
  color: #fff;
`;
const StyledButton = styled(ButtonBase)`
  display: block;
  text-align: left;
`;

const AccountBox = () => (
  <StyledButton>
    <StyledBox p={1} borderRadius={5}>
      <Typography variant="subtitle2">Cash</Typography>
      <Typography variant="body2">PHP 100</Typography>
    </StyledBox>
  </StyledButton>
);

export default AccountBox;
