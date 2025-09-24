const BASE_URL = `${BASE_URL_All}:8182/Ayodhya`;

//---------------------- header section start --------------------------//
//----------------------------------------- sidebar amenities show and hide elements -------------------------
const roadButtons = [
    'Slum_Road', 'Bank_Road', 'Park_Road', 'Hospital_Road', 
    'Hotel_Road', 'Education_Road', 'ShowRoads'];

const elementsToHide = [
    'live_legend', 'type_legend', 'tableContainer_Drain', 
    'dataTable_Drain', 'Scoring_dataTable', 'Scoreing_tableContainer', 
    'tableContainer_summary', 'tableContainer_summaryfiltermat', 
    'tableContainer_summaryfilter', 'tableContainer_summaryfilterOwn', 
    'summary-table', 'Drain_Type_Legend', 'Drain_Condition_Legend', 
    'Drain_Material_Legend', 'Drain_Status_Legend'];

function hideElements(elements) {
    elements.forEach(elementId => {
        document.getElementById(elementId).style.display = 'none';
    });}

function showTables() {
    document.getElementById('dataTable').style.display = 'block';
    document.getElementById('tableContainer').style.display = 'block';
    hideElements(elementsToHide);
}

roadButtons.forEach(buttonId => {
    document.getElementById(buttonId).addEventListener('click', showTables);
});

//---------------------------------------- sidebar drainage show and hide elements -------------------------
document.getElementById('ShowDrainage').addEventListener('click', showTables1);

const elementsToHide1 = ['dataTable', 'tableContainer', 'Scoreing_tableContainer', 'Scoring_dataTable', 
    'summary-table', 'live_legend', 'type_legend', 'Condition_legend', 
    'Material_legend', 'Ownership_legend', 'Priority_legend', 
    'tableContainer_summary', 'tableContainer_summaryfiltermat', 
    'tableContainer_summaryfilter', 'tableContainer_summaryfilterOwn'
];

function hideElements1(elements) {
    elements.forEach(elementId => {
        document.getElementById(elementId).style.display = 'none';
    });
}

function showTables1() {
    document.getElementById('tableContainer_Drain').style.display = 'block';
    document.getElementById('dataTable_Drain').style.display = 'block';

    hideElements1(elementsToHide1);

    const legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'block';
    legendBtn.style.bottom = '30%';
    legendBtn.style.left = '1%';
    legendBtn.style.Color = 'color'; 
}

//------------------------------------ summary tables show and hide elements -------------------------
document.getElementById('table_icon').addEventListener('click', showTables2);

const elementsToHide2 = [
    'dataTable', 'tableContainer', 'Scoring_dataTable', 'Scoreing_tableContainer', 
    'tableContainer_summary', 'tableContainer_Drain', 'dataTable_Drain', 
    'legendBtn', 'live_legend', 'type_legend', 'Condition_legend', 
    'Material_legend', 'Ownership_legend', 'Priority_legend', 
    'Drain_Type_Legend', 'Drain_Condition_Legend', 'Drain_Material_Legend', 'Drain_Status_Legend'
];

function hideElements2(elements) {
    elements.forEach(elementId => {
        document.getElementById(elementId).style.display = 'none';
    });
}

function showTables2() {
    document.getElementById('summary-table').style.display = 'block';
    hideElements2(elementsToHide2);
}

//------------------------------------ sidebar amenities show and hide elements -------------------------

const elementsToHide3 = [
    'dataTable', 'tableContainer', 'tableContainer_Drain', 'tableContainer_summary',
    'tableContainer_summaryfiltermat', 'tableContainer_summaryfilter', 'tableContainer_summaryfilterOwn',
    'Ownership_legend', 'Material_legend', 'Condition_legend', 'type_legend',
    'Drain_Type_Legend', 'Drain_Condition_Legend', 'Drain_Material_Legend', 'Drain_Status_Legend',
    'summary-table'
];

function hideElements1(elements) {
    elements.forEach(elementId => {
        document.getElementById(elementId).style.display = 'none';
    });
}

function showTables3() {
    document.getElementById('Scoring_dataTable').style.display = 'block';
    document.getElementById('Scoreing_tableContainer').style.display = 'block';

    hideElements1(elementsToHide3);

    const legendBtn = document.getElementById('Priority_legend');
    legendBtn.style.display = 'block';
    legendBtn.style.height = '15%';
    legendBtn.style.top = '55%';
    legendBtn.style.left = '1%';
    legendBtn.style.color = 'color'; 
}

['P1', 'P2', 'Not_Eligible'].forEach(buttonId => {
    document.getElementById(buttonId).addEventListener('click', showTables3);
});

// document.getElementById('Slum_Road').addEventListener('click', showTables);
// document.getElementById('Bank_Road').addEventListener('click', showTables);
// document.getElementById('Park_Road').addEventListener('click', showTables);
// document.getElementById('Hospital_Road').addEventListener('click', showTables);
// document.getElementById('Hotel_Road').addEventListener('click', showTables);
// document.getElementById('Education_Road').addEventListener('click', showTables);

// document.getElementById('ShowRoads').addEventListener('click', showTables);

// function showTables() {
//     // document.getElementById('table_data').style.display = 'block';

//     document.getElementById('dataTable').style.display = 'block';
//     document.getElementById('tableContainer').style.display = 'block';
//     document.getElementById('live_legend').style.display = 'none';
//     document.getElementById('type_legend').style.display = 'none';
//     document.getElementById('tableContainer_Drain').style.display = 'none';
//     document.getElementById('dataTable_Drain').style.display = 'none';
//     document.getElementById('Scoring_dataTable').style.display = 'none';
//     document.getElementById('Scoreing_tableContainer').style.display = 'none';
//     document.getElementById('tableContainer_summary').style.display = 'none';

//     document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
//     document.getElementById('tableContainer_summaryfilter').style.display = 'none';
//     document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';

//     document.getElementById('summary-table').style.display = 'none';

//     document.getElementById('Drain_Type_Legend').style.display = 'none';
//     document.getElementById('Drain_Condition_Legend').style.display = 'none';
//     document.getElementById('Drain_Material_Legend').style.display = 'none';
//     document.getElementById('Drain_Status_Legend').style.display = 'none';
// }

// document.getElementById('ShowDrainage').addEventListener('click', showTables1);

// function showTables1() {
//     // document.getElementById('table_data').style.display = 'block';
//     document.getElementById('tableContainer_Drain').style.display = 'block';
//     document.getElementById('dataTable_Drain').style.display = 'block';
//     document.getElementById('dataTable').style.display = 'none';
//     document.getElementById('tableContainer').style.display = 'none';
//     document.getElementById('Scoreing_tableContainer').style.display = 'none';
//     document.getElementById('Scoring_dataTable').style.display = 'none';
//     document.getElementById('summary-table').style.display = 'none';
//     var legendBtn = document.getElementById('legendBtn');
//     legendBtn.style.display = 'block';
//     legendBtn.style.bottom = '30%';
//     legendBtn.style.left = '1%'; // Example of additional style
//     legendBtn.style.Color = 'color'; // Example of additional style
//     document.getElementById('live_legend').style.display = 'none';
//     document.getElementById('type_legend').style.display = 'none';
//     document.getElementById('Condition_legend').style.display = 'none';
//     document.getElementById('Material_legend').style.display = 'none';
//     document.getElementById('Ownership_legend').style.display = 'none';
//     document.getElementById('Priority_legend').style.display = 'none';
//     document.getElementById('tableContainer_summary').style.display = 'none';
//     document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
//     document.getElementById('tableContainer_summaryfilter').style.display = 'none';
//     document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';

// }
// document.getElementById('table_icon').addEventListener('click', showTables2);

// function showTables2() {
//     // document.getElementById('table_data').style.display = 'block';
//     document.getElementById('dataTable').style.display = 'none';
//     document.getElementById('tableContainer').style.display = 'none';
//     document.getElementById('summary-table').style.display = 'block';
//     document.getElementById('Scoring_dataTable').style.display = 'none';
//     document.getElementById('Scoreing_tableContainer').style.display = 'none';
//     document.getElementById('tableContainer_summary').style.display = 'none';
//     document.getElementById('tableContainer_Drain').style.display = 'none';
//     document.getElementById('dataTable_Drain').style.display = 'none';
    
//     document.getElementById('legendBtn').style.display = 'none';
//     document.getElementById('live_legend').style.display = 'none';
//     document.getElementById('type_legend').style.display = 'none';
//     document.getElementById('Condition_legend').style.display = 'none';
//     document.getElementById('Material_legend').style.display = 'none';
//     document.getElementById('Ownership_legend').style.display = 'none';
//     document.getElementById('Priority_legend').style.display = 'none';
//     document.getElementById('Drain_Type_Legend').style.display = 'none';
//     document.getElementById('Drain_Condition_Legend').style.display = 'none';
//     document.getElementById('Drain_Material_Legend').style.display = 'none';
//     document.getElementById('Drain_Status_Legend').style.display = 'none';

// }

// document.getElementById('P1').addEventListener('click', showTables3);
// document.getElementById('P2').addEventListener('click', showTables3);
// document.getElementById('Not_Eligible').addEventListener('click', showTables3);

// function showTables3() {
//     document.getElementById('Scoring_dataTable').style.display = 'block';
//     document.getElementById('dataTable').style.display = 'none';
//     document.getElementById('tableContainer').style.display = 'none';
//     document.getElementById('tableContainer_Drain').style.display = 'none';

//     document.getElementById('Scoreing_tableContainer').style.display = 'block';
//     document.getElementById('tableContainer_summary').style.display = 'none';

//     document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
//     document.getElementById('tableContainer_summaryfilter').style.display = 'none';
//     document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';
//     document.getElementById('Ownership_legend').style.display = 'none';
//     document.getElementById('Material_legend').style.display = 'none';
//     document.getElementById('Condition_legend').style.display = 'none';
//     document.getElementById('type_legend').style.display = 'none';

//     document.getElementById('Drain_Type_Legend').style.display = 'none';
//     document.getElementById('Drain_Condition_Legend').style.display = 'none';
//     document.getElementById('Drain_Material_Legend').style.display = 'none';
//     document.getElementById('Drain_Status_Legend').style.display = 'none';

//     document.getElementById('summary-table').style.display = 'none';
//     var legendBtn = document.getElementById('Priority_legend');
//     legendBtn.style.display = 'block';legendBtn.style.height = '15%';
//     legendBtn.style.top = '55%';
//     legendBtn.style.left = '1%'; // Example of additional style
//     legendBtn.style.Color = 'color'; // Example of additional style

// }

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


var map, geojson, featureOverlay, overlays, style;
var selected, features, layer_name, layerControl;
var content, draw;
var selectedFeature;
// const london = fromLonLat([-0.12755, 51.507222]);

var view = new ol.View({
    projection: "EPSG:4326",
    center: [82.18491, 26.8329],
    zoom: 12.5,
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

var OSM = new ol.layer.Tile({
    source: new ol.source.OSM(),
    type: "base",
    title: "OSM",
});

layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: "click",
    startActive: false,
    tipLabel: "Layers", // Optional label for button
    groupSelectStyle: "children", // Can be 'children' [default], 'group' or 'none'
    collapseTipLabel: "Collapse layers",
});

map.addControl(layerSwitcher);

layerSwitcher.renderPanel();
var mouse_position = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326'
});

map.addControl(mouse_position);
var scale_line = new ol.control.ScaleLine({
    units: 'metric',
    bar: true,
    steps: 6,
    text: true,
    minWidth: 140,
    target: 'scale_bar'
});

map.addControl(scale_line);



/*----------------------------------------- javascript for navbar in table---------------------------------------- */
function updateNavBarWithFunctionName(functionName) {
    console.log("Updating navbar with function name:", functionName);
    // document.getElementById('featureName').textContent = functionName;

    document.querySelectorAll('.feature_name1').forEach(element => {
        element.textContent = functionName;
    });


}
function minimize1() {
 
    const topnav = document.getElementById('tableContainer_summary');
    const navElements = document.querySelectorAll('.feature_nav');
    navElements.forEach(nav => {
        nav.style.bottom = '3%'; // Reduced width when minimized
        }); 
    topnav.style.height = '0%'; // Reduced height when minimized
    
    const legendIds = ['Priority_legend', 'type_legend', 'Condition_legend','Material_legend','Ownership_legend'];
    legendIds.forEach(function(legendId) {
        const legendBtn = document.getElementById(legendId);
        if (legendBtn) {  // Check if the element exists before manipulating it
            legendBtn.style.display = 'none';
        }
    });


}
function maximize1() {
    const topnav = document.getElementById('tableContainer_summary');
    const navElements = document.querySelectorAll('.feature_nav');
    navElements.forEach(nav => {
        nav.style.bottom = '29%'; // Reduced width when minimized
    });
    
    topnav.style.height = '29%'; // Reduced height when minimized
  
}

// Function to add MULTILINESTRING feature to the map from WKT format
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

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);


    return feature;

}

function addMultilinestringFeatureFromWKT_parkRoad(wktString) {
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
                color: '#04af70',
                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);


    return feature;

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

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);


    return feature;

}

function addMultilinestringFeatureFromWKT_HospitalRoad(wktString) {
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
                color: 'cyan',
                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);


    return feature;

}
function addMultilinestringFeatureFromWKT_HotelRoad(wktString) {
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
                color: 'darkblue',
                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);


    return feature;

}
// Function to add MULTILINESTRING feature to the map from WKT format
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

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);


    return feature;

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

    map.addLayer(vectorLayer);

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);


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
        case 'P1':
            color = '#EB5406';
            break;
        case 'P2':
            color = '#00FF00';
            break;
        case 'Not eligible':
            color = '#FFC300';
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


/*--------------------------------------- zoom function is to on table ------------------------------------------*/

// Define the style for the highlighted road feature
const highlightedStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: '#DFFF00',  // Highlight color
        width: 7        // Stroke width for visibility
    })
});

