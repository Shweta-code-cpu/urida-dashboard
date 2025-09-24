const BASE_URL = "http://192.168.106.95:8989/Lucknow";
const BASE_URL1 = "http://192.168.106.95:8989/LucknowZone1";
//---------------------- header section start --------------------------//


document.getElementById('Zone1').addEventListener('click', showTables);
document.getElementById('Zone1_type').addEventListener('click', showTables);
document.getElementById('Zone1_type_major').addEventListener('click', showTables);
document.getElementById('Zone1_type_minor').addEventListener('click', showTables);
//document.getElementById('Zone1_type_Sub_Arterial').addEventListener('click', showTables);
//document.getElementById('Zone1_type_Collector').addEventListener('click', showTables);
document.getElementById('Zone1_condition').addEventListener('click', showTables);
document.getElementById('Zone1_condition_good').addEventListener('click', showTables);
document.getElementById('Zone1_condition_moderate').addEventListener('click', showTables);
document.getElementById('Zone1_condition_poor').addEventListener('click', showTables);
document.getElementById('Zone1_material').addEventListener('click', showTables);
//document.getElementById('Zone1_material_BOE').addEventListener('click', showTables);
document.getElementById('Zone1_material_CC').addEventListener('click', showTables);
document.getElementById('Zone1_material_interlocking').addEventListener('click', showTables);
document.getElementById('Zone1_material_kachcha').addEventListener('click', showTables);
document.getElementById('Zone1_material_bitumen').addEventListener('click', showTables);
document.getElementById('Zone1_ownership').addEventListener('click', showTables);
//document.getElementById('Zone1_ownership_NHAI').addEventListener('click', showTables);
document.getElementById('Zone1_ownership_LNN').addEventListener('click', showTables);
document.getElementById('Zone1_ownership_Private_Road').addEventListener('click', showTables);
document.getElementById('Zone1_ownership_PWD').addEventListener('click', showTables);
document.getElementById('Zone1_ownership_Others').addEventListener('click', showTables);
//document.getElementById('Zone1_under_scheme_13th').addEventListener('click', showTables);
document.getElementById('Zone1_under_scheme_14th').addEventListener('click', showTables);
document.getElementById('Zone1_under_scheme_15th').addEventListener('click', showTables);
document.getElementById('Zone1_under_scheme_NNN').addEventListener('click', showTables);
document.getElementById('Zone1_under_scheme_Others').addEventListener('click', showTables);
document.getElementById('Zone4').addEventListener('click', showTables);
document.getElementById('Zone4_type').addEventListener('click', showTables);
document.getElementById('Zone4_type_Arterial').addEventListener('click', showTables);
document.getElementById('Zone4_type_Local_Street').addEventListener('click', showTables);
document.getElementById('Zone4_type_Sub_Arterial').addEventListener('click', showTables);
document.getElementById('Zone4_type_Collector').addEventListener('click', showTables);
document.getElementById('Zone4_condition').addEventListener('click', showTables);
document.getElementById('Zone4_condition_good').addEventListener('click', showTables);
document.getElementById('Zone4_condition_moderate').addEventListener('click', showTables);
document.getElementById('Zone4_condition_poor').addEventListener('click', showTables);
document.getElementById('Zone4_material').addEventListener('click', showTables);
document.getElementById('Zone4_material_BOE').addEventListener('click', showTables);
document.getElementById('Zone4_material_CC').addEventListener('click', showTables);
document.getElementById('Zone4_material_interlocking').addEventListener('click', showTables);
document.getElementById('Zone4_material_kachcha').addEventListener('click', showTables);
document.getElementById('Zone4_material_bitumen').addEventListener('click', showTables);
document.getElementById('Zone4_ownership').addEventListener('click', showTables);
document.getElementById('Zone4_ownership_NHAI').addEventListener('click', showTables);
document.getElementById('Zone4_ownership_LNN').addEventListener('click', showTables);
document.getElementById('Zone4_ownership_Private_Road').addEventListener('click', showTables);
document.getElementById('Zone4_ownership_PWD').addEventListener('click', showTables);
document.getElementById('Zone4_ownership_Others').addEventListener('click', showTables);
document.getElementById('Zone4_under_scheme_13th').addEventListener('click', showTables);
document.getElementById('Zone4_under_scheme_14th').addEventListener('click', showTables);
document.getElementById('Zone4_under_scheme_15th').addEventListener('click', showTables);
document.getElementById('Zone4_under_scheme_NNN').addEventListener('click', showTables);
document.getElementById('Zone4_under_scheme_Others').addEventListener('click', showTables);


// document.getElementById('Slum_Road').addEventListener('click', showTables);



function showTables() {
    // document.getElementById('table_data').style.display = 'block';
    document.getElementById('dataTable').style.display = 'block';
    document.getElementById('tableContainer').style.display = 'block';
       document.getElementById('Road_Age_legend').style.display = 'none';
    //   document.getElementById('Priority_legend').style.display = 'none';
    //   document.getElementById('type_legend').style.display = 'none';
    //   document.getElementById('type_legend_major').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('dataTable_Drain').style.display = 'none';
    document.getElementById('Scoreing_dataTable').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('tableContainer_Road_Age').style.display = 'none';
    document.getElementById('dataTable_Road_Age').style.display = 'none';

    var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'block';
    legendBtn.style.bottom = '30%';
    legendBtn.style.left = '1%'; // Example of additional style
    legendBtn.style.Color = 'color'; // Example of additional style

}

document.getElementById('ShowDrainage').addEventListener('click', showTables1);

function showTables1() {

    document.getElementById('tableContainer_Drain').style.display = 'block';
    document.getElementById('dataTable_Drain').style.display = 'block';
    document.getElementById('dataTable').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('tableContainer_Road_Age').style.display = 'none';
    document.getElementById('dataTable_Road_Age').style.display = 'none';
    document.getElementById('live_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('Scoreing_dataTable').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('type_legend_major').style.display = 'none';
    var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'none';
    legendBtn.style.bottom = '30%';
    legendBtn.style.left = '1%'; // Example of additional style
    legendBtn.style.Color = 'color'; // Example of additional style

    //  document.getElementById('legend_btn').style.display = 'none';
    //   if (table_data.style.display === 'none') {
    //       table_data.style.display = 'block';
    //       dataTable.style.display = 'none';
    //   } else {
    //       table_data.style.display = 'none';
    //       dataTable.style.display = 'block';
    //   }
}

document.getElementById('Bank_Road').addEventListener('click', showTables5);
document.getElementById('Park_Road').addEventListener('click', showTables5);
document.getElementById('Metro_Road').addEventListener('click', showTables5);
document.getElementById('Hospital_Road').addEventListener('click', showTables5);
document.getElementById('Landmark_Road').addEventListener('click', showTables5);
document.getElementById('Education_Road').addEventListener('click', showTables5);
document.getElementById('Drain_Road').addEventListener('click', showTables5);
document.getElementById('Ward12').addEventListener('click', showTables5);
document.getElementById('Ward59').addEventListener('click', showTables5);
document.getElementById('Ward37').addEventListener('click', showTables5);
document.getElementById('Ward14').addEventListener('click', showTables5);
document.getElementById('Ward50').addEventListener('click', showTables5);
document.getElementById('Ward66').addEventListener('click', showTables5);
document.getElementById('Ward62').addEventListener('click', showTables5);
document.getElementById('Ward76').addEventListener('click', showTables5);
document.getElementById('Ward70').addEventListener('click', showTables5);
document.getElementById('Ward100').addEventListener('click', showTables5);
document.getElementById('Ward17').addEventListener('click', showTables5);
document.getElementById('Ward28').addEventListener('click', showTables5);
document.getElementById('Ward34').addEventListener('click', showTables5);
document.getElementById('Ward33').addEventListener('click', showTables5);
document.getElementById('Ward55').addEventListener('click', showTables5);
document.getElementById('Ward57').addEventListener('click', showTables5);
document.getElementById('Ward69').addEventListener('click', showTables5);
document.getElementById('Ward87').addEventListener('click', showTables5);
document.getElementById('Ward95').addEventListener('click', showTables5);
document.getElementById('Ward88').addEventListener('click', showTables5);
document.getElementById('Ward98').addEventListener('click', showTables5);
document.getElementById('Ward103').addEventListener('click', showTables5);

function showTables5() {
    document.getElementById('dataTable').style.display = 'block';
    document.getElementById('tableContainer').style.display = 'block';
       document.getElementById('Road_Age_legend').style.display = 'none';
    //   document.getElementById('Priority_legend').style.display = 'none';
    //   document.getElementById('type_legend').style.display = 'none';
    //   document.getElementById('type_legend_major').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('dataTable_Drain').style.display = 'none';
    document.getElementById('Scoreing_dataTable').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('tableContainer_Road_Age').style.display = 'none';
    document.getElementById('dataTable_Road_Age').style.display = 'none';

    document.getElementById('live_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('type_legend_major').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Under_Scheme_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('type_legend_major').style.display = 'none';

    var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'none';
   

}
document.getElementById('table_icon').addEventListener('click', showTables2);

function showTables2() {
    //   document.getElementById('table_data').style.display = 'block';
    document.getElementById('summary-table').style.display = 'block';
    document.getElementById('dataTable').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('Scoreing_dataTable').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('dataTable_Drain').style.display = 'none';
    document.getElementById('tableContainer_Road_Age').style.display = 'none';
    document.getElementById('dataTable_Road_Age').style.display = 'none';

    document.getElementById('live_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('type_legend_major').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Under_Scheme_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('type_legend_major').style.display = 'none';
     legendBtn = document.getElementById('legendBtn').style.display = 'none';
    
}


document.getElementById('Less_than3_Zone4').addEventListener('click', showTables_score);
document.getElementById('Greater_than3_Zone4').addEventListener('click', showTables_score);
document.getElementById('Less_than3_Zone1').addEventListener('click', showTables_score);
document.getElementById('Greater_than3_Zone1').addEventListener('click', showTables_score);
function showTables_score() {
    // document.getElementById('table_data').style.display = 'block';
    document.getElementById('dataTable').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('Scoreing_dataTable').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('dataTable_Drain').style.display = 'none';
    document.getElementById('tableContainer_Road_Age').style.display = 'block';
    document.getElementById('dataTable_Road_Age').style.display = 'block';
    document.getElementById('live_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none'; 
    document.getElementById('Road_Age_legend').style.display = 'block';
    document.getElementById('type_legend_major').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Under_Scheme_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('type_legend_major').style.display = 'none';

    var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'block';
    legendBtn.style.bottom = '30%';
    legendBtn.style.left = '1%'; // Example of additional style
    legendBtn.style.Color = 'color'; // Example of additional style

}

document.getElementById('P1').addEventListener('click', showTables3);
document.getElementById('P2').addEventListener('click', showTables3);
document.getElementById('Not_Eligible').addEventListener('click', showTables3);
function showTables3() {

    document.getElementById('Scoreing_dataTable').style.display = 'block';
    document.getElementById('dataTable').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('tableContainer_Road_Age').style.display = 'none';
    document.getElementById('dataTable_Road_Age').style.display = 'none';
    //  document.getElementById('table_summary').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'block';
    document.getElementById('live_legend').style.display = 'none';
     document.getElementById('Priority_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
     document.getElementById('summary-table').style.display = 'none';
    document.getElementById('Road_Age_legend').style.display = 'none';
     document.getElementById('type_legend_major').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
     document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
     document.getElementById('Under_Scheme_legend').style.display = 'none';
    var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'none';
    legendBtn.style.bottom = '30%';
    legendBtn.style.left = '1%'; // Example of additional style
    legendBtn.style.Color = 'color'; // Example of additional style

}
$(document)
    .ready(
        function () {
            $("#search-bar").hide();
            $("#live_legend").hide();
            $("#legendBtn").click(
                function () {
                    $("#live_legend").toggle();

                }
            );
            $("#search-icon").click(
                function () {
                    $("#search-bar").toggle();

                }
            );

        });


//---------------------- header section start --------------------------//

var map, geojson, featureOverlay, overlays, style;
var selected, features, layer_name, layerControl;
var content;
var selectedFeature;
// const london = fromLonLat([-0.12755, 51.507222]);

var view = new ol.View({
    projection: "EPSG:4326",
    center: [81.00046, 26.8269],
    zoom: 11,
});

var view_ov = new ol.View({
    projection: "EPSG:4326",
    center: [28.55, 77.65],
    zoom: 9,
});

var base_maps = new ol.layer.Group({
    title: "Base maps",
    layers: [
        new ol.layer.Tile({
            title: "OSM",
            type: "base",
            visible: true,
            source: new ol.source.OSM(),
        }),
        new ol.layer.Tile({
            title: "CartoDB Positron",
            type: "base",
            visible: false,
            source: new ol.source.XYZ({
                url: "https://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                attributions:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            }),
        }),
        new ol.layer.Tile({
            source: new ol.source.TileJSON({
                attributions: "@MapTiler",
                url: "https://api.maptiler.com/maps/toner-v2/tiles.json?key=iVy8qXSX5hN7aJhQp2Na",
            }),
            title: "Toner",
            type: "base",
            visible: false,
        }),

        new ol.layer.Tile({
            source: new ol.source.TileJSON({
                attributions: "@MapTiler",
                url: "https://api.maptiler.com/maps/topo-v2/tiles.json?key=iVy8qXSX5hN7aJhQp2Na",
            }),
            title: "Topo",
            type: "base",
            visible: false,
            maxZoom: 23,
        }),

        new ol.layer.Tile({
            source: new ol.source.TileJSON({
                attributions: "@MapTiler",
                url: "https://api.maptiler.com/maps/backdrop/tiles.json?key=iVy8qXSX5hN7aJhQp2Na",
            }),
            title: "Backdrop",
            type: "base",
            visible: false,
        }),

        new ol.layer.Tile({
            source: new ol.source.TileJSON({
                attributions: "@MapTiler",
                url: "https://api.maptiler.com/maps/outdoor-v2/tiles.json?key=iVy8qXSX5hN7aJhQp2Na",
            }),
            title: "Outdoor",
            type: "base",
            visible: false,
        }),
        new ol.layer.Tile({
            title: "Satellite",
            type: "base",
            visible: false,
            source: new ol.source.XYZ({
                //  attributions: ['Powered by Esri',
                //      'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
                //  ],
                attributionsCollapsible: false,
                url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                maxZoom: 23,
            }),
        }),
    ],
});

var OSM = new ol.layer.Tile({
    source: new ol.source.OSM(),
    type: "base",
    title: "OSM",
});

var overlays = new ol.layer.Group({
    title: "Overlays",
    layers: [],
});

map = new ol.Map({
    target: "map",
    view: view,
    // overlays: [overlay]
});

map.addLayer(base_maps);
map.addLayer(overlays);

layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: "click",
    startActive: false,
    tipLabel: "Layers", // Optional label for button
    groupSelectStyle: "children", // Can be 'children' [default], 'group' or 'none'
    collapseTipLabel: "Collapse layers",
});
map.addControl(layerSwitcher);

layerSwitcher.renderPanel();

// var overview = new ol.control.OverviewMap({
//   view: view_ov,
//   collapseLabel: "o",
//   label: "o",
//   layers: [OSM],
// });
// map.addControl(overview);

var zone_boundary = new ol.layer.Image({
    title: "Lucknow Zone Boundary",
    //  extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: "http://localhost:8080/geoserver/LNN/wms?",
        params: {
            LAYERS: "LNN:LNN Zone Boundary",
        },
        ratio: 1,
        serverType: "geoserver",
    }),
});
//overlays.getLayers().push(LNN_Boundary);
map.addLayer(zone_boundary);

var ward_boundary = new ol.layer.Image({
    title: "Lucknow Ward Boundary",
    //  extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: "http://localhost:8080/geoserver/LNN/wms?",
        params: {
            LAYERS: "LNN:LNN Ward Boundary",
        },
        ratio: 1,
        serverType: "geoserver",
    }),
});
//overlays.getLayers().push(LNN_Boundary);
map.addLayer(ward_boundary);


var ward_boundary = new ol.layer.Image({
    title: "Toggle Ward No.",
    //  extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: "http://localhost:8080/geoserver/LNN/wms?",
        params: {
            LAYERS: "LNN:LNN_Ward_no",
        },
        ratio: 1,
        serverType: "geoserver",
    }),
});
//overlays.getLayers().push(LNN_Boundary);
map.addLayer(ward_boundary);


/*----------------------------------------- javascript for navbar in table---------------------------------------- */
function updateNavBarWithFunctionName(functionName) {
    console.log("Updating navbar with function name:", functionName);
    document.getElementById('featureName').textContent = functionName;
//document.getElementById('featureName').textContent = totalRoadCountzone4;
}
function minimize1() {
    const topnav = document.getElementById('tableContainer_summary');
  //  const contentWrapper = document.getElementById('content-wrapper');
    topnav.style.height = '7%'; // Reduced height when minimized
  // topnav.style.width = '17%'; // Reduced width when minimized
}
function maximize1() {
    const topnav = document.getElementById('tableContainer_summary');
  //  const contentWrapper = document.getElementById('content-wrapper');
    topnav.style.height = '27%'; // Reduced height when minimized
  //  topnav.style.width = '100%'; // Reduced width when minimized
}
//-----------------table Cancel btn----------------------------//
document.querySelectorAll('.table-cancel-btn').forEach(function (element) {
    element.addEventListener('click', function () {
        document.getElementById('tableContainer').style.display = 'none';
        document.getElementById('Scoreing_tableContainer').style.display = 'none';
        document.getElementById('tableContainer_Drain').style.display = 'none';
        document.getElementById('tableContainer_Road_Age').style.display = 'none';

        const legendBtn = document.getElementById('legendBtn');
        legendBtn.style.bottom = '3%';
        const Materiallegend = document.getElementById('Material_legend');
        Materiallegend.style.top = '70%';
        const Conditionlegend = document.getElementById('Condition_legend');
        Conditionlegend.style.top = '70%';
        const Typelegend = document.getElementById('type_legend');
        Typelegend.style.top = '70%';
        const typemajorlegend = document.getElementById('type_legend_major');
        typemajorlegend.style.top = '70%';
        const Ownerlegend = document.getElementById('Ownership_legend');
        Ownerlegend.style.top = '70%';
        const CUSlegend = document.getElementById('Under_Scheme_legend');
        CUSlegend.style.top = '70%';
        const Prioritylegend = document.getElementById('Priority_legend');
        Prioritylegend.style.top = '70%';
        const RoadAgelegend = document.getElementById('Road_Age_legend');
        RoadAgelegend.style.top = '70%';
    });
});

//-------------------------end code of Cancel btn-----------------------//

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const cancelIcon = document.querySelector(".cancel-icon");

hamburger.addEventListener("click", () => {
    sidebar.classList.add("show");
    document.getElementById('query_tab').style.display = 'none';
    document.getElementById('road-filter').style.display = 'none';
    document.getElementById('drain-filter').style.display = 'none';
});

cancelIcon.addEventListener("click", () => {
    sidebar.classList.remove("show");
});

document.querySelectorAll('.tab-cancel-icon').forEach(function (element) {
    element.addEventListener('click', function () {
        document.getElementById('query_tab').style.display = 'none';
        document.getElementById('measure-tab').style.display = 'none';
        document.getElementById('street-tab').style.display = 'none';
    });
});

//---------------------------- query panel ---------------------//
function query_panel1() {
    var x = document.getElementById("query_tab");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//--------------- measure option start -------------------------//
function measure_tab() {
    var x = document.getElementById("measure-tab");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/* function startLineString() {
console.log("Line String selected");
// Add your functionality for Line String here
} 

function startPolygon() {
console.log("Polygon selected");
// Add your functionality for Polygon here
}*/

function clearMeasurement() {
    console.log("Clear Measurement selected");
    // Add your functionality to clear measurements here
}

//-------------------measure options end ---------------------//


//-------------- zone wise road filter start-----------------//
function road_filter() {
    const roadFilter = document.getElementById('road-filter');
    roadFilter.style.display = roadFilter.style.display === 'block' ? 'none' : 'block';
}
//-------------- drain filter --------------------------//
function drain_filter() {
    const drainFilter = document.getElementById('drain-filter');
    drainFilter.style.display = drainFilter.style.display === 'block' ? 'none' : 'block';
}

//------------------ charts and data ---------------------//
function data_analysis() {
    window.open('https://lookerstudio.google.com/reporting/805db749-83e9-4abe-8901-c49dd431864e', '_blank'); // Open Google in a new tab
}


//------------------------ Road , Drain filter & Street View Function toggle ------------------------//

let currentFilter = null; // Variable to track the currently visible filter

// Function to toggle road filter visibility
function road_filter() {
    toggleFilter('road-filter');
}

// Function to toggle drain filter visibility
function drain_filter() {
    toggleFilter('drain-filter');
}

// Function to handle the visibility of filters and street view
function toggleFilter(filterId) {
    const filters = ['road-filter', 'drain-filter']; // List of filter IDs
    const streetTab = document.getElementById('street-tab'); // Street view section

    filters.forEach(id => {
        const filter = document.getElementById(id);
        if (id === filterId) {
            // Toggle the clicked filter's visibility
            if (filter.style.display === 'block') {
                filter.style.display = 'none';
                currentFilter = null;
            } else {
                filter.style.display = 'block';
                currentFilter = id;
            }
        } else {
            // Hide other filters
            filter.style.display = 'none';
        }
    });
}



//-------------------------------street viewpoints -----------------------------------------//
//var container = document.getElementById('popup');

function street_view() {
    // Remove any existing layer
    removeCurrentLayer();

    // Create the new WMS layer
    currentLayer = new ol.layer.Image({
        title: 'LNN View points',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms?',
            params: {
                'LAYERS': '	LNN_Summary:lnnviewpoints',
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the new layer to the map
    map.addLayer(currentLayer);

    // Define the popup container
    var container = document.getElementById('popup');

    // Set up click event handler
    map.on('singleclick', function (evt) {
        var viewResolution = map.getView().getResolution();
        var url = currentLayer.getSource().getFeatureInfoUrl(
            evt.coordinate, viewResolution, 'EPSG:4326', {
            'INFO_FORMAT': 'text/html'
        });

        console.log('Feature Info URL:', url); // Log the URL for debugging

        if (url) {
            $.get(url)
                .done(function (data) {
                    console.log('Feature Info Response:', data); // Log the response for debugging

                    var contentHtml = '<h6>Street View and Road Images</h6>';
                    var parsedData = $(data);

                    // Initialize variables to store URLs
                    var streetViewUrl = '';
                    var imageUrl = '';

                    // Find the correct <td> elements containing the URLs
                    parsedData.find('td').each(function () {
                        var text = $(this).text().trim();
                        if (text.startsWith('http://maps.google.com') || text.startsWith('https://maps.google.com') || text.startsWith('https://www.google.com')) {
                            streetViewUrl = text;
                        }
                        if (text.startsWith('https://drive.google.com')) {
                            imageUrl = text;
                        }
                    });

                    console.log("street_view_url:", streetViewUrl);
                    console.log("image_url:", imageUrl);

                    // Build popup content with icons
                    if (streetViewUrl || imageUrl) {
                        contentHtml += '<div class="icons-container">';

                        if (streetViewUrl) {
                            contentHtml += '<button class="icon-button" onclick="window.open(\'' + streetViewUrl + '\', \'_blank\')">' +
                                '<img src="image_path/google-maps.png" alt="Street View" class="icon-img"></button>';
                        }
                        if (imageUrl) {
                            contentHtml += '<button class="icon-button" onclick="window.open(\'' + imageUrl + '\', \'_blank\')">' +
                                '<img src="image_path/image-files.png" alt="Image" class="icon-img"></button>';
                        }

                        contentHtml += '</div>';
                    } else {
                        contentHtml += '<p>No information available for this point.</p>';
                    }

                    // Display the popup at the clicked coordinate
                    popup.setPosition(evt.coordinate);
                    popup.getElement().innerHTML = contentHtml; // Set popup content
                    container.style.display = 'block'; // Ensure the popup is visible
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.error('Error fetching feature info:', textStatus, errorThrown);
                    popup.setPosition(evt.coordinate);
                    popup.getElement().innerHTML = '<p>Failed to fetch feature info.</p>'; // Display error message
                    container.style.display = 'block'; // Ensure the popup is visible
                });
        } else {
            console.error('No URL returned for WMS GetFeatureInfo request.');
        }
    });
}


// ------------------------------for clear any layers------------------------------------------
document.getElementById('clear-icon').onclick = clearAllVectorLayers;

function clearAllVectorLayers() {
    // Iterate through all layers on the map
    map.getLayers().getArray().forEach(layer => {
        if (layer instanceof ol.layer.Vector) {
            layer.getSource().clear(); // Clear all features from this vector layer
        }
    });

    zoomToIndia();  

    document.getElementById('query_tab').style.display = 'none';
    document.getElementById('road-filter').style.display = 'none';
    document.getElementById('drain-filter').style.display = 'none';
    document.getElementById("tableContainer").style.display = "none";
    document.getElementById("tableContainer_Road_Age").style.display = "none";
    document.getElementById("Scoreing_tableContainer").style.display = "none";
    document.getElementById("tableContainer_Drain").style.display = "none";
    document.getElementById("tableContainer_summary").style.display = "none";
    const legendBtn = document.getElementById('legendBtn');
    legendBtn.style.bottom = '3%';

    map.getLayers().getArray().slice().forEach(layer => {
        if ((layer instanceof ol.layer.Tile || layer instanceof ol.layer.Image) &&
            (layer.getSource() instanceof ol.source.TileWMS || layer.getSource() instanceof ol.source.ImageWMS)) {

            // Check if the layer is not the zone_boundary layer
            if (layer.get('title') !== 'Lucknow Zone Boundary' && layer.get('title') !== 'Lucknow Ward Boundary') {
                map.removeLayer(layer);  // Remove GeoServer WMS layers
            }
        }
    });
}

function zoomToIndia() {
    const view = map.getView();

    // Define the approximate bounding box for India
    const extent = ol.proj.transformExtent(
        [80.80571758368082, 26.694260564415533 , 81.07309745111439, 26.960066642711546], // Bounding box [minX, minY, maxX, maxY] for India
        'EPSG:4326', // Projection for the coordinates
        view.getProjection() // Current map projection (usually EPSG:3857)
    );

    // Set the map's center and zoom level explicitly
    view.setCenter([ 81.00046, 26.8269]); // Set the center to the geographic center of India
    view.setZoom(11.5); // Zoom level appropriate for India view (adjust as needed)
    // Ensure the map is aligned to North with no rotation
    view.setRotation(0);

}

// -------------------------Search bar Code---------------------------//
$(document).ready(function () {
    // Initialize Select2 on the dropdown
    $('#roadNamesDropdown').select2({
        placeholder: ".. Search by road name",
        allowClear: true
    });

    // Define your WFS parameters
    var wfsParams = {
        service: 'WFS',
        version: '1.1.0',
        outputFormat: 'application/json',
        srsName: 'EPSG:4326', // Coordinate system of your data
        typeName: 'LNN_Summary:lnn_roads10', // Replace with your WFS layer typename
        url: 'http://localhost:8080/geoserver/wfs' // Replace with your WFS server URL
    };

    // Create a vector source and layer
    var vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON()
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'cyan', // Custom line color
                width: 5 // Custom line width in pixels
            })
        })
    });
    map.addLayer(vectorLayer);

    // Define the URL for the WFS request
    const url = 'http://localhost:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=LNN_Summary:lnn_roads10&outputFormat=application/json';

    // Create the XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Parse the JSON response
                let response = JSON.parse(xhr.responseText);

                // Extract road_name properties from the features, filter out nulls
                let roadNames = response.features
                    .map(feature => feature.properties.road_name)
                    .filter(roadName => roadName !== null && roadName !== '');

                populateDropdown(roadNames);
                // Log the road names
                console.log('Road Names:', roadNames);
            } else {
                console.error('Error:', xhr.responseText);
            }
        }
    };

    // Send the request
    xhr.send();

    function populateDropdown(roadNames) {
        let dropdown = $('#roadNamesDropdown');

        // Clear existing options
        dropdown.empty();

        // Create a default option
        let defaultOption = new Option('Search by Road Name', '', true, true);
        dropdown.append(defaultOption);

        // Populate dropdown with road names
        roadNames.forEach(roadName => {
            let option = new Option(roadName, roadName, false, false);
            dropdown.append(option);
        });

        // Refresh Select2
        dropdown.trigger('change');
    }

    // Add an event listener to the dropdown
    $('#roadNamesDropdown').on('change', function () {
        let selectedRoadName = $(this).val();
        if (selectedRoadName) {
            fetchRoadData(selectedRoadName);
        }
    });

    function fetchRoadData(roadName) {
        let fetchUrl = wfsParams.url + '?service=' + wfsParams.service +
            '&version=' + wfsParams.version +
            '&request=GetFeature&typename=' + wfsParams.typeName +
            '&outputFormat=' + wfsParams.outputFormat +
            '&srsname=' + wfsParams.srsName +
            '&CQL_FILTER=road_name=\'' + roadName + '\'';

        console.log(fetchUrl);

        let fetchXhr = new XMLHttpRequest();
        fetchXhr.open('GET', fetchUrl, true);

        fetchXhr.onreadystatechange = function () {
            if (fetchXhr.readyState === 4) {
                if (fetchXhr.status === 200) {
                    let response = JSON.parse(fetchXhr.responseText);
                    vectorSource.clear();
                    let features = new ol.format.GeoJSON().readFeatures(response);
                    vectorSource.addFeatures(features);
                    map.getView().fit(vectorSource.getExtent());
                } else {
                    console.log('Error:', fetchXhr.responseText);
                }
            }
        };

        fetchXhr.send();
    }

    // Popup overlay
    var container = document.getElementById('popup-search');
    var content = document.getElementById('popup-content-search');
    var closer = document.getElementById('popup-closer');

    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });
    map.addOverlay(overlay);

    closer.onclick = function () {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };

    // Add a click event listener to the map
    map.on('click', function (evt) {
        var coordinate = evt.coordinate;
        var featureFound = false;

        map.forEachFeatureAtPixel(evt.pixel, function (feature) {
            var geometryType = feature.getGeometry().getType();

            // Debugging: Log the geometry type
            console.log('Clicked geometry type:', geometryType);

            if (geometryType === 'MultiLineString') {
                var properties = feature.getProperties();
                console.log('Point Feature:', properties);
                var contentHtml = '<h6>Road Data</h6>';
                for (var key in properties) {
                    if (properties.hasOwnProperty(key) && key !== 'geometry') { // Exclude geometry property
                        contentHtml += '<p><strong>' + key + ':</strong> ' + properties[key] + '</p>';
                    }
                }
                content.innerHTML = contentHtml;
                overlay.setPosition(coordinate);
                featureFound = true;
                return true; // Stop iteration after the first feature
            }

            if (geometryType === 'MultiLineString') {
                var properties = feature.getProperties();
                console.log('LineString Feature:', properties);
                var contentHtml = '<h6>Road Data</h6>';
                for (var key in properties) {
                    if (properties.hasOwnProperty(key) && key !== 'geometry' && key !== 'row_left' && key !== 'row_right') { // Exclude geometry property
                        contentHtml += '<p><strong>' + key + ':</strong> ' + properties[key] + '</p>';
                    }
                }
                content.innerHTML = contentHtml;
                overlay.setPosition(coordinate);
                featureFound = true;
                return true; // Stop iteration after the first feature
            }
        });

        // If no feature was found, hide the overlay
        if (!featureFound) {
            overlay.setPosition(undefined);
        }
    });
});
const dataTableBody = document.getElementById('dataBody');
const dataTableBody_summary = document.getElementById('dataBody_summary');
const dataTableBody_Drain = document.getElementById('dataBody_Drain');
const dataTableBody_Road_Age = document.getElementById('dataBody_Road_Age');

const dataTableBody_Scoring = document.getElementById('dataBody_Scoring');



//--------------------------- sidebar amenities data fetching road analysis ---------------------------------
//Function to add MULTILINESTRING feature to the map from WKT format
function addMultilinestringFeatureFromWKT(wktString) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#EB5406',
                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);
}

function addMultilinestringFeatureFromWKT_park(wktString) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'yellowgreen',

                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);
}

function addMultilinestringFeatureFromWKT_EduRoad(wktString) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#5c62d6',
                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);
}
function addMultilinestringFeatureFromWKT_HospitalRoad(wkt) {
    try {
        const format = new ol.format.WKT();

        // Check if the WKT is valid
        if (!wkt) {
            console.warn('Invalid WKT:', wkt);
            return null;
        }

        // Read the feature from the WKT
        const feature = format.readFeature(wkt, {
            dataProjection: 'EPSG:4326', // Input projection (WKT usually in EPSG:4326)
            featureProjection: map.getView().getProjection() // Convert to map projection
        });

        // Check if the feature and its geometry are valid
        if (!feature || !feature.getGeometry()) {
            console.error('Failed to read geometry from WKT:', wkt);
            return null;
        }

        // Set up a style with color and line width
        const style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'yellowgreen', // Red color
                width: 5 // Line width
            })
        });

        // Apply the style to the feature
        feature.setStyle(style);

        // Ensure the feature has a valid ID (optional, can be from your data)
        const featureId = feature.getId();
        if (!featureId) {
            console.warn('Feature ID is missing or invalid:', feature);
        }

        // Add the feature to a vector source and vector layer
        const vectorSource = new ol.source.Vector();
        vectorSource.addFeature(feature);

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        // Add the vector layer to the map
        map.addLayer(vectorLayer);

        console.log('Created feature with style:', feature);
        return feature;
    } catch (error) {
        console.error('Error parsing WKT or creating feature:', error);
        return null;
    }
}
function addMultilinestringFeatureFromWKT_ParkRoad(wkt) {
    try {
        const format = new ol.format.WKT();

        // Check if the WKT is valid
        if (!wkt) {
            console.warn('Invalid WKT:', wkt);
            return null;
        }

        // Read the feature from the WKT
        const feature = format.readFeature(wkt, {
            dataProjection: 'EPSG:4326', // Input projection (WKT usually in EPSG:4326)
            featureProjection: map.getView().getProjection() // Convert to map projection
        });

        // Check if the feature and its geometry are valid
        if (!feature || !feature.getGeometry()) {
            console.error('Failed to read geometry from WKT:', wkt);
            return null;
        }

        // Set up a style with color and line width
        const style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'darkblue', // Red color
                width: 3 // Line width
            })
        });

        // Apply the style to the feature
        feature.setStyle(style);

        // Ensure the feature has a valid ID (optional, can be from your data)
        const featureId = feature.getId();
        if (!featureId) {
            console.warn('Feature ID is missing or invalid:', feature);
        }

        // Add the feature to a vector source and vector layer
        const vectorSource = new ol.source.Vector();
        vectorSource.addFeature(feature);

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        // Add the vector layer to the map
        map.addLayer(vectorLayer);

        console.log('Created feature with style:', feature);
        return feature;
    } catch (error) {
        console.error('Error parsing WKT or creating feature:', error);
        return null;
    }
}

//-------------------- Function to add MULTILINESTRING feature to the map from WKT format
function addMultilinestringFeatureFromWKT_Drain(wktString) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#ff0000',
                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);
}

function addMultilinestringFeatureFromWKT_Ward(wktString) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 3
            })
        })
    });


    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}
function addMultilinestringFeatureFromWKT_cus(wktString, cus) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });


    let color;
    switch (cus) {
        case '13th Finance':
            color = '#5b46d2'; break;
        case '14th Finance':
            color = '#ba6209'; break;
        case '15th Finance':
            color = '#8a1515';
            break;
        case 'Nagar Nigam Nidhi':
            color = '#c3ec47';
            break;
        default:
            color = '#ce37d3';
    }
    const vectorSource = new ol.source.Vector({
        features: [feature]
    });
    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });


    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}
function addMultilinestringFeatureFromWKT_type(wktString, type) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on type
    let color;
    switch (type) {
        case 'Arterial':
            color = 'blue';
            break;
        case 'Urban Express Way':
            color = 'purple';
            break;
        case 'Major':
            color = 'blue';
            break;
        case 'Minor':
            color = 'yellow';
            break;
        case 'Local Street':
            color = 'yellow';
            break;
        case 'Sub Arterial':
            color = 'cyan';
            break;
        case 'Collectors':
            color = 'lightgreen';
            break;
        default:
            color = 'magenta'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });
    
    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}

function addMultilinestringFeatureFromWKT_Zone(wktString, zone_no) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on type
    let color;
    switch (zone_no) {
        case '1':
            color = 'blue';
            break;
        case '2':
            color = 'yellow';
            break;
        case '3':
            color = 'cyan';
            break;
        default:
            color = 'magenta'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });

   
    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}
