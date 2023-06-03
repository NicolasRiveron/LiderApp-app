import React, {useState} from 'react'
import {IonButton} from "@ionic/react";
import "./ButtonWithIcon.css";

export default function ButtonWithIcon(props) {
  const [isClicked, setIsClicked] = useState(false);
  const { label, img } = props;


  const handleClick = () => {
    setIsClicked(true);

    // Simulamos el efecto de clic durante 200ms
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <div className="BtnWithIcon" expand="block" type="submit" onClick={handleClick}>
      <IonButton className="BtnWithIcon" expand="block" type="submit">
        {label}
      </IonButton>
      <span className={`CircleImage BtnWithIcon ${isClicked ? 'Clicked' : ''}`}>
          <img src={img} alt="Icono" className="ButtonImage" />
      </span>
    </div>
  )
}
