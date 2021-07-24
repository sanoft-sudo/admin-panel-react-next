// import React from 'react'
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";


// am4core.useTheme(am4themes_animated);

// const RotatingWorldGlobe = () => {

//     let chart = am4core.create("globe-div", am4maps.MapChart);

// // Set map definition
// chart.geodata = am4geodata_worldLow;

// // Set projection
// chart.projection = new am4maps.projections.Orthographic();
// chart.panBehavior = "rotateLongLat";
// chart.deltaLatitude = -20;
// chart.padding(20,20,20,20);

// // limits vertical rotation
// chart.adapter.add("deltaLatitude", function(delatLatitude){
//     return am4core.math.fitToRange(delatLatitude, -90, 90);
// })

// // Create map polygon series
// let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// // Make map load polygon (like country names) data from GeoJSON
// polygonSeries.useGeodata = true;

// // Configure series
// let polygonTemplate = polygonSeries.mapPolygons.template;
// polygonTemplate.tooltipText = "{name}";
// polygonTemplate.fill = am4core.color("#47c78a");
// polygonTemplate.stroke = am4core.color("#454a58");
// polygonTemplate.strokeWidth = 0.5;

// let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
// graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
// graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
// graticuleSeries.fitExtent = false;


// chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
// chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#ffffff");

// // Create hover state and set alternative fill color
// let hs = polygonTemplate.states.create("hover");
// hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

// let animation;
// setTimeout(function(){
//   animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
// }, 3000)

// chart.seriesContainer.events.on("down", function(){
// if(animation){
//   animation.stop();
// }
// })

//     return (
//         <div id="globe-div" style={{ width: "100%", height: "300px" }}></div>

//     )
// }

// export default RotatingWorldGlobe
