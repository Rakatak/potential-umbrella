import './StarsPage.scss';
import React from "react";
import Table from "../../components/Table/Table";

// Services
import StarsService from "../../services/stars.service";
import UniversesService from "../../services/universes.service";

const starsService = new StarsService();
const universesService = new UniversesService();

export default class StarsPage extends React.Component {

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
    let stars = await starsService.getStars();

    // Add universe names
    await Promise.all(stars.map(async (star, index) => {
      const universe = await universesService.getUniversesById(star.universeId)
      stars[index]['universeName'] = universe.name;
    }))

    this.setState({
      isLoaded: true,
      data: stars
    })
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <h1>
            Stars{" "}
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
          </h1>

          <div className="App-table-container">
            <Table data={this.state.data}></Table>
          </div>
        </div>
      );
    } else {
      return (<h1>Loading...</h1>);
    }
  }
}
