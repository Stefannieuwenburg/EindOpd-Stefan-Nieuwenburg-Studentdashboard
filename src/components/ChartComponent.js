import React from "react";
import InputSelect from "./InputSelect";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDifficult: true,
      showFun: true,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(name, state) {
   
    if (name === "difficult") {
      this.setState(() => {
        return {
          showDifficult: state,
        };
      });
    } else if (name === "fun") {
      this.setState(() => {
        return {
          showFun: state,
        };
      });
    }
  }

  render() {
    const renderDifficultBar = (showDifficult) => {
      if (showDifficult) {
        return (
          <VictoryBar
            colorScale={""}
            alignment="middle"
            data={this.props.studentData}
            x="assignment"
            y="difficult"
          />
        );
      }
    };

    const renderFunBar = (showFun) => {
      if (showFun) {
        return (
          <VictoryBar
            colorScale={"blue"}
            alignment="end"
            data={this.props.studentData}
            x="assignment"
            y="fun"
          />
        );
      }
    };

    return (
      <div className="ChartComponent">
        <div className="InputSelect">
          <InputSelect
            selectName={"difficult"}
            selectText={" Hoe moeilijk was de opdracht ?"}
            selectChange={this.handleFilterChange}
          />
          <br />
          <InputSelect
            selectName={"fun"}
            selectText={" Hoe leuk was de opdracht ?"}
            selectChange={this.handleFilterChange}
          />
        </div>

        <VictoryChart
          domainPadding={{ x: 17 }}
          className="VictoryChart-BarChart"
          padding={{ left: 30, top: 30, right: 30, bottom: 100 }}
        >
          <VictoryAxis
            tickFormat={this.props.studentData.assigment}
            style={{
              tickLabels: { angle: 45, textAnchor: "start", fontSize: 6 },
              ticks: { stroke: "grey", size: 5 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={[1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 5 },
              ticks: { stroke: "grey", size: 5 },
            }}
          />
          <VictoryGroup offset={15} style={{ data: { width: 8 } }}>
            {renderDifficultBar(this.state.showDifficult)}
            {renderFunBar(this.state.showFun)}
          </VictoryGroup>
        </VictoryChart>
        <div className="ComponentInfo">
          <p className="fun">Hoe leuk was de opdracht</p>
          <p className="difficult">Hoe moeilijk was de opdracht</p>
        </div>
      </div>
    );
  }
}

export default ChartComponent;
