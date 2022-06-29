import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { clearItem } from "../../Redux/Reducer/AppReducer/appActions";
import styles from "./Form.module.css";
import stylesButton from "../Button/Button.module.css";
import { useDispatch } from "react-redux";
import { storeOrders } from "../../helpers/https";
const FormShop = (props) => {
  const { click, productsCart } = props;
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "This field should be a string")
      .min(2, "The name is too short!")
      .max(50, "The name is too long!")
      .required("Required"),
    email: yup
      .string()
      .required("Required")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "This is not a valid email, try again"
      ),
    address: yup.string().required("Required"),
    phoneNumber: yup
      .number()
      .min(10, "Phone number is too short !")
      .typeError("This text is not a number")
      .required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          phoneNumber: "",
        }}
        validateOnBlur
        onSubmit={(values, actions) => {
          values.products = productsCart.map((product) => {
            return {
              name: product.name,
              count: product.count,
            };
          });
          storeOrders(values);
          dispatch(clearItem());
          actions.resetForm({
            values: {
              name: "",
              secondName: "",
              age: "",
              address: "",
              phoneNumber: "",
            },
          });
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          isValid,
          handleSubmit,
          handleReset,
          handleBlur,
          dirty,
        }) => (
          <div
            className={styles.formContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <form action="">
              <h1 className={styles.title}>Place an order</h1>
              <div>
                <div className={styles.field}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Name"
                    name={"name"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />{" "}
                  {touched.name && errors.name && (
                    <p className={styles.error}>{errors.name}</p>
                  )}
                </div>
                <div className={styles.field}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Email"
                    name={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>
                <div className={styles.field}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Address"
                    name={"address"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {touched.address && errors.address && (
                    <p className={styles.error}>{errors.address}</p>
                  )}
                </div>
                <div className={styles.field}>
                  <input
                    type="tel"
                    className={styles.input}
                    placeholder="Phone number "
                    name={"phoneNumber"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <p className={styles.error}>{errors.phoneNumber}</p>
                  )}
                </div>
              </div>
              <div className={styles.buttons}>
                <button
                  className={stylesButton.buttonForm}
                  disabled={!isValid && !dirty}
                  onClick={handleSubmit}
                  type="submit"
                >
                  {" "}
                  Send request
                </button>
                <div className="divider"> </div>
                {click && (
                  <button onClick={click} type="button" className="button ">
                    Close
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default FormShop;
