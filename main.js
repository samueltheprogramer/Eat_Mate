const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h2", { id: "side heading" }, "Side heading"),
  React.createElement("h2", { id: "side heading" }, "Side heading"),
  React.createElement("h2", { id: "side heading" }, "Side heading"),
  React.createElement("h2", { id: "side heading" }, "Side heading"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
