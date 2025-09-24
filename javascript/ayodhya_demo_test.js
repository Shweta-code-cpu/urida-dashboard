const BASE_URL = `${BASE_URL_All}:8182/Ayodhya`;
const GEOSERVER_BASE_URL = "http://localhost:8080/geoserver/Ayodhya";
//---------------------- header section start --------------------------//
// Grouped event listeners for similar functionality
function hideElements(elementIds) {
    elementIds.forEach(id => document.getElementById(id).style.display = 'none');
}
function showElements(elementIds) {
    elementIds.forEach(id => document.getElementById(id).style.display = 'block');
}
//----------------------------------------- sidebar amenities show and hide elements -------------------------
['Slum_Road', 'Bank_Road', 'Park_Road', 'Hospital_Road', 'Hotel_Road', 'Education_Road', 'ShowRoads'].forEach(id => {
    document.getElementById(id).addEventListener('click', showTables); });

function showTables() {
    showElements(['dataTable', 'tableContainer']);
    hideElements([
        'live_legend', 'type_legend', 'tableContainer_Drain', 'dataTable_Drain',
        'Scoring_dataTable', 'Scoreing_tableContainer', 'tableContainer_summary',
        'tableContainer_summaryfiltermat', 'tableContainer_summaryfilter', 'tableContainer_summaryfilterOwn',
        'summary-table', 'Drain_Type_Legend', 'Drain_Condition_Legend',
        'Drain_Material_Legend', 'Drain_Status_Legend'
    ]);
}

//---------------------------------------- sidebar drainage show and hide elements -------------------------
document.getElementById('ShowDrainage').addEventListener('click', showTables1);

function showTables1() {
    showElements(['tableContainer_Drain', 'dataTable_Drain']);
    hideElements([
        'dataTable', 'tableContainer', 'Scoreing_tableContainer', 'Scoring_dataTable', 'summary-table',
        'live_legend', 'type_legend', 'Condition_legend', 'Material_legend', 'Ownership_legend', 'Priority_legend',
        'tableContainer_summary', 'tableContainer_summaryfiltermat', 'tableContainer_summaryfilter', 'tableContainer_summaryfilterOwn'
    ]);
    const legendBtn = document.getElementById('legendBtn');
    legendBtn.style.display = 'block';
    legendBtn.style.bottom = '30%';
    legendBtn.style.left = '1%';
}

//------------------------------------ summary tables show and hide elements -------------------------
document.getElementById('table_icon').addEventListener('click', showTables2);

function showTables2() {
    showElements(['summary-table']);
    hideElements([
        'dataTable', 'tableContainer', 'Scoring_dataTable', 'Scoreing_tableContainer', 'tableContainer_summary',
        'tableContainer_Drain', 'dataTable_Drain', 'legendBtn', 'live_legend', 'type_legend', 'Condition_legend',
        'Material_legend', 'Ownership_legend', 'Priority_legend', 'Drain_Type_Legend',
        'Drain_Condition_Legend', 'Drain_Material_Legend', 'Drain_Status_Legend'
    ]);
}

//------------------------------------ priority  show and hide elements -------------------------
['P1', 'P2', 'Not_Eligible'].forEach(id => {
    document.getElementById(id).addEventListener('click', showTables3); });

