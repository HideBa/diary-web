import * as Yup from "yup";

export default () => {
  const displayingErrorMessagesSchema = Yup.object().shape({
    // username: Yup.string()
    //   .min(2, "ユーザー名は2文字以上です")
    //   .max(30, "ユーザー名は30文字以下です")
    //   .required("必須項目です"),
    email: Yup.string().email("無効なメールアドレスです").required("必須項目です"),
    password: Yup.string().required("必須項目です").min(8, "パスワードは8文字以上です"),
    passwordConfirmation: Yup.string()
      .required("必須項目です")
      .when("password", {
        is: (val: string) => (val && val.length > 7 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must be same"),
      }),
  });
  return { displayingErrorMessagesSchema };
};
