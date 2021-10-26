import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

class GraphComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div className="GraphComponent">
        <VictoryChart padding={{ left: 30, top: 30, right: 50, bottom: 100 }}>
          <VictoryAxis
            tickFormat={this.props.averageStudent.assigment}
            style={{
              tickLabels: { angle: 45, textAnchor: "start", fontSize: 6 },
              ticks: { stroke: "grey", size: 5 },
              grid: { stroke: "rgb(221, 221, 221)" },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={[0, 1, 2, 3, 4, 5]}
            style={{
              tickLabels: { fontSize: 5 },
              ticks: { stroke: "grey", size: 5 },
              grid: { stroke: "rgb(221, 221, 221)" },
            }}
          />
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
            }}
            data={this.props.averageStudent}
            x="assignment"
            y="average"
          />
          <VictoryLine
            style={{
              data: { stroke: "#ff00ff" },
              parent: { border: "1px solid #ccc" },
            }}
            data={this.props.averageAll}
            x="assignment"
            y="average"
          />
        </VictoryChart>
        <div className="ComponentInfo">
          <p className="averageAll">
            Gemiddeld cijfer van een opdracht over alle studenten
          </p>
          <p className="averageOneStudent">
            Gemiddeld cijfer van deze student voor alle opdrachten
          </p>
        </div>
      </div>
    );
  }
}

export default GraphComponent;