// Store the previously highlighted feature and layer for resetting the highlight
let previouslyHighlightedFeature = null;
let previouslyHighlightedLayer = null;

function zoomToRoadFeature(wkt) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wkt, {
        dataProjection: 'EPSG:4326',
        featureProjection: map.getView().getProjection()
    });

    const extent = feature.getGeometry().getExtent();
    map.getView().fit(extent, {
        duration: 1000, // Animation duration
        maxZoom: 18     // Maximum zoom level
    });

    if (previouslyHighlightedFeature && previouslyHighlightedLayer) {
        previouslyHighlightedFeature.setStyle(null);  // Reset style
        previouslyHighlightedLayer.getSource().removeFeature(previouslyHighlightedFeature); // Remove old feature from layer
        map.removeLayer(previouslyHighlightedLayer);  // Remove the previous layer from the map
    }

    feature.setStyle(highlightedStyle);
    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
    map.addLayer(vectorLayer);

    previouslyHighlightedFeature = feature;
    previouslyHighlightedLayer = vectorLayer;
}

// Function to highlight and scroll to the clicked table row
function highlightAndScrollToRow(row) {
    console.log("Highlighting and scrolling to row: ", row);

    Array.from(dataTableBody_Drain.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });
    Array.from(dataTableBody_Scoring.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });
    Array.from(dataTableBody_summary.querySelectorAll('tr')).forEach(tr => {
    tr.classList.remove('highlighted');
    });
    Array.from(dataTableBody.querySelectorAll('tr')).forEach(tr => {
    tr.classList.remove('highlighted');
    });
    
    row.classList.add('highlighted');

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
selectInteraction.on('select', function (e) {
    if (e.selected.length > 0) {
        const selectedFeature = e.selected[0];
        console.log("Selected feature: ", selectedFeature);

        const featureId = selectedFeature.getId();
        console.log("Feature ID: ", featureId);

        const associatedRow = featureToRowMap.get(featureId);
        console.log("Associated row: ", associatedRow);

        if (associatedRow) {
            highlightAndScrollToRow(associatedRow);

        } else {
            console.warn("No associated row found for the selected feature.");
        }
    } else {
        console.log("No feature selected.");
    }
});

//-----------------------
// function isLayerInPreservedList(layer) {
//     const preservedLayers = [
//         ReligiousVectorLayer, bankVectorLayer, GraveyardVectorLayer, CarVectorLayer,
//         HospitalVectorLayer, EducationVectorLayer, PetrolVectorLayer, HotelsVectorLayer,
//         StadiumVectorLayer, busVectorLayer, busVectorLayer, PostVectorLayer, CentralGovVectorLayer, StateGovVectorLayer
//     ];
//     return preservedLayers.includes(layer);
// }


