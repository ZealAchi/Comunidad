import React, { memo } from "react";
import Layout from "./../Layout";
import NoAuth from './../Pages/NoAuth'
export default function() {
  return (
    <>
      <div style={{ background: "red",display:'flex',flex:1 }}>
        <Layout >
            <NoAuth/>
        </Layout>
      </div>
    </>
  );
}
