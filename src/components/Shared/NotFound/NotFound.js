import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { Link } from "react-router-dom";
import "./NotFound.css";

export function NotFound() {
  return (
    <div className="ContentNotFound">
      <Link className="toLogin" to="/">
        <IonIcon icon={arrowBack}></IonIcon>
      </Link>
      <h1 className="H1NotFound">404</h1>
      <h3 className="H2NotFound">Not Found</h3>
    </div>
  );
}