function showTables3() {
    showElements(['Scoring_dataTable', 'Scoreing_tableContainer']);
    hideElements([
        'dataTable', 'tableContainer', 'tableContainer_Drain', 'tableContainer_summary',
        'tableContainer_summaryfiltermat', 'tableContainer_summaryfilter', 'tableContainer_summaryfilterOwn',
        'Ownership_legend', 'Material_legend', 'Condition_legend', 'type_legend',
        'Drain_Type_Legend', 'Drain_Condition_Legend', 'Drain_Material_Legend', 'Drain_Status_Legend', 'summary-table'
    ]);

    const priorityLegend = document.getElementById('Priority_legend');
    priorityLegend.style.display = 'block';
    priorityLegend.style.height = '15%';
    priorityLegend.style.top = '55%';
    priorityLegend.style.left = '1%';
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
                    $("#tableContainer_summaryfiltermat").hide();
                    $("#tableContainer_summaryfilterOwn").hide();
                }
            );
            $("#drain_btn").click(
                function () {
                    $("#tableContainer_summaryfilter").hide();
                    $("#tableContainer_summaryfiltermat").hide();
                    $("#tableContainer_summaryfilterOwn").hide();
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

//-----------------------------------Boundaries------------------------------------//
var Ayodhya_Boundary = new ol.layer.Image({
    title: 'Ayodhya Zone Boundary',
    //     extent: [-180, -90, -180, 90],
    source: new ol.source.ImageWMS({
        url: `${GEOSERVER_BASE_URL}/wms`,
        params: {
            'LAYERS': 'ANN_Summary:ayodhaya_zone_boundary4326',
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
        url: `${GEOSERVER_BASE_URL}/wms`,
        params: {
            'LAYERS': 'ANN_Summary:ayodhaya_ward_boundary4326',

        },
        ratio: 1,
        serverType: 'geoserver'
    })
});

//overlays.getLayers().push(LNN_Ward_Boundary);
map.addLayer(Ayodhya_Ward_Boundary);



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

//----------------------------------optimise sidebar amenities-----------------------------
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

// function amenitiesFeatures(type, iconStyle, vectorSource, layer, elementId) {
//     fetch(`${BASE_URL}/getLocationData?type=${type}`)
//         .then(response => response.json())
//         .then(data => {
//             const features = data.data.map(point => {
//                 try {
//                     const coords = point.geom_point.replace('POINT(', '').replace(')', '').split(' ');
//                     const lonLat = [parseFloat(coords[0]), parseFloat(coords[1])];

//                     const feature = new ol.Feature({
//                         geometry: new ol.geom.Point(lonLat),
//                         name: point.name,
//                         address: point.address,
//                         phonenumbe: point.phonenumbe
//                     });

//                     feature.setStyle(iconStyle);
//                     return feature;
//                 } catch (error) {
//                     console.error(`Error adding ${type} feature:`, error);
//                 }
//             }).filter(Boolean);

//             vectorSource.addFeatures(features);
//             console.log(`${type} features added:`, features);

//             document.getElementById(elementId).addEventListener('change', function () {
//                 layer.setVisible(this.checked);
//             });
//         })
//         .catch(error => console.error(`Error fetching ${type} data:`, error));
// }

function amenitiesFeatures(type, iconStyle, elementId) {
    // 🧹 Remove only previous amenity layers
    map.getLayers().getArray().slice().forEach(l => {
        if (l.get('isAmenityLayer')) {
            map.removeLayer(l);
        }
    });

    map.getOverlays().clear(); // Clear popups

    fetch(`${BASE_URL}/getLocationData?type=${type}`)
        .then(response => response.json())
        .then(data => {
            const vectorSource = new ol.source.Vector();
            const layer = new ol.layer.Vector({ source: vectorSource });
            layer.set('isAmenityLayer', true); // ✅ Mark layer for cleanup later

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
            map.addLayer(layer); // ✅ Now it's a fresh valid layer

            console.log(`${type} features added:`, features);

            // ✅ Checkbox toggle (optional)
            const checkbox = document.getElementById(elementId);
            if (checkbox) {
                checkbox.addEventListener('change', function () {
                    layer.setVisible(this.checked);
                });
                layer.setVisible(checkbox.checked); // Initial visibility
            }
        })
        .catch(error => console.error(`Error fetching ${type} data:`, error));
}


// Location Types and Fetching Features for Points
const locationTypes = [
    { type: 'bank', icon: '../assets/icons/bank.png', id: 'showBanks' },
    { type: 'bus', icon: '../assets/icons/bus.png', id: 'showBus' },
    { type: 'charging', icon: '../assets/icons/charging.png', id: 'showCar' },
    { type: 'hospital', icon: '../assets/icons/hospital.png', id: 'showHospital' },
    { type: 'education', icon: '../assets/icons/education.png', id: 'showEducation' },
    { type: 'hotel', icon: '../assets/icons/hotel.png', id: 'showHotel' },
    { type: 'petrol', icon: '../assets/icons/fuel.png', id: 'showPetrol' },
    { type: 'graveyard', icon: '../assets/icons/graveyard.png', id: 'showGraveyard' },
    { type: 'religious', icon: '../assets/icons/Book.png', id: 'showReligious' },
    { type: 'post_office', icon: '../assets/icons/post-office.png', id: 'showPostOffice' },
    { type: 'gov_office', icon: '../assets/icons/Central.png', id: 'showCentralGov' },
    { type: 'state_gov', icon: '../assets/icons/State.png', id: 'showStateGov', scale: 0.02 },
];

// locationTypes.forEach(location => {
//     const vectorSource = new ol.source.Vector();
//     const amenitiesVectorLayer = createVectorLayer(vectorSource);
//     map.addLayer(amenitiesVectorLayer);

//     const iconStyle = createIconStyle(location.icon, location.scale || 0.05);
//     amenitiesFeatures(location.type, iconStyle, vectorSource, amenitiesVectorLayer, location.id);
// });

locationTypes.forEach(location => {
    const iconStyle = createIconStyle(location.icon, location.scale || 0.05);
    amenitiesFeatures(location.type, iconStyle, location.id);
});


//------------------------------------------------park---------------
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
park_amenityFeature(`${BASE_URL}/getPark_newName`, parkVectorSource, parkVectorLayer, 'showParks');

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

                feature.setStyle(createIconStyle('../assets/icons/stadium.png', 0.05)); // Apply stadium icon style
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



/*---------------------------------------------- zoom function is to on table ------------------------------------------*/
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

//-----------------------------------------------All Drains---------------------------------------//
ShowDrainage.addEventListener('click', function () {
    removeCurrentLayer();
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
            const legends = [ type_legend, live_legend, Priority_legend, Condition_legend, Material_legend, Ownership_legend, 
                Drain_Type_Legend, Drain_Condition_Legend, Drain_Material_Legend, Drain_Status_Legend
            ];
        
            const isVisible = legends.some(legend => legend.style.display === 'block');
        
            legends.forEach(legend => {
                legend.style.display = isVisible ? 'none' : 'block';
            });
        });

});

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
function addMultilinestringFeatureFromWKT_Drain(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, '#ff0000', 3);
}
function addMultilinestringFeatureFromWKT_Ward(wktString) {
    return addMultilinestringFeatureFromWKT_General(wktString, 'red', 3);
}
function addMultilinestringFeatureFromWKT_priority(wktString, priority) {
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
            color = 'black';
    }

    return addMultilinestringFeatureFromWKT_General(wktString, color, 3);
}

//--------------------------------optimise code of sidebar road analysis -----------------------------
// function amenitiesRoadAnalysis(endpoint, layerName, featureFunction) {
//     removeCurrentLayer();
//     updateNavBarWithFunctionName(layerName);

//     map.getLayers().getArray().slice().forEach(layer => {
//         if (layer instanceof ol.layer.Vector && layer != SlumVectorLayer && layer != parkVectorLayer 
//             // && layer != amenitiesVectorLayer
//         ) {
//             map.removeLayer(layer);
//         }
//     });
//     map.getOverlays().clear();

//     fetch(`${BASE_URL}/${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({})
//     })
//     .then(response => {
//         if (!response.ok) throw new Error('Network response was not ok');
//         return response.json();
//     })
//     .then(responseData => {
//         console.log(`Received data for ${layerName}:`, responseData);

