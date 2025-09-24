const BASE_URL = "http://192.168.255.117:8385/Gorakhpur";



//---------------------- header section start --------------------------//

var map, geojson, featureOverlay, overlays, style;
var selected, features, layer_name, layerControl;
var content;
var selectedFeature;
// const london = fromLonLat([-0.12755, 51.507222]);

var view = new ol.View({
    projection: "EPSG:4326",
    center: [81.90897117261671,25.39670373934612],
    zoom: 11,
});

// var view_ov = new ol.View({
//     projection: "EPSG:4326",
//     center: [28.55, 77.65],
//     zoom: 9,
// });

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

// var overview = new ol.control.OverviewMap({
//   view: view_ov,
//   collapseLabel: "o",
//   label: "o",
//   layers: [OSM],
// });
// map.addControl(overview);

var zone_boundary = new ol.layer.Image({
    title: "Prayagraj Zone Boundary",
    //  extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: "http://localhost:8080/geoserver/All_NN_Boundaries/wms?",
        params: {
            LAYERS: "All_NN_Boundaries:Prayagraj_ward_boundary",
        },
        ratio: 1,
        serverType: "geoserver",
    }),
});
//overlays.getLayers().push(LNN_Boundary);
//map.addLayer(zone_boundary);

var ward_boundary = new ol.layer.Image({
    title: "Prayagraj Ward Boundary",
    //  extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: "http://localhost:8080/geoserver/All_NN_Boundaries/wms?",
        params: {
            LAYERS: "All_NN_Boundaries:Prayagraj_ward_boundary",
        },
        ratio: 1,
        serverType: "geoserver",
    }),
});
//overlays.getLayers().push(LNN_Boundary);
map.addLayer(ward_boundary);


/*----------------------------------------- javascript for sidebar----------------------------------------- */
//-----------------table Cancel btn----------------------------//
// document.querySelectorAll('.table-cancel-btn').forEach(function (element) {
//     element.addEventListener('click', function () {
//         document.getElementById('tableContainer').style.display = 'none';
//         document.getElementById('Scoreing_tableContainer').style.display = 'none';
//         document.getElementById('tableContainer_Drain').style.display = 'none';
//         document.getElementById('tableContainer_Road_Age').style.display = 'none';

//         const legendBtn = document.getElementById('legendBtn');
//         legendBtn.style.bottom = '3%';
//         const Materiallegend = document.getElementById('Material_legend');
//         Materiallegend.style.top = '70%';
//         const Conditionlegend = document.getElementById('Condition_legend');
//         Conditionlegend.style.top = '70%';
//         const Typelegend = document.getElementById('type_legend');
//         Typelegend.style.top = '70%';
//         const typemajorlegend = document.getElementById('type_legend_major');
//         typemajorlegend.style.top = '70%';
//         const Ownerlegend = document.getElementById('Ownership_legend');
//         Ownerlegend.style.top = '70%';
//         const CUSlegend = document.getElementById('Under_Scheme_legend');
//         CUSlegend.style.top = '70%';
//         const Prioritylegend = document.getElementById('Priority_legend');
//         Prioritylegend.style.top = '70%';
//         const RoadAgelegend = document.getElementById('Road_Age_legend');
//         RoadAgelegend.style.top = '70%';
//     });
// });

//-------------------------end code of Cancel btn-----------------------//

// const hamburger = document.querySelector(".hamburger");
// const sidebar = document.querySelector(".sidebar");
// const cancelIcon = document.querySelector(".cancel-icon");

// hamburger.addEventListener("click", () => {
//     sidebar.classList.add("show");
// });

// cancelIcon.addEventListener("click", () => {
//     sidebar.classList.remove("show");
// });

// document.querySelectorAll('.tab-cancel-icon').forEach(function (element) {
//     element.addEventListener('click', function () {
//         document.getElementById('query_tab').style.display = 'none';
//         document.getElementById('measure-tab').style.display = 'none';
//         document.getElementById('street-tab').style.display = 'none';
//     });
// });


//---------------------------- query panel ---------------------//
// function query_panel1() {
//     var x = document.getElementById("query_tab");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

//-------------- zone wise road filter start-----------------//
// function road_filter() {
//     const roadFilter = document.getElementById('road-filter');
//     roadFilter.style.display = roadFilter.style.display === 'block' ? 'none' : 'block';
// }
//-------------- drain filter --------------------------//
// function drain_filter() {
//     const drainFilter = document.getElementById('drain-filter');
//     drainFilter.style.display = drainFilter.style.display === 'block' ? 'none' : 'block';
// }