function addMultilinestringFeatureFromWKT_condition(wktString, condition) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on Condition
    let color;
    switch (condition) {
        case 'Green':
            color = 'green';
            break;
        case 'Yellow':
            color = 'yellow';
            break;
        case 'Red':
            color = 'red';
            break;
        default:
            color = 'blue'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });

    
    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}

function addMultilinestringFeatureFromWKT_Year(wktString, year) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on Condition
    let color;
    switch (year) {
        case 'Less Than 3':
            color = '#bd480e';
            break;
        case 'More Than 3':
            color = '#FFC300';
            break;
        // case 'Red':
        //     color = 'red';
        //     break;
        default:
            color = 'blue'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });


    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}





function addMultilinestringFeatureFromWKT_bear(wktString) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Set a dark color and thick width
    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'Yellow', // Dark color (almost black)
                width: 10 // Thick stroke width
            })
        })
    });


    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
    
}



function addMultilinestringFeatureFromWKT_material(wktString, carriage_m) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on Material
    let color;
    switch (carriage_m) {
        case 'Bitumen':
            color = 'darkred';
            break;
        case 'CC':
            color = '#1ad7b0';
            break;
        case 'Interlocking':
            color = '#2392ed';
            break;
        case 'Kachcha':
            color = '#6036d0';
            break;
        case 'BOE':
            color = '#da6076';
            break;

        default:
            color = '#2336d0'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}


function addMultilinestringFeatureFromWKT_ownership(wktString, ownership) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on Material
    let color;
    switch (ownership) {
        case 'NHAI':
            color = 'BLUE';
            break;
        case 'LNN':
            color = 'CYAN';
            break;
        case 'PWD':
            color = 'OLIVE';
            break;
        case 'PRIVAT ROAD':
            color = 'RED';
            break;
        // case 'Railwa':
        //     color = 'yellow';
        //     break;
        case 'LDA':
            color = 'orange';
            break;
        default:
            color = '#831042'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}
function addMultilinestringFeatureFromWKT_priority(wktString, priority) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on priority
    let color;
    switch (priority) {
        case 'Priority 1':
            color = 'magenta';
            break;
        case 'Priority 2':
            color = 'yellow';
            break;
        case 'Not Eligible':
            color = 'darkblue';
            break;
        default:
            color = 'black'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });


    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}


//---------------All Drains-------------------------//

ShowDrainage.addEventListener('click', function () {

    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Drain_LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td>${item.gid}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>                       
            <td>${item.type}</td>
            <td>${item.status}</td>
            <td>${item.material}</td>
            <td>${item.length}</td>
            <td>${item.condition}</td>
            <td>${item.const_year}</td>
            <td>${item.width}</td>
            <td>${item.depth}</td>
           


            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody_Drain.appendChild(row);

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_Drain(item.geom_wkt);
                        
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (live_legend_legend.style.display === 'none') {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
        }
    });

    

});

//-------------------------------------All Priority P1-----------------------------//

// Function to add a multiline string feature with priority styling
function addMultilinestringFeatureFromWKT_priorityL(wktString, priority) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on priority  
    let color;
    switch (priority) {
        case 'Priority 1':
            color = 'magenta';
            break;
        case 'Priority 2':
            color = 'yellow';
            break;
        case 'Not Eligible':
            color = 'darkblue';
            break;
        default:
            color = 'black'; // Default color
    }

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: color,
                width: 3
            })
        })
    });

    // Assign a unique ID to the feature using its GIS ID
    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);

    return feature;
}


// Define the style for the highlighted road feature
const highlightedStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'blue',  // Highlight color
        width: 7        // Stroke width for visibility
    })
});

// Store the previously highlighted feature and layer for resetting the highlight
let previouslyHighlightedFeature = null;
let previouslyHighlightedLayer = null;

// function zoomToRoadFeature(wkt) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wkt, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: map.getView().getProjection()
//     });

//     // Get the feature's extent and fit the map view to it
//     const extent = feature.getGeometry().getExtent();
//     map.getView().fit(extent, {
//         duration: 1000, // Animation duration
//         maxZoom: 18     // Maximum zoom level
//     });

//     // Remove the highlight from the previous feature if it exists
//     if (previouslyHighlightedFeature && previouslyHighlightedLayer) {
//         previouslyHighlightedFeature.setStyle(null);  // Reset style
//         previouslyHighlightedLayer.getSource().removeFeature(previouslyHighlightedFeature); // Remove old feature from layer
//         map.removeLayer(previouslyHighlightedLayer);  // Remove the previous layer from the map
//     }

//     // Apply the highlighted style to the new feature
//     feature.setStyle(highlightedStyle);

//     // Create a new vector source and layer to add the feature
//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource
//     });

//     // Add the vector layer to the map
//     map.addLayer(vectorLayer);

//     // Store the current feature and layer for future reference
//     previouslyHighlightedFeature = feature;
//     previouslyHighlightedLayer = vectorLayer;
// }

// Function to zoom and highlight the road feature
function zoomToRoadFeature(wkt) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wkt, {
        dataProjection: 'EPSG:4326',
        featureProjection: map.getView().getProjection()
    });

    // Get the feature's extent and fit the map view to it
    const extent = feature.getGeometry().getExtent();
    map.getView().fit(extent, {
        duration: 1000, // Animation duration
        maxZoom: 18     // Maximum zoom level
    });

    // Remove the highlight from the previous feature if it exists
    if (previouslyHighlightedFeature && previouslyHighlightedLayer) {
        previouslyHighlightedFeature.setStyle(null);  // Reset style
        previouslyHighlightedLayer.getSource().removeFeature(previouslyHighlightedFeature); // Remove old feature from layer
        map.removeLayer(previouslyHighlightedLayer);  // Remove the previous layer from the map
    }

    // Apply the highlighted style to the new feature
    feature.setStyle(highlightedStyle);

    // Create a new vector source and layer to add the feature
    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    // Add the vector layer to the map
    map.addLayer(vectorLayer);

    // Store the current feature and layer for future reference
    previouslyHighlightedFeature = feature;
    previouslyHighlightedLayer = vectorLayer;
}

// Function to highlight and scroll to the clicked table row
function highlightAndScrollToRow(row) {
    console.log("Highlighting and scrolling to row: ", row);

    // Remove highlight class from all rows
    Array.from(dataTableBody_Scoring.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });

     // Remove highlight class from all rows
     Array.from(dataTableBody_Road_Age.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });

     // Remove highlight class from all rows
     Array.from(dataTableBody.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });

     // Remove highlight class from all rows
     Array.from(dataTableBody_summary.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    })

    

    // Add highlight class to the clicked row
    row.classList.add('highlighted');

    // Scroll the row into view with smooth scrolling behavior
    row.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling
        block: 'center',     // Center the row in the view
        inline: 'nearest'    // Nearest inline
    });

    console.log("Row scrolled into view.");
}

// Add CSS to highlight the row
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    tr.highlighted {
        background-color: yellow !important;
        color: black !important;
        z-index: 2001;
    }
`;
document.head.appendChild(styleElement);

// Create a map to associate features with table rows
const featureToRowMap = new Map();

// Add interaction for clicking on road features
const selectInteraction = new ol.interaction.Select({
    condition: ol.events.condition.click,
    layers: layer => layer instanceof ol.layer.Vector,
    // style: null
    
});

map.addInteraction(selectInteraction);

// Highlight table row on road feature click and scroll to it
// selectInteraction.on('select', function (e) {
//     if (e.selected.length > 0) {
//         const selectedFeature = e.selected[0];
//         console.log("Selected feature: ", selectedFeature);

//         const featureId = selectedFeature.getId();
//         console.log("Feature ID: ", featureId);

//         const associatedRow = featureToRowMap.get(featureId);
//         console.log("Associated row: ", associatedRow);

//         if (associatedRow) {
//             highlightAndScrollToRow(associatedRow);

//         } else {
//             console.warn("No associated row found for the selected feature.");
//         }
//     } else {
//         console.log("No feature selected.");
//     }
// });

selectInteraction.on('select', function (e) {
    if (e.selected.length > 0) {
        const selectedFeature = e.selected[0];
        const featureId = selectedFeature.getId();  // Ensure feature has a valid ID
        console.log("Selected feature ID:", featureId);

        const associatedRow = featureToRowMap.get(featureId);
        console.log("Associated row:", associatedRow);

        if (associatedRow) {
            highlightAndScrollToRow(associatedRow); // Highlight the row
        } else {
            console.warn("No associated row found for the selected feature.");
        }
    } else {
        console.log("No feature selected.");
    }
});


// P1 Event Listener for fetching and displaying Priority 1 data
P1.addEventListener('click', function () {
    // Clear vector layers that aren't preserved
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });

    // Clear overlays
    map.getOverlays().clear();

    // Fetch priority data
    fetch(`${BASE_URL}/getPriorityLko?priority=Priority 1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Received data:', responseData);

        dataTableBody_Scoring.innerHTML = '';  // Clear table
        featureToRowMap.clear();  // Clear feature-row mapping

        if (Array.isArray(responseData.data)) {
            responseData.data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.gis_id}</td>
                    <td>${item.zone_no}</td>
                    <td>${item.ward_no}</td>                         
                    <td>${item.road_name}</td>
                    <td>${item.row_meter}</td>
                    <td>${item.length_km}</td>
                    <td>${item.condition}</td>
                    <td>${item.total_scor}</td>
                    <td>${item.priority}</td>
                `;

                dataTableBody_Scoring.appendChild(row);

                // Add click event to zoom to the road when the row is clicked
                row.addEventListener('click', function () {
                    if (item.geom_wkt) {
                        zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                        highlightAndScrollToRow(row);      // Highlight the clicked row
                    }
                });

                // Add feature to the map and associate it with the row
                if (item.geom_wkt) {
                    const feature = addMultilinestringFeatureFromWKT_priorityL(item.geom_wkt, item.priority);

                    const featureId = feature.getId();
                    featureToRowMap.set(featureId, row);
                }
            });
        } else {
            console.error('Expected array but received:', responseData.data);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    // Toggle priority legend display
    if (Priority_legend.style.display === 'none') {
        type_legend.style.display = 'none';
        Priority_legend.style.display = 'none';
        Condition_legend.style.display = 'none';
        Material_legend.style.display = 'none';
        Ownership_legend.style.display = 'none';
    } else {
        type_legend.style.display = 'none';
        live_legend.style.display = 'none';
        Condition_legend.style.display = 'none';
        Material_legend.style.display = 'none';
        Ownership_legend.style.display = 'none';
        Priority_legend.style.display = 'none';
    }
});





//-------------------------------------All Priority P2-----------------------------//
P2.addEventListener('click', function () {
    // showLoading(); // Show loading indicator


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getPriorityLko?priority=Priority 2`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_Scoring.innerHTML = '';
            featureToRowMap.clear(); // Clear feature-to-row map


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
          <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
          
            <td>${item.ward_no}</td>                         
           
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
           
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
           
            <td>${item.total_scor}</td>
           
           
            <td>${item.priority}</td>
            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody_Scoring.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt); // Zoom to road
                            highlightAndScrollToRow(row);     // Highlight the clicked row and scroll to it
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                       // addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);
                        const feature = addMultilinestringFeatureFromWKT_priorityL(item.geom_wkt, item.priority);
                      console.log("Adding feature for item: ", item); // Log the feature being added

                    const featureId = feature.getId(); // Get the feature ID
                    featureToRowMap.set(featureId, row); // Map the feature to the row
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Priority_legend.style.display === 'none') {
            type_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';Priority_legend.style.display = 'none';
        }
    });

 
});


//-------------------------------------All Priority not eligible-----------------------------//
Not_Eligible.addEventListener('click', function () {
    // showLoading(); // Show loading indicator


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getPriorityLko?priority=Not Eligible`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_Scoring.innerHTML = '';
            featureToRowMap.clear(); // Clear feature-to-row map


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
           <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
           
            <td>${item.ward_no}</td>                         
           
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
           
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
           
            <td>${item.total_scor}</td>
           
           
            <td>${item.priority}</td>
             
            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody_Scoring.appendChild(row);

                    // Check if the item has a geom_wkt property
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt); // Zoom to road
                            highlightAndScrollToRow(row);     // Highlight the clicked row and scroll to it
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);
                        const feature = addMultilinestringFeatureFromWKT_priorityL(item.geom_wkt, item.priority);
                      console.log("Adding feature for item: ", item); // Log the feature being added

                    const featureId = feature.getId(); // Get the feature ID
                    featureToRowMap.set(featureId, row); // Map the feature to the row
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (live_legend_legend.style.display === 'none') {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
        }
    });

});

//---------------All Roads-------------------------//
ShowRoads.addEventListener('click', function () {

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getAllRoad_LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
          

            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody_Scoring.appendChild(row);

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT(item.geom_wkt);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

    // legendBtn.addEventListener('click', function () {
    //     if (type_legend.style.display === 'none') {
    //    type_legend.style.display = 'block'; live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     } else {
    //     type_legend.style.display = 'none';live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     }
    // });

});

//---------------All Park with Roads-------------------------//
Park_Road.addEventListener('click', function () {
    removeCurrentLayer(); 
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getWithParkRoad`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping
            
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
          

            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_ParkRoad(item.geom_wkt);
                        if (feature) {
                            const featureId = item.id;  // Use the item.id as the feature's ID
                            console.log("Setting feature ID:", featureId);

                            // Explicitly set the ID on the feature
                            feature.setId(featureId);

                            // Map feature ID to the table row
                            featureToRowMap.set(featureId, row);
                        } else {
                            console.warn('Failed to create feature for:', item);
                        }
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

    // legendBtn.addEventListener('click', function () {
    //     if (type_legend.style.display === 'none') {
    //    type_legend.style.display = 'block'; live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     } else {
    //     type_legend.style.display = 'none';live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     }
    // });

});

//---------------All Bank with Roads-------------------------//
Bank_Road.addEventListener('click', function () {

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getWithBankATM`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping
            
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
          

            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });
                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_Bank(item.geom_wkt);
                        if (feature) {
                            const featureId = item.id;  // Use the item.id as the feature's ID
                            console.log("Setting feature ID:", featureId);

                            // Explicitly set the ID on the feature
                            feature.setId(featureId);

                            // Map feature ID to the table row
                            featureToRowMap.set(featureId, row);
                        } else {
                            console.warn('Failed to create feature for:', item);
                        }
                    }
                    
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

   

});
function addMultilinestringFeatureFromWKT_Bank(wkt) {
    try {
        const format = new ol.format.WKT();

        // Check if the WKT is valid
        if (!wkt) {
            console.warn('Invalid WKT:', wkt);
            return null;
        }

        // Read the feature from the WKT
        const feature = format.readFeature(wkt, {
            dataProjection: 'EPSG:4326', // Input projection (WKT usually in EPSG:4326)
            featureProjection: map.getView().getProjection() // Convert to map projection
        });

        // Check if the feature and its geometry are valid
        if (!feature || !feature.getGeometry()) {
            console.error('Failed to read geometry from WKT:', wkt);
            return null;
        }

        // Set up a style with color and line width
        const style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#eb5406', 
                width: 3 // Line width
            })
        });

        // Apply the style to the feature
        feature.setStyle(style);

        // Ensure the feature has a valid ID (optional, can be from your data)
        const featureId = feature.getId();
        if (!featureId) {
            console.warn('Feature ID is missing or invalid:', feature);
        }

        // Add the feature to a vector source and vector layer
        const vectorSource = new ol.source.Vector();
        vectorSource.addFeature(feature);

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        // Add the vector layer to the map
        map.addLayer(vectorLayer);

        console.log('Created feature with style:', feature);
        return feature;
    } catch (error) {
        console.error('Error parsing WKT or creating feature:', error);
        return null;
    }
}

//---------------All Park with Roads-------------------------//
Metro_Road.addEventListener('click', function () {

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getWithMetro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear(); // Clear previous feature-to-row mapping

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.zone_no}</td>
                        <td>${item.zone_name}</td>
                        <td>${item.ward_no}</td>
                        <td>${item.ward_name}</td>
                        <td>${item.ownership}</td>
                        <td>${item.type}</td>
                        <td>${item.road_name}</td>
                        <td>${item.row_meter}</td>
                        <td>${item.row_as_per}</td>
                        <td>${item.carriage_w}</td>
                        <td>${item.carriage_m}</td>
                        <td>${item.length_km}</td>
                        <td>${item.condition}</td>
                        <td>${item.yoc}</td>
                        <td>${item.cus}</td>
                    `;

                    // Store the feature ID to row mapping using data-id attribute
                    row.dataset.featureId = item.id; // Associate feature ID with row

                    // Add row to table
                    dataTableBody.appendChild(row);

                    // Add event listener to row for highlighting on click
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_MetroRoad_way(item.geom_wkt);
                        if (feature) {
                            const featureId = item.id;  // Use the item.id as the feature's ID
                            console.log("Setting feature ID:", featureId);

                            // Explicitly set the ID on the feature
                            feature.setId(featureId);

                            // Map feature ID to the table row
                            featureToRowMap.set(featureId, row);
                        } else {
                            console.warn('Failed to create feature for:', item);
                        }
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


function addMultilinestringFeatureFromWKT_MetroRoad_way(wkt) {
    try {
        const format = new ol.format.WKT();

        // Check if the WKT is valid
        if (!wkt) {
            console.warn('Invalid WKT:', wkt);
            return null;
        }

        // Read the feature from the WKT
        const feature = format.readFeature(wkt, {
            dataProjection: 'EPSG:4326', // Input projection (WKT usually in EPSG:4326)
            featureProjection: map.getView().getProjection() // Convert to map projection
        });

        // Check if the feature and its geometry are valid
        if (!feature || !feature.getGeometry()) {
            console.error('Failed to read geometry from WKT:', wkt);
            return null;
        }

        // Set up a style with color and line width
        const style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(255, 0, 0, 1)', // Red color
                width: 3 // Line width
            })
        });

        // Apply the style to the feature
        feature.setStyle(style);

        // Ensure the feature has a valid ID (optional, can be from your data)
        const featureId = feature.getId();
        if (!featureId) {
            console.warn('Feature ID is missing or invalid:', feature);
        }

        // Add the feature to a vector source and vector layer
        const vectorSource = new ol.source.Vector();
        vectorSource.addFeature(feature);

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        // Add the vector layer to the map
        map.addLayer(vectorLayer);

        console.log('Created feature with style:', feature);
        return feature;
    } catch (error) {
        console.error('Error parsing WKT or creating feature:', error);
        return null;
    }
}

//---------------All hospital with Roads-------------------------//
Hospital_Road.addEventListener('click', function () {

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getWithHospitals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
          

            <!-- Add more table data cells as needed -->
        `;
        row.dataset.featureId = item.id; // Associate feature ID with row

                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });
                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_HospitalRoad(item.geom_wkt);
                        if (feature) {
                            const featureId = item.id;  // Use the item.id as the feature's ID
                            console.log("Setting feature ID:", featureId);

                            // Explicitly set the ID on the feature
                            feature.setId(featureId);

                            // Map feature ID to the table row
                            featureToRowMap.set(featureId, row);
                        } else {
                            console.warn('Failed to create feature for:', item);
                        }
                    }
                    
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

});

//---------------Drain with Roads-------------------------//
Drain_Road.addEventListener('click', function () {
//function Lucknow_Ward17_Material_Interlocking() {
        removeCurrentLayer();
        clearVectorLayers();
    
        currentLayer = new ol.layer.Image({
            //   title: 'Ward Boundary',
            //     extent: [-180, -90, -180, 90],
            source: new ol.source.ImageWMS({
                url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
                params: {
                    'LAYERS': 'LNN_Summary:lnnroadswith_drains',
    
                },
                ratio: 1,
                serverType: 'geoserver'
            })
        });
    
        //overlays.getLayers().push(LNN_Ward_Boundary);
        map.addLayer(currentLayer);
        document.getElementById('summary-table').style.display = 'none';
        document.getElementById('dataTable_summary').style.display = 'block';
        document.getElementById('tableContainer_summary').style.display = 'block';
    
        fetchDrainRoadData();
    });
    function fetchDrainRoadData() {
        fetch(`${BASE_URL}/getWithRoadDrain`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Add any required request body
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(responseData => {
                console.log('Received data:', responseData);
    
                // Clear existing table rows
                dataTableBody_summary.innerHTML = '';
                featureToRowMap.clear();  // Clear feature-row mapping

                // Pass the correct data to the function
                appendToSummaryTable(responseData.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


//---------------All Landmark with Roads-------------------------//
function addMultilinestringFeatureFromWKT_LandRoad(wkt) {
    try {
        const format = new ol.format.WKT();

        // Check if the WKT is valid
        if (!wkt) {
            console.warn('Invalid WKT:', wkt);
            return null;
        }

        // Read the feature from the WKT
        const feature = format.readFeature(wkt, {
            dataProjection: 'EPSG:4326', // Input projection (WKT usually in EPSG:4326)
            featureProjection: map.getView().getProjection() // Convert to map projection
        });

        // Check if the feature and its geometry are valid
        if (!feature || !feature.getGeometry()) {
            console.error('Failed to read geometry from WKT:', wkt);
            return null;
        }

        // Set up a style with color and line width
        const style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'darkred', 
                width: 3 // Line width
            })
        });

        // Apply the style to the feature
        feature.setStyle(style);

        // Ensure the feature has a valid ID (optional, can be from your data)
        const featureId = feature.getId();
        if (!featureId) {
            console.warn('Feature ID is missing or invalid:', feature);
        }

        // Add the feature to a vector source and vector layer
        const vectorSource = new ol.source.Vector();
        vectorSource.addFeature(feature);

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        // Add the vector layer to the map
        map.addLayer(vectorLayer);

        console.log('Created feature with style:', feature);
        return feature;
    } catch (error) {
        console.error('Error parsing WKT or creating feature:', error);
        return null;
    }
}
Landmark_Road.addEventListener('click', function () {

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getWithLandmarks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
          

            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });
                    // Check if the item has a geom_wkt property
                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_Bank(item.geom_wkt);
                        if (feature) {
                            const featureId = item.id;  // Use the item.id as the feature's ID
                            console.log("Setting feature ID:", featureId);

                            // Explicitly set the ID on the feature
                            feature.setId(featureId);

                            // Map feature ID to the table row
                            featureToRowMap.set(featureId, row);
                        } else {
                            console.warn('Failed to create feature for:', item);
                        }
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

    // legendBtn.addEventListener('click', function () {
    //     if (type_legend.style.display === 'none') {
    //    type_legend.style.display = 'block'; live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     } else {
    //     type_legend.style.display = 'none';live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     }
    // });

});


//style os edu//

function addMultilinestringFeatureFromWKT_Edu_Roads(wkt) {
    try {
        const format = new ol.format.WKT();

        // Check if the WKT is valid
        if (!wkt) {
            console.warn('Invalid WKT:', wkt);
            return null;
        }

        // Read the feature from the WKT
        const feature = format.readFeature(wkt, {
            dataProjection: 'EPSG:4326', // Input projection (WKT usually in EPSG:4326)
            featureProjection: map.getView().getProjection() // Convert to map projection
        });

        // Check if the feature and its geometry are valid
        if (!feature || !feature.getGeometry()) {
            console.error('Failed to read geometry from WKT:', wkt);
            return null;
        }

        // Set up a style with color and line width
        const style = new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'purple', 
                width: 3 // Line width
            })
        });

        // Apply the style to the feature
        feature.setStyle(style);

        // Ensure the feature has a valid ID (optional, can be from your data)
        const featureId = feature.getId();
        if (!featureId) {
            console.warn('Feature ID is missing or invalid:', feature);
        }

        // Add the feature to a vector source and vector layer
        const vectorSource = new ol.source.Vector();
        vectorSource.addFeature(feature);

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        // Add the vector layer to the map
        map.addLayer(vectorLayer);

        console.log('Created feature with style:', feature);
        return feature;
    } catch (error) {
        console.error('Error parsing WKT or creating feature:', error);
        return null;
    }
}
//---------------All school with Roads-------------------------//

Education_Road.addEventListener('click', function () {

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getWithSchool`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);
            console.log('getting all data');

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
          

            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });
                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_Edu_Roads(item.geom_wkt);
                        if (feature) {
                            const featureId = item.id;  // Use the item.id as the feature's ID
                            console.log("Setting feature ID:", featureId);

                            // Explicitly set the ID on the feature
                            feature.setId(featureId);

                            // Map feature ID to the table row
                            featureToRowMap.set(featureId, row);
                        } else {
                            console.warn('Failed to create feature for:', item);
                        }
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

    // legendBtn.addEventListener('click', function () {
    //     if (type_legend.style.display === 'none') {
    //    type_legend.style.display = 'block'; live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     } else {
    //     type_legend.style.display = 'none';live_legend.style.display = 'none';Condition_legend.style.display = 'none';
    //     }
    // });

});





/*------------------------------------ less than 3 year zone 1 -------------------------------------------------------------------------*/
Less_than3_Zone1.addEventListener('click', function () {

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Year?&year=Less%20Than%203`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_Road_Age.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
             <td>${item.gis_id}</td>
              <td>${item.zone_no}</td>
              <td>${item.zone_name}</td>
              <td>${item.ward_no}</td>                         
              <td>${item.ward_name}</td>
              <td>${item.ownership}</td>                        <td>${item.type}</td>
              <td>${item.road_name}</td>
              <td>${item.row_meter}</td>
              <td>${item.row_as_per}</td>
              <td>${item.carriage_w}</td>
              <td>${item.carriage_m}</td>
              <td>${item.length_km}</td>
              <td>${item.condition}</td>
              <td>${item.yoc}</td>
              <td>${item.cus}</td>
              <td>${item.year}</td>
              <!-- Add more table data cells as needed -->
          `;
                    dataTableBody_Road_Age.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {

                    const feature = addMultilinestringFeatureFromWKT_Year(item.geom_wkt, item.year);
                    const featureId = feature.getId();
                    featureToRowMap.set(featureId, row);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Road_Age_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Road_Age_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
/*------------------------------------ Greater than 3 year -------------------------------------------------------------------------*/
Greater_than3_Zone1.addEventListener('click', function () {
    removeCurrentLayer(); // Ensure the WMS layer is removed
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Year?&year=More%20Than%203`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_Road_Age.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
             <td>${item.gis_id}</td>
              <td>${item.zone_no}</td>
              <td>${item.zone_name}</td>
              <td>${item.ward_no}</td>                         
              <td>${item.ward_name}</td>
              <td>${item.ownership}</td>                        <td>${item.type}</td>
              <td>${item.road_name}</td>
              <td>${item.row_meter}</td>
              <td>${item.row_as_per}</td>
              <td>${item.carriage_w}</td>
              <td>${item.carriage_m}</td>
              <td>${item.length_km}</td>
              <td>${item.condition}</td>
              <td>${item.yoc}</td>
              <td>${item.cus}</td>
              <td>${item.year}</td>
              <!-- Add more table data cells as needed -->
          `;
                    dataTableBody_Road_Age.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_Year(item.geom_wkt, item.year);
                        const featureId = feature.getId();
                        featureToRowMap.set(featureId, row);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Road_Age_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Road_Age_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

});
/*------------------------------------ less than 3 year zone 4 -------------------------------------------------------------------------*/
Less_than3_Zone4.addEventListener('click', function () {

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Year?&year=Less%20Than%203`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
             <td>${item.gis_id    || 'N/A'}</td>
              <td>${item.zone_no   || 'N/A'}</td>
              <td>${item.zone_name   || 'N/A'}</td>
              <td>${item.ward_no   || 'N/A'}</td>                         
              <td>${item.ward_name   || 'N/A'}</td>
              <td>${item.ownership   || 'N/A'}</td>                        <td>${item.type   || 'N/A'}</td>
              <td>${item.road_name   || 'N/A'}</td>
              <td>${item.row_meter   || 'N/A'}</td>
              <td>${item.row_as_per   || 'N/A'}</td>
              <td>${item.carriage_w   || 'N/A'}</td>
              <td>${item.carriage_m   || 'N/A'}</td>
              <td>${item.length_km   || 'N/A'}</td>
              <td>${item.condition   || 'N/A'}</td>
              <td>${item.yoc   || 'N/A'}</td>
              <td>${item.cus   || 'N/A'}</td>
              <td>${item.year   || 'N/A'}</td>
              <!-- Add more table data cells as needed -->
          `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {

                    const feature = addMultilinestringFeatureFromWKT_Year(item.geom_wkt, item.year);
                    const featureId = feature.getId();
                    featureToRowMap.set(featureId, row);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Road_Age_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Road_Age_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});

// Less_than3_Zone4.addEventListener('click', function () {
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Year?&year=Less%20Than%203`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             // Add any request body if required
//             // zone_name: 'Zone 4',
//             // type: 'Major'
//         })
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log('Received data:', responseData);

//             // Clear existing table rows
//             dataTableBody_Road_Age.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     console.log("zone 4 item value");
//                     console.log(item);
//                     row.innerHTML = `
//              <td>${item.gis_id}</td>
//               <td>${item.zone_no}</td>
//               <td>${item.zone_name}</td>
//               <td>${item.ward_no}</td>                         
//               <td>${item.ward_name}</td>
//               <td>${item.ownership}</td>                        <td>${item.type}</td>
//               <td>${item.road_name}</td>
//               <td>${item.row_meter}</td>
//               <td>${item.row_as_per}</td>
//               <td>${item.carriage_w}</td>
//               <td>${item.carriage_m}</td>
//               <td>${item.length_km}</td>
//               <td>${item.condition}</td>
//               <td>${item.yoc}</td>
//               <td>${item.cus}</td>
//               <td>${item.year}</td>
//               <!-- Add more table data cells as needed -->
//           `;
//           dataTableBody_Road_Age.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         const feature = addMultilinestringFeatureFromWKT_Year(item.geom_wkt, item.year);
//                         const featureId = feature.getId();
//                         featureToRowMap.set(featureId, row);
//                     }
//                 });
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })
//     legendBtn.addEventListener('click', function () {
//         if (Road_Age_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Road_Age_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });
   

// });

/*------------------------------------ Greater than 3 year zone 4------------------------------------------------------------------------*/
Greater_than3_Zone4.addEventListener('click', function () {
    // Event listener for Get Data button ,get Category major road
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Year?&year=More%20Than%203`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
             <td>${item.gis_id}</td>
              <td>${item.zone_no}</td>
              <td>${item.zone_name}</td>
              <td>${item.ward_no}</td>                         
              <td>${item.ward_name}</td>
              <td>${item.ownership}</td>                        <td>${item.type}</td>
              <td>${item.road_name}</td>
              <td>${item.row_meter}</td>
              <td>${item.row_as_per}</td>
              <td>${item.carriage_w}</td>
              <td>${item.carriage_m}</td>
              <td>${item.length_km}</td>
              <td>${item.condition}</td>
              <td>${item.yoc}</td>
              <td>${item.cus}</td>
              <td>${item.year}</td>
              <!-- Add more table data cells as needed -->
          `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature = addMultilinestringFeatureFromWKT_Year(item.geom_wkt, item.year);
                        const featureId = feature.getId();
                        featureToRowMap.set(featureId, row);                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Road_Age_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Road_Age_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
  

});
//---------------------------ward17 road-----------------------------//
Ward17.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=17`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

        legendBtn.addEventListener('click', function () {
            if (Road_Age_legend.style.display === 'none') {
                Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
                Road_Age_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            } else {
                Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
                Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            }
        });

});
/*----------------------------- ward 17 -------------------------------------------------*/

function processTableData(data) {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
            <!-- Add more table data cells as needed -->
        `;
        dataTableBody.appendChild(row);
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });

        // Process WKT geometry if available
        if (item.geom_wkt) {
            
            const feature = addMultilinestringFeatureFromWKT_Ward(item.geom_wkt, item.ward_no);
                        const featureId = feature.getId();
                        featureToRowMap.set(featureId, row); 
        }
    });
}

function typeTableData(data) {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
            <!-- Add more table data cells as needed -->
        `;
        dataTableBody.appendChild(row);
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });

        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature = addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type);
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row); 
        }
    });
}

function conditionTableData(data) {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
            <!-- Add more table data cells as needed -->
        `;
        dataTableBody.appendChild(row);
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });


        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature =  addMultilinestringFeatureFromWKT_condition(item.geom_wkt, item.condition);
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);
        }
    });
}

function materialTableData(data) {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
            <!-- Add more table data cells as needed -->
        `;
        dataTableBody.appendChild(row);
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });

        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature = addMultilinestringFeatureFromWKT_material(item.geom_wkt, item.material);
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);
        }
    });
}


function ownershipTableData(data) {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
            <!-- Add more table data cells as needed -->
        `;
        dataTableBody.appendChild(row);
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });

        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature =  addMultilinestringFeatureFromWKT_ownership(item.geom_wkt, item.ownership);            ;
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);
        }
    });
}


function cusTableData(data) {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>
            <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
            <!-- Add more table data cells as needed -->
        `;
        dataTableBody.appendChild(row);
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });

        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature = addMultilinestringFeatureFromWKT_cus(item.geom_wkt, item.cus);            ;
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);
        }
    });
}
function isLayerInPreservedList(layer) {
    const preservedLayers = [
        ReligiousVectorLayer, bankVectorLayer, GraveyardVectorLayer, CarVectorLayer,
        HospitalVectorLayer, EducationVectorLayer, PetrolVectorLayer, HotelsVectorLayer,
        StadiumVectorLayer, busVectorLayer, ElectricsubVectorLayer, PostVectorLayer
    ];
    return preservedLayers.includes(layer);
}


Ward37.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();
    // map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=37`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        });


});
/*----------------------------- ward 59 -------------------------------------------------*/

Ward59.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=59`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
//---------------------------ward28 road
Ward28.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=28`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })


});
//---------------------------ward33 road
Ward33.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=33`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
//---------------------------ward34 road
Ward34.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=34`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

});
//---------------------------ward57 road
Ward57.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=57`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
//---------------------------ward55 road
Ward55.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=55`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
//---------------------------ward69 road
Ward69.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=69`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
//---------------------------ward87 road
Ward87.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=87`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

});
//---------------------------ward88 road
Ward88.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=88`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

});
//---------------------------ward95 road
Ward95.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=95`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

});
//---------------------------ward98 road
Ward98.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=98`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
//---------------------------ward103 road
Ward103.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=103`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
//---------------------------ward70 road
Ward70.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=70`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
Ward76.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=76`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
Ward100.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=100`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
Ward50.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=50`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
Ward12.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
Ward14.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=14`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
Ward62.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=62`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
Ward66.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Ward_no?ward_no=66`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                processTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});


////----------------------Zone1---------------------------//

Zone1_type.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getAllZ1typeName`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                typeTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category major road
Zone1_type_major.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Type?zone_name=Zone 1&type=Major`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                typeTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (type_legend_major.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            type_legend_major.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
// Event listener for Get Data button ,get Category type minor road
Zone1_type_minor.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Type?zone_name=Zone 1&type=Minor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                typeTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (type_legend_major.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            type_legend_major.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category type minor road

//----------Zone1 Condition-----------------------------//
Zone1_condition.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1AllCondition?zone_name=Zone 1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Under_Scheme_legend.style.display = 'none'; Road_Age_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });

});
// Event listener for Get Data button ,get Category Material BOE road
Zone1_condition_good.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Under_Scheme_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material BOE road
Zone1_condition_poor.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            type_legend_major.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material BOE road
Zone1_condition_moderate.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            type_legend_major.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});

//----------Zone1 Material-----------------------------//
Zone1_material.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1AllMaterial?zone_name=Zone 1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
               <td>${item.gis_id}</td>
                <td>${item.zone_no}</td>
                <td>${item.zone_name}</td>
                <td>${item.ward_no}</td>                         
                <td>${item.ward_name}</td>
                <td>${item.ownership}</td>
                <td>${item.type}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_as_per}</td>
                <td>${item.carriage_w}</td>
                <td>${item.carriage_m}</td>
                <td>${item.length_km}</td>
                <td>${item.condition}</td>
                <td>${item.yoc}</td>
                <td>${item.cus}</td>
                <!-- Add more table data cells as needed -->
            `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature =  addMultilinestringFeatureFromWKT_material(item.geom_wkt, item.carriage_m) ;            
                        const featureId = feature.getId();
                        featureToRowMap.set(featureId, row);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Material_legend.style.display = 'block'; live_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Under_Scheme_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_material_bitumen.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend_major.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});

// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_material_CC.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_material_interlocking.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_material_kachcha.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});

//----------Zone1 ownership -----------------------------//
Zone1_ownership.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1AllOwnerShip?zone_name=Zone 1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
});
// Event listener for Get Data button ,get Category Ownership NHAI road

// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_ownership_LNN.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
   

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_ownership_Private_Road.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
  

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_ownership_LDA.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=LDA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
  

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone1_ownership_PWD.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
   
});
// Event listener for Get Data button ,get Category Ownership road
Zone1_ownership_Others.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed


    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1OtherOwnerShip?ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });


});


