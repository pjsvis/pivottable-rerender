import React from "react";
import data from "./data";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";
import Plot from "react-plotly.js";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

const data1 = [
  { Country: "USA", Sales: 45000 },
  { Country: "USA", Sales: 50000 },
  { Country: "CA", Sales: 15000 }
];

const data2 = [
  { Product: "Sofa", Sales: 5000 },
  {
    Product: "Dinner Table",
    Sales: 50000
  },
  { Product: "Chair", Sales: 15000 }
];

const dataDic = { Region: data1, Products: data2 };
class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: "Region", pivotTableUIConfig: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  handleSubmit(event) {
    alert("You have selected " + this.state.selectedOption);
    event.preventDefault();
  }

  render() {
    // Picking all the properties except "data"
    const { data, ...pivotTableUIConfig } = this.state.pivotTableUIConfig;

    return (
      <div>
        <select defaultValue="Region" onChange={e => this.handleChange(e)}>
          <option value="Region">Region</option>
          <option value="Products">Products</option>
        </select>
        <br />
        <br />

        <PivotTableUI
          data={dataDic[this.state.selectedOption]}
          onChange={s => {
            console.log("State passed on PivotTable onChange:");
            console.log(s);
            this.setState({ pivotTableUIConfig: s });
          }}
          renderers={Object.assign({}, TableRenderers)} //,PlotlyRenderers)}
          {...pivotTableUIConfig}
        />
      </div>
    );
  }
}

export default Grid;
