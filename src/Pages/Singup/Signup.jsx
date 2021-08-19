import React, { useState } from "react";
import SignupForm from "../../Components/SignupForm";
import { useHistory } from "react-router-dom";
import firebase from "../../Config/FirebaseConfig";
import { useFormik } from "formik";
import * as yup from "yup";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  let auth = firebase.auth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          setLoading(false);
          history.push("/");
        })
        .catch((err) => {
          setLoading(false);
        });
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Invalid Email").required("Email is required"),

      password: yup
        .string()
        .min(6, "password is too Short!")
        .max(20, "password is too Long!")
        .required("password is required"),

      confirmPassword: yup
        .string()
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        }),
    }),
  });

  return (
    <div>
      <SignupForm loading={loading} formik={formik} />
    </div>
  );
};

export default Signup;
