import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { withFormik, FormikErrors, FormikProps } from "formik";
import { validUserSchema } from "@airbnbclone/helpers";

import "./RegisterView.css";

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
    const {
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      errors
    } = this.props;
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <Form.Item
            style={{ width: "100%" }}
            help={touched.email && errors.email ? errors.email : ""}
            hasFeedback
            validateStatus={touched.email && errors.email ? "error" : undefined}
          >
            <Input
              name="email"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              size="large"
              style={{
                width: "100%"
              }}
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%" }}
            help={touched.password && errors.password ? errors.password : ""}
            hasFeedback
            validateStatus={
              touched.password && errors.password ? "error" : undefined
            }
          >
            <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              size="large"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0" }}>
            <a className="login-form-forgot" href="/forgot-password">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            Or <a href="/login">login now!</a>
          </Form.Item>
        </form>
      </div>
    );
  }
}

export const RegisterViewHigherComponent = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterView);
