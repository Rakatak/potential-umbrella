import './Table.scss';
import React, { Component } from 'react'

class Table extends Component {

  componentDidUpdate(prevProps) {
    this.render();
  }

  render() {
    return (
      <table role="table" className="App-table">
        <tbody>
          <tr>{this.renderTableHeader(this.props.data)}</tr>
          {this.renderTableData(this.props.data)}
        </tbody>
      </table>
    );
  };

  renderTableData(tableData) {
    return tableData.map((data, index) => {
      return (
        <tr key={data.id}>
          {
            Object.keys(data).map((sub, subindex) => {
              if (sub === 'color') {
                return (<td style={{ backgroundColor: data[sub] }} key={subindex}>{data[sub]}</td>)
              } else {
                return (<td key={subindex}>{data[sub]}</td>)
              }
            })
          }
        </tr>
      )
    })
  }

  renderTableHeader(data) {
    let header = Object.keys(data[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  };
}

export default Table;
