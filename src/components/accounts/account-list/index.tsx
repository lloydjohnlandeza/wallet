import * as React from "react";
import Card from "@material-ui/core/Card";
import {
  Button,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
  CardActions,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import AddButton from "./add-button";
import AccountBox from "./account-box";
import theme from "../../../theme";
import { LibraryBooks } from "@material-ui/icons";

const StyledAccountGrid = styled(Box)`
  display: grid;
  grid-gap: ${theme.spacing(1)}px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const AccountList = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="List of accounts"
      />
      <CardContent>
        <StyledAccountGrid>
          <AccountBox />
          <AccountBox />
          <AddButton />
        </StyledAccountGrid>
      </CardContent>
      <CardActions>
        <Button>Adjust Balance</Button>
        <Box flex={1} />
        <Button variant="outlined" startIcon={<LibraryBooks />}>
          Records
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountList;
