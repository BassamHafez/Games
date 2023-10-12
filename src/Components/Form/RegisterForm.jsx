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
import { object, string, number } from "yup";

const RegisterForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = object({
    first_name: string().required("first name is required"),
    last_name: string().required("last name is required"),
    email: string().email("email not valid").required("email is required"),
    password: string()
      .min(4, "must be at least 4 characters long")
      .required("password is required"),
    age: number("only numbers")
      .min(14, "only +14 years old")
      .max(100, "only for under 100 years old")
      .required("age is required"),
  });
  return (
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
      <MainTitle title="Sign Up" />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <div className="d-flex w-100">
            <div className={`${styles.input_filed} my-4 mx-2`}>
              <Field type="name" name="first_name" placeholder="First name *" />
              <ErrorMessage name="first_name" component={"p"} />
            </div>
            <div className={`${styles.input_filed} my-4  mx-2`}>
              <Field type="name" name="last_name" placeholder="Last name *" />
              <ErrorMessage name="last_name" component={"p"} />
            </div>
          </div>

          <div className={`${styles.input_filed} my-4`}>
            <Field type="email" name="email" placeholder="Email *" />
            <ErrorMessage name="email" component={"p"} />
          </div>
          <div className={`${styles.input_filed} my-4`}>
            <Field type="password" name="password" placeholder="password *" />
            <ErrorMessage name="password" component={"p"} />
          </div>
          <div className={`${styles.input_filed} my-4`}>
            <Field type="age" name="age" placeholder="Age *" />
            <ErrorMessage name="age" component={"p"} />
          </div>
          <div className="w-100">
            <MainButtonPolygon text="Register Now" type="submit" />
          </div>
          <span className={styles.or_span}>or</span>
          <motion.div whileHover={{ x: 10 }} className={styles.login_ways}>
            <img src={google} alt="google icon" />
            <p className={styles.login_ways_text}>Sign Up with Google</p>
          </motion.div>
          <motion.div whileHover={{ x: 10 }} className={styles.login_ways}>
            <FontAwesomeIcon className={styles.facebook} icon={faFacebookF} />
            <p className={styles.login_ways_text}>Sign Up with Facebook</p>
          </motion.div>
          <div className="mt-3">
            <p className={styles.login_ways_text}>
              have an account ?{" "}
              <Link to={"/login"} className="special_main_color">
                sign In
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;