//------------------ charts and data ---------------------//
function data_analysis() {
    window.open('https://lookerstudio.google.com/reporting/805db749-83e9-4abe-8901-c49dd431864e', '_blank'); // Open Google in a new tab
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
//     const filters = ['road-filter', 'drain-filter']; // List of filter IDs
  
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



var currentLayer = null;

function removeCurrentLayer() {
    if (currentLayer) {  // Check if there's a current layer on the map
        map.removeLayer(currentLayer);  // Remove the current layer from the map
        currentLayer = null;  // Reset the currentLayer variable
    }
}


//-------------------------------street viewpoints -----------------------------------------//
//var popupContainer = document.getElementById("popup_1");
// var popup = new ol.Overlay({
//     element: document.getElementById('popup'),
//     positioning: 'bottom-center',
//     stopEvent: false,
//     offset: [0, -20],
// });
// map.addOverlay(popup);
// var container = document.getElementById('popup');

// function street_view() {
//     // Remove any existing layer
//  //   removeCurrentLayer();

//     // Create the new WMS layer
//     currentLayer = new ol.layer.Image({
//         title: 'LNN View points',
//         source: new ol.source.ImageWMS({
//             url: 'http://localhost:8080/geoserver/GPNN_DB/wms?',
//             params: {
//                 'LAYERS': 'GPNN_DB:gorakhpur_points0',
//             },
//             ratio: 1,
//             serverType: 'geoserver'
//         })
//     });

//     // Add the new layer to the map
//     map.addLayer(currentLayer);

//     // Define the popup container
//     var container = document.getElementById('popup');

//     // Set up click event handler
//     map.on('singleclick', function (evt) {
//         var viewResolution = map.getView().getResolution();
//         var url = currentLayer.getSource().getFeatureInfoUrl(
//             evt.coordinate, viewResolution, 'EPSG:4326', {
//             'INFO_FORMAT': 'text/html'
//         });

//         console.log('Feature Info URL:', url); // Log the URL for debugging

//         if (url) {
//             $.get(url)
//                 .done(function (data) {
//                     console.log('Feature Info Response:', data); // Log the response for debugging

//                     var contentHtml = '<h6>Street View and Road Images</h6>';
//                     var parsedData = $(data);

//                     // Initialize variables to store URLs
//                     var streetViewUrl = '';
//                     var imageUrl = '';

//                     // Find the correct <td> elements containing the URLs
//                     parsedData.find('td').each(function () {
//                         var text = $(this).text().trim();
//                         if (text.startsWith('http://maps.google.com') || text.startsWith('https://maps.google.com') || text.startsWith('https://www.google.com')) {
//                             streetViewUrl = text;
//                         }
//                         if (text.startsWith('https://drive.google.com')) {
//                             imageUrl = text;
//                         }
//                     });

//                     console.log("street_view_url:", streetViewUrl);
//                     console.log("image_url:", imageUrl);

//                     // Build popup content with icons
//                     if (streetViewUrl || imageUrl) {
//                         contentHtml += '<div class="icons-container">';

//                         if (streetViewUrl) {
//                             contentHtml += '<button class="icon-button" onclick="window.open(\'' + streetViewUrl + '\', \'_blank\')">' +
//                                 '<img src="image_path/google-maps.png" alt="Street View" class="icon-img"></button>';
//                         }
//                         if (imageUrl) {
//                             contentHtml += '<button class="icon-button" onclick="window.open(\'' + imageUrl + '\', \'_blank\')">' +
//                                 '<img src="image_path/image-files.png" alt="Image" class="icon-img"></button>';
//                         }

//                         contentHtml += '</div>';
//                     } else {
//                         contentHtml += '<p>No information available for this point.</p>';
//                     }

//                     // Display the popup at the clicked coordinate
//                     popup.setPosition(evt.coordinate);
//                     popup.getElement().innerHTML = contentHtml; // Set popup content
//                     container.style.display = 'block'; // Ensure the popup is visible
//                 })
//                 .fail(function (jqXHR, textStatus, errorThrown) {
//                     console.error('Error fetching feature info:', textStatus, errorThrown);
//                     popup.setPosition(evt.coordinate);
//                     popup.getElement().innerHTML = '<p>Failed to fetch feature info.</p>'; // Display error message
//                     container.style.display = 'block'; // Ensure the popup is visible
//                 });
//         } else {
//             console.error('No URL returned for WMS GetFeatureInfo request.');
//         }
//     });
// }


// ------------------------------for clear any layers------------------------------------------
document.getElementById('clear-icon').onclick = clearAllVectorLayers;

function clearAllVectorLayers() {
    // Iterate through all layers on the map
    map.getLayers().getArray().forEach(layer => {
        if (layer instanceof ol.layer.Vector) {
            layer.getSource().clear(); // Clear all features from this vector layer
        }
    });

    // document.getElementById("tableContainer").style.display = "none";
    // document.getElementById("tableContainer_Road_Age").style.display = "none";
    // document.getElementById("Scoreing_tableContainer").style.display = "none";
    // document.getElementById("tableContainer_Drain").style.display = "none";

    const legendBtn = document.getElementById('legendBtn');
    legendBtn.style.bottom = '3%';

    map.getLayers().getArray().slice().forEach(layer => {
        if ((layer instanceof ol.layer.Tile || layer instanceof ol.layer.Image) &&
            (layer.getSource() instanceof ol.source.TileWMS || layer.getSource() instanceof ol.source.ImageWMS)) {

            // Check if the layer is not the zone_boundary layer
            if (layer.get('title') !== 'Prayagraj Zone Boundary' && layer.get('title') !== 'Prayagraj Ward Boundary') {
                map.removeLayer(layer);  // Remove GeoServer WMS layers
            }
        }
    });
}


// // -------------------------Search bar Code---------------------------//
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
//         typeName: '	GPNN_DB:gpnn_roads', // Replace with your WFS layer typename
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
//     const url = 'http://localhost:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=	GPNN_DB:gpnn_roads&outputFormat=application/json';

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
// const dataTableBody = document.getElementById('dataBody');
// const dataTableBody_summary = document.getElementById('dataBody_summary');
// const dataTableBody_Drain = document.getElementById('dataBody_Drain');
// const dataTableBody_Road_Age = document.getElementById('dataBody_Road_Age');

// const dataTableBody_Scoring = document.getElementById('dataBody_Scoring');




//------------------------------------------------------ clear vector layer ------------------------------------------------------------//
// function clearVectorLayers() {
//     // Create an array to hold layers that you want to preserve
//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     // Clear overlays
// }


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
                color: '#831147',
                width: 3
            })
        })
    });
    map.addLayer(vectorLayer);
}

// function addMultilinestringFeatureFromWKT_parkRoad(wktString) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: 'yellowgreen',

//                 width: 3
//             })
//         })
//     });
//     map.addLayer(vectorLayer);
// }

// function addMultilinestringFeatureFromWKT_EduRoad(wktString) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: '#5c62d6',
//                 width: 3
//             })
//         })
//     });
//     map.addLayer(vectorLayer);
// }
// function addMultilinestringFeatureFromWKT_HospitalRoad(wktString) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: 'yellowgreen',
//                 width: 3
//             })
//         })
//     });
//     map.addLayer(vectorLayer);
// }
// function addMultilinestringFeatureFromWKT_HotelRoad(wktString) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: 'darkblue',
//                 width: 4
//             })
//         })
//     });
//     map.addLayer(vectorLayer);
// }

// //-------------------- Function to add MULTILINESTRING feature to the map from WKT format
// function addMultilinestringFeatureFromWKT_Drain(wktString) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: '#ff0000',
//                 width: 3
//             })
//         })
//     });
//     map.addLayer(vectorLayer);
// }

// function addMultilinestringFeatureFromWKT_Ward(wktString) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: 'red',
//                 width: 3
//             })
//         })
//     });


//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }
// function addMultilinestringFeatureFromWKT_cus(wktString, cus) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });


//     let color;
//     switch (cus) {
//         case '13th Finance':
//             color = '#5b46d2'; break;
//         case '14th Finance':
//             color = '#ba6209'; break;
//         case '15th Finance':
//             color = '#8a1515';
//             break;
//         case 'Nagar Nigam Nidhi':
//             color = '#c3ec47';
//             break;
//         default:
//             color = '#ce37d3';
//     }
//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });
//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });


//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }
// function addMultilinestringFeatureFromWKT_type(wktString, type) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on type
//     let color;
//     switch (type) {
//         case 'Arterial':
//             color = 'blue';
//             break;
//         case 'Urban Express Way':
//             color = 'purple';
//             break;
//         case 'Major':
//             color = 'blue';
//             break;
//         case 'Minor':
//             color = 'yellow';
//             break;
//         case 'Local Street':
//             color = 'yellow';
//             break;
//         case 'Sub Arterial':
//             color = 'cyan';
//             break;
//         case 'Collectors':
//             color = 'lightgreen';
//             break;
//         default:
//             color = 'magenta'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });
    
//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }

// function addMultilinestringFeatureFromWKT_Zone(wktString, zone_no) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on type
//     let color;
//     switch (zone_no) {
//         case '1':
//             color = 'blue';
//             break;
//         case '2':
//             color = 'yellow';
//             break;
//         case '3':
//             color = 'cyan';
//             break;
//         default:
//             color = 'magenta'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });

   
//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }
// function addMultilinestringFeatureFromWKT_condition(wktString, condition) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on Condition
//     let color;
//     switch (condition) {
//         case 'Green':
//             color = 'green';
//             break;
//         case 'Yellow':
//             color = 'yellow';
//             break;
//         case 'Red':
//             color = 'red';
//             break;
//         default:
//             color = 'blue'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });

    
//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }

// function addMultilinestringFeatureFromWKT_Year(wktString, year) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on Condition
//     let color;
//     switch (year) {
//         case 'Less Than 3':
//             color = '#bd480e';
//             break;
//         case 'More Than 3':
//             color = '#FFC300';
//             break;
//         // case 'Red':
//         //     color = 'red';
//         //     break;
//         default:
//             color = 'blue'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });


//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }


// function addMultilinestringFeatureFromWKT_bear(wktString) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Set a dark color and thick width
//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: '#1325A6', // Dark color (almost black)
//                 width: 10 // Thick stroke width
//             })
//         })
//     });


//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
    
// }



// function addMultilinestringFeatureFromWKT_material(wktString, carriage_m) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on Material
//     let color;
//     switch (carriage_m) {
//         case 'Bitumen':
//             color = 'darkred';
//             break;
//         case 'CC':
//             color = '#1ad7b0';
//             break;
//         case 'Interlocking':
//             color = '#2392ed';
//             break;
//         case 'Kachcha':
//             color = '#6036d0';
//             break;
//         case 'BOE':
//             color = '#da6076';
//             break;

//         default:
//             color = '#2336d0'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });

//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }


// function addMultilinestringFeatureFromWKT_ownership(wktString, ownership) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on Material
//     let color;
//     switch (ownership) {
//         case 'NHAI':
//             color = 'BLUE';
//             break;
//         case 'LNN':
//             color = 'CYAN';
//             break;
//         case 'PWD':
//             color = 'OLIVE';
//             break;
//         case 'PRIVAT ROAD':
//             color = 'RED';
//             break;
//         // case 'Railwa':
//         //     color = 'yellow';
//         //     break;
//         case 'LDA':
//             color = 'orange';
//             break;
//         default:
//             color = '#831042'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });

//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }
// function addMultilinestringFeatureFromWKT_priority(wktString, priority) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on priority
//     let color;
//     switch (priority) {
//         case 'Priority 1':
//             color = 'magenta';
//             break;
//         case 'Priority 2':
//             color = 'yellow';
//             break;
//         case 'Not Eligible':
//             color = 'darkblue';
//             break;
//         default:
//             color = 'black'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });

//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }


//---------------All Drains-------------------------//


// ShowDrainage.addEventListener('click', function () {

//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Drain_LNN`, {
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
//             console.log('getting all data');

//             // Clear existing table rows
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//             <td>${item.gid}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>                         
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>                       
//             <td>${item.type}</td>
//             <td>${item.status}</td>
//             <td>${item.material}</td>
//             <td>${item.length}</td>
//             <td>${item.condition}</td>
//             <td>${item.const_year}</td>
//             <td>${item.width}</td>
//             <td>${item.depth}</td>
           


//             <!-- Add more table data cells as needed -->
//         `;
//                     dataTableBody_Drain.appendChild(row);

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         addMultilinestringFeatureFromWKT_Drain(item.geom_wkt);
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
//         if (live_legend_legend.style.display === 'none') {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//         } else {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//         }
//     });

  

// });

//-------------------------------------All Priority P1-----------------------------//

// Function to add a multiline string feature with priority styling
// function addMultilinestringFeatureFromWKT_priorityL(wktString, priority) {
//     const format = new ol.format.WKT();
//     const feature = format.readFeature(wktString, {
//         dataProjection: 'EPSG:4326',
//         featureProjection: 'EPSG:4326'
//     });

//     // Determine color based on priority  
//     let color;
//     switch (priority) {
//         case 'Priority 1':
//             color = 'magenta';
//             break;
//         case 'Priority 2':
//             color = 'yellow';
//             break;
//         case 'Not Eligible':
//             color = 'darkblue';
//             break;
//         default:
//             color = 'black'; // Default color
//     }

//     const vectorSource = new ol.source.Vector({
//         features: [feature]
//     });

//     const vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             stroke: new ol.style.Stroke({
//                 color: color,
//                 width: 3
//             })
//         })
//     });

//     // Assign a unique ID to the feature using its GIS ID
//     const featureId = `feature-${Math.random().toString(36).substr(2, 9)}`;
//     feature.setId(featureId);

//     map.addLayer(vectorLayer);

//     return feature;
// }


// // Define the style for the highlighted road feature
// const highlightedStyle = new ol.style.Style({
//     stroke: new ol.style.Stroke({
//         color: 'blue',  // Highlight color
//         width: 7        // Stroke width for visibility
//     })
// });

// // Store the previously highlighted feature and layer for resetting the highlight
// let previouslyHighlightedFeature = null;
// let previouslyHighlightedLayer = null;

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

// // Function to highlight and scroll to the clicked table row
// function highlightAndScrollToRow(row) {
//     console.log("Highlighting and scrolling to row: ", row);

