import Button from "@diary-app/components/atoms/Button";
import Input from "@diary-app/components/atoms/Input";
import Text from "@diary-app/components/atoms/Text";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";

export type Props = {
  className?: string;
  onSend?: () => void;
};

type AuthValues = {
  email: string;
  password: string;
};

const Signup: React.FC<Props> = ({ className }) => {
  const initialValues: AuthValues = { email: "", password: "" };
  const handleSubmit = (values: AuthValues, { setSubmitting }: FormikHelpers<AuthValues>) => {
    setSubmitting(true);
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={className}>
      <Text fontSize="lg" color="red">
        Sign up
      </Text>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeHolder="diary@example.com"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
            />
            <Input
              type="password"
              placeHolder="password"
              onChange={handleChange}
              value={values.email}
              error={errors.password}
            />
            <Input
              type="password"
              placeHolder="password"
              onChange={handleChange}
              value={values.email}
              error={errors.password}
            />
            <Button type="submit" disabled={isSubmitting} text="send" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
