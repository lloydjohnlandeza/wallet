import * as React from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import AccountList from "../components/accounts/account-list";
// markup
const IndexPage = () => {
  return (
    <main>
      <AccountList />
    </main>
  );
};

export default IndexPage;
