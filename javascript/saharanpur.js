const BASE_URL = `${BASE_URL_All}:8985/Saharanpur`;
const GEOSERVER_BASE_URL = "http://localhost:8080/geoserver/SNP_Summary";

ol.proj.useGeographic();

//---------------------- header section start --------------------------//

// Grouped event listeners for similar functionality
function hideElements(elementIds) {
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) { element.style.display = 'none' }
    });
}

function showElements(elementIds) {
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) { element.style.display = 'block'; }
    });
}
//----------------------------------------- sidebar amenities show and hide elements -------------------------
['Bank_Road', 'Park_Road', 'Hospital_Road', 'Hotel_Road', 'Education_Road', 'ShowRoads'].forEach(id => {
    document.getElementById(id).addEventListener('click', showTables);
});

function showTables() {
    showElements(['dataTable_summary', 'tableContainer_summary']);
    hideElements(['legendBtn', 'live_legend',  'Condition_legend', 'CUS_legend', 'RoadCategory_legend', 'Material_legend', 'Ownership_legend',
        'summary-table', 'tableContainer_summaryfilter', 'table_data','query_tab','caption'
    ]);
}

//------------------------------------ summary tables show and hide elements -------------------------
document.getElementById('table_icon').addEventListener('click', showTables2);

function showTables2() {
    showElements(['summary-table']);
    hideElements(['dataTable_summary', 'tableContainer_summary', 'tableContainer_summaryfilter',  
        'legendBtn', 'live_legend',  'Condition_legend', 'CUS_legend', 'RoadCategory_legend',
        'Material_legend', 'Ownership_legend', 'table_data','query_tab'
    ]);
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
            $("#road_btn").click(
                function () {
                    $("#tableContainer_summaryfilter").hide();
                }
            );
        });



var map, geojson, featureOverlay, overlays, style;
var selected, features, layer_name, layerControl;
var content;
var selectedFeature;

var view = new ol.View({
    projection: "EPSG:4326",
    center: [77.54678850552586,29.9704179443296236],
    minZoom: 13,
    maxZoom: 15,
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
            visible: true,
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




//------------------ charts and data ---------------------//
// function data_analysis() {
//     window.open('https://lookerstudio.google.com/reporting/5a12d4bb-d427-4dba-b903-60c61c1db7a7', '_blank'); // Open Google in a new tab
// }
function data_analysis() {
    // Hide the map container
    document.getElementById('map').style.display = 'none';   
    // Show the iframe container
    document.getElementById('iframe-container').style.display = 'block';
}

function closeReport() {
    // Hide the iframe container
    document.getElementById('iframe-container').style.display = 'none';
    // Show the map container
    document.getElementById('map').style.display = 'block';
}

//-----------------------------------Boundaries------------------------------------//
var ward_boundary = new ol.layer.Image({
    title: "Saharanpur Ward Boundary",
     isWardBoundaryLayer: true, 
    //  extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: `${GEOSERVER_BASE_URL}/wms`,
        params: {
            LAYERS: "SNP_Summary:saharanpur_ward_boundary",
        },
        ratio: 1,
        serverType: "geoserver",
    }),
});
//overlays.getLayers().push(LNN_Boundary);
map.addLayer(ward_boundary);


//------------------------------------------------ Ward Boundary highlight --------------------------------------------------------

function getwardBoundary(wardNo) {
    fetch(`${BASE_URL}/getWardBoundary?ward_no=${wardNo}`)
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                const geojson = JSON.parse(data.geometry);
                highlightZoneBoundary(geojson);
            } else {
                console.error("Error:", data.message);
            }
        })
        .catch(error => console.error("Error fetching boundary:", error));
}
/*----------------------------------------- javascript for sidebar----------------------------------------- */

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const cancelIcon = document.querySelector(".cancel-icon");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    document.getElementById('query_tab').style.display = 'none';
    document.getElementById('road-filter').style.display = 'none';
    //   document.getElementById('drain-filter').style.display = 'none';
});

cancelIcon.addEventListener("click", () => {
    sidebar.classList.remove("show");
});

document.querySelectorAll('.tab-cancel-icon').forEach(function (element) {
    element.addEventListener('click', function () {
        document.getElementById('query_tab').style.display = 'none';
       // document.getElementById('measure-tab').style.display = 'none';
       // document.getElementById('street-tab').style.display = 'none';
    });
});

//----------------- table Cancel btn ----------------------------//
document.querySelectorAll('.table-cancel-btn1').forEach(function (element) {
    element.addEventListener('click', function () {
        // document.getElementById('tableContainer').style.display = 'none';
        document.getElementById('tableContainer_summary').style.display = 'none';
        document.getElementById('tableContainer_summaryfilter').style.display = 'none';
        document.getElementById('summary-table').style.display = 'block';
        document.getElementById('popup').style.display = 'none';

        const Materiallegend = document.getElementById('Material_legend');
        Materiallegend.style.display = 'none';
        const Conditionlegend = document.getElementById('Condition_legend');
        Conditionlegend.style.display = 'none';

        const Ownerlegend = document.getElementById('Ownership_legend');
        Ownerlegend.style.display = 'none';
        const CUSlegend = document.getElementById('CUS_legend');
        CUSlegend.style.display = 'none';
        const RoadCatlegend = document.getElementById('RoadCategory_legend');
        RoadCatlegend.style.display = 'none';
       
    });
});


//---------------------------- query panel ---------------------//
function query_panel1() {
	const querypanel = document.getElementById('query_tab');
	   querypanel.style.display = querypanel.style.display === 'block' ? 'none' : 'block';
	   document.getElementById('tableContainer_summary').style.display = 'none';
	   document.getElementById('tableContainer_summaryfilter').style.display = 'none';   
}

//-------------- zone wise road filter start-----------------//
function road_filter() {
    const roadFilter = document.getElementById('road-filter');
    roadFilter.style.display = roadFilter.style.display === 'block' ? 'none' : 'block';
}

//-------------- drain filter --------------------------//
// function drain_filter() {
//     const drainFilter = document.getElementById('drain-filter');
//     drainFilter.style.display = drainFilter.style.display === 'block' ? 'none' : 'block';
// }
function re_direct() {
    alert("Data not available");
}
//------------------------ Road , Drain filter & Street View Function toggle ------------------------//

// let currentFilter = null; // Variable to track the currently visible filter

// // Function to toggle road filter visibility
// function road_filter() {
//     toggleFilter('road-filter');
// }
// // Function to toggle drain filter visibility
// function drain_filter() {
//     toggleFilter('drain-filter');
// }
// // Function to handle the visibility of filters and street view
// function toggleFilter(filterId) {
//     const filters = ['road-filter']//, 'drain-filter']; // List of filter IDs
//     //  const streetTab = document.getElementById('street-tab'); // Street view section

//     filters.forEach(id => {
//         const filter = document.getElementById(id);
//         if (id === filterId) {
//             // Toggle the clicked filter's visibility
//             if (filter.style.display === 'block') {
//                 filter.style.display = 'none';
//                 currentFilter = null;
//             } else {
//                 filter.style.display = 'block';
//                 currentFilter = id;
//             }
//         } else {
//             // Hide other filters
//             filter.style.display = 'none';
//         }
//     });
// }

document.getElementById('clear-icon').onclick = clearAllVectorLayers;
function clearAllVectorLayers() {
    clearVectorLayers();
        // ✅ THIS is what actually clears the search
   // resetRoadSearch();

    map.getLayers().getArray().forEach(layer => {
        if (layer instanceof ol.layer.Vector) {
            layer.getSource().clear();
        }
    });
    zoomToIndia();
    if (typeof currentLayer !== 'undefined' && currentLayer) {
        map.removeLayer(currentLayer);
    }

    const elementsToHide = ["road-filter", "query_tab","popup_road","tableContainer_summary", "search-bar","summary-table","popup","tableContainer_summaryfilter","sidebar","table_data"];
    elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = "none";
        }
    });
    const legendIds = [ 'condition_legend','Material_legend', 'Ownership_legend', 'CUS_legend','RoadCategory_legend'];
    legendIds.forEach(legendID => {
        const legendBtn = document.getElementById(legendID);
        if (legendBtn) {
            legendBtn.style.display = 'none';
        }
    });
    const legendBtn = document.getElementById('legendBtn');
    if (legendBtn) {
        legendBtn.style.bottom = '3%';
    }
    // Loop through all layers and remove them except the Ward Boundary layer
    map.getLayers().getArray().slice().forEach(layer => {
        // Ensure the layer has the 'getSource' method and is a valid layer type
        if (layer.getSource && (layer instanceof ol.layer.Tile || layer instanceof ol.layer.Image || layer instanceof ol.layer.Vector)) {
            const layerSource = layer.getSource();
            
            // Check if this is the Ward Boundary layer using the custom property
            if (layer.get('isWardBoundaryLayer') !== true) { // Skip removing the Ward Boundary layer
                map.removeLayer(layer);
            }
        }
    });
}


// ------------------------------ for clear wms layers------------------------------------------
var currentLayer = null;

function removeCurrentLayer() {
    if (currentLayer) {  // Check if there's a current layer on the map
        map.removeLayer(currentLayer);  // Remove the current layer from the map
        currentLayer = null;  // Reset the currentLayer variable
    }
}

//-------------------------------------clear vector layer// api fetched geom ------------------------------------------------------------//
function clearVectorLayers() {
    // Create an array to hold layers that you want to preserve
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector ) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();
}


function zoomToIndia() {
    const view = map.getView();

    // Define the approximate bounding box for India
    const extent = ol.proj.transformExtent(
        [82.08302446765529, 26.71400889838419, 82.24602173765878, 26.811349630444568],
        'EPSG:4326',
        view.getProjection()
    );
    // Set the map's center and zoom level explicitly
    view.setCenter([77.54678850552586, 29.9704179443296236]);
    view.setZoom(12);
    view.setRotation(0);

}