//     // Remove highlight class from all rows
//     Array.from(dataTableBody_Scoring.querySelectorAll('tr')).forEach(tr => {
//         tr.classList.remove('highlighted');
//     });

//      // Remove highlight class from all rows
//      Array.from(dataTableBody_Road_Age.querySelectorAll('tr')).forEach(tr => {
//         tr.classList.remove('highlighted');
//     });

//      // Remove highlight class from all rows
//      Array.from(dataTableBody.querySelectorAll('tr')).forEach(tr => {
//         tr.classList.remove('highlighted');
//     })

    

//     // Add highlight class to the clicked row
//     row.classList.add('highlighted');

//     // Scroll the row into view with smooth scrolling behavior
//     row.scrollIntoView({
//         behavior: 'smooth',  // Smooth scrolling
//         block: 'center',     // Center the row in the view
//         inline: 'nearest'    // Nearest inline
//     });

//     console.log("Row scrolled into view.");
// }

// // Add CSS to highlight the row
// const styleElement = document.createElement('style');
// styleElement.innerHTML = `
//     tr.highlighted {
//         background-color: yellow !important;
//         color: black !important;
//         z-index: 2001;
//     }
// `;
// document.head.appendChild(styleElement);

// // Create a map to associate features with table rows
// const featureToRowMap = new Map();

// // Add interaction for clicking on road features
// const selectInteraction = new ol.interaction.Select({
//     condition: ol.events.condition.click,
//     layers: layer => layer instanceof ol.layer.Vector,
//     // style: null
    
// });

// map.addInteraction(selectInteraction);

// // Highlight table row on road feature click and scroll to it
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

// // P1 Event Listener for fetching and displaying Priority 1 data
// P1.addEventListener('click', function () {
//     // Clear vector layers that aren't preserved
//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });

//     // Clear overlays
//     map.getOverlays().clear();

//     // Fetch priority data
//     fetch(`${BASE_URL}/getPriorityLko?priority=Priority 1`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({})
//     })
//     .then(response => response.json())
//     .then(responseData => {
//         console.log('Received data:', responseData);

//         dataTableBody_Scoring.innerHTML = '';  // Clear table
//         featureToRowMap.clear();  // Clear feature-row mapping

//         if (Array.isArray(responseData.data)) {
//             responseData.data.forEach(item => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${item.gis_id}</td>
//                     <td>${item.zone_no}</td>
//                     <td>${item.ward_no}</td>                         
//                     <td>${item.road_name}</td>
//                     <td>${item.row_meter}</td>
//                     <td>${item.length_km}</td>
//                     <td>${item.condition}</td>
//                     <td>${item.total_scor}</td>
//                     <td>${item.priority}</td>
//                 `;

//                 dataTableBody_Scoring.appendChild(row);

//                 // Add click event to zoom to the road when the row is clicked
//                 row.addEventListener('click', function () {
//                     if (item.geom_wkt) {
//                         zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                         highlightAndScrollToRow(row);      // Highlight the clicked row
//                     }
//                 });

//                 // Add feature to the map and associate it with the row
//                 if (item.geom_wkt) {
//                     const feature = addMultilinestringFeatureFromWKT_priorityL(item.geom_wkt, item.priority);

//                     const featureId = feature.getId();
//                     featureToRowMap.set(featureId, row);
//                 }
//             });
//         } else {
//             console.error('Expected array but received:', responseData.data);
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

//     // Toggle priority legend display
//     if (Priority_legend.style.display === 'none') {
//         type_legend.style.display = 'none';
//         Priority_legend.style.display = 'none';
//         Condition_legend.style.display = 'none';
//         Material_legend.style.display = 'none';
//         Ownership_legend.style.display = 'none';
//     } else {
//         type_legend.style.display = 'none';
//         live_legend.style.display = 'none';
//         Condition_legend.style.display = 'none';
//         Material_legend.style.display = 'none';
//         Ownership_legend.style.display = 'none';
//         Priority_legend.style.display = 'none';
//     }
// });





//-------------------------------------All Priority P2-----------------------------//
// P2.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getPriorityLko?priority=Priority 2`, {
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
//             featureToRowMap.clear(); // Clear feature-to-row map


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//           <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
          
//             <td>${item.ward_no}</td>                         
           
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
           
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
           
//             <td>${item.total_scor}</td>
           
           
//             <td>${item.priority}</td>
//             <!-- Add more table data cells as needed -->
//         `;
//                     dataTableBody_Scoring.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt); // Zoom to road
//                             highlightAndScrollToRow(row);     // Highlight the clicked row and scroll to it
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);
//                         const feature = addMultilinestringFeatureFromWKT_priorityL(item.geom_wkt, item.priority);
//                       console.log("Adding feature for item: ", item); // Log the feature being added

//                     const featureId = feature.getId(); // Get the feature ID
//                     featureToRowMap.set(featureId, row); // Map the feature to the row
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
//             type_legend.style.display = 'none'; Priority_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//         } else {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';Priority_legend.style.display = 'none';
//         }
//     });

 
// });


//-------------------------------------All Priority not eligible-----------------------------//
// Not_Eligible.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getPriorityLko?priority=Not Eligible`, {
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
//             featureToRowMap.clear(); // Clear feature-to-row map


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//            <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
           
//             <td>${item.ward_no}</td>                         
           
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
           
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
           
//             <td>${item.total_scor}</td>
           
           
//             <td>${item.priority}</td>
             
//             <!-- Add more table data cells as needed -->
//         `;
//                     dataTableBody_Scoring.appendChild(row);

//                     // Check if the item has a geom_wkt property
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt); // Zoom to road
//                             highlightAndScrollToRow(row);     // Highlight the clicked row and scroll to it
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         addMultilinestringFeatureFromWKT_priority(item.geom_wkt, item.priority);
//                         const feature = addMultilinestringFeatureFromWKT_priorityL(item.geom_wkt, item.priority);
//                       console.log("Adding feature for item: ", item); // Log the feature being added

//                     const featureId = feature.getId(); // Get the feature ID
//                     featureToRowMap.set(featureId, row); // Map the feature to the row
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
//         if (live_legend_legend.style.display === 'none') {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//         } else {
//             type_legend.style.display = 'none'; live_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Material_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//         }
//     });

// });

