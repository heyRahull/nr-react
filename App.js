import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "Heading1 for parcel");
const heading2 = React.createElement("h2", {}, "Heading2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const heading3 = (
  <div id={container}>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
  </div>
);

const Title = () => {
  return <h1>Helllo Rahul</h1>;
};

const Heading4 = () => {
  return (
    <div id={container}>
      <Title />
      <h1>Heading15</h1>
      <h2>Heading2</h2>
    </div>
  );
};
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading4());
