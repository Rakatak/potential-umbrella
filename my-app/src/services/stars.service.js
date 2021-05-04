export default class StarsService {


  /**
   * GET Request for all stars
   */
  getStars() {
    return fetch("http://localhost:1234/stars")
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error)
        }
      )
  }

  /**
   * GET Requests star by ID
   */
  getStarById(id) {
    return fetch(`http://localhost:1234/stars/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error)
        }
      )
  }

  /**
   * GET Requests star by external universe ID
   */
  getStarsByUniverseId(id) {
    return fetch(`http://localhost:1234/stars?universeId=${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          console.log(error)
        }
      )
  }
}
