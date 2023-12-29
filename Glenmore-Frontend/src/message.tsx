// Write a component that displays a message to the user.

import React from "react";

const Message = () => {
  const name = "Faizan";
  if (name) {
    return (
      <div>
        <p>
          Hello {name}! Welcome to <strong>Glenmore's</strong> React App!
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No name!</h1>
      </div>
    );
  }
};

export default Message;