function Ayodhya_Zone_NO() {
    removeCurrentLayer();
    clearVectorLayers();
    // Create the WMS layer
    currentLayer = new ol.layer.Image({
        title: 'Zone Boundary',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya/wms',
            params: {
                'LAYERS': 'Ayodhya:Ayodhaya Zone Boundary',
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
function Ayodhya_Ward_NO() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya/wms',
            params: {
                'LAYERS': 'Ayodhya:Ayodhaya Ward Boundary',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
}



//---------------All Drains-------------------------//
ShowDrainage.addEventListener('click', function () {
    removeCurrentLayer();
    updateNavBarWithFunctionName(' Drain');
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector 
            // && !isLayerInPreservedList(layer)
        ) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();
    fetch(`${BASE_URL}/getAllDrainName`, {
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
            dataTableBody_Drain.innerHTML = '';

            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
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
                        addMultilinestringFeatureFromWKT_Ward(item.geom_wkt);
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
            const legends = [ type_legend, live_legend, Priority_legend, Condition_legend, Material_legend, Ownership_legend, 
                Drain_Type_Legend, Drain_Condition_Legend, Drain_Material_Legend, Drain_Status_Legend
            ];
        
            const isVisible = legends.some(legend => legend.style.display === 'block');
        
            legends.forEach(legend => {
                legend.style.display = isVisible ? 'none' : 'block';
            });
        });
        
    // legendBtn.addEventListener('click', function () {
    //     if (Drain_Type_Legend.style.display === 'none') {
    //         type_legend.style.display = 'none'; live_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Condition_legend.style.display = 'none';
    //         Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Drain_Type_Legend.style.display = 'none';
    //         Drain_Condition_Legend.style.display = 'none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = 'none';
    //     } else {
    //         type_legend.style.display = 'none'; live_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Condition_legend.style.display = 'none';
    //         Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Drain_Type_Legend.style.display = 'none';
    //         Drain_Condition_Legend.style.display = 'none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = 'none';
    //     }
    // });

});

//--------------------------------optimise code of sidebar road analysis -----------------------------
const dataTableBody = document.getElementById('dataBody');

function handleLayerClick(endpoint, layerName, featureFunction) {
    removeCurrentLayer();
    // console.log("Calling updateNavBarWithFunctionName with:", layerName);
    updateNavBarWithFunctionName(layerName);

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && 
            // !isLayerInPreservedList(layer) &&
            // layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer &&
            // layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer &&
            // layer != PetrolVectorLayer && layer != HotelsVectorLayer &&
            // layer != busVectorLayer && layer != CentralGovVectorLayer && layer != StateGovVectorLayer &&
            // layer != PostVectorLayer &&  layer != StadiumVectorLayer &&
             layer != SlumVectorLayer) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    })
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(responseData => {
        console.log(`Received data for ${layerName}:`, responseData);

        dataTableBody.innerHTML = '';
        featureToRowMap.clear();

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
                    <td>${item.year_of_co}</td>
                    <td>${item.cus}</td>`;

                dataTableBody.appendChild(row);

                row.addEventListener('click', function () {
                    if (item.geom_wkt) {
                        zoomToRoadFeature(item.geom_wkt);
                        highlightAndScrollToRow(row);
                    }
                });

                if (item.geom_wkt) {
                    console.log(`WKT String for ${layerName}:`, item.geom_wkt);
                    const feature = featureFunction(item.geom_wkt);

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
            console.error(`Expected array but received for ${layerName}:`, responseData.data);
        }
    })
    .catch(error => console.error(`Error fetching data for ${layerName}:`, error));

    legendBtn.addEventListener('click', function () {
        const legends = [type_legend, live_legend, Condition_legend, Material_legend, Ownership_legend];
        
        // Toggle the display of legends
        const isVisible = legends.some(legend => legend.style.display === 'block');
        
        legends.forEach(legend => {
            legend.style.display = isVisible ? 'none' : 'block';
        });
    });
    
    // legendBtn.addEventListener('click', function () {
    //     if (type_legend.style.display === 'none') {
    //         type_legend.style.display = 'none';
    //         live_legend.style.display = 'none';
    //         Condition_legend.style.display = 'none';
    //         Material_legend.style.display = 'none';
    //         Ownership_legend.style.display = 'none';
    //     } else {
    //         type_legend.style.display = 'none';
    //         live_legend.style.display = 'none';
    //         Condition_legend.style.display = 'none';
    //         Material_legend.style.display = 'none';
    //         Ownership_legend.style.display = 'none';
    //     }
    // });
}
// Event Listeners
ShowRoads.addEventListener('click', () => handleLayerClick('getAlltypeName', 'All Roads', addMultilinestringFeatureFromWKT));
Bank_Road.addEventListener('click', () => handleLayerClick('getBankWithRoad', 'Bank with Roads', addMultilinestringFeatureFromWKT));
Park_Road.addEventListener('click', () => handleLayerClick('getParkWithRoad', 'Park with Roads', addMultilinestringFeatureFromWKT_parkRoad));
Hospital_Road.addEventListener('click', () => handleLayerClick('getHospitalWithRoad', 'Hospital with Roads', addMultilinestringFeatureFromWKT_HospitalRoad));
Hotel_Road.addEventListener('click', () => handleLayerClick('getHotelWithRoad', 'Hotel with Roads', addMultilinestringFeatureFromWKT_HotelRoad));
Education_Road.addEventListener('click', () => handleLayerClick('getEducationWithRoad', 'Educational Institute with Roads', addMultilinestringFeatureFromWKT_EduRoad));
Slum_Road.addEventListener('click', () => handleLayerClick('getSlumRoad', 'Slum Roads', addMultilinestringFeatureFromWKT));



/*----------------------------------------------------slum Data--------------------------------------------------*/
// Define your polygon style
// Define the polygon style for the slum boundaries
var SlumStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'Transparent', // Green color with 50% opacity
    }),
    stroke: new ol.style.Stroke({
        color: 'cyan', // Cyan border#8816b8
        width: 4,
    }),
});

// Define the slum vector source and layer
var SlumVectorSource = new ol.source.Vector();
var SlumVectorLayer = new ol.layer.Vector({
    source: SlumVectorSource,
    visible: false // Initially not visible
});

// Add the vector layer to the map
map.addLayer(SlumVectorLayer);

// Handle the checkbox to toggle visibility of the vector layer
document.getElementById('Slum_Boundary').addEventListener('change', function () {
    SlumVectorLayer.setVisible(this.checked);
});

// Fetch the MultiPolygon data using a POST request and add it to the layer
fetch(`${BASE_URL}/getSlumBoundry`, {
    method: 'POST', // Use POST method
    headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
    },
    body: JSON.stringify({ /* Include any data to send with the POST request */ })
})
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
        var features = data.data.map(function (ann_slum_boundary) {
            console.log("WKT Geometry:", ann_slum_boundary.geom_point);

            try {
                var feature = format.readFeature('MULTIPOLYGON' + ann_slum_boundary.geom_point.slice(12), {
                    dataProjection: 'EPSG:4326', // Assuming WKT data is in EPSG:4326
                    featureProjection: 'EPSG:4326' // Assuming map view is EPSG:3857 (Web Mercator)
                });

                feature.setStyle(SlumStyle); // Apply the style to the feature
                feature.set('name', ann_slum_boundary.name); // Add the slum name as an attribute
                return feature;
            } catch (error) {
                console.error('Error converting WKT to Feature:', ann_slum_boundary.geom_point, error);
                return null;
            }
        }).filter(Boolean); // Filter out null features if any WKT parsing fails

        SlumVectorSource.addFeatures(features); // Add all features to the source
        console.log('Slum features added:', features);

        // Adjust the map view to fit the extent of the features
        if (features.length > 0) {
            map.getView().fit(SlumVectorSource.getExtent(), {
                size: map.getSize(),
                maxZoom: 12
            });
        }
    })
    .catch(error => console.error('Error fetching slum data:', error));


//----------------------------------optimise ameneties-----------------------------
function createIconStyle(iconPath, scale = 0.05) {
    return new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: iconPath,
            scale: scale,
        })
    });
}

function createVectorLayer(source) {
    return new ol.layer.Vector({
        source: source,
        visible: false
    });
}

function fetchAndAddFeatures(type, iconStyle, vectorSource, layer, elementId) {
    fetch(`${BASE_URL}/getLocationData?type=${type}`)
        .then(response => response.json())
        .then(data => {
            const features = data.data.map(point => {
                try {
                    const coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    const lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                    const feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyle);
                    return feature;
                } catch (error) {
                    console.error(`Error adding ${type} feature:`, error);
                }
            }).filter(Boolean);

            vectorSource.addFeatures(features);
            console.log(`${type} features added:`, features);

            document.getElementById(elementId).addEventListener('change', function () {
                layer.setVisible(this.checked);
            });
        })
        .catch(error => console.error(`Error fetching ${type} data:`, error));
}

// Location Types and Fetching Features for Points
const locationTypes = [
    { type: 'bank', icon: './logo/bus/bank.png', id: 'showBanks' },
    { type: 'bus', icon: './logo/bus/bus.png', id: 'showBus' },
    { type: 'charging', icon: './logo/bus/charging.png', id: 'showCar' },
    { type: 'hospital', icon: './logo/bus/hospital.png', id: 'showHospital' },
    { type: 'education', icon: './logo/bus/education.png', id: 'showEducation' },
    { type: 'hotel', icon: './logo/bus/hotel.png', id: 'showHotel' },
    { type: 'petrol', icon: './logo/bus/fuel.png', id: 'showPetrol' },
    { type: 'graveyard', icon: './logo/bus/graveyard.png', id: 'showGraveyard' },
    { type: 'religious', icon: './logo/bus/Book.png', id: 'showReligious' },
    { type: 'post_office', icon: './logo/bus/post-office.png', id: 'showPostOffice' },
    { type: 'gov_office', icon: './logo/bus/Central.png', id: 'showCentralGov' },
    { type: 'state_gov', icon: './logo/bus/State.png', id: 'showStateGov', scale: 0.02 },
    // { type: 'stadium', icon: './logo/bus/stadium.png', id: 'showStadium' } // Added Stadium
];

locationTypes.forEach(location => {
    const vectorSource = new ol.source.Vector();
    const vectorLayer = createVectorLayer(vectorSource);
    map.addLayer(vectorLayer);

    const iconStyle = createIconStyle(location.icon, location.scale || 0.05);
    fetchAndAddFeatures(location.type, iconStyle, vectorSource, vectorLayer, location.id);
});


//--------------------------------park---------------
function createPolygonStyle() {
    return new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(0, 150, 0, 0.5)', // Green color with 50% opacity
        }),
        stroke: new ol.style.Stroke({
            color: '#00FF00', // Green border
            width: 2,
        }),
    });
}

// Fetch and Add Polygon Features for Parks
function fetchAndAddPolygonFeatures(url, vectorSource, layer, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Log the data to understand its structure
            console.log('Fetched park data:', data);

            if (!data || !Array.isArray(data.data)) {
                throw new Error('Invalid data format: expected an object with an array in "data" property.');
            }

            var format = new ol.format.WKT();
            var features = data.data.map(function (park) {
                console.log("WKT Geometry:", park.geom_point);

                try {
                    var feature = format.readFeature(park.geom_point, {
                        dataProjection: 'EPSG:4326', // Assuming WKT data is in EPSG:4326
                        featureProjection: 'EPSG:4326' // Assuming map view is EPSG:4326 (change to EPSG:3857 if needed)
                    });

                    feature.setStyle(createPolygonStyle()); // Apply polygon style to the feature
                    feature.set('name', park.name); // Add park name as an attribute
                    return feature;
                } catch (error) {
                    console.error('Error converting WKT to Feature:', park.geom_point, error);
                    return null;
                }
            }).filter(Boolean);

            vectorSource.addFeatures(features); // Add features to the source
            console.log('Park features added:', features);

            // Adjust map view to fit the extent of the features
            if (features.length > 0) {
                map.getView().fit(vectorSource.getExtent(), {
                    size: map.getSize(),
                    maxZoom: 12
                });
            }

            document.getElementById(elementId).addEventListener('change', function () {
                layer.setVisible(this.checked);
            });
        })
        .catch(error => console.error('Error fetching park data:', error));
}

// Add Park Layer (Polygon-based)
const parkVectorSource = new ol.source.Vector();
const parkVectorLayer = createVectorLayer(parkVectorSource);
map.addLayer(parkVectorLayer);

// Fetch and add park features
fetchAndAddPolygonFeatures(`${BASE_URL}/getPark_newName`, parkVectorSource, parkVectorLayer, 'showParks');

//-------------------------------------- Stadium Layer (Fetching and adding features)
const stadiumVectorSource = new ol.source.Vector();
var stadiumVectorLayer = createVectorLayer(stadiumVectorSource);
map.addLayer(stadiumVectorLayer);

fetch(`${BASE_URL}/getStadiumName`)
    .then(response => response.json())
    .then(data => {
        const features = data.data.map(function (point) {
            try {
                const coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                const lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                const feature = new ol.Feature({
                    geometry: new ol.geom.Point(lonLat),
                    name: point.name,
                    address: point.address,
                    phonenumbe: point.phonenumbe
                });

                feature.setStyle(createIconStyle('./logo/bus/stadium.png', 0.05)); // Apply stadium icon style
                return feature;
            } catch (error) {
                console.error('Error adding Stadium feature:', error);
            }
        }).filter(Boolean); // Filter out undefined features if an error occurred

        stadiumVectorSource.addFeatures(features); // Add features to the vector source
        console.log('Stadium features added:', features);

        // Add event listener to toggle visibility based on checkbox
        document.getElementById('showStadium').addEventListener('change', function () {
            stadiumVectorLayer.setVisible(this.checked);
        });
    })
    .catch(error => console.error('Error fetching Stadium data:', error));

// Popup initialization
var popupContainer = document.getElementById("popup_1");

var popup = new ol.Overlay({
    element: document.getElementById('popup'),
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -20],
});
map.addOverlay(popup);


//---------------All Type Data popup amenities -------------------------//

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

/*------------------------------ amenities --------------------------------------*/
// var iconStyleBank = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/bank.png',
//         scale: 0.05,
//     })
// });
// var bankVectorSource = new ol.source.Vector();
// var bankVectorLayer = new ol.layer.Vector({
//     source: bankVectorSource,
//     visible: false // Make sure this is true to show the layer
// });
// map.addLayer(bankVectorLayer);
// var popupContainer = document.getElementById("popup_1");

// var popup = new ol.Overlay({
//     element: document.getElementById('popup'),
//     positioning: 'bottom-center',
//     stopEvent: false,
//     offset: [0, -20],
// });
// map.addOverlay(popup);

// fetch(`${BASE_URL}/getLocationData?type=bank`)
//     .then(response => response.json())
//     .then(data => {
//         console.log('Fetched bank data:', data);

//         var features = data.data.map(function (point) {
//             var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//             var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

//             var feature = new ol.Feature({
//                 geometry: new ol.geom.Point(lonLat),
//                 name: point.name,
//                 address: point.address,
//                 phonenumbe: point.phonenumbe
//             });

//             feature.setStyle(iconStyleBank);
//             return feature;
//         });

//         bankVectorSource.addFeatures(features);
//         console.log('Bank features added:', features);

//         document.getElementById('showBanks').addEventListener('change', function () {
//             bankVectorLayer.setVisible(this.checked);
//         });


//     })
//     .catch(error => console.error('Error fetching bank data:', error));


// //-------------------------------bus Stop---------------//      
// var iconStyleBus = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/bus.png',
//         scale: 0.05,
//     })
// });

// var busVectorSource = new ol.source.Vector();
// var busVectorLayer = new ol.layer.Vector({
//     source: busVectorSource,
//     visible: false // Ensure the layer is visible after features are added
// });
// map.addLayer(busVectorLayer);

// fetch(`${BASE_URL}/getLocationData?type=bus`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleBus);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         busVectorSource.addFeatures(features);
//         console.log('Bus stop features added:', features);

//         document.getElementById('showBus').addEventListener('change', function () {
//             busVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching bus stop data:', error));

// //--------------------Car Charging--------------//  
// var iconStyleCar = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/charging.png',
//         scale: 0.05,
//     })
// });

// var CarVectorSource = new ol.source.Vector();
// var CarVectorLayer = new ol.layer.Vector({
//     source: CarVectorSource,
//     visible: false // Ensure the layer is visible after features are added
// });
// map.addLayer(CarVectorLayer);

// fetch(`${BASE_URL}/getLocationData?type=charging`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleCar);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         CarVectorSource.addFeatures(features);
//         console.log('Car Charging Station features added:', features);

//         document.getElementById('showCar').addEventListener('change', function () {
//             CarVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Car Charging Station data:', error));


// //--------------------Hospital Charging--------------//  
// var iconStyleHospital = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/hospital.png',
//         scale: 0.05,
//     })
// });

// var HospitalVectorSource = new ol.source.Vector();
// var HospitalVectorLayer = new ol.layer.Vector({
//     source: HospitalVectorSource,
//     visible: false // Ensure the layer is visible after features are added
// });
// map.addLayer(HospitalVectorLayer);

// fetch(`${BASE_URL}/getLocationData?type=hospital`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleHospital);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         HospitalVectorSource.addFeatures(features);
//         console.log('Hospital features added:', features);

//         document.getElementById('showHospital').addEventListener('change', function () {
//             HospitalVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Hospital data:', error));


// //--------------------Education Charging--------------//  
// var iconStyleEducation = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/education.png',
//         scale: 0.05,
//     })
// });

// var EducationVectorSource = new ol.source.Vector();
// var EducationVectorLayer = new ol.layer.Vector({
//     source: EducationVectorSource,
//     visible: false // Ensure the layer is visible after features are added
// });
// map.addLayer(EducationVectorLayer);

// fetch(`${BASE_URL}/getLocationData?type=education`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleEducation);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         EducationVectorSource.addFeatures(features);
//         console.log('Education features added:', features);

//         document.getElementById('showEducation').addEventListener('change', function () {
//             EducationVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Education data:', error));

// //--------------------Hotels Charging--------------//  

// var iconStyleHotels = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/hotel.png',
//         scale: 0.05,
//     })
// });

// var HotelsVectorSource = new ol.source.Vector();
// var HotelsVectorLayer = new ol.layer.Vector({
//     source: HotelsVectorSource,
//     visible: false // Initially not visible
// });
// map.addLayer(HotelsVectorLayer);

// fetch(`${BASE_URL}/getLocationData?type=hotel`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleHotels);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         HotelsVectorSource.addFeatures(features);
//         console.log('Hotels features added:', features);

//         document.getElementById('showHotel').addEventListener('change', function () {
//             HotelsVectorLayer.setVisible(this.checked);
//         });


//     })
//     .catch(error => console.error('Error fetching Hotels data:', error));

// var iconStylePetrol = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/fuel.png',
//         scale: 0.05,
//     })
// });

// var PetrolVectorSource = new ol.source.Vector();
// var PetrolVectorLayer = new ol.layer.Vector({
//     source: PetrolVectorSource,
//     visible: false // Initially visible
// });
// map.addLayer(PetrolVectorLayer);

// fetch(`${BASE_URL}/getLocationData?type=petrol`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 // Extract coordinates and transform from EPSG:4326 to EPSG:3857
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
//                 //   var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStylePetrol);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         PetrolVectorSource.addFeatures(features);
//         console.log('Petrol features added:', features);

//         document.getElementById('showPetrol').addEventListener('change', function () {
//             PetrolVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Petrol data:', error));


// //--------------------Stadium Charging--------------//  
// var iconStyleStadium = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/stadium.png',
//         scale: 0.05,
//     })
// });

// var StadiumVectorSource = new ol.source.Vector();
// var StadiumVectorLayer = new ol.layer.Vector({
//     source: StadiumVectorSource,
//     visible: false // Initially not visible
// });
// map.addLayer(StadiumVectorLayer);

// // Fetch and add Stadium features
// fetch(`${BASE_URL}/getStadiumName`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 // Extract and transform coordinates from EPSG:4326 to EPSG:3857
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
//                 // var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleStadium);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         StadiumVectorSource.addFeatures(features);
//         console.log('Stadium features added:', features);

//         document.getElementById('showStadium').addEventListener('change', function () {
//             StadiumVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Stadium data:', error));




// //--------------------Graveyard Charging--------------//  
// var iconStyleGraveyard = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/graveyard.png',
//         scale: 0.05,
//     })
// });

// var GraveyardVectorSource = new ol.source.Vector();
// var GraveyardVectorLayer = new ol.layer.Vector({
//     source: GraveyardVectorSource,
//     visible: false // Initially not visible
// });
// map.addLayer(GraveyardVectorLayer);

// // Fetch and add Graveyard features
// fetch(`${BASE_URL}/getLocationData?type=graveyard`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 // Extract and transform coordinates from EPSG:4326 to EPSG:3857
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
//                 //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleGraveyard);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         GraveyardVectorSource.addFeatures(features);
//         console.log('Graveyard features added:', features);

//         document.getElementById('showGraveyard').addEventListener('change', function () {
//             GraveyardVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Graveyard data:', error));


// //--------------------Religious places--------------//  
// var iconStyleReligious = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/Book.png',
//         scale: 0.05,
//     })
// });

// var ReligiousVectorSource = new ol.source.Vector();
// var ReligiousVectorLayer = new ol.layer.Vector({
//     source: ReligiousVectorSource,
//     visible: false // Initially not visible
// });
// map.addLayer(ReligiousVectorLayer);

// // Fetch and add Religious features
// fetch(`${BASE_URL}/getLocationData?type=religious`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 // Extract and transform coordinates from EPSG:4326 to EPSG:3857
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
//                 //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleReligious);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         ReligiousVectorSource.addFeatures(features);
//         console.log('Religious features added:', features);

//         document.getElementById('showReligious').addEventListener('change', function () {
//             ReligiousVectorLayer.setVisible(this.checked);
//         });


//     })
//     .catch(error => console.error('Error fetching Religious data:', error));


// //--------------------Post Office--------------//  
// var iconStylePost = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/post-office.png',
//         scale: 0.05,
//     })
// });

// var PostVectorSource = new ol.source.Vector();
// var PostVectorLayer = new ol.layer.Vector({
//     source: PostVectorSource,
//     visible: false // Initially not visible
// });
// map.addLayer(PostVectorLayer);

// // Fetch and add Religious features
// fetch(`${BASE_URL}/getLocationData?type=post_office`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 // Extract and transform coordinates from EPSG:4326 to EPSG:3857
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
//                 //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStylePost);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         PostVectorSource.addFeatures(features);
//         console.log('Post Office features added:', features);

//         document.getElementById('showPostOffice').addEventListener('change', function () {
//             PostVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Post Office data:', error));

// //--------------------Gov Office--------------//  
// var iconStyleCentral = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/Central.png',
//         scale: 0.05,
//     })
// });

// var CentralGovVectorSource = new ol.source.Vector();
// var CentralGovVectorLayer = new ol.layer.Vector({
//     source: CentralGovVectorSource,
//     visible: false // Initially not visible
// });
// map.addLayer(CentralGovVectorLayer);

// // Fetch and add Religious features
// fetch(`${BASE_URL}/getLocationData?type=gov_office`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 // Extract and transform coordinates from EPSG:4326 to EPSG:3857
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
//                 //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleCentral);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         CentralGovVectorSource.addFeatures(features);
//         console.log('Goverment Office features added:', features);

//         document.getElementById('showCentralGov').addEventListener('change', function () {
//             CentralGovVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching Central Gov data:', error));


// //--------------------StateGov Office--------------//  
// var iconStyleState = new ol.style.Style({
//     image: new ol.style.Icon({
//         anchor: [0.5, 1],
//         src: './logo/bus/State.png',
//         scale: 0.02,
//     })
// });

// var StateGovVectorSource = new ol.source.Vector();
// var StateGovVectorLayer = new ol.layer.Vector({
//     source: StateGovVectorSource,
//     visible: false // Initially not visible
// });
// map.addLayer(StateGovVectorLayer);

// // Fetch and add Religious features
// fetch(`${BASE_URL}/getLocationData?type=state_gov`)
//     .then(response => response.json())
//     .then(data => {
//         var features = data.data.map(function (point) {
//             try {
//                 // Extract and transform coordinates from EPSG:4326 to EPSG:3857
//                 var coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                 var lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];
//                 //var transformedCoords = ol.proj.transform(lonLat, 'EPSG:4326', 'EPSG:3857');

//                 var feature = new ol.Feature({
//                     geometry: new ol.geom.Point(lonLat),
//                     name: point.name,
//                     address: point.address,
//                     phonenumbe: point.phonenumbe
//                 });

//                 feature.setStyle(iconStyleState);
//                 return feature;
//             } catch (error) {
//                 console.error('Error adding point feature:', error);
//             }
//         }).filter(Boolean); // Filter out undefined features if an error occurred

//         StateGovVectorSource.addFeatures(features);
//         console.log('Religious features added:', features);

//         document.getElementById('showStateGov').addEventListener('change', function () {
//             StateGovVectorLayer.setVisible(this.checked);
//         });



//     })
//     .catch(error => console.error('Error fetching State Gov data:', error));



/*----------------------------------------------------park Data--------------------------------------------------*/

// // Define your polygon style
// var polygonStyle = new ol.style.Style({
//     fill: new ol.style.Fill({
//         color: 'rgba(0, 150, 0, 0.5)', // Green color with 50% opacity
//     }),
//     stroke: new ol.style.Stroke({
//         color: '#00FF00', // Green border
//         width: 2,
//     }),
// });

// // Define the park vector source and layer
// var parkVectorSource = new ol.source.Vector();
// var parkVectorLayer = new ol.layer.Vector({
//     source: parkVectorSource,
//     visible: false // Initially not visible
// });

// map.addLayer(parkVectorLayer);

// // Handle the checkbox to toggle visibility of the vector layer
// document.getElementById('showParks').addEventListener('change', function () {
//     parkVectorLayer.setVisible(this.checked);
// });

// // Fetch the MultiPolygon data and add it to the layer
// fetch(`${BASE_URL}/getPark_newName`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Log the data to understand its structure
//         console.log('Fetched data:', data);

//         // Check if data and data.data are defined
//         if (!data || !Array.isArray(data.data)) {
//             throw new Error('Invalid data format: expected an object with an array in "data" property.');
//         }

//         var format = new ol.format.WKT();
//         var features = data.data.map(function (park) {
//             console.log("WKT Geometry:", park.geom_point);

//             try {
//                 var feature = format.readFeature(park.geom_point, {
//                     dataProjection: 'EPSG:4326', // Assuming WKT data is in EPSG:4326
//                     featureProjection: 'EPSG:4326' // Assuming map view is EPSG:4326 (change to EPSG:3857 if needed)
//                 });

//                 feature.setStyle(polygonStyle); // Apply the style to the feature
//                 feature.set('name', park.name); // Add the park name as an attribute
//                 return feature;
//             } catch (error) {
//                 console.error('Error converting WKT to Feature:', park.geom_point, error);
//                 return null;
//             }
//         }).filter(Boolean); // Filter out null features if any WKT parsing fails

//         parkVectorSource.addFeatures(features); // Add all features to the source
//         console.log('Park features added:', features);

//         // Adjust the map view to fit the extent of the features
//         if (features.length > 0) {
//             map.getView().fit(parkVectorSource.getExtent(), {
//                 size: map.getSize(),
//                 maxZoom: 12
//             });
//         }
//     })
//     .catch(error => console.error('Error fetching park data:', error));


/*----------------------------------------- javascript for sidebar----------------------------------------- */







//----------------- table Cancel btn ----------------------------//
document.querySelectorAll('.table-cancel-btn1').forEach(function (element) {
    element.addEventListener('click', function () {
        document.getElementById('tableContainer').style.display = 'none';
        document.getElementById('Scoreing_tableContainer').style.display = 'none';
        document.getElementById('tableContainer_Drain').style.display = 'none';
        document.getElementById('tableContainer_summary').style.display = 'none';

        document.getElementById('tableContainer_summaryfilter').style.display = 'none';
        document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
        document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';

        document.getElementById('summary-table').style.display = 'block';
        document.getElementById('popup').style.display = 'none';

        const legendBtn = document.getElementById('legendBtn');
        legendBtn.style.bottom = '3%';
        const Materiallegend = document.getElementById('Material_legend');
        Materiallegend.style.display = 'none';
        const Conditionlegend = document.getElementById('Condition_legend');
        Conditionlegend.style.display = 'none';
        const Typelegend = document.getElementById('type_legend');
        Typelegend.style.display = 'none';

        const Ownerlegend = document.getElementById('Ownership_legend');
        Ownerlegend.style.display = 'none';

        const Prioritylegend = document.getElementById('Priority_legend');
        Prioritylegend.style.display = 'none';
        const DrainMateriallegend = document.getElementById('Drain_Material_Legend');
        DrainMateriallegend.style.display = 'none';
        const DrainConditionlegend = document.getElementById('Drain_Condition_Legend');
        DrainConditionlegend.style.display = 'none';
        const DrainTypelegend = document.getElementById('Drain_Type_Legend');
        DrainTypelegend.style.display = 'none';

        const DrainOwnerlegend = document.getElementById('Drain_Status_Legend');
        DrainOwnerlegend.style.display = 'none';

    });
});


const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const cancelIcon = document.querySelector(".cancel-icon");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show");
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




document.getElementById('clear-icon').onclick = clearAllVectorLayers;
function clearAllVectorLayers() {
    // Iterate through all layers on the map
    map.getLayers().getArray().forEach(layer => {
        if (layer instanceof ol.layer.Vector) {
            layer.getSource().clear(); // Clear all features from this vector layer
        }
        zoomToIndia();
    });

    document.getElementById("tableContainer").style.display = "none";
    document.getElementById("road-filter").style.display = "none";
    document.getElementById("drain-filter").style.display = "none";
    document.getElementById("query_tab").style.display = "none";
    document.getElementById("Scoreing_tableContainer").style.display = "none";
    document.getElementById("tableContainer_Drain").style.display = "none";
    document.getElementById("tableContainer_summary").style.display = "none";
    document.getElementById('tableContainer_summaryfilter').style.display = 'none';
    document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
    document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';
   
    //   document.querySelector('.Legend_panel').style.display = 'none';
      const legendId= ['Priority_legend', 'type_legend', 'Condition_legend','Material_legend','Ownership_legend', 'Drain_Type_Legend', 'Drain_Condition_Legend','Drain_Material_Legend','Drain_Status_Legend']
   legendId.forEach(function(legendID){
      const legendBtn =document.getElementById(legendID);
      if(legendBtn){  //check if element exists befor manipulating it
      legendBtn.style.display = 'none';
   }
   });
   
    const legendBtn = document.getElementById('legendBtn');
    legendBtn.style.bottom = '3%';


    map.getLayers().getArray().slice().forEach(layer => {
        if ((layer instanceof ol.layer.Tile || layer instanceof ol.layer.Image) &&
            (layer.getSource() instanceof ol.source.TileWMS || layer.getSource() instanceof ol.source.ImageWMS)) {

            // Check if the layer is not the zone_boundary layer
            if (layer.get('title') !== 'Ayodhya Zone Boundary' && layer.get('title') !== 'Ayodhya Ward Boundary') {
                map.removeLayer(layer);  // Remove GeoServer WMS layers
            }
        }
    });
}
function zoomToIndia() {
    const view = map.getView();

    // Define the approximate bounding box for India
    const extent = ol.proj.transformExtent(
        [82.08302446765529, 26.71400889838419, 82.24602173765878, 26.811349630444568], // Bounding box [minX, minY, maxX, maxY] for India
        'EPSG:4326', // Projection for the coordinates
        view.getProjection() // Current map projection (usually EPSG:3857)
    );
    // Set the map's center and zoom level explicitly
    view.setCenter([82.18380629756041, 26.7500296484465]); // Set the center to the geographic center of India
    view.setZoom(12); // Zoom level appropriate for India view (adjust as needed)
    // Ensure the map is aligned to North with no rotation
    view.setRotation(0);

}

//-------------------optimise code of priority ---------------
const dataTableBody_Scoring = document.getElementById('dataBody_Scoring');

// General function to handle fetching and rendering data for each priority
function fetchDataAndRender(priority, legendName) {
    updateNavBarWithFunctionName(legendName);

     map.getLayers().getArray().slice().forEach(layer => {
            if (layer instanceof ol.layer.Vector) {
                map.removeLayer(layer);
            }
        });
        map.getOverlays().clear();


    // Fetch the data
    fetch(`${BASE_URL}/getPriorityName?priority=${priority}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(responseData => {
        console.log('Received data:', responseData);

        // Clear existing table rows and mapping
        dataTableBody_Scoring.innerHTML = '';
        featureToRowMap.clear();

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
                    <td>${item.year_of_co}</td>
                    <td>${item.cus}</td>
                    <td>${item.avg_row}</td>
                    <td>${item.total_leng}</td>
                    <td>${item.network_sc}</td>
                    <td>${item.row_score}</td>
                    <td>${item.bus_stop_s}</td>
                    <td>${item.educati_01}</td>
                    <td>${item.land_score}</td>
                    <td>${item.hospital_s}</td>
                    <td>${item.park_score}</td>
                    <td>${item.total_scor}</td>
                    <td>${item.score_perc}</td>
                    <td>${item.priority}</td>
                `;
                dataTableBody_Scoring.appendChild(row);
                row.addEventListener('click', function () {
                    if (item.geom_wkt) {
                        zoomToRoadFeature(item.geom_wkt);
                        highlightAndScrollToRow(row);
                    }
                });

                if (item.geom_wkt) {
                    const feature = addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);
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
            console.error('Expected array but received:', responseData.data);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// General function for legend button toggling
function toggleLegend(legendElement, defaultLegend) {
    legendBtn.addEventListener('click', function () {
        if (legendElement.style.display === 'none') {
            defaultLegend.style.display = 'none';
            legendElement.style.display = 'block';
        } else {
            defaultLegend.style.display = 'none';
            legendElement.style.display = 'none';
        }
    });
}

// Event listeners for Priority P1, P2, and Not Eligible buttons
P1.addEventListener('click', function () {
    fetchDataAndRender('P1', "First Priority");
    toggleLegend(Priority_legend, live_legend);
});

P2.addEventListener('click', function () {
    fetchDataAndRender('P2', "Second Priority");
    toggleLegend(Priority_legend, live_legend);
});

Not_Eligible.addEventListener('click', function () {
    fetchDataAndRender('Not eligible', "Not Eligible");
    toggleLegend(Priority_legend, live_legend);
});





// //-------------------------------------All Priority P1-----------------------------//
// // Event listener for Get Data button ,get Category Material BOE road
// P1.addEventListener('click', function () {
//     // showLoading();  // Show loading indicator
//     removeCurrentLayer();
//    updateNavBarWithFunctionName("First Priority");


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector 
//             // && // !isLayerInPreservedList(layer)
//         ) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getPriorityName?priority=P1`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             // Add any request body if required
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
//             dataTableBody_Scoring.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//                <td>${item.gis_id}</td>
//                 <td>${item.zone_no}</td>
//                 <td>${item.zone_name}</td>
//                 <td>${item.ward_no}</td>                         
//                 <td>${item.ward_name}</td>
//                 <td>${item.ownership}</td>                        
//                 <td>${item.type}</td>
//                 <td>${item.road_name}</td>
//                 <td>${item.row_meter}</td>
//                 <td>${item.row_as_per}</td>
//                 <td>${item.carriage_w}</td>
//                 <td>${item.carriage_m}</td>
//                 <td>${item.length_km}</td>
//                 <td>${item.condition}</td>
//                 <td>${item.year_of_co}</td>
//                 <td>${item.cus}</td>
//                 <td>${item.avg_row}</td>
//                 <td>${item.total_leng}</td>
//                 <td>${item.network_sc}</td>
//                 <td>${item.row_score}</td>
//                 <td>${item.bus_stop_s}</td>
//                 <td>${item.educati_01}</td>
//                 <td>${item.land_score}</td>
//                 <td>${item.hospital_s}</td>
//                 <td>${item.park_score}</td>
//                 <td>${item.total_scor}</td>
//                 <td>${item.score_perc}</td>
//                 <td>${item.priority}</td>
                 
//                 <!-- Add more table data cells as needed -->
//             `;
//                     dataTableBody_Scoring.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });

//                     if (item.geom_wkt) {
//                         console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
//                         const feature = addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);

//                         // Check if the feature was successfully created
//                         if (feature) {
//                             const featureId = feature.getId();
//                             if (featureId) {
//                                 featureToRowMap.set(featureId, row);
//                             } else {
//                                 console.warn('Feature created but no ID found:', feature);
//                             }
//                         } else {
//                             console.error('Failed to create feature from WKT:', item.geom_wkt);
//                         }
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
//         if (Priority_legend.style.display === 'none') {
//             type_legend.style.display = 'none'; Priority_legend.style.display = 'block'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; 
//             Drain_Type_Legend.style.display = ' none';
//             Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
//         } else {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Priority_legend.style.display = 'none';
//             Drain_Type_Legend.style.display = ' none';
//             Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
//         }
//     });

// });
// //-------------------------------------All Priority P2-----------------------------//
// // Event listener for Get Data button ,get Category Material BOE road
// P2.addEventListener('click', function () {
//     // showLoading();  // Show loading indicator
//     removeCurrentLayer();
//     updateNavBarWithFunctionName("Second Priority");
//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector 
//             // && !isLayerInPreservedList(layer)
//         ) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getPriorityName?priority=P2`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             // Add any request body if required
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
//             dataTableBody_Scoring.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping



//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//                <td>${item.gis_id}</td>
//                 <td>${item.zone_no}</td>
//                 <td>${item.zone_name}</td>
//                 <td>${item.ward_no}</td>                         
//                 <td>${item.ward_name}</td>
//                 <td>${item.ownership}</td>                        
//                 <td>${item.type}</td>
//                 <td>${item.road_name}</td>
//                 <td>${item.row_meter}</td>
//                 <td>${item.row_as_per}</td>
//                 <td>${item.carriage_w}</td>
//                 <td>${item.carriage_m}</td>
//                 <td>${item.length_km}</td>
//                 <td>${item.condition}</td>
//                 <td>${item.year_of_co}</td>
//                 <td>${item.cus}</td>
               
//                 <td>${item.avg_row}</td>
//                 <td>${item.total_leng}</td>
//                 <td>${item.network_sc}</td>
//                 <td>${item.row_score}</td>
//                 <td>${item.bus_stop_s}</td>
//                 <td>${item.educati_01}</td>
//                 <td>${item.land_score}</td>
//                 <td>${item.hospital_s}</td>
//                 <td>${item.park_score}</td>
//                 <td>${item.total_scor}</td>
//                 <td>${item.score_perc}</td>
//                 <td>${item.priority}</td>
                 
//                 <!-- Add more table data cells as needed -->
//             `;
//                     dataTableBody_Scoring.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
//                         const feature = addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);

//                         // Check if the feature was successfully created
//                         if (feature) {
//                             const featureId = feature.getId();
//                             if (featureId) {
//                                 featureToRowMap.set(featureId, row);
//                             } else {
//                                 console.warn('Feature created but no ID found:', feature);
//                             }
//                         } else {
//                             console.error('Failed to create feature from WKT:', item.geom_wkt);
//                         }
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
//         if (Priority_legend.style.display === 'none') {
//             type_legend.style.display = 'none'; Priority_legend.style.display = 'block'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; live_legend.style.display = 'none';
//             Drain_Type_Legend.style.display = ' none';
//             Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
//         } else {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Priority_legend.style.display = 'none';
//             Drain_Type_Legend.style.display = ' none';
//             Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
//         }
//     });



// });
// //-------------------------------------All Priority Not Eligible-----------------------------//
// // Event listener for Get Data button ,get Category Material BOE road
// Not_Eligible.addEventListener('click', function () {
//     // showLoading();  // Show loading indicator
//     removeCurrentLayer();
//     updateNavBarWithFunctionName("Not Eligible");
//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector 
//             // && !isLayerInPreservedList(layer)
//         ) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getPriorityName?priority=Not eligible`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             // Add any request body if required
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
//             dataTableBody_Scoring.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//                <td>${item.gis_id}</td>
//                 <td>${item.zone_no}</td>
//                 <td>${item.zone_name}</td>
//                 <td>${item.ward_no}</td>                         
//                 <td>${item.ward_name}</td>
//                 <td>${item.ownership}</td>                        
//                 <td>${item.type}</td>
//                 <td>${item.road_name}</td>
//                 <td>${item.row_meter}</td>
//                 <td>${item.row_as_per}</td>
//                 <td>${item.carriage_w}</td>
//                 <td>${item.carriage_m}</td>
//                 <td>${item.length_km}</td>
//                 <td>${item.condition}</td>
//                 <td>${item.year_of_co}</td>
//                 <td>${item.cus}</td>
               
//                 <td>${item.avg_row}</td>
//                 <td>${item.total_leng}</td>
//                 <td>${item.network_sc}</td>
//                 <td>${item.row_score}</td>
//                 <td>${item.bus_stop_s}</td>
//                 <td>${item.educati_01}</td>
//                 <td>${item.land_score}</td>
//                 <td>${item.hospital_s}</td>
//                 <td>${item.park_score}</td>
//                 <td>${item.total_scor}</td>
//                 <td>${item.score_perc}</td>
//                 <td>${item.priority}</td>
                 
//                 <!-- Add more table data cells as needed -->
//             `;
//                     dataTableBody_Scoring.appendChild(row);

//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });


//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
//                         const feature = addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);

//                         // Check if the feature was successfully created
//                         if (feature) {
//                             const featureId = feature.getId();
//                             if (featureId) {
//                                 featureToRowMap.set(featureId, row);
//                             } else {
//                                 console.warn('Feature created but no ID found:', feature);
//                             }
//                         } else {
//                             console.error('Failed to create feature from WKT:', item.geom_wkt);
//                         }
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
//         if (Priority_legend.style.display === 'none') {
//             type_legend.style.display = 'none'; Priority_legend.style.display = 'block'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; live_legend.style.display = 'none'; Drain_Type_Legend.style.display = ' none';
//             Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
//         } else {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Drain_Type_Legend.style.display = ' none';
//             Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
//         }
//     });

// });


//-------------------- street view -----------------------//

function street_view() {
    // Remove any existing layer
    removeCurrentLayer();

    // Create the new WMS layer
    currentLayer = new ol.layer.Image({
        title: 'ann View points',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:annviewpoints',
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

//-----------------------summary table ---------------------------------//

const data1 = {
    'Summary':{},
    'Zone 1': { wards: ['Ward 1', 'Ward 4', 'Ward 12', 'Ward 18', 'Ward 19', 'Ward 21', 'Ward 30', 'Ward 31', 'Ward 45', 'Ward 51', 'Ward 52', 'Ward 55'] },
    'Zone 2': { wards: ['Ward 3', 'Ward 5', 'Ward 6', 'Ward 7', 'Ward 13', 'Ward 14', 'Ward 17', 'Ward 23', 'Ward 26', 'Ward 27', 'Ward 28', 'Ward 32', 'Ward 33', 'Ward 36', 'Ward 37', 'Ward 38', 'Ward 39', 'Ward 40', 'Ward 41', 'Ward 48', 'Ward 54', 'Ward 57', 'Ward 58', 'Ward 59'] },
    'Zone 3': { wards: ['Ward 2', 'Ward 8', 'Ward 9', 'Ward 10', 'Ward 11', 'Ward 15', 'Ward 16', 'Ward 20', 'Ward 22', 'Ward 24', 'Ward 25', 'Ward 29', 'Ward 34', 'Ward 35', 'Ward 42', 'Ward 43', 'Ward 44', 'Ward 46', 'Ward 47', 'Ward 49', 'Ward 50', 'Ward 53', 'Ward 56', 'Ward 60'] },
    // Other zones...
};

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
    }
}

// Add event listener to the button with ID 'loadZonesButton'
document.getElementById('table_icon').addEventListener('click', loadZones);

document.getElementById('summary_id').addEventListener('click', loadZones);

//------------------------optimise code for summarytab-----------------
//---------------------------------------- OverAll Ayodhya Summary ---------------------------------------------------------------

function loadZones() {
    fetch(`${BASE_URL}/getTotalZone`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("✅ API Response:", data); // Debugging

            if (!data || typeof data !== 'object') {
                console.error("❌ API returned invalid data:", data);
                return;
            }

            // Ensure all required fields exist in the response
            if (!data.hasOwnProperty('zone_count')) {
                console.error("❌ Missing 'zone_count' in API response", data);
                return;
            }

            updateSummary(data);
        })
        .catch(error => console.error("❌ Error fetching zone data:", error));
}

function updateSummary(data) {

    if (!data || typeof data !== 'object') {
        console.error(" updateSummary() received invalid data:", data);
        return;
    }

    const content = document.getElementById('content');
    content.innerHTML = '';

    console.log(" Received Data in updateSummary:", data); // Debugging

    // Safe function to prevent undefined errors
    // const safeValue = (key) => key in data ? data[key] : 'N/A';

    const safeValue = (key) => (data && key in data) ? data[key] : 'N/A';


    const summaryData = {
        'No. of Zones': { value: safeValue('zone_count'), onclick: 'Ayodhya_Zone_NO()' },
        'Total Road Length': { value: `${safeValue('total_length_km')} km`, onclick: 'Ayodhya_Road_Length()' },
        'Total No. of Roads': { value: safeValue('total_length_count'), onclick: 'Ayodhya_Road_Count()' },
        'Total Ward No.': { value: safeValue('ayo_ward'), onclick: 'Ayodhya_Ward_NO()' },
        'Road Count by Condition': {
            value: `
                Good - <a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Green');" style="color:green;">${safeValue('condition_count_green')}</a><br>
                Poor - <a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Red');" style="color:red;">${safeValue('condition_count_red')}</a><br>
                Moderate - <a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Yellow');" style="color:yellow;">${safeValue('condition_count_yellow')}</a>
            `
        },
        'Road Count by Type': {
            value: `
                Major - <a href="javascript:void(0)" onclick="Ayodhya_Type_cat('type','Major');" style="color:blue;">${safeValue('count_major')}</a><br>
                Minor - <a href="javascript:void(0)" onclick="Ayodhya_Type_cat('type','Minor');" style="color:yellow;">${safeValue('count_minor')}</a>
            `,
            onclick: 'Ayodhya_Types()'
        },
        'Road Count by Material': {
            value: `
                Bitumen - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Bitumen');" style="color:darkred;">${safeValue('count_bitumen')}</a><br>
                CC - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','CC');" style="color:#1ad7b0;">${safeValue('count_cc')}</a><br>
                Interlocking - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Interlocking');" style="color:#2392ed;">${safeValue('count_interlocking')}</a><br>
                BOE - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','BOE');" style="color:#da6076;">${safeValue('count_boe')}</a><br>
                Kachcha - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Kachcha');" style="color:#6036d0;">${safeValue('count_kachha')}</a>
            `,
            onclick: 'Ayodhya_Material()'
        },
        'Road Count by Ownership': {
            value: `
                ANN - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','ANN');" style="color:#1dd2e2;">${safeValue('count_nna')}</a><br>
                PWD - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','PWD');" style="color:#0f6050;">${safeValue('count_pwd')}</a><br>
                PVT - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','PVT');" style="color:#ed2323;">${safeValue('count_pvt')}</a><br>
                NHAI - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','NHAI');" style="color:rgb(33,14,139);">${safeValue('count_nhai')}</a><br>
                Railway - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','Railway');" style="color:#c3c922;">${safeValue('count_railway')}</a><br>
                UPSBC Ltd - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','UPSBC Ltd.');" style="color:#821880;">${safeValue('count_upsbc')}</a>
            `,
            onclick: 'Ayodhya_Ownership()'
        }
    };

    Object.entries(summaryData).forEach(([title, details]) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${details.onclick ? `<a href="javascript:void(0)" onclick="${details.onclick}">${title}</a>` : title}</h3>
            <p>${details.value}</p>
        `;
        content.appendChild(cardElement);
    });
}
//------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------- Dropdown Zone Selection Code  -----------------------------------------------------------------
function populateZonesDropdown() {
    const zonesDropdown = document.getElementById('zonesDropdown');
    zonesDropdown.innerHTML = ''; // Clear existing content

    const zoneData = {
        "Zone 1": "Ayodhya Dham",
        "Zone 2": "AvadhPuri",
        "Zone 3": "KaushalPuri"
    };

    Object.keys(zoneData).forEach(zoneKey => {
        const zoneElement = document.createElement('a');
        zoneElement.href = "#";
        zoneElement.innerHTML = zoneKey;

        zoneElement.onclick = function () {
            const zoneNo = zoneKey.split(" ")[1]; // Extract zone number
            loadZoneData(zoneNo, zoneData[zoneKey]);
            populateWardsDropdown(zoneKey);
            return false;
        };

        zonesDropdown.appendChild(zoneElement);
    });
}

populateZonesDropdown();

function loadZoneData(zoneNo, zoneName) {
    fetch(`${BASE_URL}/getZoneData?zone_no=${zoneNo}`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                updateZones(zoneNo, zoneName, responseData);
            } else {
                console.error('Error:', responseData.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}

function updateZones(zoneNo, zoneName, data) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (!zoneNo || !zoneName || !data) {
        content.innerHTML = '<p>No data available for this zone.</p>';
        return;
    }

    // Display Zone Header
    const zoneInfoCard = document.createElement('div');
    zoneInfoCard.className = 'card';
    zoneInfoCard.style.backgroundColor = '#5072A7';
    zoneInfoCard.style.textAlign = 'center';
    zoneInfoCard.style.color = 'white';
    zoneInfoCard.innerHTML = `<h4>${zoneName}</h4>`;
    content.appendChild(zoneInfoCard);

    // Define zone data cards
    const zoneCards = [
        { 
            title: 'Total Road Length', 
            value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','${zoneNo}'); updateNavBarWithFunctionName('Zone-${zoneNo} Total Road Length');" style="color:black;">${data.length_km.toFixed(2)} km</a>` 
        },
        { 
            title: 'Total No. of Roads', 
            value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','${zoneNo}'); updateNavBarWithFunctionName('Zone-${zoneNo} Total Road Count');" style="color:black;">${data.total_no_of_roads}</a>` 
        },
        { 
            title: 'Road Type', 
            value: `Major <a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('${zoneNo}','type','Major'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Type Major');" style="color:blue;">- ${data.total_major_sum}</a> <br> 
                    Minor <a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('${zoneNo}','type','Minor'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Type Minor');" style="color:yellow;">- ${data.total_minor_sum}</a>`
        },
        { 
            title: 'Road Condition', 
            value: `Good <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('${zoneNo}','condition','Green'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Condition Good');" style="color:green;">- ${data.count_green}</a> <br> 
                    Moderate <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('${zoneNo}','condition','Yellow'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Condition Moderate');" style="color:yellow;">- ${data.count_yellow}</a> <br> 
                    Poor <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('${zoneNo}','condition','Red'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Condition Poor');" style="color:red;">- ${data.count_red}</a>`
        },
        { 
            title: 'Materials', 
            value: `Bitumen <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','Bitumen'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material Bitumen');" style="color:darkred;">- ${data.bitumen}</a> <br>
                    CC <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','CC'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material CC');" style="color:#1ad7b0;">- ${data.cc}</a> <br>
                    Interlocking <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','Interlocking'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material Interlocking');" style="color:#2392ed;">- ${data.interlocking}</a> <br>
                    BOE <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','BOE'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material BOE');" style="color:#da6076;">- ${data.boe}</a> <br>
                    Kachcha <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','Kachcha'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material Kachcha');" style="color:#6036d0;">- ${data.kachcha}</a>`
        },
        { 
            title: 'Ownership', 
            value: `ANN <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','ANN'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership ANN');" style="color:cyan;">- ${data.ann}</a> <br>
                    PWD <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','PWD'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership PWD');" style="color:#0f6050;">- ${data.pwd}</a> <br>
                    NHAI <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','NHAI'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership NHAI');" style="color:blue;">- ${data.nhai}</a> <br>
                    PVT <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','PVT'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership PVT');" style="color:#ed2323;">- ${data.pvt}</a> <br>
                    UPSBC <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership UPSBC Ltd.');" style="color:#d37b37;">- ${data.upsbc}</a>`
        }
    ];

    // Append cards to the content div
    zoneCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<h4>${card.title}</h4><p>${card.value}</p>`;
        content.appendChild(cardElement);
    });
}

//----------------------------------------------- all Zone Data is Corrected-------------------------------------------------------------

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

    const zoneKeys = Object.keys(data).filter(key => key !== 'Summary' && key !== 'View');

    zoneKeys.forEach(zoneName => {
        const zoneData = data[zoneName];

        // Create a container for each zone and a dropdown list for wards
        const zoneContainer = document.createElement('div');
        zoneContainer.className = 'zone-container';

        const zoneElement = document.createElement('div');
        zoneElement.className = 'card';
        // zoneElement.style.backgroundColor = getUniqueColor();
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

//----------------------------zone  card count summary --------------------
function setCurrentZone(zoneName) {
    selectedZone = zoneName;
    updateZones(zoneName);
}

// ----------------------------------show all zones
function showZoneDetails(zoneName) {
    // Implement the logic based on your requirement
    console.log("Selected zone: " + zoneName);
    showAllZones(); // Or use another function to show the selected zone details
}
//------------------------------- ward populate -------------------------------------------------------------------------------
function populateWardsDropdown(zoneName) {
    const wardsDropdown = document.getElementById('zonesDropdownwards');
    wardsDropdown.innerHTML = ''; // Clear existing content

    // Fetch ward list from predefined data
    const wards = data1[zoneName].wards;

    // Populate the dropdown
    wards.forEach(wardName => {
        const wardElement = document.createElement('a');
        wardElement.href = "#";
        wardElement.innerHTML = wardName;

        wardElement.onclick = function () {
            const wardNo = wardName.split(" ")[1]; // Extract ward number dynamically
            loadWardData(zoneName.split(" ")[1], wardNo, wardName); // Call the single function
            return false;
        };

        wardsDropdown.appendChild(wardElement);
    });
}


function loadWardData(zoneNo, wardNo, wardName) {
    fetch(`${BASE_URL}/getZoneWardData?zone_no=${zoneNo}&ward_no=${wardNo}`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                console.log("Ward Data Fetched:", responseData);

                // Get content container
                const content = document.getElementById('content');
                content.innerHTML = '';

                // Set active class for the Wards tab
                document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                document.querySelector('[data-tab="Wards"]')?.classList.add('active');

                // Create Ward Info Card
                const wardInfoCard = document.createElement('div');
                wardInfoCard.className = 'card ward-card';
                wardInfoCard.innerHTML = `<h4>${wardName}</h4>`;
                content.appendChild(wardInfoCard);

                // Define dynamic details with colors and onclick functions
                const details = [
                    { 
                        title: 'Road Type', 
                        value: `Major - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('${wardNo}', 'type', 'Major'); updateNavBarWithFunctionName('Ward-${wardNo} Road Type Major');" style="color:blue;">${responseData.total_major_sum}</a><br> 
                                 Minor - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('${wardNo}', 'type', 'Minor'); updateNavBarWithFunctionName('Ward-${wardNo} Road Type Minor');" style="color:orange;">${responseData.total_minor_sum}</a>` 
                    },
                    { 
                        title: 'Total Road Length', 
                        value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no', '${wardNo}'); updateNavBarWithFunctionName('Ward-${wardNo} Total Road Length');" style="color:black;">${responseData.length_km} km</a>` 
                    },
                    { 
                        title: 'Total No. of Roads', 
                        value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no', '${wardNo}'); updateNavBarWithFunctionName('Ward-${wardNo} Total Road Count');" style="color:black;">${responseData.total_no_of_roads}</a>` 
                    },
                    { 
                        title: 'Road Condition', 
                        value: `Good - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('${wardNo}', 'condition', 'Green'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition Good');" style="color:green;">${responseData.count_green}</a> 
                                <br> Moderate - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('${wardNo}', 'condition', 'Yellow'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition Moderate');" style="color:yellow;">${responseData.count_yellow}</a> 
                                <br> Poor - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('${wardNo}', 'condition', 'Red'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition Poor');" style="color:red;">${responseData.count_red}</a>` 
                    },
                    { 
                        title: 'Materials', 
                        value: `Bitumen - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'Bitumen'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material Bitumen');" style="color:darkred;">${responseData.bitumen}</a> 
                                <br> CC - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'CC'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material CC');" style="color:cyan;">${responseData.cc}</a> 
                                <br> Interlocking - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'Interlocking'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material Interlocking');" style="color:blue;">${responseData.interlocking}</a> 
                                <br> BOE - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'BOE'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material BOE');" style="color:pink;">${responseData.boe}</a> 
                                <br> Kachcha - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'Kachcha'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material Kachcha');" style="color:purple;">${responseData.kachcha}</a>` 
                    },
                    { 
                        title: 'Ownership', 
                        value: `ANN - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'ANN'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership ANN');" style="color:#1dd2e2;">${responseData.ann}</a> 
                                <br> PWD - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'PWD'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership PWD');" style="color:green;">${responseData.pwd}</a> 
                                <br> PVT - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'PVT'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership PVT');" style="color:red;">${responseData.pvt}</a> 
                                <br> NHAI - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'NHAI'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership NHAI');" style="color:blue;">${responseData.nhai}</a> 
                                <br> UPSBC - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'UPSBC'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership UPSBC');" style="color:brown;">${responseData.upsbc}</a>` 
                    }
                ];

                // Create and append vertical detail cards
                details.forEach(detail => {
                    const detailElement = document.createElement('div');
                    detailElement.className = 'card detail-card';
                    detailElement.innerHTML = `<h4>${detail.title}</h4><p>${detail.value}</p>`;
                    content.appendChild(detailElement);
                });

            } else {
                console.error('Error:', responseData.message);
            }
        })
        .catch(error => {
            console.error('Error fetching ward data:', error);
        });
}

