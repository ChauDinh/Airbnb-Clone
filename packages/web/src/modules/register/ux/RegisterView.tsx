import React from "react";
import * as Antd from "antd";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@airbnbclone/helpers";

import "./RegisterView.css";
import { InputField } from "../../share/InputField";

const { Form: AntForm, Icon, Button } = Antd;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RegisterView extends React.PureComponent<
  FormikProps<FormValues> & Props
> {
  render() {
    return (
      <div className="wrapper">
        <Form className="login-form">
          <h1 className="register-title">Create Account</h1>
          <Field
            name="email"
            prefix={
              <Icon type="user" style={{ color: "rgba(0, 0, 0, .25)" }} />
            }
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
            component={InputField}
          />
          <AntForm.Item style={{ marginBottom: "0" }}>
            <a className="login-form-forgot" href="/forgot-password">
              Forgot password?
            </a>
          </AntForm.Item>
          <AntForm.Item style={{ marginBottom: "0" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </AntForm.Item>
          <AntForm.Item>
            Or <a href="/login">login now!</a>
          </AntForm.Item>
        </Form>
      </div>
    );
  }
}

export const RegisterViewHigherComponent = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  // validateOnChange: false,
  // validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterView);
