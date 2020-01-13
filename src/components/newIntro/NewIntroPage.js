import React from "react";
import { FirebaseContext } from "../../firebase/Index";

class NewIntroPage extends React.Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          return <div>I've access to Firebase and render something.</div>;
        }}
      </FirebaseContext.Consumer>
    );
  }
}

export default NewIntroPage;