// const dataTableBody = document.getElementById('dataBody');
const dataTableBody_summary = document.getElementById('dataBody_summary');
const dataTableBody_summaryfilter = document.getElementById('dataBody_summaryfilter');


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

    document.querySelectorAll('.feature_nav').forEach(nav => {
        nav.style.bottom = '3%';
    });
    topnav.style.height = '0%';
    const legendIds = ['Priority_legend','Priority_legend','Condition_legend','Material_legend', 'Ownership_legend', 'CUS_legend','RoadCategory_legend' ];

    legendIds.forEach(id => {
        const lg = document.getElementById(id);
        if (lg) {
            lg.classList.remove('legend-visible');
            lg.classList.add('legend-hidden');
            lg.scrollTop = 0;
        }
    });
}

function maximize1() {
    const topnav = document.getElementById('tableContainer_summary');
    document.querySelectorAll('.feature_nav').forEach(nav => {
        nav.style.bottom = '22%';
    });
    topnav.style.height = '19%';
    const legendIds = ['Priority_legend','Condition_legend', 'Material_legend', 'Ownership_legend', 'CUS_legend', 'RoadCategory_legend' ];
    legendIds.forEach(id => {
        const lg = document.getElementById(id);
        if (lg) {
            lg.classList.remove('legend-hidden');
            lg.classList.add('legend-visible');
            lg.scrollTop = 0;
        }
    });
}

//------------------------------------- MULTILINESTRING feature to the map from WKT format
function addMultilinestringFeatureFromWKT_General(wktString, color = 'black', width = 3) {
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
                color: color,
                width: width
            })
        })
    });

    const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
    feature.setId(featureId);

    map.addLayer(vectorLayer);
    return feature;
}

function addMultilinestringFeatureFromWKT(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, '#EB5406', 3);
}
function addMultilinestringFeatureFromWKT_parkRoad(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, '#04af70', 3);
}
function addMultilinestringFeatureFromWKT_EduRoad(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, '#5c62d6', 3);
}
function addMultilinestringFeatureFromWKT_HospitalRoad(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, 'cyan', 3);
}
function addMultilinestringFeatureFromWKT_HotelRoad(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, 'darkblue', 3);
}
function addMultilinestringFeatureFromWKT_Ward(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, 'red', 3);
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
        duration: 1000,
        maxZoom: 18
    });

    if (previouslyHighlightedFeature && previouslyHighlightedLayer) {
        previouslyHighlightedFeature.setStyle(null);
        previouslyHighlightedLayer.getSource().removeFeature(previouslyHighlightedFeature);
        map.removeLayer(previouslyHighlightedLayer);
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

function highlightAndScrollToRow(row) {
    console.log("Highlighting and scrolling to row ");

    Array.from(dataTableBody_summary.querySelectorAll('tr')).forEach(tr => {
        tr.classList.remove('highlighted');
    });
    // Array.from(dataTableBody.querySelectorAll('tr')).forEach(tr => {
    //     tr.classList.remove('highlighted');
    // });

    row.classList.add('highlighted');
    row.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
    });
    console.log("Row scrolled into view.");
}

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
        // console.log("Selected feature: ", selectedFeature);

        const featureId = selectedFeature.getId();
        // console.log("Feature ID: ", featureId);

        const associatedRow = featureToRowMap.get(featureId);
        // console.log("Associated row: ", associatedRow);

        if (associatedRow) {
            highlightAndScrollToRow(associatedRow);

        } else {
            console.warn("No associated row found for the selected feature.");
        }
    } else {
        console.log("No feature selected.");
    }
});


//----------------------------------------All amenities popup Data-------------------------//
// Popup initialization
var popupContainer = document.getElementById("popup_1");

var popup = new ol.Overlay({
    element: document.getElementById('popup'),
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -20],
});
map.addOverlay(popup);


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
        var phonenumbe = pointFeature.get('phone_no');

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


//----------------------------------optimise amenities-----------------------------

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

