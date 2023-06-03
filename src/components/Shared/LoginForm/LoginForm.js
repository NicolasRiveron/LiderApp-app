import React, { useState } from "react";
import { IonInput, useIonRouter } from "@ionic/react";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";
import { Auth } from "../../../api";
import { useAuth } from "../../../hooks";
import { Link } from "react-router-dom";

import { ButtonDefault } from "../../General";
import "./LoginForm.css";

const authController = new Auth();

export function LoginForm() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const router = useIonRouter();

  const submitFormik = async (formValue) => {
    try {
      setError("");
      const response = await authController.login(formValue);

      authController.setAccessToken(response.access);
      authController.setRefreshToken(response.refresh);

      await login(response.access);
      router.push("/", "root", "replace");
    } catch (error) {
      setError(error.msg);
    }
  };

  return (
    <div className="MyIonContent">
      <h1 className="auth-title">App Liderazgo</h1>
      <Formik
        initialValues={initialValues()}
        validationSchema={validationSchema()}
        validateOnChange={false}
        onSubmit={submitFormik}
      >
        {(formikProps) => (
          <form className="form_Login" onSubmit={formikProps.handleSubmit}>
            <div className="inputContentLogin">
              <div className="middleWidth_Login">
                <IonInput
                  className="MyIonInput_Login"
                  placeholder="Usuario"
                  name="email"
                  onIonInput={formikProps.handleChange}
                  value={formikProps.values.email}
                />
                <p className="error_Login">
                  {formikProps.touched.email && formikProps.errors.email}
                </p>
              </div>
              <div className="middleWidth_Login">
                <IonInput
                  className="MyIonInput_Login"
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  onIonInput={formikProps.handleChange}
                  value={formikProps.values.password}
                />
                <p className="error_Login">
                  {formikProps.touched.password && formikProps.errors.password}
                </p>
              </div>
            </div>

            <p className="toRegistro">
              O crear una cuenta{" "}
              <Link to="/register" className="underline">
                {"aquí"}
              </Link>
            </p>

            <p className="serverError_Login">{error}</p>

            <div className="auth_Login">
              <ButtonDefault  text="Iniciar Sesión" />
            </div>
          </form>
        )}
      </Formik>
      <a className="recuperarCuenta" href="/forget-password">
        Recuperar cuenta
      </a>
    </div>
  );
}
