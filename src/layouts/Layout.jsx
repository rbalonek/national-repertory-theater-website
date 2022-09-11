import React from "react";

export default function Layout(props) {
  return (
    <div className="bg-cyan-900">
     
      <main>{props.children}</main>
      
    </div>
  );
}