//         dataTableBody.innerHTML = '';
//         featureToRowMap.clear();

//         if (Array.isArray(responseData.data)) {
//             responseData.data.forEach(item => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${item.gis_id}</td>
//                     <td>${item.zone_no}</td>
//                     <td>${item.zone_name}</td>
//                     <td>${item.ward_no}</td>
//                     <td>${item.ward_name}</td>
//                     <td>${item.ownership}</td>
//                     <td>${item.type}</td>
//                     <td>${item.road_name}</td>
//                     <td>${item.row_meter}</td>
//                     <td>${item.row_as_per}</td>
//                     <td>${item.carriage_w}</td>
//                     <td>${item.carriage_m}</td>
//                     <td>${item.length_km}</td>
//                     <td>${item.condition}</td>
//                     <td>${item.year_of_co}</td>
//                     <td>${item.cus}</td>`;

//                 dataTableBody.appendChild(row);

//                 row.addEventListener('click', function () {
//                     if (item.geom_wkt) {
//                         zoomToRoadFeature(item.geom_wkt);
//                         highlightAndScrollToRow(row);
//                     }
//                 });

//                 if (item.geom_wkt) {
//                     console.log(`WKT String for ${layerName}:`, item.geom_wkt);
//                     const feature = featureFunction(item.geom_wkt);

//                     if (feature) {
//                         const featureId = feature.getId();
//                         if (featureId) {
//                             featureToRowMap.set(featureId, row);
//                         } else {
//                             console.warn('Feature created but no ID found:', feature);
//                         }
//                     } else {
//                         console.error('Failed to create feature from WKT:', item.geom_wkt);
//                     }
//                 }
//             });
//         } else {
//             console.error(`Expected array but received for ${layerName}:`, responseData.data);
//         }
//     })
//     .catch(error => console.error(`Error fetching data for ${layerName}:`, error));

//     legendBtn.addEventListener('click', function () {
//         const legends = [type_legend, live_legend, Condition_legend, Material_legend, Ownership_legend];
        
//         // Toggle the display of legends
//         const isVisible = legends.some(legend => legend.style.display === 'block');
        
//         legends.forEach(legend => {
//             legend.style.display = isVisible ? 'none' : 'block';
//         });
//     });

// }


// === Load Roads and Table from WKT + Add Layer ===
function amenitiesRoadAnalysis(endpoint, layerName, featureFunction) {
    removeCurrentLayer();
    updateNavBarWithFunctionName(layerName);

    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector && layer != SlumVectorLayer && layer != parkVectorLayer) {
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
        const isVisible = legends.some(legend => legend.style.display === 'block');
        legends.forEach(legend => {
            legend.style.display = isVisible ? 'none' : 'block';
        });
    });
}

// === COMBINED FUNCTION: Show Roads + Icons ===
function showAmenityWithRoads(roadEndpoint, roadLayerName, roadFeatureFunction, pointType, iconPath, elementId, scale = 0.05) {
    // 1. Show Roads
    amenitiesRoadAnalysis(roadEndpoint, roadLayerName, roadFeatureFunction);

    // 2. Show Icons
    const vectorSource = new ol.source.Vector();
    const iconLayer = createVectorLayer(vectorSource);
    map.addLayer(iconLayer);

    const iconStyle = createIconStyle(iconPath, scale);
    amenitiesFeatures(pointType, iconStyle, vectorSource, iconLayer, elementId);

    document.getElementById(elementId).addEventListener('change', function () {
        layer.setVisible(this.checked);
    });
}
// function showAmenityWithRoads(roadEndpoint, roadLayerName, roadFeatureFunction, pointType, iconPath, elementId, scale = 0.05) {
//     // 1. Show Roads
//     amenitiesRoadAnalysis(roadEndpoint, roadLayerName, roadFeatureFunction);

//     // 2. Show Icons
//     const vectorSource = new ol.source.Vector();
//     const iconLayer = createVectorLayer(vectorSource);
//     map.addLayer(iconLayer);

//     const iconStyle = createIconStyle(iconPath, scale);
//     amenitiesFeatures(pointType, iconStyle, vectorSource, iconLayer, elementId);
// }


// Event Listeners
ShowRoads.addEventListener('click', () => showAmenityWithRoads('getAlltypeName', 'All Roads', addMultilinestringFeatureFromWKT));
Bank_Road.addEventListener('click', () => showAmenityWithRoads('getBankWithRoad', 'Bank with Roads', addMultilinestringFeatureFromWKT, 'bank','../assets/icons/bank.png','showBanks' ));
Park_Road.addEventListener('click', () => showAmenityWithRoads('getParkWithRoad', 'Park with Roads', addMultilinestringFeatureFromWKT_parkRoad));
Hospital_Road.addEventListener('click', () => showAmenityWithRoads('getHospitalWithRoad', 'Hospital with Roads', addMultilinestringFeatureFromWKT_HospitalRoad,'hospital','../assets/icons/hospital.png','showHospital'));
Hotel_Road.addEventListener('click', () => showAmenityWithRoads('getHotelWithRoad', 'Hotel with Roads', addMultilinestringFeatureFromWKT_HotelRoad,'hotel','../assets/icons/hotel.png','showHotel'));
Education_Road.addEventListener('click', () => showAmenityWithRoads('getEducationWithRoad', 'Educational Institute with Roads', addMultilinestringFeatureFromWKT_EduRoad,'education','../assets/icons/education.png','showEducation'));
Slum_Road.addEventListener('click', () => showAmenityWithRoads('getSlumRoad', 'Slum Roads', addMultilinestringFeatureFromWKT));

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
/**
 * Creates a new measure tooltip
 */
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

/*----------------------------------------- javascript for sidebar----------------------------------------- */

