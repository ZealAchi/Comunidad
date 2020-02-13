import React from "react";
import Routes from "./../Routes";
import AuthContext from "./Auth.Context";
import LoadContext from "./Load.Context";
import NotificationContext from "./Notification.Context";
import ModalContext from './Modal.Context'
export default function() {
  return (
    <LoadContext>
      <NotificationContext>
        <ModalContext>
        <AuthContext>
          <Routes />
        </AuthContext>
        </ModalContext>
      </NotificationContext>
    </LoadContext>
  );
}
