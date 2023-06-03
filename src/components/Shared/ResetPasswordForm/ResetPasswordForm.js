import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IonInput, IonIcon, useIonRouter } from "@ionic/react";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./ResetPasswordForm.form";
import { arrowBack } from "ionicons/icons";
import { Auth } from "../../../api";

import { ButtonDefault } from "../../General";
import "./ResetPasswordForm.css";

const authController = new Auth();

export function ResetPasswordForm() {
  const { id, token } = useParams();
  const [error, setError] = useState("");
  const router = useIonRouter();

  const submitFormik = async (formValue) => {
    try {
      setError("");
      await authController.resetPassword(formValue, id, token);
      router.push("/", "root", "replace");
    } catch (error) {
      setError(error.msg);
    }
  };

  return (
    <div className="MyIonContent">
      <Link className="toLogin" to="/">
        <IonIcon icon={arrowBack}></IonIcon>
      </Link>

      <h1 className="auth-title">App Liderazgo</h1>
      <Formik
        initialValues={initialValues()}
        validationSchema={validationSchema()}
        validateOnChange={false}
        onSubmit={submitFormik}
      >
        {(formikProps) => (
          <form className="form_Reset" onSubmit={formikProps.handleSubmit}>
            <div className="inputContent">
              <div className="middleWidth_Reset">
                <IonInput
                  className="MyIonInput_Reset"
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  onIonInput={formikProps.handleChange}
                  value={formikProps.values.password}
                />
                <p className="error_Reset">
                  {formikProps.touched.password && formikProps.errors.password}
                </p>
              </div>
              <div className="middleWidth_Reset">
                <IonInput
                  className="MyIonInput_Reset"
                  placeholder="Repetir contraseña"
                  type="password"
                  name="repeatPassword"
                  onIonInput={formikProps.handleChange}
                  value={formikProps.values.repeatPassword}
                />
                <p className="error_Reset">
                  {formikProps.touched.repeatPassword &&
                    formikProps.errors.repeatPassword}
                </p>
              </div>
            </div>

            <p className="serverError_Reset">{error}</p>
            <div className="auth_Reset">
              <ButtonDefault text="Recuperar Cuenta" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