function setCurrentWard(zoneName, wardName) {
    selectedZone = zoneName;
    selectedWard = wardName;
    navigateTo('WardDetails');
}

let selectedZone = null;
let selectedWard = null;

function removeWards() {
    selectedWard = ''; // Clear current ward selection
    const content = document.getElementById('content');
    content.innerHTML = '';
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

    if (!data[zoneName] || !data[zoneName].wards) {
        const noWardsCard = document.createElement('div');
        noWardsCard.className = 'card';
        // noWardsCard.style.backgroundColor = getUniqueColor();
        noWardsCard.innerHTML = '<p>No wards data available for this zone.</p>';
        content.appendChild(noWardsCard);
        return;
    }

    const wards = data[zoneName].wards;
    Object.keys(wards).forEach(wardName => {
        const ward = wards[wardName];
        const wardElement = document.createElement('div');
        wardElement.className = 'card';
        // wardElement.style.backgroundColor = getUniqueColor();
        wardElement.innerHTML = `
            <h4>${wardName}</h4>
            <p>Total No. of Roads: ${ward.totalRoads}</p>
            <a href="#${wardName}" onclick="setCurrentWard('${wardName}'); return false;">View Details</a>
        `;
        content.appendChild(wardElement);
    });
}

//---------------------------------------------- Amenity Card data -----------------------------------------------------------------
function getAmenityCounts(zoneName = null) {
    const amenityCounts = {
        'Zone 1': { 'Bank And ATM': 62, 'Parks': 21, 'Hospital': 11, 'Bus Stop': 3, 'Central Government Office': 2, 'Petrol Pumps': 21, 'Educational Institute': 26, 'Graveyard': 4, 'Hotels': 97, 'Religious Places': 31, 'Stadium': 1, 'Post Office': 1, 'Car Charging': 1 },
        'Zone 2': { 'Bank And ATM': 61, 'Parks': 9, 'Hospital': 8, 'Bus Stop': 2, 'State Government Office': 10, 'Central Government Office': 3, 'Petrol Pumps': 15, 'Educational Institute': 63, 'Graveyard': 2, 'Hotels': 104, 'Religious Places': 6, 'Stadium': 6 },
        'Zone 3': { 'Bank And ATM': 117, 'Parks': 6, 'Hospital': 6, 'Bus Stop': 1, 'State Government Office': 16, 'Central Government Office': 10, 'Petrol Pumps': 17, 'Educational Institute': 40, 'Graveyard': 3, 'Hotels': 60, 'Religious Places': 3, 'Stadium': 3 }
    };

    return zoneName ? amenityCounts[zoneName] || {} : amenityCounts;
}