//----------Zone1 Under Scheme -----------------------------//
Zone1_under_scheme.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getAllZ1cusName`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
});

// Event listener for Get Data button ,get Category Under scheme
Zone1_under_scheme_14th.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
   

});
// Event listener for Get Data button ,get Category Under scheme
Zone1_under_scheme_15th.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
   

});
// Event listener for Get Data button ,get Category Under scheme NNN
Zone1_under_scheme_NNN.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
   

});
// Event listener for Get Data button ,get Category Under scheme NNN
Zone1_under_scheme_Others.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL1}/getZ1SchemeOther?cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none';  type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    

});


//-------------------------------------Zone4-----------------------------//

// Event listener for Get Data button ,get Category Zone4 road


Zone4_type.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getAllZ4typeName`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping

            

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
           <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>                        <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
           
            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        
                        const feature =  addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type); ;            
                        const featureId = feature.getId();
                        featureToRowMap.set(featureId, row);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (type_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });

});
// Event listener for Get Data button ,get Category type road
Zone4_type_Urban.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Urban%20Express%20Way`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                typeTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (type_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none';
            type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';

            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material BOE road
Zone4_type_Arterial.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Arterial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
           <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>                        <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
           
            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature =  addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type); ;            
                        const featureId = feature.getId();
                        featureToRowMap.set(featureId, row);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (type_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category type minor road
Zone4_type_Local_Street.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Local%20Street`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
           <td>${item.gis_id}</td>
            <td>${item.zone_no}</td>
            <td>${item.zone_name}</td>
            <td>${item.ward_no}</td>                         
            <td>${item.ward_name}</td>
            <td>${item.ownership}</td>                        <td>${item.type}</td>
            <td>${item.road_name}</td>
            <td>${item.row_meter}</td>
            <td>${item.row_as_per}</td>
            <td>${item.carriage_w}</td>
            <td>${item.carriage_m}</td>
            <td>${item.length_km}</td>
            <td>${item.condition}</td>
            <td>${item.yoc}</td>
            <td>${item.cus}</td>
           
            <!-- Add more table data cells as needed -->
        `;
                    dataTableBody.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        const feature =  addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type); ;            
                        const featureId = feature.getId();
                        featureToRowMap.set(featureId, row);                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (type_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category type minor road
Zone4_type_Sub_Arterial.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Sub%20Arterial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                typeTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (type_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category type minor road
Zone4_type_Collector.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Collectors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                typeTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (type_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
//----------Zone4 Condition-----------------------------//
Zone4_condition.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4AllCondition?zone_name=Zone 4`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
});
// Event listener for Get Data button ,get Category Material BOE road
Zone4_condition_good.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Condition?zone_name=Zone 4&condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
// Event listener for Get Data button ,get Category Material BOE road
Zone4_condition_poor.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Condition?zone_name=Zone 4&condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material BOE road
Zone4_condition_moderate.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Condition?zone_name=Zone 4&condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                conditionTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Condition_legend.style.display === 'none') {
            Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});

//----------Zone4 Material-----------------------------//
Zone4_material.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4AllMaterial?zone_name=Zone 4`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_material_bitumen.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';
            featureToRowMap.clear();  // Clear feature-row mapping


            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_material_BOE.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=BOE`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_material_CC.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_material_interlocking.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_material_kachcha.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=Kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                materialTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Material_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });

});

//----------Zone4 ownership -----------------------------//
Zone4_ownership.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4AllOwnerShip?zone_name=Zone 4`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });

});
// Event listener for Get Data button ,get Category Ownership NHAI road
Zone4_ownership_NHAI.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=NHAI`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_ownership_LNN.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_ownership_Private_Road.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_ownership_LDA.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=LDA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Material Bitumen road
Zone4_ownership_PWD.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Ownership road
Zone4_ownership_Others.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed


    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4OtherOwnerShip?ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                ownershipTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Ownership_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
            Under_Scheme_legend.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});


//----------Zone4 Under Scheme -----------------------------//
Zone4_under_scheme.addEventListener('click', function () {
    // showLoading(); // Show loading indicator

    removeCurrentLayer(); // Ensure the WMS layer is removed

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getAllZ4cusName?zone_name=Zone 4`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });

});


// Event listener for Get Data button ,get Category Under scheme
Zone4_under_scheme_13th.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=13th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Under scheme
Zone4_under_scheme_14th.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none';
            type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Under scheme
Zone4_under_scheme_15th.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });
    // legendBtn.addEventListener('click', function () {
    //     if (live_legend.style.display === 'none') {
    //         live_legend.style.display = 'block';
    //     } else {
    //         live_legend.style.display = 'none';
    //     }
    // });

});
// Event listener for Get Data button ,get Category Under scheme NNN
Zone4_under_scheme_NNN.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
    // .finally(() => {
    //     hideLoading(); // Hide loading indicator when done
    // });


});
// Event listener for Get Data button ,get Category Under scheme NNN
Zone4_under_scheme_Others.addEventListener('click', function () {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    //   map.getOverlays().clear();
    map.getLayers().getArray().slice().forEach(layer => {
        // Only remove layers that are not the ReligiousVectorLayer
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
            && layer != PostVectorLayer) {
            map.removeLayer(layer);
        }
    });

    map.getOverlays().clear();

    fetch(`${BASE_URL}/getZ4SchemeOther?cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                cusTableData(responseData.data);
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    legendBtn.addEventListener('click', function () {
        if (Under_Scheme_legend.style.display === 'none') {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
            type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        } else {
            Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
            Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
            Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        }
    });
   

});
//============================================amenities--------------------------------
map.on('click', function (event) {
    var pointFeature = null;
    var lineFeature = null;
    var polygonFeature = null;

    // Check if a feature was clicked
    map.forEachFeatureAtPixel(event.pixel, function (feature) {
        var geometryType = feature.getGeometry().getType();

        if (geometryType === 'Point') {
            pointFeature = feature;
            return true; // Stop iteration when point is found
        } else if (geometryType === 'LineString') {
            lineFeature = feature;
        } else if (geometryType === 'MultiPolygon') {
            polygonFeature = feature;
        }
    });

    // Handle point feature popup
    if (pointFeature) {
        var coordinates = pointFeature.getGeometry().getCoordinates();
        var name = pointFeature.get('name');
        var address = pointFeature.get('address');
        var phonenumbe = pointFeature.get('phonenumbe');

        popup.getElement().innerHTML = '<strong style="color:blue">Name -</strong> ' + name +
            '<br><br><strong style="color:blue">Address -</strong> ' + address +
            '<br><br><strong style="color:blue">Phone No. -</strong> ' + phonenumbe;
        popup.setPosition(coordinates);

        // Hide other popups
        popupContainer.style.display = 'none';
        return;
    }

    // Handle line feature popup
    if (lineFeature) {
        var properties = lineFeature.getProperties();
        var coordinate = event.coordinate;
        var contentHtml = '<h6>Road Data</h6>';

        for (var key in properties) {
            if (properties.hasOwnProperty(key) && key !== 'geometry' && key !== 'row_left' && key !== 'row_right') {
                contentHtml += '<p><strong>' + key + ':</strong> ' + properties[key] + '</p>';
            }
        }

        content.innerHTML = contentHtml;
        overlay.setPosition(coordinate);

        // Hide other popups
        popupContainer.style.display = 'none';
        return;
    }

    // Handle polygon feature popup
    if (polygonFeature) {
        var name = polygonFeature.get('name');
        popupContainer.innerHTML = '<strong style="color:green">Name:</strong> ' + name;
        popupContainer.style.display = 'block';

        // Hide other popups
        popup.setPosition(undefined);
        return;
    }

    // Hide all popups if no feature is found
    if (!pointFeature && !lineFeature && !polygonFeature) {
        popup.setPosition(undefined);
        popupContainer.style.display = 'none';
    }
});

// Handle pointer move to change cursor style when hovering over features
map.on('pointermove', function (event) {
    var hit = map.hasFeatureAtPixel(event.pixel);
    map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});



/*------------------------------ ameneties --------------------------------------*/
/*------------------------------ ameneties --------------------------------------*/
var iconStyleBank = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/bank.png',
        scale: 0.05,
    })
});
var bankVectorSource = new ol.source.Vector();
var bankVectorLayer = new ol.layer.Vector({
    source: bankVectorSource,
    visible: false // Make sure this is true to show the layer
});
map.addLayer(bankVectorLayer);
var popupContainer = document.getElementById("popup_1");
var popup = new ol.Overlay({
    element: document.getElementById('popup'),
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -20],
});
map.addOverlay(popup);

fetch(`${BASE_URL}/getLNNBankAndATM`)
    .then(response => response.json())
    .then(data => {
        console.log('Fetched bank data:', data);

        var features = data.data.map(function (point) {
            var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
            var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

            var feature = new ol.Feature({
                geometry: new ol.geom.Point(lonLat),
                name: point.name,
                address: point.address,
                phonenumbe: point.phonenumbe
            });

            feature.setStyle(iconStyleBank);
            return feature;
        });

        bankVectorSource.addFeatures(features);
        console.log('Bank features added:', features);

        document.getElementById('showBanks').addEventListener('change', function () {
            bankVectorLayer.setVisible(this.checked);
        });


    })
    .catch(error => console.error('Error fetching bank data:', error));


//-------------------------------bus Stop---------------//      
var iconStyleBus = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/bus.png',
        scale: 0.05,
    })
});

var busVectorSource = new ol.source.Vector();
var busVectorLayer = new ol.layer.Vector({
    source: busVectorSource,
    visible: false // Ensure the layer is visible after features are added
});
map.addLayer(busVectorLayer);

fetch(`${BASE_URL}/getLNNBusStop`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleBus);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        busVectorSource.addFeatures(features);
        console.log('Bus stop features added:', features);

        document.getElementById('showBus').addEventListener('change', function () {
            busVectorLayer.setVisible(this.checked);
        });

    })
    .catch(error => console.error('Error fetching bus stop data:', error));



//--------------------Car Charging--------------//  
var iconStyleCar = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/charging.png',
        scale: 0.05,
    })
});

var CarVectorSource = new ol.source.Vector();
var CarVectorLayer = new ol.layer.Vector({
    source: CarVectorSource,
    visible: false // Ensure the layer is visible after features are added
});
map.addLayer(CarVectorLayer);

fetch(`${BASE_URL}/getLNNCarCharging`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleCar);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        CarVectorSource.addFeatures(features);
        console.log('Car Charging Station features added:', features);

        document.getElementById('showCar').addEventListener('change', function () {
            CarVectorLayer.setVisible(this.checked);
        });

    })
    .catch(error => console.error('Error fetching Car Charging Station data:', error));


//--------------------Hospital Charging--------------//  
var iconStyleHospital = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/hospital.png',
        scale: 0.05,
    })
});

var HospitalVectorSource = new ol.source.Vector();
var HospitalVectorLayer = new ol.layer.Vector({
    source: HospitalVectorSource,
    visible: false // Ensure the layer is visible after features are added
});
map.addLayer(HospitalVectorLayer);

fetch(`${BASE_URL}/getLNNHospitals`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleHospital);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        HospitalVectorSource.addFeatures(features);
        console.log('Hospital features added:', features);

        document.getElementById('showHospital').addEventListener('change', function () {
            HospitalVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Hospital data:', error));


//--------------------Education Charging--------------//  
var iconStyleEducation = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/education.png',
        scale: 0.05,
    })
});

var EducationVectorSource = new ol.source.Vector();
var EducationVectorLayer = new ol.layer.Vector({
    source: EducationVectorSource,
    visible: false // Ensure the layer is visible after features are added
});
map.addLayer(EducationVectorLayer);

fetch(`${BASE_URL}/getLNNSchool`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleEducation);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        EducationVectorSource.addFeatures(features);
        console.log('Education features added:', features);

        document.getElementById('showEducation').addEventListener('change', function () {
            EducationVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Education data:', error));

//--------------------Hotels Charging--------------//  
var iconStyleHotels = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/hotel.png',
        scale: 0.05,
    })
});

var HotelsVectorSource = new ol.source.Vector();
var HotelsVectorLayer = new ol.layer.Vector({
    source: HotelsVectorSource,
    visible: false // Initially not visible
});
map.addLayer(HotelsVectorLayer);

fetch(`${BASE_URL}/getLNNHotels`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleHotels);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        HotelsVectorSource.addFeatures(features);
        console.log('Hotels features added:', features);

        document.getElementById('showHotel').addEventListener('change', function () {
            HotelsVectorLayer.setVisible(this.checked);
        });


    })
    .catch(error => console.error('Error fetching Hotels data:', error));



//--------------------Petrol Pump-----------------------------//

var iconStylePetrol = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/fuel.png',
        scale: 0.05,
    })
});

var PetrolVectorSource = new ol.source.Vector();
var PetrolVectorLayer = new ol.layer.Vector({
    source: PetrolVectorSource,
    visible: false // Initially visible
});
map.addLayer(PetrolVectorLayer);

fetch(`${BASE_URL}/getLNNPetrolPumps`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract coordinates and transform from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                //   var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStylePetrol);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        PetrolVectorSource.addFeatures(features);
        console.log('Petrol features added:', features);

        document.getElementById('showPetrol').addEventListener('change', function () {
            PetrolVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Petrol data:', error));


//--------------------Stadium Charging--------------//  
var iconStyleStadium = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/stadium.png',
        scale: 0.05,
    })
});

var StadiumVectorSource = new ol.source.Vector();
var StadiumVectorLayer = new ol.layer.Vector({
    source: StadiumVectorSource,
    visible: false // Initially not visible
});
map.addLayer(StadiumVectorLayer);

// Fetch and add Stadium features
fetch(`${BASE_URL}/getLNNStadium`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                // var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleStadium);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        StadiumVectorSource.addFeatures(features);
        console.log('Stadium features added:', features);

        document.getElementById('showStadium').addEventListener('change', function () {
            StadiumVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Stadium data:', error));

//--------------------Electric Substation--------------//  
var iconStyleElectricsub = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/energy.png',
        scale: 0.05,
    })
});

var ElectricsubVectorSource = new ol.source.Vector();
var ElectricsubVectorLayer = new ol.layer.Vector({
    source: ElectricsubVectorSource,
    visible: false // Initially not visible
});
map.addLayer(ElectricsubVectorLayer);

// Fetch and add Electricsub features
fetch(`${BASE_URL}/getLNNElectricSub`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                // var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleElectricsub);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        ElectricsubVectorSource.addFeatures(features);
        console.log('Electricsub features added:', features);

        document.getElementById('showElectric_Substation').addEventListener('change', function () {
            ElectricsubVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Electricsub data:', error));

//------------------------Landmark--------------------

var iconStyleLandmark = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/landmark.png',
        scale: 0.05,
    })
});

var LandmarkVectorSource = new ol.source.Vector();
var LandmarkVectorLayer = new ol.layer.Vector({
    source: LandmarkVectorSource,
    visible: false // Initially not visible
});
map.addLayer(LandmarkVectorLayer);

// Fetch and add Electricsub features
fetch(`${BASE_URL}/getLNNLandMarks`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                // var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleLandmark);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        LandmarkVectorSource.addFeatures(features);
        console.log('landmark features added:', features);

        document.getElementById('showLandmark').addEventListener('change', function () {
            LandmarkVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Electricsub data:', error));



//--------------------Graveyard Charging--------------//  
var iconStyleGraveyard = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/graveyard.png',
        scale: 0.05,
    })
});

var GraveyardVectorSource = new ol.source.Vector();
var GraveyardVectorLayer = new ol.layer.Vector({
    source: GraveyardVectorSource,
    visible: false // Initially not visible
});
map.addLayer(GraveyardVectorLayer);

// Fetch and add Graveyard features
fetch(`${BASE_URL}/getLNNGraveyard`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleGraveyard);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        GraveyardVectorSource.addFeatures(features);
        console.log('Graveyard features added:', features);

        document.getElementById('showGraveyard').addEventListener('change', function () {
            GraveyardVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Graveyard data:', error));



//--------------------Religious --------------//  
var iconStyleReligious = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/Book.png',
        scale: 0.05,
    })
});

var ReligiousVectorSource = new ol.source.Vector();
var ReligiousVectorLayer = new ol.layer.Vector({
    source: ReligiousVectorSource,
    visible: false // Initially not visible
});
map.addLayer(ReligiousVectorLayer);

// Fetch and add Religious features
fetch(`${BASE_URL}/getLNNReligious`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleReligious);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        ReligiousVectorSource.addFeatures(features);
        console.log('Religious features added:', features);

        document.getElementById('showReligious').addEventListener('change', function () {
            ReligiousVectorLayer.setVisible(this.checked);
        });


    })
    .catch(error => console.error('Error fetching Religious data:', error));


//--------------------Post Office--------------//  
var iconStylePost = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/post-office.png',
        scale: 0.05,
    })
});

var PostVectorSource = new ol.source.Vector();
var PostVectorLayer = new ol.layer.Vector({
    source: PostVectorSource,
    visible: false // Initially not visible
});
map.addLayer(PostVectorLayer);

// Fetch and add Religious features
fetch(`${BASE_URL}/getLNNPostOffices`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStylePost);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        PostVectorSource.addFeatures(features);
        console.log('Post Office features added:', features);

        document.getElementById('showPostOffice').addEventListener('change', function () {
            PostVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Post Office data:', error));

/*--------------------Central Gov Office------------------------------------------------*/
// Define the style for the icons


var iconStyleCentral = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/Central.png',
        scale: 0.05,
    })
});

var CentralGovVectorSource = new ol.source.Vector();
var CentralGovVectorLayer = new ol.layer.Vector({
    source: CentralGovVectorSource,
    visible: false // Initially not visible
});
map.addLayer(CentralGovVectorLayer);

// Fetch and add Religious features
fetch(`${BASE_URL}/getLNNCentralGov`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleCentral);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        CentralGovVectorSource.addFeatures(features);
        console.log('Goverment Office features added:', features);

        document.getElementById('showCentralGov').addEventListener('change', function () {
            CentralGovVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching Central Gov data:', error));
/*--------------------------------------------------StateGov Office------------------------------------------------------------------------*/
// Define the style for the icons
var iconStyleState = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/State.png',
        scale: 0.02,
    })
});

var StateGovVectorSource = new ol.source.Vector();
var StateGovVectorLayer = new ol.layer.Vector({
    source: StateGovVectorSource,
    visible: false // Initially not visible
});
map.addLayer(StateGovVectorLayer);

// Fetch and add Religious features
fetch(`${BASE_URL}/getLNNStateGov`)
    .then(response => response.json())
    .then(data => {
        var features = data.data.map(function (point) {
            try {
                // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                var feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(iconStyleState);
                return feature;
            } catch (error) {
                console.error('Error adding point feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        StateGovVectorSource.addFeatures(features);
        console.log('Religious features added:', features);

        document.getElementById('showStateGov').addEventListener('change', function () {
            StateGovVectorLayer.setVisible(this.checked);
        });



    })
    .catch(error => console.error('Error fetching State Gov data:', error));

/*----------------------------------------------------park Data--------------------------------------------------*/

// Define your polygon style
var polygonStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(0, 150, 0, 0.5)', // Green color with 50% opacity
    }),
    stroke: new ol.style.Stroke({
        color: '#00FF00', // Green border
        width: 2,
    }),
});

// Define the park vector source and layer
var parkVectorSource = new ol.source.Vector();
var parkVectorLayer = new ol.layer.Vector({
    source: parkVectorSource,
    visible: false // Initially not visible
});

map.addLayer(parkVectorLayer);

// Handle the checkbox to toggle visibility of the vector layer
document.getElementById('showParks').addEventListener('change', function () {
    parkVectorLayer.setVisible(this.checked);
});

// Fetch the MultiPolygon data and add it to the layer
fetch(`${BASE_URL}/getLNNParks`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Log the data to understand its structure
        console.log('Fetched data:', data);

        // Check if data and data.data are defined
        if (!data || !Array.isArray(data.data)) {
            throw new Error('Invalid data format: expected an object with an array in "data" property.');
        }

        var format = new ol.format.WKT();
        var features = data.data.map(function (park) {
            //   console.log("WKT Geometry:", park.geom_point);

            try {
                var feature = format.readFeature(park.geom_point, {
                    dataProjection: 'EPSG:4326', // Assuming WKT data is in EPSG:4326
                    featureProjection: 'EPSG:4326' // Assuming map view is EPSG:4326 (change to EPSG:3857 if needed)
                });

                feature.setStyle(polygonStyle); // Apply the style to the feature
                feature.set('name', park.name); // Add the park name as an attribute
                return feature;
            } catch (error) {
                console.error('Error converting WKT to Feature:', park.geom_point, error);
                return null;
            }
        }).filter(Boolean); // Filter out null features if any WKT parsing fails

        parkVectorSource.addFeatures(features); // Add all features to the source
        console.log('Park features added:', features);

        // Adjust the map view to fit the extent of the features
        if (features.length > 0) {
            map.getView().fit(parkVectorSource.getExtent(), {
                size: map.getSize(),
                maxZoom: 12
            });
        }
    })
    .catch(error => console.error('Error fetching park data:', error));



//------------------------ query panel ---------------------------------/ /
document.getElementById('load-layer').addEventListener('click', function () {
    const loadLayer = document.getElementById('table_data');
    if (loadLayer.style.display === 'none' || loadLayer.style.display === '') {
        loadLayer.style.display = 'flex';
    } else {
        loadLayer.style.display = 'none';
    }
});

draw_type.onchange = function () {
    map.removeInteraction(draw1);
    if (draw) {
        map.removeInteraction(draw);
        map.removeOverlay(helpTooltip);
        map.removeOverlay(measureTooltip);
    }
    if (vectorLayer) {
        vectorLayer.getSource().clear();
    }
    if (vector1) {
        vector1.getSource().clear();
        // $('#table').empty();
    }
    if (measureTooltipElement) {
        var elem = document.getElementsByClassName("tooltip tooltip-static");
        //$('#measure_tool').empty();
        //alert(elem.length);
        for (var i = elem.length - 1; i >= 0; i--) {
            elem[i].remove();
            //alert(elem[i].innerHTML);
        }
    }
    add_draw_Interaction();
};
var source1 = new ol.source.Vector({
    wrapX: false,
});
var vector1 = new ol.layer.Vector({
    source: source1,
});
map.addLayer(vector1);
var draw1;
// layer dropdown query
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/geoserver/LNN_Road_System/wfs?request=getCapabilities",
        dataType: "xml",
        success: function (xml) {
            var select = $("#layer");
            $(xml)
                .find("FeatureType")
                .each(function () {
                    //var title = $(this).find('ows:Operation').attr('name');
                    //alert(title);
                    var name = $(this).find("Name").text();
                    //select.append("<option/><option class='ddheader' value='"+ name +"'>"+title+"</option>");
                    $(this)
                        .find("Name")
                        .each(function () {
                            var value = $(this).text();
                            select.append(
                                "<option class='ddindent' value='" +
                                value +
                                "'>" +
                                value +
                                "</option>"
                            );
                        });
                });
            //select.children(":first").text("please make a selection").attr("selected",true);
        },
    });
});
// attribute dropdown
$(function () {
    $("#layer").change(function () {
        var attributes = document.getElementById("attributes");
        var length = attributes.options.length;
        for (i = length - 1; i >= 0; i--) {
            attributes.options[i] = null;
        }
        var value_layer = $(this).val();
        attributes.options[0] = new Option("Select attributes", "");
        //  alert(url);
        $(document).ready(function () {
            $.ajax({
                type: "GET",
                url:
                    "http://localhost:8080/geoserver/LNN_Road_System/wfs?service=WFS&request=DescribeFeatureType&version=1.1.0&typeName=" +
                    value_layer,
                dataType: "xml",
                success: function (xml) {
                    var select = $("#attributes");
                    //var title = $(xml).find('xsd\\:complexType').attr('name');
                    //  alert(title);
                    $(xml)
                        .find("xsd\\:sequence")
                        .each(function () {
                            $(this)
                                .find("xsd\\:element")
                                .each(function () {
                                    var value = $(this).attr("name");
                                    //alert(value);
                                    var type = $(this).attr("type");
                                    //alert(type);
                                    if (value != "geom" && value != "the_geom") {
                                        select.append(
                                            "<option class='ddindent' value='" +
                                            type +
                                            "'>" +
                                            value +
                                            "</option>"
                                        );
                                    }
                                });
                        });
                },
            });
        });
    });
});
// operator combo
$(function () {
    $("#attributes").change(function () {
        var operator = document.getElementById("operator");
        var length = operator.options.length;
        for (i = length - 1; i >= 0; i--) {
            operator.options[i] = null;
        }
        var value_type = $(this).val();
        // alert(value_type);
        var value_attribute = $("#attributes option:selected").text();
        operator.options[0] = new Option("Select operator", "");
        if (
            value_type == "xsd:short" ||
            value_type == "xsd:int" ||
            value_type == "xsd:double" ||
            value_type == "xsd:long"
        ) {
            var operator1 = document.getElementById("operator");
            operator1.options[1] = new Option("Greater than", ">");
            operator1.options[2] = new Option("Less than", "<");
            operator1.options[3] = new Option("Equal to", "=");
            //  operator1.options[4] = new Option('Between', 'BETWEEN');
        } else if (value_type == "xsd:string") {
            var operator1 = document.getElementById("operator");
            operator1.options[1] = new Option("Greater than", ">");
            operator1.options[2] = new Option("Less than", "<");
            operator1.options[3] = new Option("Like", "ILike");
        }
    });
});
// layer dropdown draw query
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/geoserver/LNN_Road_System/wfs?request=getCapabilities",
        dataType: "xml",
        success: function (xml) {
            var select = $("#layer1");
            $(xml)
                .find("FeatureType")
                .each(function () {
                    //var title = $(this).find('ows:Operation').attr('name');
                    //alert(title);
                    var name = $(this).find("Name").text();
                    //select.append("<option/><option class='ddheader' value='"+ name +"'>"+title+"</option>");
                    $(this)
                        .find("Name")
                        .each(function () {
                            var value = $(this).text();
                            select.append(
                                "<option class='ddindent' value='" +
                                value +
                                "'>" +
                                value +
                                "</option>"
                            );
                        });
                });
            //select.children(":first").text("please make a selection").attr("selected",true);
        },
    });
});
var highlightStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: "rgba(255,0,0,0.3)",
    }),
    stroke: new ol.style.Stroke({
        color: "yellow",
        width: 3,
    }),
    image: new ol.style.Circle({
        radius: 10,
        fill: new ol.style.Fill({
            color: "white",
        }),
    }),
});

// function for finding row in the table when feature selected on map
function findRowNumber(cn1, v1) {
    var table = document.querySelector("#table");
    var rows = table.querySelectorAll("tr");
    var msg = "No such row exist";
    for (i = 1; i < rows.length; i++) {
        var tableData = rows[i].querySelectorAll("td");
        if (tableData[cn1 - 1].textContent == v1) {
            msg = i;
            break;
        }
    }
    return msg;
}
// function for loading query
function query() {
    $("#table").empty();
    if (geojson) {
        map.removeLayer(geojson);
    }
    if (selectedFeature) {
        selectedFeature.setStyle();
        selectedFeature = undefined;
    }
    if (vector1) {
        vector1.getSource().clear();
        // $('#table').empty();
    }
    //alert('jsbchdb');
    var layer = document.getElementById("layer");
    var value_layer = layer.options[layer.selectedIndex].value;
    //alert(value_layer);
    var attribute = document.getElementById("attributes");
    var value_attribute = attribute.options[attribute.selectedIndex].text;
    var operator = document.getElementById("operator");
    var value_operator = operator.options[operator.selectedIndex].value;
    //alert(value_operator);
    var txt = document.getElementById("value");
    var value_txt = txt.value;
    if (value_operator == "ILike") {
        value_txt = "'" + value_txt + "%25'";
        //alert(value_txt);
        //value_attribute = 'strToLowerCase('+value_attribute+')';
    } else {
        value_txt = value_txt;
        //value_attribute = value_attribute;
    }
    //alert(value_txt);
    var url =
        "http://localhost:8080/geoserver/LNN_Road_System/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=" +
        value_layer +
        "&CQL_FILTER=" +
        value_attribute +
        "%20" +
        value_operator +
        "%20" +
        value_txt +
        "%20" +
        "&outputFormat=application/json";
    //console.log(url);
    style = new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 255, 255, 0.2)",
        }),
        stroke: new ol.style.Stroke({
            color: "#8ECAED",
            width: 7,
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: "#8ECAED",
            }),
        }),
    });
    geojson = new ol.layer.Vector({
        //title:'dfdfd',
        //title: '<h5>' + value_crop+' '+ value_param +' '+ value_seas+' '+value_level+'</h5>',
        source: new ol.source.Vector({
            url: url,
            format: new ol.format.GeoJSON(),
        }),
        style: style,
    });
    geojson.getSource().on("addfeature", function () {
        //alert(geojson.getSource().getExtent());
        map.getView().fit(geojson.getSource().getExtent(), {
            duration: 1590,
            size: map.getSize(),
        });
    });
    //overlays.getLayers().push(geojson);
    map.addLayer(geojson);
    $.getJSON(url, function (data) {
        var col = [];
        col.push("id");
        for (var i = 0; i < data.features.length; i++) {
            for (var key in data.features[i].properties) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");
        table.setAttribute("id", "table");
        var caption = document.createElement("caption");
        caption.setAttribute("id", "caption");
        caption.style.captionSide = "top";
        caption.style.backgroundColor = "white";
        caption.innerHTML =
            // value_layer +
            " (Number of Features : " + data.features.length + " )";
        table.appendChild(caption);
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
        var tr = table.insertRow(-1); // TABLE ROW.
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th"); // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.features.length; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                if (j == 0) {
                    tabCell.innerHTML = data.features[i]["id"];
                } else {
                    //alert(data.features[i]['id']);
                    tabCell.innerHTML = data.features[i].properties[col[j]];
                    //alert(tabCell.innerHTML);
                }
            }
        }
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("table_data");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        document.getElementById("map").style.height = "71%";
        document.getElementById("table_data").style.height = "29%";
        map.updateSize();
        addRowHandlers();
    });
    map.on("singleclick", highlight);
}

// highlight the feature on map and table on map click
function highlight(evt) {
    if (selectedFeature) {
        selectedFeature.setStyle();
        selectedFeature = undefined;
    }
    var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        return feature;
    });
    if (feature && feature.getId() != undefined) {
        var geometry = feature.getGeometry();
        var coord = geometry.getCoordinates();
        var coordinate = evt.coordinate;
        //alert(feature.get('gid'));
        // alert(coordinate);
        /*var content1 = '<h3>' + feature.get([name]) + '</h3>';
    content1 += '<h5>' + feature.get('crop')+' '+ value_param +' '+ value_seas+' '+value_level+'</h5>'
    content1 += '<h5>' + feature.get([value_param]) +' '+ unit +'</h5>';
    // alert(content1);
    content.innerHTML = content1;
    overlay.setPosition(coordinate);*/
        // console.info(feature.getProperties());
        $(function () {
            $("#table td").each(function () {
                $(this).parent("tr").css("background-color", "white");
            });
        });
        feature.setStyle(highlightStyle);
        selectedFeature = feature;
        var table = document.getElementById("table");
        var cells = table.getElementsByTagName("td");
        var rows = document.getElementById("table").rows;
        var heads = table.getElementsByTagName("th");
        var col_no;
        for (var i = 0; i < heads.length; i++) {
            // Take each cell
            var head = heads[i];
            //alert(head.innerHTML);
            if (head.innerHTML == "id") {
                col_no = i + 1;
                //alert(col_no);
            }
        }
        var row_no = findRowNumber(col_no, feature.getId());
        //alert(row_no);
        var rows = document.querySelectorAll("#table tr");
        rows[row_no].scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        $(document).ready(function () {
            $("#table td:nth-child(" + col_no + ")").each(function () {
                if ($(this).text() == feature.getId()) {
                    $(this).parent("tr").css("background-color", "grey");
                }
            });
        });
    } else {
        $(function () {
            $("#table td").each(function () {
                $(this).parent("tr").css("background-color", "white");
            });
        });
    }
    /*$(function() {
  $("#table td").each(function() {
  if ($(this).text() == feature.get('gid')) {
  // $(this).css('color', 'red');
  $(this).parent("tr").css("background-color", "grey");
  }
  });
  });*/
}
// highlight the feature on map and table on row select in table
function addRowHandlers() {
    var rows = document.getElementById("table").rows;
    var heads = table.getElementsByTagName("th");
    var col_no;
    for (var i = 0; i < heads.length; i++) {
        // Take each cell
        var head = heads[i];
        //alert(head.innerHTML);
        if (head.innerHTML == "id") {
            col_no = i + 1;
            //alert(col_no);
        }
    }
    for (i = 0; i < rows.length; i++) {
        rows[i].onclick = (function () {
            return function () {
                if (selectedFeature) {
                    selectedFeature.setStyle();
                    selectedFeature = undefined;
                }
                $(function () {
                    $("#table td").each(function () {
                        $(this).parent("tr").css("background-color", "white");
                    });
                });
                var cell = this.cells[col_no - 1];
                var id = cell.innerHTML;
                $(document).ready(function () {
                    $("#table td:nth-child(" + col_no + ")").each(function () {
                        if ($(this).text() == id) {
                            $(this).parent("tr").css("background-color", "grey");
                        }
                    });
                });
                var features = geojson.getSource().getFeatures();
                for (i = 0; i < features.length; i++) {
                    if (features[i].getId() == id) {
                        //alert(features[i].feature.id);
                        features[i].setStyle(highlightStyle);
                        selectedFeature = features[i];
                        var featureExtent = features[i].getGeometry().getExtent();
                        if (featureExtent) {
                            map.getView().fit(featureExtent, {
                                duration: 1590,
                                size: map.getSize(),
                            });
                        }
                    }
                }
                //alert("id:" + id);
            };
        })(rows[i]);
    }
}