//---------------All Roads-------------------------//


function Prayagraj_Road() {
    removeCurrentLayer();
    //  clearVectorLayers();
    currentLayer = new ol.layer.Image({
        title: 'Prayagraj Roads',
        //     extent: [-180, -90, -180, 90],
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_NN_roads/wms',
            params: {
                'LAYERS': 'All_NN_roads:Prayagraj',

            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    //overlays.getLayers().push(LNN_Ward_Boundary);
    map.addLayer(currentLayer);
  //  document.getElementById('summary-table').style.display = 'none';
    // document.getElementById('dataTable').style.display = 'block';
    // document.getElementById('tableContainer').style.display = 'block';

    // fetchANNMaterial_Gorakhpur_Road();
}
// function fetchANNMaterial_Gorakhpur_Road() {
//     fetch(`${BASE_URL}/getAllGorakhpur`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             // Add any required request body
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
//             dataTableBody.innerHTML = '';

//             // Pass the correct data to the function
//             // appendToSummaryTable(responseData.data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }
/*function Gorakhpur_Road() {
//ShowRoads.addEventListener('click', function () {

    // map.getLayers().getArray().slice().forEach(layer => {
    //     if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
    //         map.removeLayer(layer);
    //     }
    // });
    // map.getOverlays().clear();

    fetch(`${BASE_URL}/getAllGorakhpur`, {
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

};
//);

//---------------All Park with Roads-------------------------//

/*
Park_Road.addEventListener('click', function () {

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

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_parkRoad(item.geom_wkt);
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

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_parkRoad(item.geom_wkt);
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

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_HospitalRoad(item.geom_wkt);
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
    
                // Pass the correct data to the function
                appendToSummaryTable(responseData.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


//---------------All hotels with Roads-------------------------//
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

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_HotelRoad(item.geom_wkt);
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

                    // Check if the item has a geom_wkt property
                    if (item.geom_wkt) {
                        addMultilinestringFeatureFromWKT_EduRoad(item.geom_wkt);
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

*/





// function processTableData(data) {
//     data.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>
//             <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
//             <!-- Add more table data cells as needed -->
//         `;
//         dataTableBody.appendChild(row);
//         row.addEventListener('click', function () {
//             if (item.geom_wkt) {
//                 zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                 highlightAndScrollToRow(row);      // Highlight the clicked row
//             }
//         });

//         // Process WKT geometry if available
//         if (item.geom_wkt) {
            
//             const feature = addMultilinestringFeatureFromWKT_Ward(item.geom_wkt, item.ward_no);
//                         const featureId = feature.getId();
//                         featureToRowMap.set(featureId, row); 
//         }
//     });
// }

// function typeTableData(data) {
//     data.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>
//             <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
//             <!-- Add more table data cells as needed -->
//         `;
//         dataTableBody.appendChild(row);
//         row.addEventListener('click', function () {
//             if (item.geom_wkt) {
//                 zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                 highlightAndScrollToRow(row);      // Highlight the clicked row
//             }
//         });

//         // Process WKT geometry if available
//         if (item.geom_wkt) {
//             const feature = addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type);
//             const featureId = feature.getId();
//             featureToRowMap.set(featureId, row); 
//         }
//     });
// }

// function conditionTableData(data) {
//     data.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>
//             <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
//             <!-- Add more table data cells as needed -->
//         `;
//         dataTableBody.appendChild(row);
//         row.addEventListener('click', function () {
//             if (item.geom_wkt) {
//                 zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                 highlightAndScrollToRow(row);      // Highlight the clicked row
//             }
//         });


//         // Process WKT geometry if available
//         if (item.geom_wkt) {
//             const feature =  addMultilinestringFeatureFromWKT_condition(item.geom_wkt, item.condition);
//             const featureId = feature.getId();
//             featureToRowMap.set(featureId, row);
//         }
//     });
// }

// function materialTableData(data) {
//     data.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>
//             <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
//             <!-- Add more table data cells as needed -->
//         `;
//         dataTableBody.appendChild(row);
//         row.addEventListener('click', function () {
//             if (item.geom_wkt) {
//                 zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                 highlightAndScrollToRow(row);      // Highlight the clicked row
//             }
//         });

//         // Process WKT geometry if available
//         if (item.geom_wkt) {
//             const feature = addMultilinestringFeatureFromWKT_material(item.geom_wkt, item.material);
//             const featureId = feature.getId();
//             featureToRowMap.set(featureId, row);
//         }
//     });
// }


// function ownershipTableData(data) {
//     data.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>
//             <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
//             <!-- Add more table data cells as needed -->
//         `;
//         dataTableBody.appendChild(row);
//         row.addEventListener('click', function () {
//             if (item.geom_wkt) {
//                 zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                 highlightAndScrollToRow(row);      // Highlight the clicked row
//             }
//         });

//         // Process WKT geometry if available
//         if (item.geom_wkt) {
//             const feature =  addMultilinestringFeatureFromWKT_ownership(item.geom_wkt, item.ownership);            ;
//             const featureId = feature.getId();
//             featureToRowMap.set(featureId, row);
//         }
//     });
// }

// function cusTableData(data) {
//     data.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>
//             <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
//             <!-- Add more table data cells as needed -->
//         `;
//         dataTableBody.appendChild(row);
//         row.addEventListener('click', function () {
//             if (item.geom_wkt) {
//                 zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                 highlightAndScrollToRow(row);      // Highlight the clicked row
//             }
//         });

//         // Process WKT geometry if available
//         if (item.geom_wkt) {
//             const feature = addMultilinestringFeatureFromWKT_cus(item.geom_wkt, item.cus);            ;
//             const featureId = feature.getId();
//             featureToRowMap.set(featureId, row);
//         }
//     });
// }
// function isLayerInPreservedList(layer) {
//     const preservedLayers = [
//         ReligiousVectorLayer, bankVectorLayer, GraveyardVectorLayer, CarVectorLayer,
//         HospitalVectorLayer, EducationVectorLayer, PetrolVectorLayer, HotelsVectorLayer,
//         StadiumVectorLayer, busVectorLayer, ElectricsubVectorLayer, PostVectorLayer
//     ];
//     return preservedLayers.includes(layer);
// }

/*----------------------------- ward 17 -------------------------------------------------*/

// Ward59.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=59`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// //---------------------------ward28 road
// Ward28.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=28`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })


// });
// //---------------------------ward33 road
// Ward33.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=33`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// //---------------------------ward34 road
// Ward34.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=34`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });

// });
// //---------------------------ward57 road
// Ward57.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=57`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// //---------------------------ward55 road
// Ward55.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=55`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// //---------------------------ward69 road
// Ward69.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=69`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// //---------------------------ward87 road
// Ward87.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=87`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });

// });
// //---------------------------ward88 road
// Ward88.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=88`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });

// });
// //---------------------------ward95 road
// Ward95.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=95`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });

// });
// //---------------------------ward98 road
// Ward98.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed
//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=98`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// //---------------------------ward103 road
// Ward103.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed
//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Ward_no?ward_no=103`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// //---------------------------ward70 road
// Ward70.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=70`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// Ward76.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=76`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// Ward100.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=100`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// Ward50.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=50`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// Ward12.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=12`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// Ward14.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=14`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// Ward62.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=62`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// Ward66.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Ward_no?ward_no=66`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 processTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });


// ////----------------------Zone1---------------------------//

// Zone1_type.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getAllZ1typeName`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 typeTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category major road
// Zone1_type_major.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Type?zone_name=Zone 1&type=Major`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 typeTableData(responseData.data);
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
//         if (type_legend_major.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             type_legend_major.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// // Event listener for Get Data button ,get Category type minor road
// Zone1_type_minor.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Type?zone_name=Zone 1&type=Minor`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 typeTableData(responseData.data);
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
//         if (type_legend_major.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             type_legend_major.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category type minor road

// //----------Zone1 Condition-----------------------------//
// Zone1_condition.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1AllCondition?zone_name=Zone 1`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Under_Scheme_legend.style.display = 'none'; Road_Age_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });

// });
// // Event listener for Get Data button ,get Category Material BOE road
// Zone1_condition_good.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Green`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
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
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Under_Scheme_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material BOE road
// Zone1_condition_poor.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Red`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
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
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             type_legend_major.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material BOE road
// Zone1_condition_moderate.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Condition?zone_name=Zone 1&condition=Yellow`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
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
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             type_legend_major.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });

//----------Zone1 Material-----------------------------//
// Zone1_material.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1AllMaterial?zone_name=Zone 1`, {
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
//             dataTableBody.innerHTML = '';
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
//                 <td>${item.yoc}</td>
//                 <td>${item.cus}</td>
//                 <!-- Add more table data cells as needed -->
//             `;
//                     dataTableBody.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         const feature =  addMultilinestringFeatureFromWKT_material(item.geom_wkt, item.carriage_m) ;            
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

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (Material_legend.style.display === 'none') {
//             Material_legend.style.display = 'block'; live_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Condition_legend.style.display = 'none';
//             Under_Scheme_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_material_bitumen.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=Bitumen`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend_major.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });

// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_material_CC.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=CC`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_material_interlocking.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=Interlocking`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_material_kachcha.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1Material?zone_name=Zone 1&carriage_m=kachcha`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });

//----------Zone1 ownership -----------------------------//
// Zone1_ownership.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1AllOwnerShip?zone_name=Zone 1`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });

//     legendBtn.addEventListener('click', function () {
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
// });
// // Event listener for Get Data button ,get Category Ownership NHAI road

// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_ownership_LNN.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=LNN`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
   

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_ownership_Private_Road.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=PRIVATE ROAD`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
  

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_ownership_LDA.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=LDA`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
  

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone1_ownership_PWD.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1OwnerShip?zone_name=Zone 1&ownership=PWD`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
   
// });
// // Event listener for Get Data button ,get Category Ownership road
// Zone1_ownership_Others.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1OtherOwnerShip?ownership=Other`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });


// });


//----------Zone1 Under Scheme -----------------------------//
// Zone1_under_scheme.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getAllZ1cusName`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
// });
// // Event listener for Get Data button ,get Category Under scheme
// Zone1_under_scheme_14th.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=14th Finance`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
   

// });
// // Event listener for Get Data button ,get Category Under scheme
// Zone1_under_scheme_15th.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=15th Finance`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
   

// });
// // Event listener for Get Data button ,get Category Under scheme NNN
// Zone1_under_scheme_NNN.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1UnderScheme?zone_name=Zone 1&cus=Nagar Nigam Nidhi`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
   

// });
// // Event listener for Get Data button ,get Category Under scheme NNN
// Zone1_under_scheme_Others.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL1}/getZ1SchemeOther?cus=Other`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none';  type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
    

// });


//-------------------------------------Zone4-----------------------------//

// // Event listener for Get Data button ,get Category Zone4 road
// Zone4_type.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getAllZ4typeName`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping

            

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//            <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>                         
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>                        <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
           
//             <!-- Add more table data cells as needed -->
//         `;
//                     dataTableBody.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
                        
//                         const feature =  addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type); ;            
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

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (type_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });

// });
// // Event listener for Get Data button ,get Category type road
// Zone4_type_Urban.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Urban%20Express%20Way`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 typeTableData(responseData.data);
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
//         if (type_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none';
//             type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';

//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material BOE road
// Zone4_type_Arterial.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Arterial`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//            <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>                         
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>                        <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
           
//             <!-- Add more table data cells as needed -->
//         `;
//                     dataTableBody.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         const feature =  addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type); ;            
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
//         if (type_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category type minor road
// Zone4_type_Local_Street.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Local%20Street`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 responseData.data.forEach(item => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//            <td>${item.gis_id}</td>
//             <td>${item.zone_no}</td>
//             <td>${item.zone_name}</td>
//             <td>${item.ward_no}</td>                         
//             <td>${item.ward_name}</td>
//             <td>${item.ownership}</td>                        <td>${item.type}</td>
//             <td>${item.road_name}</td>
//             <td>${item.row_meter}</td>
//             <td>${item.row_as_per}</td>
//             <td>${item.carriage_w}</td>
//             <td>${item.carriage_m}</td>
//             <td>${item.length_km}</td>
//             <td>${item.condition}</td>
//             <td>${item.yoc}</td>
//             <td>${item.cus}</td>
           
//             <!-- Add more table data cells as needed -->
//         `;
//                     dataTableBody.appendChild(row);
//                     row.addEventListener('click', function () {
//                         if (item.geom_wkt) {
//                             zoomToRoadFeature(item.geom_wkt);  // Zoom to the road and highlight it
//                             highlightAndScrollToRow(row);      // Highlight the clicked row
//                         }
//                     });

