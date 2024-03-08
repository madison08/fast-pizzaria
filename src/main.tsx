import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h1>Pizza</h1>
      <img src="pizzas/spinaci.jpg" alt="" />
      <p>Pizza salmino</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