//------------- draw function in query panel----------------------//
draw_type.onchange = function () {
    map.removeInteraction(draw1);
    if (draw) {
        map.removeInteraction(draw);
        map.removeOverlay(helpTooltip);
        map.removeOverlay(measureTooltip);
    }
    if (vectorLayer) {
        vectorLayer.getSource().clear();
    }
    if (vector1) {
        vector1.getSource().clear();
        // $('#table').empty();
    }
    if (measureTooltipElement) {
        var elem = document.getElementsByClassName("tooltip tooltip-static");
        //$('#measure_tool').empty();
        //alert(elem.length);
        for (var i = elem.length - 1; i >= 0; i--) {
            elem[i].remove();
            //alert(elem[i].innerHTML);
        }
    }
    add_draw_Interaction();
};
var source1 = new ol.source.Vector({
    wrapX: false,
});
var vector1 = new ol.layer.Vector({
    source: source1,
});
map.addLayer(vector1);
var draw1;
// measure Tool
function add_draw_Interaction() {
    var value = draw_type.value;
    //alert(value);
    if (value !== "None") {
        var geometryFunction;
        if (value === "Square") {
            value = "Circle";
            geometryFunction = new ol.interaction.Draw.createRegularPolygon(4);
        } else if (value === "Box") {
            value = "Circle";
            geometryFunction = new ol.interaction.Draw.createBox();
        } else if (value === "Star") {
            value = "Circle";
            geometryFunction = function (coordinates, geometry) {
                //alert(value);
                var center = coordinates[0];
                var last = coordinates[1];
                var dx = center[0] - last[0];
                var dy = center[1] - last[1];
                var radius = Math.sqrt(dx * dx + dy * dy);
                var rotation = Math.atan2(dy, dx);
                var newCoordinates = [];
                var numPoints = 12;
                for (var i = 0; i < numPoints; ++i) {
                    var angle = rotation + (i * 2 * Math.PI) / numPoints;
                    var fraction = i % 2 === 0 ? 1 : 0.5;
                    var offsetX = radius * fraction * Math.cos(angle);
                    var offsetY = radius * fraction * Math.sin(angle);
                    newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
                }
                newCoordinates.push(newCoordinates[0].slice());
                if (!geometry) {
                    geometry = new ol.geom.Polygon([newCoordinates]);
                } else {
                    geometry.setCoordinates([newCoordinates]);
                }
                return geometry;
            };
        }
        // map.addInteraction(draw1);
        if (draw_type.value == "select" || draw_type.value == "clear") {
            if (draw1) {
                map.removeInteraction(draw1);
            }
            vector1.getSource().clear();
            if (geojson) {
                geojson.getSource().clear();
                map.removeLayer(geojson);
            }
        } else if (
            draw_type.value == "Square" ||
            draw_type.value == "Polygon" ||
            draw_type.value == "Circle" ||
            draw_type.value == "Star" ||
            draw_type.value == "Box"
        ) {
            draw1 = new ol.interaction.Draw({
                source: source1,
                type: value,
                geometryFunction: geometryFunction,
            });
            map.addInteraction(draw1);
            draw1.on("drawstart", function (evt) {
                if (vector1) {
                    vector1.getSource().clear();
                }
                if (geojson) {
                    geojson.getSource().clear();
                    map.removeLayer(geojson);
                }

                //alert('bc');
            });
            draw1.on("drawend", function (evt) {
                var feature = evt.feature;
                var coords = feature.getGeometry();
                //console.log(coords);
                var format = new ol.format.WKT();
                var wkt = format.writeGeometry(coords);
                var layer_name = document.getElementById("layer1");
                var value_layer = layer_name.options[layer_name.selectedIndex].value;
                var url =
                    "http://localhost:8080/geoserver/LNN_Road_System/wfs?request=GetFeature&version=1.0.0&typeName=" +
                    value_layer +
                    "&outputFormat=json&cql_filter=INTERSECTS(geom," +
                    wkt +
                    ")";
                //alert(url);
                style = new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: "rgba(255, 255, 255, 0.2)",
                    }),
                    stroke: new ol.style.Stroke({
                        color: "#ffcc33",
                        width: 3,
                    }),
                    image: new ol.style.Circle({
                        radius: 7,
                        fill: new ol.style.Fill({
                            color: "#ffcc33",
                        }),
                    }),
                });
                geojson = new ol.layer.Vector({
                    // title:'dfdfd',
                    // title: '<h5>' + value_crop+' '+ value_param +' '+ value_seas+' '+value_level+'</h5>',
                    source: new ol.source.Vector({
                        url: url,
                        format: new ol.format.GeoJSON(),
                    }),
                    style: style,
                });
                geojson.getSource().on("addfeature", function () {
                    //alert(geojson.getSource().getExtent());
                    map.getView().fit(geojson.getSource().getExtent(), {
                        duration: 1590,
                        size: map.getSize(),
                    });
                });
                //overlays.getLayers().push(geojson);
                map.addLayer(geojson);
                map.removeInteraction(draw1);
                $.getJSON(url, function (data) {
                    var col = [];
                    col.push("id");
                    for (var i = 0; i < data.features.length; i++) {
                        for (var key in data.features[i].properties) {
                            if (col.indexOf(key) === -1) {
                                col.push(key);
                            }
                        }
                    }
                    var table = document.createElement("table");
                    table.setAttribute("class", "table table-hover table-striped");
                    table.setAttribute("id", "table1");
                    var caption = document.createElement("caption");
                    caption.setAttribute("id", "caption");
                    caption.style.captionSide = "top";
                    caption.innerHTML =
                        value_layer +
                        " (Number of Features : " +
                        data.features.length +
                        " )";
                    table.appendChild(caption);
                    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
                    var tr = table.insertRow(-1); // TABLE ROW.
                    for (var i = 0; i < col.length; i++) {
                        var th = document.createElement("th"); // TABLE HEADER.
                        th.innerHTML = col[i];
                        tr.appendChild(th);
                    }
                    // ADD JSON DATA TO THE TABLE AS ROWS.
                    for (var i = 0; i < data.features.length; i++) {
                        tr = table.insertRow(-1);
                        for (var j = 0; j < col.length; j++) {
                            var tabCell = tr.insertCell(-1);
                            if (j == 0) {
                                tabCell.innerHTML = data.features[i]["id"];
                            } else {
                                //alert(data.features[i]['id']);
                                tabCell.innerHTML = data.features[i].properties[col[j]];
                                //alert(tabCell.innerHTML);
                            }
                        }
                    }
                    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                    var divContainer = document.getElementById("table_data");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                    document.getElementById("map").style.height = "71%";
                    document.getElementById("table_data").style.height = "29%";
                    map.updateSize();
                    addRowHandlers();
                });
                map.on("singleclick", highlight);
            });
        }
    }
}
var source = new ol.source.Vector();
var vectorLayer = new ol.layer.Vector({
    //title: 'layer',
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 255, 255, 0.2)",
        }),
        stroke: new ol.style.Stroke({
            color: "#ffcc33",
            width: 2,
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: "#ffcc33",
            }),
        }),
    }),
});
map.addLayer(vectorLayer);
/**
* Currently drawn feature.
* @type {module:ol/Feature~Feature}
*/
//var sketch;
/**
* The help tooltip element.
*             @type {Element}
*/
var helpTooltipElement;
/**
* Overlay to show the help messages.
* @type {module:ol/Overlay}
*/
var helpTooltip;
/**
* The measure tooltip element.
* @type {Element}
*/
var measureTooltipElement;
/**
* Overlay to show the measurement.
* @type {module:ol/Overlay}
*/
var measureTooltip;
/**
* Message to show when the user is drawing a polygon.
* @type {string}
*/
///////var continuePolygonMsg = "Click to continue drawing the polygon";
/**
* Message to show when the user is drawing a line.
* @type {string}
*/
var continueLineMsg = "Click to continue drawing the line";
var draw; // global so we can remove it later
/**
* Format length output.
* @param {module:ol/geom/LineString~LineString} line The line.
* @return {string} The formatted length.
*/
var formatLength = function (line) {
    var length = ol.sphere.getLength(line, {
        projection: "EPSG:4326",
    });
    //var length = getLength(line);
    //var length = line.getLength({projection:'EPSG:4326'});
    var output;
    if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + " " + "km";
    } else {
        output = Math.round(length * 100) / 100 + " " + "m";
    }
    return output;
};
/**
* Format area output.
* @param {module:ol/geom/Polygon~Polygon} polygon The polygon.
* @return {string}// Formatted area.
*/
var formatArea = function (polygon) {
    // var area = getArea(polygon);
    var area = ol.sphere.getArea(polygon, {
        projection: "EPSG:4326",
    });
    // var area = polygon.getArea();
    //alert(area);
    var output;
    if (area > 10000) {
        output = Math.round((area / 1000000) * 100) / 100 + " " + "km<sup>2</sup>";
    } else {
        output = Math.round(area * 100) / 100 + " " + "m<sup>2</sup>";
    }
    return output;
};
function addInteraction() {
    if (measuretype.value == "select" || measuretype.value == "clear") {
        if (draw) {
            map.removeInteraction(draw);
        }
        if (vectorLayer) {
            vectorLayer.getSource().clear();
        }
        if (helpTooltip) {
            map.removeOverlay(helpTooltip);
        }
        if (measureTooltipElement) {
            var elem = document.getElementsByClassName("tooltip tooltip-static");
            //$('#measure_tool').empty();
            //alert(elem.length);
            for (var i = elem.length - 1; i >= 0; i--) {
                elem[i].remove();
                //alert(elem[i].innerHTML);
            }
        }
        //var elem1 = elem[0].innerHTML;
        //alert(elem1);
    } else if (measuretype.value == "area" || measuretype.value == "length") {
        var type;
        if (measuretype.value == "area") {
            type = "Polygon";
        } else if (measuretype.value == "length") {
            type = "LineString";
        }
        //alert(type);
        //var type = (measuretype.value == 'area' ? 'Polygon' : 'LineString');
        draw = new ol.interaction.Draw({
            source: source,
            type: type,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: "rgba(255, 255, 255, 0.5)",
                }),
                stroke: new ol.style.Stroke({
                    color: "rgba(0, 0, 0, 0.5)",
                    lineDash: [10, 10],
                    width: 2,
                }),
                image: new ol.style.Circle({
                    radius: 5,
                    stroke: new ol.style.Stroke({
                        color: "rgba(0, 0, 0, 0.7)",
                    }),
                    fill: new ol.style.Fill({
                        color: "rgba(255, 255, 255, 0.5)",
                    }),
                }),
            }),
        });
        map.addInteraction(draw);
        createMeasureTooltip();
        createHelpTooltip();
        /**
         * Handle pointer move.
         * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt The event.
         */
        var pointerMoveHandler = function (evt) {
            if (evt.dragging) {
                return;
            }
            /** @type {string} */
            var helpMsg = "Click to start drawing";
            if (sketch) {
                var geom = sketch.getGeometry();
                if (geom instanceof ol.geom.Polygon) {
                    helpMsg = continuePolygonMsg;
                } else if (geom instanceof ol.geom.LineString) {
                    helpMsg = continueLineMsg;
                }
            }
            helpTooltipElement.innerHTML = helpMsg;
            helpTooltip.setPosition(evt.coordinate);
            helpTooltipElement.classList.remove("hidden");
        };
        map.on("pointermove", pointerMoveHandler);
        map.getViewport().addEventListener("mouseout", function () {
            helpTooltipElement.classList.add("hidden");
        });
        var listener;
        draw.on(
            "drawstart",
            function (evt) {
                // set sketch
                //vectorLayer.getSource().clear();
                sketch = evt.feature;
                /** @type {module:ol/coordinate~Coordinate|undefined} */
                var tooltipCoord = evt.coordinate;
                listener = sketch.getGeometry().on("change", function (evt) {
                    var geom = evt.target;
                    var output;
                    if (geom instanceof ol.geom.Polygon) {
                        output = formatArea(geom);
                        tooltipCoord = geom.getInteriorPoint().getCoordinates();
                    } else if (geom instanceof ol.geom.LineString) {
                        output = formatLength(geom);
                        tooltipCoord = geom.getLastCoordinate();
                    }
                    measureTooltipElement.innerHTML = output;
                    measureTooltip.setPosition(tooltipCoord);
                });
            },
            this
        );
        draw.on(
            "drawend",
            function () {
                measureTooltipElement.className = "tooltip tooltip-static";
                measureTooltip.setOffset([0, -7]);
                // unset sketch
                sketch = null;
                // unset tooltip so that a new one can be created
                measureTooltipElement = null;
                createMeasureTooltip();
                ol.Observable.unByKey(listener);
            },
            this
        );
    }
}
/**
* Creates a new help tooltip
*/
function createHelpTooltip() {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement("div");
    helpTooltipElement.className = "tooltip hidden";
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: "center-left",
    });
    map.addOverlay(helpTooltip);
}
/**
* Creates a new measure tooltip
*/
function createMeasureTooltip() {
    if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement("div");
    measureTooltipElement.className = "tooltip tooltip-measure";
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: "bottom-center",
    });
    map.addOverlay(measureTooltip);
}

//-----------------------summary table ---------------------------------//
const data1 = {
    'Zone 1': { wards: ['Ward 17', 'Ward 28', 'Ward 69', 'Ward 33', 'Ward 95', 'Ward 88', 'Ward 55', 'Ward 34', 'Ward 57', 'Ward 98', 'Ward 87', 'Ward 103',] },
    'Zone 2': { wards: ['Ward 46', 'Ward 79', 'Ward 26', 'Ward 58', 'Ward 8', 'Ward 78', 'Ward 90', 'Ward 104', 'Ward 21', 'Ward 107', 'Ward 61',] },
    'Zone 3': { wards: [] },
    'Zone 4': { wards: ['Ward 12', 'Ward 14', 'Ward 37', 'Ward 50', 'Ward 59', 'Ward 62', 'Ward 66', 'Ward 70', 'Ward 76', 'Ward 100'] },
    'Zone 5': { wards: [] },
    'Zone 6': { wards: [] },
};

const darkColors = ['#D49868', '#DB8888', '#FFC3A0', '#FF677D', '#45A882', '#CC6868', '#31A2AC', '#C9A655', '#D9BF77'];
let colorIndex = 0;

function getUniqueColor() {
    const color = darkColors[colorIndex % darkColors.length];
    colorIndex++;
    return color;
}

function navigateTo(tabName) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add active class to the clicked tab
    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('data-tab') === tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    if (tabName === 'Summary') {
        updateSummary();
    } else if (tabName === 'Zones') {
        if (selectedZone) {
            updateZones(selectedZone);
        } else {
            content.innerHTML = '<p>Select a zone from Summary to see details here.</p>';
        }
    } else if (tabName === 'Wards') {
        if (selectedZone) {
            updateWards(selectedZone);
        } else {
            content.innerHTML = '<p>Select a zone from Summary to see wards details here.</p>';
        }
    } else if (tabName === 'WardDetails') {
        if (selectedZone && selectedWard) {
            updateWardDetails(selectedZone, selectedWard);
        } else {
            content.innerHTML = '<p>Select a ward from Wards to see details here.</p>';
        }
    } else if (tabName === 'Amenities') {
        showAllZonesForAmenities();  // Display all zones when the "Amenities" tab is clicked
    }
    else if (tabName === 'View') {
        // Display all zones when the "Amenities" tab is clicked
    }
}
/*------------------------------------------------------- ward 3 detail function calling for api ----------------------------*/

let numberOfZonesWard3; // Declare this in the global scope or at least outside the functions
let totalRoadLengthWard3, totalRoadCountWard3, totalWardCountWard3;
let totalCountRedWard3, totalCountGreenWard3, totalCountYellowWard3;
let totalCountMajorWard3, totalCountMinorWard3;
let totalCountBOEWard3, totalCountInterlockingWard3, totalCountCCWard3, totalCountKachhaWard3, totalCountBitumenWard3;
let totalCountNNAWard3, totalCountPWDWard3, totalCountRailwayWard3, totalCountPVTWard3, totalCountNHAIWard3, totalCountUPSBCWard3;