//                     // Check if the item has a geom_wkt property
//                     if (item.geom_wkt) {
//                         const feature =  addMultilinestringFeatureFromWKT_type(item.geom_wkt, item.type); ;            
//                         const featureId = feature.getId();
//                         featureToRowMap.set(featureId, row);                    }
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
//         if (type_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category type minor road
// Zone4_type_Sub_Arterial.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Sub%20Arterial`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 typeTableData(responseData.data);
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
//         if (type_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category type minor road
// Zone4_type_Collector.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Type?zone_name=Zone 4&type=Collectors`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 typeTableData(responseData.data);
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
//         if (type_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'block'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });


//----------Zone4 Condition-----------------------------//
// Zone4_condition.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4AllCondition?zone_name=Zone 4`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
// });
// // Event listener for Get Data button ,get Category Material BOE road
// Zone4_condition_good.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Condition?zone_name=Zone 4&condition=Green`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
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
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// // Event listener for Get Data button ,get Category Material BOE road
// Zone4_condition_poor.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Condition?zone_name=Zone 4&condition=Red`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
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
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material BOE road
// Zone4_condition_moderate.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Condition?zone_name=Zone 4&condition=Yellow`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 conditionTableData(responseData.data);
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
//         if (Condition_legend.style.display === 'none') {
//             Condition_legend.style.display = 'block'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });

//----------Zone4 Material-----------------------------//
// Zone4_material.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4AllMaterial?zone_name=Zone 4`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_material_bitumen.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=Bitumen`, {
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
//             dataTableBody.innerHTML = '';
//             featureToRowMap.clear();  // Clear feature-row mapping


//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_material_BOE.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=BOE`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_material_CC.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=CC`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_material_interlocking.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=Interlocking`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_material_kachcha.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4Material?zone_name=Zone 4&carriage_m=Kachcha`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 materialTableData(responseData.data);
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
//         if (Material_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'none'; Material_legend.style.display = 'block';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });

// });

//----------Zone4 ownership -----------------------------//
// Zone4_ownership.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4AllOwnerShip?zone_name=Zone 4`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });

// });
// // Event listener for Get Data button ,get Category Ownership NHAI road
// Zone4_ownership_NHAI.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=NHAI`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_ownership_LNN.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=LNN`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_ownership_Private_Road.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=PRIVATE ROAD`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_ownership_LDA.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=LDA`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Material Bitumen road
// Zone4_ownership_PWD.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4OwnerShip?zone_name=Zone 4&ownership=PWD`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Ownership road
// Zone4_ownership_Others.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed


//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4OtherOwnerShip?ownership=Other`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 ownershipTableData(responseData.data);
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
//         if (Ownership_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             type_legend.style.display = 'none'; Ownership_legend.style.display = 'block'; Material_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//             Under_Scheme_legend.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });


//----------Zone4 Under Scheme -----------------------------//
// Zone4_under_scheme.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator

//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && !isLayerInPreservedList(layer)) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getAllZ4cusName?zone_name=Zone 4`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
//             } else {
//                 console.error('Expected array but received:', responseData.data);
//                 // Handle non-array data if needed
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             // Handle error condition if needed
//         })

//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     legendBtn.addEventListener('click', function () {
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });

// });

// // Event listener for Get Data button ,get Category Under scheme
// Zone4_under_scheme_13th.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=13th Finance`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Under scheme
// Zone4_under_scheme_14th.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=14th Finance`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none';
//             type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Under scheme
// Zone4_under_scheme_15th.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=15th Finance`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });
// // Event listener for Get Data button ,get Category Under scheme NNN
// Zone4_under_scheme_NNN.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4UnderScheme?zone_name=Zone 4&cus=Nagar Nigam Nidhi`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none'; Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });


// });
// // Event listener for Get Data button ,get Category Under scheme NNN
// Zone4_under_scheme_Others.addEventListener('click', function () {
//     // showLoading(); // Show loading indicator
//     removeCurrentLayer(); // Ensure the WMS layer is removed

//     //   map.getOverlays().clear();
//     map.getLayers().getArray().slice().forEach(layer => {
//         // Only remove layers that are not the ReligiousVectorLayer
//         if (layer instanceof ol.layer.Vector && layer !== ReligiousVectorLayer && layer != bankVectorLayer && layer != GraveyardVectorLayer
//             && layer != CarVectorLayer && layer != HospitalVectorLayer && layer != EducationVectorLayer && layer != PetrolVectorLayer
//             && layer != HotelsVectorLayer && layer != StadiumVectorLayer && layer != busVectorLayer && layer != ElectricsubVectorLayer
//             && layer != PostVectorLayer) {
//             map.removeLayer(layer);
//         }
//     });

//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/getZ4SchemeOther?cus=Other`, {
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
//             dataTableBody.innerHTML = '';

//             // Check if 'data' is an array before iterating
//             if (Array.isArray(responseData.data)) {
//                 cusTableData(responseData.data);
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
//         if (Under_Scheme_legend.style.display === 'none') {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; Ownership_legend.style.display = 'none';
//             type_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'block'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         } else {
//             Condition_legend.style.display = 'none'; live_legend.style.display = 'none'; type_legend.style.display = 'none';
//             Ownership_legend.style.display = 'none'; Material_legend.style.display = 'none';
//             Road_Age_legend.style.display = 'none'; Under_Scheme_legend.style.display = 'none'; type_legend_major.style.display = 'none';
//         }
//     });
//     // .finally(() => {
//     //     hideLoading(); // Hide loading indicator when done
//     // });
//     // legendBtn.addEventListener('click', function () {
//     //     if (live_legend.style.display === 'none') {
//     //         live_legend.style.display = 'block';
//     //     } else {
//     //         live_legend.style.display = 'none';
//     //     }
//     // });

// });


//============================================amenities--------------------------------
// map.on('click', function (event) {
//     var pointFeature = null;
//     var lineFeature = null;
//     var polygonFeature = null;

//     // Check if a feature was clicked
//     map.forEachFeatureAtPixel(event.pixel, function (feature) {
//         var geometryType = feature.getGeometry().getType();