const dataTableBody_Scoring = document.getElementById('dataBody_Scoring');
const dataTableBody_Drain = document.getElementById('dataBody_Drain');
const dataTableBody = document.getElementById('dataBody');
const dataTableBody_summary = document.getElementById('dataBody_summary');
const dataTableBody_summaryfilter = document.getElementById('dataBody_summaryfilter');

//----------------- table Cancel btn ----------------------------//
document.querySelectorAll('.table-cancel-btn1').forEach(function (element) {
    element.addEventListener('click', function () {
        // Hide all table containers
        const tableContainers = ['tableContainer', 'Scoreing_tableContainer',  'tableContainer_Drain', 'tableContainer_summary',
            'tableContainer_summaryfilter',  'tableContainer_summaryfiltermat', 'tableContainer_summaryfilterOwn' ];
        tableContainers.forEach(id => {
            const el = document.getElementById(id);
            el.style.display = 'none';
        });
        // Show the summary table
        const summaryTable = document.getElementById('summary-table');
        summaryTable.style.display = 'block';
        const popup = document.getElementById('popup');
        popup.style.display = 'none';

        const legendBtn = document.getElementById('legendBtn');
        legendBtn.style.bottom = '3%';
        const legends = ['Material_legend', 'Condition_legend', 'type_legend', 'Ownership_legend', 'Priority_legend',
            'Drain_Material_Legend', 'Drain_Condition_Legend', 'Drain_Type_Legend', 'Drain_Status_Legend'];
        legends.forEach(id => {
            const el = document.getElementById(id);
            el.style.display = 'none';
        });
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

//-----------------------------clear icon code -----------------------------------//
function zoomToIndia() {
    const view = map.getView();
    // Define the approximate bounding box for India
    const extent = ol.proj.transformExtent(
        [82.08302446765529, 26.71400889838419, 82.24602173765878, 26.811349630444568], 
        'EPSG:4326', 
        view.getProjection()  );
    // Set the map's center and zoom level explicitly
    view.setCenter([82.18380629756041, 26.7500296484465]);
    view.setZoom(12); 
    view.setRotation(0);
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

    const elementsToHide = ["tableContainer","road-filter","drain-filter","query_tab", "Scoreing_tableContainer","tableContainer_Drain",
        "tableContainer_summary","tableContainer_summaryfilter", "tableContainer_summaryfiltermat", "tableContainer_summaryfilterOwn","popup"];
    
    elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });
    
    //   document.querySelector('.Legend_panel').style.display = 'none';
      const legendId= ['Priority_legend', 'type_legend', 'Condition_legend','Material_legend','Ownership_legend', 'Drain_Type_Legend', 
                        'Drain_Condition_Legend','Drain_Material_Legend','Drain_Status_Legend']
   legendId.forEach(function(legendID){
      const legendBtn =document.getElementById(legendID);
          legendBtn.style.display = 'none';
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

//-------------------- street view -----------------------//
function street_view() {
    // Remove any existing layer
    removeCurrentLayer();

    // Create the new WMS layer
    currentLayer = new ol.layer.Image({
        title: 'ann View points',
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
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
//--------------------Search bar code--------------------------//
var currentLayer = null;

$(document).ready(function () {
    // Initialize Select2 on the dropdown
    $('#roadNamesDropdown').select2({
        placeholder: "Search by road name",
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

});
//--------------------Search bar code end----------------------------//


//-------------------------------------optimise code of priority ---------------
function priorityBasedScoring(priority, functionName) {
    updateNavBarWithFunctionName(functionName);

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
    priorityBasedScoring('P1', "First Priority");
    toggleLegend(Priority_legend, live_legend);
});

P2.addEventListener('click', function () {
    priorityBasedScoring('P2', "Second Priority");
    toggleLegend(Priority_legend, live_legend);
});

Not_Eligible.addEventListener('click', function () {
    priorityBasedScoring('Not eligible', "Not Eligible");
    toggleLegend(Priority_legend, live_legend);
});


//-----------------------summary table ---------------------------------//

const data1 = {
    'Summary':{},
    'Zone 1': { wards: ['Ward 1', 'Ward 4', 'Ward 12', 'Ward 18', 'Ward 19', 'Ward 21', 'Ward 30', 'Ward 31', 'Ward 45', 'Ward 51', 'Ward 52', 'Ward 55'] },
    'Zone 2': { wards: ['Ward 3', 'Ward 5', 'Ward 6', 'Ward 7', 'Ward 13', 'Ward 14', 'Ward 17', 'Ward 23', 'Ward 26', 'Ward 27', 'Ward 28', 'Ward 32', 'Ward 33', 'Ward 36', 'Ward 37', 'Ward 38', 'Ward 39', 'Ward 40', 'Ward 41', 'Ward 48', 'Ward 54', 'Ward 57', 'Ward 58', 'Ward 59'] },
    'Zone 3': { wards: ['Ward 2', 'Ward 8', 'Ward 9', 'Ward 10', 'Ward 11', 'Ward 15', 'Ward 16', 'Ward 20', 'Ward 22', 'Ward 24', 'Ward 25', 'Ward 29', 'Ward 34', 'Ward 35', 'Ward 42', 'Ward 43', 'Ward 44', 'Ward 46', 'Ward 47', 'Ward 49', 'Ward 50', 'Ward 53', 'Ward 56', 'Ward 60'] },
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
        loadZones();
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
        console.error("updateSummary() received invalid data:", data);
        return;
    }
    console.log("Received Data in updateSummary:", data); // Debugging

    const content = document.getElementById('content');
    if (!content) {
        console.error("Element with ID 'content' not found.");
        return;
    }
    content.innerHTML = ''; // Clear previous content

    // Safe function to prevent undefined errors
    const safeValue = (key) => key in data ? data[key] : 'N/A';

    const summaryData = {
        'No. of Zones': { value: safeValue('zone_count'), onclick: 'Ayodhya_Zone_NO()' },
        'Total Road Length': { value: `${safeValue('total_length_km')} km`, onclick: 'Ayodhya_Road_Length()'},
        'Total No. of Roads': { value: safeValue('total_length_count'), onclick: 'Ayodhya_Road_Count()' },
        'Total Ward No.': { value: safeValue('ayo_ward'), onclick: 'Ayodhya_Ward_NO()' },
        'Road Count by Condition': {
            value: `
                Green - <a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Green'); updateNavBarWithFunctionName('Road Condition Good');" style="color:green; font-size:14px; ">${safeValue('condition_count_green')} (${safeValue('total_length_green')} km)</a><br>
                Red - <a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Red'); updateNavBarWithFunctionName('Road Condition Poor');" style="color:red; font-size:14px;">${safeValue('condition_count_red')} (${safeValue('total_length_red')} km)</a><br>
                Yellow - <a href="javascript:void(0)" onclick="Ayodhya_Condition_cat('condition','Yellow'); updateNavBarWithFunctionName('Road Condition Moderate');" style="color:yellow; font-size:14px;font-size:14px;">${safeValue('condition_count_yellow')} (${safeValue('total_length_yellow')} km)</a>
            `
        },

        'Road Count by Type': {
            value: `
                Major - <a href="javascript:void(0)" onclick="Ayodhya_Type_cat('type','Major'); updateNavBarWithFunctionName('Road Type Major');" style="color:blue;font-size:14px;">${safeValue('count_major')} (${safeValue('total_length_major')} km)</a><br>
                Minor - <a href="javascript:void(0)" onclick="Ayodhya_Type_cat('type','Minor'); updateNavBarWithFunctionName('Road Type Minor');" style="color:yellow;font-size:14px;">${safeValue('count_minor')} (${safeValue('total_length_minor')} km)</a>
            `,
            onclick: 'Ayodhya_Types()'
        },

        'Road Count by Material': {
            value: `
                Bitumen - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Bitumen'); updateNavBarWithFunctionName('Road Material Bitumen');" style="color:darkred;font-size:14px;">${safeValue('count_bitumen')} (${safeValue('total_length_bitumen')} km)</a><br>
                CC - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','CC'); updateNavBarWithFunctionName('Road Material CC');" style="color:#1ad7b0;font-size:14px;">${safeValue('count_cc')} (${safeValue('total_length_cc')} km)</a><br>
                Interlocking - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Interlocking'); updateNavBarWithFunctionName('Road Material Interlocking');" style="color:#2392ed;font-size:14px;">${safeValue('count_interlocking')} (${safeValue('total_length_interlocking')} km)</a><br>
                BOE - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','BOE'); updateNavBarWithFunctionName('Road Material BOE');" style="color:#C4566A;font-size:14px;">${safeValue('count_boe')} (${safeValue('total_length_boe')} km)</a><br>
                Kachcha - <a href="javascript:void(0)" onclick="Ayodhya_Material_cat('carriage_m','Kachcha'); updateNavBarWithFunctionName('Road Material Kachcha');" style="color:#6036d0;font-size:14px;">${safeValue('count_kachha')} (${safeValue('total_length_kachha')} km)</a>
            `,
            onclick: 'Ayodhya_Material()'
        },

        'Road Count by Ownership': {
            value: `
                ANN - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','ANN'); updateNavBarWithFunctionName('Road Ownership ANN');" style="color:#1dd2e2;font-size:14px;">${safeValue('count_nna')} (${safeValue('total_length_nna')} km)</a><br>
                PWD - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','PWD'); updateNavBarWithFunctionName('Road Ownership PWD');" style="color:#0f6050;font-size:14px;">${safeValue('count_pwd')} (${safeValue('total_length_pwd')} km)</a><br>
                PVT - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','PVT'); updateNavBarWithFunctionName('Road Ownership PVT');" style="color:#ed2323;font-size:14px;">${safeValue('count_pvt')} (${safeValue('total_length_pvt')} km)</a><br>
                NHAI - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','NHAI'); updateNavBarWithFunctionName('Road Ownership NHAI');" style="color:rgb(33,14,139);font-size:14px;">${safeValue('count_nhai')} (${safeValue('total_length_nhai')} km)</a><br>
                Railway - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','Railway'); updateNavBarWithFunctionName('Road Ownership Railway');" style="color:#c3c922;font-size:14px;">${safeValue('count_railway')} (${safeValue('total_length_railway')} km)</a><br>
                UPSBC Ltd - <a href="javascript:void(0)" onclick="Ayodhya_Ownership_cat('ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Road Ownership UPSBC Ltd.');" style="color:#821880;font-size:14px;">${safeValue('count_upsbc')} (${safeValue('total_length_upsbc')} km)</a>
            `,
            onclick: 'Ayodhya_Ownership()'
        }
    };

    Object.entries(summaryData).forEach(([title, details]) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${details.onclick ? `<a href="javascript:void(0)" style="color:black" onclick="${details.onclick}">${title}</a>` : title}</h3>
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
            getZoneBoundary(zoneNo);
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
            value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','${zoneNo}'); updateNavBarWithFunctionName('Zone-${zoneNo} Total Road Length');" style="color:black;font-size:14px;">${(data.length_km || 0).toFixed(2)} km</a>` 
        },
        { 
            title: 'Total No. of Roads', 
            value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('zone_no','${zoneNo}'); updateNavBarWithFunctionName('Zone-${zoneNo} Total Road Count');" style="color:black;font-size:14px;">${data.total_no_of_roads || 0}</a>` 
        },
        { 
            title: 'Road Type', 
            value: `Major <a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('${zoneNo}','type','Major'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Type Major');" style="color:blue;font-size:14px;">- ${data.total_major_sum || 0} (${(data.length_major || 0).toFixed(2)} km)</a> <br> 
                    Minor <a href="javascript:void(0)" onclick="Ayodhya_Zone_Type('${zoneNo}','type','Minor'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Type Minor');" style="color:yellow;font-size:14px;">- ${data.total_minor_sum || 0} (${(data.length_minor || 0).toFixed(2)} km)</a>`
        },
        { 
            title: 'Road Condition', 
            value: `Good <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('${zoneNo}','condition','Green'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Condition Good');" style="color:green;font-size:14px;">- ${data.count_green || 0} (${(data.length_green || 0).toFixed(2)} km)</a> <br> 
                    Moderate <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('${zoneNo}','condition','Yellow'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Condition Moderate');" style="color:yellow;font-size:14px;">- ${data.count_yellow || 0} (${(data.length_yellow || 0).toFixed(2)} km)</a> <br> 
                    Poor <a href="javascript:void(0)" onclick="Ayodhya_Zone_Condition('${zoneNo}','condition','Red'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Condition Poor');" style="color:red;font-size:14px;">- ${data.count_red || 0} (${(data.length_red || 0).toFixed(2)} km)</a>` 
        },
        { 
            title: 'Materials', 
            value: `Bitumen <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','Bitumen'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material Bitumen');" style="color:darkred;font-size:14px;">- ${data.bitumen || 0} (${(data.length_bitumen || 0).toFixed(2)} km)</a> <br>
                    CC <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','CC'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material CC');" style="color:#1ad7b0;font-size:14px;">- ${data.cc || 0} (${(data.length_cc || 0).toFixed(2)} km)</a> <br>
                    Interlocking <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','Interlocking'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material Interlocking');" style="color:#2392ed;font-size:14px;">- ${data.interlocking || 0} (${(data.length_interlocking || 0).toFixed(2)} km)</a> <br>
                    BOE <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','BOE'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material BOE');" style="color:#da6076;font-size:14px;">- ${data.boe || 0} (${(data.length_boe || 0).toFixed(2)} km)</a> <br>
                    Kachcha <a href="javascript:void(0)" onclick="Ayodhya_Zone_Material('${zoneNo}','carriage_m','Kachcha'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Material Kachcha');" style="color:#6036d0;font-size:14px;">- ${data.kachcha || 0} (${(data.length_kachcha || 0).toFixed(2)} km)</a>` 
        },
        { 
            title: 'Ownership', 
            value: `ANN <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','ANN'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership ANN');" style="color:cyan;font-size:14px;">- ${data.ann || 0} (${(data.length_ann || 0).toFixed(2)} km)</a> <br>
                    PWD <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','PWD'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership PWD');" style="color:#0f6050;font-size:14px;">- ${data.pwd || 0} (${(data.length_pwd || 0).toFixed(2)} km)</a> <br>
                    NHAI <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','NHAI'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership NHAI');" style="color:blue;font-size:14px;">- ${data.nhai || 0} (${(data.length_nhai || 0).toFixed(2)} km)</a> <br>
                    PVT <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','PVT'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership PVT');" style="color:#ed2323;font-size:14px;">- ${data.pvt || 0} (${(data.length_pvt || 0).toFixed(2)} km)</a> <br>
                    UPSBC <a href="javascript:void(0)" onclick="Ayodhya_Zone_Ownership('${zoneNo}','ownership','UPSBC Ltd.'); updateNavBarWithFunctionName('Zone-${zoneNo} Road Ownership UPSBC Ltd.');" style="color:#821880;font-size:14px;">- ${data.upsbc || 0} (${(data.length_upsbc || 0).toFixed(2)} km)</a>` 
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
            getwardBoundary(wardNo);

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
                        title: 'Total Road Length', 
                        value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no', '${wardNo}'); updateNavBarWithFunctionName('Ward-${wardNo} Total Road Length');" style="color:black;font-size:14px;">${responseData.length_km} km</a>` 
                    },
                    { 
                        title: 'Total No. of Roads', 
                        value: `<a href="javascript:void(0)" onclick="Ayodhya_Zone_no('ward_no', '${wardNo}'); updateNavBarWithFunctionName('Ward-${wardNo} Total Road Count');" style="color:black;font-size:14px;">${responseData.total_no_of_roads}</a>` 
                    },
                    { 
                        title: 'Road Type', 
                        value: `Major - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('${wardNo}', 'type', 'Major'); updateNavBarWithFunctionName('Ward-${wardNo} Road Type Major');" style="color:blue;font-size:14px;">${responseData.total_major_sum}</a><br> 
                                 Minor - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Type('${wardNo}', 'type', 'Minor'); updateNavBarWithFunctionName('Ward-${wardNo} Road Type Minor');" style="color:yellow;font-size:14px;">${responseData.total_minor_sum}</a>` 
                    },
                    { 
                        title: 'Road Condition', 
                        value: `Good - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('${wardNo}', 'condition', 'Green'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition Good');" style="color:green;font-size:14px;">${responseData.count_green}</a> 
                                <br> Moderate - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('${wardNo}', 'condition', 'Yellow'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition Moderate');" style="color:yellow;font-size:14px;">${responseData.count_yellow}</a> 
                                <br> Poor - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Condition('${wardNo}', 'condition', 'Red'); updateNavBarWithFunctionName('Ward-${wardNo} Road Condition Poor');" style="color:red;font-size:14px;">${responseData.count_red}</a>` 
                    },
                    { 
                        title: 'Materials', 
                        value: `Bitumen - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'Bitumen'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material Bitumen');" style="color:darkred;font-size:14px;">${responseData.bitumen}</a> 
                                <br> CC - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'CC'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material CC');" style="color:cyan;font-size:14px;">${responseData.cc}</a> 
                                <br> Interlocking - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'Interlocking'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material Interlocking');" style="color:#2392ed;font-size:14px;">${responseData.interlocking}</a> 
                                <br> BOE - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'BOE'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material BOE');" style="color:pink;font-size:14px;">${responseData.boe}</a> 
                                <br> Kachcha - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Material('${wardNo}', 'carriage_m', 'Kachcha'); updateNavBarWithFunctionName('Ward-${wardNo} Road Material Kachcha');" style="color:purple;font-size:14px;">${responseData.kachcha}</a>` 
                    },
                    { 
                        title: 'Ownership', 
                        value: `ANN - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'ANN'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership ANN');" style="color:cyan;font-size:14px;">${responseData.ann}</a> 
                                <br> PWD - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'PWD'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership PWD');" style="color:#0f6050;font-size:14px;">${responseData.pwd}</a> 
                                <br> PVT - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'PVT'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership PVT');" style="color:#ed2323;font-size:14px;">${responseData.pvt}</a> 
                                <br> NHAI - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'NHAI'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership NHAI');" style="color:blue;font-size:14px;">${responseData.nhai}</a> 
                                <br> UPSBC - <a href="javascript:void(0)" onclick="Ayodhya_Ward_Ownership('${wardNo}', 'ownership', 'UPSBC'); updateNavBarWithFunctionName('Ward-${wardNo} Road Ownership UPSBC');" style="color:#821880;font-size:14px;">${responseData.upsbc}</a>` 
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
    map.getLayers().getArray().slice().forEach(layer => {
        if (layer instanceof ol.layer.Vector 
            // && !isLayerInPreservedList(layer)
        ) {
            map.removeLayer(layer);
        }
    });
    map.getOverlays().clear();

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

        });
    } else {
        console.error('Expected an array but received:', data);
    }
}
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
                    console.log('GeoServer Response:', data);
                    if (data.features && data.features.length > 0) {
                        let properties = data.features[0].properties;
                        console.log("WMS Feature Properties:", properties);

                        let gisId = properties.gis_id;

                        if (gisId) {
                            console.log('Feature ID:', data.features[0].id);
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
                console.log("Feature Properties:", props);
                // let gisId = props.gis_id;
                const gisId = props.gis_id || props.gid || props.GIS_ID || null;

                if (!gisId) {
                    console.warn("No associated GIS ID found for selected feature.");
                }


                if (gisId) {
                    console.log("Selected feature: ", feature);
                    console.log("Feature ID: ", feature.getId());
                    console.log("Associated row: ", gisId);

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

function Table_Row_and_Layer_highlight(data) {
   // let dataTableBody_summary = document.getElementById("dataTableBody_summary");
    dataTableBody_summary.innerHTML = ""; 
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

/////-------------------------------Table for Drain-Zooming and highlight also------------/////
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

//---------------------popup code for road---------------------------//
function ANN_Road_popup() {
    // Create a popup element
    const popup = document.createElement('div');
    popup.id = 'popup_road';
    popup.style.display = 'none';

    document.body.appendChild(popup);

    // Create an overlay for the popup
    // const overlay = new ol.Overlay({
    //     element: popup,
    //     positioning: 'top',
    //     stopEvent: true,
    //     offset: [0, -10]
    // });
    // map.addOverlay(overlay);

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
                    .then(response => response.json())
                    .then(data => {
                        if (data.features && data.features.length > 0) {
                            const feature = data.features[0];
                            const properties = feature.properties;
                            selectedRoadProperties = properties;

                            // Show the popup with feature info
                            popup.innerHTML = buildPopupHTML(properties);
                            popup.style.display = 'block';

                        } else {
                            popup.style.display = 'none';
                        }
                    })
                    .catch(() => {
                        popup.style.display = 'none';
                    });
            } else {
                popup.style.display = 'none';
            }
        } else {
            // Assume Vector Layer (WFS GeoJSON)
            let found = false;
            map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
                if (layer === currentLayer) {
                    const properties = feature.getProperties();
                    selectedRoadProperties = properties;

                    popup.innerHTML = buildPopupHTML(properties);
                    popup.style.display = 'block';

                    found = true;
                    return true;
                }
            }, { hitTolerance: 5 });

            if (!found) {
                popup.style.display = 'none';
            }
        }
    });

    function buildPopupHTML(properties) {
        return `
            <div style="background-color:white; padding:10px; border-radius:6px;">
                <table style="background-color:white;">
                    <tr><td><strong>Field Name</strong></td><td><strong>Value</strong></td></tr>
                    <tr><td><strong>Zone No.</strong></td><td>${properties.zone_no || 'N/A'}</td></tr>
                    <tr><td><strong>Zone Name</strong></td><td>${properties.zone_name || 'N/A'}</td></tr>
                    <tr><td><strong>Ward No.</strong></td><td>${properties.ward_no || 'N/A'}</td></tr>
                    <tr><td><strong>Ward Name</strong></td><td>${properties.ward_name || 'N/A'}</td></tr>
                    <tr><td><strong>Right of Way</strong></td><td>${properties.row_meter || 'N/A'}</td></tr>
                    <tr><td><strong>Carriage Width</strong></td><td>${properties.carriage_w || 'N/A'}</td></tr>
                    <tr><td><strong>Type</strong></td><td>${properties.type || 'N/A'}</td></tr>
                    <tr><td><strong>Condition</strong></td><td>${properties.condition || 'N/A'}</td></tr>
                    <tr><td><strong>Material</strong></td><td>${properties.carriage_m || 'N/A'}</td></tr>
                    <tr><td><strong>Ownership</strong></td><td>${properties.ownership || 'N/A'}</td></tr>
                    <tr><td><strong>Length(Km)</strong></td><td>${properties.length_km || 'N/A'}</td></tr>
                    <tr><td><strong>Road Name</strong></td><td>${properties.road_name || 'N/A'}</td></tr>
                </table>
                <div style="margin-top: 10px; text-align: center;">
                    <button onclick="KNN_Road_update()" style="padding: 6px 12px; border: none; background-color: #007bff; color: white; border-radius: 4px; cursor: pointer;">
                        Update Road Info
                    </button>
                </div>
            </div>
        `;
    }
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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

    updateMapLayerWithFilter(cqlFilter);
    updateTableWithFilteredData(cqlFilter);
  //  Ayodhya_Types(cqlFilter)
}

function updateMapLayerWithFilter(cqlFilter) {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const wfsUrl = `${GEOSERVER_BASE_URL}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_data&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

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

// Function to fetch zones in dropdown
function fetchZonesmat() {
    const zoneDropdown = document.getElementById('zoneSelectmat');

    zoneDropdown.innerHTML = '';

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

        updateMapLayermat(selectedZoneNo);
        const cqlFilter = `zone_no=${selectedZoneNo}`;
        updateTableWithFilteredDatamat(cqlFilter);
    }
});

function updateMapLayermat(zoneNo) {
    // Remove any existing layer 
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            title: `Zone ${zoneNo} Roads`,
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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

    updateMapLayerWithFiltermat(cqlFilter);
    updateTableWithFilteredDatamat(cqlFilter);
    // Ayodhya_Types(cqlFilter)
}
function updateMapLayerWithFiltermat(cqlFilter) {
    removeCurrentLayer();
    clearVectorLayers();

    currentLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const wfsUrl = `${GEOSERVER_BASE_URL}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_material&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const wfsUrl = `${GEOSERVER_BASE_URL}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ANN_Summary:ayodhaya_road_ownership&outputFormat=application/json&CQL_FILTER=${encodeURIComponent(cqlFilter)}`;

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
//             url: `${GEOSERVER_BASE_URL}/wms`,
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
//-------------------------------Road Filter and Summary data table code ----------------------------
function Ayodhya_Zone_no(column, value) {
    removeCurrentLayer();
    clearVectorLayers();
    // Define dynamic CQL filter
    let cqlFilter = `${column}='${value}'`; // Ensure column name matches GeoServer schema
    console.log(`Applying CQL_FILTER: ${cqlFilter}`); // Debugging log
    // Create a single WMS layer with CQL filter
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','Condition_legend','Material_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','type_legend','Material_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','type_legend','Condition_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            document.getElementById('dataTable_Drain').style.display = 'none';
            document.getElementById('tableContainer_Drain').style.display = 'none';
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','type_legend','Material_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','Condition_legend','Material_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','type_legend','Condition_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            document.getElementById('dataTable_Drain').style.display = 'none';
            document.getElementById('tableContainer_Drain').style.display = 'none';
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    document.getElementById('type_legend').style.display = 'block';
    const hideElementIds = ['Ownership_legend','Condition_legend','Material_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });

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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','type_legend','Material_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Ownership_legend','type_legend','Condition_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
          
            document.getElementById('dataTable_Drain').style.display = 'none';
            document.getElementById('tableContainer_Drain').style.display = 'none';
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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

    document.getElementById('Drain_Type_Legend').style.display = 'block';
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    document.getElementById('Drain_Condition_Legend').style.display = 'block';
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Material_Legend','Drain_Type_Legend','Drain_Condition_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            document.getElementById('dataTable_summary').style.display = 'none';
            document.getElementById('tableContainer_summary').style.display = 'none';
          
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    document.getElementById('Drain_Type_Legend').style.display = 'block';
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Condition_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    document.getElementById('Drain_Condition_Legend').style.display = 'block';
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Material_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    document.getElementById('Drain_Material_Legend').style.display = 'block';
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Status_Legend','Drain_Type_Legend','Drain_Condition_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            url: `${GEOSERVER_BASE_URL}/wms`,
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
    const hideElementIds = ['Material_legend','type_legend','Condition_legend','Ownership_legend','Priority_legend','Scoreing_tableContainer',
    'Drain_Material_Legend','Drain_Type_Legend','Drain_Condition_Legend'];

    hideElementIds.forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    });
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
            document.getElementById('dataTable_summary').style.display = 'none';
            document.getElementById('tableContainer_summary').style.display = 'none';
          
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


//------------------download map and excel------------------------//
const downloadMapandExcel = document.querySelector(".fa-print");

downloadMapandExcel.addEventListener("click", () => {
// function downloadTableToExcel() {
    const table = document.getElementById('dataTable_summary');

    if (!table || table.rows.length === 0) {
        alert("No data in table. Please apply a filter first.");
        return;
    }
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.table_to_sheet(table);
    XLSX.utils.book_append_sheet(wb, ws, "FilteredData");
    XLSX.writeFile(wb, `Filtered_Table_${Date.now()}.xlsx`);

  // Print Map Button Functionality
    // Open print dialog
    window.print();
})




//------------------------------------------------ ayodhya boundary highlight ---------------------------------------------

let currentZoneLayer = null; // Store the current layer

function getZoneBoundary(zoneNo) {
    fetch(`${BASE_URL}/getZoneBoundary?zone_no=${zoneNo}`)
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
                color: 'red',
                width: 3
            }),
          
        })
    });

    map.addLayer(currentZoneLayer);

    // Zoom to the feature
    const extent = vectorSource.getExtent();
    map.getView().fit(extent, { duration: 1000, padding: [50, 50, 50, 50] });
}

//------------------------------------------------ Ward Boundary --------------------------------------------------------

function getwardBoundary(wardNo) {
    fetch(`${BASE_URL}/getWardBoundary?ward_numbe=${wardNo}`)
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

