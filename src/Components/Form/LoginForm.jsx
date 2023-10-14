import React from "react";
import styles from "./LoginForm.module.css";
import MainButtonPolygon from "../Ui/MainButtonPolygon";
import google from "../../images/google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import MainTitle from "../Ui/MainTitle";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import InputErrorText from "./../Ui/InputErrorText";
import { useMutation } from "@tanstack/react-query";
import { formHandler } from "../util/Http";

const LoginForm = () => {
  // const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: formHandler,
    onSuccess: () => {
      console.log("tm");
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    mutate({ type: "signin", formData: values });
  };

  const validationSchema = object({
    email: string().email("email not valid").required("email required"),
    password: string()
      .min(4, "password should be at least 4 characters")
      .required("password is required"),
  });

  return (
    <div className=" w-75 m-auto mt-5 d-flex flex-column align-items-center justify-content-center">
      <MainTitle title="Sign In" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <div className="w-100 my-4 position-relative">
            <div className={styles.input_filed}>
              <Field
                key="field"
                type="email"
                name="email"
                placeholder="Email *"
              />
            </div>
            <ErrorMessage key="error" name="email" component={InputErrorText} />
          </div>

          <div className="w-100 my-4 position-relative">
            <div className={styles.input_filed}>
              <Field type="password" name="password" placeholder="password *" />
            </div>
            <ErrorMessage name="password" component={InputErrorText} />
          </div>
          <div className="w-100 mt-5">
            <MainButtonPolygon type="submit" text="Login Now" />
          </div>
          <span className={styles.or_span}>or</span>
          <motion.div whileHover={{ x: 10 }} className={styles.login_ways}>
            <img src={google} alt="google icon" />
            <p className={styles.login_ways_text}>Continue with Google</p>
          </motion.div>
          <motion.div whileHover={{ x: 10 }} className={styles.login_ways}>
            <FontAwesomeIcon className={styles.facebook} icon={faFacebookF} />
            <p className={styles.login_ways_text}>Continue with Facebook</p>
          </motion.div>
          <div className="mt-3">
            <p className={styles.login_ways_text}>
              Don't have an account ?{" "}
              <Link to={"/register"} className="special_main_color">
                sign up
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
