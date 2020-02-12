import React from 'react'
import NoAuth from "./../Pages/NoAuth";
export const Rutas = [
  {
    exact: false,
    path: "/",
    component: <NoAuth />
  }
];

export const RenderComponent = props => {
  const { AuthInfo, component } = props;
  if (AuthInfo.token !== undefined) {
    return component
  }
  return <>NO as iniciado sesion</>;
};