function amenitiesFeatures(type, iconStyle, vectorSource, layer, elementId) {
   // console.log("The URL is:", `${BASE_URL}/getLocationData?type=${type}`);
    fetch(`${BASE_URL}/getLocationData?type=${type}`)
        .then(response => response.json())
        .then(data => {
            const features = data.data.map(point => {
                try {
                    let coordsText = point.geom_point
                    .replace('MULTIPOINT((', '')
                    .replace('))', '')
                    .replace('POINT(', '')
                    .replace(')', '');

                 const coords = coordsText.trim().split(' ');
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
          //  console.log(`${type} features added:`, features);

            document.getElementById(elementId).addEventListener('change', function () {
                layer.setVisible(this.checked);
            });
        })
        .catch(error => console.error(`Error fetching ${type} data:`, error));
}

//    Location Types and Fetching Features for Points
const locationTypes = [
    { type: 'atm_bank', icon: '../assets/icons/bank.png', id: 'showBanks' },
    { type: 'bus_stop', icon: '../assets/icons/bus.png', id: 'showBus' },
    { type: 'electric_substation', icon: '../assets/icons/charging.png', id: 'showCar' },
    { type: 'hospital', icon: '../assets/icons/hospital.png', id: 'showHospital' },
    { type: 'education', icon: '../assets/icons/education.png', id: 'showEducation' },
    { type: 'hotel', icon: '../assets/icons/hotel.png', id: 'showHotel' },
    { type: 'petrol_pump', icon: '../assets/icons/fuel.png', id: 'showPetrol' },
    { type: 'graveyard', icon: '../assets/icons/graveyard.png', id: 'showGraveyard' }, // if not supported, remove or update backend
    { type: 'religious', icon: '../assets/icons/Book.png', id: 'showReligious' },
    { type: 'post_office', icon: '../assets/icons/post-office.png', id: 'showPostOffice' },
    { type: 'central_gov', icon: '../assets/icons/Central.png', id: 'showCentralGov' },
    { type: 'state_gov', icon: '../assets/icons/State.png', id: 'showStateGov', scale: 0.02 },
    { type: 'stadium', icon: '../assets/icons/stadium.png', id: 'showStadium' } // make sure it's supported in backend
];


locationTypes.forEach(location => {
    const vectorSource = new ol.source.Vector();
    const vectorLayer = createVectorLayer(vectorSource);
    map.addLayer(vectorLayer);

    const iconStyle = createIconStyle(location.icon, location.scale || 0.05);
    amenitiesFeatures(location.type, iconStyle, vectorSource, vectorLayer, location.id);
});

//------------------------------------------------park---------------------//

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
function park_amenityFeature(url, vectorSource, layer, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Log the data to understand its structure
          //  console.log('Fetched park data:', data);

            if (!data || !Array.isArray(data.data)) {
                throw new Error('Invalid data format: expected an object with an array in "data" property.');
            }

            var format = new ol.format.WKT();
            var features = data.data.map(function (park) {
              //  console.log("WKT Geometry:", park.geom_point);

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
           // console.log('Park features added:', features);

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
park_amenityFeature(`${BASE_URL}/getPark_newName`, parkVectorSource, parkVectorLayer, 'showParks');

//-------------------------------------------All Roads-------------------------//
ShowRoads.addEventListener('click', function () {
    updateNavBarWithFunctionName("All Roads");
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector
            // && !isLayerInPreservedList(layer)
        ) {
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
           // console.log('Received data:', responseData);
            console.log('getting all data');
            // Clear existing table rows
            dataTableBody_summary.innerHTML = '';
            // Check if 'data' is an array before iterating
            if (Array.isArray(responseData.data)) {
                responseData.data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                               <td>${item.gis_id}</td>
                               <td>${item.road_id}</td>
                               <td>${item.zone_no}</td>
                               <td>${item.zone_name}</td>
                               <td>${item.ward_no}</td>
                                <td>${item.ward_name}</td>
                                <td>${item.ownership}</td>                           
                             <td>${item.category}</td>
                            <td>${item.road_name}</td>
                            <td>${item.row_meter}</td>
                            <td>${item.row_apr}</td>
                            <td>${item.carriage_w}</td>
                            <td>${item.material}</td>
                            <td>${item.length_km ? item.length_km.toFixed(2) : 'N/A'}</td>
                            <td>${item.condition}</td>
                            <td>${item.yoc}</td>
                            <td>${item.cus}</td>`;
                    dataTableBody_summary.appendChild(row);
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
});


//--------------------------------optimise code of sidebar road analysis -----------------------------
function amenitiesRoadAnalysis(endpoint, layerName, featureFunction, elementId) {
    removeCurrentLayer();
    updateNavBarWithFunctionName(layerName);

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && layer != parkVectorLayer) {
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
         //   console.log(`Received data for ${layerName}:`, responseData);

            // Reset UI
            dataTableBody_summary.innerHTML = '';
            featureToRowMap.clear();
            // map.getOverlays().clear();

            // 🔍 Handle new flat response structure
            if (Array.isArray(responseData)) {
                const countEntry = responseData[0];
                const features = responseData.slice(1); // skip first element

            //    console.log(`Total features in ${layerName}:`, countEntry.count);

                features.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                               <td>${item.gid}</td>
                               <td>${item.road_id}</td>
                               <td>${item.zone_no}</td>
                               <td>${item.zone_name}</td>
                               <td>${item.ward_no}</td>
                                <td>${item.ward_name}</td>
                                <td>${item.ownership}</td>
                                <td>${item.category}</td>
                                <td>${item.road_name}</td>
                                <td>${item.row_meter}</td>
                                <td>${item.row_apr}</td>
                                <td>${item.carriage_w}</td>
                                <td>${item.material}</td>
                                <td>${item.length_km ? item.length_km.toFixed(2) : 'N/A'}</td>
                               <td>${item.condition}</td>
                                <td>${item.yoc}</td>
                                <td>${item.cus}</td>`;

                    dataTableBody_summary.appendChild(row);

                    row.addEventListener('click', function () {
                        if (item.geom) {
                            zoomToRoadFeature(item.geom);
                            highlightAndScrollToRow(row);
                        }
                    });

                    if (item.geom) {
                      //  console.log(`WKT String for ${layerName}:`, item.geom);
                        const feature = featureFunction(item.geom);

                        if (feature) {
                            const featureId = feature.getId();
                            if (featureId) {
                                featureToRowMap.set(featureId, row);
                            }
                        }
                    }
                });
            } else {
                console.error(`Expected flat array but got:`, responseData);
            }

            document.getElementById(elementId).addEventListener('change', function () {
                layer.setVisible(this.checked);
            });
        })
        .catch(error => console.error(`Error fetching data for ${layerName}:`, error));

}

Bank_Road.addEventListener('click', () => showAmenityWithRoads('roads-with-atms', 'Bank with Roads', addMultilinestringFeatureFromWKT, 'bank', '../assets/icons/bank.png', 'showBanks'));
Park_Road.addEventListener('click', () => showAmenityWithRoads('roads-with-Park', 'Park with Roads', addMultilinestringFeatureFromWKT_parkRoad));
Hospital_Road.addEventListener('click', () => showAmenityWithRoads('roads_with_hospital', 'Hospital with Roads', addMultilinestringFeatureFromWKT_HospitalRoad, 'hospital', '../assets/icons/hospital.png', 'showHospital'));
Hotel_Road.addEventListener('click', () => showAmenityWithRoads('roads-with-hotel', 'Hotel with Roads', addMultilinestringFeatureFromWKT_HotelRoad, 'hotel', '../assets/icons/hotel.png', 'showHotel'));
Education_Road.addEventListener('click', () => showAmenityWithRoads('roads-with-Education', 'Educational Institute with Roads', addMultilinestringFeatureFromWKT_EduRoad, 'education', '../assets/icons/education.png', 'showEducation'));

/// =========== COMBINED FUNCTION: Show Roads + Icons ======================
function showAmenityWithRoads(roadEndpoint, roadLayerName, roadFeatureFunction, pointType, iconPath, elementId, scale = 0.05) {
    // 1. Show Roads
    amenitiesRoadAnalysis(roadEndpoint, roadLayerName, roadFeatureFunction, elementId);

    // 2. Show Icons
    const vectorSource = new ol.source.Vector();
    const iconLayer = createVectorLayer(vectorSource);
    map.addLayer(iconLayer);

    const iconStyle = createIconStyle(iconPath, scale);
    amenitiesFeatures(pointType, iconStyle, vectorSource, iconLayer, elementId);
}

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
        url: `${GEOSERVER_BASE_URL}/wfs?request=getCapabilities`,
        dataType: "xml",
        success: function (xml) {
            var select = $("#layer");
            const targetLayer = "SNP_Summary:saharanpur_road_net"; // your desired layer
            $(xml)
                .find("FeatureType")
                .each(function () {
                    var name = $(this).find("Name").text().trim();
                    if (name === targetLayer) {
                        select.append(
                            `<option class='ddindent' value='${name}'>${name}</option>`
                        );
                    }
                });
        },
        error: function (xhr, status, error) {
            console.error("GeoServer request failed:", error);
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
                    `${GEOSERVER_BASE_URL}/wfs?service=WFS&request=DescribeFeatureType&version=1.1.0&typeName=` +
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
// // operator combo
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
             value_type == "xsd:string" ||  
               value_type.includes("float") ||
            value_type.includes("decimal")||
            value_type == "xsd:long"
        ) {
            var operator1 = document.getElementById("operator");
            operator1.options[1] = new Option("Greater than", ">");
            operator1.options[2] = new Option("Less than", "<");
          //   operator1.options[3] = new Option("Like", "ILike");
            operator1.options[3] = new Option("Equal to", "=");
              operator1.options[4] = new Option('Between', 'BETWEEN');
        } else if (value_type == "xsd:string") {
            var operator1 = document.getElementById("operator");
            operator1.options[1] = new Option("Greater than", ">");
            operator1.options[2] = new Option("Less than", "<");
         //   operator1.options[3] = new Option("Like", "ILike");
             operator1.options[3] = new Option("Equal to", "=");
        }
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
    let cqlFilter = "";

if (value_operator === "BETWEEN") {

    const parts = value_txt.split(",");

    if (parts.length !== 2) {
        alert("For BETWEEN, enter value as: min,max");
        return;
    }

    const minVal = parts[0].trim();
    const maxVal = parts[1].trim();

    cqlFilter = `${value_attribute} BETWEEN ${minVal} AND ${maxVal}`;

} 
else if (value_operator === "ILike") {

    cqlFilter = `${value_attribute} ILIKE '%${value_txt}%'`;

} 
else {

    cqlFilter = `${value_attribute} ${value_operator} '${value_txt}'`;
}

    var url =
       
        `${GEOSERVER_BASE_URL}/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=${value_layer}&CQL_FILTER=${encodeURIComponent(cqlFilter)}&outputFormat=application/json`;
    //console.log(url);
    style = new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 255, 255, 0.2)",
        }),
        stroke: new ol.style.Stroke({
            color: "#8ECAED",
            width: 5,
        }),
        image: new ol.style.Circle({
            radius: 5,
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
				caption.style.backgroundColor = "#51929F";
				caption.style.color = "black";
				caption.style.padding = "6px";

				// 🔹 TEXT (Number of Features)
				var text = document.createElement("b");
				text.style.fontWeight = "900";
				text.style.color = "black";
				text.style.fontSize = "small";
				text.innerText = "Number of Features : " + data.features.length;

				// 🔹 CANCEL BUTTON
				var cancelBtn = document.createElement("button");
				cancelBtn.innerText = "✖";
				cancelBtn.style.marginLeft = "89%";
				cancelBtn.style.cursor = "pointer";
				cancelBtn.style.fontSize = "12px";
				cancelBtn.style.border = "none";
				cancelBtn.style.background = "transparent";

				// ❌ click par table remove
				cancelBtn.onclick = function () {
				    const tableDiv = document.getElementById("table_data");

				    // table remove
				    tableDiv.innerHTML = "";
				    tableDiv.style.height = "0";
				    tableDiv.style.display = "none";

				    // map full height

				    // OpenLayers ko resize signal
				    map.updateSize();
				};

				// caption me add karo
				caption.appendChild(text);
				caption.appendChild(cancelBtn);
				table.appendChild(caption);

				// ---------- TABLE HEADER ----------
				var tr = table.insertRow(-1);
				for (var i = 0; i < col.length - 22; i++) {
				    var th = document.createElement("th");
				    th.innerHTML = col[i];
				    tr.appendChild(th);
				}

				// ---------- TABLE DATA ----------
				for (var i = 0; i < data.features.length; i++) {
				    tr = table.insertRow(-1);
				    for (var j = 0; j < col.length - 22; j++) {
				        var tabCell = tr.insertCell(-1);
				        if (j == 0) {
				            tabCell.innerHTML = data.features[i]["id"];
				        } else {
				            tabCell.innerHTML = data.features[i].properties[col[j]];
				        }
				    }
				}

		        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
		          var divContainer = document.getElementById("table_data");
		        divContainer.innerHTML = "";
		        divContainer.appendChild(table);
		        document.getElementById("map").style.height = "100%";
		        document.getElementById("table_data").style.height = "22%";
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



// //------------- draw function in query panel----------------------//
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
                    `${GEOSERVER_BASE_URL}/wfs?request=GetFeature&version=1.0.0&typeName=${value_layer}&outputFormat=json&cql_filter=INTERSECTS(geom,${wkt})`;
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
var sketch;
/**
 * The help tooltip element.
 * @type {Element}
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
var continuePolygonMsg = "Click to continue drawing the polygon";
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

// function createHelpTooltip() {
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
//}
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

function street_view() {
   alert("Data not available");
}

//------------------------------------------------summary table code---------------------------------------------------------------

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
    } 
   /* else if (tabName === 'Zones') {
        if (selectedZone) {
            updateZones(selectedZone);
        } else {
            content.innerHTML = '<p>Select a zone from Summary to see details here.</p>';
        }
    } */
        else if (tabName === 'Wards') {
        if (selectedZone) {
            updateWards(selectedZone);
        } else {
            content.innerHTML = '<p>Select a zone from Summary to see wards details here.</p>';
        }
    } 
    /*else if (tabName === 'WardDetails') {
        if (selectedZone && selectedWard) {
            updateWardDetails(selectedZone, selectedWard);
        } else {
            content.innerHTML = '<p>Select a ward from Wards to see details here.</p>';
        }
    } */
   
}

// Add event listener to the button with ID 'loadZonesButton'
document.getElementById('table_icon').addEventListener('click', loadZones);
document.getElementById('summary_id').addEventListener('click', loadZones);


/* ------------------------------zone no function calling-------------------------------*/
function loadZones() {
    fetch(`${BASE_URL}/getTotalZone`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
          //  console.log("✅ API Response:", data); // For Debugging

            updateSummary(data); // Only call if data structure is valid
        })
        .catch(error => console.error("❌ Error fetching zone data:", error));
}

