import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";
import MainButtonPolygon from "../Ui/MainButtonPolygon";
import google from "../../images/google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import MainTitle from "../Ui/MainTitle";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import InputErrorText from "../Ui/InputErrorText";
import { useMutation } from "@tanstack/react-query";
import { formHandler } from "../util/Http";
import ErrorBlock from "../../Pages/ErrorBlock/ErrorBlock";
import MainModal from "../Ui/MainModal";
import FadeLoadingScreen from "../Ui/FadeLoadingScreen";

const RegisterForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationFn: formHandler,
    onSuccess: (data) => {
      if (data !== "success") {
        setModalShow(true);
      } else {
        navigate("/login");
      }
    },
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  };
  const onSubmit = (values) => {
    mutate({ type: "signup", formData: values });
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

  const hideModal = () => {
    setModalShow(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isError ? (
        <ErrorBlock text={error} />
      ) : (
        <div className="my-5 d-flex flex-column align-items-center justify-content-center">
          {isLoading && <FadeLoadingScreen/>}

          <MainTitle title="Sign Up" />
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className={styles.form}>
              <div className="w-100 my-4 position-relative">
                <div className={styles.input_filed}>
                  <Field
                    type="name"
                    name="first_name"
                    placeholder="First name"
                  />
                </div>
                <ErrorMessage name="first_name" component={InputErrorText} />
              </div>
              <div className="w-100 my-4 position-relative">
                <div className={styles.input_filed}>
                  <Field type="name" name="last_name" placeholder="Last name" />
                </div>
                <ErrorMessage name="last_name" component={InputErrorText} />
              </div>

              <div className="w-100 my-4 position-relative">
                <div className={styles.input_filed}>
                  <Field type="email" name="email" placeholder="Email" />
                </div>
                <ErrorMessage name="email" component={InputErrorText} />
              </div>
              <div className="w-100 my-4 position-relative">
                <div className={styles.input_filed}>
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <ErrorMessage name="password" component={InputErrorText} />
              </div>

              <div className="w-100 my-4 position-relative">
                <div className={styles.input_filed}>
                  <Field type="age" name="age" placeholder="Age" />
                </div>
                <ErrorMessage name="age" component={InputErrorText} />
              </div>
              <div className="w-100 mt-5">
                <MainButtonPolygon text="Register Now" type="submit" />
              </div>
              <span className={styles.or_span}>or</span>
              <motion.div whileHover={{ x: 10 }} className={styles.login_ways}>
                <img src={google} alt="google icon" />
                <p className={styles.login_ways_text}>Sign Up with Google</p>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className={styles.login_ways}>
                <FontAwesomeIcon
                  className={styles.facebook}
                  icon={faFacebookF}
                />
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
      )}
      <MainModal type='signup' content={data} show={modalShow} onHide={hideModal} />
    </>
  );
};

export default RegisterForm;
