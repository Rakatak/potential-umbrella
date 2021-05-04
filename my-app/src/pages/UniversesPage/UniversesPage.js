import './UniversesPage.scss';
import React from "react";
import Table from "../../components/Table/Table";

// Services
import StarsService from "../../services/stars.service";
import UniversesService from "../../services/universes.service";

const starsService = new StarsService();
const universesService = new UniversesService();

export default class UniversesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  // Here a global store implementation would be better
  // as redundant data is currently being loaded from the API
  async componentDidMount() {
    let universes = await universesService.getUniverses();

    // Add universe size
    await Promise.all(universes.map(async (universe, index) => {
      const stars = await starsService.getStarsByUniverseId(universe.id)
      universes[index]['currentSize'] = stars.length;
    }))

    this.setState({
      isLoaded: true,
      data: universes
    })
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <h1>
            Universes{" "}
            <span role="img" aria-label="universe emoji">
              🌌
            </span>
          </h1>

          <div className="App-table-container">
            <Table data={this.state.data}></Table>
          </div>
        </div>
      );
    } else {
      return (<h2>Loading...</h2>);
    }
  }
}