function updateSummary(data) {
    if (!data || typeof data !== 'object') {
        // console.error("❌ updateSummary() received invalid data:", data);
        return;
    }

    const content = document.getElementById('content');
    if (!content) {
        console.error("❌ #content element not found!");
        return;
    }

    content.innerHTML = '';

  //  console.log("✅ Received Data in updateSummary:", data); // For Debugging

    const safeValue = (key) => key in data && data[key] !== null && data[key] !== undefined
        ? data[key]
        : 'N/A';

    const summaryData = {
        'No. of Zones': { value: 'NA' },
        'Total Road Length': { value: `${safeValue('total_length_km')} km`, onclick: "Saharanpur_Road_Length_Count(); updateNavBarWithFunctionName('Total Road Length');" },
        'Total No. of Roads': { value: safeValue('total_length_count'), onclick: "Saharanpur_Road_Length_Count(); updateNavBarWithFunctionName('Total Road Count');" },
        'Total Ward No.': { value: safeValue('ayo_ward'), onclick: 'Saharanpur_Ward_NO()' },
        'Road Count by Condition': {
            value: `
                Good - <a href="javascript:void(0)" onclick="Saharanpur_Condition_cat('condition','Good'); updateNavBarWithFunctionName('Road Condition : Good');" style="color:green;">${safeValue('condition_count_green')}</a><br>
                Poor - <a href="javascript:void(0)" onclick="Saharanpur_Condition_cat('condition','Poor'); updateNavBarWithFunctionName('Road Condition : Poor');" style="color:red;">${safeValue('condition_count_red')}</a><br>
                Moderate - <a href="javascript:void(0)" onclick="Saharanpur_Condition_cat('condition','Moderate'); updateNavBarWithFunctionName('Road Condition : Moderate');" style="color:yellow;">${safeValue('condition_count_yellow')}</a><br>
             `
        },
        'Road Count by Material': {
            value: `
                Bitumen - <a href="javascript:void(0)" onclick="Saharanpur_Material_cat('material','Bitumen'); updateNavBarWithFunctionName('Road Material : Bitumen');" style="color:darkred;">${safeValue('count_bitumen')}</a><br>
                CC - <a href="javascript:void(0)" onclick="Saharanpur_Material_cat('material','CC'); updateNavBarWithFunctionName('Road Material : CC');" style="color:#1ad7b0;">${safeValue('count_cc')}</a><br>
                BOE - <a href="javascript:void(0)" onclick="Saharanpur_Material_cat('material','BOE'); updateNavBarWithFunctionName('Road Material : BOE');" style="color:#1ad7b0;">${safeValue('count_boe')}</a><br>
                Interlocking - <a href="javascript:void(0)" onclick="Saharanpur_Material_cat('material','Interlocking'); updateNavBarWithFunctionName('Road Material : Interlocking');" style="color:#2392ed;">${safeValue('count_interlocking')}</a><br>
                Kachcha - <a href="javascript:void(0)" onclick="Saharanpur_Material_cat('material','Kachcha'); updateNavBarWithFunctionName('Road Material : Kachcha');" style="color:#6036d0;">${safeValue('count_kachcha')}</a><br>
                `,
            onclick: 'Saharanpur_Material()'
        },
        'Road Count by Ownership': {
            value: `
                SNN - <a href="javascript:void(0)" onclick="Saharanpur_Ownership_cat('ownership','SNN'); updateNavBarWithFunctionName('Road Ownership : Saharanpur Nagar Nigam');" style="color: #5aeee5;">${safeValue('count_snn')}</a><br>
                PWD - <a href="javascript:void(0)" onclick="Saharanpur_Ownership_cat('ownership','PWD'); updateNavBarWithFunctionName('Road Ownership : PWD');" style="color: #69e70f;">${safeValue('count_pwd')}</a><br>
                Development Authority - <a href="javascript:void(0)" onclick="Saharanpur_Ownership_cat('ownership','Development Authority'); updateNavBarWithFunctionName('Road Ownership : Development Authority');" style="color: #f16a16;">${safeValue('count_duda')}</a><br>
                Private Roads  - <a href="javascript:void(0)" onclick="Saharanpur_Ownership_cat('ownership','Private'); updateNavBarWithFunctionName('Road Ownership : Private Road');" style="color: #ed2323;">${safeValue('count_pvt')}</a><br>
                Railway - <a href="javascript:void(0)" onclick="Saharanpur_Ownership_cat('ownership','Railway'); updateNavBarWithFunctionName('Road Ownership : Railway');" style="color: yellow;">${safeValue('count_railway')}</a><br>
                Others - <a href="javascript:void(0)" onclick="Saharanpur_Ownership_cat('ownership','Others'); updateNavBarWithFunctionName('Road Ownership : Others');" style="color: yellow;">${safeValue('count_others')}</a><br>         
                `,
            onclick: 'Saharanpur_Ownership()'
        },
        'Road Count by CUS': {
            value: `
                15th Finance - <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','15th Finance'); updateNavBarWithFunctionName('Road CUS : 15th Finance');" style="color: #ec1248;">${safeValue('count_15th_finance')}</a><br>
                PWD - <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','PWD'); updateNavBarWithFunctionName('Road CUS : PWD');" style="color: #e63dee;">${safeValue('count_cus_pwd')}</a><br>
                Nagar Nigam Nidhi - <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','Nagar Nigam Nidhi'); updateNavBarWithFunctionName('Road CUS : Nagar Nigam Nidhi');" style="color: cyan;">${safeValue('count_cus_nnn')}</a><br>
                Development Authority- <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','DUDA'); updateNavBarWithFunctionName('Road CUS : DUDA');" style="color: #14ea54;">${safeValue('count_cus_duda')}</a><br>
                Railway - <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','Railway'); updateNavBarWithFunctionName('Road CUS : Railway');" style="color: #6e52e7;">${safeValue('count_cus_railway')}</a><br>
                SDA - <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','SDA'); updateNavBarWithFunctionName('Road CUS : SDA');" style="color: #c70ed8;">${safeValue('count_cus_sda')}</a><br>
                Others - <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','Others'); updateNavBarWithFunctionName('Road CUS : Others');" style="color: #8717e2;">${safeValue('count_cus_others')}</a><br>
                NA - <a href="javascript:void(0)" onclick="Saharanpur_CUS_cat('cus_class','NA'); updateNavBarWithFunctionName('Road CUS : NA');" style="color: #8717e2;">${safeValue('count_cus_na')}</a><br>
                ` ,
            // onclick: 'Saharanpur_CUS()'
        },
        'Road Count by Category': {
            value: `
                Local Street - <a href="javascript:void(0)" onclick="Saharanpur_TypeSub_cat('category','Local Street'); updateNavBarWithFunctionName('Road Category : Local Street');" style="color: #14cee3;">${safeValue('count_local_street')}</a><br>
                Collector - <a href="javascript:void(0)" onclick="Saharanpur_TypeSub_cat('category','Collector'); updateNavBarWithFunctionName('Road Category : Collector');" style="color: #e63dee;">${safeValue('count_collector')}</a><br>
                Arterial - <a href="javascript:void(0)" onclick="Saharanpur_TypeSub_cat('category','Arterial'); updateNavBarWithFunctionName('Road Category : Arterial');" style="color: #e1ca4c;">${safeValue('count_arterial')}</a><br>
                Sub Arterial - <a href="javascript:void(0)" onclick="Saharanpur_TypeSub_cat('category','Sub Arterial'); updateNavBarWithFunctionName('Road Category : Sub Arterial');" style="color: #83e45c;">${safeValue('count_subarterial')}</a><br>

                `, onclick: 'Saharanpur_Types()'
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

//----------------------------------- Dropdown Zone Selection Code  -----------------------------------------------------------------
function populateZonesDropdown() {
    const zonesDropdown = document.getElementById('zonesDropdown');
    zonesDropdown.innerHTML = ''; // Clear existing content

    const zoneData = {
        "Zone Not Available": "NA",
    };

    Object.keys(zoneData).forEach(zoneKey => {
        const zoneElement = document.createElement('a');
        zoneElement.href = "#";
        zoneElement.innerHTML = zoneKey;

        zoneElement.onclick = function () {
            const zoneNo = zoneKey.split(" ")[1]; // Extract zone number
            // loadZoneData(zoneNo, zoneData[zoneKey]);
        //    populateWardsDropdown(zoneKey);
            // getZoneBoundary(zoneNo);
            return false;
        };

        zonesDropdown.appendChild(zoneElement);
    });
}
populateZonesDropdown();


//------------------------------- ward populate -------------------------------------------------------------------------------

function populateWardsDropdown() {
    const wardsDropdown = document.getElementById('zonesDropdownwards');
    wardsDropdown.innerHTML = '';

    fetch(`${BASE_URL}/getWards`)
        .then(response => response.json())
        .then(res => {
          //  console.log("✅ Wards API Response:", res);

            // ✅ API has only { data: [...] }
            if (!res || !Array.isArray(res.data)) {
                wardsDropdown.innerHTML = "<p>No wards available.</p>";
                return;
            }
            res.data.forEach(item => {
                const wardNo = item.ward_no;

                const wardElement = document.createElement('a');
                wardElement.href = "#";
                wardElement.textContent = `Ward ${wardNo}`;

                wardElement.onclick = function () {
                const wardNo = item.ward_no;
                const wardName = `Ward ${wardNo}`; // ✅ define it
                loadWardData(wardNo, wardName);
                getwardBoundary(wardNo);
                return false; };

                wardsDropdown.appendChild(wardElement);
            });
        })
        .catch(error => {
            console.error("❌ Error fetching wards data:", error);
            wardsDropdown.innerHTML = "<p>Error loading wards.</p>";
        });
}
populateWardsDropdown();
function loadWardData( wardNo, wardName){
    fetch(`${BASE_URL}/getZoneWardData?ward_no=${wardNo}`)
        .then(response => response.json())
        .then(responseData => {
            if (responseData.status) {
                updateWards(wardNo, wardName, responseData);
            } else {
                console.error('Error:', responseData.message);
            }
        })
        .catch(error => {
            console.error('Error fetching zone data:', error);
        });
}

//----------------------------------- ward no function calling-------------------------------
function updateWards(wardNo, wardName, responseData) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (!wardNo || !wardName || !responseData) {
        content.innerHTML = '<p>No data available for this ward.</p>';
        return;
    }

    // Display Ward Header
    const wardInfoCard = document.createElement('div');
    wardInfoCard.className = 'card';
    wardInfoCard.style.backgroundColor = '#5072A7';
    wardInfoCard.style.textAlign = 'center';
    wardInfoCard.style.color = 'white';
    wardInfoCard.innerHTML = `<h4>${wardName}</h4>`;
    content.appendChild(wardInfoCard);

                const wardCards = [
              {
                        title: 'Total Road Length',
                        value: `<a href="javascript:void(0)" onclick="Saharanpur_Ward_no('ward_no', '${wardNo}'); updateNavBarWithFunctionName('Ward-${wardNo} Total Road Length');" style="color:black;">${responseData.length_km} km</a>`
                    },
                    {
                        title: 'Total No. of Roads',
                        value: `<a href="javascript:void(0)" onclick="Saharanpur_Ward_no('ward_no', '${wardNo}'); updateNavBarWithFunctionName('Ward-${wardNo} Total Road Count');" style="color:black;">${responseData.total_no_of_roads}</a>`
                    },
                    {
                        title: 'Road Condition ',
                        value: `Good - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Condition('${wardNo}', 'condition', 'Good'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition : Good');" style="color:green;">${responseData.count_green}</a> 
                                <br> Moderate - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Condition('${wardNo}', 'condition', 'Moderate'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition : Moderate');" style="color:yellow;">${responseData.count_yellow}</a> 
                                <br> Poor - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Condition('${wardNo}', 'condition', 'Poor'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition : Poor');" style="color:red;">${responseData.count_red}</a>
                               `
                    },
                    {
                        title: 'Materials',
                        value: `Bitumen - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Material('${wardNo}', 'material', 'Bitumen'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material : Bitumen');" style="color:darkred;">${responseData.bitumen}</a> 
                                <br> CC - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Material('${wardNo}', 'material', 'CC'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material : CC');" style="color:cyan;">${responseData.cc}</a> 
                                <br> BOE <a href="javascript:void(0)" onclick="Saharanpur_Ward_Material('${wardNo}','material','BOE'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material : BOE');" style="color:#f228ab;">- ${responseData.boe}</a>
                                <br> Interlocking - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Material('${wardNo}', 'material', 'Interlocking'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material : Interlocking');" style="color:blue;">${responseData.interlocking}</a> 
                                <br> Kachcha - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Material('${wardNo}', 'material', 'Kachcha'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material : Kachcha');" style="color:purple;">${responseData.kachcha}</a>
                                `
                    },
                    {
                        title: 'Ownership',
                        value: `SNN - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Ownership('${wardNo}', 'ownership','SNN'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership : Saharanpur Nagar Nigam');" style="color:#5aeee5;">${responseData.snn}</a> 
                                <br> PWD - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Ownership('${wardNo}', 'ownership', 'PWD'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership : PWD');" style="color:#69e70f;">${responseData.pwd}</a> 
                                <br> PVT - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Ownership('${wardNo}', 'ownership', 'Private'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership : Private');" style="color:#ed2323;">${responseData.pvt}</a> 
                                <br> Development Authority- <a href="javascript:void(0)" onclick="Saharanpur_Ward_Ownership('${wardNo}', 'ownership', 'Development Authority'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership : Saharanpur Development Authority');" style="color:#f16a16;">${responseData.duda}</a>
                                <br> Others  - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Ownership('${wardNo}', 'ownership', 'Others '); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership : Saharanpur Others');" style="color:#f16a16;">${responseData.others}</a>                                                                   
                                <br> Railway - <a href="javascript:void(0)" onclick="Saharanpur_Ward_Ownership('${wardNo}', 'ownership', 'Railway'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership : Railway');" style="color:yellow;">${responseData.railway}</a> 
                                `
                    },
                    {
                        title: 'CUS',
                        value: ` 
                                 15th Finance - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','15th Finance'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : 15th Finance');" style="color: #ec1248;">${responseData.count_15th_finance}</a><br>
                                 PWD - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','PWD'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : PWD');" style="color: #e63dee;">${responseData.count_cus_pwd}</a><br>
                                 Nagar Nigam Nidhi - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','Nagar Nigam Nidhi'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : Nagar Nigam Nidhi');" style="color: cyan;">${responseData.count_cus_nnn}</a><br>
                                 DUDA - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','DUDA'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : DUDA');" style="color: #14ea54;">${responseData.count_cus_duda}</a><br>
                                 Railway - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','Railway'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : Railway');" style="color: #6e52e7;">${responseData.count_cus_railway}</a><br>
                                 SDA - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','SDA'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : SDA');" style="color: #c70ed8;">${responseData.count_cus_sda}</a><br>
                                 Others - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','Others'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : Others');" style="color: #8717e2;">${responseData.count_cus_others}</a><br>
                                 NA - <a href="javascript:void(0)" onclick="Saharanpur_Ward_CUS('${wardNo}','cus_class','NA'); updateNavBarWithFunctionName('Ward-${wardNo} Road CUS : NA');" style="color: #8717e2;">${responseData.count_cus_na}</a><br>
                                    `  },
                    {
                        title: 'Type Sub Category',
                        value: `
                                Local Street - <a href="javascript:void(0)" onclick="Saharanpur_Ward_TypeSub('${wardNo}','category','Local Street'); updateNavBarWithFunctionName('Ward-${wardNo} Road Category : Local Street');" style="color: #14cee3;">${responseData.count_local_street} </a><br>
                                Collector - <a href="javascript:void(0)" onclick="Saharanpur_Ward_TypeSub('${wardNo}','category','Collector'); updateNavBarWithFunctionName('Ward-${wardNo} Road Category : Collector');" style="color: #e63dee;">${responseData.count_collector}</a><br>
                                Arterial - <a href="javascript:void(0)" onclick="Saharanpur_Ward_TypeSub('${wardNo}','category','Arterial'); updateNavBarWithFunctionName('Ward-${wardNo} Road Category : Arterial');" style="color: #e1ca4c;">${responseData.count_arterial}</a><br>
                                Sub Arterial - <a href="javascript:void(0)" onclick="Saharanpur_Ward_TypeSub('${wardNo}','category','Subarterial'); updateNavBarWithFunctionName('Ward-${wardNo} Road Category : Sub Arterial');" style="color: #83e45c;">${responseData.count_subarterial}</a><br>                
                                `
                    }
                ];

               // Append cards to the content div
    wardCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<h4>${card.title}</h4><p>${card.value}</p>`;
        content.appendChild(cardElement);
    });
}

// ---------------------------------- Minimize and Maximize Functions ------------------------------------
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
    //   document.getElementById('showButton').classList.add('show');
}

function summary_table() {
  //  console.log("table-icon clicked");
    const topnav = document.getElementById('topnav');
    const contentWrapper = document.getElementById('content-wrapper');

    document.getElementById('road-filter').style.display = 'none';
    // document.getElementById('drain-filter').style.display = 'none';
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


// function for highlighting table row and click on table then highlight layer--------------//
map.on('singleclick', function (evt) {
    const viewResolution = map.getView().getResolution();
    const projection = map.getView().getProjection();
    const source = currentLayer?.getSource?.();

    // ✅ Case 1: WMS (has getFeatureInfoUrl)
    if (source && typeof source.getFeatureInfoUrl === 'function') {
        const url = source.getFeatureInfoUrl(
            evt.coordinate,
            viewResolution,
            projection,
            { 'INFO_FORMAT': 'application/json' }
        );

        if (url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                  //  console.log('GeoServer Response:', data);
                    if (data.features && data.features.length > 0) {
                        let properties = data.features[0].properties;
                     //   console.log("WMS Feature Properties:", properties);

                        let gisId = properties.gis_id;

                        if (gisId) {
                          //  console.log('Feature ID:', data.features[0].id);
                            highlightTableRowByGISID(gisId);
                            highlightFeatureOnMap(gisId);
                        } else {
                            console.warn('No GIS ID in WMS feature.');
                        }
                    } else {
                        console.warn('No features found in WMS click.');
                    }
                })
                .catch(error => console.error('Error fetching WMS feature info:', error));
        }
    }

    // ✅ Case 2: Vector layer (WFS GeoJSON)
    else {
        let found = false;
        map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
            if (layer === currentLayer) {
                let props = feature.getProperties();
                // ✅ INSERT HERE
              //  console.log("Feature Properties:", props);
                // let gisId = props.gis_id;
                const gisId = props.gis_id || props.gid || props.GIS_ID || null;

                if (!gisId) {
                    console.warn("No associated GIS ID found for selected feature.");
                }

                if (gisId) {
                  //  console.log("Selected feature: ", feature);
                  //  console.log("Feature ID: ", feature.getId());
                  //  console.log("Associated row: ", gisId);

                    highlightTableRowByGISID(gisId);
                    highlightFeatureOnMap(gisId);
                    found = true;
                } else {
                    console.warn('Feature has no GIS ID');
                }
                found = true;
                return true;
            }
        }, { hitTolerance: 5 });

        if (!found) {
            console.warn("No feature selected.");
        }
    }
});

// ----------------- Function to Highlight the Corresponding Table Row
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
                <td>${item.road_id}</td>
                <td>${item.zone_no}</td>
                <td>${item.zone_name}</td>
                <td>${item.ward_no}</td>
                <td>${item.ward_name}</td>
                <td>${item.ownership}</td>              
                <td>${item.category}</td>
                <td>${item.road_name}</td>
                <td>${item.row_meter}</td>
                <td>${item.row_apr}</td>
                <td>${item.carriage_w}</td>
                <td>${item.material}</td>
                <td>${item.length_km ? item.length_km.toFixed(2) : 'N/A'}</td>
                <td>${item.condition}</td>
                <td>${item.yoc}</td>
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
    let wfsUrl = `${GEOSERVER_BASE_URL}/wfs?service=WFS&version=1.1.0&request=GetFeature
        &typename=SNP_Summary:saharanpur_road_net
        &outputFormat=application/json
        &CQL_FILTER=gis_id=${gisId}`;
  //  console.log('Fetching Feature:', wfsUrl);
    fetch(wfsUrl)
        .then(response => response.json())
        .then(data => {
          //  console.log('WFS Response:', data); // :white_check_mark: Debug the response
            if (data.features && data.features.length > 0) {
                let feature = new ol.format.GeoJSON().readFeature(data.features[0], {
                    dataProjection: 'EPSG:4326',
                    featureProjection: map.getView().getProjection()
                });
            //    console.log('Feature to Highlight:', feature); // :white_check_mark: Debug feature
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

//--------------popup code for road----------------------//
function SNN_Road_popup() {
  
    const existingPopup = document.getElementById('popup_road');
    if (existingPopup) {
        existingPopup.remove();  // Remove any old popups
    }

    // Create a popup element
    const popup = document.createElement('div');
    popup.id = 'popup_road';
    popup.style.display = 'none';

    document.body.appendChild(popup);

    // Hide the popup when clicking on the map
        // popup.style.display = 'none';


    // Add a click event listener
    map.on('singleclick', function (event) {

        const viewResolution = map.getView().getResolution();
        const projection = map.getView().getProjection();
        const source = currentLayer?.getSource?.();

        // Check if current layer is WMS (has getFeatureInfoUrl function)
        if (source && typeof source.getFeatureInfoUrl === 'function') {
            const url = source.getFeatureInfoUrl(
                event.coordinate,
                viewResolution,
                projection,
                { 'INFO_FORMAT': 'application/json' }
            );
           	if (url) {
				fetch(url)
				.then(res => res.json())
				.then(data => {
					if (data.features && data.features.length > 0) {
					const properties = data.features[0].properties;
					selectedRoadProperties = properties;
					popup.innerHTML = buildPopupHTML(properties);
					popup.style.display = 'block';
				// Attach close button AFTER HTML loads
					setTimeout(() => {
					const closeBtn = document.getElementById("popupCloseBtn");
					if (closeBtn) {
						closeBtn.onclick = () => popup.style.display = "none";
							}
							}, 0);
						 } else popup.style.display = 'none';
					 })
					.catch(() => popup.style.display = 'none');
						}
					 return;
					}
				// ---------- VECTOR LAYER ----------
					let found = false;
					map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
						if (layer === currentLayer) {
							const properties = feature.getProperties();
							selectedRoadProperties = properties;
							popup.innerHTML = buildPopupHTML(properties);
							popup.style.display = 'block';
						// Attach close button AFTER HTML loads
							setTimeout(() => {
								const closeBtn = document.getElementById("popupCloseBtn");
								if (closeBtn) {
								    closeBtn.onclick = () => popup.style.display = "none";
								        }
								    }, 0);
								found = true;
								return true;
								    }
								});
						if (!found)popup.style.display = 'none';
					});
			    function buildPopupHTML(properties) {
			        return `
					<div style=" position:relative; background: rgb(255 255 255 / 90%); color: rgba(0, 0, 0, 1); padding: 10px 13px; border-radius: 10px;
							            border-left: 4px solid #3772a7ff; box-shadow: 0 2px 10px rgba(240, 235, 235, 0.5); font-family: 'Segoe UI', Roboto, sans-serif; font-size: 14px;
							            line-height: 1.5; max-width: 330px; ">
					<span id="popupCloseBtn" style=" position:absolute; top:6px; right:0px; cursor:pointer;
					                font-size:20px; color:#ff0000; font-weight:bold; ">&times;</span>
								<h3 style="margin-top:0; margin-bottom:8px; font-size:21px; color:brown;
								                  font-weight:900; border-bottom:1px solid #2a6194ff; padding-bottom:4px;">
								           Road Information
								       </h3>
					  <div class="row-line"><strong>Road Id :</strong> ${properties.road_id || 'N/A'}</div>
					  <div class="row-line"><strong>Zone No :</strong> ${properties.zone_no || 'N/A'}</div>
					  <div class="row-line"><strong>Zone Name :</strong> ${properties.zone_name || 'N/A'}</div>
					  <div class="row-line"><strong>Ward No :</strong> ${properties.ward_no || 'N/A'}</div>
					  <div class="row-line"><strong>Ward Name :</strong> ${properties.ward_name || 'N/A'}</div>
					  <div class="row-line"><strong>Right of Way :</strong> ${properties.row_meter || 'N/A'}</div>
					  <div class="row-line"><strong>Carriage Width :</strong> ${properties.carriage_w || 'N/A'}</div>
					  <div class="row-line"><strong>Category :</strong> ${properties.category || 'N/A'}</div>
					  <div class="row-line"><strong>Condition :</strong> ${properties.condition || 'N/A'}</div>
					  <div class="row-line"><strong>Material :</strong> ${properties.material || 'N/A'}</div>
					  <div class="row-line"><strong>Ownership :</strong> ${properties.ownership || 'N/A'}</div>
					  <div class="row-line"><strong>Length (Km) :</strong> ${
					      properties.length_km !== null && properties.length_km !== undefined
					          ? Number(properties.length_km).toFixed(2)
					          : 'N/A'
					  }</div>

					  <div class="row-line"><strong>Road Name :</strong> ${properties.road_name || 'N/A'}</div>
					</div>
					        `;
			    }
			}

function Saharanpur_Road_Length_Count() {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        //  title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_net',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
    SNN_Road_popup();

}


function Saharanpur_Ownership(cqlFilter) {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_own',                                 
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

    SNN_Road_popup();
    //  fetchSNNTypeData();
    updateTable(cqlFilter);
}

function Saharanpur_Material(cqlFilter) {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_mat',                              
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

    SNN_Road_popup();
    //  fetchSNNTypeData();
   updateTable(cqlFilter);
}
function Saharanpur_Types(cqlFilter) {
    removeCurrentLayer(); clearVectorLayers();
    currentLayer = new ol.layer.Image({
        //   title: 'Ward Boundary',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_category',                                                        
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

    SNN_Road_popup();
    // fetchSNNTypeData();
   updateTable(cqlFilter);
}


//--------------------Search bar code--------------------------//
var currentLayer = null;

// $(document).ready(function () {
//    $('#roadNamesDropdown').select2({
// 	    placeholder: "Type road name",
// 	    allowClear: true,
// 	    width: '100%',
// 		});
	
// 			$(document).on('keyup', '.select2-search__field', function () {
// 			    const typedText = $(this).val();
// 			    const selection = $('.select2-selection__rendered');
// 			    if (typedText && typedText.trim() !== '') {
// 			        selection
// 			            .text(typedText)
// 			            .attr('title', typedText)
// 			            .css({
// 			                'font-weight': '700',   // bold
// 			                'color': '#000000'      // black
// 			            });
// 			    } else {
// 			        selection
// 			            .text('Type road name or number')
// 			            .css({
// 			                'font-weight': '400',
// 			                'color': '#666666'
// 			            });
// 			    }
// 			});
//     // Define your WFS parameters
//     var wfsParams = {
//         service: 'WFS',
//         version: '1.1.0',
//         outputFormat: 'application/json',
//         srsName: 'EPSG:4326', // Coordinate system of your data
//         typeName: 'SNP_Summary:saharanpur_road_net',   // Replace with your WFS layer typename
//         url: `${GEOSERVER_BASE_URL}/wfs` // Replace with your WFS server URL
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
//                 width: 4 // Custom line width in pixels
//             })
//         })
//     });
//     map.addLayer(vectorLayer);

//     // Define the URL for the WFS request
//  //  const url = `${GEOSERVER_BASE_URL}/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=SNP_Summary:saharanpur_road_net&outputFormat=application/json`;
//     const url = `${GEOSERVER_BASE_URL}/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=SNP_Summary:saharanpur_road_net&propertyName=road_name&outputFormat=application/json`;

//     // Create the XMLHttpRequest
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     console.time("RoadNameFetch");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 // Parse the JSON response
//                 let response = JSON.parse(xhr.responseText);
//                 console.timeEnd("RoadNameFetch");

//                 // Extract road_name properties from the features, filter out nulls
//                 let roadNames = response.features
//                     .map(feature => feature.properties.road_name)
//                     .filter(roadName => roadName !== null && roadName !== '');

//                 populateDropdown(roadNames);
//                 // Log the road names
//              //   console.log('Road Names:', roadNames);
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
//      //   console.log(fetchUrl);
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
//                     currentLayer = vectorLayer;  // ✅ Set the active layer
//                     SNN_Road_popup();
//                 } else {
//                     console.log('Error:', fetchXhr.responseText);
//                 }
//             }
//         };
//         fetchXhr.send();
//     }
// });


$(document).ready(function () {

  /* -------------------------------
     1. VECTOR SOURCE + LAYER
  -------------------------------- */
  const vectorSource = new ol.source.Vector({
    format: new ol.format.GeoJSON()
  });

  const vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'cyan',
        width: 4
      })
    })
  });

  map.addLayer(vectorLayer);


  /* -------------------------------
     2. SELECT2 – LAZY SEARCH
  -------------------------------- */
  $('#roadNamesDropdown').select2({
    placeholder: "Type road name",
    allowClear: true,
    width: '100%',
    minimumInputLength: 2,   // 🔑 start search after 2 chars

    ajax: {
      delay: 300,            // debounce typing

      transport: function (params, success, failure) {

        const term = params.data.q;
        if (!term || term.trim().length < 2) return;

        console.time("RoadNameFetch");

        const url =
          `${GEOSERVER_BASE_URL}/wfs?` +
          `service=WFS&` +
          `version=1.0.0&` +
          `request=GetFeature&` +
          `typeName=SNP_Summary:saharanpur_road_net&` +
          `propertyName=road_name&` +          // 🔑 no geometry
          `maxFeatures=25&` +                  // 🔑 limit rows
          `CQL_FILTER=road_name ILIKE '%${term}%'&` +
          `outputFormat=application/json`;

        fetch(url)
          .then(res => res.json())
          .then(data => {
            console.timeEnd("RoadNameFetch");

            const names = [...new Set(
              data.features
                .map(f => f.properties.road_name)
                .filter(n => n && n.trim() !== '' && n !== 'NA' && n !== 'N/A')
            )];

            success({
              results: names.map(n => ({ id: n, text: n }))
            });
          })
          .catch(err => failure(err));
      }
    }
  });

  /* -------------------------------
     3. FETCH GEOMETRY AFTER SELECT
  -------------------------------- */
  $('#roadNamesDropdown').on('change', function () {
    const roadName = $(this).val();
    if (roadName) {
      fetchRoadGeometry(roadName);
    }
  });

  /* -------------------------------
     4. FETCH FULL GEOMETRY (ONE ROAD)
  -------------------------------- */
  function fetchRoadGeometry(roadName) {
    const url =
      `${GEOSERVER_BASE_URL}/wfs?` +
      `service=WFS&` +
      `version=1.1.0&` +
      `request=GetFeature&` +
      `typeName=SNP_Summary:saharanpur_road_net&` +
      `outputFormat=application/json&` +
      `srsName=EPSG:4326&` +
      `CQL_FILTER=road_name='${roadName}'`;

    fetch(url)
      .then(res => res.json())
      .then(data => {

        vectorSource.clear();

        const features = new ol.format.GeoJSON().readFeatures(data, {
          featureProjection: 'EPSG:3857'
        });

        vectorSource.addFeatures(features);
        if (features.length > 0) {
          map.getView().fit(vectorSource.getExtent(), {
            padding: [50, 50, 50, 50],
            maxZoom: 18
          });
        }

        // Your popup / highlight logic
        if (typeof SNN_Road_popup === "function") {
          SNN_Road_popup();
        }
      });
  }

});







//--------------------Search bar code end----------------------------//

function Saharanpur_Ward_no(column, value) {
    removeCurrentLayer();
    // clearVectorLayers();

    // Enhanced CQL Filter to capture ward_no with mixed values
    let cqlFilter = `(${column}='${value}' OR ${column} ILIKE '%/${value}' OR ${column} ILIKE '${value}/%' OR ${column} ILIKE '%/${value}/%' OR ${column} ILIKE '${value}')`;

    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debug log

    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_net',
                'CQL_FILTER': cqlFilter,
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });

    currentLayer.setZIndex(10);
    SNN_Road_popup();
    map.addLayer(currentLayer);

    // Fetch data with enhanced logic (pass the same CQL filter)
    fetchSNN_ALLFilteredData(column, value);  // Optional: You can enhance this function too if needed
}

function Saharanpur_Condition_cat(column, value) {
    removeCurrentLayer();
    ///  clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `(${column}='${value}' OR ${column} ILIKE '%/${value}' OR ${column} ILIKE '${value}/%' OR ${column} ILIKE '%/${value}/%' OR ${column} ILIKE '${value}')`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_condition',   // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    // document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('RoadCategory_legend').style.display = 'none';
    // Fetch corresponding data
    fetchSNN_ALLFilteredData(column, value);
}
function Saharanpur_Material_cat(column, value) {
    removeCurrentLayer();
    //  clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `(${column}='${value}' OR ${column} ILIKE '%/${value}' OR ${column} ILIKE '${value}/%' OR ${column} ILIKE '%/${value}/%' OR ${column} ILIKE '${value}')`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_mat',  // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    // document.getElementById('Priority_legend').style.display = 'none';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('RoadCategory_legend').style.display = 'none';

    // Fetch corresponding data
    fetchSNN_ALLFilteredData(column, value);

}

function Saharanpur_Ownership_cat(column, value) {
    removeCurrentLayer();
    //  clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `(${column}='${value}' OR ${column} ILIKE '%/${value}' OR ${column} ILIKE '${value}/%' OR ${column} ILIKE '%/${value}/%' OR ${column} ILIKE '${value}')`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_own',   // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Ownership_legend').style.display = 'block';
    
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('RoadCategory_legend').style.display = 'none';
    // Fetch corresponding data
    fetchSNN_ALLFilteredData(column, value);
}

function Saharanpur_CUS_cat(column, value) {
    removeCurrentLayer();
    // clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `(${column}='${value}' OR ${column} ILIKE '%/${value}' OR ${column} ILIKE '${value}/%' OR ${column} ILIKE '%/${value}/%' OR ${column} ILIKE '${value}')`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_cus',   // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('CUS_legend').style.display = 'block';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    // document.getElementById('Priority_legend').style.display = 'none';
    
    document.getElementById('RoadCategory_legend').style.display = 'none';
    // Fetch corresponding data
    fetchSNN_ALLFilteredData(column, value);
}

function Saharanpur_TypeSub_cat(column, value) {
    removeCurrentLayer();
    // clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `(${column}='${value}' OR ${column} ILIKE '%/${value}' OR ${column} ILIKE '${value}/%' OR ${column} ILIKE '%/${value}/%' OR ${column} ILIKE '${value}')`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_category',   // Same layer for all filters
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('RoadCategory_legend').style.display = 'block';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('Material_legend').style.display = 'none';
    // document.getElementById('Priority_legend').style.display = 'none';
    
    // Fetch corresponding data
    fetchSNN_ALLFilteredData(column, value);
}
// Function to fetch data dynamically based on column and value
function fetchSNN_ALLFilteredData(column, value) {
    fetch(`${BASE_URL}/getData?column=${column}&value=${value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    })
        .then(response => response.json())
        .then(responseData => {
          //  console.log("Full API Response:", responseData); // :mag: Debugging
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
    document.getElementById('Condition_legend').addEventListener('click', showlegend);
    document.getElementById('Material_legend').addEventListener('click', showlegend);
    document.getElementById('Ownership_legend').addEventListener('click', showlegend);
    document.getElementById('CUS_legend').addEventListener('click', showlegend);
    document.getElementById('RoadCategory_legend').addEventListener('click', showlegend);

    function showlegend() {

        //  var legendBtn = document.getElementById('legendBtn');
        legendBtn.style.display = 'block';
        legendBtn.style.bottom = '20%';
        legendBtn.style.left = '1%'; // Example of additional style
        legendBtn.style.Color = 'color'; // Example of additional style
    }
}

//---------------------------------------------------Wardwise new code---------------------------------//
function Saharanpur_Ward_Condition(ward_no, column, value) {
    removeCurrentLayer();
    //  clearVectorLayers();

    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "category", "material", "ownership", "cus",];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `(ward_no='${ward_no}' OR ward_no ILIKE '%/${ward_no}' OR ward_no ILIKE '${ward_no}/%' OR ward_no ILIKE '%/${ward_no}/%' OR ward_no ILIKE '${ward_no}') AND ${column}='${value}'`;

    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_condition', // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'none';
    
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'block';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('RoadCategory_legend').style.display = 'none';

    // Fetch corresponding data
    fetchSNNWardFilteredData(ward_no, column, value);
}
function Saharanpur_Ward_Material(ward_no, column, value) {
    removeCurrentLayer();
    // clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "category", "material", "ownership", "cus"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `(ward_no='${ward_no}' OR ward_no ILIKE '%/${ward_no}' OR ward_no ILIKE '${ward_no}/%' OR ward_no ILIKE '%/${ward_no}/%' OR ward_no ILIKE '${ward_no}') AND ${column}='${value}'`;

    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_mat',   // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'block';
    
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('RoadCategory_legend').style.display = 'none';

    // Fetch corresponding data
    fetchSNNWardFilteredData(ward_no, column, value);
}

function Saharanpur_Ward_Ownership(ward_no, column, value) {
    removeCurrentLayer();
    //  clearVectorLayers();

    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "category", "material", "ownership", "cus"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `(ward_no='${ward_no}' OR ward_no ILIKE '%/${ward_no}' OR ward_no ILIKE '${ward_no}/%' OR ward_no ILIKE '%/${ward_no}/%' OR ward_no ILIKE '${ward_no}') AND ${column}='${value}'`;

    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            crossOrigin: 'anonymous', // ✅ REQUIRED!
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_own',   // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })

    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    document.getElementById('Material_legend').style.display = 'none';
    
    document.getElementById('Ownership_legend').style.display = 'block';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('RoadCategory_legend').style.display = 'none';

    // Fetch corresponding data
    fetchSNNWardFilteredData(ward_no, column, value);
}
function Saharanpur_Ward_CUS(ward_no, column, value) {
    removeCurrentLayer();
    // clearVectorLayers();

    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "category", "material", "ownership", "cus","cus_class"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `(ward_no='${ward_no}' OR ward_no ILIKE '%/${ward_no}' OR ward_no ILIKE '${ward_no}/%' OR ward_no ILIKE '%/${ward_no}/%' OR ward_no ILIKE '${ward_no}') AND ${column}='${value}'`;

    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_cus',   // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    // Showlegend
    document.getElementById('Material_legend').style.display = 'none';   
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('CUS_legend').style.display = 'block';
    document.getElementById('RoadCategory_legend').style.display = 'none';

    // Fetch corresponding data
    fetchSNNWardFilteredData(ward_no, column, value);
}
function Saharanpur_Ward_TypeSub(ward_no, column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Ensure column is valid to prevent errors
    let validColumns = ["condition", "category", "material", "ownership", "cus"];
    if (!validColumns.includes(column)) {
        console.error(`Invalid column: ${column}`);
        return;
    }
    // Define dynamic CQL filter for Zone + Column + Value
    let cqlFilter = `(ward_no='${ward_no}' OR ward_no ILIKE '%/${ward_no}' OR ward_no ILIKE '${ward_no}/%' OR ward_no ILIKE '%/${ward_no}/%' OR ward_no ILIKE '${ward_no}') AND ${column}='${value}'`;
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: {
                'LAYERS': 'SNP_Summary:saharanpur_road_category',   // Main layer for filtering
                'CQL_FILTER': cqlFilter, // Apply dynamic filtering
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver',
            crossOrigin: "anonymous"
        })
    });
    currentLayer.setZIndex(10); // Ensure it is displayed on top
    SNN_Road_popup();
    map.addLayer(currentLayer);
    // Showlegend
    document.getElementById('Material_legend').style.display = 'none';
    
    document.getElementById('Ownership_legend').style.display = 'none';
    document.getElementById('Condition_legend').style.display = 'none';
    document.getElementById('CUS_legend').style.display = 'none';
    document.getElementById('RoadCategory_legend').style.display = 'block';
    // Fetch corresponding data
    fetchSNNWardFilteredData(ward_no, column, value);
}


