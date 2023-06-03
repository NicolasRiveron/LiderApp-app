import React, { useState } from "react";
import { IonInput, IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { arrowBack } from "ionicons/icons";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./ForgetPasswordForm.form";
import { Auth } from "../../../api";

import { ButtonDefault } from "../../General";
import "./ForgetPasswordForm.css";

const authController = new Auth();

export function ForgetPasswordForm() {
  const [error, setError] = useState("");

  const submitFormik = async (formValue) => {
    try {
      setError("");
      await authController.forgetPassword(formValue);
    } catch (error) {
      setError(error.msg);
    }
  };

  return (
    <div className="MyIonContent">
      <Link className="toLogin" to="/">
        <IonIcon icon={arrowBack}></IonIcon>
      </Link>
      <h1 className="forget-title">App Liderazgo</h1>
      <Formik
        initialValues={initialValues()}
        validationSchema={validationSchema()}
        validateOnChange={false}
        onSubmit={submitFormik}
      >
        {(formikProps) => (
          <form className="form_Forget" onSubmit={formikProps.handleSubmit}>
            <IonInput
              className="MyIonInput_Forget"
              placeholder="Usuario"
              name="email"
              onIonInput={formikProps.handleChange}
              value={formikProps.values.email}
            />
            <p className="error_Forget">
              {formikProps.touched.email && formikProps.errors.email}
            </p>

            <p className="serverError_Forget">{error}</p>

            <div className="btn_Forget">
              <ButtonDefault text="Enviar email" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
