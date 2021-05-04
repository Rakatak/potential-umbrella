
export default class UniversesService {

  /**
   * GET Request for all universes
   */
  getUniverses() {
    return fetch("http://localhost:1234/universes")
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
   * GET Requests universe by ID
   */
  getUniversesById(id) {
    return fetch(`http://localhost:1234/universes/${id}`)
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