// Function to fetch data dynamically based on Zone, Column, and Value
function fetchSNNWardFilteredData(ward_no, column, value) {
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
        //    console.log(`Received data for ${ward_no}, ${column}=${value}:`, responseData);
            console.log('Received data for ${ward_no}, ${column}=${value}');

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

//------------------download map and excel------------------------//

// document.querySelectorAll(".fa-print").forEach(printBtn => {
//     printBtn.addEventListener("click", () => {
//         // Determine which table this print button belongs to
//         const container = printBtn.closest('div[id^="tableContainer_summary"]');
//         const table = container?.querySelector("table");

//         if (!table || table.rows.length === 0) {
//             alert("No data in table. Please apply a filter first.");
//             return;
//         }

//         // Export to Excel
//         const wb = XLSX.utils.book_new();
//         const ws = XLSX.utils.table_to_sheet(table);
//         XLSX.utils.book_append_sheet(wb, ws, "FilteredData");
//         XLSX.writeFile(wb, `Filtered_Table_${Date.now()}.xlsx`);

//         // Print Map (optional)
//         window.print();
//     });
// });

let currentZoneLayer = null; // Store the current layer


function highlightZoneBoundary(geojson) {
    removeCurrentLayer();
    clearVectorLayers();
    const format = new ol.format.GeoJSON();
    const feature = format.readFeature(geojson, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    const vectorSource = new ol.source.Vector({
        features: [feature]
    });

    currentZoneLayer = new ol.layer.Vector({ // Store the new layer
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'yellowgreen',
                width: 4
            }),
            // fill: new ol.style.Fill({
            //     color: 'rgba(255, 0, 0, 0.2)'
            // })
        })
    });

    map.addLayer(currentZoneLayer);

    // Zoom to the feature
    const extent = vectorSource.getExtent();
    map.getView().fit(extent, { duration: 1000, padding: [50, 50, 50, 50] });
}