function showAllZonesForAmenities() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const amenityCounts = getAmenityCounts();

    Object.keys(amenityCounts).forEach(zoneName => {
        const zoneElement = document.createElement('div');
        zoneElement.className = 'card';

        zoneElement.innerHTML = `
            <h4>${zoneName}</h4>
            <a href="#" onclick="showZoneAmenities('${zoneName}'); return false;">View Amenities</a>
        `;
        content.appendChild(zoneElement);
    });

    console.log('✅ Zone cards generated successfully.');
}

function showZoneAmenities(zoneName) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (!zoneName) {
        console.error('No zone name provided.');
        return;
    }

    console.log(`Showing amenities for: ${zoneName}`);

    const zoneInfoCard = document.createElement('div');
    zoneInfoCard.className = 'card';
    zoneInfoCard.style.backgroundColor = '#5072A7';
    zoneInfoCard.style.textAlign = 'center';
    zoneInfoCard.style.color = 'white';
    zoneInfoCard.innerHTML = `<h4>${zoneName}</h4>`;
    content.appendChild(zoneInfoCard);

    const amenities = {
        'Bank And ATM': 'banks_and_atm',
        'Parks': 'park',
        'Hospital': 'hospital',
        'Bus Stop': 'bus_stop',
        'State Government Office': 'sgovoffice',
        'Central Government Office': 'central_government_office',
        'Petrol Pumps': 'petrolpump',
        'Educational Institute': 'educational',
        'Graveyard': 'graveyard',
        'Hotels': 'hotels',
        'Religious Places': 'religious',
        'Stadium': 'stadium',
        'Post Office': 'post_office',
        'Car Charging': 'car_charging_station'
    };

    const amenityCounts = getAmenityCounts(zoneName);

    Object.entries(amenities).forEach(([title, layer]) => {
        if (amenityCounts[title] > 0) {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <h3>${title}</h3>
                <p><a href="javascript:void(0)" onclick="loadAmenityLayer('${zoneName}', '${layer}')">${amenityCounts[title]}</a></p>
            `;
            content.appendChild(cardElement);
        }
    });
}

function loadAmenityLayer(zoneName, layer) {
    console.log(`Loading layer: ${layer} for ${zoneName}`);

    removeCurrentLayer(); 
    clearVectorLayers();

    const layerMapping = {
        'Zone 1': {
            'banks_and_atm': 'z1ann_14082024_banks_and_atm',
            'park': 'z1ann_14082024_park',
            'hospital': 'z1ann_14082024_hospital',
            'bus_stop': 'z1ann_14082024_bus_stop',
            'central_government_office': 'z1ann_14082024_central_government_office',
            'petrolpump': 'z1ann_14082024_petrolpump',
            'educational': 'z1ann_14082024_educational',
            'graveyard': 'z1ann_14082024_graveyard',
            'hotels': 'z1ann_14082024_hotels',
            'religious':'z2ann_14082024_religious',
            'post_office':'z1ann_14082024_car_charging_station',
            'car_charging_station':'z1ann_14082024_car_charging_station'
            
        },
        'Zone 2': {
            'banks_and_atm': 'z2ann_14082024_banks_and_atm',
            'park': 'z2ann_14082024_park',
            'hospital': 'z2ann_14082024_hospital',
            'bus_stop': 'z2ann_14082024_bus_stop',
            'sgovoffice':'z2ann_14082024_sgovoffice',
            'central_government_office': 'z2ann_14082024_central_government_office',
            'petrolpump': 'z2ann_14082024_petrolpump',
            'educational': 'z2ann_14082024_educational',
            'graveyard': 'z2ann_14082024_graveyard',
            'hotels': 'z2ann_14082024_hotels',
            'religious':'z2ann_14082024_religious',
             'stadium':'z2ann_14082024_stadium'
        },
        'Zone 3': {
            'banks_and_atm': 'z3ann_14082024_banks_and_atm',
            'park': 'z3ann_14082024_park',
            'hospital': 'z3ann_14082024_hospital',
            'bus_stop': 'z3ann_14082024_bus_stop',
            'sgovoffice':'z3ann_14082024_sgovoffice',
            'central_government_office': 'z3ann_14082024_central_government_office',
            'petrolpump': 'z3ann_14082024_petrolpump',
            'educational': 'z3ann_14082024_educational',
            'graveyard': 'z3ann_14082024_graveyard',
            'hotels': 'z3ann_14082024_hotels',
            'religious':'z3ann_14082024_religious',
            'stadium':'z3ann_14082024_stadium'
        }
    };

    const mappedLayer = layerMapping[zoneName][layer];

    currentLayer = new ol.layer.Image({
        title: 'Amenities',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: { 'LAYERS': `Ayodhya_Amenities:${mappedLayer}` },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
}

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

    document.getElementById('road-filter').style.display = 'none';
    document.getElementById('drain-filter').style.display = 'none';
    document.getElementById('query_tab').style.display = 'none';


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

//------------------------------------------------------ clear vector layer ------------------------------------------------------------//
function clearVectorLayers() {
    // Create an array to hold layers that you want to preserve
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector 
            // && !isLayerInPreservedList(layer)
        ) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    // Clear overlays
}
let highlightLayer = new ol.layer.Vector({
    source: new ol.source.Vector()
});
map.addLayer(highlightLayer); 
// Function to append data to the table

const dataTableBody_summary = document.getElementById('dataBody_summary');

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
                <td>${item.year_of_co}</td>
                <td>${item.cus}</td>
                <!-- Add more table columns if necessary -->
            `;

            dataTableBody_summary.appendChild(row);

            row.addEventListener('click', function () {
                if (item.geom_wkt) {
                    zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                    highlightAndScrollToRow(row);      // Highlight the clicked row
                }
            });

          
        });
    } else {
        console.error('Expected an array but received:', data);
    }
}
// function for highlighting table row and click on table then highlight layer--------------//

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

