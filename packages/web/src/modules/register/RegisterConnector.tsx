import React from "react";
import { RegisterController } from "@airbnbclone/controllers";

import { RegisterViewHigherComponent } from "./ux/RegisterView";

/**
 * container -> view
 *
 * container -> connector -> view
 *
 * controller -> connector -> view
 */

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterViewHigherComponent submit={submit} />}
      </RegisterController>
    );
  }
}
