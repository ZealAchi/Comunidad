import React, { memo, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./../Layout";
import NoAuth from "./../Pages/NoAuth";
import { AuthContext } from "./../Context/Auth.Context";
import { LoadContext } from "./../Context/Load.Context";
import { NotificationContext } from "./../Context/Notification.Context";

export default function() {
  const { data: AuthInfo } = useContext(AuthContext);
  const { data: Load } = useContext(LoadContext);
  const { data: Notification = [] } = useContext(NotificationContext);

  useEffect(() => {
    toast(<Msg data={Notification} />);
  }, [Notification]);

  return (
      <div>
        <Router>
          <Layout>
          {Load.loading?<>Loading...</>:
            <Switch>
              <Route
                path="/"
                render={() => {
                  return <NoAuth />;
                }}
              />
            </Switch>
            }
          </Layout>
        </Router>
      </div>
  );
}

const Msg = ({ data }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div>
          <h4>{data.type}</h4>
          <div>
            <h5>{data.message}</h5>
          </div>
        </div>
        <div />
      </div>
      <h6>{data.owner}</h6>
    </div>
  );
};