function loadWard3() {
    fetch(`${BASE_URL}/getZone2Ward3`)
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                // Extract `zone_count` and `total_length_km` from the response
                // numberOfZones = data.zone_count;
                totalRoadLengthWard3 = data.total_length_km_ward3;
                totalRoadCountWard3 = data.total_length_count_ward3;

                totalCountRedWard3 = data.count_poor_ward3;
                totalCountGreenWard3 = data.count_good_ward3;
                totalCountYellowWard3 = data.count_moderate_ward3;

                totalCountMajorWard3 = data.ward3_major;
                totalCountMinorWard3 = data.ward3_minor;

                totalCountBOEWard3 = data.ward3_BOE;
                totalCountCCWard3 = data.ward3_CC;
                totalCountInterlockingWard3 = data.ward3_Interlocking;
                totalCountKachhaWard3 = data.ward3_Kachcha;
                totalCountBitumenWard3 = data.ward3_Bitumen;

                totalCountNNAWard3 = data.count_ward3_LNN;
                totalCountPWDWard3 = data.count_ward3_PWD;
                totalCountRailwayWard3 = data.count_Railway;
                totalCountPVTWard3 = data.count_ward3_PVT;
                totalCountNHAIWard3 = data.count_ward3_NHAI;
                totalCountUPSBCWard3 = data.count_ward3_UPSBC;


                let zoneName = "zone 2 ";
                let wardName = "Ward 3 ";

                console.log("numberOfZones:", numberOfZonesWard3);
                console.log("totalRoadLength1:", totalRoadLengthWard3);
                console.log("total_length_count", totalRoadCountWard3);
                console.log("total_ward_count", totalWardCountWard3);
                console.log("totalCountRed", totalCountRedWard3);
                console.log("totalCountGreen", totalCountGreenWard3);
                console.log("totalCountYellow", totalCountYellowWard3);
                console.log("totalCountMajor", totalCountMajorWard3);
                console.log("totalCountMinor", totalCountMinorWard3);
                console.log("totalCountBOE", totalCountBOEWard3);
                console.log("totalCountBitumen", totalCountBitumenWard3);
                console.log("totalCountKachha", totalCountKachhaWard3);
                console.log("totalCountInterlocking", totalCountInterlockingWard3);
                console.log("totalCountCC", totalCountCCWard3);

                updateWardDetails(
                    zoneName,
                    wardName,
                    totalRoadLengthWard3,
                    totalRoadCountWard3,
                    totalCountRedWard3,
                    totalCountGreenWard3,
                    totalCountYellowWard3,
                    totalCountMajorWard3,
                    totalCountMinorWard3,
                    totalCountBOEWard3,
                    totalCountBitumenWard3,
                    totalCountKachhaWard3,
                    totalCountInterlockingWard3,
                    totalCountCCWard3
                );

                // Now call the updateSummary function after setting numberOfZones and totalRoadLength
                // updateSummary(numberOfZones, totalRoadLength1, totalRoadCount, totalWardCount,
                //     totalCountRed, totalCountGreen, totalCountYellow, totalCountMinor, totalCountMajor,
                //     totalCountBitumen, totalCountCC, totalCountInterlocking, totalCountBOE, totalCountKachha,
                //     totalCountNNA, totalCountPWD, totalCountRailway, totalCountPVT, totalCountNHAI, totalCountUPSBC); // Ensure this is called here so that numberOfZones is defined
            } else {
                console.error('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}

/* ------------------------------zone no function calling-------------------------------*/
let numberOfZones; // Declare this in the global scope or at least outside the functions
let totalRoadLength1, totalRoadCount, totalWardCount;
let totalCountRed, totalCountGreen, totalCountYellow;
let totalCountMajor, totalCountMinor;
let totalCountBOE, totalCountInterlocking, totalCountCC, totalCountKachha, totalCountBitumen;
let totalCountNNA, totalCountPWD, totalCountRailway, totalCountPVT, totalCountNHAI, totalCountUPSBC;

// Function to fetch and display the number of zones
function loadZones() {
    fetch(`${BASE_URL}/geZone4CountLucknow`)
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                // Extract `zone_count` and `total_length_km` from the response
                numberOfZones = data.zone_count;
                totalRoadLength1 = data.total_length_km;
                totalRoadCount = data.total_length_count;
                totalWardCount = data.ayo_ward;

                totalCountRed = data.condition_count_red;
                totalCountGreen = data.condition_count_green;
                totalCountYellow = data.condition_count_yellow;

                totalCountMajor = data.count_major;
                totalCountMinor = data.count_minor;

                totalCountBOE = data.count_BOE;
                totalCountCC = data.count_CC;
                totalCountInterlocking = data.count_Interlocking;
                totalCountKachha = data.count_Kachha;
                totalCountBitumen = data.count_Bitumen;

                totalCountNNA = data.count_LNN;
                totalCountPWD = data.count_PWD;
                totalCountRailway = data.count_Railway;
                totalCountPVT = data.count_PVT;
                totalCountNHAI = data.count_NHAI;
                totalCountUPSBC = data.count_UPSBC;


                console.log("numberOfZones:", numberOfZones);
                console.log("totalRoadLength1:", totalRoadLength1);
                console.log("total_length_count", totalRoadCount);
                console.log("total_ward_count", totalWardCount);
                console.log("totalCountRed", totalCountRed);
                console.log("totalCountGreen", totalCountGreen);
                console.log("totalCountYellow", totalCountYellow);
                console.log("totalCountMajor", totalCountMajor);
                console.log("totalCountMinor", totalCountMinor);
                console.log("totalCountBOE", totalCountBOE);
                console.log("totalCountBitumen", totalCountBitumen);
                console.log("totalCountKachha", totalCountKachha);
                console.log("totalCountInterlocking", totalCountInterlocking);
                console.log("totalCountCC", totalCountCC);

                // Now call the updateSummary function after setting numberOfZones and totalRoadLength
                updateSummary(numberOfZones, totalRoadLength1, totalRoadCount, totalWardCount,
                    totalCountRed, totalCountGreen, totalCountYellow, totalCountMinor, totalCountMajor,
                    totalCountBitumen, totalCountCC, totalCountInterlocking, totalCountBOE, totalCountKachha,
                    totalCountNNA, totalCountPWD, totalCountRailway, totalCountPVT, totalCountNHAI, totalCountUPSBC); // Ensure this is called here so that numberOfZones is defined
            } else {
                console.error('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}

//-----------------------------------load zone 1 --------------------------------------------------------------------------------
let totalRoadLengthzone1; // Declare this in the global scope or at least outside the functions
let totalRoadMinorzone1, totalRoadMajorzone1;
let totalRoadCountzone1;
let totalCountNNAZone1, totalCountPWDZone1, totalCountNHAIZone1, totalCountPVT1Zone1, totalCountOtherZone1;
let totalCountGreenZone1, totalCountRedZone1, totalCountYellowZone1;
let totalBelowzone1, totalsix_to_nine_zone1, totalnine_to_tweleve_zone1, totalabove12zone1;
let totalCountBitumenZone1, totalCountCCZone1, totalCountInterlockingZone1, totalCountBOEZone1, totalCountKachhaZone1;
let totalCount14thZone1, totalCount15thZone1, totalCountNNNZone1, totalCountCUSOtherZone1;


function loadZones1() {
    fetch(`${BASE_URL1}/geZone1CountLucknow`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                // Assuming `data` is global or defined elsewhere
                totalRoadLengthzone1 = responseData.Zone1_total_length_met;
                totalRoadMinorzone1 = responseData.Zone1_Minor;
                totalRoadMajorzone1 = responseData.Zone1_Major;
                totalRoadCountzone1 = responseData.Zone1_total_length_count;
                //--------------------------cus----------------------------//
                totalCount14thZone1 = responseData.Zone1_14th_Finance;
                totalCount15thZone1 = responseData.Zone1_15th_Finance;
                totalCountNNNZone1 = responseData.Zone1_Nagar_Nigam_Nidhi;
                totalCountCUSOtherZone1 = responseData.Zone1_cus_other;

                totalCountNNAZone1 = responseData.Zone1_LNN;
                totalCountPWDZone1 = responseData.Zone1_PWD;
                totalCountNHAIZone1 = responseData.Zone1_NHAI;
                totalCountPVT1Zone1 = responseData.Zone1_PRIVATE_ROAD;
                totalCountOtherZone1 = responseData.Zone1_Other;
                //--------------- condition -----------------------------
                totalCountGreenZone1 = responseData.Zone1_green;
                totalCountRedZone1 = responseData.Zone1_red;
                totalCountYellowZone1 = responseData.Zone1_yellow;

                //------------------------------ rowcls --------------------------------------------------------------------
                totalBelowzone1 = responseData.Zone1_below_6;
                totalsix_to_nine_zone1 = responseData.Zone1_6_to_10;
                totalnine_to_tweleve_zone1 = responseData.Zone1_10_To_12;
                totalabove12zone1 = responseData.Zone1_Above_12;
                //--------------------------------Material --------------------------------------------------------------------
                totalCountBitumenZone1 = responseData.Zone1_Bitumen;
                totalCountCCZone1 = responseData.Zone1_CC;
                totalCountInterlockingZone1 = responseData.Zone1_Interlocking;
                totalCountKachhaZone1 = responseData.zone1_kachcha;

                console.log("totalBelowzone1" + totalBelowzone1);

                // Make sure the `data` object is correctly structured with zoneName keys
                data1["Zone 1"] = responseData; // Example of assigning data for the zone

                // console.log("totalRoadLengthzone2:", totalRoadLengthzone2);

                // Call updateZones with the correct zone name and total road length
                updateZones1("Zone 1", totalRoadLengthzone1, totalRoadMinorzone1, totalRoadMajorzone1, totalRoadCountzone1, totalCountNNAZone1,
                    totalCount14thZone1, totalCount15thZone1, totalCountNNNZone1, totalCountCUSOtherZone1
                    , totalCountPWDZone1, totalCountNHAIZone1, totalCountPVT1Zone1, totalCountOtherZone1, totalCountGreenZone1,
                    totalCountRedZone1, totalCountYellowZone1, totalCountBitumenZone1, totalCountCCZone1, totalCountInterlockingZone1,
                    totalCountBOEZone1, totalCountKachhaZone1,
                    totalBelowzone1, totalsix_to_nine_zone1, totalnine_to_tweleve_zone1, totalabove12zone1
                );
            } else {
                console.error('Error: ' + responseData.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}

//-----------------------------------load zone 2 --------------------------------------------------------------------------------
/*let totalRoadLengthzone2; // Declare this in the global scope or at least outside the functions
let totalRoadMinorzone2, totalRoadMajorzone2;
let totalRoadCountzone2;
let totalCountNNAZone2, totalCountPWDZone2, totalCountNHAIZone2, totalCountPVTZone2, totalCountUPSBCZone2;
let totalCountGreenZone2, totalCountRedZone2, totalCountYellowZone2;
// let totalP1zone2, totalP2zone2, totalNotEligiblezone2;
let totalBelowzone2, totalsix_to_nine_zone2, totalnine_to_tweleve_zone2, totalabove12zone2;
let totalCountBitumenZone2, totalCountCCZone2, totalCountInterlockingZone2, totalCountBOEZone2, totalCountKachhaZone2;

function loadZones2() {
    fetch(`${BASE_URL}/geZone4CountLucknow`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                // Assuming `data` is global or defined elsewhere
                totalRoadLengthzone2 = responseData.length_km1;
                totalRoadMinorzone2 = responseData.total_minor_sum1;
                totalRoadMajorzone2 = responseData.total_major_sum1;
                totalRoadCountzone2 = responseData.total_no_of_roads1;
                totalCountNNAZone2 = responseData.LNN1;
                totalCountPWDZone2 = responseData.PWD1;
                totalCountNHAIZone2 = responseData.NHAI1;
                totalCountPVTZone2 = responseData.PVT1;
                totalCountOtherZone2 = responseData.UPSBC1;
                totalCountGreenZone2 = responseData.count_green1;
                totalCountRedZone2 = responseData.count_red1;
                totalCountYellowZone2 = responseData.count_yellow1;


                totalBelowzone2 = responseData.below_61;
                totalsix_to_nine_zone2 = responseData.six_to_nine1;
                totalnine_to_tweleve_zone2 = responseData.nine_to_six1;
                totalabove12zone2 = responseData.above_121;

                totalCountBitumenZone2 = responseData.Bitumen1;
                totalCountCCZone2 = responseData.CC1;
                totalCountInterlockingZone2 = responseData.Interlocking1;
                totalCountBOEZone2 = responseData.BOE1;
                totalCountKachhaZone2 = responseData.Kachcha1;


                // Make sure the `data` object is correctly structured with zoneName keys
                data1["Zone 2"] = responseData; // Example of assigning data for the zone

                console.log("totalRoadLengthzone2:", totalRoadLengthzone2);

                // Call updateZones with the correct zone name and total road length
                updateZones("Zone 2", totalRoadLengthzone2, totalRoadMinorzone2, totalRoadMajorzone2, totalRoadCountzone2, totalCountNNAZone2
                    , totalCountPWDZone2, totalCountNHAIZone2, totalCountPVTZone2, totalCountOtherZone2, totalCountGreenZone2,
                    totalCountRedZone2, totalCountYellowZone2, totalCountBitumenZone2, totalCountCCZone2, totalCountInterlockingZone2,
                    totalCountBOEZone2, totalCountKachhaZone2,
                    totalBelowzone2, totalsix_to_nine_zone2, totalnine_to_tweleve_zone2, totalabove12zone2
                );
            } else {
                console.error('Error: ' + responseData.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}*/

//--------------------------------upload zone 4 ---------------------------------------------------------------------------------
let totalRoadLengthzone4, totalRoadCountzone4; // Declare this in the global scope or at least outside the functions
let totalRoadMinorzone4, totalRoadMajorzone4, totalRoadUnderPasszone4, totalRoadServicezone4, totalRoadNAzone4;
let totalCountNNAZone4, totalCountPWDZone4, totalCountNHAIZone4, totalCountPVTZone4, totalCountLDAZone4, totalCountOwnOtherZone4;
let totalCountGreenZone4, totalCountRedZone4, totalCountYellowZone4
let totalBelowZone4, totalsix_to_nine_Zone4, totalnine_to_tweleve_zone4, totalabove12zone4;
let totalCountBitumen4Zone4, totalCountCC4Zone4, totalCountInterlocking4Zone4, totalCountBOE4Zone4, totalCountKachha4Zone4;
let totalCount13thZone4, totalCount14thZone4, totalCount15thZone4, totalCountNNNZone4, totalCountCUSOthersZone4;
function loadZones4() {
    fetch(`${BASE_URL}/geZone4CountLucknow`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                // Assuming `data` is global or defined elsewhere
                totalRoadLengthzone4 = responseData.Zone4_total_length_met;
                totalRoadCountzone4 = responseData.Zone4_total_length_count;

                // totalRoadMinorzone4 = responseData.Zone4_Minor;
                //  totalRoadMajorzone4 = responseData.Zone4_Major;
                //  totalRoadUnderPasszone4 = responseData.Zone4_Under_Pass;
                //  totalRoadServicezone4 = responseData.Zone4_Service_Road4
                //  totalRoadNAzone4 = responseData.Zone4_NA;

                totalCountLNNZone4 = responseData.Zone4_LNN;
                totalCountPWDZone4 = responseData.Zone4_PWD;
                totalCountNHAIZone4 = responseData.Zone4_NHAI;
                totalCountPVT1Zone4 = responseData.Zone4_PRIVATE_ROAD;
                totalCountLDAZone4 = responseData.Zone4_LDA;
                totalCountOwnOtherZone4 = responseData.Zone4_Other;

                totalCountGreenZone4 = responseData.Zone4_green;
                totalCountRedZone4 = responseData.Zone4_red;
                totalCountYellowZone4 = responseData.Zone4_yellow;
                // totalP1zone3 = responseData.p1;
                // totalP2zone3 = responseData.p2;
                // totalNotEligiblezone3 = responseData.Not_eligible3;

                totalBelowZone4 = responseData.Zone4_below_6;
                totalsix_to_nine_Zone4 = responseData.Zone4_6_to_9;
                totalnine_to_tweleve_zone4 = responseData.Zone4_9_To_12;
                totalabove12zone4 = responseData.Zone4_Above_12;

                totalCountBitumen4Zone4 = responseData.Zone4_Bitumen;
                totalCountCC4Zone4 = responseData.Zone4_CC;
                totalCountInterlocking4Zone4 = responseData.Zone4_Interlocking;
                totalCountBOE4Zone4 = responseData.Zone4_BOE;
                totalCountKachha4Zone4 = responseData.zone4_kachcha;

                totalCount13thZone4 = responseData.Zone4_13th_Finance;
                totalCount14thZone4 = responseData.Zone4_14th_Finance;
                totalCount15thZone4 = responseData.Zone4_15th_Finance;
                totalCountNNNZone4 = responseData.Zone4_Nagar_Nidhi;
                totalCountCUSOthersZone4 = responseData.Zone4_cus_other;


                // Make sure the `data` object is correctly structured with zoneName keys
                data1["Zone 4"] = responseData; // Example of assigning data for the zone

                console.log("totalCount13thZone4:", totalCount13thZone4);

                // Call updateZones with the correct zone name and total road length
                updateZones4("Zone 4", totalRoadLengthzone4, totalRoadCountzone4,
                    // totalRoadMinorzone4, totalRoadMajorzone4,totalRoadUnderPasszone4, totalRoadServicezone4, totalRoadNAzone4,
                    totalCountLNNZone4, totalCountPWDZone4, totalCountNHAIZone4, totalCountPVT1Zone4, totalCountLDAZone4, totalCountOwnOtherZone4,

                    totalCountGreenZone4, totalCountRedZone4, totalCountYellowZone4,
                    totalBelowZone4, totalsix_to_nine_Zone4, totalnine_to_tweleve_zone4, totalabove12zone4,
                    totalCountBitumen4Zone4, totalCountCC4Zone4, totalCountInterlocking4Zone4, totalCountBOE4Zone4, totalCountKachha4Zone4,
                    totalCount13thZone4, totalCount14thZone4, totalCount15thZone4, totalCountNNNZone4, totalCountCUSOthersZone4

                );
            } else {
                console.error('Error: ' + responseData.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}

//----------------------------zone  card count summary --------------------------------------------------------------------------
// Function to handle the zone link click
function setCurrentZone(zone) {
    console.log('Selected Zone:', zone);
    // Add your logic to handle the zone selection
}

// Add event listener to the button with ID 'loadZonesButton'
document.getElementById('table_icon').addEventListener('click', loadZones);
document.getElementById('summary_id').addEventListener('click', loadZones);

// document.getElementById('summary_id').addEventListener('click', loadWard3);


function updateSummary(numberOfZones, totalRoadLength1, totalRoadCount, totalWardCount,
    totalCountRed, totalCountGreen, totalCountYellow, totalCountMinor, totalCountMajor,
    totalCountBitumen, totalCountCC, totalCountInterlocking, totalCountBOE, totalCountKachha,
    totalCountNNA, totalCountPWD, totalCountRailway, totalCountPVT, totalCountNHAI, totalCountUPSBC) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const zoneKeys = Object.keys(data1).filter(key => key !== 'Summary' && key !== 'View');


    // Create summary cards with the number of zones and other data
    const summaryCards = [
        {
            title: '<a href="javascript:void(0)" onclick="Lucknow_Zone_NO()" style=color:white>No. of Zones</a>',
            value: `<a href="javascript:void(0)" onclick="Lucknow_Zone_NO()" >8 </a>` // Use numberOfZones or show 'Loading...' if it's undefined
        },
        { title: '<a href="javascript:void(0)" style=color:white>Total Road Length</a>', value: `<a href="javascript:void(0)" onclick="Lucknow_Road_Length()" >9480.74 km</a>` },
        { title: '<a href="javascript:void(0)" style=color:white>Total No. of Roads</a>', value: `<a href="javascript:void(0)" onclick="Lucknow_Road_Count()" > 82354</a>` },
        { title: '<a href="javascript:void(0)" style=color:white>Total Ward No.</a>', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward_NO()" >110</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Condition()" style=color:white>Road Count by Condition</a>', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Condition_Good()" style=color:lightgreen> 18257</a><br>Moderate -<a href="javascript:void(0)" onclick="Lucknow_Condition_Moderate()" style=color:yellow> 35302</a><br>Poor -<a href="javascript:void(0)" onclick="Lucknow_Condition_Poor()" style=color:red>28786</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Type()" style=color:white>Road Count by Type</a>', value: `Major -<a href="javascript:void(0)" onclick="Lucknow_Type_Major()" style=color:blue>2135</a><br>Minor -<a href="javascript:void(0)" onclick="Lucknow_Type_Minor()" style=color:yellow>80219</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Material()" style=color:white>Road Count by Material</a>', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Material_Bitumen()" style=color:darkred>20465</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Material_CC()" style=color:#1ad7b0>9572</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Material_Interlocking()" style=color:#2392ed>24575</a><br>BOE -<a href="javascript:void(0)" onclick="Lucknow_Material_BOE()" style=color:#da6076>1365</a><br>Kachcha -<a href="javascript:void(0)" onclick="Lucknow_Material_Kachcha()" style=color:#6036d0>26165</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Ownership()" style=color:white>Road Count by Ownership</a>', value: `LNN  -<a href="javascript:void(0)" onclick="Lucknow_Ownership_LNN()" style=color:cyan>68206</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Ownership_PWD()" #69e70f>959</a><br>Private Road -<a href="javascript:void(0)" onclick="Lucknow_Ownership_PVT()" style=color:red> 1063</a><br>NHAI -<a href="javascript:void(0)" onclick="Lucknow_Ownership_NHAI()" style=color:blue> 16</a><br>LDA -<a href="javascript:void(0)" onclick="Lucknow_Ownership_LDA()" style=color:orange>1435</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_Ownership_Others()" style=color:#831042>10676</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_ROW()" style=color:white>ROW</a>', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_ROW_Below6()" style=color:#b71959>55861</a><br>6 to 10 -<a href="javascript:void(0)" onclick="Lucknow_ROW_6to10()" style=color:#dcbc1e> 24357</a><br>10 to 12 -<a href="javascript:void(0)" onclick="Lucknow_ROW_10to12()" style=color:#3aeeeb>193</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_ROW_Above12()" style=color:#2e6aae>1943</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_CUS()" style=color:white>Under Scheme</a>', value: `13th Finance -<a href="javascript:void(0)" onclick="Lucknow_CUS_13th()" style=color:#5b46d2> 204</a><br> 14th Finance -<a href="javascript:void(0)" onclick="Lucknow_CUS_14th()" style=color:#ba6209> 406</a><br>15th Finance -<a href="javascript:void(0)" onclick="Lucknow_CUS_15th()" style=color:#8a1515> 2549</a><br>Nagar Nigam Nidhi -<a href="javascript:void(0)" onclick="Lucknow_CUS_NNN()" style=color:#c3ec47> 47379</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_CUS_Others()" style=color:#ce37d3> 31816</a><br>` },

    ];

    // Create and append each card to the content div
    summaryCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundColor = getUniqueColor();
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.value}</p>
        `;
        content.appendChild(cardElement);
    });
}
//----------------------------------- dropdown zone -----------------------------------------------------------------
// Function to populate Zones Dropdown
const zone4BoundingBox = [
    80.96430376, 26.77765808, // Lower-left (minLon, minLat)
    81.06755982, 26.88986075  // Upper-right (maxLon, maxLat)
];

const zone1BoundingBox = [
    80.91614213, 26.83018522, // Lower-left (minLon, minLat)
    80.96777630, 26.86989151  // Upper-right (maxLon, maxLat)
];

const zone1Ward28BoundingBox = [
    80.93761837, // minLon (Lower-left)
    26.84653710, // minLat (Lower-left)
    80.96957708, // maxLon (Upper-right)
    26.86230434  // maxLat (Upper-right)
  ];
  

  const zone1Ward17BoundingBox = [
    80.93726485,
    26.83076986,
    80.97049624,
    26.85558735  ];

    const zone4Ward12BoundingBox =
    [
        80.98690007, // supposed to be minLon
        26.78151511, // supposed to be minLat
        
        81.04740366,
        26.84746596
    ];
    

    const zone4Ward14BoundingBox = [
        81.02211277,
        26.81439326,
        81.07308363,
        26.89240592,
        
    ];


   
   






  


function populateZonesDropdown() {
    const zonesDropdown = document.getElementById('zonesDropdown');
    zonesDropdown.innerHTML = ''; // Clear any existing content

    const zoneKeys = Object.keys(data1).filter(key => key !== 'Summary' && key !== 'View');
    zoneKeys.forEach(zoneName => {
        const zoneElement = document.createElement('a');
        zoneElement.href = "#";
        zoneElement.innerHTML = zoneName;

        // Attach different functions based on the zone name
        if (zoneName === 'Zone 2') {
            zoneElement.onclick = function () {
                loadZones2();
                populateWardsDropdown('Zone 2');
                updateZones('Zone 2',); // Populate wards dropdown for Zone 2
                return false;
            };
        } else if (zoneName === 'Zone 1') {
            zoneElement.onclick = function () {
                loadZones1();
                populateWardsDropdown('Zone 1');
                updateZones('Zone 1',);// Populate wards dropdown for Zone 2
                const extent1 = zone1BoundingBox; // No transformation needed
                map.getView().fit(extent1, {
                    duration: 1000,  // Animation duration in milliseconds
                    maxZoom: 17      // Set your desired maximum zoom level
                });
                fetchZone_oneData();
                return false;
            };
        }
        else if (zoneName === 'Zone 4') {
            zoneElement.onclick = function () {
                loadZones4();
                populateWardsDropdown('Zone 4');
                updateZones('Zone 4');// Populate wards dropdown for Zone 2
                // Zoom to the bounding box for Zone 4
                const extent = zone4BoundingBox; // No transformation needed
                map.getView().fit(extent, { duration: 1000 });
                fetchZoneData();
                return false;

            };
        }
        else {
            zoneElement.onclick = function () {
                showZoneDetails(zoneName);
                return false;
            };
        }
        zonesDropdown.appendChild(zoneElement);
    });
}

//------------------------------- ward populate -------------------------------------------------------------------------------
function populateWardsDropdown(zoneName) {
    const wardsDropdown = document.getElementById('zonesDropdownwards');
    wardsDropdown.innerHTML = ''; // Clear any existing content

    // Fetch the wards data based on the selected zone
    const wards = data1[zoneName].wards;

    // Populate the wards dropdown with ward names
    wards.forEach(wardName => {
        const wardElement = document.createElement('a');
        wardElement.href = "#";
        wardElement.innerHTML = wardName;

        // wardElement.onclick = function () {
        //     // Check the ward name and call the appropriate function
        //     if (wardName === 'Ward 17') {
        //         console.log("calling the load3");
        //         updateWardDetails17(zoneName, wardName);  // This function call may need correct parameters
        //     }
        //     else if (wardName === 'Ward 95') {
        //         updateWardDetails95(zoneName, wardName);  // Update for Ward 5
        //     } else {
        //         // Default action or other wards handling
        //         updateWardDetails(zoneName, wardName);  // This function call may need correct parameters
        //     }
        //     return false;  // Prevent default action
        // };

        if (wardName === 'Ward 17') {
            wardElement.onclick = function () {
                const extent17 = zone1Ward17BoundingBox; // No transformation needed
                map.getView().fit(extent17, {
                    duration: 1000,  // Animation duration in milliseconds
                    maxZoom: 17      // Set your desired maximum zoom level
                });
                updateWardDetails17(zoneName, wardName);
                fetchZoneWard17Data();

                return false;
            };
        } else if (wardName === 'Ward 28') {
            wardElement.onclick = function () {
                const extent28 = zone1Ward28BoundingBox; // No transformation needed
                map.getView().fit(extent28, {
                    duration: 1000,  // Animation duration in milliseconds
                    maxZoom: 17      // Set your desired maximum zoom level
                });
                updateWardDetails28(zoneName, wardName);
                fetchZoneWard28Data();

                return false;
            };
        } else if (wardName === 'Ward 12') {
            wardElement.onclick = function () {
                updateWardDetails12(zoneName, wardName);
                const extent12 = zone4Ward12BoundingBox; // No transformation needed
                map.getView().fit(extent12, {
                    duration: 1000,  // Animation duration in milliseconds
                    maxZoom: 17      // Set your desired maximum zoom level
                });
                fetchZoneWard12Data();
                return false;
            };
        } else if (wardName === 'Ward 14') {
            wardElement.onclick = function () {
                updateWardDetails14(zoneName, wardName);
                const extent14= zone4Ward14BoundingBox; // No transformation needed
                map.getView().fit(extent14, {
                    duration: 1000,  // Animation duration in milliseconds
                    maxZoom: 17      // Set your desired maximum zoom level
                });
                fetchZoneWard14Data();
                return false;
            };
        }




        wardsDropdown.appendChild(wardElement);
    });
}

function showZoneDetails(zoneName) {
    // This function will be used to navigate to zone details or to show them in some way.
    // Implement the logic based on your requirement
    console.log("Selected zone: " + zoneName);
    showAllZones(); // Or use another function to show the selected zone details
}
// Call this function on page load to populate the dropdown with zones
populateZonesDropdown();

function showAllZones() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Handle active class for the Zones tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const zonesTab = document.querySelector('[data-tab="Zones"]');
    if (zonesTab) {
        zonesTab.classList.add('active');
    }

    const zoneKeys = Object.keys(data1).filter(key => key !== 'Summary' && key !== 'View');

    zoneKeys.forEach(zoneName => {
        const zoneData = data1[zoneName];

        // Create a container for each zone and a dropdown list for wards
        const zoneContainer = document.createElement('div');
        zoneContainer.className = 'zone-container';

        const zoneElement = document.createElement('div');
        zoneElement.className = 'card';
        zoneElement.style.backgroundColor = getUniqueColor();
        zoneElement.innerHTML = `
            <h4>${zoneName}</h4>
            <a href="#" onclick="toggleDropdown('${zoneName}'); return false;">Toggle Wards</a>
        `;

        // Create a dropdown container for the wards
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown';
        dropdown.id = `dropdown-${zoneName}`;
        dropdown.style.display = 'none'; // Initially hidden

        // Add each ward to the dropdown
        const wards = Object.keys(zoneData.wards);
        wards.forEach(wardName => {
            const wardElement = document.createElement('div');
            wardElement.className = 'ward-item';
            wardElement.innerHTML = `
                <p>${wardName}</p>
                <a href="#" onclick="setCurrentWard('${zoneName}', '${wardName}'); return false;">View Details</a>
            `;
            dropdown.appendChild(wardElement);
        });

        // Append the dropdown to the zone container
        zoneContainer.appendChild(zoneElement);
        zoneContainer.appendChild(dropdown);

        // Append the zone container to the content
        content.appendChild(zoneContainer);
    });
}

function toggleDropdown(zoneName) {
    const dropdown = document.getElementById(`dropdown-${zoneName}`);
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function setCurrentWard(zoneName, wardName) {
    selectedZone = zoneName;
    selectedWard = wardName;
    navigateTo('WardDetails');
}

// Call this function to initially show all zones
function setCurrentZone(zoneName) {
    selectedZone = zoneName;
    // navigateTo('Zones');
    updateZones(zoneName);
}

// ------------------------------------------update Zone 2 wise details-----------------------------------------------------------------------
function updateZones(zoneName, totalRoadLengthzone2, totalRoadMinorzone2, totalRoadMajorzone2, totalRoadCountzone2,
    totalCountNNAZone2, totalCountPWDZone2, totalCountNHAIZone2, totalCountPVTZone2, totalCountUPSBCZone2,
    totalCountGreenZone2, totalCountRedZone2, totalCountYellowZone2, totalCountBitumenZone2, totalCountCCZone2,
    totalCountInterlockingZone2, totalCountBOEZone2, totalCountKachhaZone2,
    totalBelowzone2,
    totalsix_to_nine_zone2, totalnine_to_tweleve_zone2, totalabove12zone2


) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (zoneName) {
        // Display a card showing which zone's wards are being displayed
        const zoneInfoCard = document.createElement('div');
        zoneInfoCard.className = 'card';
        zoneInfoCard.style.backgroundColor = '#5072A7';
        zoneInfoCard.style.alignContent = 'center';
        zoneInfoCard.style.textAlign = 'center';
        zoneInfoCard.style.color = 'white';
        zoneInfoCard.innerHTML = `<h4>${zoneName}</h4>`;
        content.appendChild(zoneInfoCard);

        if (!data1[zoneName]) {
            content.innerHTML = '<p>No data available for this zone.</p>';
            return;
        }

        // Display zone details
        const zoneCards = [
            { title: 'Road Type', value: `Major -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Type_Major()">${totalRoadMajorzone2}</a><br>Minor -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Type_Minor()"> ${totalRoadMinorzone2}</a>` },
            { title: 'Total Road Length', value: `<a href="javascript:void(0)" onclick="Lucknow_Road_Zone2_Length()" >${totalRoadLengthzone2} km</a>` },  // Displaying total road length
            { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Lucknow_Road_Zone2_Count()" >${totalRoadCountzone2}</a>` },
            //{ title: 'ROW', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_Zone2_ROW_Below6()">${totalBelowzone2}</a><br>6 to 9 -<a href="javascript:void(0)" onclick="Lucknow_Zone2_ROW_6to9()"> ${totalsix_to_nine_zone2}</a><br>9 to 12 -<a href="javascript:void(0)" onclick="Lucknow_Zone2_ROW_9to12()"> ${totalnine_to_tweleve_zone2}</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_Zone2_ROW_Above12()"> ${totalabove12zone2}</a>` },
            { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Condition_Good()"> ${totalCountGreenZone2}</a><br>Poor -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Condition_Poor()"> ${totalCountRedZone2}</a><br>Moderate -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Condition_Moderate()">${totalCountYellowZone2}</a>` },
            { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Material_Bitumen()"> ${totalCountBitumenZone2}</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Material_CC()">${totalCountCCZone2}</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Material_Interlocking()">${totalCountInterlockingZone2}</a><br>BOE -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Material_BOE()">${totalCountBOEZone2}</a><br>Kachcha -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Material_Kachcha()">${totalCountKachhaZone2}</a>` },
            { title: 'Ownership', value: `LNN  -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Ownership_LNN()">${totalCountNNAZone2}</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Ownership_PWD()">${totalCountPWDZone2}</a><br>NHAI - <a href="javascript:void(0)" onclick="Lucknow_Zone2_Ownership_NHAI()">${totalCountNHAIZone2}</a><br>UPSBC Ltd -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Ownership_UPSBC()">${totalCountUPSBCZone2}</a>` },     //<br>PVT -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Ownership_PVT()"> ${totalCountPVTZone2}</a>,
            //  { title: 'Slum Data', value: `Total No. Of Slum  -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Slum_Count()"> 12</a> <br>Total No. Of Road -<a href="javascript:void(0)" onclick="Lucknow_Zone2_SlumRoad_Count()"> 148 , Length- -11.22 Km </a> `},

        ];

        zoneCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });

        // Check if the zone has wards and display their count
        if (data1[zoneName].wards) {
            const wardsCount = Object.keys(data1[zoneName].wards).length;

            const viewWardsCard = document.createElement('div');
            viewWardsCard.className = 'card';
            viewWardsCard.style.backgroundColor = getUniqueColor();
            viewWardsCard.innerHTML = `
                <h4>Total Wards</h4>
                <p>${wardsCount}</p>
            `;
            content.appendChild(viewWardsCard);
        }
    } else {
        showAllZones(); // Display the list of all zones if no specific zone is selected
    }
}

//---------------------------- update zone 1 ------------------------------------------------------------------------//
function updateZones1(zoneName, totalRoadLengthzone1, totalRoadMinorzone1, totalRoadMajorzone1, totalRoadCountzone1, totalCountNNAZone1,
    totalCount14thZone1, totalCount15thZone1, totalCountNNNZone1, totalCountCUSOtherZone1
    , totalCountPWDZone1, totalCountPVT1Zone1, totalCountOtherZone1, totalCountGreenZone1,
    totalCountRedZone1, totalCountYellowZone1, totalCountBitumenZone1, totalCountCCZone1, totalCountInterlockingZone1,
    totalCountKachhaZone1,
    totalBelowzone1, totalsix_to_nine_zone1, totalnine_to_tweleve_zone1, totalabove12zone1,
    // totalCountNHAIZone1, totalCountBOEZone1,


) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (zoneName) {
        // Display a card showing which zone's wards are being displayed
        const zoneInfoCard = document.createElement('div');
        zoneInfoCard.className = 'card';
        zoneInfoCard.style.backgroundColor = '#5072A7';
        zoneInfoCard.style.alignContent = 'center';
        zoneInfoCard.style.textAlign = 'center';
        zoneInfoCard.style.color = 'white';
        zoneInfoCard.innerHTML = `<h4>${zoneName}</h4>`;
        content.appendChild(zoneInfoCard);

        if (!data1[zoneName]) {
            content.innerHTML = '<p>No data available for this zone.</p>';
            return;
        }

        // Display zone details
        const zoneCards = [
            { title: '<a href="javascript:void(0)" id=zone1type onclick="Lucknow_Z1_Type()" style=color:white>Road Type</a>', value: `Major -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Type_Major()" style=color:blue>294</a><br>Minor - <a href="javascript:void(0)" onclick="Lucknow_Zone1_Type_Minor()" style=color:yellow>5578</a>` },
            { title: '<a href="javascript:void(0)"  style=color:white>Total Road Length</a>', value: `<a href="javascript:void(0)" onclick="Lucknow_Zone1_Road_Length()"> 420.57 km</a>` },  // Displaying total road length
            { title: '<a href="javascript:void(0)"  style=color:white>Total No. of Roads</a>', value: `<a href="javascript:void(0)" onclick="Lucknow_Zone1_Road_Count()" >5872</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z1_Condition()" style=color:white>Road Condition</a>', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Condition_Good()"style=color:yellowgreen>5146</a><br>Moderate - <a href="javascript:void(0)" onclick="Lucknow_Zone1_Condition_Moderate()" style=color:yellow>204</a><br>Poor -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Condition_Poor()" style=color:red>27</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z1_Material()" style=color:white>Materials</a>', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Material_Bitumen()"style=color:darkred> 1016</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Material_CC()" style=color:#1ad7b0>3684</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Material_Interlocking()" style=color:#2392ed>1158</a><br>Kachcha -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Material_Kachcha()" style=color:#6036d0>8</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z1_Ownership()" style=color:white>Ownership</a>', value: `LNN  -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Ownership_LNN()" style=color:cyan>5352</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Ownership_PWD()" style=color:#69e70f>144</a><br>NHAI -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Ownership_NHAI()" style=color:blue>0</a><br>Private Road -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Ownership_Private_Road()" style=color:red>256</a><br>LDA -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Ownership_LDA()" style=color:orange>7</a><br>Other -<a href="javascript:void(0)" onclick="Lucknow_Zone1_Ownership_Other()" style=color:#831042>113</a>,` },    // <br>PVT -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Ownership_PVT()"> ${totalCountPVTZone2}</a>,
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z1_CUS()" style=color:white>Under Scheme</a>', value: `14th Finance -<a href="javascript:void(0)" onclick="Lucknow_Zone1_CUS_14th()" style=color:#ba6209>56</a><br>15th Finance -<a href="javascript:void(0)" onclick="Lucknow_Zone1_CUS_15th()" style=color:#8a1515>233</a><br>Nagar Nigam Nidhi -<a href="javascript:void(0)" onclick="Lucknow_Zone1_CUS_NNN()" style=color:#c3ec47>4982</a><br>Other -<a href="javascript:void(0)" onclick="Lucknow_Zone1_CUS_Other()" style=color:#ce37d3>576</a>,` },    // <br>PVT -<a href="javascript:void(0)" onclick="Lucknow_Zone2_Ownership_PVT()"> ${totalCountPVTZone2}</a>,
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z1_ROW()" style=color:white>ROW</a>', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_Zone1_ROW_Below6()" style=color:#b71959>5036</a><br>6 to 10 -<a href="javascript:void(0)" onclick="Lucknow_Zone1_ROW_6to10()" style=color:#dcbc1e>659</a><br>10 to 12 -<a href="javascript:void(0)" onclick="Lucknow_Zone1_ROW_10to12()" style=color:cyan>9</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_Zone1_ROW_Above12()" style=color:#2e6aae> 143</a>` },

        ];


        zoneCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });

        // Check if the zone has wards and display their count
        if (data1[zoneName].wards) {
            const wardsCount = Object.keys(data1[zoneName].wards).length;

            const viewWardsCard = document.createElement('div');
            viewWardsCard.className = 'card';
            viewWardsCard.style.backgroundColor = getUniqueColor();
            viewWardsCard.innerHTML = `
                <h4>Total Wards</h4>
                <p>${wardsCount}</p>
            `;
            content.appendChild(viewWardsCard);
        }
    } else {
        showAllZones(); // Display the list of all zones if no specific zone is selected
    }
}

//---------------------------------- update zone 4 ----------------------------------------------------------------------------
function updateZones4(zoneName, totalRoadLengthzone4, totalRoadCountzone4,
    // totalRoadMinorzone4, totalRoadMajorzone4,        //totalRoadUnderPasszone4, totalRoadServicezone4, totalRoadNAzone4,
    totalCountLNNZone4, totalCountPWDZone4, totalCountNHAIZone4, totalCountPVT1Zone4, totalCountLDAZone4, totalCountOwnOtherZone4,

    totalCountGreenZone4, totalCountRedZone4, totalCountYellowZone4,
    totalBelowZone4, totalsix_to_nine_Zone4, totalnine_to_tweleve_zone4, totalabove12zone4,
    totalCountBitumen4Zone4, totalCountCC4Zone4, totalCountInterlocking4Zone4, totalCountBOE4Zone4, totalCountKachha4Zone4,
    totalCount13thZone4, totalCount14thZone4, totalCount15thZone4, totalCountNNNZone4, totalCountCUSOthersZone4


) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (zoneName) {
        // Display a card showing which zone's wards are being displayed
        const zoneInfoCard = document.createElement('div');
        zoneInfoCard.className = 'card';
        zoneInfoCard.style.backgroundColor = '#5072A7';
        zoneInfoCard.style.alignContent = 'center';
        zoneInfoCard.style.textAlign = 'center';
        zoneInfoCard.style.color = 'white';
        zoneInfoCard.innerHTML = `<h4>${zoneName}</h4>`;
        content.appendChild(zoneInfoCard);

        if (!data1[zoneName]) {
            content.innerHTML = '<p>No data available for this zone.</p>';
            return;
        }

        // Display zone details
        const zoneCards = [
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z4_Type()" style=color:white>Road Type</a>', value: `Urban Exprees Way - <a href="javascript:void(0)" onclick="Lucknow_Zone4_Type_Urban()" style=color:purple>2</a><br>Arterial -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Type_Arterial()" style=color:blue>17</a><br>Sub Arterial - <a href="javascript:void(0)" onclick="Lucknow_Zone4_Type_Sub_Arterial()" style=color:cyan>56</a><br>Collector - <a href="javascript:void(0)" onclick="Lucknow_Zone4_Type_Collector()" style=color:yellowgreen>95</a><br>Local Street - <a href="javascript:void(0)" onclick="Lucknow_Zone4_Type_LocalStreet()" style=color:yellow>7624</a>` },
            { title: '<a href="javascript:void(0)"  style=color:white>Total Road Length</a>', value: `<a href="javascript:void(0)" onclick="Lucknow_Zone4_Road_Length()" >${totalRoadLengthzone4} km</a>` },  // Displaying total road length
            { title: '<a href="javascript:void(0)"  style=color:white>Total No. of Roads</a>', value: `<a href="javascript:void(0)" onclick="Lucknow_Zone4_Road_Count()" >${totalRoadCountzone4}</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z4_Condition()" style=color:white>Road Condition</a>', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Condition_Good()" style=color:lightgreen> ${totalCountGreenZone4}</a><br>Moderate - <a href="javascript:void(0)" onclick="Lucknow_Zone4_Condition_Moderate()" style=color:yellow>${totalCountYellowZone4}</a><br>Poor -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Condition_Poor()" style=color:red> ${totalCountRedZone4}</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z4_Material()" style=color:white>Materials</a>', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Material_Bitumen()" style=color:darkred> ${totalCountBitumen4Zone4}</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Material_CC()" style=color:#1ad7b0>${totalCountCC4Zone4}</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Material_Interlocking()" style=color:#2392ed>${totalCountInterlocking4Zone4}</a><br>BOE -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Material_BOE1()" style=color:#da6076>${totalCountBOE4Zone4}</a><br>Kachcha -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Material_Kachcha()" style=color:#6036d0>${totalCountKachha4Zone4}</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z4_Ownership()" style=color:white>Ownership</a>', value: `LNN  -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Ownership_LNN()" style=color:cyan>${totalCountLNNZone4}</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Ownership_PWD()" style=color:#69e70f>${totalCountPWDZone4}</a><br>NHAI -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Ownership_NHAI()" style=color:blue> ${totalCountNHAIZone4}</a><br>Private Road -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Ownership_Private_Road()" style=color:red> ${totalCountPVT1Zone4}</a><br>LDA -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Ownership_LDA()" style=color:orange>${totalCountLDAZone4}</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_Zone4_Ownership_Other()" style=color:#831042>${totalCountOwnOtherZone4}</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z4_CUS()" style=color:white>Under Scheme</a>', value: `13th  -<a href="javascript:void(0)" onclick="Lucknow_Zone4_CUS_13th()" style=color:#5b46d2>${totalCount13thZone4}</a><br>14th -<a href="javascript:void(0)" onclick="Lucknow_Zone4_CUS_14th()" style=color:#ba6209>${totalCount14thZone4}</a><br>15th -<a href="javascript:void(0)" onclick="Lucknow_Zone4_CUS_15th()"style=color:#8a1515> ${totalCount15thZone4}</a><br>Nagar NIgam Nidhi-<a href="javascript:void(0)" onclick="Lucknow_Zone4_CUS_NNN()" style=color:#c3ec47> ${totalCountNNNZone4}</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_Zone4_CUS_Others()" style=color:#ce37d3>${totalCountCUSOthersZone4}</a>` },
            { title: '<a href="javascript:void(0)" onclick="Lucknow_Z4_ROW()" style=color:white>ROW</a>', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_Zone4_ROW_Below6()" style=color:#b71959>${totalBelowZone4}</a><br>6 to 10 -<a href="javascript:void(0)" onclick="Lucknow_Zone4_ROW_6to10()" style=color:#dcbc1e>5780</a><br>10 to 12 -<a href="javascript:void(0)" onclick="Lucknow_Zone4_ROW_10to12()" style=color:cyan>2</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_Zone4_ROW_Above12()" style=color:#2e6aae> ${totalabove12zone4}</a>` },

        ];

        zoneCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });

        // Check if the zone has wards and display their count
        if (data1[zoneName].wards) {
            const wardsCount = Object.keys(data[zoneName].wards).length;

            const viewWardsCard = document.createElement('div');
            viewWardsCard.className = 'card';
            viewWardsCard.style.backgroundColor = getUniqueColor();
            viewWardsCard.innerHTML = `
                <h4>Total Wards</h4>
                <p>${wardsCount}</p>
            `;
            content.appendChild(viewWardsCard);
        }
    } else {
        showAllZones(); // Display the list of all zones if no specific zone is selected
    }
}

//--------------------------------------ward wise Deatils -------------------------------------------------------------------------
function updateWards(zoneName) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Display a card showing which zone's wards are being displayed
    const wardInfoCard = document.createElement('div');
    wardInfoCard.className = 'card';
    wardInfoCard.style.backgroundColor = '#5072A7';
    wardInfoCard.style.alignContent = 'center';
    wardInfoCard.style.textAlign = 'center';
    wardInfoCard.style.color = 'white';
    wardInfoCard.innerHTML = `
        <h4> Wards in ${zoneName}</h4>
    `;
    content.appendChild(wardInfoCard);

    if (!data1[zoneName] || !data1[zoneName].wards) {
        const noWardsCard = document.createElement('div');
        noWardsCard.className = 'card';
        noWardsCard.style.backgroundColor = getUniqueColor();
        noWardsCard.innerHTML = '<p>No wards data available for this zone.</p>';
        content.appendChild(noWardsCard);
        return;
    }

    const wards = data1[zoneName].wards;
    Object.keys(wards).forEach(wardName => {
        const ward = wards[wardName];
        const wardElement = document.createElement('div');
        wardElement.className = 'card';
        wardElement.style.backgroundColor = getUniqueColor();
        wardElement.innerHTML = `
            <h4>${wardName}</h4>
            <p>Total No. of Roads: ${ward.totalRoads}</p>
            <a href="#${wardName}" onclick="setCurrentWard('${wardName}'); return false;">View Details</a>
        `;
        content.appendChild(wardElement);
    });
}

