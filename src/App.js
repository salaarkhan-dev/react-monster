import React, { Component } from "react";
import "./App.css";
import { SearchBox } from "./components/search/search.component";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>React Monsters</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        <p className="footer">
          © Created with
          <img
            className="footer-icon"
            alt="❤️"
            draggable="false"
            src="https://twemoji.maxcdn.com/2/72x72/2764.png"
          />
          by&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/salaar.khan.7927408/"
          >
            <span>Salaar Khan</span>
          </a>
        </p>
      </div>
    );
  }
}

export default App;
