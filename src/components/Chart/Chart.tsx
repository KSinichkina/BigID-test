import * as React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
// Importing geodata (map data)
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export type ChartData = {
      id: string,
      name: string,
      value: number,
};

interface Props {
    chartData: ChartData[];
}

class Chart extends React.Component<Props> {
    state = {
        chart: undefined,
    };

    componentDidMount() {
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name} {value}";
    polygonTemplate.fill = am4core.color("#ddd");

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#00007F");

    // Remove Antarctica
    polygonSeries.exclude = ["AQ"];

     // Add some data
     polygonSeries.data = this.props.chartData.map((item: ChartData) => ({...item, fill: am4core.color("#95cdff")}));


    // Bind "fill" property to "fill" key in data
    polygonTemplate.propertyFields.fill = "fill";
        this.setState({chart})
    //   this.chart = chart;
    }
  
    componentWillUnmount() {
      if (this.state.chart) {
        this.state.chart.dispose();
      }
    }
  
    render() {
      return (
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      );
    }
  }

export default Chart;