//--------------------------------------------------summary filter code-------------------------------------//

document.addEventListener('DOMContentLoaded', () => {
    // Initialize dropdown only for wards since zone is no longer relevant
    initializeDropdown('wardSelect', '/getWards', 'ward_no');

    // Event listener for ward selection (no zone selection involved here)
    document.getElementById('wardSelect').addEventListener('change', (e) => {
        const selectedWard = e.target.value;
        selectedFilters.ward = selectedWard;  // Store selected ward
        selectedFilters.zone = null; // Reset zone as we no longer need it
        updateMapAndTable();  // Update the map and table based on the selected ward
    });

    // Filtering logic for other dropdowns
    const filters = ['ownership', 'type', 'material'];
    filters.forEach(filter => {
        document.querySelector(`.${filter}-dropdown`).addEventListener('change', (e) => {
            selectedFilters[filter] = e.target.value;
            updateMapAndTable();
        });
    });
});

const selectedFilters = { zone: null, ward: null, ownership: null, type: null, material: null };

function initializeDropdown(dropdownId, endpoint, key) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.innerHTML = `<option value="">Select ${key.replace('_', ' ')}</option>`;

    fetch(`${BASE_URL}${endpoint}`)
        .then(res => res.json())
        .then(data => {
            if (data.status && data.data.length) {
                data.data.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item[key];
                    option.textContent = item[key];
                    dropdown.appendChild(option);
                });
            }
        })
        .catch(err => console.error('Error fetching dropdown data:', err));
}

