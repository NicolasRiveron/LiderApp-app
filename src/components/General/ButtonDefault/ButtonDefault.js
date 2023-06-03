import { IonButton } from "@ionic/react";
import React from "react";
import "./Button.css";

/*

EL componente espera:

+ Un texto: Ej. iniciar sesión

*/


export function ButtonDefault(props) {
  const { text } = props;
  return (
    <IonButton className="buttonDefault" expand="block" type="submit">
      {text}
    </IonButton>
  );
}
