import React, { useState } from "react";
import { IonInput, IonIcon, useIonRouter } from "@ionic/react";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { Auth } from "../../../api";
import { arrowBack } from "ionicons/icons";
import { Link } from "react-router-dom";

import { ButtonDefault } from "../../General";
import "./RegisterForm.css";

const authController = new Auth();

export function RegisterForm() {
  const [error, setError] = useState("");
  const router = useIonRouter();

  const submitFormik = async (formValue) => {
    try {
      setError("");
      await authController.register(formValue);
      router.push("/", "root", "replace");
    } catch (error) {
      setError("Error en el servidor");
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
          <form className="form_Register" onSubmit={formikProps.handleSubmit}>
            <IonInput
              className="MyIonInput_Register"
              name="email"
              placeholder="Correo electronico"
              onIonInput={formikProps.handleChange}
              value={formikProps.values.email}
            />
            <p className="error_Register">
              {formikProps.touched.email && formikProps.errors.email}
            </p>

            <div className="passwords">
              <div className="middleWidth_Register">
                <IonInput
                  className="MyIonInput_Register"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  onIonInput={formikProps.handleChange}
                  value={formikProps.values.password}
                />
                <p className="error_Register">
                  {formikProps.touched.password && formikProps.errors.password}
                </p>
              </div>
              <div className="middleWidth_Register">
                <IonInput
                  className="MyIonInput_Register"
                  name="repeatPassword"
                  placeholder="Repetir contraseña"
                  type="password"
                  onIonInput={formikProps.handleChange}
                  value={formikProps.values.repeatPassword}
                />
                <p className="error_Register">
                  {formikProps.touched.repeatPassword &&
                    formikProps.errors.repeatPassword}
                </p>
              </div>
            </div>

            <p className="serverError_Register">{error}</p>

            <div className="auth_Register">
              <ButtonDefault text="Registrarse" />
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
