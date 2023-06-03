import React from "react";
import { setupIonicReact } from "@ionic/react";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { UserRouter } from "./router";
import { AuthProvider } from "./contexts";

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <AuthProvider>
        <IonReactRouter>
          <UserRouter />
        </IonReactRouter>
      </AuthProvider>
    </IonApp>
  );
}
