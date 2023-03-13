import React, { Fragment } from "react";
import { Router } from "@reach/router";

import Tracks from "./tracks";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
    </Router>
  );
}
