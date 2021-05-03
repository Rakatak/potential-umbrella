import React from "react";

export default class StarsPage extends React.Component {
  render() {
    return (
      <h1 style={{ padding: "0.5rem" }}>
        Stars{" "}
        <span role="img" aria-label="house emoji">
          ⭐
        </span>
      </h1>
    );
  }
}
