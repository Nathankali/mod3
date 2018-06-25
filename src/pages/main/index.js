import React, { Component, Fragment } from "react";

export default class extends Component {
  state = {
    repositoryInput: ""
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>
                A declarative, efficient, and flexible JavaScript library for
                building user interfaces.
              </strong>
            </p>
            <a href="http://github.com/facebook/react">Acessar</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
