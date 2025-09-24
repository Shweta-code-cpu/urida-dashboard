// const BASE_URL = "http://192.168.3.106:8182/Ayodhya";

const BASE_URL = `${BASE_URL_All}:8182/Ayodhya`;

//---------------------- header section start --------------------------//



document.getElementById('Slum_Road').addEventListener('click', showTables);
document.getElementById('Bank_Road').addEventListener('click', showTables);
document.getElementById('Park_Road').addEventListener('click', showTables);
document.getElementById('Hospital_Road').addEventListener('click', showTables);
document.getElementById('Hotel_Road').addEventListener('click', showTables);
document.getElementById('Education_Road').addEventListener('click', showTables);

document.getElementById('ShowRoads').addEventListener('click', showTables);

function showTables() {
    // document.getElementById('table_data').style.display = 'block';

    document.getElementById('dataTable').style.display = 'block';
    document.getElementById('tableContainer').style.display = 'block';
    document.getElementById('live_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('dataTable_Drain').style.display = 'none';
    document.getElementById('Scoring_dataTable').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('tableContainer_summary').style.display = 'none';

    document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
    document.getElementById('tableContainer_summaryfilter').style.display = 'none';
    document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';

    document.getElementById('summary-table').style.display = 'none';

    // var legendBtn = document.getElementById('legendBtn');
    // legendBtn.style.display = 'block';
    // legendBtn.style.bottom = '30%';
    // legendBtn.style.left = '1%'; // Example of additional style
    // legendBtn.style.Color = 'color'; // Example of additional style

    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Drain_Status_Legend').style.display = 'none';
}

document.getElementById('ShowDrainage').addEventListener('click', showTables1);

function showTables1() {
    // document.getElementById('table_data').style.display = 'block';
    document.getElementById('tableContainer_Drain').style.display = 'block';
    document.getElementById('dataTable_Drain').style.display = 'block';
    document.getElementById('dataTable').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('Scoring_dataTable').style.display = 'none';
    document.getElementById('summary-table').style.display = 'none';
    var legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'block';
    legendBtn.style.bottom = '30%';
    legendBtn.style.left = '1%'; // Example of additional style
    legendBtn.style.Color = 'color'; // Example of additional style
    document.getElementById('live_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('tableContainer_summary').style.display = 'none';
    document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
    document.getElementById('tableContainer_summaryfilter').style.display = 'none';
    document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';

}
document.getElementById('table_icon').addEventListener('click', showTables2);

function showTables2() {
    // document.getElementById('table_data').style.display = 'block';
    document.getElementById('dataTable').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('summary-table').style.display = 'block';
    document.getElementById('Scoring_dataTable').style.display = 'none';
    document.getElementById('Scoreing_tableContainer').style.display = 'none';
    document.getElementById('tableContainer_summary').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';
    document.getElementById('dataTable_Drain').style.display = 'none';
    
    document.getElementById('legendBtn').style.display = 'none';
    document.getElementById('live_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Drain_Status_Legend').style.display = 'none';

}
document.getElementById('P1').addEventListener('click', showTables3);
document.getElementById('P2').addEventListener('click', showTables3);
document.getElementById('Not_Eligible').addEventListener('click', showTables3);

function showTables3() {
    document.getElementById('Scoring_dataTable').style.display = 'block';
    document.getElementById('dataTable').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'none';
    document.getElementById('tableContainer_Drain').style.display = 'none';

    document.getElementById('Scoreing_tableContainer').style.display = 'block';
    document.getElementById('tableContainer_summary').style.display = 'none';

    document.getElementById('tableContainer_summaryfiltermat').style.display = 'none';
    document.getElementById('tableContainer_summaryfilter').style.display = 'none';
    document.getElementById('tableContainer_summaryfilterOwn').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('type_legend').style.display = 'none';

    document.getElementById('Drain_Type_Legend').style.display = 'none';
    document.getElementById('Drain_Condition_Legend').style.display = 'none';
    document.getElementById('Drain_Material_Legend').style.display = 'none';
    document.getElementById('Drain_Status_Legend').style.display = 'none';

    document.getElementById('summary-table').style.display = 'none';
    var legendBtn = document.getElementById('Priority_legend');
    legendBtn.style.display = 'block';legendBtn.style.height = '15%';
    legendBtn.style.top = '55%';
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


var map, geojson, featureOverlay, overlays, style;
var selected, features, layer_name, layerControl;
var content, draw;
var selectedFeature;
// const london = fromLonLat([-0.12755, 51.507222]);

var view = new ol.View({
    projection: "EPSG:4326",
    center: [82.18380629756041, 26.7500296484465],
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
    
    // Loop through each legend and hide it
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

/*function addMultilinestringFeatureFromWKT_type(wktString, type) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on type
    let color;
    switch (type) {
        case 'Major':
            color = 'blue';

            break;
        case 'Minor':
            color = 'yellow';
            break;
        // case 'Service Road':
        //     color = 'cyan';
        //     break;
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
        case 'ANN':
            color = 'CYAN';
            break;
        case 'PWD':
            color = 'OLIVE';
            break;
        case 'PVT':
            color = 'RED';
            break;
        case 'Railway':
            color = '#c3c922';
            break;
        case 'UPSBC Ltd.':
            color = '#821880';
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
}*/

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
    Array.from(dataTableBody_Drain.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });

    //  // Remove highlight class from all rows
    Array.from(dataTableBody_Scoring.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });
 // Remove highlight class from all rows
 Array.from(dataTableBody_summary.querySelectorAll('tr')).forEach(tr => {
    tr.classList.remove('highlighted');
});
// Remove highlight class from all rows
Array.from(dataTableBody.querySelectorAll('tr')).forEach(tr => {
    tr.classList.remove('highlighted');
});
    

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


//-----------------------------style for layer-------------------------//
function addMultilinestringFeatureFromWKTDrain(wktString, type, condition, material, status) {
    const format = new ol.format.WKT();
    const feature = format.readFeature(wktString, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    // Determine color based on type
    let color;
    switch (type) {
        case 'Primary':
            color = 'blue';
            break;
        case 'Secondary':
            color = 'yellow';
            break;
        case 'Tertiary':
            color = 'orange';
            break;
        default:
            color = 'magenta'; // Default for type
    }

    // Override color based on condition
    if (condition === 'Running') {
        color = 'green';
    } else if (condition === 'Chocked') {
        color = 'darkred';
    }

    // Override color based on material
    if (material === 'Bricked') {
        color = 'darkred';
    } else if (material === 'RCC') {
        color = '#098f9b';
    } else if (material === 'Kachcha') {
        color = 'yellow';
    }

    // Override color based on status
    if (status === 'Open') {
        color = 'lightgreen'; // Make sure to use quotes
    } else if (status === 'Covered') {
        color = 'purple';
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



//------------------------jscode for Drain-------------------------//

function DrainTypeTableData(data) {
    data.forEach(item => {
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
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });


        // Process WKT geometry if available
        if (item.geom_wkt) {
            // const feature = 

            const feature = addMultilinestringFeatureFromWKTDrain(item.geom_wkt, item.type);
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);

        }
    });
}
function DrainMaterialTableData(data) {
    data.forEach(item => {
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
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }

        });
        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature = addMultilinestringFeatureFromWKTDrain(item.geom_wkt, item.type, item.condition, item.material);
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);
        }
    });
}
function DrainConditionTableData(data) {
    data.forEach(item => {
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
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });
        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature = addMultilinestringFeatureFromWKTDrain(item.geom_wkt, item.type, item.condition);
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);
        }
    });
}
function DrainStatusTableData(data) {
    data.forEach(item => {
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
        row.addEventListener('click', function () {
            if (item.geom_wkt) {
                zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                highlightAndScrollToRow(row);      // Highlight the clicked row
            }
        });
        // Process WKT geometry if available
        if (item.geom_wkt) {
            const feature = addMultilinestringFeatureFromWKTDrain(item.geom_wkt, item.type, item.condition, item.material, item.status);
            const featureId = feature.getId();
            featureToRowMap.set(featureId, row);
        }
    });
}

//-----------------------
function isLayerInPreservedList(layer) {
    const preservedLayers = [
        ReligiousVectorLayer, bankVectorLayer, GraveyardVectorLayer, CarVectorLayer,
        HospitalVectorLayer, EducationVectorLayer, PetrolVectorLayer, HotelsVectorLayer,
        StadiumVectorLayer, busVectorLayer, busVectorLayer, PostVectorLayer, CentralGovVectorLayer, StateGovVectorLayer
    ];
    return preservedLayers.includes(layer);
}

//---------------All Drains-------------------------//
ShowDrainage.addEventListener('click', function () {
    removeCurrentLayer();
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
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
        if (Drain_Type_Legend.style.display === 'none') {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Drain_Type_Legend.style.display = 'none';
            Drain_Condition_Legend.style.display = 'none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = 'none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Drain_Type_Legend.style.display = 'none';
            Drain_Condition_Legend.style.display = 'none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = 'none';
        }
    });

});

//-------------------------------------All Priority P1-----------------------------//
// Event listener for Get Data button ,get Category Material BOE road
P1.addEventListener('click', function () {
    // showLoading();  // Show loading indicator
    removeCurrentLayer();
   updateNavBarWithFunctionName("First Priority");


    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getPriorityName?priority=P1`, {
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
                 
                <!-- Add more table data cells as needed -->
            `;
                    dataTableBody_Scoring.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    if (item.geom_wkt) {
                        console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                        const feature = addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);

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
            type_legend.style.display = 'none'; Priority_legend.style.display = 'block'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; 
            Drain_Type_Legend.style.display = ' none';
            Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Priority_legend.style.display = 'none';
            Drain_Type_Legend.style.display = ' none';
            Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
        }
    });



});
//-------------------------------------All Priority P2-----------------------------//

// Event listener for Get Data button ,get Category Material BOE road
P2.addEventListener('click', function () {
    // showLoading();  // Show loading indicator
    removeCurrentLayer();
    updateNavBarWithFunctionName("Second Priority");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getPriorityName?priority=P2`, {
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
                 
                <!-- Add more table data cells as needed -->
            `;
                    dataTableBody_Scoring.appendChild(row);
                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                        const feature = addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);

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
            type_legend.style.display = 'none'; Priority_legend.style.display = 'block'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; live_legend.style.display = 'none';
            Drain_Type_Legend.style.display = ' none';
            Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Priority_legend.style.display = 'none';
            Drain_Type_Legend.style.display = ' none';
            Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
        }
    });



});

//-------------------------------------All Priority Not Eligible-----------------------------//

// Event listener for Get Data button ,get Category Material BOE road
Not_Eligible.addEventListener('click', function () {
    // showLoading();  // Show loading indicator
    removeCurrentLayer();
    updateNavBarWithFunctionName("Not Eligible");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getPriorityName?priority=Not eligible`, {
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
                 
                <!-- Add more table data cells as needed -->
            `;
                    dataTableBody_Scoring.appendChild(row);

                    row.addEventListener('click', function () {
                        if (item.geom_wkt) {
                            zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
                            highlightAndScrollToRow(row);      // Highlight the clicked row
                        }
                    });


                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                        const feature = addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);

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
            type_legend.style.display = 'none'; Priority_legend.style.display = 'block'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; live_legend.style.display = 'none'; Drain_Type_Legend.style.display = ' none';
            Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Drain_Type_Legend.style.display = ' none';
            Drain_Condition_Legend.style.display = ' none'; Drain_Material_Legend.style.display = 'none'; Drain_Status_Legend.style.display = ' none';
        }
    });

});

//---------------All Roads-------------------------//
ShowRoads.addEventListener('click', function () {
    removeCurrentLayer();
    updateNavBarWithFunctionName("All Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getAlltypeName`, {
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
                <td>${item.year_of_co}</td>
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
                console.error('Expected array but received:', responseData.data);
                // Handle non-array data if needed
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error condition if needed
        })

});

