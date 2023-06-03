import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  LoginForm,
  RegisterForm,
  ForgetPasswordForm,
  ResetPasswordForm,
  NotFound,
} from "../../components/Shared";
import { IonRouterOutlet } from "@ionic/react";

export function Auth() {
  return (
    <IonRouterOutlet>
      <Switch>
        <Redirect exact={true} from="/" to="/login"/>
        <Route path="/login" render={() => <LoginForm />} exact={true}></Route>
        <Route
          path="/register"
          render={() => <RegisterForm />}
          exact={true}
        ></Route>
        <Route
          path="/forget-password"
          render={() => <ForgetPasswordForm />}
          exact={true}
        ></Route>
        <Route
          path="/reset-password/:id/:token"
          render={() => <ResetPasswordForm />}
          exact={true}
        ></Route>
        <Route path="*" exact={false} render={() => <NotFound />}></Route>
      </Switch>
    </IonRouterOutlet>
  );
}
