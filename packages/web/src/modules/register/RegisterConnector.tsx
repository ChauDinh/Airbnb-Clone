import React from "react";
import { RegisterViewHigherComponent } from "./ux/RegisterView";

/**
 * container -> view
 *
 * container -> connector -> view
 *
 * controller -> connector -> view
 */

export class RegisterConnector extends React.PureComponent {
  mockSubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return <RegisterViewHigherComponent submit={this.mockSubmit} />;
  }
}