function updateMapAndTable() {
    let filterConditions = [];

    // Apply filter for ward selection (zone is not used anymore)
    if (selectedFilters.ward) filterConditions.push(`ward_no='${selectedFilters.ward}'`);
    if (selectedFilters.ownership) filterConditions.push(`ownership='${selectedFilters.ownership}'`);
    if (selectedFilters.type) filterConditions.push(`category='${selectedFilters.type}'`);
    if (selectedFilters.material) filterConditions.push(`material='${selectedFilters.material}'`);

    const cqlFilter = filterConditions.join(' AND ');

    const layer = determineLayer();
    updateMapLayer(layer, cqlFilter);
    updateTable(layer, cqlFilter);
}

function determineLayer() {
    if (selectedFilters.material) {
        return 'SNP_Summary:saharanpur_road_mat';
    } else if (selectedFilters.type) {
        return 'SNP_Summary:saharanpur_road_category';
    } else if (selectedFilters.ownership) {
        return 'SNP_Summary:saharanpur_road_own';
    }
    return 'SNP_Summary:saharanpur_road_category';
}

function updateMapLayer(layer, cqlFilter) {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
            params: { 'LAYERS': layer, 'CQL_FILTER': cqlFilter },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
}

function updateTable(layer, cqlFilter) {
    const tableBody = document.getElementById('dataBody_summaryfilter');
    tableBody.innerHTML = '';

    fetch(`${GEOSERVER_BASE_URL}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${layer}&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`)
        .then(res => res.json())
        .then(geojson => {
            if (geojson.features.length > 0) {
                geojson.features.forEach(({ properties }) => {
                    tableBody.insertAdjacentHTML('beforeend', `
                        <tr>
                            <td>${properties.gis_id}</td>
                            <td>${properties.road_id}</td>
                            <td>${properties.ward_no || 'N/A'}</td>
                            <td>${properties.ward_name || 'N/A'}</td>
                            <td>${properties.ownership || 'N/A'}</td>
                            <td>${properties.category || 'N/A'}</td>
                            <td>${properties.road_name || 'N/A'}</td>
                            <td>${properties.row_meter || 'N/A'}</td>
                            <td>${properties.row_apr || 'N/A'}</td>
                            <td>${properties.carriage_w || 'N/A'}</td>
                            <td>${properties.material || 'N/A'}</td>
                            <td>${properties.length_km ? properties.length_km.toFixed(2) : 'N/A'}</td>
                            <td>${properties.condition || 'N/A'}</td>
                            <td>${properties.yoc || 'N/A'}</td>
                            <td>${properties.cus || 'N/A'}</td>
                        </tr>`);
                });
            } else {
                tableBody.innerHTML = '<tr><td colspan="16">No data available</td></tr>';
            }
        })
        .catch(err => console.error('Error fetching WFS data:', err));
}