//---------------All Bank with Roads-------------------------//
Bank_Road.addEventListener('click', function () {
    removeCurrentLayer();
    updateNavBarWithFunctionName("Bank with Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getBankWithRoad`, {
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
                <td>${item.year_of_co}</td>
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
    updateNavBarWithFunctionName("Park with Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getParkWithRoad`, {
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
                <td>${item.ownership}</td>                        <td>${item.type}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_as_per}</td>
                <td>${item.carriage_w}</td>
                <td>${item.carriage_m}</td>
                <td>${item.length_km}</td>
                <td>${item.condition}</td>
                <td>${item.year_of_co}</td>
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
                        console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                        const feature = addMultilinestringFeatureFromWKT_parkRoad(item.geom_wkt);

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

//---------------All Hospital with Roads-------------------------//
Hospital_Road.addEventListener('click', function () {
    removeCurrentLayer();
    updateNavBarWithFunctionName("Hospital with Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getHospitalWithRoad`, {
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
                <td>${item.ownership}</td>                        <td>${item.type}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_as_per}</td>
                <td>${item.carriage_w}</td>
                <td>${item.carriage_m}</td>
                <td>${item.length_km}</td>
                <td>${item.condition}</td>
                <td>${item.year_of_co}</td>
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
                        console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                        const feature = addMultilinestringFeatureFromWKT_HospitalRoad(item.geom_wkt);

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

//---------------All Hotel with Roads-------------------------//
Hotel_Road.addEventListener('click', function () {
    removeCurrentLayer();
    updateNavBarWithFunctionName("Hotel with Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getHotelWithRoad`, {
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
                <td>${item.ownership}</td>                        <td>${item.type}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_as_per}</td>
                <td>${item.carriage_w}</td>
                <td>${item.carriage_m}</td>
                <td>${item.length_km}</td>
                <td>${item.condition}</td>
                <td>${item.year_of_co}</td>
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
                        console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                        const feature = addMultilinestringFeatureFromWKT_HotelRoad(item.geom_wkt);

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

//---------------All Edu with Roads-------------------------//
Education_Road.addEventListener('click', function () {
    removeCurrentLayer();
    updateNavBarWithFunctionName("Educational Institute with Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getEducationWithRoad`, {
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
                <td>${item.ownership}</td>                        <td>${item.type}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_as_per}</td>
                <td>${item.carriage_w}</td>
                <td>${item.carriage_m}</td>
                <td>${item.length_km}</td>
                <td>${item.condition}</td>
                <td>${item.year_of_co}</td>
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
                        console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
                        const feature = addMultilinestringFeatureFromWKT_EduRoad(item.geom_wkt);

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


// ----------------------Slum Road----------------------------//

Slum_Road.addEventListener('click', function () {
    removeCurrentLayer();
    updateNavBarWithFunctionName("Slum Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
            && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
            && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != CentralGovVectorLayer
            && layer != StateGovVectorLayer && layer != PostVectorLayer && layer != SlumVectorLayer) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    fetch(`${BASE_URL}/getSlumRoad`, {
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
                <td>${item.year_of_co}</td>
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
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
        } else {
            type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
            Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
        }
    });

});

//---------------All Type Data-------------------------//

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

fetch(`${BASE_URL}/getbankName`)
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

fetch(`${BASE_URL}/getbusName`)
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

fetch(`${BASE_URL}/getchargingName`)
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

fetch(`${BASE_URL}/gethospitalsName`)
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

fetch(`${BASE_URL}/getEducationalName`)
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

fetch(`${BASE_URL}/gethotelsName`)
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

fetch(`${BASE_URL}/getPetrolpumpName`)
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
fetch(`${BASE_URL}/getStadiumName`)
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
fetch(`${BASE_URL}/getgraveyardName`)
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


//--------------------Religious places--------------//  
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
fetch(`${BASE_URL}/getReligiousPlaces`)
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
fetch(`${BASE_URL}/getPostOfficeName`)
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

//--------------------Gov Office--------------//  
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
fetch(`${BASE_URL}/getGovOfficeName`)
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


//--------------------StateGov Office--------------//  
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
fetch(`${BASE_URL}/getStateGovernmentName`)
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
fetch(`${BASE_URL}/getPark_newName`)
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
            console.log("WKT Geometry:", park.geom_point);

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
// document.getElementById('load-layer').addEventListener('click', function () {
//     const loadLayer = document.getElementById('table_data');
//     if (loadLayer.style.display === 'none' || loadLayer.style.display === '') {
//         loadLayer.style.display = 'flex';
//     } else {
//         loadLayer.style.display = 'none';
//     }
// });

// draw_type.onchange = function () {
//     map.removeInteraction(draw1);
//     if (draw) {
//         map.removeInteraction(draw);
//         map.removeOverlay(helpTooltip);
//         map.removeOverlay(measureTooltip);
//     }
//     if (vectorLayer) {
//         vectorLayer.getSource().clear();
//     }
//     if (vector1) {
//         vector1.getSource().clear();
//         // $('#table').empty();
//     }
//     if (measureTooltipElement) {
//         var elem = document.getElementsByClassName("tooltip tooltip-static");
//         //$('#measure_tool').empty();
//         //alert(elem.length);
//         for (var i = elem.length - 1; i >= 0; i--) {
//             elem[i].remove();
//             //alert(elem[i].innerHTML);
//         }
//     }
//     add_draw_Interaction();
// };
// var source1 = new ol.source.Vector({
//     wrapX: false,
// });
// var vector1 = new ol.layer.Vector({
//     source: source1,
// });
// map.addLayer(vector1);
// var draw1;
// // layer dropdown query
// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/geoserver/ANN_postgis/wfs?request=getCapabilities",
//         dataType: "xml",
//         success: function (xml) {
//             var select = $("#layer");
//             $(xml)
//                 .find("FeatureType")
//                 .each(function () {
//                     //var title = $(this).find('ows:Operation').attr('name');
//                     //alert(title);
//                     var name = $(this).find("Name").text();
//                     //select.append("<option/><option class='ddheader' value='"+ name +"'>"+title+"</option>");
//                     $(this)
//                         .find("Name")
//                         .each(function () {
//                             var value = $(this).text();
//                             select.append(
//                                 "<option class='ddindent' value='" +
//                                 value +
//                                 "'>" +
//                                 value +
//                                 "</option>"
//                             );
//                         });
//                 });
//             //select.children(":first").text("please make a selection").attr("selected",true);
//         },
//     });
// });
// // attribute dropdown
// $(function () {
//     $("#layer").change(function () {
//         var attributes = document.getElementById("attributes");
//         var length = attributes.options.length;
//         for (i = length - 1; i >= 0; i--) {
//             attributes.options[i] = null;
//         }
//         var value_layer = $(this).val();
//         attributes.options[0] = new Option("Select attributes", "");
//         //  alert(url);
//         $(document).ready(function () {
//             $.ajax({
//                 type: "GET",
//                 url:
//                     "http://localhost:8080/geoserver/ANN_postgis/wfs?service=WFS&request=DescribeFeatureType&version=1.1.0&typeName=" +
//                     value_layer,
//                 dataType: "xml",
//                 success: function (xml) {
//                     var select = $("#attributes");
//                     //var title = $(xml).find('xsd\\:complexType').attr('name');
//                     //  alert(title);
//                     $(xml)
//                         .find("xsd\\:sequence")
//                         .each(function () {
//                             $(this)
//                                 .find("xsd\\:element")
//                                 .each(function () {
//                                     var value = $(this).attr("name");
//                                     //alert(value);
//                                     var type = $(this).attr("type");
//                                     //alert(type);
//                                     if (value != "geom" && value != "the_geom") {
//                                         select.append(
//                                             "<option class='ddindent' value='" +
//                                             type +
//                                             "'>" +
//                                             value +
//                                             "</option>"
//                                         );
//                                     }
//                                 });
//                         });
//                 },
//             });
//         });
//     });
// });
// // operator combo
// $(function () {
//     $("#attributes").change(function () {
//         var operator = document.getElementById("operator");
//         var length = operator.options.length;
//         for (i = length - 1; i >= 0; i--) {
//             operator.options[i] = null;
//         }
//         var value_type = $(this).val();
//         // alert(value_type);
//         var value_attribute = $("#attributes option:selected").text();
//         operator.options[0] = new Option("Select operator", "");
//         if (
//             value_type == "xsd:short" ||
//             value_type == "xsd:int" ||
//             value_type == "xsd:double" ||
//             value_type == "xsd:long"
//         ) {
//             var operator1 = document.getElementById("operator");
//             operator1.options[1] = new Option("Greater than", ">");
//             operator1.options[2] = new Option("Less than", "<");
//             operator1.options[3] = new Option("Equal to", "=");
//             //  operator1.options[4] = new Option('Between', 'BETWEEN');
//         } else if (value_type == "xsd:string") {
//             var operator1 = document.getElementById("operator");
//             operator1.options[1] = new Option("Greater than", ">");
//             operator1.options[2] = new Option("Less than", "<");
//             operator1.options[3] = new Option("Like", "ILike");
//         }
//     });
// });
// // layer dropdown draw query
// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/geoserver/ANN_postgis/wfs?request=getCapabilities",
//         dataType: "xml",
//         success: function (xml) {
//             var select = $("#layer1");
//             $(xml)
//                 .find("FeatureType")
//                 .each(function () {
//                     //var title = $(this).find('ows:Operation').attr('name');
//                     //alert(title);
//                     var name = $(this).find("Name").text();
//                     //select.append("<option/><option class='ddheader' value='"+ name +"'>"+title+"</option>");
//                     $(this)
//                         .find("Name")
//                         .each(function () {
//                             var value = $(this).text();
//                             select.append(
//                                 "<option class='ddindent' value='" +
//                                 value +
//                                 "'>" +
//                                 value +
//                                 "</option>"
//                             );
//                         });
//                 });
//             //select.children(":first").text("please make a selection").attr("selected",true);
//         },
//     });
// });
// var highlightStyle = new ol.style.Style({
//     fill: new ol.style.Fill({
//         color: "rgba(255,0,0,0.3)",
//     }),
//     stroke: new ol.style.Stroke({
//         color: "yellow",
//         width: 3,
//     }),
//     image: new ol.style.Circle({
//         radius: 10,
//         fill: new ol.style.Fill({
//             color: "white",
//         }),
//     }),
// });
// // function for finding row in the table when feature selected on map
// function findRowNumber(cn1, v1) {
//     var table = document.querySelector("#table");
//     var rows = table.querySelectorAll("tr");
//     var msg = "No such row exist";
//     for (i = 1; i < rows.length; i++) {
//         var tableData = rows[i].querySelectorAll("td");
//         if (tableData[cn1 - 1].textContent == v1) {
//             msg = i;
//             break;
//         }
//     }
//     return msg;
// }
// // function for loading query
// function query() {
//     $("#table").empty();
//     if (geojson) {
//         map.removeLayer(geojson);
//     }
//     if (selectedFeature) {
//         selectedFeature.setStyle();
//         selectedFeature = undefined;
//     }
//     if (vector1) {
//         vector1.getSource().clear();
//         // $('#table').empty();
//     }
//     //alert('jsbchdb');
//     var layer = document.getElementById("layer");
//     var value_layer = layer.options[layer.selectedIndex].value;
//     //alert(value_layer);
//     var attribute = document.getElementById("attributes");
//     var value_attribute = attribute.options[attribute.selectedIndex].text;
//     var operator = document.getElementById("operator");
//     var value_operator = operator.options[operator.selectedIndex].value;
//     //alert(value_operator);
//     var txt = document.getElementById("value");
//     var value_txt = txt.value;
//     if (value_operator == "ILike") {
//         value_txt = "'" + value_txt + "%25'";
//         //alert(value_txt);
//         //value_attribute = 'strToLowerCase('+value_attribute+')';
//     } else {
//         value_txt = value_txt;
//         //value_attribute = value_attribute;
//     }
//     //alert(value_txt);
//     var url =
//         "http://localhost:8080/geoserver/ANN_postgis/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=" +
//         value_layer +
//         "&CQL_FILTER=" +
//         value_attribute +
//         "%20" +
//         value_operator +
//         "%20" +
//         value_txt +
//         "%20" +
//         "&outputFormat=application/json";
//     //console.log(url);
//     style = new ol.style.Style({
//         fill: new ol.style.Fill({
//             color: "rgba(255, 255, 255, 0.2)",
//         }),
//         stroke: new ol.style.Stroke({
//             color: "#8ECAED",
//             width: 7,
//         }),
//         image: new ol.style.Circle({
//             radius: 7,
//             fill: new ol.style.Fill({
//                 color: "#8ECAED",
//             }),
//         }),
//     });
//     geojson = new ol.layer.Vector({
//         //title:'dfdfd',
//         //title: '<h5>' + value_crop+' '+ value_param +' '+ value_seas+' '+value_level+'</h5>',
//         source: new ol.source.Vector({
//             url: url,
//             format: new ol.format.GeoJSON(),
//         }),
//         style: style,
//     });
//     geojson.getSource().on("addfeature", function () {
//         //alert(geojson.getSource().getExtent());
//         map.getView().fit(geojson.getSource().getExtent(), {
//             duration: 1590,
//             size: map.getSize(),
//         });
//     });
//     //overlays.getLayers().push(geojson);
//     map.addLayer(geojson);
//     $.getJSON(url, function (data) {
//         var col = [];
//         col.push("id");
//         for (var i = 0; i < data.features.length; i++) {
//             for (var key in data.features[i].properties) {
//                 if (col.indexOf(key) === -1) {
//                     col.push(key);
//                 }
//             }
//         }
//         var table = document.createElement("table");
//         table.setAttribute("class", "table table-hover table-striped");
//         table.setAttribute("id", "table");
//         var caption = document.createElement("caption");
//         caption.setAttribute("id", "caption");
//         caption.style.captionSide = "top";
//         caption.style.backgroundColor = "white";
//         caption.innerHTML =
//             // value_layer +
//             " (Number of Features : " + data.features.length + " )";
//         table.appendChild(caption);
//         // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
//         var tr = table.insertRow(-1); // TABLE ROW.
//         for (var i = 0; i < col.length; i++) {
//             var th = document.createElement("th"); // TABLE HEADER.
//             th.innerHTML = col[i];
//             tr.appendChild(th);
//         }
//         // ADD JSON DATA TO THE TABLE AS ROWS.
//         for (var i = 0; i < data.features.length; i++) {
//             tr = table.insertRow(-1);
//             for (var j = 0; j < col.length; j++) {
//                 var tabCell = tr.insertCell(-1);
//                 if (j == 0) {
//                     tabCell.innerHTML = data.features[i]["id"];
//                 } else {
//                     //alert(data.features[i]['id']);
//                     tabCell.innerHTML = data.features[i].properties[col[j]];
//                     //alert(tabCell.innerHTML);
//                 }
//             }
//         }
//         // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
//         var divContainer = document.getElementById("table_data");
//         divContainer.innerHTML = "";
//         divContainer.appendChild(table);
//         document.getElementById("map").style.height = "71%";
//         document.getElementById("table_data").style.height = "29%";
//         map.updateSize();
//         addRowHandlers();
//     });
//     map.on("singleclick", highlight);
// }

// // highlight the feature on map and table on map click
// function highlight(evt) {
//     if (selectedFeature) {
//         selectedFeature.setStyle();
//         selectedFeature = undefined;
//     }
//     var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
//         return feature;
//     });
//     if (feature && feature.getId() != undefined) {
//         var geometry = feature.getGeometry();
//         var coord = geometry.getCoordinates();
//         var coordinate = evt.coordinate;
//         //alert(feature.get('gid'));
//         // alert(coordinate);
//         /*var content1 = '<h3>' + feature.get([name]) + '</h3>';
//     content1 += '<h5>' + feature.get('crop')+' '+ value_param +' '+ value_seas+' '+value_level+'</h5>'
//     content1 += '<h5>' + feature.get([value_param]) +' '+ unit +'</h5>';
//     // alert(content1);
//     content.innerHTML = content1;
//     overlay.setPosition(coordinate);*/
//         // console.info(feature.getProperties());
//         $(function () {
//             $("#table td").each(function () {
//                 $(this).parent("tr").css("background-color", "white");
//             });
//         });
//         feature.setStyle(highlightStyle);
//         selectedFeature = feature;
//         var table = document.getElementById("table");
//         var cells = table.getElementsByTagName("td");
//         var rows = document.getElementById("table").rows;
//         var heads = table.getElementsByTagName("th");
//         var col_no;
//         for (var i = 0; i < heads.length; i++) {
//             // Take each cell
//             var head = heads[i];
//             //alert(head.innerHTML);
//             if (head.innerHTML == "id") {
//                 col_no = i + 1;
//                 //alert(col_no);
//             }
//         }
//         var row_no = findRowNumber(col_no, feature.getId());
//         //alert(row_no);
//         var rows = document.querySelectorAll("#table tr");
//         rows[row_no].scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//         });
//         $(document).ready(function () {
//             $("#table td:nth-child(" + col_no + ")").each(function () {
//                 if ($(this).text() == feature.getId()) {
//                     $(this).parent("tr").css("background-color", "grey");
//                 }
//             });
//         });
//     } else {
//         $(function () {
//             $("#table td").each(function () {
//                 $(this).parent("tr").css("background-color", "white");
//             });
//         });
//     }
//     /*$(function() {
//   $("#table td").each(function() {
//   if ($(this).text() == feature.get('gid')) {
//   // $(this).css('color', 'red');
//   $(this).parent("tr").css("background-color", "grey");
//   }
//   });
//   });*/
// }
// // highlight the feature on map and table on row select in table
// function addRowHandlers() {
//     var rows = document.getElementById("table").rows;
//     var heads = table.getElementsByTagName("th");
//     var col_no;
//     for (var i = 0; i < heads.length; i++) {
//         // Take each cell
//         var head = heads[i];
//         //alert(head.innerHTML);
//         if (head.innerHTML == "id") {
//             col_no = i + 1;
//             //alert(col_no);
//         }
//     }
//     for (i = 0; i < rows.length; i++) {
//         rows[i].onclick = (function () {
//             return function () {
//                 if (selectedFeature) {
//                     selectedFeature.setStyle();
//                     selectedFeature = undefined;
//                 }
//                 $(function () {
//                     $("#table td").each(function () {
//                         $(this).parent("tr").css("background-color", "white");
//                     });
//                 });
//                 var cell = this.cells[col_no - 1];
//                 var id = cell.innerHTML;
//                 $(document).ready(function () {
//                     $("#table td:nth-child(" + col_no + ")").each(function () {
//                         if ($(this).text() == id) {
//                             $(this).parent("tr").css("background-color", "grey");
//                         }
//                     });
//                 });
//                 var features = geojson.getSource().getFeatures();
//                 for (i = 0; i < features.length; i++) {
//                     if (features[i].getId() == id) {
//                         //alert(features[i].feature.id);
//                         features[i].setStyle(highlightStyle);
//                         selectedFeature = features[i];
//                         var featureExtent = features[i].getGeometry().getExtent();
//                         if (featureExtent) {
//                             map.getView().fit(featureExtent, {
//                                 duration: 1590,
//                                 size: map.getSize(),
//                             });
//                         }
//                     }
//                 }
//                 //alert("id:" + id);
//             };
//         })(rows[i]);
//     }
// }





// //------------- draw function in query panel----------------------//
// draw_type.onchange = function () {
//     map.removeInteraction(draw1);
//     if (draw) {
//         map.removeInteraction(draw);
//         map.removeOverlay(helpTooltip);
//         map.removeOverlay(measureTooltip);
//     }
//     if (vectorLayer) {
//         vectorLayer.getSource().clear();
//     }
//     if (vector1) {
//         vector1.getSource().clear();
//         // $('#table').empty();
//     }
//     if (measureTooltipElement) {
//         var elem = document.getElementsByClassName("tooltip tooltip-static");
//         //$('#measure_tool').empty();
//         //alert(elem.length);
//         for (var i = elem.length - 1; i >= 0; i--) {
//             elem[i].remove();
//             //alert(elem[i].innerHTML);
//         }
//     }
//     add_draw_Interaction();
// };
// var source1 = new ol.source.Vector({
//     wrapX: false,
// });
// var vector1 = new ol.layer.Vector({
//     source: source1,
// });
// map.addLayer(vector1);
// var draw1;
// // measure Tool
// function add_draw_Interaction() {
//     var value = draw_type.value;
//     //alert(value);
//     if (value !== "None") {
//         var geometryFunction;
//         if (value === "Square") {
//             value = "Circle";
//             geometryFunction = new ol.interaction.Draw.createRegularPolygon(4);
//         } else if (value === "Box") {
//             value = "Circle";
//             geometryFunction = new ol.interaction.Draw.createBox();
//         } else if (value === "Star") {
//             value = "Circle";
//             geometryFunction = function (coordinates, geometry) {
//                 //alert(value);
//                 var center = coordinates[0];
//                 var last = coordinates[1];
//                 var dx = center[0] - last[0];
//                 var dy = center[1] - last[1];
//                 var radius = Math.sqrt(dx * dx + dy * dy);
//                 var rotation = Math.atan2(dy, dx);
//                 var newCoordinates = [];
//                 var numPoints = 12;
//                 for (var i = 0; i < numPoints; ++i) {
//                     var angle = rotation + (i * 2 * Math.PI) / numPoints;
//                     var fraction = i % 2 === 0 ? 1 : 0.5;
//                     var offsetX = radius * fraction * Math.cos(angle);
//                     var offsetY = radius * fraction * Math.sin(angle);
//                     newCoordinates.push([center[0] + offsetX, center[1] + offsetY]);
//                 }
//                 newCoordinates.push(newCoordinates[0].slice());
//                 if (!geometry) {
//                     geometry = new ol.geom.Polygon([newCoordinates]);
//                 } else {
//                     geometry.setCoordinates([newCoordinates]);
//                 }
//                 return geometry;
//             };
//         }
//         // map.addInteraction(draw1);
//         if (draw_type.value == "select" || draw_type.value == "clear") {
//             if (draw1) {
//                 map.removeInteraction(draw1);
//             }
//             vector1.getSource().clear();
//             if (geojson) {
//                 geojson.getSource().clear();
//                 map.removeLayer(geojson);
//             }
//         } else if (
//             draw_type.value == "Square" ||
//             draw_type.value == "Polygon" ||
//             draw_type.value == "Circle" ||
//             draw_type.value == "Star" ||
//             draw_type.value == "Box"
//         ) {
//             draw1 = new ol.interaction.Draw({
//                 source: source1,
//                 type: value,
//                 geometryFunction: geometryFunction,
//             });
//             map.addInteraction(draw1);
//             draw1.on("drawstart", function (evt) {
//                 if (vector1) {
//                     vector1.getSource().clear();
//                 }
//                 if (geojson) {
//                     geojson.getSource().clear();
//                     map.removeLayer(geojson);
//                 }

//                 //alert('bc');
//             });
//             draw1.on("drawend", function (evt) {
//                 var feature = evt.feature;
//                 var coords = feature.getGeometry();
//                 //console.log(coords);
//                 var format = new ol.format.WKT();
//                 var wkt = format.writeGeometry(coords);
//                 var layer_name = document.getElementById("layer1");
//                 var value_layer = layer_name.options[layer_name.selectedIndex].value;
//                 var url =
//                     "http://localhost:8080/geoserver/ANN_postgis/wfs?request=GetFeature&version=1.0.0&typeName=" +
//                     value_layer +
//                     "&outputFormat=json&cql_filter=INTERSECTS(geom," +
//                     wkt +
//                     ")";
//                 //alert(url);
//                 style = new ol.style.Style({
//                     fill: new ol.style.Fill({
//                         color: "rgba(255, 255, 255, 0.2)",
//                     }),
//                     stroke: new ol.style.Stroke({
//                         color: "#ffcc33",
//                         width: 3,
//                     }),
//                     image: new ol.style.Circle({
//                         radius: 7,
//                         fill: new ol.style.Fill({
//                             color: "#ffcc33",
//                         }),
//                     }),
//                 });
//                 geojson = new ol.layer.Vector({
//                     // title:'dfdfd',
//                     // title: '<h5>' + value_crop+' '+ value_param +' '+ value_seas+' '+value_level+'</h5>',
//                     source: new ol.source.Vector({
//                         url: url,
//                         format: new ol.format.GeoJSON(),
//                     }),
//                     style: style,
//                 });
//                 geojson.getSource().on("addfeature", function () {
//                     //alert(geojson.getSource().getExtent());
//                     map.getView().fit(geojson.getSource().getExtent(), {
//                         duration: 1590,
//                         size: map.getSize(),
//                     });
//                 });
//                 //overlays.getLayers().push(geojson);
//                 map.addLayer(geojson);
//                 map.removeInteraction(draw1);
//                 $.getJSON(url, function (data) {
//                     var col = [];
//                     col.push("id");
//                     for (var i = 0; i < data.features.length; i++) {
//                         for (var key in data.features[i].properties) {
//                             if (col.indexOf(key) === -1) {
//                                 col.push(key);
//                             }
//                         }
//                     }
//                     var table = document.createElement("table");
//                     table.setAttribute("class", "table table-hover table-striped");
//                     table.setAttribute("id", "table1");
//                     var caption = document.createElement("caption");
//                     caption.setAttribute("id", "caption");
//                     caption.style.captionSide = "top";
//                     caption.innerHTML =
//                         value_layer +
//                         " (Number of Features : " +
//                         data.features.length +
//                         " )";
//                     table.appendChild(caption);
//                     // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
//                     var tr = table.insertRow(-1); // TABLE ROW.
//                     for (var i = 0; i < col.length; i++) {
//                         var th = document.createElement("th"); // TABLE HEADER.
//                         th.innerHTML = col[i];
//                         tr.appendChild(th);
//                     }
//                     // ADD JSON DATA TO THE TABLE AS ROWS.
//                     for (var i = 0; i < data.features.length; i++) {
//                         tr = table.insertRow(-1);
//                         for (var j = 0; j < col.length; j++) {
//                             var tabCell = tr.insertCell(-1);
//                             if (j == 0) {
//                                 tabCell.innerHTML = data.features[i]["id"];
//                             } else {
//                                 //alert(data.features[i]['id']);
//                                 tabCell.innerHTML = data.features[i].properties[col[j]];
//                                 //alert(tabCell.innerHTML);
//                             }
//                         }
//                     }
//                     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
//                     var divContainer = document.getElementById("table_data");
//                     divContainer.innerHTML = "";
//                     divContainer.appendChild(table);
//                     document.getElementById("map").style.height = "71%";
//                     document.getElementById("table_data").style.height = "29%";
//                     map.updateSize();
//                     addRowHandlers();
//                 });
//                 map.on("singleclick", highlight);
//             });
//         }
//     }
// }
// var source = new ol.source.Vector();
// var vectorLayer = new ol.layer.Vector({
//     //title: 'layer',
//     source: source,
//     style: new ol.style.Style({
//         fill: new ol.style.Fill({
//             color: "rgba(255, 255, 255, 0.2)",
//         }),
//         stroke: new ol.style.Stroke({
//             color: "#ffcc33",
//             width: 2,
//         }),
//         image: new ol.style.Circle({
//             radius: 7,
//             fill: new ol.style.Fill({
//                 color: "#ffcc33",
//             }),
//         }),
//     }),
// });
// map.addLayer(vectorLayer);
// /**
//  * Currently drawn feature.
//  * @type {module:ol/Feature~Feature}
//  */
// var sketch;
// /**
//  * The help tooltip element.
//  * @type {Element}
//  */
// var helpTooltipElement;
// /**
//  * Overlay to show the help messages.
//  * @type {module:ol/Overlay}
//  */
// var helpTooltip;
// /**
//  * The measure tooltip element.
//  * @type {Element}
//  */
// var measureTooltipElement;
// /**
//  * Overlay to show the measurement.
//  * @type {module:ol/Overlay}
//  */
// var measureTooltip;
// /**
//  * Message to show when the user is drawing a polygon.
//  * @type {string}
//  */
// var continuePolygonMsg = "Click to continue drawing the polygon";
// /**
//  * Message to show when the user is drawing a line.
//  * @type {string}
//  */
// var continueLineMsg = "Click to continue drawing the line";
// var draw; // global so we can remove it later
// /**
//  * Format length output.
//  * @param {module:ol/geom/LineString~LineString} line The line.
//  * @return {string} The formatted length.
//  */
// var formatLength = function (line) {
//     var length = ol.sphere.getLength(line, {
//         projection: "EPSG:4326",
//     });
//     //var length = getLength(line);
//     //var length = line.getLength({projection:'EPSG:4326'});
//     var output;
//     if (length > 100) {
//         output = Math.round((length / 1000) * 100) / 100 + " " + "km";
//     } else {
//         output = Math.round(length * 100) / 100 + " " + "m";
//     }
//     return output;
// };
// /**
//  * Format area output.
//  * @param {module:ol/geom/Polygon~Polygon} polygon The polygon.
//  * @return {string}// Formatted area.
//  */
// var formatArea = function (polygon) {
//     // var area = getArea(polygon);
//     var area = ol.sphere.getArea(polygon, {
//         projection: "EPSG:4326",
//     });
//     // var area = polygon.getArea();
//     //alert(area);
//     var output;
//     if (area > 10000) {
//         output = Math.round((area / 1000000) * 100) / 100 + " " + "km<sup>2</sup>";
//     } else {
//         output = Math.round(area * 100) / 100 + " " + "m<sup>2</sup>";
//     }
//     return output;
// };
// function addInteraction() {
//     if (measuretype.value == "select" || measuretype.value == "clear") {
//         if (draw) {
//             map.removeInteraction(draw);
//         }
//         if (vectorLayer) {
//             vectorLayer.getSource().clear();
//         }
//         if (helpTooltip) {
//             map.removeOverlay(helpTooltip);
//         }
//         if (measureTooltipElement) {
//             var elem = document.getElementsByClassName("tooltip tooltip-static");
//             //$('#measure_tool').empty();
//             //alert(elem.length);
//             for (var i = elem.length - 1; i >= 0; i--) {
//                 elem[i].remove();
//                 //alert(elem[i].innerHTML);
//             }
//         }
//         //var elem1 = elem[0].innerHTML;
//         //alert(elem1);
//     } else if (measuretype.value == "area" || measuretype.value == "length") {
//         var type;
//         if (measuretype.value == "area") {
//             type = "Polygon";
//         } else if (measuretype.value == "length") {
//             type = "LineString";
//         }
//         //alert(type);
//         //var type = (measuretype.value == 'area' ? 'Polygon' : 'LineString');
//         draw = new ol.interaction.Draw({
//             source: source,
//             type: type,
//             style: new ol.style.Style({
//                 fill: new ol.style.Fill({
//                     color: "rgba(255, 255, 255, 0.5)",
//                 }),
//                 stroke: new ol.style.Stroke({
//                     color: "rgba(0, 0, 0, 0.5)",
//                     lineDash: [10, 10],
//                     width: 2,
//                 }),
//                 image: new ol.style.Circle({
//                     radius: 5,
//                     stroke: new ol.style.Stroke({
//                         color: "rgba(0, 0, 0, 0.7)",
//                     }),
//                     fill: new ol.style.Fill({
//                         color: "rgba(255, 255, 255, 0.5)",
//                     }),
//                 }),
//             }),
//         });
//         map.addInteraction(draw);
//         createMeasureTooltip();
//         createHelpTooltip();
//         /**
//          * Handle pointer move.
//          * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt The event.
//          */
//         var pointerMoveHandler = function (evt) {
//             if (evt.dragging) {
//                 return;
//             }
//             /** @type {string} */
//             var helpMsg = "Click to start drawing";
//             if (sketch) {
//                 var geom = sketch.getGeometry();
//                 if (geom instanceof ol.geom.Polygon) {
//                     helpMsg = continuePolygonMsg;
//                 } else if (geom instanceof ol.geom.LineString) {
//                     helpMsg = continueLineMsg;
//                 }
//             }
//             helpTooltipElement.innerHTML = helpMsg;
//             helpTooltip.setPosition(evt.coordinate);
//             helpTooltipElement.classList.remove("hidden");
//         };
//         map.on("pointermove", pointerMoveHandler);
//         map.getViewport().addEventListener("mouseout", function () {
//             helpTooltipElement.classList.add("hidden");
//         });
//         var listener;
//         draw.on(
//             "drawstart",
//             function (evt) {
//                 // set sketch
//                 //vectorLayer.getSource().clear();
//                 sketch = evt.feature;
//                 /** @type {module:ol/coordinate~Coordinate|undefined} */
//                 var tooltipCoord = evt.coordinate;
//                 listener = sketch.getGeometry().on("change", function (evt) {
//                     var geom = evt.target;
//                     var output;
//                     if (geom instanceof ol.geom.Polygon) {
//                         output = formatArea(geom);
//                         tooltipCoord = geom.getInteriorPoint().getCoordinates();
//                     } else if (geom instanceof ol.geom.LineString) {
//                         output = formatLength(geom);
//                         tooltipCoord = geom.getLastCoordinate();
//                     }
//                     measureTooltipElement.innerHTML = output;
//                     measureTooltip.setPosition(tooltipCoord);
//                 });
//             },
//             this
//         );
//         draw.on(
//             "drawend",
//             function () {
//                 measureTooltipElement.className = "tooltip tooltip-static";
//                 measureTooltip.setOffset([0, -7]);
//                 // unset sketch
//                 sketch = null;
//                 // unset tooltip so that a new one can be created
//                 measureTooltipElement = null;
//                 createMeasureTooltip();
//                 ol.Observable.unByKey(listener);
//             },
//             this
//         );
//     }
// }
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

/*----------------------------------------- javascript for sidebar----------------------------------------- */

const dataTableBody_Scoring = document.getElementById('dataBody_Scoring');
const dataTableBody_Drain = document.getElementById('dataBody_Drain');
const dataTableBody = document.getElementById('dataBody');
const dataTableBody_summary = document.getElementById('dataBody_summary');
const dataTableBody_summaryfilter = document.getElementById('dataBody_summaryfilter');

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

//---------------------------- query panel ---------------------//
// function query_panel1() {
//     var x = document.getElementById("query_tab");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

//--------------- measure option start -------------------------//
// function measure_tab() {
//     var x = document.getElementById("measure-tab");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }



// function clearMeasurement() {
//     console.log("Clear Measurement selected");
//     // Add your functionality to clear measurements here
// }

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


// /**
//  * Currently drawn feature.
//  * @type {module:ol/Feature~Feature}
//  */
// var sketch;
// /**
//  * The help tooltip element.
//  * @type {Element}
//  */
// var helpTooltipElement;
// /**
//  * Overlay to show the help messages.
//  * @type {module:ol/Overlay}
//  */
// var helpTooltip;
// /**
//  * The measure tooltip element.
//  * @type {Element}
//  */
// var measureTooltipElement;
// /**
//  * Overlay to show the measurement.
//  * @type {module:ol/Overlay}
//  */
// var measureTooltip;
// /**
//  * Message to show when the user is drawing a polygon.
//  * @type {string}
//  */
// var continuePolygonMsg = "Click to continue drawing the polygon";
// /**
//  * Message to show when the user is drawing a line.
//  * @type {string}
//  */
// var continueLineMsg = "Click to continue drawing the line";
// var draw; // global so we can remove it later
// /**
//  * Format length output.
//  * @param {module:ol/geom/LineString~LineString} line The line.
//  * @return {string} The formatted length.
//  */
// var formatLength = function (line) {
//     var length = ol.sphere.getLength(line, {
//         projection: "EPSG:4326",
//     });
//     //var length = getLength(line);
//     //var length = line.getLength({projection:'EPSG:4326'});
//     var output;
//     if (length > 100) {
//         output = Math.round((length / 1000) * 100) / 100 + " " + "km";
//     } else {
//         output = Math.round(length * 100) / 100 + " " + "m";
//     }
//     return output;
// };
// /**
//  * Format area output.
//  * @param {module:ol/geom/Polygon~Polygon} polygon The polygon.
//  * @return {string}// Formatted area.
//  */
// var formatArea = function (polygon) {
//     // var area = getArea(polygon);
//     var area = ol.sphere.getArea(polygon, {
//         projection: "EPSG:4326",
//     });
//     // var area = polygon.getArea();
//     //alert(area);
//     var output;
//     if (area > 10000) {
//         output = Math.round((area / 1000000) * 100) / 100 + " " + "km<sup>2</sup>";
//     } else {
//         output = Math.round(area * 100) / 100 + " " + "m<sup>2</sup>";
//     }
//     return output;
// };
// function addInteraction() {
//     if (measuretype.value == "select" || measuretype.value == "clear") {
//         if (draw) {
//             map.removeInteraction(draw);
//         }
//         if (vectorLayer) {
//             vectorLayer.getSource().clear();
//         }
//         if (helpTooltip) {
//             map.removeOverlay(helpTooltip);
//         }
//         if (measureTooltipElement) {
//             var elem = document.getElementsByClassName("tooltip tooltip-static");
//             //$('#measure_tool').empty();
//             //alert(elem.length);
//             for (var i = elem.length - 1; i >= 0; i--) {
//                 elem[i].remove();
//                 //alert(elem[i].innerHTML);
//             }
//         }
//         //var elem1 = elem[0].innerHTML;
//         //alert(elem1);
//     } else if (measuretype.value == "area" || measuretype.value == "length") {
//         var type;
//         if (measuretype.value == "area") {
//             type = "Polygon";
//         } else if (measuretype.value == "length") {
//             type = "LineString";
//         }
//         //alert(type);
//         //var type = (measuretype.value == 'area' ? 'Polygon' : 'LineString');
//         draw = new ol.interaction.Draw({
//             source: source,
//             type: type,
//             style: new ol.style.Style({
//                 fill: new ol.style.Fill({
//                     color: "rgba(255, 255, 255, 0.5)",
//                 }),
//                 stroke: new ol.style.Stroke({
//                     color: "rgba(0, 0, 0, 0.5)",
//                     lineDash: [10, 10],
//                     width: 2,
//                 }),
//                 image: new ol.style.Circle({
//                     radius: 5,
//                     stroke: new ol.style.Stroke({
//                         color: "rgba(0, 0, 0, 0.7)",
//                     }),
//                     fill: new ol.style.Fill({
//                         color: "rgba(255, 255, 255, 0.5)",
//                     }),
//                 }),
//             }),
//         });
//         map.addInteraction(draw);
//         createMeasureTooltip();
//         createHelpTooltip();
//         /**
//          * Handle pointer move.
//          * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt The event.
//          */
//         var pointerMoveHandler = function (evt) {
//             if (evt.dragging) {
//                 return;
//             }
//             /** @type {string} */
//             var helpMsg = "Click to start drawing";
//             if (sketch) {
//                 var geom = sketch.getGeometry();
//                 if (geom instanceof ol.geom.Polygon) {
//                     helpMsg = continuePolygonMsg;
//                 } else if (geom instanceof ol.geom.LineString) {
//                     helpMsg = continueLineMsg;
//                 }
//             }
//             helpTooltipElement.innerHTML = helpMsg;
//             helpTooltip.setPosition(evt.coordinate);
//             helpTooltipElement.classList.remove("hidden");
//         };
//         map.on("pointermove", pointerMoveHandler);
//         map.getViewport().addEventListener("mouseout", function () {
//             helpTooltipElement.classList.add("hidden");
//         });
//         var listener;
//         draw.on(
//             "drawstart",
//             function (evt) {
//                 // set sketch
//                 //vectorLayer.getSource().clear();
//                 sketch = evt.feature;
//                 /** @type {module:ol/coordinate~Coordinate|undefined} */
//                 var tooltipCoord = evt.coordinate;
//                 listener = sketch.getGeometry().on("change", function (evt) {
//                     var geom = evt.target;
//                     var output;
//                     if (geom instanceof ol.geom.Polygon) {
//                         output = formatArea(geom);
//                         tooltipCoord = geom.getInteriorPoint().getCoordinates();
//                     } else if (geom instanceof ol.geom.LineString) {
//                         output = formatLength(geom);
//                         tooltipCoord = geom.getLastCoordinate();
//                     }
//                     measureTooltipElement.innerHTML = output;
//                     measureTooltip.setPosition(tooltipCoord);
//                 });
//             },
//             this
//         );
//         draw.on(
//             "drawend",
//             function () {
//                 measureTooltipElement.className = "tooltip tooltip-static";
//                 measureTooltip.setOffset([0, -7]);
//                 // unset sketch
//                 sketch = null;
//                 // unset tooltip so that a new one can be created
//                 measureTooltipElement = null;
//                 createMeasureTooltip();
//                 ol.Observable.unByKey(listener);
//             },
//             this
//         );
//     }
// }
// /**
//  * Creates a new help tooltip
//  */
// function createHelpTooltip() {
//     if (helpTooltipElement) {
//         helpTooltipElement.parentNode.removeChild(helpTooltipElement);
//     }
//     helpTooltipElement = document.createElement("div");
//     helpTooltipElement.className = "tooltip hidden";
//     helpTooltip = new ol.Overlay({
//         element: helpTooltipElement,
//         offset: [15, 0],
//         positioning: "center-left",
//     });
//     map.addOverlay(helpTooltip);
// }
// /**
//  * Creates a new measure tooltip
//  */
// function createMeasureTooltip() {
//     if (measureTooltipElement) {
//         measureTooltipElement.parentNode.removeChild(measureTooltipElement);
//     }
//     measureTooltipElement = document.createElement("div");
//     measureTooltipElement.className = "tooltip tooltip-measure";
//     measureTooltip = new ol.Overlay({
//         element: measureTooltipElement,
//         offset: [0, -15],
//         positioning: "bottom-center",
//     });
//     map.addOverlay(measureTooltip);
// }

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
    // } else if (tabName === 'Amenities') {
    //     showAllZonesForAmenities();  // Display all zones when the "Amenities" tab is clicked
    // }
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
                //--------------------------------------- Road Length ------------------------------------------------             
                totalRoadLengthWard3 = data.total_length_km_ward3;

                //----------------------------------------- Road total Count ---------------------------------------------
                totalRoadCountWard3 = data.total_length_count_ward3;
                //------------------------------------- Road condition --------------------------------------------------
                totalCountRedWard3 = data.count_poor_ward3;
                totalCountGreenWard3 = data.count_good_ward3;
                totalCountYellowWard3 = data.count_moderate_ward3;
                //------------------------------------- Road Type ----------------------------------------------------
                totalCountMajorWard3 = data.ward3_major;
                totalCountMinorWard3 = data.ward3_minor;
                //-------------------------------------- MAterial -----------------------------------------------------
                totalCountBOEWard3 = data.ward3_BOE;
                totalCountCCWard3 = data.ward3_CC;
                totalCountInterlockingWard3 = data.ward3_Interlocking;
                totalCountKachhaWard3 = data.ward3_Kachcha;
                totalCountBitumenWard3 = data.ward3_Bitumen;
                //-----------------------ownership --------------------------------------------------------------------
                totalCountNNAWard3 = data.count_ward3_NNA;
                totalCountPWDWard3 = data.count_ward3_PWD;
                totalCountRailwayWard3 = data.count_Railway;
                totalCountPVTWard3 = data.count_ward3_PVT;
                totalCountNHAIWard3 = data.count_ward3_NHAI;
                totalCountUPSBCWard3 = data.count_ward3_UPSBC;

                //---------------------------- Row -----------------------------------------------------------------------
                totalCountbelow6_ward3 = data.below6_ward3;
                totalCountsix_to_9_ward3 = data.six_to_9_ward3;
                totalCountnine_to_12_ward3 = data.nine_to_12_ward3;
                totalCountabove12_ward3 = data.above12_ward3;



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
                console.log("totalCountNNAWard3", totalCountNNAWard3);
                console.log("totalCountPWDWard3", totalCountPWDWard3);
                console.log("totalCountRailwayWard3", totalCountRailwayWard3);
                console.log("totalCountPVTWard3", totalCountPVTWard3);
                console.log("totalCountNHAIWard3", totalCountNHAIWard3);
                console.log("totalCountUPSBCWard3", totalCountUPSBCWard3);
                console.log("totalCountbelow6_ward3", totalCountbelow6_ward3);
                console.log("totalCountsix_to_9_ward3", totalCountsix_to_9_ward3);
                console.log("totalCountnine_to_12_ward3", totalCountnine_to_12_ward3);
                console.log("totalCountabove12_ward3", totalCountabove12_ward3);





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
                    totalCountCCWard3,
                    totalCountNNAWard3,
                    totalCountPWDWard3,
                    totalCountPVTWard3,
                    totalCountNHAIWard3,
                    totalCountUPSBCWard3,
                    totalCountbelow6_ward3,
                    totalCountsix_to_9_ward3,
                    totalCountnine_to_12_ward3,
                    totalCountabove12_ward3

                );



            } else {
                console.error('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}

//------------------------------- load zone 2 ward 5----------------------------------------------------

let numberOfZonesWard5; // Declare this in the global scope or at least outside the functions
let totalRoadLengthWard5, totalRoadCountWard5, totalWardCountWard5;
let totalCountRedWard5, totalCountGreenWard5, totalCountYellowWard5;
let totalCountMajorWard5, totalCountMinorWard5;
let totalCountBOEWard5, totalCountInterlockingWard5, totalCountCCWard5, totalCountKachhaWard5, totalCountBitumenWard5;
let totalCountNNAWard5, totalCountPWDWard5, totalCountRailwayWard5, totalCountPVTWard5, totalCountNHAIWard5, totalCountUPSBCWard5;

function loadWard5() {
    fetch(`${BASE_URL}/getZone2Ward5`)
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                //--------------------------------------- Road Length ------------------------------------------------             
                totalRoadLengthWard5 = data.total_length_km_ward5;

                //----------------------------------------- Road total Count ---------------------------------------------
                totalRoadCountWard5 = data.total_length_count_ward5;
                //------------------------------------- Road condition --------------------------------------------------
                totalCountRedWard5 = data.count_poor_ward5;
                totalCountGreenWard5 = data.count_good_ward5;
                totalCountYellowWard5 = data.count_moderate_ward5;
                //------------------------------------- Road Type ----------------------------------------------------
                totalCountMajorWard5 = data.ward5_major;
                totalCountMinorWard5 = data.ward5_minor;
                //-------------------------------------- MAterial -----------------------------------------------------
                totalCountBOEWard5 = data.ward5_BOE;
                totalCountCCWard5 = data.ward5_CC;
                totalCountInterlockingWard5 = data.ward5_Interlocking;
                totalCountKachhaWard5 = data.ward5_Kachcha;
                totalCountBitumenWard5 = data.ward5_Bitumen;
                //-----------------------ownership --------------------------------------------------------------------
                totalCountNNAWard5 = data.count_ward5_NNA;
                totalCountPWDWard5 = data.count_ward5_PWD;
                totalCountRailwayWard5 = data.count_Railway;
                totalCountPVTWard5 = data.count_ward5_PVT;
                totalCountNHAIWard5 = data.count_ward5_NHAI;
                totalCountUPSBCWard5 = data.count_ward5_UPSBC;

                //---------------------------- Row -----------------------------------------------------------------------
                totalCountbelow6_ward5 = data.below6_ward5;
                totalCountsix_to_9_ward5 = data.six_to_9_ward5;
                totalCountnine_to_12_ward5 = data.nine_to_12_ward5;
                totalCountabove12_ward5 = data.above12_ward5;



                let zoneName = "zone 2 ";
                let wardName = "Ward 5 ";

                console.log("numberOfZones5:", numberOfZonesWard5);
                console.log("totalRoadLength15:", totalRoadLengthWard5);
                console.log("total_length_count5", totalRoadCountWard5);
                console.log("total_ward_count5", totalWardCountWard5);
                console.log("totalCountRed5", totalCountRedWard5);
                console.log("totalCountGreen5", totalCountGreenWard5);
                console.log("totalCountYellow5", totalCountYellowWard5);
                console.log("totalCountMajor5", totalCountMajorWard5);
                console.log("totalCountMinor5", totalCountMinorWard5);
                console.log("totalCountBOE5", totalCountBOEWard5);
                console.log("totalCountBitumen5", totalCountBitumenWard5);
                console.log("totalCountKachha5", totalCountKachhaWard5);
                console.log("totalCountInterlocking5", totalCountInterlockingWard5);
                console.log("totalCountCC5", totalCountCCWard5);
                console.log("totalCountNNAWard5", totalCountNNAWard5);
                console.log("totalCountPWDWard5", totalCountPWDWard5);
                console.log("totalCountRailwayWard5", totalCountRailwayWard5);
                console.log("totalCountPVTWard5", totalCountPVTWard5);
                console.log("totalCountNHAIWard5", totalCountNHAIWard5);
                console.log("totalCountUPSBCWard5", totalCountUPSBCWard5);
                console.log("totalCountbelow6_ward5", totalCountbelow6_ward5);
                console.log("totalCountsix_to_9_ward5", totalCountsix_to_9_ward5);
                console.log("totalCountnine_to_12_ward5", totalCountnine_to_12_ward5);
                console.log("totalCountabove12_ward5", totalCountabove12_ward5);

                updateWardDetails5(
                    zoneName,
                    wardName,
                    totalRoadLengthWard5,
                    totalRoadCountWard5,
                    totalCountRedWard5,
                    totalCountGreenWard5,
                    totalCountYellowWard5,
                    totalCountMajorWard5,
                    totalCountMinorWard5,
                    totalCountBOEWard5,
                    totalCountBitumenWard5,
                    totalCountKachhaWard5,
                    totalCountInterlockingWard5,
                    totalCountCCWard5,
                    totalCountNNAWard5,
                    totalCountPWDWard5,
                    totalCountPVTWard5,
                    totalCountNHAIWard5,
                    totalCountUPSBCWard5,
                    totalCountbelow6_ward5,
                    totalCountsix_to_9_ward5,
                    totalCountnine_to_12_ward5,
                    totalCountabove12_ward5

                );



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
    fetch(`${BASE_URL}/getTotalZone`)
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

                totalCountNNA = data.count_NNA;
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


let totalRoadLengthzone2; // Declare this in the global scope or at least outside the functions
let totalRoadMinorzone2, totalRoadMajorzone2;
let totalRoadCountzone2;
let totalCountNNAZone2, totalCountPWDZone2, totalCountNHAIZone2, totalCountPVTZone2, totalCountUPSBCZone2;
let totalCountGreenZone2, totalCountRedZone2, totalCountYellowZone2;
let totalBelowzone2, totalsix_to_nine_zone2, totalnine_to_tweleve_zone2, totalabove12zone2;
let totalCountBitumenZone2, totalCountCCZone2, totalCountInterlockingZone2, totalCountBOEZone2, totalCountKachhaZone2;

function loadZones2() {
    fetch(`${BASE_URL}/getZone2`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                // Assuming `data` is global or defined elsewhere
                totalRoadLengthzone2 = responseData.length_km;
                totalRoadMinorzone2 = responseData.total_minor_sum;
                totalRoadMajorzone2 = responseData.total_major_sum;
                totalRoadCountzone2 = responseData.total_no_of_roads;
                totalCountNNAZone2 = responseData.ANN;
                totalCountPWDZone2 = responseData.PWD;
                totalCountNHAIZone2 = responseData.NHAI;
                totalCountPVTZone2 = responseData.PVT;
                totalCountUPSBCZone2 = responseData.UPSBC;
                totalCountGreenZone2 = responseData.count_green;
                totalCountRedZone2 = responseData.count_red;
                totalCountYellowZone2 = responseData.count_yellow;


                totalBelowzone2 = responseData.below_6;
                totalsix_to_nine_zone2 = responseData.six_to_nine;
                totalnine_to_tweleve_zone2 = responseData.nine_to_six;
                totalabove12zone2 = responseData.above_12;

                totalCountBitumenZone2 = responseData.Bitumen;
                totalCountCCZone2 = responseData.CC;
                totalCountInterlockingZone2 = responseData.Interlocking;
                totalCountBOEZone2 = responseData.BOE;
                totalCountKachhaZone2 = responseData.Kachcha;


                // Make sure the `data` object is correctly structured with zoneName keys
                data["Avadhpuri"] = responseData; // Example of assigning data for the zone

                console.log("totalRoadLengthzone2:", totalRoadLengthzone2);

                // Call updateZones with the correct zone name and total road length
                updateZones("Avadhpuri", totalRoadLengthzone2, totalRoadMinorzone2, totalRoadMajorzone2, totalRoadCountzone2, totalCountNNAZone2
                    , totalCountPWDZone2, totalCountNHAIZone2, totalCountPVTZone2, totalCountUPSBCZone2, totalCountGreenZone2,
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
}
//-----------------------------------load zone 1 --------------------------------------------------------------------------------
let totalRoadLengthzone1; // Declare this in the global scope or at least outside the functions
let totalRoadMinorzone1, totalRoadMajorzone1;
let totalRoadCountzone1;
let totalCountNNAZone1, totalCountPWDZone1, totalCountNHAIZone1, totalCountPVTZone1, totalCountUPSBCZone1;
let totalCountGreenZone1, totalCountRedZone1, totalCountYellowZone1;
// let totalP1zone1, totalP2zone1, totalNotEligiblezone1;
let totalBelowzone1, totalsix_to_nine_zone1, totalnine_to_tweleve_zone1, totalabove12zone1;
let totalCountBitumenZone1, totalCountCCZone1, totalCountInterlockingZone1, totalCountBOEZone1, totalCountKachhaZone1;

function loadZones1() {
    fetch(`${BASE_URL}/getZone1`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                // Assuming `data` is global or defined elsewhere
                totalRoadLengthzone1 = responseData.length_km1;
                totalRoadMinorzone1 = responseData.total_minor_sum1;
                totalRoadMajorzone1 = responseData.total_major_sum1;
                totalRoadCountzone1 = responseData.total_no_of_roads1;
                totalCountNNAZone1 = responseData.ANN1;
                totalCountPWDZone1 = responseData.PWD1;
                totalCountNHAIZone1 = responseData.NHAI1;
                totalCountPVTZone1 = responseData.PVT1;
                totalCountUPSBCZone1 = responseData.UPSBC1;
                totalCountGreenZone1 = responseData.count_green1;
                totalCountRedZone1 = responseData.count_red1;
                totalCountYellowZone1 = responseData.count_yellow1;


                totalBelowzone1 = responseData.below_61;
                totalsix_to_nine_zone1 = responseData.six_to_nine1;
                totalnine_to_tweleve_zone1 = responseData.nine_to_six1;
                totalabove12zone1 = responseData.above_121;

                totalCountBitumenZone1 = responseData.Bitumen1;
                totalCountCCZone1 = responseData.CC1;
                totalCountInterlockingZone1 = responseData.Interlocking1;
                totalCountBOEZone1 = responseData.BOE1;
                totalCountKachhaZone1 = responseData.Kachcha1;


                // Make sure the `data` object is correctly structured with zoneName keys
                data["Ayodhya Dham"] = responseData; // Example of assigning data for the zone

                console.log("totalRoadLengthzone2:", totalRoadLengthzone2);

                // Call updateZones with the correct zone name and total road length
                updateZones1("Ayodhya Dham", totalRoadLengthzone1, totalRoadMinorzone1, totalRoadMajorzone1, totalRoadCountzone1, totalCountNNAZone1
                    , totalCountPWDZone1, totalCountNHAIZone1, totalCountPVTZone1, totalCountUPSBCZone1, totalCountGreenZone1,
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

//--------------------------------upload zone 3 ---------------------------------------------------------------------------------
let totalRoadLengthzone3; // Declare this in the global scope or at least outside the functions
let totalRoadMinorzone3, totalRoadMajorzone3;
let totalRoadCountzone3;
let totalCountNNAZone3, totalCountPWDZone3, totalCountNHAIZone3, totalCountPVTZone3, totalCountUPSBCZone3;
let totalCountGreenZone3, totalCountRedZone3, totalCountYellowZone3;
let totalBelowzone3, totalsix_to_nine_zone3, totalnine_to_tweleve_zone3, totalabove12zone3;
let totalCountBitumenZone3, totalCountCCZone3, totalCountInterlockingZone3, totalCountBOEZone3, totalCountKachhaZone3;

function loadZones3() {
    fetch(`${BASE_URL}/getZone3`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                // Assuming `data` is global or defined elsewhere
                totalRoadLengthzone3 = responseData.length_km3;
                totalRoadMinorzone3 = responseData.total_minor_sum3;
                totalRoadMajorzone3 = responseData.total_major_sum3;
                totalRoadCountzone3 = responseData.total_no_of_roads3;
                totalCountNNAZone3 = responseData.ANN3;
                totalCountPWDZone3 = responseData.PWD3;
                totalCountNHAIZone3 = responseData.NHAI3;
                totalCountPVTZone3 = responseData.PVT3;
                totalCountUPSBCZone3 = responseData.UPSBC3;
                totalCountGreenZone3 = responseData.count_green3;
                totalCountRedZone3 = responseData.count_red3;
                totalCountYellowZone2 = responseData.count_yellow3;
                // totalP1zone3 = responseData.p1;
                // totalP2zone3 = responseData.p2;
                // totalNotEligiblezone3 = responseData.Not_eligible3;

                totalBelowzone3 = responseData.below_63;
                totalsix_to_nine_zone3 = responseData.six_to_nine3;
                totalnine_to_tweleve_zone3 = responseData.nine_to_six3;
                totalabove12zone3 = responseData.above_123;

                totalCountBitumenZone3 = responseData.Bitumen3;
                totalCountCCZone3 = responseData.CC3;
                totalCountInterlockingZone3 = responseData.Interlocking3;
                totalCountBOEZone3 = responseData.BOE3;
                totalCountKachhaZone3 = responseData.Kachcha3;


                // Make sure the `data` object is correctly structured with zoneName keys
                data["KaushalPuri"] = responseData; // Example of assigning data for the zone

                console.log("totalRoadLengthzone2:", totalRoadLengthzone2);

                // Call updateZones with the correct zone name and total road length
                updateZones3("KaushalPuri", totalRoadLengthzone3, totalRoadMinorzone3, totalRoadMajorzone3, totalRoadCountzone3, totalCountNNAZone3
                    , totalCountPWDZone3, totalCountNHAIZone3, totalCountPVTZone3, totalCountUPSBCZone3, totalCountGreenZone3,
                    totalCountRedZone3, totalCountYellowZone3, totalCountBitumenZone3, totalCountCCZone3, totalCountInterlockingZone3,
                    totalCountBOEZone3, totalCountKachhaZone3,
                    totalBelowzone3, totalsix_to_nine_zone3, totalnine_to_tweleve_zone3, totalabove12zone3
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

//  document.getElementById('summary_id').addEventListener('click', loadWard3);




function updateSummary(numberOfZones, totalRoadLength1, totalRoadCount, totalWardCount,
    totalCountRed, totalCountGreen, totalCountYellow, totalCountMinor, totalCountMajor,
    totalCountBitumen, totalCountCC, totalCountInterlocking, totalCountBOE, totalCountKachha,
    totalCountNNA, totalCountPWD, totalCountRailway, totalCountPVT, totalCountNHAI, totalCountUPSBC) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const zoneKeys = Object.keys(data).filter(key => key !== 'Summary' && key !== 'View');


    // Create summary cards with the number of zones and other data
    const summaryCards = [
        {
            title: 'No. of Zones',
            value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_NO()" > ${numberOfZones - 1} </a>` // Use numberOfZones or show 'Loading...' if it's undefined
        },
        { title: 'Total Road Length', value: `<a href="javascript:void(0)" onclick="Ayodhya_Road_Length()" > ${totalRoadLength1 + ' km'}</a>` },
        { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Ayodhya_Road_Count()" > ${totalRoadCount}</a>` },
        { title: 'Total Ward No.', value: `<a href="javascript:void(0)" onclick="Ayodhya_Ward_NO()" >${totalWardCount - 1}</a>` },
        { title: 'Road Count by Condition', value: `Good -<a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Green'); updateNavBarWithFunctionName('Ayodhya Road Condition Good');" style="color:green;"> ${totalCountGreen}</a><br>Poor -<a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Red'); updateNavBarWithFunctionName('Ayodhya Road Condition Poor');" style="color:red;">${totalCountRed}</a><br>Moderate -<a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Yellow'); updateNavBarWithFunctionName('Ayodhya Road Condition Moderate');"style="color:yellow;"> ${totalCountYellow}</a>` },
        { title: '<a  href="javascript:void(0)" onclick="Ayodhya_Types()">Road Count by Type</a>', value: `Major -<a href="javascript:void(0)" onclick="Ayodhya_Type_cat('type','Major'); updateNavBarWithFunctionName('Ayodhya Road Type Major');" style="color:blue;">${totalCountMajor}</a><br>Minor -<a href="javascript:void(0)" onclick="Ayodhya_Type_cat('type','Minor'); updateNavBarWithFunctionName('Ayodhya Road Type Minor');" style="color:yellow;"> ${totalCountMinor}</a>` },
        { title: '<a  href="javascript:void(0)" onclick="Ayodhya_Material()">Road Count by Material</a>', value: `Bitumen -<a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Bitumen'); updateNavBarWithFunctionName('Ayodhya Road Material Bitumen');" style="color:darkred;"> ${totalCountBitumen}</a><br>CC -<a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','CC'); updateNavBarWithFunctionName('Ayodhya Road Material CC');" style="color:#1ad7b0;">${totalCountCC}</a><br>Interlocking -<a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Interlocking'); updateNavBarWithFunctionName('Ayodhya Road Material Interlocking');" style="color:#2392ed;">${totalCountInterlocking}</a><br>BOE -<a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','BOE'); updateNavBarWithFunctionName('Ayodhya Road Material BOE');" style="color:#da6076;">${totalCountBOE}</a><br>Kachcha -<a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Kachcha'); updateNavBarWithFunctionName('Ayodhya Road MaterialKachcha');" style="color:#6036d0;">${totalCountKachha}</a>` },
        { title: '<a  href="javascript:void(0)" onclick="Ayodhya_Ownership()">Road Count by Ownership</a>', value: `ANN  -<a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','ANN'); updateNavBarWithFunctionName('Ayodhya Road Ownership ANN');" style="color:#1dd2e2;">${totalCountNNA}</a><br>PWD -<a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','PWD'); updateNavBarWithFunctionName('Ayodhya Road Ownership PWD');" style="color:#0f6050;">${totalCountPWD}</a><br>PVT -<a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','PVT'); updateNavBarWithFunctionName('Ayodhya Road Ownership PVT')" style="color:#ed2323;"> ${totalCountPVT}</a><br>NHAI -<a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','NHAI'); updateNavBarWithFunctionName('Ayodhya Road Ownership NHAI')" style="color:rgb(33,14,139);"> ${totalCountNHAI}</a><br>Railway -<a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','Railway'); updateNavBarWithFunctionName('Ayodhya Road Ownership Railway');" style="color:#c3c922;"> ${totalCountRailway}</a><br>UPSBC Ltd -<a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Ayodhya Road Ownership UPSBC Ltd.')" style="color:#821880;">${totalCountUPSBC}</a>` }
    ];

    // Create and append each card to the content div
    summaryCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        // cardElement.style.backgroundColor = getUniqueColor();
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.value}</p>
        `;
        content.appendChild(cardElement);
    });
}

function populateZonesDropdown() {
    const zonesDropdown = document.getElementById('zonesDropdown');
    zonesDropdown.innerHTML = ''; // Clear any existing content

    const zoneKeys = Object.keys(data).filter(key => key !== 'Summary' && key !== 'View');

    zoneKeys.forEach(zoneName => {
        const zoneElement = document.createElement('a');
        zoneElement.href = "#";
        zoneElement.innerHTML = zoneName;

        // Attach different functions based on the zone name
        if (zoneName === 'Zone 2') {
            zoneElement.onclick = function () {
                loadZones2(); // Call the loadZones2 function when "Zone 2" is clicked
                return false;
            };
        } else if (zoneName === 'Zone 1') {
            zoneElement.onclick = function () {
                loadZones1(); // Call the loadZones2 function when "Zone 2" is clicked
                return false;
            };
        }
        else if (zoneName === 'Zone 3') {
            zoneElement.onclick = function () {
                loadZones3(); // Call the loadZones2 function when "Zone 2" is clicked
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


// Function to populate Zones Dropdown
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
                populateWardsDropdown('Zone 2'); // Populate wards dropdown for Zone 2
                return false;
            };
        } else if (zoneName === 'Zone 1') {
            zoneElement.onclick = function () {
                loadZones1();
                populateWardsDropdown('Zone 1'); // Populate wards dropdown for Zone 2
                return false;
            };
        }
        else if (zoneName === 'Zone 3') {
            zoneElement.onclick = function () {
                loadZones3();
                populateWardsDropdown('Zone 3'); // Populate wards dropdown for Zone 2
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

        wardElement.onclick = function () {
            // Check the ward name and call the appropriate function
            if (wardName === 'Ward 3') {
                loadWard3();  // Call the loadWard3 function to fetch and display data for Ward 3
                console.log("calling the load3");
                updateWardDetails(zoneName, wardName);  // This function call may need correct parameters
            }
            else if (wardName === 'Ward 5') {
                loadWard5();  // Call the loadWard3 function to fetch and display data for Ward 3
                updateWardDetails5(zoneName, wardName);  // Update for Ward 5
            } else {
                // Default action or other wards handling
                updateWardDetails(zoneName, wardName);  // This function call may need correct parameters
            }
            return false;  // Prevent default action
        };

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

        if (!data[zoneName]) {
            content.innerHTML = '<p>No data available for this zone.</p>';
            return;
        }

        // Display zone details
        const zoneCards = [
            { title: 'Road Type', value: `Major -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('2','type','Major'); updateNavBarWithFunctionName('Zone-2 Road Type Major');"style="color:blue">${totalRoadMajorzone2}</a><br>Minor -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('2','type','Minor'); updateNavBarWithFunctionName('Zone-2 Road Type Minor');" style="color:yellow"> ${totalRoadMinorzone2}</a>` },
            { title: 'Total Road Length', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','2'); updateNavBarWithFunctionName('Zone-2 Total Road Length');" >${totalRoadLengthzone2} km</a>` },  // Displaying total road length
            { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','2'); updateNavBarWithFunctionName('Zone-2 Total Road Count');" >${totalRoadCountzone2}</a>` },
            //{ title: 'ROW', value: ` Below 6 -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_ROW_Below6()">${totalBelowzone2}</a><br>6 to 9 -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_ROW_6to9()"> ${totalsix_to_nine_zone2}</a><br>9 to 12 -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_ROW_9to12()"> ${totalnine_to_tweleve_zone2}</a><br>Above 12 -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_ROW_Above12()"> ${totalabove12zone2}</a>` },
            { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('2',condition','Green'); updateNavBarWithFunctionName('Zone-2 Road Condition Good');" style="color:green"> ${totalCountGreenZone2}</a><br>Poor -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('2','condition','Red'); updateNavBarWithFunctionName('Zone-2 Road Condition Poor');"style="color:red"> ${totalCountRedZone2}</a><br>Moderate -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('2','condition','Yellow'); updateNavBarWithFunctionName('Zone-2 Road Condition Moderate');" style="color:yellow">${totalCountYellowZone2}</a>` },
            { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('2','carriage_m','Bitumen'); updateNavBarWithFunctionName('Zone-2 Road Material Bitumen');" style="color:darkred"> ${totalCountBitumenZone2}</a><br>CC -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('2','carriage_m','CC'); updateNavBarWithFunctionName('Zone-2 Road Material CC');" style="color:#1ad7b0">${totalCountCCZone2}</a><br>Interlocking -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('2','carriage_m','Interlocking'); updateNavBarWithFunctionName('Zone-2 Road Material Interlocking');" style="color:#2392ed">${totalCountInterlockingZone2}</a><br>BOE -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('2','carriage_m','BOE'); updateNavBarWithFunctionName('Zone-2 Road Material BOE');" style="color:#da6076;font-weight: bold;">${totalCountBOEZone2}</a><br>Kachcha -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('2','carriage_m','Kachcha'); updateNavBarWithFunctionName('Zone-2 Road Material Kachcha');" style="color:#6036d0">${totalCountKachhaZone2}</a>` },
            { title: 'Ownership', value: `ANN  -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('2','ownership','ANN'); updateNavBarWithFunctionName('Zone-2 Road Ownership ANN');" style="color:#1dd2e2">${totalCountNNAZone2}</a><br>PWD -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('2','ownership','PWD'); updateNavBarWithFunctionName('Zone-2 Road Ownership PWD');" style="color:#0f6050">${totalCountPWDZone2}</a><br>NHAI - <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('2','ownership','NHAI'); updateNavBarWithFunctionName('Zone-2 Road Ownership NHAI');" style="color:blue">${totalCountNHAIZone2}</a><br>UPSBC Ltd -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('2','ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Zone-2 Road Ownership UPSBC Ltd.');" style="color:darkred">${totalCountUPSBCZone2}</a>` },     //<br>PVT -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_Ownership_PVT()"> ${totalCountPVTZone2}</a>,
            { title: 'Slum Data', value: `Total No. Of Slum  -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_Slum_Count()"> 12</a> <br>Total No. Of Road -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_SlumRoad_Count()"> 148 ,<br> Length- -11.22 Km </a> ` },

        ];

        zoneCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            // cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });

        // Check if the zone has wards and display their count
        if (data[zoneName].wards) {
            const wardsCount = Object.keys(data[zoneName].wards).length;

            const viewWardsCard = document.createElement('div');
            viewWardsCard.className = 'card';
            // viewWardsCard.style.backgroundColor = getUniqueColor();
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
function updateZones1(zoneName, totalRoadLengthzone1, totalRoadMinorzone1, totalRoadMajorzone1, totalRoadCountzone1, totalCountNNAZone1
    , totalCountPWDZone1, totalCountNHAIZone1, totalCountPVTZone1, totalCountUPSBCZone1, totalCountGreenZone1,
    totalCountRedZone1, totalCountYellowZone1, totalCountBitumenZone1, totalCountCCZone1, totalCountInterlockingZone1,
    totalCountBOEZone1, totalCountKachhaZone1,
    totalBelowzone1, totalsix_to_nine_zone1, totalnine_to_tweleve_zone1, totalabove12zone1


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

        if (!data[zoneName]) {
            content.innerHTML = '<p>No data available for this zone.</p>';
            return;
        }

        // Display zone details
        const zoneCards = [
            { title: 'Road Type', value: `Major -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('1','type','Major'); updateNavBarWithFunctionName('Zone-1 Road Type Major');" style="color:blue">${totalRoadMajorzone1}</a><br>Minor - <a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('1','type','Minor'); updateNavBarWithFunctionName('Zone-1 Road Type Minor');" style="color:yellow">${totalRoadMinorzone1}</a>` },
            { title: 'Total Road Length', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','1');  updateNavBarWithFunctionName('Zone-1 Total Road Length');" >${totalRoadLengthzone1} km</a>` },  // Displaying total road length
            { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','1');  updateNavBarWithFunctionName('Zone-1 Total Road Count');" >${totalRoadCountzone1}` },
            //  { title: 'ROW', value: ` Below 6 -${totalBelowzone1}<br>6 to 9 - ${totalsix_to_nine_zone1}<br>9 to 12 - ${totalnine_to_tweleve_zone1}<br>Above 12 - ${totalabove12zone1}` },
            { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('1',condition','Green'); updateNavBarWithFunctionName('Zone-1 Road Condition Good');" style="color:green"> ${totalCountGreenZone1}</a><br>Poor -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('1',condition','Red'); updateNavBarWithFunctionName('Zone-1 Road Condition Poor');" style="color:red"> ${totalCountRedZone1}</a><br>Moderate - <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('1',condition','Yellow'); updateNavBarWithFunctionName('Zone-1 Road Condition Moderate');" style="color:yellow">${totalCountYellowZone1}</a>` },
            { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('1','carriage_m','Bitumen'); updateNavBarWithFunctionName('Zone-1 Road Material Bitumen');" style="color:darkred"> ${totalCountBitumenZone1}</a><br>CC -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('1','carriage_m','CC'); updateNavBarWithFunctionName('Zone-1 Road Material CC');" style="color:#1ad7b0">${totalCountCCZone1}</a><br>Interlocking -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('1','carriage_m','Interlocking'); updateNavBarWithFunctionName('Zone-1 Road Material Interlocking');" style="color:#2392ed">${totalCountInterlockingZone1}</a><br>BOE -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('1','carriage_m','BOE'); updateNavBarWithFunctionName('Zone-1 Road Material BOE');" style="color:#da6076">${totalCountBOEZone1}</a><br>Kachcha -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('1','carriage_m','Kachcha'); updateNavBarWithFunctionName('Zone-1 Road Material Kachcha');" style="color:#6036d0">${totalCountKachhaZone1}</a>` },
            { title: 'Ownership', value: `ANN  -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('1','ownership','ANN'); updateNavBarWithFunctionName('Zone-1 Road Ownership ANN');" style="color:cyan;">${totalCountNNAZone1}</a><br>PWD -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('1','ownership','PWD'); updateNavBarWithFunctionName('Zone-1 Road Ownership PWD');" style="color:#0f6050">${totalCountPWDZone1}</a><br>NHAI - <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('1','ownership','NHAI'); updateNavBarWithFunctionName('Zone-1 Road Ownership NHAI');" style="color:blue">${totalCountNHAIZone1}</a><br>UPSBC Ltd -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('1','ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Zone-1 Road Ownership UPSBC Ltd.');" style="color:#d37b37;">${totalCountUPSBCZone1}</a><br>PVT -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('1','ownership','PVT'); updateNavBarWithFunctionName('Zone-1 Road Ownership PVT');" style="color:#ed2323"> ${totalCountPVTZone1}</a>,` },    // <br>PVT -<a href="javascript:void(0)" onclick="Ayodhya_Zone2_Ownership_PVT()"> ${totalCountPVTZone2}</a>,
        ];


        zoneCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            // cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });

        // Check if the zone has wards and display their count
        if (data[zoneName].wards) {
            const wardsCount = Object.keys(data[zoneName].wards).length;

            const viewWardsCard = document.createElement('div');
            viewWardsCard.className = 'card';
            // viewWardsCard.style.backgroundColor = getUniqueColor();
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
//---------------------------------- update zone 3 ----------------------------------------------------------------------------
function updateZones3(zoneName, totalRoadLengthzone3, totalRoadMinorzone3, totalRoadMajorzone3, totalRoadCountzone3,
    totalCountNNAZone3, totalCountPWDZone3, totalCountNHAIZone3, totalCountPVTZone3, totalCountUPSBCZone3,
    totalCountGreenZone3, totalCountRedZone3, totalCountYellowZone3, totalCountBitumenZone3, totalCountCCZone3,
    totalCountInterlockingZone3, totalCountBOEZone3, totalCountKachhaZone3,
    totalBelowzone3,
    totalsix_to_nine_zone3, totalnine_to_tweleve_zone3, totalabove12zone3


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

        if (!data[zoneName]) {
            content.innerHTML = '<p>No data available for this zone.</p>';
            return;
        }

        // Display zone details
        const zoneCards = [
            { title: 'Road Type', value: `Major<a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('3','type','Major'); updateNavBarWithFunctionName('Zone-3 Road Type Major');" style="color:blue"> -${totalRoadMajorzone3}</a><br>Minor -<a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('3','type','Minor'); updateNavBarWithFunctionName('Zone-3 Road Type Minor');" style="color:yellow"> ${totalRoadMinorzone3}</a>` },
            { title: 'Total Road Length', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','3'); updateNavBarWithFunctionName('Zone-3 Total Road Length');">${totalRoadLengthzone3} km</a>` },  // Displaying total road length
            { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','3'); updateNavBarWithFunctionName('Zone-3 Total Road Count');>"${totalRoadCountzone3}</a>` },
         //   { title: 'ROW', value: ` Below 6 -${totalBelowzone3}<br>6 to 9 - ${totalsix_to_nine_zone3}<br>9 to 12 - ${totalnine_to_tweleve_zone3}<br>Above 12 - ${totalabove12zone3}` },
            { title: 'Road Condition', value: `Good<a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('3',condition','Green'); updateNavBarWithFunctionName('Zone-3 Road Condition Good');" style="color:green"> - ${totalCountGreenZone3}</a><br>Poor <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('3',condition','Red'); updateNavBarWithFunctionName('Zone-3 Road Condition Poor');" style="color:red">- ${totalCountRedZone3}</a><br>Moderate <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('3',condition','Yellow'); updateNavBarWithFunctionName('Zone-3 Road Condition Moderate');" style="color:yellow">- ${totalCountYellowZone3}</a>` },
            { title: 'Materials', value: `Bitumen <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('3','carriage_m','Bitumen'); updateNavBarWithFunctionName('Zone-3 Road Material Bitumen');" style="color:darkred">- ${totalCountBitumenZone3}</a><br>CC <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('3','carriage_m','CC'); updateNavBarWithFunctionName('Zone-3 Road Material CC');" style="color:#1ad7b0">-${totalCountCCZone3}</a><br>Interlocking<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('3','carriage_m','Interlocking'); updateNavBarWithFunctionName('Zone-3 Road Material Interlocking');" style="color:#2392ed"> -${totalCountInterlockingZone3}</a><br>BOE<a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('3','carriage_m','BOE'); updateNavBarWithFunctionName('Zone-3 Road Material BOE');" style="color:#da6076"> -${totalCountBOEZone3}</a><br>Kachcha <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('3','carriage_m','Kachcha'); updateNavBarWithFunctionName('Zone-3 Road Material Kachcha');" style="color:#6036d0">-${totalCountKachhaZone3}</a>` },
            { title: 'Ownership', value: `ANN <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('3','ownership','ANN'); updateNavBarWithFunctionName('Zone-3 Road Ownership ANN');" style="color:cyan;"> -${totalCountNNAZone3}</a><br>PWD<a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('3','ownership','PWD'); updateNavBarWithFunctionName('Zone-3 Road Ownership PWD');" style="color:#0f6050"> -${totalCountPWDZone3}</a><br>NHAI <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('3','ownership','NHAI'); updateNavBarWithFunctionName('Zone-3 Road Ownership NHAI');" style="color:blue">- ${totalCountNHAIZone3}</a><br>PVT <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('1','ownership','PVT'); updateNavBarWithFunctionName('Zone-1 Road Ownership PVT');" style="color:#ed2323">- ${totalCountPVTZone3}</a><br>UPSBC Ltd <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('3','ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Zone-3 Road Ownership UPSBC Ltd.');" style="color:#d37b37;">-${totalCountUPSBCZone3}</a>` }
        ];

        zoneCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            // cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
                <h4>${card.title}</h4>
                <p>${card.value}</p>
            `;
            content.appendChild(cardElement);
        });

        // Check if the zone has wards and display their count
        if (data[zoneName].wards) {
            const wardsCount = Object.keys(data[zoneName].wards).length;

            const viewWardsCard = document.createElement('div');
            viewWardsCard.className = 'card';
            // viewWardsCard.style.backgroundColor = getUniqueColor();
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

function updateWardDetails(
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
    totalCountCCWard3,
    totalCountNNAWard3,
    totalCountPWDWard3,
    totalCountPVTWard3,
    totalCountNHAIWard3,
    totalCountUPSBCWard3,
    totalCountbelow6_ward3,
    totalCountsix_to_9_ward3,
    totalCountnine_to_12_ward3,
    totalCountabove12_ward3
) {
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

    // const wardData = data[zoneName].wards[wardName];
    // console.log("wardData : " + wardData);
    const details = [
        { title: 'Road Type', value: `Major -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('3','type','Major'); updateNavBarWithFunctionName('Ward-3 Road Type Major');" style="color:blue"> ${totalCountMajorWard3}</a><br>Minor -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('3','type','Minor'); updateNavBarWithFunctionName('Ward-3 Road Type Minor');" style="color:yellow"> ${totalCountMinorWard3}</a>` },
        { title: 'Road Length', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no','3');  updateNavBarWithFunctionName('Ward-3 Total Road Length');" >${totalRoadLengthWard3}</a>` },
        { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no','3');  updateNavBarWithFunctionName('Ward-3 Total Road Count');" >${totalRoadCountWard3}</a>` },
        { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('3','condition','Green'); updateNavBarWithFunctionName('Ward-3 Road Condition Good');" style="color:green"> ${totalCountGreenWard3}</a><br>Poor -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('3','condition','Red'); updateNavBarWithFunctionName('Ward-3 Road Condition Poor');" style="color:red"> ${totalCountRedWard3}</a><br>Moderate -<a href="javascript:void(0)" onclick="hya_Ward_Condition('3','condition','Yellow'); updateNavBarWithFunctionName('Ward-3 Road Condition Moderate');" style="color:yellow"> ${totalCountYellowWard3}</a>` },
        { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('3','carriage_m','Bitumen'); updateNavBarWithFunctionName('Ward-3 Road Material Bitumen');" style="color:darkred"> ${totalCountBitumenWard3}</a><br>CC -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('3','carriage_m','CC'); updateNavBarWithFunctionName('Ward-3 Road Material CC');" style="color:#1ad7b0"> ${totalCountCCWard3}</a><br>Interlocking -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('3','carriage_m','Interlocking'); updateNavBarWithFunctionName('Ward-3 Road Material Interlocking');" style="color:#2392ed"> ${totalCountInterlockingWard3}</a><br>BOE - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('3','carriage_m','BOE'); updateNavBarWithFunctionName('Ward-3 Road Material BOE');" style="color:#da6076">${totalCountBOEWard3}</a><br>Kachcha -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('3','carriage_m','Kachcha'); updateNavBarWithFunctionName('Ward-3 Road Material Kachcha');" style="color:#6036d0"> ${totalCountKachhaWard3}</a>` },
        { title: 'Ownership', value: `ANN  -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('3','ownership','ANN'); updateNavBarWithFunctionName('Ward-3 Road Ownership ANN');" style="color:#1dd2e2">${totalCountNNAWard3}</a><br>PWD <a href="javascript:void(0)" onclick="3Ayodhya_Ward_Ownership('3','ownership','PWD'); updateNavBarWithFunctionName('Ward-3 Road Ownership PWD');" style="color:#0f6050">-${totalCountPWDWard3}</a><br>PVT -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('3','ownership','PVT'); updateNavBarWithFunctionName('Ward-3 Road Ownership PVT');" style="color:#ed2323"> 0</a><br>NHAI -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('3','ownership','NHAI'); updateNavBarWithFunctionName('Ward-3 Road Ownership NHAI');" style="color:rgb(33, 14, 139)"> 0</a><br>UPSBC Ltd -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('3','ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Ward-3 Road Ownership UPSBC Ltd.');" style="color:#d37b374"> 0 </a>` },
        //   { title: 'ROW', value: ` Below 6 -${totalCountbelow6_ward3}<br>6 to 9 - ${totalCountsix_to_9_ward3}<br>9 to 12 - ${totalCountnine_to_12_ward3}<br>Above 12 - ${totalCountabove12_ward3}` },


    ];

    details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.className = 'card';
        // detailElement.style.backgroundColor = getUniqueColor();
        detailElement.innerHTML = `<h4>${detail.title}</h4><p>${detail.value}</p>`;
        content.appendChild(detailElement);
    });

}

//---------------------------------------  ward 5 --------------------------------------------------------------------
function updateWardDetails5(
    zoneName,
    wardName,
    totalRoadLengthWard5,
    totalRoadCountWard5,
    totalCountRedWard5,
    totalCountGreenWard5,
    totalCountYellowWard5,
    totalCountMajorWard5,
    totalCountMinorWard5,
    totalCountBOEWard5,
    totalCountBitumenWard5,
    totalCountKachhaWard5,
    totalCountInterlockingWard5,
    totalCountCCWard5,
    totalCountNNAWard5,
    totalCountPWDWard5,
    totalCountPVTWard5,
    totalCountNHAIWard5,
    totalCountUPSBCWard5,
    totalCountbelow6_ward5,
    totalCountsix_to_9_ward5,
    totalCountnine_to_12_ward5,
    totalCountabove12_ward5





) {
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

    // const wardData = data[zoneName].wards[wardName];
    const details = [
        { title: 'Road Type', value: `Major -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('5','type','Major'); updateNavBarWithFunctionName('Ward-5 Road Type Major');" style="color:blue;" > ${totalCountMajorWard5}</a><br>Minor - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('5','type','Minor'); updateNavBarWithFunctionName('Ward-5 Road Type Minor');" style="color:yellow" >${totalCountMinorWard5}</a>` },
        { title: 'Road Length', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no','5');  updateNavBarWithFunctionName('Ward-5 Total Road Length');" >${totalRoadLengthWard5}</a>` },
        { title: 'Total No. of Roads', value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no','5');  updateNavBarWithFunctionName('Ward-5 Total Road Count');" >${totalRoadCountWard5}</a>` },
        { title: 'Road Condition', value: `Good -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('5','condition','Green'); updateNavBarWithFunctionName('Ward-5 Road Condition Good');" style="color:green;" > ${totalCountGreenWard5}</a><br>Poor -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('5','condition','Red'); updateNavBarWithFunctionName('Ward-5 Road Condition Poor');" style="color:red;" > ${totalCountRedWard5}</a><br>Moderate - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('5','condition','Yellow'); updateNavBarWithFunctionName('Ward-5 Road Condition Moderate');" style="color:yellow;" >${totalCountYellowWard5}</a>` },
        { title: 'Materials', value: `Bitumen -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('5','carriage_m','Bitumen'); updateNavBarWithFunctionName('Ward-5 Road Material Bitumen');" style="color:darkred" > ${totalCountBitumenWard5}</a><br>CC - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('5','carriage_m','CC'); updateNavBarWithFunctionName('Ward-5 Road Material CC');" style="color:#1ad7b0" >${totalCountCCWard5}</a><br>Interlocking - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('5','carriage_m','Interlocking'); updateNavBarWithFunctionName('Ward-5 Road Material Interlocking');" style="color:#2392ed" >${totalCountInterlockingWard5}</a><br>BOE - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('5','carriage_m','BOE'); updateNavBarWithFunctionName('Ward-5 Road Material BOE');" style="color:#da6076" > ${totalCountBOEWard5}</a><br>Kachcha -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('5','carriage_m','Kachcha'); updateNavBarWithFunctionName('Ward-5 Road Material Kachcha');" style="color:#6036d0" > ${totalCountKachhaWard5}</a>` },
        { title: 'Ownership', value: `ANN -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('5','ownership','ANN'); updateNavBarWithFunctionName('Ward-5 Road Ownership ANN');" style="color:#1dd2e2" >${totalCountNNAWard5}</a><br>PWD -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('5','ownership','PWD'); updateNavBarWithFunctionName('Ward-5 Road Ownership PWD');" style="color:#0f6050" >${totalCountPWDWard5}</a><br>PVT -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('5','ownership','PVT'); updateNavBarWithFunctionName('Ward-5 Road Ownership PVT');" style="color:#ed2323" > ${totalCountPVTWard5}</a><br>NHAI - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('5','ownership','NHAI'); updateNavBarWithFunctionName('Ward-5 Road Ownership NHAI');" style="color:rgb(33, 14, 139)" >${totalCountNHAIWard5}</a><br>UPSBC Ltd -<a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('5','ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Ward-5 Road Ownership UPSBC Ltd.');" style="color:#d37b374" >${totalCountUPSBCWard5}</a>` },
        //   { title: 'ROW', value: ` Below 6 -${totalCountbelow6_ward5}<br>6 to 9 - ${totalCountsix_to_9_ward5}<br>9 to 12 - ${totalCountnine_to_12_ward5}<br>Above 12 - ${totalCountabove12_ward5}` },
    ];




    details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.className = 'card';
        // detailElement.style.backgroundColor = getUniqueColor();
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


//------------------------------- Amenities zone cards-------------------------------------
/*function showAllZonesForAmenities() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const zoneKeys = Object.keys(data).filter(key => key !== 'Summary' && key !== 'View');

    zoneKeys.forEach(zoneName => {
        const zoneData = data[zoneName];

        const zoneElement = document.createElement('div');
        zoneElement.className = 'card';
        // zoneElement.style.backgroundColor = getUniqueColor();

        // Determine the correct function to call based on the zone name
        let onclickFunction = `showZoneAmenities('${zoneName}')`;
        if (zoneName === 'Zone 1') {
            onclickFunction = `showZone1Amenities('${zoneName}')`;
        } else if (zoneName === 'Zone 2') {
            onclickFunction = `showZone2Amenities('${zoneName}')`;
        } else if (zoneName === 'Zone 3') {
            onclickFunction = `showZone3Amenities('${zoneName}')`;
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
            { title: 'Bank And ATM ', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_bank()">62</a> ` },
            { title: 'Parks', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Parks()">21</a> ` },
            { title: 'Hospital', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Hospital()">11</a> ` },
            { title: 'Bus Stop', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_bus()">3</a> ` },
            // { title: 'State Government Office', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_state()">0</a> ` },
            { title: 'Central Government Office', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_central()">2</a> ` },
            { title: 'Petrol Pumps', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Petrol()">21</a> ` },
            { title: 'Educational Institute', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Education()">26</a> ` },
            { title: 'Graveyard', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Graveyard()">4</a> ` },
            { title: 'Hotels', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Hotels()">97</a> ` },
            { title: 'Religious Places', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Religious()">31</a> ` },
            { title: 'Stadium', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Stadium()">1</a> ` },
            { title: 'Post Office', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_PostOffice()">1</a> ` },
            { title: 'Car Charging', value: `<a href="javascript:void(0)" onclick="Zone1_Amenties_Charging()">1</a> ` },


        ];


        amenityCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            // cardElement.style.backgroundColor = getUniqueColor(); // Ensure getUniqueColor() is returning valid color
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


function Zone1_Amenties_bank() {

    console.log('Function Zone1_Amenties_bank called');

    // Remove any existing layer
    removeCurrentLayer(); clearVectorLayers();
    // Add WMS Layer
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });
    // Add WMS Layer to the map
    map.addLayer(currentLayer);
    // Define icon style
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 1], // Adjust anchor based on icon's desired placement
            src: './logo/bus/bank.png', // Path to your custom icon image
            scale: 0.05 // Adjust the scale as needed
        })
    });
    // Define vector layer to display icons
    var AyovectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Ayodhya_Amenities:z1ann_14082024_banks_and_atm&outputFormat=application/json',
            format: new ol.format.GeoJSON()
        }),
        style: iconStyle
    });
    // Add vector layer with icons to the map
    map.addLayer(AyovectorLayer);
}

function Zone1_Amenties_Parks() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_park',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}

function Zone1_Amenties_Hospital() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}

function Zone1_Amenties_bus() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_bus_stop',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}

function Zone1_Amenties_central() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': '	Ayodhya_Amenities:z1ann_14082024_central_government_office',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_Petrol() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_Education() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_Graveyard() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_Hotels() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_Religious() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_Stadium() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_PostOffice() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone1_Amenties_Charging() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z1ann_14082024_car_charging_station',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}

//------------------------------- zone 2 Amenities wms layer on cards------------------------------------------------------------------
function showZone2Amenities(zoneName) {
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
            { title: 'Bank And ATM', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_bank()">61</a> ` },
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
            { title: 'Stadium', value: `<a href="javascript:void(0)" onclick="Zone2_Amenties_Stadium()">6</a> ` },
        ];

        amenityCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            // cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.value}</p>
        `;
            content.appendChild(cardElement);
        });
    }

}

function Zone2_Amenties_bank() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Parks() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_park',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Hospital() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': '	Ayodhya_Amenities:z2ann_14082024_hospital',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_bus() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_bus_stop',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_state() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_sgovoffice',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_central() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_central_government_office',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Petrol() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_petrolpump',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Education() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_educational',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Graveyard() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_graveyard',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Hotels() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_hotels',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Religious() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_religious',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone2_Amenties_Stadium() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z2ann_14082024_stadium',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}


//------------------------------- zone 3 Amenities wms layer on cards------------------------------------------------------------------

function showZone3Amenities(zoneName) {
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
            { title: 'Bank And ATM ', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_bank()">117</a> ` },
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
            { title: 'Stadium', value: `<a href="javascript:void(0)" onclick="Zone3_Amenties_Stadium()">3</a> ` },
        ];

        amenityCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            // cardElement.style.backgroundColor = getUniqueColor();
            cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.value}</p>
        `;
            content.appendChild(cardElement);
        });
    }

}

function Zone3_Amenties_bank() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_banks_and_atm',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Parks() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_park',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Hospital() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': '	Ayodhya_Amenities:z3ann_14082024_hospital',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_bus() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_bus_stop',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_state() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_sgovoffice',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_central() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_central_government_office',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Petrol() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_petrolpump',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Education() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_educational',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Graveyard() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_graveyard',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Hotels() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_hotels',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Religious() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_religious',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

}
function Zone3_Amenties_Stadium() {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ayodhya_Amenities/wms',
            params: {
                'LAYERS': 'Ayodhya_Amenities:z3ann_14082024_stadium',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);

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
        if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

    // Clear overlays
}


// Function to append data to the table
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

            // if (item.geom_wkt) {
            //     console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
            //     const feature = addMultilinestringFeatureFromWKT_Ward(item.geom_wkt, item.ward_no);
            //     // Check if the feature was successfully created
            //     if (feature) {
            //         const featureId = feature.getId();
            //         if (featureId) {
            //             featureToRowMap.set(featureId, row);
            //         } else {
            //             console.warn('Feature created but no ID found:', feature);
            //         }
            //     } else {
            //         console.error('Failed to create feature from WKT:', item.geom_wkt);
            //     }
            // }
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

// function highlightCorrespondingTableRow(properties) {
//     let tableRows = document.querySelectorAll("#dataTable_summary tbody tr");
//     tableRows.forEach(row => {
//         row.classList.remove("highlight"); // Remove previous highlights
//         let rowValues = row.getElementsByTagName("td");
//         if (rowValues.length > 0) {
//             let rowGIS_ID = rowValues[0].innerText; // GIS ID assumed to be first column
//             if (rowGIS_ID == properties.gis_id) {
//                 row.classList.add("highlight");
//                 row.scrollIntoView({ behavior: "smooth", block: "center" });
//             }
//         }
//     });
// }


let highlightLayer;
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
////////---------------Drain-Table zomming highlight and fetch to map and table---------//
// map.on('singleclick', function (evt) {
//     let viewResolution = map.getView().getResolution();
//     let wmsSource = currentLayer.getSource();
//     let url = wmsSource.getFeatureInfoUrl(
//         evt.coordinate,
//         viewResolution,
//         'EPSG:4326',
//         { 'INFO_FORMAT': 'application/json' } // Get JSON response
//     );
//     if (url) {
//         fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 console.log('GeoServer Response:', data);
//                 if (data.features && data.features.length > 0) {
//                     let properties = data.features[0].properties;
//                     let gisId = properties.id;
//                     highlightTableRowByGISID_drain(gisId);
//                     highlightFeatureOnMap_Drain(gisId)
//                 }
//             })
//             .catch(error => console.error('Error fetching feature info:', error));
//     }
// });
// // :white_check_mark: Function to Highlight the Corresponding Table Row
// function highlightTableRowByGISID_drain(gisId) {
//     let tableRows = document.querySelectorAll("#dataTable_drain tbody tr");
//     tableRows.forEach(row => {
//         row.classList.remove("highlight"); // Remove previous highlight
//         let rowGISID = row.getElementsByTagName("td")[0].innerText; // Assuming GIS ID is in the first column
//         if (rowGISID == gisId) {
//             row.classList.add("highlight");
//             row.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//     });
// }
/////-------------------------------Table for Drain-Zooming and highlight also------------//////
function Table_Row_and_Layer_highlight_Drain(data) {
    // let dataTableBody_summary = document.getElementById("dataTableBody_summary");
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
// :white_check_mark: Function to Highlight the Table Row
// function highlightTableRow_Drain(selectedRow) {
//     let tableRows = document.querySelectorAll("#dataTable_Drain tbody tr");
//     tableRows.forEach(row => {
//         row.classList.remove("highlight"); // Remove previous highlight
//     });
//     selectedRow.classList.add("highlight"); // Add highlight to selected row
// }
// // :white_check_mark: Function to Highlight Feature on Map Based on GIS ID
// function highlightFeatureOnMap_Drain(gisId) {
//     let wfsUrl = `http://localhost:8083/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature
//         &typename=ANN_Summary:Ann_Drain_Condition
//         &outputFormat=application/json
//         &CQL_FILTER=gid=${gisId}`;
//     console.log('Fetching Feature:', wfsUrl);
//     fetch(wfsUrl)
//         .then(response => response.json())
//         .then(data => {
//             console.log('WFS Response:', data); // :white_check_mark: Debug the response
//             if (data.features && data.features.length > 0) {
//                 let feature = new ol.format.GeoJSON().readFeature(data.features[0], {
//                     dataProjection: 'EPSG:4326',
//                     featureProjection: map.getView().getProjection()
//                 });
//                 console.log('Feature to Highlight:', feature); // :white_check_mark: Debug feature
//                 addFeatureHighlight(feature);
//             } else {
//                 console.warn('No matching feature found for GIS ID:', gisId);
//             }
//         })
//         .catch(error => console.error('Error fetching WFS feature:', error));
// }












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

            // if (item.geom_wkt) {
            //     console.log('WKT String:', item.geom_wkt);  // Log WKT to verify it's correct
            //     const feature = addMultilinestringFeatureFromWKT_Ward(item.geom_wkt, item.ward_no);
            //     // Check if the feature was successfully created
            //     if (feature) {
            //         const featureId = feature.getId();
            //         if (featureId) {
            //             featureToRowMap.set(featureId, row);
            //         } else {
            //             console.warn('Feature created but no ID found:', feature);
            //         }
            //     } else {
            //         console.error('Failed to create feature from WKT:', item.geom_wkt);
            //     }
            // }

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



//----------Boundaries------------------------------------//
var Ayodhya_Boundary = new ol.layer.Image({
    title: 'Ayodhya Zone Boundary',
    //     extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Ayodhya/wms',
        params: {
            'LAYERS': 'Ayodhya:Ayodhaya Zone Boundary',
            // 'TILED':true,
            //  'FORMAT':image/png8
        },
        ratio: 1,
        serverType: 'geoserver'
    })
});

//overlays.getLayers().push(LNN_Boundary);
map.addLayer(Ayodhya_Boundary);

var Ayodhya_Ward_Boundary = new ol.layer.Image({
    title: 'Ayodhya Ward Boundary',
    //     extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/Ayodhya/wms',
        params: {
            'LAYERS': '	Ayodhya:Ayodhaya Ward Boundary',

        },
        ratio: 1,
        serverType: 'geoserver'
    })
});

//overlays.getLayers().push(LNN_Ward_Boundary);
map.addLayer(Ayodhya_Ward_Boundary);





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

//--------------------Search bar code end----------------------------//




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