function updateWardDetails17(zoneName, wardName,) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Handle active class for the Zones tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const wardsTab = document.querySelector('[data-tab="Wards"]');
    if (wardsTab) {
        wardsTab.classList.add('active');
    }

    const wardInfoCard = document.createElement('div');
    wardInfoCard.className = 'card';
    wardInfoCard.style.backgroundColor = '#5072A7';
    wardInfoCard.style.alignContent = 'center';
    wardInfoCard.style.textAlign = 'center';
    wardInfoCard.style.color = 'white';
    wardInfoCard.innerHTML = `<h4>${wardName}</h4>`;
    content.appendChild(wardInfoCard);

    // const wardData = data1[zoneName].wards[wardName];
    // console.log("wardData : " + wardData);

    const details = [
        { title: 'Road Type', value: `Major -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Type_Major()">95</a><br>Minor -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Type_Minor()">599</a>` },
        { title: 'Road Length', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward17_Road_Length()">67.52 km</a>` },
        { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward17_Road_Count()">694</a>` },
        { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Condition_Good()"> 600</a><br>Moderate -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Condition_Moderate()"> 5</a><br>Poor -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Condition_Poor()"> 1</a>` },
        { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Material_Bitumen()"> 251</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Material_CC()"> 385</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Material_Interlocking()"> 78</a>` },
        { title: 'Ownership', value: `LNN -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Own_LNN()"> 601</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Own_PWD()"> 66</a><br>LDA -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Own_LDA()"> 7</a><br>Private Road-<a href="javascript:void(0)" onclick="Lucknow_Ward17_Own_Private_Road()"> 4 </a><br> Others -<a href="javascript:void(0)" onclick="Lucknow_Ward17_Own_Others()"> 14</a>` },
        { title: 'Under Scheme', value: `14th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward17_CUS_14th()"> 1</a><br>15th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward17_CUS_15th()"> 51</a><br>Nagar Nigam Nidhi -<a href="javascript:void(0)" onclick="Lucknow_Ward17_CUS_NNN()"> 548</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_Ward17_CUS_Others()"> 93</a><br>` },
        { title: 'ROW', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_Ward17_ROW_Below6()">509</a><br>6 to 10 -<a href="javascript:void(0)" onclick="Lucknow_Ward17_ROW_6to10()"> 147</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_Ward17_ROW_Above12()"> 37</a>` },

    ];

    details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.className = 'card';
        detailElement.style.backgroundColor = getUniqueColor();
        detailElement.innerHTML = `<h4>${detail.title}</h4><p>${detail.value}</p>`;
        content.appendChild(detailElement);
    });

}

//---------------------------------------  ward 28 --------------------------------------------------------------------
function updateWardDetails28(zoneName, wardName) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    // Handle active class for the Zones tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const wardsTab = document.querySelector('[data-tab="Wards"]');
    if (wardsTab) {
        wardsTab.classList.add('active');
    }
    // if (!data[zoneName] || !data[zoneName].wards || !data[zoneName].wards[wardName]) {
    //     content.innerHTML = '<p>No details available for this ward.</p>';
    //     return;
    // }
    const wardInfoCard = document.createElement('div');
    wardInfoCard.className = 'card';
    wardInfoCard.style.backgroundColor = '#5072A7';
    wardInfoCard.style.alignContent = 'center';
    wardInfoCard.style.textAlign = 'center';
    wardInfoCard.style.color = 'white';
    wardInfoCard.innerHTML = `<h4> ${wardName}</h4> `;
    content.appendChild(wardInfoCard);

    // const wardData = data1[zoneName].wards[wardName];
    const details = [
        { title: 'Road Type', value: `Major -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Type_Major()">31</a><br>Minor -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Type_Minor()">260</a>` },
        { title: 'Road Length', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward28_Road_Length()">39.412 km</a>` },
        { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward28_Road_Count()">291</a>` },
        { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Condition_Good()"> 139</a><br>Moderate -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Condition_Moderate()"> 7</a>` },
        { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Material_Bitumen()"> 132</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Material_CC()"> 91</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Material_Interlocking()"> 58</a><br>Kachcha <a href="javascript:void(0)" onclick="Lucknow_Ward28_Material_Kachcha()">- 8</a>` },
        { title: 'Ownership', value: `LNN -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Own_LNN()"> 146</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Own_PWD()"> 14</a><br>Private Road-<a href="javascript:void(0)" onclick="Lucknow_Ward28_Own_Private_Road()"> 141</a> <br> Others -<a href="javascript:void(0)" onclick="Lucknow_Ward28_Own_Others()"> 17</a>` },
        { title: 'Under Scheme', value: `14th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward28_CUS_14th()"> 3</a><br>15th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward28_CUS_15th()"> 11</a><br>Nagar Nigam Nidhi -<a href="javascript:void(0)" onclick="Lucknow_Ward28_CUS_NNN()"> 129</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_Ward28_CUS_Others()"> 147</a><br>` },
        { title: 'ROW', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_Ward28_ROW_Below6()">207</a><br>6 to 10 -<a href="javascript:void(0)" onclick="Lucknow_Ward28_ROW_6to10()"> 70</a><br>10 to 12 -<a href="javascript:void(0)" onclick="Lucknow_Ward28_ROW_10to12()"> 2</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_Ward28_ROW_Above12()"> 11</a>` },

    ];

    details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.className = 'card';
        detailElement.style.backgroundColor = getUniqueColor();
        detailElement.innerHTML = `
            <h4>${detail.title}</h4>
            <p>${detail.value}</p>
        `;
        content.appendChild(detailElement);
    });
}

let selectedZone = null;
let selectedWard = null;


function setCurrentWard(wardName) {
    selectedWard = wardName;
    navigateTo('WardDetails');
}
function removeWards() {
    selectedWard = ''; // Clear current ward selection
    const content = document.getElementById('content');
    content.innerHTML = '';
}

//---------------------------------------  ward 12 --------------------------------------------------------------------
function updateWardDetails12(zoneName, wardName) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    // Handle active class for the Zones tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const wardsTab = document.querySelector('[data-tab="Wards"]');
    if (wardsTab) {
        wardsTab.classList.add('active');
    }
    // if (!data[zoneName] || !data[zoneName].wards || !data[zoneName].wards[wardName]) {
    //     content.innerHTML = '<p>No details available for this ward.</p>';
    //     return;
    // }
    const wardInfoCard = document.createElement('div');
    wardInfoCard.className = 'card';
    wardInfoCard.style.backgroundColor = '#5072A7';
    wardInfoCard.style.alignContent = 'center';
    wardInfoCard.style.textAlign = 'center';
    wardInfoCard.style.color = 'white';
    wardInfoCard.innerHTML = `<h4> ${wardName}</h4> `;
    content.appendChild(wardInfoCard);

    // const wardData = data1[zoneName].wards[wardName];
    const details = [
        { title: 'Road Type', value: `Urban Express Way -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Type_Urban_express_way()">1</a><br>Arterial -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Type_Arterial()">3</a><br>Sub Arterial -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Type_Sub_Arterial()">8</a><br>Collectors -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Type_Collectors()">9</a><br>Local Street -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Type_local_street()">1651</a>` },
        { title: 'Road Length', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward12_Road_Length()">274.28 km</a>` },
        { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward12_Road_Count()">291</a>` },
        { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Condition_Good()"> 605</a><br>Moderate -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Condition_Moderate()"> 585</a><br>Poor -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Condition_Poor()"> 481</a>` },
        { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Material_Bitumen()"> 840</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Material_CC()"> 299</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Material_Interlocking()"> 159</a><br>Kachcha <a href="javascript:void(0)" onclick="Lucknow_Ward12_Material_Kachcha()">- 320</a><br>BOE <a href="javascript:void(0)" onclick="Lucknow_Ward12_Material_BOE()">- 24</a>` },
        { title: 'Ownership', value: `LNN -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Own_LNN()"> 1337</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Own_PWD()"> 11</a><br> NHAI -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Own_NHAI()"> 2</a><br>Private Road-<a href="javascript:void(0)" onclick="Lucknow_Ward12_Own_Private_Road()"> 16</a><br> LDA -<a href="javascript:void(0)" onclick="Lucknow_Ward12_Own_LDA()"> 306</a>` },
        { title: 'Under Scheme', value: `13th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward12_CUS_13th()"> 11</a><br>14th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward12_CUS_14th()"> 3</a><br>15th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward12_CUS_15th()"> 3</a><br>Nagar Nigam Nidhi -<a href="javascript:void(0)" onclick="Lucknow_Ward12_CUS_NNN()"> 1539</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_Ward12_CUS_Others()"> 16</a><br>` },
        { title: 'ROW', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_Ward12_ROW_Below6()">330</a><br>6 to 10 -<a href="javascript:void(0)" onclick="Lucknow_Ward12_ROW_6to10()"> 1200</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_Ward12_ROW_Above12()"> 142</a>` },

    ];

    details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.className = 'card';
        detailElement.style.backgroundColor = getUniqueColor();
        detailElement.innerHTML = `
            <h4>${detail.title}</h4>
            <p>${detail.value}</p>
        `;
        content.appendChild(detailElement);
    });
}

//let selectedZone = null;
//let selectedWard = null;


function setCurrentWard(wardName) {
    selectedWard = wardName;
    navigateTo('WardDetails');
}
function removeWards() {
    selectedWard = ''; // Clear current ward selection
    const content = document.getElementById('content');
    content.innerHTML = '';
}


//---------------------------------------  Ward 14 --------------------------------------------------------------------
function updateWardDetails14(zoneName, wardName) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    // Handle active class for the Zones tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const wardsTab = document.querySelector('[data-tab="Wards"]');
    if (wardsTab) {
        wardsTab.classList.add('active');
    }
    // if (!data[zoneName] || !data[zoneName].wards || !data[zoneName].wards[wardName]) {
    //     content.innerHTML = '<p>No details available for this ward.</p>';
    //     return;
    // }
    const wardInfoCard = document.createElement('div');
    wardInfoCard.className = 'card';
    wardInfoCard.style.backgroundColor = '#5072A7';
    wardInfoCard.style.alignContent = 'center';
    wardInfoCard.style.textAlign = 'center';
    wardInfoCard.style.color = 'white';
    wardInfoCard.innerHTML = `<h4> ${wardName}</h4> `;
    content.appendChild(wardInfoCard);

    // const wardData = data1[zoneName].wards[wardName];
    const details = [
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Length()">Road Type</a>', value: `Arterial -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Type_Arterial()">1</a><br>Collectors -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Type_Collectors()">3</a><br>Local Street -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Type_local_street()">2193</a>` },
        { title: 'Road Length', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Length()">337.61 km</a>` },
        { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Count()">2200</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Length()">Road Condition</a>', value: `Good -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Condition_Good()"> 215</a><br>Moderate -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Condition_Moderate()"> 629</a><br>Poor -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Condition_Poor()"> 1356</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Length()">Materials</a>', value: `Bitumen -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Material_Bitumen()"> 259</a><br>CC -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Material_CC()"> 380</a><br>Interlocking -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Material_Interlocking()"> 107</a><br>Kachcha <a href="javascript:void(0)" onclick="Lucknow_Ward14_Material_Kachcha()">- 1264</a><br>BOE <a href="javascript:void(0)" onclick="Lucknow_Ward14_Material_BOE()">- 190</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Length()">Ownership</a>', value: `LNN -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Own_LNN()"> 2126</a><br>PWD -<a href="javascript:void(0)" onclick="Lucknow_Ward14_Own_PWD()"> 19</a><br>Private Road-<a href="javascript:void(0)" onclick="Lucknow_Ward14_Own_Private_Road()"> 16</a><br>Others-<a href="javascript:void(0)" onclick="Lucknow_Ward14_Own_Other()"> 39</a>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Length()">Under Scheme</a>', value: `14th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward14_CUS_14th()"> 6</a><br>15th Finance -<a href="javascript:void(0)" onclick="Lucknow_Ward14_CUS_15th()"> 12</a><br>Nagar Nigam Nidhi -<a href="javascript:void(0)" onclick="Lucknow_Ward14_CUS_NNN()"> 851</a><br>Others -<a href="javascript:void(0)" onclick="Lucknow_Ward14_CUS_Others()"> 1328</a><br>` },
        { title: '<a href="javascript:void(0)" onclick="Lucknow_Ward14_Road_Length()">ROW</a>', value: ` Below 6 -<a href="javascript:void(0)" onclick="Lucknow_Ward14_ROW_Below6()">280</a><br>6 to 10 -<a href="javascript:void(0)" onclick="Lucknow_Ward14_ROW_6to10()">1906</a><br>Above 12 -<a href="javascript:void(0)" onclick="Lucknow_Ward14_ROW_Above12()"> 11</a>` },

    ];

    details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.className = 'card';
        detailElement.style.backgroundColor = getUniqueColor();
        detailElement.innerHTML = `
            <h4>${detail.title}</h4>
            <p>${detail.value}</p>
        `;
        content.appendChild(detailElement);
    });
}

//let selectedZone = null;
//let selectedWard = null;


function setCurrentWard(wardName) {
    selectedWard = wardName;
    navigateTo('WardDetails');
}
function removeWards() {
    selectedWard = ''; // Clear current ward selection
    const content = document.getElementById('content');
    content.innerHTML = '';
}




//------------------------------- Amenities zone cards-------------------------------------
function showAllZonesForAmenities() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const zoneKeys = Object.keys(data1).filter(key => key !== 'Summary' && key !== 'View');

    zoneKeys.forEach(zoneName => {
        const zoneData = data1[zoneName];

        const zoneElement = document.createElement('div');
        zoneElement.className = 'card';
        zoneElement.style.backgroundColor = getUniqueColor();

        // Determine the correct function to call based on the zone name
        let onclickFunction = `showZoneAmenities('${zoneName}')`;
        if (zoneName === 'Zone 1') {
            onclickFunction = `showZone1Amenities('${zoneName}')`;
        } else if (zoneName === 'Zone 2') {
            onclickFunction = `showZone2Amenities('${zoneName}')`;
        } else if (zoneName === 'Zone 4') {
            onclickFunction = `showZone4Amenities('${zoneName}')`;
        }

        zoneElement.innerHTML = `
            <h4>${zoneName}</h4>
            <a href="#" onclick="${onclickFunction}; return false;">View Amenities</a>
        `;
        content.appendChild(zoneElement);
    });
}

//------------------------------- zone 1 Amenities wms layer on cards------------------------------------------------------------------
function showZone1Amenities(zoneName) {
    const content = document.getElementById('content');

    if (!content) {
        console.error('Element with id "content" not found.');
        return;
    }

    content.innerHTML = '';

    if (zoneName) {
        // Debugging: Check if the correct zone name is passed
        console.log(`Showing amenities for: ${zoneName}`);

        // Display a card showing which zone's wards are being displayed
        const zoneInfoCard = document.createElement('div');
        zoneInfoCard.className = 'card';
        zoneInfoCard.style.backgroundColor = '#5072A7';
        zoneInfoCard.style.alignContent = 'center';
        zoneInfoCard.style.textAlign = 'center';
        zoneInfoCard.style.color = 'white';
        zoneInfoCard.innerHTML = `<h4>${zoneName}</h4>`;
        content.appendChild(zoneInfoCard);

        const amenityCards = [
            { title: 'Bank And ATM ', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Bank()">260</a> ` },
            { title: 'Parks', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Parks()">30</a> ` },
            { title: 'Hospital', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Hospital()">25</a> ` },
            { title: 'Bus Stop', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Bus_Stop()">34</a> ` },
            { title: 'Landmark', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Landmarks()">34</a> ` },

            // { title: 'State Government Office', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_state()">0</a> ` },
            { title: 'Central Government Office', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Central()">0</a> ` },
            { title: 'Petrol Pumps', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Petrol()">13</a> ` },
            { title: 'Educational Institute', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Education()">24</a> ` },
            { title: 'Graveyard', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Graveyard()">7</a> ` },
            { title: 'Hotels', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Hotels()">78</a> ` },
            { title: 'Religious Places', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Religious()">23</a> ` },
            { title: 'Stadium', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Stadium()">2</a> ` },
            { title: 'Post Office', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_PostOffice()">14</a> ` },
            { title: 'Car Charging', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Car_Charging()">2</a> ` },
            { title: 'Electric Sub Station', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Electric()">7</a> ` },
        ];


        amenityCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.style.backgroundColor = getUniqueColor(); // Ensure getUniqueColor() is returning valid color
            cardElement.innerHTML = `
                <h3>${card.title}</h3>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });
    } else {
        console.error('No zone name provided.');
    }
}


// Define the function to fetch and display post office data
function Zone1_Amenties_Bank() {
    fetch(`${BASE_URL1}/getZ1BankAndATM`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleBank);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            bankVectorSource.clear(); // Clear existing features before adding new ones
            bankVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!bankVectorLayer.getVisible()) {
                bankVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}


// Define the function to fetch and display post office data
function Zone1_Amenties_Bus_Stop() {
    fetch(`${BASE_URL1}/getZ1BusStop`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleBus);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            busVectorSource.clear(); // Clear existing features before adding new ones
            busVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!busVectorLayer.getVisible()) {
                busVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Car_Charging() {
    fetch(`${BASE_URL1}/getZ1CarCharging`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleCar);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            CarVectorSource.clear(); // Clear existing features before adding new ones
            CarVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!CarVectorLayer.getVisible()) {
                CarVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Hospital() {
    fetch(`${BASE_URL1}/getZ1Hospitals`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleHospital);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            HospitalVectorSource.clear(); // Clear existing features before adding new ones
            HospitalVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!HospitalVectorLayer.getVisible()) {
                HospitalVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}


// Define the function to fetch and display post office data
function Zone1_Amenties_Education() {
    fetch(`${BASE_URL1}/getZ1School`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleEducation);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            EducationVectorSource.clear(); // Clear existing features before adding new ones
            EducationVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!EducationVectorLayer.getVisible()) {
                EducationVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Hotels() {
    fetch(`${BASE_URL1}/getZ1Hotels`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleHotels);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            HotelsVectorSource.clear(); // Clear existing features before adding new ones
            HotelsVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!HotelsVectorLayer.getVisible()) {
                HotelsVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Petrol() {
    fetch(`${BASE_URL1}/getZ1PetrolPumps`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStylePetrol);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            PetrolVectorSource.clear(); // Clear existing features before adding new ones
            PetrolVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!PetrolVectorLayer.getVisible()) {
                PetrolVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));
}


// Define the function to fetch and display post office data
function Zone1_Amenties_Stadium() {
    fetch(`${BASE_URL1}/getZ1Stadium`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleStadium);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            StadiumVectorSource.clear(); // Clear existing features before adding new ones
            StadiumVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!StadiumVectorLayer.getVisible()) {
                StadiumVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Electric() {
    fetch(`${BASE_URL1}/getZ1ElectricSub`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleElectricsub);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            ElectricsubVectorSource.clear(); // Clear existing features before adding new ones
            ElectricsubVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!ElectricsubVectorLayer.getVisible()) {
                ElectricsubVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Landmarks() {
    fetch(`${BASE_URL1}/getZ1LandMarks`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleLandmark);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            LandmarkVectorSource.clear(); // Clear existing features before adding new ones
            LandmarkVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!LandmarkVectorLayer.getVisible()) {
                LandmarkVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Graveyard() {
    fetch(`${BASE_URL1}/getZ1Graveyard`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleGraveyard);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            GraveyardVectorSource.clear(); // Clear existing features before adding new ones
            GraveyardVectorSource.addFeatures(features);
            console.log('Graveyard features added:', features);

            // Optionally make the layer visible
            if (!GraveyardVectorLayer.getVisible()) {
                GraveyardVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Graveyard data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_Religious() {
    fetch(`${BASE_URL1}/getZ1Religious`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleReligious);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            ReligiousVectorSource.clear(); // Clear existing features before adding new ones
            ReligiousVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!ReligiousVectorLayer.getVisible()) {
                ReligiousVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone1_Amenties_PostOffice() {
    fetch(`${BASE_URL1}/getZ1PostOffices`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStylePost);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            PostVectorSource.clear(); // Clear existing features before adding new ones
            PostVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!PostVectorLayer.getVisible()) {
                PostVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}



/*

*/
//------------------------------- zone 4 Amenities wms layer on cards------------------------------------------------------------------
function showZone4Amenities(zoneName) {
    const content = document.getElementById('content');

    if (!content) {
        console.error('Element with id "content" not found.');
        return;
    }

    content.innerHTML = '';

    if (zoneName) {
        // Debugging: Check if the correct zone name is passed
        console.log(`Showing amenities for: ${zoneName}`);

        // Display a card showing which zone's wards are being displayed
        const zoneInfoCard = document.createElement('div');
        zoneInfoCard.className = 'card';
        zoneInfoCard.style.backgroundColor = '#5072A7';
        zoneInfoCard.style.alignContent = 'center';
        zoneInfoCard.style.textAlign = 'center';
        zoneInfoCard.style.color = 'white';
        zoneInfoCard.innerHTML = `<h4>${zoneName}</h4>`;
        content.appendChild(zoneInfoCard);

        const amenityCards = [
            { title: 'Bank And ATM ', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Bank()">276</a> ` },
            { title: 'Parks', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Parks()">0</a> ` },
            { title: 'Hospital', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Hospital()">20</a> ` },
            { title: 'Bus Stop', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Bus_Stop()">9</a> ` },
            { title: 'Landmark', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Landmark()">0</a> ` },
            //  { title: 'Central Government Office', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_central()">0</a> ` },
            { title: 'Petrol Pumps', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Petrol()">20</a> ` },
            { title: 'Educational Institute', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Education()">120</a> ` },
            { title: 'Graveyard', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Graveyard()">8</a> ` },
            { title: 'Hotels', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Hotels()">37</a> ` },
            { title: 'Religious Places', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Religious()">17</a> ` },
            { title: 'Stadium', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Stadium()">6</a> ` },
            { title: 'Post Office', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_PostOffice()">20</a> ` },
            { title: 'Car Charging', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Car_Charging()">19</a> ` },
            { title: 'Electric Sub Station', value: `<a href="javascript:void(0)" onclick="Zone4_Amenties_Electric()">10</a> ` },


        ];


        amenityCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.style.backgroundColor = getUniqueColor(); // Ensure getUniqueColor() is returning valid color
            cardElement.innerHTML = `
                <h3>${card.title}</h3>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });
    } else {
        console.error('No zone name provided.');
    }
}



// Define the function to fetch and display post office data
function Zone4_Amenties_Bank() {
    fetch(`${BASE_URL}/getZ4BankAndATM`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleBank);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            bankVectorSource.clear(); // Clear existing features before adding new ones
            bankVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!bankVectorLayer.getVisible()) {
                bankVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_Bus_Stop() {
    fetch(`${BASE_URL}/getZ4BusStop`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleBus);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            busVectorSource.clear(); // Clear existing features before adding new ones
            busVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!busVectorLayer.getVisible()) {
                busVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_Car_Charging() {
    fetch(`${BASE_URL}/getZ4CarCharging`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleCar);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            CarVectorSource.clear(); // Clear existing features before adding new ones
            CarVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!CarVectorLayer.getVisible()) {
                CarVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_Hospital() {
    fetch(`${BASE_URL}/getZ4Hospitals`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleHospital);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            HospitalVectorSource.clear(); // Clear existing features before adding new ones
            HospitalVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!HospitalVectorLayer.getVisible()) {
                HospitalVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}


// Define the function to fetch and display post office data
function Zone4_Amenties_Education() {
    fetch(`${BASE_URL}/getZ4School`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleEducation);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            EducationVectorSource.clear(); // Clear existing features before adding new ones
            EducationVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!EducationVectorLayer.getVisible()) {
                EducationVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_Hotels() {
    fetch(`${BASE_URL}/getZ4Hotels`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleHotels);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            HotelsVectorSource.clear(); // Clear existing features before adding new ones
            HotelsVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!HotelsVectorLayer.getVisible()) {
                HotelsVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_Petrol() {
    fetch(`${BASE_URL}/getZ4PetrolPumps`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStylePetrol);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            PetrolVectorSource.clear(); // Clear existing features before adding new ones
            PetrolVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!PetrolVectorLayer.getVisible()) {
                PetrolVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));
}


// Define the function to fetch and display post office data
function Zone4_Amenties_Stadium() {
    fetch(`${BASE_URL}/getZ4Stadium`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleStadium);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            StadiumVectorSource.clear(); // Clear existing features before adding new ones
            StadiumVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!StadiumVectorLayer.getVisible()) {
                StadiumVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_Electric() {
    fetch(`${BASE_URL}/getZ4ElectricSub`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleElectricsub);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            ElectricsubVectorSource.clear(); // Clear existing features before adding new ones
            ElectricsubVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!ElectricsubVectorLayer.getVisible()) {
                ElectricsubVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_Landmarks() {
    fetch(`${BASE_URL}/getZ4LandMarks`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleLandmark);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            LandmarkVectorSource.clear(); // Clear existing features before adding new ones
            LandmarkVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!LandmarkVectorLayer.getVisible()) {
                LandmarkVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

var iconStyleGraveyard1 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: './logo/bus/graveyard.png',
        scale: 0.05,
    })
});

var Graveyard1VectorSource = new ol.source.Vector();
var Graveyard1VectorLayer = new ol.layer.Vector({
    source: Graveyard1VectorSource,
    visible: false // Initially not visible
});
map.addLayer(Graveyard1VectorLayer);
// Define the function to fetch and display post office data
function Zone4_Amenties_Graveyard() {
    fetch(`${BASE_URL}/getZ4Graveyard`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleGraveyard1);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            Graveyard1VectorSource.clear(); // Clear existing features before adding new ones
            Graveyard1VectorSource.addFeatures(features);
            console.log('Graveyard features added:', features);

            // Optionally make the layer visible
            if (!Graveyard1VectorLayer.getVisible()) {
                Graveyard1VectorLayer.setVisible(true);

            }
        })

        .catch(error => console.error('Error fetching Graveyard data:', error));

}


// Define the function to fetch and display post office data
function Zone4_Amenties_Religious() {
    fetch(`${BASE_URL}/getZ4Religious`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyleReligious);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            ReligiousVectorSource.clear(); // Clear existing features before adding new ones
            ReligiousVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!ReligiousVectorLayer.getVisible()) {
                ReligiousVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}

// Define the function to fetch and display post office data
function Zone4_Amenties_PostOffice() {
    fetch(`${BASE_URL}/getZ4PostOffices`)
        .then(response => response.json())
        .then(data => {
            var features = data.data.map(function (point) {
                try {
                    // Extract and transform coordinates from EPSG:4326 to EPSG:3857
                    var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
                    //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

                    var feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStylePost);
                    return feature;
                } catch (error) {
                    console.error('Error adding point feature:', error);
                }
            }).filter(Boolean); // Filter out undefined features if an error occurred

            PostVectorSource.clear(); // Clear existing features before adding new ones
            PostVectorSource.addFeatures(features);
            console.log('Post Office features added:', features);

            // Optionally make the layer visible
            if (!PostVectorLayer.getVisible()) {
                PostVectorLayer.setVisible(true);
            }
        })

        .catch(error => console.error('Error fetching Post Office data:', error));

}
/*
function Zone1_Amenties_Parks() {
// Fetch the MultiPolygon data and add it to the layer
fetch(`${BASE_URL1}/getZ1Parks`)
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Log the data to understand its structure
      console.log('Fetched data:', data);

      // Check if data and data.data are defined
      if (!data || !Array.isArray(data.data)) {
          throw new Error('Invalid data format: expected an object with an array in "data" property.');
      }

      var format = new ol.format.WKT();
      var features = data.data.map(function (park) {
        //   console.log("WKT Geometry:", park.geom_point);

          try {
              var feature = format.readFeature(park.geom_point, {
                  dataProjection: 'EPSG:4326', // Assuming WKT data is in EPSG:4326
                  featureProjection: 'EPSG:4326' // Assuming map view is EPSG:4326 (change to EPSG:3857 if needed)
              });

              feature.setStyle(polygonStyle); // Apply the style to the feature
              feature.set('name', park.name); // Add the park name as an attribute
              return feature;
          } catch (error) {
              console.error('Error converting WKT to Feature:', park.geom_point, error);
              return null;
          }
      }).filter(Boolean); // Filter out null features if any WKT parsing fails

      parkVectorSource.addFeatures(features); // Add all features to the source
      console.log('Park features added:', features);

      // Adjust the map view to fit the extent of the features
      if (features.length > 0) {
          map.getView().fit(parkVectorSource.getExtent(), {
              size: map.getSize(),
              maxZoom: 12
          });
      }
  })
  .catch(error => console.error('Error fetching park data:', error));
}*/
//------------------------------- zone 2 Amenities wms layer on cards------------------------------------------------------------------
/*function showZone2Amenities(zoneName) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (zoneName) {
        // Display a card showing which zone's wards are being displayed
        const zoneInfoCard = document.createElement('div');
        zoneInfoCard.className = 'card';
        zoneInfoCard.style.backgroundColor = '#5072A7';
        zoneInfoCard.style.alignContent = 'center';
        zoneInfoCard.style.textAlign = 'center';
        zoneInfoCard.style.color = 'white';
        zoneInfoCard.innerHTML = `
       <h4> ${zoneName}</h4>
   `;
        content.appendChild(zoneInfoCard);


        const amenityCards = [
            { title: 'Bank And ATM', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_bank()">61</a> `},
            { title: 'Parks', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Parks()">9</a> ` },
            { title: 'Hospital', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Hospital()">8</a> ` },
            { title: 'Bus Stop', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_bus()">2</a> ` },
            { title: 'State Government Office', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_state()">10</a> ` },
            { title: 'Central Government Office', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_central()">3</a> ` },
            { title: 'Petrol Pumps', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Petrol()">15</a> ` },
            { title: 'Educational Institute', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Education()">63</a> ` },
            { title: 'Graveyard', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Graveyard()">2</a> ` },
            { title: 'Hotels', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Hotels()">104</a> ` },
            { title: 'Religious Places', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Religious()">6</a> ` },
            { title: 'Stadium', value:  `<a href="javascript:void(0)" onclick="Zone2_Amenties_Stadium()">6</a> `},
        ];

        amenityCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.value}</p>
        `;
            content.appendChild(cardElement);
        });
    }

}




//------------------------------- zone 3 Amenities wms layer on cards------------------------------------------------------------------

function showZone4Amenities(zoneName) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (zoneName) {
        // Display a card showing which zone's wards are being displayed
        const zoneInfoCard = document.createElement('div');
        zoneInfoCard.className = 'card';
        zoneInfoCard.style.backgroundColor = '#5072A7';
        zoneInfoCard.style.alignContent = 'center';
        zoneInfoCard.style.textAlign = 'center';
        zoneInfoCard.style.color = 'white';
        zoneInfoCard.innerHTML = `
       <h4> ${zoneName}</h4>
   `;
        content.appendChild(zoneInfoCard);


        const amenityCards = [
            { title: 'Bank And ATM ', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_bank()">117</a> `},
            { title: 'Parks', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Parks()">6</a> ` },
            { title: 'Hospital', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Hospital()">6</a> ` },
            { title: 'Bus Stop', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_bus()">1</a> ` },
            { title: 'State Government Office', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_state()">16</a> ` },
            { title: 'Central Government Office', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_central()">10</a> ` },
            { title: 'Petrol Pumps', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Petrol()">17</a> ` },
            { title: 'Educational Institute', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Education()">40</a> ` },
            { title: 'Graveyard', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Graveyard()">3</a> ` },
            { title: 'Hotels', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Hotels()">60</a> ` },
            { title: 'Religious Places', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Religious()">3</a> ` },
            { title: 'Stadium', value:  `<a href="javascript:void(0)" onclick="Zone3_Amenties_Stadium()">3</a> `},
        ];

        amenityCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.value}</p>
        `;
            content.appendChild(cardElement);
        });
    }

}


*/

function minimize() {
    const topnav = document.getElementById('topnav');
    const contentWrapper = document.getElementById('content-wrapper');

    topnav.style.bottom = '2%'; // Reduced height when minimized

    contentWrapper.style.height = '0'; // Reduced height when minimized
    contentWrapper.style.overflow = 'hidden';
    contentWrapper.style.opacity = '0.5'; // Slight opacity to indicate minimized state

}

function maximize() {
    const topnav = document.getElementById('topnav');
    const contentWrapper = document.getElementById('content-wrapper');

    topnav.style.bottom = '34%'; // Reduced height when minimized
    topnav.style.display = 'flex';

    contentWrapper.style.height = 'auto'; // Restore original height
    contentWrapper.style.overflow = 'auto'; // Enable scrolling if necessary
    contentWrapper.style.opacity = '1'; // Full opacity when maximized
}

function closeNav() {
    document.getElementById('topnav').style.display = 'none';
    document.getElementById('content-wrapper').style.display = 'none';
    document.getElementById('showButton').classList.add('show');
}

function summary_table() {
    const topnav = document.getElementById('topnav');
    const contentWrapper = document.getElementById('content-wrapper');

    if (topnav.classList.contains('hidden')) {
        topnav.classList.remove('hidden');
        contentWrapper.classList.remove('hidden');
    } else {
        topnav.classList.add('hidden');
        contentWrapper.classList.add('hidden');
    }
}
// Initially hide the topnav and content-wrapper
document.addEventListener('DOMContentLoaded', () => {
    const topnav = document.getElementById('topnav');
    const contentWrapper = document.getElementById('content-wrapper');
    topnav.classList.add('hidden');
    contentWrapper.classList.add('hidden');
});

// Initialize view
navigateTo('Summary');



//----------------------------- show layers of table summary on map -------------------------//

var currentLayer = null;

function removeCurrentLayer() {
    if (currentLayer) {  // Check if there's a current layer on the map
        map.removeLayer(currentLayer);  // Remove the current layer from the map
        currentLayer = null;  // Reset the currentLayer variable
    }
}


//---------------------------------------------LNN ALL ROAD SUMMARY DATA----------------------------------//

function Lucknow_Zone_NO() {
    removeCurrentLayer();
    clearVectorLayers();

    // Create the WMS layer
    currentLayer = new ol.layer.Image({
        title: 'Zone Boundary',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN/wms',
            params: {
                'LAYERS': '	LNN:LNN Zone Boundary',
                // 'TILED':true,
                // 'FORMAT': 'image/png8'
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
}
function Lucknow_Ward_NO() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN/wms',
            params: {
                'LAYERS': '	LNN:LNN Ward Boundary',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
}
//-----------------------popup code related to summary data--------------------//
function LNN_Road(){
    // Create a popup element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'absolute';
    popup.style.background = 'white';
    popup.style.border = '3px solid black'; 
    popup.style.padding = '5px';
    popup.style.width = '250px';
    popup.style.display = 'none';
    popup.style.borderRadius = '10px'; // Add rounded corners
    
    document.body.appendChild(popup);
  
    // Create an overlay for the popup
    const overlay = new ol.Overlay({
        element: popup,
        positioning: 'top',
        stopEvent: false,
        offset: [0, -10]
    });
    map.addOverlay(overlay);
  
    // Add a click event listener
    map.on('singleclick', function (event) {
        const viewResolution = map.getView().getResolution();
        const source = currentLayer.getSource();
  
        const url = source.getFeatureInfoUrl(
            event.coordinate,
            viewResolution,
            map.getView().getProjection(),
            { 'INFO_FORMAT': 'application/json' }
        );
  
        if (url) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data.features && data.features.length > 0) {
                        const feature = data.features[0];
                        const properties = feature.properties;
  
                        // Show the popup with feature info
                        popup.innerHTML = `
                       <strong><u>Road Information :-</u></strong><br>
                          <strong>Zone No. :</strong> ${properties.zone_no || 'N/A'}<br>
                            <strong>Zone Name :</strong> ${properties.zone_name || 'N/A'}<br>
  
                         <strong>Ward No. :</strong> ${properties.ward_no || 'N/A'}<br>
                            <strong>Ward Name :</strong> ${properties.ward_name || 'N/A'}<br>
  
                            <strong>ROW :</strong> ${properties.row_meter || 'N/A'}<br>
                             <strong>CW :</strong> ${properties.carriage_w || 'N/A'}<br>
                           <strong>Type :</strong> ${properties.type || 'N/A'}<br>
                            <strong>Condition :</strong> ${properties.condition || 'N/A'}<br>
                             <strong>Material :</strong> ${properties.carriage_m || 'N/A'}<br>
                               <strong>Ownership :</strong> ${properties.ownership || 'N/A'}<br>
                                 <strong>Length(Km) :</strong> ${properties.length_km || 'N/A'}<br>
                                  <strong>Road Name :</strong> ${properties.road_name || 'N/A'}
                                 
                        `;
                        popup.style.display = 'block';
                        overlay.setPosition(event.coordinate);
                    } else {
                        // Hide the popup if no feature is found
                        popup.style.display = 'none';
                    }
                })
                .catch(() => {
                    popup.style.display = 'none';
                });
        } else {
            popup.style.display = 'none';
        }
    });
  }
function Lucknow_Road_Length() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
   // updateNavBarWithFunctionName("Road Length - 9480.74 km");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
   LNN_Road();
}


function Lucknow_Road_Count() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
   // updateNavBarWithFunctionName("Road Count - 82354");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
   LNN_Road();
}
function Lucknow_Condition() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:LNN_Condition',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
   
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
  LNN_Road();
}
function Lucknow_Material() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:LNN_Material',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
  LNN_Road();
}
function Lucknow_Type() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:LNN_Type',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    LNN_Road();
}
function Lucknow_Ownership() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:LNN_Ownership',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    LNN_Road();
}

function Lucknow_Condition_Good() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_Green0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Condition Good");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCondGreenData();
}
function fetchLNNCondGreenData() {
    fetch(`${BASE_URL1}/getAllLNNNameCondition?condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
           dataTableBody_summary.innerHTML = '';
         //  featureToRowMap.clear();  // Clear feature-row mapping
            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Condition_Poor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_Red0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Condition Poor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCondRedData();
}
function fetchLNNCondRedData() {
    fetch(`${BASE_URL1}/getAllLNNNameCondition?condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Condition_Moderate() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_Yellow0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Condition Moderate");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCondYellowData();
}
function fetchLNNCondYellowData() {
    fetch(`${BASE_URL1}/getAllLNNNameCondition?condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Material_BOE() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_BOE0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Material BOE");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNMaterialBOEData();
}
function fetchLNNMaterialBOEData() {
    fetch(`${BASE_URL1}/getAllLNNNameMaterial?carriage_m=BOE`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Material_Bitumen() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_Bitumen0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Material Bitumen");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNMaterialBitumenData();
}
function fetchLNNMaterialBitumenData() {
    fetch(`${BASE_URL1}/getAllLNNNameMaterial?carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Material_Kachcha() {
    clearVectorLayers(); // Clear all unwanted vector layers
    removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_Kachcha0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Material Kachcha");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNMaterialKachchaData();
}
function fetchLNNMaterialKachchaData() {
    fetch(`${BASE_URL1}/getAllLNNNameMaterial?carriage_m=Kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Material_Interlocking() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_Interlocking0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Material Interlocking");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNMaterialInterData();
}
function fetchLNNMaterialInterData() {
    fetch(`${BASE_URL1}/getAllLNNNameMaterial?carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Material_CC() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_CC0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Material CC");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNMaterialCCData();
}
function fetchLNNMaterialCCData() {
    fetch(`${BASE_URL1}/getAllLNNNameMaterial?carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Type_Major() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_Major0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Type Major");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // document.getElementById('summary-table').style.display = 'none';
    // document.getElementById('dataTable_summary').style.display = 'block';
    // document.getElementById('tableContainer_summary').style.display = 'block';
}
function Lucknow_Type_Minor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_Minor0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Type Minor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // document.getElementById('summary-table').style.display = 'none';
    // document.getElementById('dataTable_summary').style.display = 'block';
    // document.getElementById('tableContainer_summary').style.display = 'block';
}

function Lucknow_Ownership_NHAI() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_NHAI0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Ownership NHAI");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNOwnNHAIData();
}
function fetchLNNOwnNHAIData() {
    fetch(`${BASE_URL1}/getAllLNNNameOwnership?ownership=NHAI`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ownership_LDA() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_LDA0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Ownership LDA");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNOwnLDAData();
}
function fetchLNNOwnLDAData() {
    fetch(`${BASE_URL1}/getAllLNNNameOwnership?ownership=LDA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ownership_PWD() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_PWD0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Ownership PWD");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNOwnPWDData();
}
function fetchLNNOwnPWDData() {
    fetch(`${BASE_URL1}/getAllLNNNameOwnership?ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ownership_LNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_LNN0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Ownership LNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNOwnLNNData();
}
function fetchLNNOwnLNNData() {
    fetch(`${BASE_URL1}/getAllLNNNameOwnership?ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ownership_PVT() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_PRIVATE_ROAD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Ownership PVT");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNOwnPVTData();
}
function fetchLNNOwnPVTData() {
    fetch(`${BASE_URL1}/getAllLNNNameOwnership?ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ownership_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_own_Others0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow Ownership Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNOwnOtherData();
}
function fetchLNNOwnOtherData() {
    fetch(`${BASE_URL1}/getAllLNNOtherOwnerShip?ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_ROW_Below6() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_Below_6',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow ROW Below 6");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNROWBelow6Data();
}
function fetchLNNROWBelow6Data() {
    fetch(`${BASE_URL1}/getAllLNNNameROW?rowcls=Below 6`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_ROW_6to10() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_6_to10',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow ROW 6 to 10");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNROW6to10Data();
}
function fetchLNNROW6to10Data() {
    fetch(`${BASE_URL1}/getAllLNNNameROW?rowcls=6 to10`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_ROW_10to12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_10_to_12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow ROW 10 to 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNROW10to12Data();
}
function fetchLNNROW10to12Data() {
    fetch(`${BASE_URL1}/getAllLNNNameROW?rowcls=10 to 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_ROW_Above12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_Above_12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow ROW above 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNROWAbove12Data();
}
function fetchLNNROWAbove12Data() {
    fetch(`${BASE_URL1}/getAllLNNNameROW?rowcls=Above 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_CUS_13th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_13th_Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow CUS 13th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCUS13thData();
}
function fetchLNNCUS13thData() {
    fetch(`${BASE_URL1}/getAllLNNNameCUS?cus=13th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_CUS_14th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_14th_Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow CUS 14th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCUS14thData();
}
function fetchLNNCUS14thData() {
    fetch(`${BASE_URL1}/getAllLNNNameCUS?cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_CUS_15th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:lnn_15th_Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow CUS 15th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCUS15thData();
}
function fetchLNNCUS15thData() {
    fetch(`${BASE_URL1}/getAllLNNNameCUS?cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_CUS_NNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_Nagar_Nigam_Nidhi',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow CUS NNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCUSNNNData();
}
function fetchLNNCUSNNNData() {
    fetch(`${BASE_URL1}/getAllLNNNameCUS?cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_CUS_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:lnn_cus_Others0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Lucknow CUS Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchLNNCUSOtherData();
}
function fetchLNNCUSOtherData() {
    fetch(`${BASE_URL1}/getAllLNNNameCUS?cus=Others`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



//-----------------table Cancel btn----------------------------//
document.getElementById('cancelbtn_table').addEventListener('click', function () {
    document.getElementById('tableContainer_summary').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('tableContainer_Road_Age').style.display = 'none';
    document.getElementById('summary-table').style.display = 'block';

    const legendBtn = document.getElementById('legendBtn');
    legendBtn.style.bottom = '0%';


});

//Function to append data to the table
function appendToSummaryTable(data) {
    if (Array.isArray(data)) {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.gis_id}</td>
                <td>${item.zone_no}</td>
                <td>${item.zone_name}</td>
                <td>${item.ward_no}</td>
                <td>${item.ward_name}</td>
                <td>${item.ownership}</td>
                <td>${item.type}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_as_per}</td>
                <td>${item.carriage_w}</td>
                <td>${item.carriage_m}</td>
                <td>${item.length_km}</td>
                <td>${item.condition}</td>
                <td>${item.yoc}</td>
                <td>${item.cus}</td>
                <!-- Add more table columns if necessary -->
            `;
            dataTableBody_summary.appendChild(row);
            row.addEventListener('click', function () {
                console.log(`Row clicked`, item);
                if (item.geom_wkt) {
                    zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                    highlightAndScrollToRow(row);      // Highlight the clicked row
                }
            });
            if (item.geom_wkt) {
                console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                const feature = addMultilinestringFeatureFromWKT(item.geom_wkt);
                // Check if the feature was successfully created
                if (feature) {
                    const featureId = feature.getId();
                    if (featureId) {
                        featureToRowMap.set(featureId, row);
                    } else {
                        console.warn('Feature created but no ID found:', feature);
                    }
                } else {
                    console.error('Failed to create feature from WKT:', item.geom_wkt);
                }
            }

        });
    } else {
        console.error('Expected an array but received:', data);
    }
}




function fetchZ1ALLData() {
    fetch(`${BASE_URL1}/getAllZ1typeName`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}




function Lucknow_Z1_Type() {
    // Clear any existing layers and vector layers
    removeCurrentLayer();
    clearVectorLayers();

    // Add WMS Layer to the map
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z1_LNN_Type',
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Type");
    // Add the WMS layer to the map
    map.addLayer(currentLayer);

    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    // Fetch data from the API and update the table
    fetchZ1ALLData();
}





function Lucknow_Z1_Condition() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z1_LNN_Condition',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Condition");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ALLData();
}


function Lucknow_Z1_Material() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:Z1_LNN_Material',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Material");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ALLData();
}

function Lucknow_Z1_Ownership() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z1_LNN_Ownership',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    //overlays.getLayers().push(LNN_Ward_Boundary);
    updateNavBarWithFunctionName("Zone-1 Ownership");
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';
    fetchZ1ALLData();
}

function Lucknow_Z1_ROW() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z1_LNN_ROWClass',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 ROW");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ALLData();
}

function Lucknow_Z1_CUS() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z1_LNN_CUS',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 CUS");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ALLData();
}

function Lucknow_Zone1_Road_Length() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Road Length - 420.57 km");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ALLData();

}

function Lucknow_Zone1_Road_Count() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Road Count - 5872");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ALLData();
}

function Lucknow_Zone1_Condition_Good() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Green0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Condition Good");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ConditionGoodData()
}
function fetchZ1ConditionGoodData() {
    fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}
function Lucknow_Zone1_Condition_Poor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:z1lnn_Red0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Condition Poor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ConditionPoorData()
}
function fetchZ1ConditionPoorData() {
    fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Condition_Moderate() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Yellow0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Condition Moderate");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ConditionModerateData()
}
function fetchZ1ConditionModerateData() {
    fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}

function Lucknow_Zone1_CUS_14th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_14th_Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 CUS 14th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1CUS14lData()
}
function fetchZ1CUS14Data() {
    fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_CUS_15th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_15th_Finance',
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 CUS 15th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1CUS15Data()
}
function fetchZ1CUS15Data() {
    fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_CUS_NNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Nagar_Nigam_Nidhi',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 CUS NNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1CUSNNNData()
}
function fetchZ1CUSNNNData() {
    fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_CUS_Other() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Cus_Others0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 CUS Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1CUSOtherData()
}
function fetchZ1CUSOtherData() {
    fetch(`${BASE_URL1}/getZ1SchemeOther?cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_ROW_Below6() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Below_6',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 ROW Below 6");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ROWBelow6Data()
}
function fetchZ1ROWBelow6Data() {
    fetch(`${BASE_URL1}/getZ1RowCls?rowcls=Below 6`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}

function Lucknow_Zone1_ROW_6to10() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_6_to10',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 ROW 6 to 10");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ROW6to10Data()
}
function fetchZ1ROW6to10Data() {
    fetch(`${BASE_URL1}/getZ1RowCls?rowcls=6 to10`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}
function Lucknow_Zone1_ROW_10to12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_10_to_12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 ROW 10 to 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ROW10to12Data()
}
function fetchZ1ROW10to12Data() {
    fetch(`${BASE_URL1}/getZ1RowCls?rowcls=10 to 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_ROW_Above12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Above_12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 ROW Above 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1ROWAbove12Data()
}
function fetchZ1ROWAbove12Data() {
    fetch(`${BASE_URL1}/getZ1RowCls?rowcls=Above 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Material_Bitumen() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Bitumen0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Material Bitumen");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1MaterialBitumenData()
}
function fetchZ1MaterialBitumenData() {
    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Material_Kachcha() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Kachcha0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Material Kachcha");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1MaterialKachchaData()
}
function fetchZ1MaterialKachchaData() {
    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Material_Interlocking() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:z1lnn_Interlocking0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Material Interlocking");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1MaterialInterlockingData()
}
function fetchZ1MaterialInterlockingData() {
    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Material_CC() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_CC0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Material CC");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1MaterialCCData()
}
function fetchZ1MaterialCCData() {
    fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Type_Major() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Major0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Type Major");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1TypeMajorData()
}
function fetchZ1TypeMajorData() {
    fetch(`${BASE_URL1}/getZ1Type?zone_name=Zone 1&type=Major`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Type_Minor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Minor0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Type Minor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1TypeMinorData()
}
function fetchZ1TypeMinorData() {
    fetch(`${BASE_URL1}/getZ1Type?zone_name=Zone 1&type=Minor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}

function Lucknow_Zone1_Ownership_PWD() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_PWD0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Ownership PWD");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1OwnershipPWDData()
}
function fetchZ1OwnershipPWDData() {
    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

}
function Lucknow_Zone1_Ownership_LNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_LNN0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Ownership LNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1OwnershipLNNData()
}
function fetchZ1OwnershipLNNData() {
    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Ownership_Private_Road() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_PRIVATE_ROAD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Ownership Private Road");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1OwnershipPrivateRoadData()
}
function fetchZ1OwnershipPrivateRoadData() {
    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}
function Lucknow_Zone1_Ownership_Other() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z1lnn_Own_Others0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-1 Ownership Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    // Clear any overlays
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ1OwnershipOtherData()
}
function fetchZ1OwnershipOtherData() {
    fetch(`${BASE_URL1}/getZ1OtherOwnerShip?ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            appendToSummaryTable(responseData.data);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


}

function Lucknow_Zone1_Ownership_LDA() {
    // showLoading(); // Show loading indicator
    removeCurrentLayer(); // Ensure the WMS layer is removed

    updateNavBarWithFunctionName("Zone-1 Ownership LDA");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=LDA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any request body if required
            // zone_name: 'Zone 4',
            // type: 'Major'
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
             <td>${item.gis_id}</td>
              <td>${item.zone_no}</td>
              <td>${item.zone_name}</td>
              <td>${item.ward_no}</td>                         
              <td>${item.ward_name}</td>
              <td>${item.ownership}</td>                        <td>${item.type}</td>
              <td>${item.road_name}</td>
              <td>${item.row_meter}</td>
              <td>${item.row_as_per}</td>
              <td>${item.carriage_w}</td>
              <td>${item.carriage_m}</td>
              <td>${item.length_km}</td>
              <td>${item.condition}</td>
              <td>${item.yoc}</td>
              <td>${item.cus}</td>
             
              <!-- Add more table data cells as needed -->
          `;
                    dataTableBody_summary.appendChild(row);

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_ownership(item.geom_wkt, item.ownership);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })
    

};
//-----------------------------------Zone4 Summary----------------------------//


function fetchZ4ALLData() {

    fetch(`${BASE_URL}/getAllZ4typeName`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Z4_Type() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:Z4_LNN_Type',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Type");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}
function Lucknow_Z4_Condition() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z4_LNN_Condition',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Condition");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}
function Lucknow_Z4_Material() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:Z4_LNN_Material',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Material");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}

function Lucknow_Z4_Ownership() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z4_LNN_Ownership',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Ownership");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}
function Lucknow_Z4_ROW() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:Z4_LNN_ROWclass',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 ROW");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}
function Lucknow_Z4_CUS() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:Z4_LNN_CUS',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 CUS");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}




function Lucknow_Zone4_Road_Length() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone4 Road Length -" + totalRoadLengthzone4 + "Km");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}
function Lucknow_Zone4_Road_Count() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:z4lnn_roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone4 Road Count - " + totalRoadCountzone4);
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ALLData()
}

function Lucknow_Zone4_Condition_Good() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:z4lnn_Green0',
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Condition Good");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';
}

function Lucknow_Zone4_Condition_Poor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Red0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Condition Poor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ConditionRedData()
}
function fetchZ4ConditionRedData() {
    fetch(`${BASE_URL}/getZ4Condition?condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Condition_Moderate() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:z4lnn_Yellow0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Condition Moderate");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4ConditionYellowData()
}
function fetchZ4ConditionYellowData() {
    fetch(`${BASE_URL}/getZ4Condition?condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Zone4_CUS_13th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_13th_Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 CUS 13th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4CUS13Data()
}
function fetchZ4CUS13Data() {
    fetch(`${BASE_URL}/getZ4UnderScheme?cus=13th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_CUS_14th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_14th_Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 CUS 14th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4CUS14Data()
}
function fetchZ4CUS14Data() {
    fetch(`${BASE_URL}/getZ4UnderScheme?cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_CUS_15th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_15th_Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 CUS 15th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4CUS15Data()
}
function fetchZ4CUS15Data() {
    fetch(`${BASE_URL}/getZ4UnderScheme?cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_CUS_NNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Nagar_Nigam_Nidhi',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 CUS NNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4CUSNNNData()
}
function fetchZ4CUSNNNData() {
    fetch(`${BASE_URL}/getZ4UnderScheme?cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_CUS_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Cus_Others0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 CUS Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4CUSOtherData()
}
function fetchZ4CUSOtherData() {
    fetch(`${BASE_URL}/getZ4SchemeOther?cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_ROW_Below6() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Below_6',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 ROW Below 6");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4RowBelow6Data()
}
function fetchZ4RowBelow6Data() {
    fetch(`${BASE_URL}/getZ4RowCls?rowcls=Below 6`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Zone4_ROW_6to10() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_6_to10',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 ROW 6 to 10");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4Row6to10Data()
}
function fetchZ4Row6to10Data() {
    fetch(`${BASE_URL}/getZ4RowCls?rowcls=6 to10`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_ROW_10to12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_10_to_12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 ROW 10 to 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4Row10to12Data()
}
function fetchZ4Row10to12Data() {
    fetch(`${BASE_URL}/getZ4RowCls?rowcls=10 to 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_ROW_Above12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Above_12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 ROW Above 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4Rowabove12Data()
}
function fetchZ4Rowabove12Data() {
    fetch(`${BASE_URL}/getZ4RowCls?rowcls=Above 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Material_Bitumen() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Bitumen0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Material Bitumen");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4MaterialBData()
}
function fetchZ4MaterialBData() {
    fetch(`${BASE_URL}/getZ4Material?carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Material_Kachcha() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Kachcha0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Material Kachcha");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4MaterialKData()
}
function fetchZ4MaterialKData() {
    fetch(`${BASE_URL}/getZ4Material?carriage_m=Kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Material_BOE1() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_BOE0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Material BOE");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4MaterialBOEData()
}
function fetchZ4MaterialBOEData() {
    fetch(`${BASE_URL}/getZ4Material?carriage_m=BOE`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Material_Interlocking() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:z4lnn_Interlocking0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Material Interlocking");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4MaterialIData()
}
function fetchZ4MaterialIData() {
    fetch(`${BASE_URL}/getZ4Material?carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Material_CC() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_CC0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Material CC");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4MaterialCCData()
}
function fetchZ4MaterialCCData() {
    fetch(`${BASE_URL}/getZ4Material?carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Type_Arterial() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Arterial0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Type Arterial");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4TypeAData()
}
function fetchZ4TypeAData() {
    fetch(`${BASE_URL}/getZ4Type?type=Arterial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Type_Sub_Arterial() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Sub_Arterial',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Type Sub-Arterial");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4TypeSubAData()
}
function fetchZ4TypeSubAData() {
    fetch(`${BASE_URL}/getZ4Type?type=Sub%20Arterial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Zone4_Type_Collector() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Collectors0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Type Collector");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4TypeCollData()
}
function fetchZ4TypeCollData() {
    fetch(`${BASE_URL}/getZ4Type?type=Collectors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Type_Urban() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Urban Express Way',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Type Urban");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4TypeUrbanData()
}
function fetchZ4TypeUrbanData() {
    fetch(`${BASE_URL}/getZ4Type?type=Urban%20Express%20Way`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Type_LocalStreet() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Local_Street',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Type Local Street");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4TypeLocalData()
}
function fetchZ4TypeLocalData() {
    fetch(`${BASE_URL}/getZ4Type?type=Local%20Street`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Ownership_NHAI() {
    removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_NHAI_new',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Ownership NHAI");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4OwnerShipNhaiData()
}
function fetchZ4OwnerShipNhaiData() {
    fetch(`${BASE_URL}/getZ4OwnerShip?ownership=NHAI`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Ownership_LDA() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_LDA0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Ownership NHAI");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4OwnerShipLDAData()
}
function fetchZ4OwnerShipLDAData() {
    fetch(`${BASE_URL}/getZ4OwnerShip?ownership=LDA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Ownership_PWD() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_PWD0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Ownership PWD");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4OwnerShipPWDData()
}
function fetchZ4OwnerShipPWDData() {
    fetch(`${BASE_URL}/getZ4OwnerShip?ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Ownership_LNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_LNN0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Ownership LNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4OwnerShipLNNData()
}
function fetchZ4OwnerShipLNNData() {
    fetch(`${BASE_URL}/getZ4OwnerShip?ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Ownership_Private_Road() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:z4lnn_PRIVATE_ROAD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Ownership Private Road");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4OwnerShipPrivate_RoadData()
}
function fetchZ4OwnerShipPrivate_RoadData() {
    fetch(`${BASE_URL}/getZ4OwnerShip?ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Zone4_Ownership_Other() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:z4lnn_Own_Others0',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Zone-4 Ownership Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4OwnerShipOtherData()
}
function fetchZ4OwnerShipOtherData() {
    fetch(`${BASE_URL}/getZ4OtherOwnerShip?ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//--------------------------------------Ward17-----------------------//
function Lucknow_Ward17_Material_Bitumen() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w17z1lnn_Bitumen',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Material Bitumen");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17MaterialBData();
}
function fetchW17MaterialBData() {
    fetch(`${BASE_URL1}/getZ1MaterialWard_no?ward_no=17&carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward17_Material_Interlocking() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_Interlocking',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Material Interlocking");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17MaterialIData();
}
function fetchW17MaterialIData() {
    fetch(`${BASE_URL1}/getZ1MaterialWard_no?ward_no=17&carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward17_Material_CC() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:w17z1lnn_CC',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Material CC");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17MaterialCCData();
}
function fetchW17MaterialCCData() {
    fetch(`${BASE_URL1}/getZ1MaterialWard_no?ward_no=17&carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_Type_Major() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:w17z1lnn_Major',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Type Major");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17TypeMajorData();
}
function fetchW17TypeMajorData() {
    fetch(`${BASE_URL1}/getZ1TypeWard_no?ward_no=17&type=Major`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward17_Type_Minor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:w17z1lnn_Minor',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Type Minor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17TypeMinorData();
}
function fetchW17TypeMinorData() {
    fetch(`${BASE_URL1}/getZ1TypeWard_no?ward_no=17&type=Minor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_Own_LDA() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:w17z1lnn_LDA',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Ownership LDA");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17OwnLDAData();
}
function fetchW17OwnLDAData() {
    fetch(`${BASE_URL1}/getZ1OwnWard_no?ward_no=17&ownership=LDA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_Own_PVT() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_PRIVATE ROAD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Ownership PVT");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17OwnPVTData();
}
function fetchW17OwnPVTData() {
    fetch(`${BASE_URL1}/getZ1OwnWard_no?ward_no=17&ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



function Lucknow_Ward17_Own_PWD() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:w17z1lnn_PWD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Ownership PWD");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17OwnPWDData();
}
function fetchW17OwnPWDData() {
    fetch(`${BASE_URL1}/getZ1OwnWard_no?ward_no=17&ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_Own_LNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:w17z1lnn_LNN',
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Ownership LNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17OwnLNNData();
}
function fetchW17OwnLNNData() {
    fetch(`${BASE_URL1}/getZ1OwnWard_no?ward_no=17&ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward17_Own_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:w17z1lnn_Own_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Ownership Others");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17OwnOtherData();
}
function fetchW17OwnOtherData() {
    fetch(`${BASE_URL1}/getZ1OtherOwnWard_no?ward_no=17&ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward17_CUS_14th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_14th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 CUS 14th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17cus14Data();
}
function fetchW17cus14Data() {
    fetch(`${BASE_URL1}/getZ1CUSWard_no?ward_no=17&cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward17_CUS_15th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w17z1lnn_15th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 CUS 15th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17cus15Data();
}
function fetchW17cus15Data() {
    fetch(`${BASE_URL1}/getZ1CUSWard_no?ward_no=17&cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward17_CUS_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:w17z1lnn_Cus_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 CUS Others");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17cusOtherData();
}
function fetchW17cusOtherData() {
    fetch(`${BASE_URL1}/getZ1CUSWard_no?ward_no=17&cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_CUS_NNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_Nagar Nigam Nidhi',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 CUS NNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17cusNNNData();
}
function fetchW17cusNNNData() {
    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=17&cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward17_Condition_Good() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_Green',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Condition Good");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17ConditionGreenData();
}
function fetchW17ConditionGreenData() {
    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=17&condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward17_Condition_Poor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:w17z1lnn_Red',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Condition Poor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17ConditionRedData();
}
function fetchW17ConditionRedData() {
    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=17&condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_Condition_Moderate() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:w17z1lnn_Yellow',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 Condition Moderate");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17ConditionyellowData();
}
function fetchW17ConditionyellowData() {
    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=17&condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward17_ROW_Below6() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_Below6',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 ROW Below 6");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17ROWBelow6Data();
}
function fetchW17ROWBelow6Data() {
    fetch(`${BASE_URL1}/getZ1ROWWard_no?ward_no=17&rowcls=Below 6`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_ROW_6to10() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_6to10',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 ROW 6 to 10");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17ROW6to10Data();
}
function fetchW17ROW6to10Data() {
    fetch(`${BASE_URL1}/getZ1ROWWard_no?ward_no=17&rowcls=6 to10`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward17_ROW_Above12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w17z1lnn_Above12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward17 ROW Above 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW17ROWAbove12Data();
}
function fetchW17ROWAbove12Data() {
    fetch(`${BASE_URL1}/getZ1ROWWard_no?ward_no=17&rowcls=Above 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


//--------------------------------------Ward12-----------------------//
function Lucknow_Ward12_Material_Bitumen() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Bitumen',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Material Bitumen");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12MaterialBitumenData()
}
function fetchZ4W12MaterialBitumenData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=12&carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Material_Kachcha() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_Kachcha',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Material Kachcha");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12MaterialKachchaData()
}
function fetchZ4W12MaterialKachchaData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=12&carriage_m=Kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Material_Interlocking() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Interlocking',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Material Interlocking");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12MaterialInterlockingData()
}
function fetchZ4W12MaterialInterlockingData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=12&carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Material_CC() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_CC',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Material CC");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12MaterialCCData()
}
function fetchZ4W12MaterialCCData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=12&carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Material_BOE() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_BOE',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Material BOE");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12MaterialBOEData()
}
function fetchZ4W12MaterialBOEData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=12&carriage_m=BOE`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Type_Arterial() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Arterial',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Type Arterial");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12TypeArterialData()
}
function fetchZ4W12TypeArterialData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=12&type=Arterial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Type_Sub_Arterial() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Sub Arterial',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Type Sub-Arterial");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12TypeSubArterialData()
}
function fetchZ4W12TypeSubArterialData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=12&type=Sub Arterial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Type_Collectors() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Collectors',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Type Collector");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12TypeCollectorData()
}
function fetchZ4W12TypeCollectorData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=12&type=Collectors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward12_Type_Urban_express_way() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Expressway',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Type Urban Express Way");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12TypeUrbanData()
}
function fetchZ4W12TypeUrbanData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=12&type=Urban Express Way`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Type_local_street() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Local Street',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Type Local Street");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12TypeLocalData()
}
function fetchZ4W12TypeLocalData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=12&type=Local Street`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Own_LDA() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_LDA',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Ownership LDA");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12OwnLDAData()
}
function fetchZ4W12OwnLDAData() {
    fetch(`${BASE_URL}/getZ4OwnWard_no?ward_no=12&ownership=LDA`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Own_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Own_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Ownership Other");

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12OwnOtherData()
}
function fetchZ4W12OwnOtherData() {
    fetch(`${BASE_URL}/getZ4OtherOwnWard_no?ward_no=12&ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Own_Private_Road() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_PRIVATE_ROAD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Ownership Private Road");

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12OwnPVTData()
}
function fetchZ4W12OwnPVTData() {
    fetch(`${BASE_URL}/getZ4OwnWard_no?ward_no=12&ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Own_PWD() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_PWD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Ownership PWD");

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12OwnPWDData()
}
function fetchZ4W12OwnPWDData() {
    fetch(`${BASE_URL}/getZ4OwnWard_no?ward_no=12&ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward12_Own_LNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_LNN',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Ownership LNN");

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12OwnLNNData()
}
function fetchZ4W12OwnLNNData() {
    fetch(`${BASE_URL}/getZ4OwnWard_no?ward_no=12&ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward12_CUS_14th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_14th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 CUS 14th");

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12CUS14thData()
}
function fetchZ4W12CUS14thData() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=12&cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward12_CUS_15th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_15th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 CUS 15th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12CUS15thData()
}
function fetchZ4W12CUS15thData() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=12&cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward12_CUS_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_Cus_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 CUS Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';
    fetchZ4W12CUSOtherData()
}
function fetchZ4W12CUSOtherData() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=12&cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_CUS_13th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_13th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 CUS 13th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12CUS13thData()
}
function fetchZ4W12CUS13thData() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=12&cus=13th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward12_CUS_NNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_Nagar Nigam Nidhi',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 CUS NNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12CUSNNNData()
}
function fetchZ4W12CUSNNNData() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=12&cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward12_Condition_Good() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_Green',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Condition Good");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12ConditionGreenData()
}
function fetchZ4W12ConditionGreenData() {
    fetch(`${BASE_URL}/getZ4ConditionWard_no?ward_no=12&condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Condition_Poor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Red',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Condition Poor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12ConditionRedData()
}
function fetchZ4W12ConditionRedData() {
    fetch(`${BASE_URL}/getZ4ConditionWard_no?ward_no=12&condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Condition_Moderate() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Yellow',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 Condition Moderate");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12ConditionYellowData()
}
function fetchZ4W12ConditionYellowData() {
    fetch(`${BASE_URL}/getZ4ConditionWard_no?ward_no=12&condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward12_ROW_Below6() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_Below 6',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 ROW Below 6");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12ROWBelow6Data()
}
function fetchZ4W12ROWBelow6Data() {
    fetch(`${BASE_URL}/getZ4ROWWard_no?ward_no=12&rowcls=Below 6`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_ROW_6to10() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w12z4lnn_6 to10',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 ROW 6 to 10");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12ROW6to10Data()
}
function fetchZ4W12ROW6to10Data() {
    fetch(`${BASE_URL}/getZ4ROWWard_no?ward_no=12&rowcls=6 to10`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_ROW_Above12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Above 12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward12 ROW Above 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W12ROWAbove12Data()
}
function fetchZ4W12ROWAbove12Data() {
    fetch(`${BASE_URL}/getZ4ROWWard_no?ward_no=12&rowcls=Above 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward12_Road_Length() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
  //  updateNavBarWithFunctionName("Ward12 Road Lenght-274.28Km");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Lucknow_Ward12_Road_Count() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w12z4lnn_Roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
  //  updateNavBarWithFunctionName("Ward12 Road Count-291");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}

//-----------------------------------------Ward14-----------------------------------//

function Lucknow_Ward14_CUS_14th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_14th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 CUS 14th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14CUS14Data()
}
function fetchZ4W14CUS14Data() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=14&cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_CUS_15th() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_15th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 CUS 15th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14CUS15Data()
}
function fetchZ4W14CUS15Data() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=14&cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward14_CUS_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_cus_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 CUS Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14CUSOtherData()
}
function fetchZ4W14CUSOtherData() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=14&cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_CUS_NNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Nagar Nigam Nidhi',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 CUS NNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14CUSNNNData()
}
function fetchZ4W14CUSNNNData() {
    fetch(`${BASE_URL}/getZ4CUSWard_no?ward_no=14&cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward14_ROW_Below6() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Below 6',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 ROW Below 6");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14ROWBelow6Data()
}
function fetchZ4W14ROWBelow6Data() {
    fetch(`${BASE_URL}/getZ4ROWWard_no?ward_no=14&rowcls=Below 6`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_ROW_6to10() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w14z4lnn_6 to10',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 ROW 6 to 10");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14ROW6to10Data()
}
function fetchZ4W14ROW6to10Data() {
    fetch(`${BASE_URL}/getZ4ROWWard_no?ward_no=14&rowcls=6 to10`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_ROW_Above12() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w14z4lnn_Above 12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 ROW Above 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14ROWAbove12Data()
}
function fetchZ4W14ROWAbove12Data() {
    fetch(`${BASE_URL}/getZ4ROWWard_no?ward_no=14&rowcls=Above 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Material_CC() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_CC',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Material CC");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14MaterialCCData()
}
function fetchZ4W14MaterialCCData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=14&carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Material_Bitumen() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w14z4lnn_Bitumen',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Material Bitumen");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14MaterialBitumenData()
}
function fetchZ4W14MaterialBitumenData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=14&carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Material_Kachcha() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Kachcha',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Material Kachcha");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14MaterialKachchaData()
}
function fetchZ4W14MaterialKachchaData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=14&carriage_m=Kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
function Lucknow_Ward14_Material_BOE() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_BOE',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Material BOE");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14MaterialBOEData()
}
function fetchZ4W14MaterialBOEData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=14&carriage_m=BOE`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
function Lucknow_Ward14_Material_Interlocking() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Interlocking',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Material Interlocking");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14MaterialInterlockingData()
}
function fetchZ4W14MaterialInterlockingData() {
    fetch(`${BASE_URL}/getZ4MaterialWard_no?ward_no=14&carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Own_Private_Road() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_PRIVATE_ROAD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Ownership Private Road");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14OwnPVTData()
}
function fetchZ4W14OwnPVTData() {
    fetch(`${BASE_URL}/getZ4OwnWard_no?ward_no=14&ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward14_Own_Others() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w14z4lnn_own_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Ownership Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14OwnOtherData()
}
function fetchZ4W14OwnOtherData() {
    fetch(`${BASE_URL}/getZ4OtherOwnWard_no?ward_no=14&ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward14_Own_PWD() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w14z4lnn_PWD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Ownership PWD");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14OwnPWDData();
}
function fetchZ4W14OwnPWDData() {
    fetch(`${BASE_URL}/getZ4OwnWard_no?ward_no=14&ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward14_Own_Other() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_own_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Ownership Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14OwnOtherData();
}
function fetchZ4W14OwnOtherData() {
    fetch(`${BASE_URL}/getZ4OtherOwnWard_no?ward_no=14&ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward14_Own_LNN() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_LNN',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Ownership LNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14OwnLNNData()
}
function fetchZ4W14OwnLNNData() {
    fetch(`${BASE_URL}/getZ4OwnWard_no?ward_no=14&ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward14_Condition_Good() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Green',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Condition Good");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14ConditionGreenData()
}
function fetchZ4W14ConditionGreenData() {
    fetch(`${BASE_URL}/getZ4ConditionWard_no?ward_no=14&condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Condition_Poor() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Red',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Condition Poor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14ConditionRedData()
}
function fetchZ4W14ConditionRedData() {
    fetch(`${BASE_URL}/getZ4ConditionWard_no?ward_no=14&condition=Red`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Condition_Moderate() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w14z4lnn_Yellow',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Condition Moderate");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14ConditionYellowData()
}
function fetchZ4W14ConditionYellowData() {
    fetch(`${BASE_URL}/getZ4ConditionWard_no?ward_no=14&condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward14_Road_Length() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
  //  updateNavBarWithFunctionName("Ward12 Road Lenght-337.61 Km");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Lucknow_Ward14_Road_Count() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
  //  updateNavBarWithFunctionName("Ward12 Road Count-2200");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}

function Lucknow_Ward14_Type_Arterial() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w14z4lnn_Arterial',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Type Arterial");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14TypeArterialData()
}
function fetchZ4W14TypeArterialData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=14&type=Arterial`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Type_local_street() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Local Street',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Type Local Street");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14TypeLocalData()
}
function fetchZ4W14TypeLocalData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=14&type=Local Street`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward14_Type_Collectors() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w14z4lnn_Collectors',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward14 Type Collector");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchZ4W14TypeCollectorData()
}
function fetchZ4W14TypeCollectorData() {
    fetch(`${BASE_URL}/getZ4TypeWard_no?ward_no=14&type=Collectors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//-----------------------------------------ward28-----------------------------------//

function Lucknow_Ward28_CUS_14th() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_14th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 CUS 14th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28cus14Data();
}
function fetchW28cus14Data() {
    fetch(`${BASE_URL1}/getZ1CUSWard_no?ward_no=28&cus=14th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_CUS_15th() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w28z1lnn_15th Finance',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 CUS 15th");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28cus15Data();
}
function fetchW28cus15Data() {
    fetch(`${BASE_URL1}/getZ1CUSWard_no?ward_no=28&cus=15th Finance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_CUS_Others() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Cus_Others',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 CUS Other");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28cusOtherData();
}
function fetchW28cusOtherData() {
    fetch(`${BASE_URL1}/getZ1CUSWard_no?ward_no=28&cus=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward28_Own_Private_Road() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w28z1lnn_PRIVATE_ROAD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Ownership Private Road");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';
    fetchW28OwnPrivateRoadData();
}
function fetchW28OwnPrivateRoadData() {
    fetch(`${BASE_URL1}/getZ1OwnWard_no?ward_no=28&ownership=PRIVATE ROAD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_CUS_NNN() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Nagar_Nigam_Nidhi',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28CUS NNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28cusNNNData();
}
function fetchW28cusNNNData() {
    fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=28&cus=Nagar Nigam Nidhi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward28_ROW_Below6() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Below 6',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 ROW Below 6");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28ROWBelow6Data();
}
function fetchW28ROWBelow6Data() {
    fetch(`${BASE_URL1}/getZ1ROWWard_no?ward_no=28&rowcls=Below 6`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward28_ROW_6to10() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_6 to10',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 ROW 6 to 10");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28ROW6to10Data();
}
function fetchW28ROW6to10Data() {
    fetch(`${BASE_URL1}/getZ1ROWWard_no?ward_no=28&rowcls=6 to10`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_ROW_10to12() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_10 to 12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 ROW 10 to 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28ROW10to12Data();
}
function fetchW28ROW10to12Data() {
    fetch(`${BASE_URL1}/getZ1ROWWard_no?ward_no=28&rowcls=10 to 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_ROW_Above12() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Above 12',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 ROW Above 12");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28ROWAbove12Data();
}
function fetchW28ROWAbove12Data() {
    fetch(`${BASE_URL1}/getZ1ROWWard_no?ward_no=28&rowcls=Above 12`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function Lucknow_Ward28_Material_CC() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_CC',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Material CC");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28MaterialCCData();
}
function fetchW28MaterialCCData() {
    fetch(`${BASE_URL1}/getZ1MaterialWard_no?ward_no=28&carriage_m=CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward28_Material_Bitumen() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Bitumen',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Material Bitumen");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28MaterialBData();
}
function fetchW28MaterialBData() {
    fetch(`${BASE_URL1}/getZ1MaterialWard_no?ward_no=28&carriage_m=Bitumen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_Material_Kachcha() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w28z1lnn_Kachcha',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Material Kachcha");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28MaterialKData();
}
function fetchW28MaterialKData() {
    fetch(`${BASE_URL1}/getZ1MaterialWard_no?ward_no=28&carriage_m=Kachcha`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_Material_Interlocking() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Interlocking',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Material Interlocking");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28MaterialInData();
}
function fetchW28MaterialInData() {
    fetch(`${BASE_URL1}/getZ1MaterialWard_no?ward_no=28&carriage_m=Interlocking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

/*-------------ownership --------------------------------------------*/
function Lucknow_Ward28_Own_Others() {
    // clearVectorLayers();
    removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Own_Others ',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Ownership Others");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28OwnOtherData();
}
function fetchW28OwnOtherData() {
    fetch(`${BASE_URL1}/getZ1OtherOwnWard_no?ward_no=28&ownership=Other`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_Own_PWD() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_PWD',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Material PWD");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28OwnPWDData();
}
function fetchW28OwnPWDData() {
    fetch(`${BASE_URL1}/getZ1OwnWard_no?ward_no=28&ownership=PWD`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_Own_LNN() {
    // clearVectorLayers();
    removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        //    title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_LNN',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Ownership LNN");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28OwnLNNData();
}
function fetchW28OwnLNNData() {
    fetch(`${BASE_URL1}/getZ1OwnWard_no?ward_no=28&ownership=LNN`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward28_Type_Major() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Major',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Type Major");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28TypeMajorData();
}
function fetchW28TypeMajorData() {
    fetch(`${BASE_URL1}/getZ1TypeWard_no?ward_no=28&type=Major`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_Type_Minor() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Minor',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Type Minor");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28TypeMinorData();
}
function fetchW28TypeMinorData() {
    fetch(`${BASE_URL1}/getZ1TypeWard_no?ward_no=28&type=Minor`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Lucknow_Ward28_Condition_Good() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': '	LNN_Summary_New:w28z1lnn_Green',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    updateNavBarWithFunctionName("Ward28 Condition Good");
    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28ConditionGreenData();
}
function fetchW28ConditionGreenData() {
    fetch(`${BASE_URL1}/getZ1ConditionWard_no?ward_no=28&condition=Green`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function Lucknow_Ward28_Condition_Moderate() {
    removeCurrentLayer();
    // clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary_New/wms',
            params: {
                'LAYERS': 'LNN_Summary_New:w28z1lnn_Yellow',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    updateNavBarWithFunctionName("Ward28 Condition Moderate");

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'block';

    fetchW28ConditionYellowData();
}
function fetchW28ConditionYellowData() {
    fetch(`${BASE_URL1}/getZ1ConditionWard_no?ward_no=28&condition=Yellow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Add any required request body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';

            // Pass the correct data to the function
            appendToSummaryTable(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
//------------------------------------------------------ clear vector layer ------------------------------------------------------------//
function clearVectorLayers() {
    // Create an array to hold layers that you want to preserve
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    // Clear overlays
}



/*------------------------------------- Zone Four Boundary Layer --------------------------------------------------*/

function fetchZoneData() {
    // Ensure the WMS layer is removed
    removeCurrentLayer();
    console.log("function is calling from the backend");
    // Remove specific vector layers from the map
    clearVectorLayers();

    // Fetch the data using GET request
    fetch(`${BASE_URL}/getZone4Boundry`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    // Check if the item has a wkt_point property
                    if (item.wkt_point) {
                        addMultilinestringFeatureFromWKT_bear(item.wkt_point);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

legendBtn.addEventListener('click', function () {
    if (Road_Age_legend.style.display === 'none') {
        Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        Road_Age_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
    } else {
        Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
    }
});


/*------------------------------------- Zone One Boundary Layer --------------------------------------------------*/

function fetchZone_oneData() {
    // Ensure the WMS layer is removed
    removeCurrentLayer();
    console.log("function is calling from the backend");
    // Remove specific vector layers from the map
    clearVectorLayers();

    // Fetch the data using GET request
    fetch(`${BASE_URL}/getZone1Boundry`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    // Check if the item has a wkt_point property
                    if (item.wkt_point) {
                        addMultilinestringFeatureFromWKT_bear(item.wkt_point);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


/* ------------------------------------ ward 12 Boundry ----------------------------------------------*/

function fetchZoneWard12Data() {
    // Ensure the WMS layer is removed
    removeCurrentLayer();
    console.log("function is calling from the backend");
    // Remove specific vector layers from the map
    clearVectorLayers();

    // Fetch the data using GET request
    fetch(`${BASE_URL}/getWard12Boundry`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    // Check if the item has a wkt_point property
                    if (item.wkt_point) {
                        addMultilinestringFeatureFromWKT_bear(item.wkt_point);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

/* ------------------------------------ ward 12 Boundry ----------------------------------------------*/

function fetchZoneWard14Data() {
    // Ensure the WMS layer is removed
    removeCurrentLayer();
    console.log("function is calling from the backend");
    // Remove specific vector layers from the map
    clearVectorLayers();

    // Fetch the data using GET request
    fetch(`${BASE_URL}/getWard14Boundry`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    // Check if the item has a wkt_point property
                    if (item.wkt_point) {
                        addMultilinestringFeatureFromWKT_bear(item.wkt_point);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function fetchZoneWard17Data() {
    // Ensure the WMS layer is removed
    removeCurrentLayer();
    console.log("function is calling from the backend");
    // Remove specific vector layers from the map
    clearVectorLayers();

    // Fetch the data using GET request
    fetch(`${BASE_URL}/getWard17Boundry`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    // Check if the item has a wkt_point property
                    if (item.wkt_point) {
                        addMultilinestringFeatureFromWKT_bear(item.wkt_point);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function fetchZoneWard28Data() {
    // Ensure the WMS layer is removed
    removeCurrentLayer();
    console.log("function is calling from the backend");
    // Remove specific vector layers from the map
    clearVectorLayers();

    // Fetch the data using GET request
    fetch(`${BASE_URL}/getWard28Boundry`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Received data:', responseData);

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    // Check if the item has a wkt_point property
                    if (item.wkt_point) {
                        addMultilinestringFeatureFromWKT_bear(item.wkt_point);
                    }
                });
            } else {
                console.error('Expected array but received:', responseData.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



// Bind the function to your event listener
// Less_than3_Zone1.addEventListener('click', fetchZoneData);

legendBtn.addEventListener('click', function () {
    if (Road_Age_legend.style.display === 'none') {
        Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        Road_Age_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
    } else {
        Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
        Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
    }
});











//----------------shoeted code for all road table and summary-----------------//


let highlightLayer;

map.on('singleclick', function (evt) {
    let viewResolution = map.getView().getResolution();
    let wmsSource = currentLayer.getSource();
    let url = wmsSource.getFeatureInfoUrl(
        evt.coordinate,
        viewResolution,
        'EPSG:4326',
        { 'INFO_FORMAT': 'application/json' } // Get JSON response
    );
    if (url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('GeoServer Response:', data);
                if (data.features && data.features.length > 0) {
                    let properties = data.features[0].properties;
                    let gisId = properties.gis_id;
                    highlightTableRowByGISID(gisId);
                    highlightFeatureOnMap(gisId)
                }
            })
            .catch(error => console.error('Error fetching feature info:', error));
    }
});
// :white_check_mark: Function to Highlight the Corresponding Table Row
function highlightTableRowByGISID(gisId) {
    let tableRows = document.querySelectorAll("#dataTable_summary tbody tr");
    tableRows.forEach(row => {
        row.classList.remove("highlight"); // Remove previous highlight
        let rowGISID = row.getElementsByTagName("td")[0].innerText; // Assuming GIS ID is in the first column
        if (rowGISID == gisId) {
            row.classList.add("highlight");
            row.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
}
// :white_check_mark: Function to Append Data to Table and Add Click Event for Highlighting
function Table_Row_and_Layer_highlight(data) {
   // let dataTableBody_summary = document.getElementById("dataTableBody_summary");
    dataTableBody_summary.innerHTML = ""; // Clear previous data
    if (Array.isArray(data)) {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.gis_id}</td>
                <td>${item.zone_no}</td>
                <td>${item.zone_name}</td>
                <td>${item.ward_no}</td>
                <td>${item.ward_name}</td>
                <td>${item.ownership}</td>
                <td>${item.type}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_as_per}</td>
                <td>${item.carriage_w}</td>
                <td>${item.carriage_m}</td>
                <td>${item.length_km}</td>
                <td>${item.condition}</td>
                <td>${item.year_of_co}</td>
                <td>${item.cus}</td>
            `;
            // :white_check_mark: Add Click Event to Row
            row.addEventListener('click', function () {
                let gisId = item.gis_id; // Get GIS ID from row data
                highlightFeatureOnMap(gisId); // Call function to highlight feature
                highlightTableRow(row); // Highlight the selected table row
            });
            dataTableBody_summary.appendChild(row);
        });
    } else {
        console.error('Expected an array but received:', data);
    }
}
// :white_check_mark: Function to Highlight the Table Row
function highlightTableRow(selectedRow) {
    let tableRows = document.querySelectorAll("#dataTable_summary tbody tr");
    tableRows.forEach(row => {
        row.classList.remove("highlight"); // Remove previous highlight
    });
    selectedRow.classList.add("highlight"); // Add highlight to selected row
}
// :white_check_mark: Function to Highlight Feature on Map Based on GIS ID
function highlightFeatureOnMap(gisId) {
    let wfsUrl = `http://localhost:8083/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature
        &typename=LNN_Summary:Lko_road
        &outputFormat=application/json
        &CQL_FILTER=gis_id=${gisId}`;
    console.log('Fetching Feature:', wfsUrl);
    fetch(wfsUrl)
        .then(response => response.json())
        .then(data => {
            console.log('WFS Response:', data); // :white_check_mark: Debug the response
            if (data.features && data.features.length > 0) {
                let feature = new ol.format.GeoJSON().readFeature(data.features[0], {
                    dataProjection: 'EPSG:4326',
                    featureProjection: map.getView().getProjection()
                });
                console.log('Feature to Highlight:', feature); // :white_check_mark: Debug feature
                addFeatureHighlight(feature);
            } else {
                console.warn('No matching feature found for GIS ID:', gisId);
            }
        })
        .catch(error => console.error('Error fetching WFS feature:', error));
}
// :white_check_mark: Function to Add and Highlight the Selected Feature
function addFeatureHighlight(feature) {
    map.removeLayer(highlightLayer);
    if (!feature) {
        console.warn("No feature found to highlight.");
        return;
    }
     highlightLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'yellow', // Highlight border color
                width: 7 // Stroke width
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 0, 0.3)' // Semi-transparent yellow fill
            })
        })
    });
    map.addLayer(highlightLayer); // Add highlight layer to map
   //.getSource().clear(); // Clear previous highlights
    highlightLayer.getSource().addFeature(feature); // Add feature to highlight layer
    // Ensure the feature has valid geometry before zooming
    let extent = feature.getGeometry().getExtent();
    if (extent && extent[0] !== Infinity) {
        map.getView().fit(extent, { duration: 1000, padding: [50, 50, 50, 50] });
    } else {
        console.warn("Feature has invalid geometry:", feature);
    }
}

// Function to update the displayed layer dynamically
// function updateAyodhyaRoadLayer(layerType) {
//     removeCurrentLayer();
//     clearVectorLayers();

//     // Define available layers
//     let layersMap = {
//         'type': 'ANN_Summary:ayodhaya_road_data',
//         'condition': 'ANN_Summary:ayodhaya_road_condition',
//         'material': 'ANN_Summary:ayodhaya_road_material',
//         'ownership': 'ANN_Summary:ayodhaya_road_ownership'
//     };
    
//     // Check if the selected layer exists
//     if (!layersMap[layerType]) {
//         console.error("Invalid layer type selected:", layerType);
//         return;
//     }

//     // Create a WMS layer based on user selection
//     let selectedLayer = new ol.layer.Image({
//         source: new ol.source.ImageWMS({
//             url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
//             params: {
//                 'LAYERS': layersMap[layerType],
//                 'TILED': true
//             },
//             ratio: 1,
//             serverType: 'geoserver'
//         })
//     });

//     selectedLayer.setZIndex(10); // Ensure it is displayed properly
//     map.addLayer(selectedLayer);
  
//     console.log(`Layer updated to: ${layersMap[layerType]}`);

//    // fetchTableData(layerType);
    
// }

function Ayodhya_Zone_no(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:Lko_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
   // ANN_Road();
    map.addLayer(currentLayer);
    // Show data table
    // Fetch corresponding data
    fetchANN_ALLFilteredData(column, value);
}
function Ayodhya_Ward_no(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:Lko_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    // Show data table
    // Fetch corresponding data
    fetchANN_ALLFilteredData(column, value);
}
function Ayodhya_Type_cat(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:Lko_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('type_legend').style.display = 'block';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData(column, value);
}
function Ayodhya_Condition_cat(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:Lko_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData(column, value);
}
function Ayodhya_Material_cat(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:Lko_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData(column, value);
    
}
function Ayodhya_Ownership_cat(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': '	LNN_Summary:Lko_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Ownership_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData(column, value);
}
// Function to fetch data dynamically based on column and value
function fetchANN_ALLFilteredData(column, value) {
    fetch(`${BASE_URL}/getData?column=${column}&value=${value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    })
        .then(response => response.json())
        .then(responseData => {
            console.log("Full API Response:", responseData); // :mag: Debugging
            if (!responseData || !Array.isArray(responseData.data)) {
                console.error("Invalid API response:", responseData);
                return; // :rotating_light: Prevent function execution if data is not valid
            }
           // appendToSummaryTable(responseData.data);
           Table_Row_and_Layer_highlight(responseData.data);
            document.getElementById('summary-table').style.display = 'none';
            document.getElementById('dataTable_summary').style.display = 'block';
            document.getElementById('tableContainer_summary').style.display = 'block';
        })
        .catch(error => {
            console.error(`Error fetching data for ${column}=${value}:`, error);
        });
       // document.getElementById('live_legend').addEventListener('click', showlegend);
        document.getElementById('type_legend').addEventListener('click', showlegend);
        document.getElementById('Condition_legend').addEventListener('click', showlegend);
        document.getElementById('Material_legend').addEventListener('click', showlegend);
        document.getElementById('Ownership_legend').addEventListener('click', showlegend);
        document.getElementById('Scoreing_tableContainer').style.display = 'none';
function showlegend() {
       
  //  var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'block';
    legendBtn.style.bottom = '20%';
    legendBtn.style.left = '1%'; // Example of additional style
    legendBtn.style.Color = 'color'; // Example of additional style
}
}

//--------------------Zonewise new code---------------------------------//
function Ayodhya_Zone_Condition(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `zone_no='${zone_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_condition', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    // Fetch corresponding data
    fetchANNFilteredData(zone_no, column, value);
}
function Ayodhya_Zone_Type(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `zone_no='${zone_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('type_legend').style.display = 'block';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANNFilteredData(zone_no, column, value);
}
function Ayodhya_Zone_Material(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `zone_no='${zone_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANNFilteredData(zone_no, column, value);
}
function Ayodhya_Zone_Ownership(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `zone_no='${zone_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Ownership_legend').style.display = 'block';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    fetchANNFilteredData(zone_no, column, value);
}
// Function to fetch data dynamically based on Zone, Column, and Value
function fetchANNFilteredData(zone_no, column, value) {
    fetch(`${BASE_URL}/getDataByZoneAndFilter?zone_no=${zone_no}&column=${column}&value=${value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(responseData => {
            console.log(`Received data for ${zone_no}, ${column}=${value}:`, responseData);
            dataTableBody_summary.innerHTML = ''; // Clear existing table rows
           // appendToSummaryTable(responseData.data);
           Table_Row_and_Layer_highlight(responseData.data);
            document.getElementById('summary-table').style.display = 'none';
            document.getElementById('dataTable_summary').style.display = 'block';
            document.getElementById('tableContainer_summary').style.display = 'block';
        })
        .catch(error => {
            console.error(`Error fetching data for ${zone_no}, ${column}=${value}:`, error);
        });
      //  document.getElementById('live_legend').addEventListener('click', showlegend);
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
        document.getElementById('type_legend').addEventListener('click', showlegend);
        document.getElementById('Condition_legend').addEventListener('click', showlegend);
        document.getElementById('Material_legend').addEventListener('click', showlegend);
        document.getElementById('Ownership_legend').addEventListener('click', showlegend);
function showlegend() {
       
  //  var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'block';
    legendBtn.style.top = '70%';
    legendBtn.style.left = '1%'; // Example of additional style
    legendBtn.style.Color = 'color'; // Example of additional style
}
}

//---------------------------Wardwise filter new code -----------------------//
function Ayodhya_Ward_Type(ward_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `ward_no='${ward_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    // Showlegend
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'block';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANNWardFilteredData(ward_no, column, value);
}
function Ayodhya_Ward_Condition(ward_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `ward_no='${ward_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_condition', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANNWardFilteredData(ward_no, column, value);
}
function Ayodhya_Ward_Material(ward_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `ward_no='${ward_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANNWardFilteredData(ward_no, column, value);
}
function Ayodhya_Ward_Ownership(ward_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "carriage_m", "ownership"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `ward_no='${ward_no}' AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'block';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANNWardFilteredData(ward_no, column, value);
}
// Function to fetch data dynamically based on Zone, Column, and Value
function fetchANNWardFilteredData(ward_no, column, value) {
    fetch(`${BASE_URL}/getDataByWardAndFilter?ward_no=${ward_no}&column=${column}&value=${value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(responseData => {
            console.log(`Received data for ${ward_no}, ${column}=${value}:`, responseData);
            dataTableBody_summary.innerHTML = ''; // Clear existing table rows
          //  appendToSummaryTable(responseData.data);
            Table_Row_and_Layer_highlight(responseData.data);
            document.getElementById('summary-table').style.display = 'none';
            document.getElementById('dataTable_summary').style.display = 'block';
            document.getElementById('tableContainer_summary').style.display = 'block';
        })
        .catch(error => {
            console.error(`Error fetching data for ${ward_no}, ${column}=${value}:`, error);
        });
        
}



//-------------------road filter using table dropdown according to type,zone, material,ownership--------------//


////////////////////------------------------ward,type, material filter--------------------/////
const wardSelect = document.getElementById("wardSelect");
const totalWards = 60;  // Number of wards you want to show
// Create options dynamically
for (let i = 1; i <= totalWards; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Ward " + i;
    wardSelect.appendChild(option);
}
const zoneSelect = document.getElementById("zoneSelect");
const totalZones = 3;  // Number of wards you want to show
// Create options dynamically
for (let i = 1; i <= totalZones; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Zone " + i;
    zoneSelect.appendChild(option);
}
//Get references to the dropdowns




// Function to fetch zones in dropdown
function fetchZones() {
    const zoneDropdown = document.getElementById('zoneSelect');

    // Clear existing options
    zoneDropdown.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Zone';
    defaultOption.disabled = true;  // Make it non-selectable
    defaultOption.selected = true; // Set as selected by default
    zoneDropdown.appendChild(defaultOption);

    // Fetch zones from the backend
    fetch(`${BASE_URL}/getZones`)
        .then(response => response.json())
        .then(data => {
            if (data.status && data.data.length > 0) {
                // Populate zones
                data.data.forEach(zone => {
                    const option = document.createElement('option');
                    option.value = zone.zone_no;      // Set the zone number as value
                    option.textContent = zone.zone_no; // Display only the zone number
                    zoneDropdown.appendChild(option);
                });
            } else {
                console.error('No zones found.');
            }
        })
        .catch(error => {
            console.error('Error fetching zones:', error);
        });
}

// Function to fetch wards based on selected zone in dropdown
function fetchWardsForZone(zone) {
    const wardDropdown = document.getElementById('wardSelect');

    // Clear current options
    wardDropdown.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Ward';
    defaultOption.disabled = true;  // Make it non-selectable
    defaultOption.selected = true; // Set as selected by default
    wardDropdown.appendChild(defaultOption);

    // Fetch wards for the selected zone
    fetch(`${BASE_URL}/getWardsForZone?zone_no=${zone}`)
        .then(response => response.json())
        .then(data => {
            if (data.status && data.data.length > 0) {
                // Populate wards in the dropdown
                data.data.forEach(ward => {
                    const option = document.createElement('option');
                    option.value = ward.ward_no;      // Set the ward number as value
                    option.textContent = ward.ward_no; // Display only the ward number
                    wardDropdown.appendChild(option);
                });
            } else {
                console.error('No wards found for the selected zone.');
            }
        })
        .catch(error => {
            console.error('Error fetching wards:', error);
        });
}



// Event listener for zone dropdown change
document.getElementById('zoneSelect').addEventListener('change', (e) => {
    const selectedZoneNo = e.target.value;

    if (selectedZoneNo) {
        console.log('Selected Zone No:', selectedZoneNo);

        // Fetch wards for the selected zone
        fetchWardsForZone(selectedZoneNo);

        // Optional: Update map layer
        updateMapLayer(selectedZoneNo);
        const cqlFilter = `zone_no=${selectedZoneNo}`;
        // Optional: Update map table
        updateTableWithFilteredData(cqlFilter);



    }
});



function updateMapLayer(zoneNo) {
    // Remove any existing layer 
    removeCurrentLayer();
    clearVectorLayers();

    // Add a new WMS layer with a CQL_FILTER for zone_no
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Zone ${zoneNo} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': `zone_no=${zoneNo}` // Add dynamic filtering by zone_no
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
    console.log(`Map updated with roads for Zone ${zoneNo}`);
    // updateTableWithFilteredData(cqlFilter);
}




function updateMapLayertype(type1) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `type='${type1}'`; // Ensure the type is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Type ${type1} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for type ${type1}`);
    updateTableWithFilteredData(cqlFilter);
}



function updateMapLayermaterial(carriage_m) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `carriage_m='${carriage_m}'`; // Ensure the material is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Material ${carriage_m} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for material ${carriage_m}`);
    updateTableWithFilteredData(cqlFilter);
}






fetchZones();


function updateMapLayerownership(ownership) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `ownership='${ownership}'`; // Ensure the type is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Ownership ${ownership} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for ownership ${ownership}`);
    updateTableWithFilteredData(cqlFilter);
}



let selectedZoneNo = null;
let selectedType = null;
let selectedMaterial = null;
let selectedOwnership = null;
let selectedWard1 = null;
// Zone dropdown
document.getElementById('zoneSelect').addEventListener('change', (event) => {
    selectedZoneNo = event.target.value;
    console.log(`Selected Zone No: ${selectedZoneNo}`);
    updateMapAndTable();
});

// Type dropdown
document.querySelector('.type-dropdown').addEventListener('change', (event) => {
    selectedType = event.target.value;
    selectedZoneNo = document.getElementById('zoneSelect').value;
    console.log(`Selected Type: ${selectedType}`);
    updateMapAndTable();
    if (!selectedZoneNo && selectedType) {
        console.log('Selected type wise road:', selectedType);

        // Optional: Update map layer
        updateMapLayertype(selectedType);

    }
});

// Material dropdown
document.querySelector('.material-dropdown').addEventListener('change', (event) => {
    selectedMaterial = event.target.value;
    selectedZoneNo = document.getElementById('zoneSelect').value;
    console.log(`Selected Material: ${selectedMaterial}`);
    updateMapAndTable();
    if (!selectedZoneNo && selectedMaterial) {
        console.log('Selected material wise road:', selectedMaterial);

        // Optional: Update map layer
        updateMapLayermaterial(selectedMaterial);

    }
});

// Ownership dropdown
document.querySelector('.ownership-dropdown').addEventListener('change', (event) => {
    selectedOwnership = event.target.value;
    selectedZoneNo = document.getElementById('zoneSelect').value;
    console.log(`Selected Ownership: ${selectedOwnership}`);
    updateMapAndTable();
    if (!selectedZoneNo && selectedOwnership) {
        console.log('Selected ownership wise road:', selectedOwnership);
        // Optional: Update map layer
        updateMapLayerownership(selectedOwnership);

    }
});

// ward dropdown
document.querySelector('.ward-dropdown').addEventListener('change', (event) => {
    selectedWard1 = event.target.value;
    console.log(`Selected Ward: ${selectedWard1}`);
    updateMapAndTable();
});


function updateMapAndTable() {
    if (!selectedZoneNo) {
        console.warn('Zone must be selected.');
        return;
    }

    // Construct the CQL_FILTER dynamically
    let cqlFilter = `zone_no=${selectedZoneNo}`;
    if (selectedType) cqlFilter += ` AND type='${selectedType}'`;
    if (selectedMaterial) cqlFilter += ` AND carriage_m='${selectedMaterial}'`;
    if (selectedOwnership) cqlFilter += ` AND ownership='${selectedOwnership}'`;
    if (selectedWard1) cqlFilter += ` AND ward_no='${selectedWard1}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Update map layer
    updateMapLayerWithFilter(cqlFilter);

    // Update table
    updateTableWithFilteredData(cqlFilter);
    Ayodhya_Types(cqlFilter)
}
function updateMapLayerWithFilter(cqlFilter) {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
    console.log('Map layer updated with current filters.');
}





function updateTableWithFilteredData(cqlFilter) {
    const dataTableBody_summaryfilter = document.getElementById('dataBody_summaryfilter');
    const wfsUrl = `http://localhost:8083/geoserver/ANN_Summary/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_data&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

    fetch(wfsUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((geojson) => {
            const features = geojson.features;
            console.log('Fetched features:', features);

            // Clear existing rows in the table
            dataTableBody_summaryfilter.innerHTML = '';

            // Populate the table with filtered data
            features.forEach((feature) => {
                const properties = feature.properties;
                const row = `
                    <tr>
                        <td>${properties.gis_id}</td>
                        <td>${properties.zone_no || 'N/A'}</td>
                        <td>${properties.zone_name || 'N/A'}</td>
                        <td>${properties.ward_no || 'N/A'}</td>
                        <td>${properties.ward_name || 'N/A'}</td>
                        <td>${properties.ownership || 'N/A'}</td>
                        <td>${properties.type || 'N/A'}</td>
                        <td>${properties.road_name || 'N/A'}</td>
                        <td>${properties.row_meter || 'N/A'}</td>
                        <td>${properties.row_as_per || 'N/A'}</td>
                        <td>${properties.carriage_w || 'N/A'}</td>
                        <td>${properties.carriage_m || 'N/A'}</td>
                        <td>${properties.length_km || 'N/A'}</td>
                        <td>${properties.condition || 'N/A'}</td>
                        <td>${properties.year_of_co || 'N/A'}</td>
                        <td>${properties.cus || 'N/A'}</td>
                    </tr>
                `;
                dataTableBody_summaryfilter.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch((error) => {
            console.error('Error fetching WFS data:', error);
        });
}


//----------------WMS & WFS Layer of Road material-----------------//


////////////////////------------------------ward,type, material filter--------------------/////
const wardSelectmat = document.getElementById("wardSelectmat");
const totalWardsmat = 60;  // Number of wards you want to show
// Create options dynamically
for (let i = 1; i <= totalWardsmat; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Ward " + i;
    wardSelectmat.appendChild(option);
}
const zoneSelectmat = document.getElementById("zoneSelectmat");
const totalZonesmat = 3;  // Number of wards you want to show
// Create options dynamically
for (let i = 1; i <= totalZonesmat; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Zone " + i;
    zoneSelectmat.appendChild(option);
}
//Get references to the dropdowns




// Function to fetch zones in dropdown
function fetchZonesmat() {
    const zoneDropdown = document.getElementById('zoneSelectmat');

    // Clear existing options
    zoneDropdown.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Zone';
    defaultOption.disabled = true;  // Make it non-selectable
    defaultOption.selected = true; // Set as selected by default
    zoneDropdown.appendChild(defaultOption);

    // Fetch zones from the backend
    fetch(`${BASE_URL}/getZones`)
        .then(response => response.json())
        .then(data => {
            if (data.status && data.data.length > 0) {
                // Populate zones
                data.data.forEach(zone => {
                    const option = document.createElement('option');
                    option.value = zone.zone_no;      // Set the zone number as value
                    option.textContent = zone.zone_no; // Display only the zone number
                    zoneDropdown.appendChild(option);
                });
            } else {
                console.error('No zones found.');
            }
        })
        .catch(error => {
            console.error('Error fetching zones:', error);
        });
}
fetchZonesmat();
// Function to fetch wards based on selected zone in dropdown
function fetchWardsForZonemat(zone) {
    const wardDropdown = document.getElementById('wardSelectmat');

    // Clear current options
    wardDropdown.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Ward';
    defaultOption.disabled = true;  // Make it non-selectable
    defaultOption.selected = true; // Set as selected by default
    wardDropdown.appendChild(defaultOption);

    // Fetch wards for the selected zone
    fetch(`${BASE_URL}/getWardsForZone?zone_no=${zone}`)
        .then(response => response.json())
        .then(data => {
            if (data.status && data.data.length > 0) {
                // Populate wards in the dropdown
                data.data.forEach(ward => {
                    const option = document.createElement('option');
                    option.value = ward.ward_no;      // Set the ward number as value
                    option.textContent = ward.ward_no; // Display only the ward number
                    wardDropdown.appendChild(option);
                });
            } else {
                console.error('No wards found for the selected zone.');
            }
        })
        .catch(error => {
            console.error('Error fetching wards:', error);
        });
}



// Event listener for zone dropdown change
document.getElementById('zoneSelectmat').addEventListener('change', (e) => {
    const selectedZoneNo = e.target.value;

    if (selectedZoneNo) {
        console.log('Selected Zone No:', selectedZoneNo);

        // Fetch wards for the selected zone
        fetchWardsForZonemat(selectedZoneNo);

        // Optional: Update map layer
        updateMapLayermat(selectedZoneNo);
        const cqlFilter = `zone_no=${selectedZoneNo}`;
        // Optional: Update map table
        updateTableWithFilteredDatamat(cqlFilter);



    }
});

function updateMapLayermat(zoneNo) {
    // Remove any existing layer 
    removeCurrentLayer();
    clearVectorLayers();

    // Add a new WMS layer with a CQL_FILTER for zone_no
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Zone ${zoneNo} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': `zone_no=${zoneNo}` // Add dynamic filtering by zone_no
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
    console.log(`Map updated with roads for Zone ${zoneNo}`);
    // updateTableWithFilteredData(cqlFilter);
}

function updateMapLayertypemat(type) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `type='${type}'`; // Ensure the type is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Type ${type} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for type ${type}`);
    updateTableWithFilteredDatamat(cqlFilter);
}



function updateMapLayermaterialmat(carriage_m) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `carriage_m='${carriage_m}'`; // Ensure the material is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Material ${carriage_m} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for material ${carriage_m}`);
    updateTableWithFilteredDatamat(cqlFilter);
}


function updateMapLayerownershipmat(ownership) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `ownership='${ownership}'`; // Ensure the type is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Ownership ${ownership} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for ownership ${ownership}`);
    updateTableWithFilteredDatamat(cqlFilter);
}



let selectedZoneNomat = null;
let selectedTypemat = null;
let selectedMaterialmat = null;
let selectedOwnershipmat = null;
let selectedWardmat = null;
// Zone dropdown
document.getElementById('zoneSelectmat').addEventListener('change', (event) => {
    selectedZoneNomat = event.target.value;
    console.log(`Selected Zone No: ${selectedZoneNo}`);
    updateMapAndTablemat();
});

// Type dropdown
document.querySelector('.type-dropdownmat').addEventListener('change', (event) => {
    selectedTypemat = event.target.value;
    selectedZoneNomat = document.getElementById('zoneSelectmat').value;
    console.log(`Selected Type: ${selectedTypemat}`);
    updateMapAndTablemat();
    if (!selectedZoneNomat && selectedTypemat) {
        console.log('Selected type wise road:', selectedTypemat);

        // Optional: Update map layer
        updateMapLayertypemat(selectedTypemat);

    }
});

// Material dropdown
document.querySelector('.material-dropdownmat').addEventListener('change', (event) => {
    selectedMaterialmat = event.target.value;
    selectedZoneNomat = document.getElementById('zoneSelectmat').value;
    console.log(`Selected Material: ${selectedMaterialmat}`);
    updateMapAndTablemat();
    if (!selectedZoneNomat && selectedMaterialmat) {
        console.log('Selected material wise road:', selectedMaterialmat);

        // Optional: Update map layer
        updateMapLayermaterialmat(selectedMaterialmat);

    }
});

// Ownership dropdown
document.querySelector('.ownership-dropdownmat').addEventListener('change', (event) => {
    selectedOwnershipmat = event.target.value;
    selectedZoneNomat = document.getElementById('zoneSelectmat').value;
    console.log(`Selected Ownership: ${selectedOwnershipmat}`);
    updateMapAndTablemat();
    if (!selectedZoneNomat && selectedOwnershipmat) {
        console.log('Selected ownership wise road:', selectedOwnershipmat);
        // Optional: Update map layer
        updateMapLayerownershipmat(selectedOwnershipmat);

    }
});

// ward dropdown
document.querySelector('.ward-dropdownmat').addEventListener('change', (event) => {
    selectedWardmat = event.target.value;
    console.log(`Selected Ward: ${selectedWardmat}`);
    updateMapAndTablemat();
});
function updateMapAndTablemat() {
    if (!selectedZoneNomat) {
        console.warn('Zone must be selected.');
        return;
    }

    // Construct the CQL_FILTER dynamically
    let cqlFilter = `zone_no=${selectedZoneNomat}`;
    if (selectedTypemat) cqlFilter += ` AND type='${selectedTypemat}'`;
    if (selectedMaterialmat) cqlFilter += ` AND carriage_m='${selectedMaterialmat}'`;
    if (selectedOwnershipmat) cqlFilter += ` AND ownership='${selectedOwnershipmat}'`;
    if (selectedWardmat) cqlFilter += ` AND ward_no='${selectedWardmat}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Update map layer
    updateMapLayerWithFiltermat(cqlFilter);

    // Update table
    updateTableWithFilteredDatamat(cqlFilter);
    // Ayodhya_Types(cqlFilter)
}
function updateMapLayerWithFiltermat(cqlFilter) {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
    console.log('Map layer updated with current filters.');
}


function updateTableWithFilteredDatamat(cqlFilter) {
    const dataTableBody_summaryfiltermat = document.getElementById('dataBody_summaryfiltermat');
    const wfsUrl = `http://localhost:8083/geoserver/ANN_Summary/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_material&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

    fetch(wfsUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((geojson) => {
            const features = geojson.features;
            console.log('Fetched features:', features);

            // Clear existing rows in the table
            dataTableBody_summaryfiltermat.innerHTML = '';

            // Populate the table with filtered data
            features.forEach((feature) => {
                const properties = feature.properties;
                const row = `
                    <tr>
                        <td>${properties.gis_id}</td>
                        <td>${properties.zone_no || 'N/A'}</td>
                        <td>${properties.zone_name || 'N/A'}</td>
                        <td>${properties.ward_no || 'N/A'}</td>
                        <td>${properties.ward_name || 'N/A'}</td>
                        <td>${properties.ownership || 'N/A'}</td>
                        <td>${properties.type || 'N/A'}</td>
                        <td>${properties.road_name || 'N/A'}</td>
                        <td>${properties.row_meter || 'N/A'}</td>
                        <td>${properties.row_as_per || 'N/A'}</td>
                        <td>${properties.carriage_w || 'N/A'}</td>
                        <td>${properties.carriage_m || 'N/A'}</td>
                        <td>${properties.length_km || 'N/A'}</td>
                        <td>${properties.condition || 'N/A'}</td>
                        <td>${properties.year_of_co || 'N/A'}</td>
                        <td>${properties.cus || 'N/A'}</td>
                    </tr>
                `;
                dataTableBody_summaryfiltermat.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch((error) => {
            console.error('Error fetching WFS data:', error);
        });
}

//-------------------Ownership Road filter code---------------//


////////////////////------------------------ward,type, Ownerial filter--------------------/////
const wardSelectOwn = document.getElementById("wardSelectOwn");
const totalWardsOwn = 60;  // Number of wards you want to show
// Create options dynamically
for (let i = 1; i <= totalWardsOwn; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Ward " + i;
    wardSelectOwn.appendChild(option);
}
const zoneSelectOwn = document.getElementById("zoneSelectOwn");
const totalZonesOwn = 3;  // Number of wards you want to show
// Create options dynamically
for (let i = 1; i <= totalZonesOwn; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = "Zone " + i;
    zoneSelectOwn.appendChild(option);
}
//Get references to the dropdowns




// Function to fetch zones in dropdown
function fetchZonesOwn() {
    const zoneDropdown = document.getElementById('zoneSelectOwn');

    // Clear existing options
    zoneDropdown.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Zone';
    defaultOption.disabled = true;  // Make it non-selectable
    defaultOption.selected = true; // Set as selected by default
    zoneDropdown.appendChild(defaultOption);

    // Fetch zones from the backend
    fetch(`${BASE_URL}/getZones`)
        .then(response => response.json())
        .then(data => {
            if (data.status && data.data.length > 0) {
                // Populate zones
                data.data.forEach(zone => {
                    const option = document.createElement('option');
                    option.value = zone.zone_no;      // Set the zone number as value
                    option.textContent = zone.zone_no; // Display only the zone number
                    zoneDropdown.appendChild(option);
                });
            } else {
                console.error('No zones found.');
            }
        })
        .catch(error => {
            console.error('Error fetching zones:', error);
        });
}
fetchZonesOwn();
// Function to fetch wards based on selected zone in dropdown
function fetchWardsForZoneOwn(zone) {
    const wardDropdown = document.getElementById('wardSelectOwn');

    // Clear current options
    wardDropdown.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Ward';
    defaultOption.disabled = true;  // Make it non-selectable
    defaultOption.selected = true; // Set as selected by default
    wardDropdown.appendChild(defaultOption);

    // Fetch wards for the selected zone
    fetch(`${BASE_URL}/getWardsForZone?zone_no=${zone}`)
        .then(response => response.json())
        .then(data => {
            if (data.status && data.data.length > 0) {
                // Populate wards in the dropdown
                data.data.forEach(ward => {
                    const option = document.createElement('option');
                    option.value = ward.ward_no;      // Set the ward number as value
                    option.textContent = ward.ward_no; // Display only the ward number
                    wardDropdown.appendChild(option);
                });
            } else {
                console.error('No wards found for the selected zone.');
            }
        })
        .catch(error => {
            console.error('Error fetching wards:', error);
        });
}

// Event listener for zone dropdown change
document.getElementById('zoneSelectOwn').addEventListener('change', (e) => {
    const selectedZoneNo = e.target.value;

    if (selectedZoneNo) {
        console.log('Selected Zone No:', selectedZoneNo);

        // Fetch wards for the selected zone
        fetchWardsForZoneOwn(selectedZoneNo);

        // Optional: Update map layer
        updateMapLayerOwn(selectedZoneNo);
        const cqlFilter = `zone_no=${selectedZoneNo}`;
        // Optional: Update map table
        updateTableWithFilteredDataOwn(cqlFilter);

    }
});

function updateMapLayerOwn(zoneNo) {
    // Remove any existing layer 
    removeCurrentLayer();
    clearVectorLayers();

    // Add a new WMS layer with a CQL_FILTER for zone_no
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Zone ${zoneNo} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': `zone_no=${zoneNo}` // Add dynamic filtering by zone_no
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
    console.log(`Map updated with roads for Zone ${zoneNo}`);
    // updateTableWithFilteredData(cqlFilter);
}

function updateMapLayertypeOwn(typeown) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `type='${typeown}'`; // Ensure the type is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Type ${typeown} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for type ${typeown}`);
    updateTableWithFilteredDataOwn(cqlFilter);

}

function updateMapLayermaterialOwn(carriage_m) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `carriage_m='${carriage_m}'`; // Ensure the Ownerial is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Material ${carriage_m} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for material ${carriage_m}`);
    updateTableWithFilteredDataOwn(cqlFilter);
}

function updateMapLayerownershipOwn(ownership) {
    // Remove any existing layer
    removeCurrentLayer();
    clearVectorLayers();

    // Construct the CQL_FILTER
    const cqlFilter = `ownership='${ownership}'`; // Ensure the type is enclosed in quotes
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Add a new WMS layer with the CQL_FILTER
    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Ownership ${ownership} Roads`,
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter // Apply single filter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    // Add the layer to the map
    map.addLayer(currentLayer);
    console.log(`Map updated with roads for ownership ${ownership}`);
    updateTableWithFilteredDataOwn(cqlFilter);
}



let selectedZoneNoOwn = null;
let selectedTypeOwn = null;
let selectedMaterialOwn = null;
let selectedOwnershipOwn = null;
let selectedWardOwn = null;
// Zone dropdown
document.getElementById('zoneSelectOwn').addEventListener('change', (event) => {
    selectedZoneNoOwn = event.target.value;
    console.log(`Selected Zone No: ${selectedZoneNoOwn}`);
    updateMapAndTableOwn();
});

// Type dropdown
document.querySelector('.type-dropdownOwn').addEventListener('change', (event) => {
    selectedTypeOwn = event.target.value;
    selectedZoneNoOwn = document.getElementById('zoneSelectOwn').value;
    console.log(`Selected Type: ${selectedTypeOwn}`);
    updateMapAndTableOwn();
    if (!selectedZoneNoOwn && selectedTypeOwn) {
        console.log('Selected type wise road:', selectedTypeOwn);

        // Optional: Update map layer
        updateMapLayertypeOwn(selectedTypeOwn);

    }
});

// Material dropdown
document.querySelector('.material-dropdownOwn').addEventListener('change', (event) => {
    selectedMaterialOwn = event.target.value;
    selectedZoneNoOwn = document.getElementById('zoneSelectOwn').value;
    console.log(`Selected Material: ${selectedMaterialOwn}`);
    updateMapAndTableOwn();
    if (!selectedZoneNoOwn && selectedMaterialOwn) {
        console.log('Selected material wise road:', selectedMaterialOwn);

        // Optional: Update map layer
        updateMapLayermaterialOwn(selectedMaterialOwn);

    }
});

// Ownership dropdown
document.querySelector('.ownership-dropdownOwn').addEventListener('change', (event) => {
    selectedOwnershipOwn = event.target.value;
    selectedZoneNoOwn = document.getElementById('zoneSelectOwn').value;
    console.log(`Selected Ownership: ${selectedOwnershipOwn}`);
    updateMapAndTableOwn();
    if (!selectedZoneNoOwn && selectedOwnershipOwn) {
        console.log('Selected ownership wise road:', selectedOwnershipOwn);
        // Optional: Update map layer
        updateMapLayerownershipOwn(selectedOwnershipOwn);

    }
});

// ward dropdown
document.querySelector('.ward-dropdownOwn').addEventListener('change', (event) => {
    selectedWardOwn = event.target.value;
    console.log(`Selected Ward: ${selectedWardOwn}`);
    updateMapAndTableOwn();
});

function updateMapAndTableOwn() {
    if (!selectedZoneNoOwn) {
        console.warn('Zone must be selected.');
        return;
    }

    // Construct the CQL_FILTER dynamically
    let cqlFilter = `zone_no=${selectedZoneNoOwn}`;
    if (selectedTypeOwn) cqlFilter += ` AND type='${selectedTypeOwn}'`;
    if (selectedMaterialOwn) cqlFilter += ` AND carriage_m='${selectedMaterialOwn}'`;
    if (selectedOwnershipOwn) cqlFilter += ` AND ownership='${selectedOwnershipOwn}'`;
    if (selectedWardOwn) cqlFilter += ` AND ward_no='${selectedWardOwn}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Update map layer
    updateMapLayerWithFilterOwn(cqlFilter);

    // Update table
    updateTableWithFilteredDataOwn(cqlFilter);
    //  Ayodhya_Types(cqlFilter)
}
function updateMapLayerWithFilterOwn(cqlFilter) {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://localhost:8083/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Replace with your actual layer name
                'TILED': true,
                'CQL_FILTER': cqlFilter
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
    console.log('Map layer updated with current filters.');
}


function updateTableWithFilteredDataOwn(cqlFilter) {
    const dataTableBody_summaryfilterOwn = document.getElementById('dataBody_summaryfilterOwn');
    const wfsUrl = `http://localhost:8083/geoserver/ANN_Summary/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_ownership&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

    fetch(wfsUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Received non-JSON response from GeoServer');
            }
            return response.json();
        })
        .then((geojson) => {
            const features = geojson.features;
            console.log('Fetched features:', features);

            // Clear existing rows in the table
            dataTableBody_summaryfilterOwn.innerHTML = '';

            // Populate the table with filtered data
            features.forEach((feature) => {
                const properties = feature.properties;
                const row = `
                    <tr>
                        <td>${properties.gis_id}</td>
                        <td>${properties.zone_no || 'N/A'}</td>
                        <td>${properties.zone_name || 'N/A'}</td>
                        <td>${properties.ward_no || 'N/A'}</td>
                        <td>${properties.ward_name || 'N/A'}</td>
                        <td>${properties.ownership || 'N/A'}</td>
                        <td>${properties.type || 'N/A'}</td>
                        <td>${properties.road_name || 'N/A'}</td>
                        <td>${properties.row_meter || 'N/A'}</td>
                        <td>${properties.row_as_per || 'N/A'}</td>
                        <td>${properties.carriage_w || 'N/A'}</td>
                        <td>${properties.carriage_m || 'N/A'}</td>
                        <td>${properties.length_km || 'N/A'}</td>
                        <td>${properties.condition || 'N/A'}</td>
                        <td>${properties.year_of_co || 'N/A'}</td>
                        <td>${properties.cus || 'N/A'}</td>
                    </tr>
                `;
                dataTableBody_summaryfilterOwn.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch((error) => {
            console.error('Error fetching WFS data:', error);
        });
}

