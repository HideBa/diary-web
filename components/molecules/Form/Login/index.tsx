import Button from "@diary-app/components/atoms/Button";
import Input from "@diary-app/components/atoms/Input";
import Text from "@diary-app/components/atoms/Text";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import useValidate from "../use-validate";

export type Props = {
  className?: string;
  onSend?: (email: string, password: string) => void;
};

type AuthValues = {
  email: string;
  password: string;
};

const Login: React.FC<Props> = ({ className, onSend }) => {
  const initialValues: AuthValues = { email: "", password: "" };
  const handleSubmit = (values: AuthValues, { setSubmitting }: FormikHelpers<AuthValues>) => {
    setSubmitting(true);
    console.log(values);
    onSend?.(values.email, values.password);
    setSubmitting(false);
  };
  const { displayingErrorMessagesSchema } = useValidate();

  return (
    <div className={className}>
      <Text fontSize="lg" color="red">
        Login
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={displayingErrorMessagesSchema}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeHolder="diary@example.com"
              onChange={handleChange}
              value={values.email}
              id="email"
              onBlur={handleBlur}
              error={touched.email ? errors.email : ""}
            />
            <Input
              type="password"
              placeHolder="password"
              onChange={handleChange}
              value={values.email}
              id="password"
              onBlur={handleBlur}
              error={touched.password ? errors.password : ""}
            />
            <Button type="submit" disabled={isSubmitting || !!errors} text="send" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
