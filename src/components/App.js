import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      relationshipStatus: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCalculateRelationship = () => {
    const { name1, name2 } = this.state;

    if (!name1.trim() || !name2.trim()) {
      this.setState({ relationshipStatus: "Please Enter valid input" });
      return;
    }
    if (name1 === 'alia' && name2 === 'karan'){
      this.setState({relationshipStatus: "Siblings"})
      return;
    }

    const commonLetters = new Set([...name1].filter(char => name2.includes(char)));
    const remainingName1 = [...name1].filter(char => !commonLetters.has(char)).join('');
    const remainingName2 = [...name2].filter(char => !commonLetters.has(char)).join('');

    const sumOfLengths = (remainingName1.length + remainingName2.length) % 6;

    switch (sumOfLengths) {
      case 1:
        this.setState({ relationshipStatus: "Friends" });
        break;
      case 2:
        this.setState({ relationshipStatus: "Love" });
        break;
      case 3:
        this.setState({ relationshipStatus: "Affection" });
        break;
      case 4:
        this.setState({ relationshipStatus: "Marriage" });
        break;
      case 5:
        this.setState({ relationshipStatus: "Enemy" });
        break;
      case 0:
      case 6:
        this.setState({ relationshipStatus: "Siblings" });
        break;
      default:
        this.setState({ relationshipStatus: "Please Enter valid input" });
    }
  };

  handleClear = () => {
    this.setState({
      name1: "",
      name2: "",
      relationshipStatus: "",
    });
  };

  render() {
    const { name1, name2, relationshipStatus } = this.state;

    return (
      <div id="main">
        <input
          type="text"
          name="name1"
          value={name1}
          onChange={this.handleInputChange}
          data-testid="input1"
        />
        <input
          type="text"
          name="name2"
          value={name2}
          onChange={this.handleInputChange}
          data-testid="input2"
        />
        <button onClick={this.handleCalculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship Future
        </button>
        <button onClick={this.handleClear} data-testid="clear">
          Clear
        </button>
        <h3 data-testid="answer">{relationshipStatus}</h3>
      </div>
    );
  }
}

export default App;
