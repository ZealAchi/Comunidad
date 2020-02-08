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

const AuthValue = [];

export default function() {
  const { data: AuthInfo } = useContext(AuthContext);
  const { loading, changeState: changeLoad } = useContext(LoadContext);
  const { data: Notification = [] } = useContext(NotificationContext);

  useEffect(() => {
    toast(<Msg data={Notification} />);
  }, [Notification]);

  const render = ruta => {
    console.log(AuthInfo)
    if (AuthInfo.token !== undefined) {
      return ruta;
    }
    return <>NO as iniciado sesion</>;
  };
  const Rutas = [{ path: "/", render: render(<NoAuth />) }];
  return (
    <div>
      <Router>
        <Layout>
          <button
            className="btn btn-primary form"
            onClick={() => {
              changeLoad(!loading);
            }}
          >
            ChangeStatusLoad
          </button>
          {!loading ? (
            <>Loading...</>
          ) : (
            <Switch>
              {Rutas.map((item, i) => {
                console.log(item);
                return (
                  <div key={i}>
                    <Route
                      path={item.path}
                      render={() => {
                        const { children } = item.render.props;
                        if (children !== undefined) {
                          return children;
                        } else {
                          if (item.render.type()) {
                            return item.render.type();
                          }
                        }
                      }}
                    />
                  </div>
                );
              })}
            </Switch>
          )}
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
