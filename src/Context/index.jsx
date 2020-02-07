import React from "react";
import Routes from "./../Routes";
import AuthContext from "./Auth.Context";
import LoadContext from "./Load.Context";
import NotificationContext from "./Notification.Context";
export default function() {
  return (
    <LoadContext>
      <NotificationContext>
        <AuthContext>
          <Routes />
        </AuthContext>
      </NotificationContext>
    </LoadContext>
  );
}