//         if (geometryType === 'Point') {
//             pointFeature = feature;
//             return true; // Stop iteration when point is found
//         } else if (geometryType === 'LineString') {
//             lineFeature = feature;
//         } else if (geometryType === 'MultiPolygon') {
//             polygonFeature = feature;
//         }
//     });

//     // Handle point feature popup
//     if (pointFeature) {
//         var coordinates = pointFeature.getGeometry().getCoordinates();
//         var name = pointFeature.get('name');
//         var address = pointFeature.get('address');
//         var phonenumbe = pointFeature.get('phonenumbe');

//         popup.getElement().innerHTML = '<strong style="color:blue">Name -</strong> ' + name +
//             '<br><br><strong style="color:blue">Address -</strong> ' + address +
//             '<br><br><strong style="color:blue">Phone No. -</strong> ' + phonenumbe;
//         popup.setPosition(coordinates);

//         // Hide other popups
//         popupContainer.style.display = 'none';
//         return;
//     }

//     // Handle line feature popup
//     if (lineFeature) {
//         var properties = lineFeature.getProperties();
//         var coordinate = event.coordinate;
//         var contentHtml = '<h6>Road Data</h6>';

//         for (var key in properties) {
//             if (properties.hasOwnProperty(key) && key !== 'geometry' && key !== 'row_left' && key !== 'row_right') {
//                 contentHtml += '<p><strong>' + key + ':</strong> ' + properties[key] + '</p>';
//             }
//         }

//         content.innerHTML = contentHtml;
//         overlay.setPosition(coordinate);

//         // Hide other popups
//         popupContainer.style.display = 'none';
//         return;
//     }

//     // Handle polygon feature popup
//     if (polygonFeature) {
//         var name = polygonFeature.get('name');
//         popupContainer.innerHTML = '<strong style="color:green">Name:</strong> ' + name;
//         popupContainer.style.display = 'block';

//         // Hide other popups
//         popup.setPosition(undefined);
//         return;
//     }

//     // Hide all popups if no feature is found
//     if (!pointFeature && !lineFeature && !polygonFeature) {
//         popup.setPosition(undefined);
//         popupContainer.style.display = 'none';
//     }
// });

// // Handle pointer move to change cursor style when hovering over features
// map.on('pointermove', function (event) {
//     var hit = map.hasFeatureAtPixel(event.pixel);
//     map.getTargetElement().style.cursor = hit ? 'pointer' : '';
// });

/*------------------------------ ameneties --------------------------------------*/
/*------------------------------ ameneties --------------------------------------*/
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

// fetch(`${BASE_URL}/getLNNBankAndATM`)
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





//------------------------ query panel ---------------------------------/ /

//------------- draw function in query panel----------------------//


//-----------------------summary table ---------------------------------//
// const data1 = {
//     'Zone 1': { wards: ['Ward 17', 'Ward 28', 'Ward 69', 'Ward 33', 'Ward 95', 'Ward 88', 'Ward 55', 'Ward 34', 'Ward 57', 'Ward 98', 'Ward 87', 'Ward 103',] },
//     'Zone 2': { wards: ['Ward 46', 'Ward 79', 'Ward 26', 'Ward 58', 'Ward 8', 'Ward 78', 'Ward 90', 'Ward 104', 'Ward 21', 'Ward 107', 'Ward 61',] },
//     'Zone 4': { wards: ['Ward 12', 'Ward 14', 'Ward 37', 'Ward 50', 'Ward 59', 'Ward 62', 'Ward 66', 'Ward 70', 'Ward 76', 'Ward 100'] },
//     'Zone 5': { wards: [] },
//     'Zone 6': { wards: [] },
// };

// const darkColors = ['#D49868', '#DB8888', '#FFC3A0', '#FF677D', '#45A882', '#CC6868', '#31A2AC', '#C9A655', '#D9BF77'];
// let colorIndex = 0;

// function getUniqueColor() {
//     const color = darkColors[colorIndex % darkColors.length];
//     colorIndex++;
//     return color;
// }

// function navigateTo(tabName) {
//     const content = document.getElementById('content');
//     content.innerHTML = '';

//     // Remove active class from all tabs
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach(tab => tab.classList.remove('active'));

//     // Add active class to the clicked tab
//     const activeTab = Array.from(tabs).find(tab => tab.getAttribute('data-tab') === tabName);
//     if (activeTab) {
//         activeTab.classList.add('active');
//     }

//     if (tabName === 'Summary') {
//         updateSummary();
//     } else if (tabName === 'Zones') {
//         if (selectedZone) {
//             updateZones(selectedZone);
//         } else {
//             content.innerHTML = '<p>Select a zone from Summary to see details here.</p>';
//         }
//     } else if (tabName === 'Wards') {
//         if (selectedZone) {
//             updateWards(selectedZone);
//         } else {
//             content.innerHTML = '<p>Select a zone from Summary to see wards details here.</p>';
//         }
//     } else if (tabName === 'WardDetails') {
//         if (selectedZone && selectedWard) {
//             updateWardDetails(selectedZone, selectedWard);
//         } else {
//             content.innerHTML = '<p>Select a ward from Wards to see details here.</p>';
//         }
//     } else if (tabName === 'Amenities') {
//         showAllZonesForAmenities();  // Display all zones when the "Amenities" tab is clicked
//     }
//     else if (tabName === 'View') {
//         // Display all zones when the "Amenities" tab is clicked
//     }
// }
/*------------------------------------------------------- ward 3 detail function calling for api ----------------------------*/



//------------------------------- Amenities zone cards-------------------------------------




//-----------------table Cancel btn----------------------------//
// document.getElementById('cancelbtn_table').addEventListener('click', function () {
//     document.getElementById('tableContainer_summary').style.display = 'none';
//     document.getElementById('Scoreing_tableContainer').style.display = 'none';
//     document.getElementById('tableContainer_Drain').style.display = 'none';
//     document.getElementById('tableContainer').style.display = 'none';
//     document.getElementById('tableContainer_Road_Age').style.display = 'none';
//     document.getElementById('summary-table').style.display = 'block';

//     const legendBtn = document.getElementById('legendBtn');
//     legendBtn.style.bottom = '0%';


//});

//-------------------------end code of Cancel btn-----------------------//


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
                <td>${item.yoc}</td>
                <td>${item.cus}</td>
                <!-- Add more table columns if necessary -->
            `;
            dataTableBody_summary.appendChild(row);
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