// let highlightLayer;
// :white_check_mark: Function to Append Data to Table and Add Click Event for Highlighting
function Table_Row_and_Layer_highlight(data) {
  
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
    let wfsUrl = `http://localhost:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature
        &typename=ANN_Summary:ayodhaya_road_condition
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
   highlightLayer.getSource().clear(); // Clear previous highlights
    highlightLayer.getSource().addFeature(feature); // Add feature to highlight layer
    // Ensure the feature has valid geometry before zooming
    let extent = feature.getGeometry().getExtent();
    if (extent && extent[0] !== Infinity) {
        map.getView().fit(extent, { duration: 1000, padding: [50, 50, 50, 50] });
    } else {
        console.warn("Feature has invalid geometry:", feature);
    }
}



/////-------------------------------Table for Drain-Zooming and highlight also------------//////
const dataTableBody_Drain = document.getElementById('dataBody_Drain');

function Table_Row_and_Layer_highlight_Drain(data) {
    
    dataTableBody_Drain.innerHTML = ""; // Clear previous data
     if (Array.isArray(data)) {
         data.forEach(item => {
             const row = document.createElement('tr');
             row.innerHTML = `
          
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
             `;
             // :white_check_mark: Add Click Event to Row
             row.addEventListener('click', function () {
                 let gisId1 = item.gid; // Get GIS ID from row data
           //      highlightFeatureOnMap_Drain(gisId); // Call function to highlight feature
             //    highlightTableRow_Drain(row); // Highlight the selected table row
             });
             dataTableBody_Drain.appendChild(row);
         });
     } else {
         console.error('Expected an array but received:', data);
     }
 }

 const dataTableBody_summaryfilter = document.getElementById('dataBody_summaryfilter');
// Function to append data to the table
function appendToSummaryTablefilter(data) {
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
                <!-- Add more table columns if necessary -->
            `;
            dataTableBody_summaryfilter.appendChild(row);
            row.addEventListener('click', function () {
                if (item.geom_wkt) {
                    zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                    highlightAndScrollToRow(row);      // Highlight the clicked row
                }
            });

          
        });
    } else {
        console.error('Expected an array but received:', data);
    }
}