function showSelectedRoadsLayer1() {
    alert("Data not available");
}


let isPrinting = false;
let originalCenter = null;
let originalResolution = null;
const downloadMapandExcel = document.querySelector(".fa-print");

downloadMapandExcel.addEventListener("click", () => {
  if (isPrinting) return;
  isPrinting = true;

  const table = document.getElementById('dataTable_summary');
  document.body.classList.add("print-mode");
  if (!table || table.rows.length === 0) {
    alert("No data in table. Please apply a filter first.");
    document.body.classList.remove("print-mode");
    isPrinting = false;
    return;
  }
  // Excel export
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.table_to_sheet(table);
  XLSX.utils.book_append_sheet(wb, ws, "FilteredData");
  XLSX.writeFile(wb, `Filtered_Table_${Date.now()}.xlsx`);

  setTimeout(() => {
    map.updateSize();
    const view = map.getView();

    // ✅ ALWAYS capture ORIGINAL state first
    originalCenter = view.getCenter().slice();
    originalResolution = view.getResolution();
    // ---- PRINT-ONLY ADJUSTMENT ----
    const pixelShift = 250;      // tune once
    const zoomFactor = 0.9;
    const shiftInMapUnits = pixelShift * originalResolution;
    view.setCenter([
      originalCenter[0] + shiftInMapUnits,
      originalCenter[1]
    ]);

    view.setResolution(originalResolution * zoomFactor);
  }, 100);

  setTimeout(() => {
    window.print();
  }, 200);
});

function restoreMap() {
  if (!isPrinting) return;
  document.body.classList.remove("print-mode");
  const view = map.getView();
  if (originalCenter && originalResolution) {
    view.setCenter(originalCenter);
    view.setResolution(originalResolution);
  }
  map.updateSize();
  // reset flags
  originalCenter = null;
  originalResolution = null;
  isPrinting = false;
}

window.addEventListener("afterprint", restoreMap);
// fallback (Chrome safety)
setInterval(() => {
  if (isPrinting && !document.body.classList.contains("print-mode")) {
    restoreMap();
  }
}, 1000);
