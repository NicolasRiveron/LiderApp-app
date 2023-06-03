import React from "react";
import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import { ButtonDefault } from "../../General";
import "./CardModulo.css";

/* 
EL componente espera:

+ Un titulo: Ej. Operación
+ Un numero de modulo: Ej. 1
+ La duracion del modulo en dias: Ej. 7 
+ El porcentaje completado del modulo: Ej. 30
+ La ruta de la imagen que se va a mostrar: Ej. https://lorem_ipsum

*/


export function CardModulo(props) {
  const { Title, Number, Duration, Complete, routeImg } = props;

  return (
    <IonCard className="CardModulo">
      <IonCardContent>
        <IonCardTitle>{Title}</IonCardTitle>
        <p>{`Módulo ${Number}`}</p>
        <p>{`${Duration} días`}</p>
        <p>{`${Complete}% completo`}</p>

        <IonImg src={routeImg} alt={`Imagen del Módulo ${Number} - ${Title}`} />

        <ButtonDefault text="Hacer" />
      </IonCardContent>
    </IonCard>
  );
}