//-----------------------------Data fetch to table summary------------//

var currentLayer = null;

function removeCurrentLayer() {
    if (currentLayer) {  // Check if there's a current layer on the map
        map.removeLayer(currentLayer);  // Remove the current layer from the map
        currentLayer = null;  // Reset the currentLayer variable
    }
}

//--------------popup code for road----------------------//

function ANN_Road_popup() {
    // Create a popup element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'absolute';
    //  popup.style.background = 'white';
    popup.style.border = '3px solid black';
    popup.style.padding = '1px';
    // popup.style.width = '180px';
    popup.style.display = 'none';
    document.body.appendChild(popup);

    // Create an overlay for the popup
    const overlay = new ol.Overlay({
        element: popup,
        positioning: 'top',
        stopEvent: true,
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
                      <table style=background-color:white; ><tr style=background-color:white;><td><strong>Field Name</strong></td><td><strong>Value</strong></td></tr>
                       <tr><td> <strong>Zone No.</strong></td><td> ${properties.zone_no || 'N/A'}</td></tr>
                         <tr><td> <strong>Zone Name</strong></td><td> ${properties.zone_name || 'N/A'}</td></tr>

                      <tr><td> <strong>Ward No.</strong></td><td> ${properties.ward_no || 'N/A'}</td></tr>
                         <tr><td> <strong>Ward Name</strong></td><td> ${properties.ward_name || 'N/A'}</td></tr>

                         <tr><td> <strong>Right of Way</strong></td><td> ${properties.row_meter || 'N/A'}</td></tr>
                           <tr><td> <strong>Carriage Width</strong></td><td> ${properties.carriage_w || 'N/A'}</td></tr>
                         <tr><td> <strong>Type</strong></td><td> ${properties.type || 'N/A'}</td></tr>
                          <tr><td> <strong>Condition</strong></td><td> ${properties.condition || 'N/A'}</td></tr>
                           <tr><td> <strong>Material</strong></td><td> ${properties.carriage_m || 'N/A'}</td> </tr>
                             <tr><td> <strong>Ownership</strong></td><td> ${properties.ownership || 'N/A'}</td></tr>
                               <tr><td> <strong>Length(Km)</strong></td><td> ${properties.length_km || 'N/A'}</td></tr>
                                <tr><td> <strong>Road Name</strong></td><td> ${properties.road_name || 'N/A'}</td></tr>
                                </table>
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

function Ayodhya_Road_Length() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Road/wms',
            params: {
                'LAYERS': 'Ayodhya_Road:Ayodhya Roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    ANN_Road_popup();

}
function Ayodhya_Road_Count() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Road/wms',
            params: {
                'LAYERS': 'Ayodhya_Road:Ayodhya Roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    ANN_Road_popup();
}

function Ayodhya_Ownership(cqlFilter) {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership',
                'CQL_FILTER': cqlFilter,
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    // document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('dataTable_summaryfilterOwn').style.display = 'block';
    document.getElementById('tableContainer_summaryfilterOwn').style.display = 'block';

    ANN_Road_popup();
    //  fetchANNTypeData();
    updateTableWithFilteredDatamat(cqlFilter);
}

function Ayodhya_Material(cqlFilter) {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material',
                'CQL_FILTER': cqlFilter,
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    // document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('dataTable_summaryfiltermat').style.display = 'block';
    document.getElementById('tableContainer_summaryfiltermat').style.display = 'block';

    ANN_Road_popup();
    //  fetchANNTypeData();
    updateTableWithFilteredDatamat(cqlFilter);
}
function Ayodhya_Types(cqlFilter) {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data',
                'CQL_FILTER': cqlFilter,
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    document.getElementById('summary-table').style.display = 'none';
    // document.getElementById('dataTable_summary').style.display = 'block';
    document.getElementById('dataTable_summaryfilter').style.display = 'block';
    document.getElementById('tableContainer_summaryfilter').style.display = 'block';

    ANN_Road_popup();
    // fetchANNTypeData();
    updateTableWithFilteredData(cqlFilter);
}
function fetchANNTypeData() {
    fetch(`${BASE_URL}/getAlltypeName`, {
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
            dataTableBody_summaryfilter.innerHTML = '';
            // Pass the correct data to the function
            appendToSummaryTablefilter(responseData.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function Ayodhya_Zone2_Slum_Count() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:z2ann_slum_boundary',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Ayodhya_Zone2_SlumRoad_Count() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        // title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:z2ann_slum_roads',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}

// // Ensure map is initialized before adding layers
// function addBoundaryLayers() {
//     if (typeof map === 'undefined' || !map) {
//         console.error("Error: 'map' is not defined. Ensure OpenLayers is initialized before adding layers.");
//         return;
//     }

//     // Check if layers already exist, if yes, remove them first to prevent duplicates
//     map.getLayers().forEach(layer => {
//         if (layer.get('title') === 'Ayodhya Zone Boundary' || layer.get('title') === 'Ayodhya Ward Boundary') {
//             map.removeLayer(layer);
//         }
//     });

    // Define and Add Ayodhya Zone Boundary
    var Ayodhya_Boundary = new ol.layer.Image({
        title: 'Ayodhya Zone Boundary',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya/wms',
            params: { 
                'LAYERS': 'Ayodhya:Ayodhaya Zone Boundary' }, // Check layer name in Geoserver
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(Ayodhya_Boundary);

    // Define and Add Ayodhya Ward Boundary
    var Ayodhya_Ward_Boundary = new ol.layer.Image({
        title: 'Ayodhya Ward Boundary',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya/wms',
            params: { 
                'LAYERS': 'Ayodhya:Ayodhaya Ward Boundary' }, // Check layer name in Geoserver
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(Ayodhya_Ward_Boundary);
// }
// // Ensure this function is called AFTER map initialization
// setTimeout(addBoundaryLayers, 1000);



//--------------------Search bar code--------------------------//
// $(document).ready(function () {
//     // Initialize Select2 on the dropdown
//     $('#roadNamesDropdown').select2({
//         placeholder: ".. Search by road name",
//         allowClear: true
//     });

//     // Define your WFS parameters
//     var wfsParams = {
//         service: 'WFS',
//         version: '1.1.0',
//         outputFormat: 'application/json',
//         srsName: 'EPSG:4326', // Coordinate system of your data
//         typeName: 'Ayodhya_Road:Ayodhya Roads', // Replace with your WFS layer typename
//         url: 'http://localhost:8080/geoserver/wfs' // Replace with your WFS server URL
//     };

//     // Create a vector source and layer
//     var vectorSource = new ol.source.Vector({
//         format: new ol.format.GeoJSON()
//     });

//     var vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: 'cyan', // Custom line color
//                 width: 5 // Custom line width in pixels
//             })
//         })
//     });
//     map.addLayer(vectorLayer);

//     // Define the URL for the WFS request
//     const url = 'http://localhost:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=Ayodhya_Road:Ayodhya Roads&outputFormat=application/json';

//     // Create the XMLHttpRequest
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 // Parse the JSON response
//                 let response = JSON.parse(xhr.responseText);

//                 // Extract road_name properties from the features, filter out nulls
//                 let roadNames = response.features
//                     .map(feature => feature.properties.road_name)
//                     .filter(roadName => roadName !== null && roadName !== '');

//                 populateDropdown(roadNames);
//                 // Log the road names
//                 console.log('Road Names:', roadNames);
//             } else {
//                 console.error('Error:', xhr.responseText);
//             }
//         }
//     };

//     // Send the request
//     xhr.send();

//     function populateDropdown(roadNames) {
//         let dropdown = $('#roadNamesDropdown');

//         // Clear existing options
//         dropdown.empty();

//         // Create a default option
//         let defaultOption = new Option('Search by Road Name', '', true, true);
//         dropdown.append(defaultOption);

//         // Populate dropdown with road names
//         roadNames.forEach(roadName => {
//             let option = new Option(roadName, roadName, false, false);
//             dropdown.append(option);
//         });

//         // Refresh Select2
//         dropdown.trigger('change');
//     }

//     // Add an event listener to the dropdown
//     $('#roadNamesDropdown').on('change', function () {
//         let selectedRoadName = $(this).val();
//         if (selectedRoadName) {
//             fetchRoadData(selectedRoadName);
//         }
//     });

//     function fetchRoadData(roadName) {
//         let fetchUrl = wfsParams.url + '?service=' + wfsParams.service +
//             '&version=' + wfsParams.version +
//             '&request=GetFeature&typename=' + wfsParams.typeName +
//             '&outputFormat=' + wfsParams.outputFormat +
//             '&srsname=' + wfsParams.srsName +
//             '&CQL_FILTER=road_name=\'' + roadName + '\'';

//         console.log(fetchUrl);

//         let fetchXhr = new XMLHttpRequest();
//         fetchXhr.open('GET', fetchUrl, true);

//         fetchXhr.onreadystatechange = function () {
//             if (fetchXhr.readyState === 4) {
//                 if (fetchXhr.status === 200) {
//                     let response = JSON.parse(fetchXhr.responseText);
//                     vectorSource.clear();
//                     let features = new ol.format.GeoJSON().readFeatures(response);
//                     vectorSource.addFeatures(features);
//                     map.getView().fit(vectorSource.getExtent());
//                 } else {
//                     console.log('Error:', fetchXhr.responseText);
//                 }
//             }
//         };

//         fetchXhr.send();
//     }

//     // Popup overlay
//     var container = document.getElementById('popup-search');
//     var content = document.getElementById('popup-content-search');
//     var closer = document.getElementById('popup-closer');

//     var overlay = new ol.Overlay({
//         element: container,
//         autoPan: true,
//         autoPanAnimation: {
//             duration: 250
//         }
//     });
//     map.addOverlay(overlay);

//     closer.onclick = function () {
//         overlay.setPosition(undefined);
//         closer.blur();
//         return false;
//     };

//     // Add a click event listener to the map
//     map.on('click', function (evt) {
//         var coordinate = evt.coordinate;
//         var featureFound = false;

//         map.forEachFeatureAtPixel(evt.pixel, function (feature) {
//             var geometryType = feature.getGeometry().getType();

//             // Debugging: Log the geometry type
//             console.log('Clicked geometry type:', geometryType);

//             if (geometryType === 'MultiLineString') {
//                 var properties = feature.getProperties();
//                 console.log('Point Feature:', properties);
//                 var contentHtml = '<h6>Road Data</h6>';
//                 for (var key in properties) {
//                     if (properties.hasOwnProperty(key) && key !== 'geometry') { // Exclude geometry property
//                         contentHtml += '<p><strong>' + key + ':</strong> ' + properties[key] + '</p>';
//                     }
//                 }
//                 content.innerHTML = contentHtml;
//                 overlay.setPosition(coordinate);
//                 featureFound = true;
//                 return true; // Stop iteration after the first feature
//             }

//             if (geometryType === 'MultiLineString') {
//                 var properties = feature.getProperties();
//                 console.log('LineString Feature:', properties);
//                 var contentHtml = '<h6>Road Data</h6>';
//                 for (var key in properties) {
//                     if (properties.hasOwnProperty(key) && key !== 'geometry' && key !== 'row_left' && key !== 'row_right') { // Exclude geometry property
//                         contentHtml += '<p><strong>' + key + ':</strong> ' + properties[key] + '</p>';
//                     }
//                 }
//                 content.innerHTML = contentHtml;
//                 overlay.setPosition(coordinate);
//                 featureFound = true;
//                 return true; // Stop iteration after the first feature
//             }
//         });

//         // If no feature was found, hide the overlay
//         if (!featureFound) {
//             overlay.setPosition(undefined);
//         }
//     });
// });

// $(document).ready(function () {
//     // ✅ Initially Hide Search Bar & Legend
//     $("#search-bar, #live_legend").hide();

//     // ✅ Toggle Legend Visibility
//     $("#legendBtn").click(function () {
//         $("#live_legend").toggle();
//     });

//     // ✅ Toggle Search Bar Visibility & Fetch Data When Opened
//     $("#search-icon").click(function () {
//         $("#search-bar").toggle();
//         if ($("#search-bar").is(":visible")) {
//             fetchRoadNames(); // Fetch road names only when search bar is shown
//         }
//     });

//     // ✅ Initialize Select2 Dropdown
//     $('#roadNamesDropdown').select2({
//         placeholder: "Search by Road Name",
//         allowClear: true
//     });

//     // ✅ Define WFS Parameters
//     var wfsParams = {
//         service: 'WFS',
//         version: '1.1.0',
//         outputFormat: 'application/json',
//         srsName: 'EPSG:4326',
//         typeName: 'Ayodhya_Road:Ayodhya_Roads', // Corrected typename
//         url: 'http://localhost:8080/geoserver/wfs'
//     };

//     // ✅ Create Vector Layer for Highlighting
//     var vectorSource = new ol.source.Vector();
//     var vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: 'cyan', // Highlight color
//                 width: 5
//             })
//         })
//     });
//     map.addLayer(vectorLayer);

//     // ✅ Function to Fetch Road Names
//     function fetchRoadNames() {
//         let url = `${wfsParams.url}?service=WFS&version=${wfsParams.version}
//             &request=GetFeature&typeName=${wfsParams.typeName}
//             &outputFormat=${wfsParams.outputFormat}`;

//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 let roadNames = data.features
//                     .map(feature => feature.properties.road_name)
//                     .filter(roadName => roadName); // Remove nulls
//                 populateDropdown(roadNames);
//             })
//             .catch(error => console.error('Error fetching road names:', error));
//     }

//     // ✅ Function to Populate Dropdown
//     function populateDropdown(roadNames) {
//         let dropdown = $('#roadNamesDropdown');
//         dropdown.empty();
//         dropdown.append(new Option('Search by Road Name', '', true, true));
//         roadNames.forEach(road => dropdown.append(new Option(road, road)));
//         dropdown.trigger('change'); // Refresh Select2
//     }

//     // ✅ Fetch Road Data on Selection
//     $('#roadNamesDropdown').on('change', function () {
//         let selectedRoad = $(this).val();
//         if (selectedRoad) {
//             fetchRoadData(selectedRoad);
//         }
//     });

//     // ✅ Function to Fetch & Highlight Road on Map
//     function fetchRoadData(roadName) {
//         let fetchUrl = `${wfsParams.url}?service=${wfsParams.service}
//             &version=${wfsParams.version}&request=GetFeature
//             &typename=${wfsParams.typeName}&outputFormat=${wfsParams.outputFormat}
//             &srsname=${wfsParams.srsName}&CQL_FILTER=road_name='${roadName}'`;

//         fetch(fetchUrl)
//             .then(response => response.json())
//             .then(data => {
//                 vectorSource.clear();
//                 let features = new ol.format.GeoJSON().readFeatures(data);
//                 vectorSource.addFeatures(features);
//                 map.getView().fit(vectorSource.getExtent(), { duration: 1000 });
//             })
//             .catch(error => console.error('Error fetching road data:', error));
//     }

//     // ✅ Popup Overlay
//     var container = document.getElementById('popup-search');
//     var content = document.getElementById('popup-content-search');
//     var closer = document.getElementById('popup-closer');

//     var overlay = new ol.Overlay({
//         element: container,
//         autoPan: true,
//         autoPanAnimation: { duration: 250 }
//     });
//     map.addOverlay(overlay);

//     closer.onclick = function () {
//         overlay.setPosition(undefined);
//         closer.blur();
//         return false;
//     };

//     // ✅ Show Popup When Clicking on a Road
//     map.on('click', function (evt) {
//         let coordinate = evt.coordinate;
//         let featureFound = false;

//         map.forEachFeatureAtPixel(evt.pixel, function (feature) {
//             let properties = feature.getProperties();
//             if (properties.road_name) {
//                 let contentHtml = `<h6>Road Data</h6>`;
//                 for (let key in properties) {
//                     if (key !== 'geometry') {
//                         contentHtml += `<p><strong>${key}:</strong> ${properties[key]}</p>`;
//                     }
//                 }
//                 content.innerHTML = contentHtml;
//                 overlay.setPosition(coordinate);
//                 featureFound = true;
//                 return true; // Stop iteration
//             }
//         });

//         if (!featureFound) overlay.setPosition(undefined);
//     });
// });

//--------------------Search bar code end----------------------------//

//--------------------Search bar code--------------------------//
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
        typeName: 'Ayodhya_Road:Ayodhya Roads', // Replace with your WFS layer typename
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
    const url = 'http://localhost:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=Ayodhya_Road:Ayodhya Roads&outputFormat=application/json';

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


////////////////////------------------------ward,type, material,ownership filter--------------------/////
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
  //  if (selectedCondition) cqlFilter += ` AND type='${selectedCondition}'`;
    if (selectedMaterial) cqlFilter += ` AND carriage_m='${selectedMaterial}'`;
    if (selectedOwnership) cqlFilter += ` AND ownership='${selectedOwnership}'`;
    if (selectedWard1) cqlFilter += ` AND ward_no='${selectedWard1}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`);

    // Update map layer
    updateMapLayerWithFilter(cqlFilter);

    // Update table
    updateTableWithFilteredData(cqlFilter);
  //  Ayodhya_Types(cqlFilter)
}

function updateMapLayerWithFilter(cqlFilter) {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    const wfsUrl = `http://localhost:8080/geoserver/ANN_Summary/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_data&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    const wfsUrl = `http://localhost:8080/geoserver/ANN_Summary/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_material&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

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


////////////////////------------------------ward,type, Ownership,material filter--------------------/////
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    const wfsUrl = `http://localhost:8080/geoserver/ANN_Summary/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_ownership&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

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

//---------Don't Delet this commented code-----------//
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
//             url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road_popup();
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road_popup();
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_data', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('type_legend').style.display = 'block';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_condition', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_material', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
     document.getElementById('Scoreing_tableContainer').style.display = 'none'; 
     document.getElementById('Drain_Status_Legend').style.display = 'none';
     document.getElementById('Drain_Type_Legend').style.display = 'none';
     document.getElementById('Drain_Condition_Legend').style.display = 'none';
     document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ayodhaya_road_ownership', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Ownership_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('type_legend').style.display = 'block';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Ownership_legend').style.display = 'block';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    // Showlegend
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'block';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';  
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';

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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
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
    ANN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'block';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
      document.getElementById('Drain_Status_Legend').style.display = 'none';
      document.getElementById('Drain_Type_Legend').style.display = 'none';
      document.getElementById('Drain_Condition_Legend').style.display = 'none';
      document.getElementById('Drain_Material_Legend').style.display = 'none';
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

//------------Drainage code zone wise and ward wise----------//
function Ayodhya_Zone_no_Drain(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ann_drain', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
  
    map.addLayer(currentLayer);
    // Show data table
    // Fetch corresponding data
    fetchANN_ALLFilteredData_Drain(column, value);
}

function Ayodhya_Ward_no_Drain(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:ann_drain', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
  //  ANN_Road();
    map.addLayer(currentLayer);
    // Show data table
    // Fetch corresponding data
    fetchANN_ALLFilteredData_Drain(column, value);
}

function Ayodhya_Type_Drain(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Type', // Same layer for all filters
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

    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
      document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('Drain_Type_Legend').style.display = 'block';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Drain_Status_Legend').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData_Drain(column, value);
}

function Ayodhya_Condition_Drain(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Condition', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
  //  ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'block';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Drain_Status_Legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData_Drain(column, value);
}

function Ayodhya_Material_Drain(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Material', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
  //  ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Drain_Material_Legend').style.display = 'block';
    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Status_Legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData_Drain(column, value);
}

function Ayodhya_Status_Drain(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Status', // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
 //   ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Drain_Status_Legend').style.display = 'block';
    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    // Fetch corresponding data
    fetchANN_ALLFilteredData_Drain(column, value);
}
// Function to fetch data dynamically based on column and value
function fetchANN_ALLFilteredData_Drain(column, value) {
    fetch(`${BASE_URL}/getDataDrain?column=${column}&value=${value}`, {
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
           Table_Row_and_Layer_highlight_Drain(responseData.data);
            document.getElementById('summary-table').style.display = 'none';
            document.getElementById('dataTable_Drain').style.display = 'block';
            document.getElementById('tableContainer_Drain').style.display = 'block';
        })
        .catch(error => {
            console.error(`Error fetching data for ${column}=${value}:`, error);
        });

}

function Ayodhya_Zone_Type_Drain(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type","material", "status"];
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Type', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
 //   ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Drain_Status_Legend').style.display = 'none';
    document.getElementById('Drain_Type_Legend').style.display = 'block';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    fetchANNFilteredData_drain(zone_no, column, value);
}

function Ayodhya_Zone_Condition_Drain(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "material", "status"];
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Condition', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
 //   ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Drain_Status_Legend').style.display = 'none';
    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'block';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    fetchANNFilteredData_drain(zone_no, column, value);
}

function Ayodhya_Zone_Material_Drain(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "material", "status"];
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Material', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
 //   ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Drain_Status_Legend').style.display = 'none';
    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'block';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    fetchANNFilteredData_drain(zone_no, column, value);
}

function Ayodhya_Zone_Status_Drain(zone_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "type", "material", "status"];
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
            url: 'http://localhost:8080/geoserver/ANN_Summary/wms',
            params: {
                'LAYERS': 'ANN_Summary:Ann_Drain_Status', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
 //   ANN_Road();
    map.addLayer(currentLayer);
    document.getElementById('Drain_Status_Legend').style.display = 'block';
    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    fetchANNFilteredData_drain(zone_no, column, value);
}

// Function to fetch data dynamically based on Zone, Column, and Value
function fetchANNFilteredData_drain(zone_no, column, value) {
    fetch(`${BASE_URL}/getDataByZoneAndFilter_Drain?zone_no=${zone_no}&column=${column}&value=${value}`, {
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
           Table_Row_and_Layer_highlight_Drain(responseData.data);
            document.getElementById('summary-table').style.display = 'none';
            document.getElementById('dataTable_Drain').style.display = 'block';
            document.getElementById('tableContainer_Drain').style.display = 'block';
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


///////////////////////////

function createIconStyle(iconPath, scale = 0.05) {
    return new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: iconPath,
            scale: scale,
        })
    });
}

function createVectorLayer(source) {
    return new ol.layer.Vector({
        source: source,
        visible: false
    });
}

function amenitiesFeatures(type, iconStyle, vectorSource, layer) {
    // ✅ Step 1: Remove all vector layers (except tile/base layers)
    map.getLayers().getArray().slice().forEach(existingLayer => {
        if (existingLayer instanceof ol.layer.Vector) {
            map.removeLayer(existingLayer);
        }
    });

    map.getOverlays().clear();

    // ✅ Step 2: Fetch and draw features
    fetch(`${BASE_URL}/getLocationData?type=${type}`)
        .then(response => response.json())
        .then(data => {
            const features = data.data.map(point => {
                try {
                    const coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
                    const lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

                    const feature = new ol.Feature({
                        geometry: new ol.geom.Point(lonLat),
                        name: point.name,
                        address: point.address,
                        phonenumbe: point.phonenumbe
                    });

                    feature.setStyle(iconStyle);
                    return feature;
                } catch (error) {
                    console.error(`Error creating feature for ${type}:`, error);
                    return null;
                }
            }).filter(Boolean);

            // ✅ Step 3: Add features and show the layer
            vectorSource.clear(); // Clear old features if any
            vectorSource.addFeatures(features);

            // Always add this layer again to ensure it’s shown
            map.addLayer(layer);
            layer.setVisible(true);

            console.log(`${type} features loaded:`, features);
        })
        .catch(error => {
            console.error(`Error fetching ${type} data:`, error);
        });
}


// // Location Types and Fetching Features for Points
// const locationTypes = [
//     { type: 'bank', icon: './logo/bus/bank.png', id: 'showBanks' },
//     { type: 'bus', icon: './logo/bus/bus.png', id: 'showBus' },
//     { type: 'charging', icon: './logo/bus/charging.png', id: 'showCar' },
//     { type: 'hospital', icon: './logo/bus/hospital.png', id: 'showHospital' },
//     { type: 'education', icon: './logo/bus/education.png', id: 'showEducation' },
//     { type: 'hotel', icon: './logo/bus/hotel.png', id: 'showHotel' },
//     { type: 'petrol', icon: './logo/bus/fuel.png', id: 'showPetrol' },
//     { type: 'graveyard', icon: './logo/bus/graveyard.png', id: 'showGraveyard' },
//     { type: 'religious', icon: './logo/bus/Book.png', id: 'showReligious' },
//     { type: 'post_office', icon: './logo/bus/post-office.png', id: 'showPostOffice' },
//     { type: 'gov_office', icon: './logo/bus/Central.png', id: 'showCentralGov' },
//     { type: 'state_gov', icon: './logo/bus/State.png', id: 'showStateGov', scale: 0.02 },
// ];

// locationTypes.forEach(location => {
//     const vectorSource = new ol.source.Vector();
//     const amenitiesVectorLayer = createVectorLayer(vectorSource);

//     const iconStyle = createIconStyle(location.icon, location.scale || 0.05);

//     document.getElementById(location.id).addEventListener('click', () => {
//         amenitiesFeatures(location.type, iconStyle, vectorSource, amenitiesVectorLayer);
//     });
// });
