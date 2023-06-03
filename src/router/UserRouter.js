import React from "react";
import { UserHome, Exercise } from "../pages/user";
import { AdminHome, Users } from "../pages/admin";
import { Auth } from "../pages/shared";
import { IonPage, IonRouterOutlet } from "@ionic/react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useAuth } from "../hooks";
import { NotFound } from "../components/Shared";

export function UserRouter() {
  const { user } = useAuth();

  const loadPage = (Page) => {
    return (
      <IonPage>
        <Page />
      </IonPage>
    );
  };

  return (
    <>
      {!user ? (
        <IonRouterOutlet>
          <Route path="/">
            <IonPage>
              <Auth />
            </IonPage>
          </Route>
        </IonRouterOutlet>
      ) : (
        <>
          {user.isAdmin ? (
            <IonRouterOutlet>
              <Switch>
                <Redirect exact={true} from="/" to="/admin" />
                <Route exact={true} path="/admin">
                  {loadPage(AdminHome)}
                </Route>
                <Route exact={true} path="/admin/users">
                  {loadPage(Users)}
                </Route>
                <Route path="*" exact={false} render={() => <NotFound />} />
              </Switch>
            </IonRouterOutlet>
          ) : (
            <IonRouterOutlet>
              <Switch>
                <Redirect exact={true} from="/" to="/user" />
                <Route exact={true} path="/user">
                  {loadPage(UserHome)}
                </Route>
                <Route exact={true} path="/user/exercise">
                  {loadPage(Exercise)}
                </Route>
                <Route path="*" exact={false} render={() => <NotFound />} />
              </Switch>
            </IonRouterOutlet>
          )}
        </>
      )}
    </>
  );
}
