/*----------------------------------------- javascript for map----------------------------------------- */

var map, geojson, featureOverlay, overlays, style;
var selected, features, layer_name, layerControl;
var content;
var selectedFeature;
// const london = fromLonLat([-0.12755, 51.507222]);

var view = new ol.View({
projection: 'EPSG:4326',
center: [81.00046, 26.8269],
zoom: 7,
});

var view_ov = new ol.View({
projection: 'EPSG:4326',
center: [28.55, 77.65],
zoom: 9,
}); 

var base_maps = new ol.layer.Group({
'title': 'Base maps',
layers: [
    new ol.layer.Tile({
        title: 'OSM',
        type: 'base',
        visible: true,
        source: new ol.source.OSM()
    }),
new ol.layer.Tile({
    title: 'CartoDB Positron',
    type: 'base',
    visible: false,
    source: new ol.source.XYZ({
        url: 'https://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    })
}),
new ol.layer.Tile({
    source:new ol.source.TileJSON({
        attributions:'@MapTiler',
        url:'https://api.maptiler.com/maps/toner-v2/tiles.json?key=iVy8qXSX5hN7aJhQp2Na'
    }),
    title:'Toner',
    type:'base',
    visible:false
}),

new ol.layer.Tile({
    source:new ol.source.TileJSON({
        attributions:'@MapTiler',
        url:'https://api.maptiler.com/maps/topo-v2/tiles.json?key=iVy8qXSX5hN7aJhQp2Na'
    }),
    title:'Topo',
    type:'base',
    visible:false,
    maxZoom: 23
}),

new ol.layer.Tile({
    source:new ol.source.TileJSON({
        attributions:'@MapTiler',
        url:'https://api.maptiler.com/maps/backdrop/tiles.json?key=iVy8qXSX5hN7aJhQp2Na'
    }),
    title:'Backdrop',
    type:'base',
    visible:false
}),

new ol.layer.Tile({
    source:new ol.source.TileJSON({
        attributions:'@MapTiler',
        url:'https://api.maptiler.com/maps/outdoor-v2/tiles.json?key=iVy8qXSX5hN7aJhQp2Na'
    }),
    title:'Outdoor',
    type:'base',
    visible:false
}),
    new ol.layer.Tile({
        title: 'Satellite',
        type: 'base',
        visible: false,
        source: new ol.source.XYZ({
            //  attributions: ['Powered by Esri',
            //      'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
            //  ],
            attributionsCollapsible: false,
            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            maxZoom: 23
        })
    }),
]
});

var OSM = new ol.layer.Tile({
source: new ol.source.OSM(),
type: 'base',
title: 'OSM',
});

var overlays = new ol.layer.Group({
'title': 'Overlays',
layers: []
});

map = new ol.Map({
target: 'map',
view: view,
// overlays: [overlay]
});

map.addLayer(base_maps);
map.addLayer(overlays);

// Define city coordinates
const cityCoordinates = {
    lucknow: [80.9462, 26.8467], 
    ayodhya: [82.1987, 26.7996], 
    ghaziabad: [77.4538, 28.6692],
    gorakhpur: [83.3732, 26.7606],
    shahjahapur: [79.9109, 27.8815],
    prayagraj: [81.8463, 25.4358],
    kanpur: [80.3319, 26.4499],
    agra: [78.0081, 27.1767],
    varanasi: [83.0076, 25.3176],
    meerut: [77.7064, 28.9845],
    bareilly: [79.4150, 28.3670],
    aligarh: [78.0790, 27.8974],
    moradabad: [78.7747, 28.8386],
    saharanpur: [77.5500, 29.9640],
    jhansi: [78.5768, 25.4486],
    firozabad: [78.4018, 27.1591],
    mathura: [77.6737, 27.4924]
};


layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    tipLabel: 'Layers', // Optional label for button
    groupSelectStyle: 'children', // Can be 'children' [default], 'group' or 'none'
    collapseTipLabel: 'Collapse layers',
    });
    map.addControl(layerSwitcher);
    
    layerSwitcher.renderPanel();

var overview=new ol.control.OverviewMap({
        view:view_ov,
        collapseLabel:'o',
        label:'o',
        layers:[OSM]
        });
        map.addControl(overview);
        
// var boundary = new ol.layer.Image({
//           title: "UP Boundary",
//           //     extent: [-180, -90, -180, 90],
//           source: new ol.source.ImageWMS({
//             url: "http://localhost:8080/geoserver/PostgreSQL/wms?",
//             params: {
//               LAYERS: "PostgreSQL:up_boundary",
//             },
//             ratio: 1,
//             serverType: "geoserver",
//           }),
//         });
//         //overlays.getLayers().push(LNN_Boundary);
//         map.addLayer(boundary);


var boundary = new ol.layer.Image({

            title: "U.P. Boundary",
            //     extent: [-180, -90, -180, 90],
            source: new ol.source.ImageWMS({
              url: "http://localhost:8080/geoserver/above_10m/wms?",
              params: {
                LAYERS: "PostgreSQL:UP_District",
              },
              ratio: 1,
              serverType: "geoserver",
            }),
          });
          //overlays.getLayers().push(LNN_Boundary);
          map.addLayer(boundary);

var nagar_nigam = new ol.layer.Image({
            title: "Nagar Nigam Boundary",
            //     extent: [-180, -90, -180, 90],
            source: new ol.source.ImageWMS({
              url: "http://localhost:8080/geoserver/All_NN_Boundaries/wms?",
              params: {
                LAYERS: "All_NN_Boundaries:Nagar_Nigam_Boundary_17",
              },
              ratio: 1,
              serverType: "geoserver",
            }),
          });
          //overlays.getLayers().push(LNN_Boundary);
          map.addLayer(nagar_nigam);



//-----------------------popup ------------------------------//

map.on('click', function (evt) {
    map.forEachFeatureAtPixel(evt.pixel, function(feature) {
        const attributes = feature.getProperties(); // Get feature attributes
        showPopup(evt.coordinate, attributes); // Function to show popup
    });
});

function showPopup(coordinate, attributes) {
    const popupContent = document.getElementById('popup-content'); // Ensure you have an element for popup
    popupContent.innerHTML = ''; // Clear previous content

    // Iterate through attributes and create HTML for popup
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${key}:</strong> ${attributes[key]}`;
            popupContent.appendChild(p);
        }
    }

    overlay.setPosition(coordinate); // Position the popup
}

const popupContainer = document.getElementById('popup');
const overlay = new ol.Overlay({
    element: popupContainer,
    autoPan: true,
    autoPanAnimation: {
        duration: 250,
    },
});
map.addOverlay(overlay);

const closer = document.getElementById('popup-closer');
closer.onclick = function() {
    overlay.setPosition(undefined); // Hide popup
    closer.blur(); // Remove focus from button
    return false;
};




/*-------------------------- javascript for sidebar---------------------------------- */

document.getElementById('nagarNigamSelect').addEventListener('change', function() {

    
    var buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = ''; // Clear any existing buttons

    // Create a container for the button and the selection field
    var buttonAndSelectContainer = document.createElement('div');
    buttonAndSelectContainer.className = 'button-and-select-container';

    // Create the "Dashboard" button
    var dashboardButton = document.createElement('button');
    dashboardButton.innerText = 'Dashboard';
    dashboardButton.className = 'action-button';

    var selectedCity = this.value;

    if (cityCoordinates[selectedCity]) {
        var coords = cityCoordinates[selectedCity];
        
        view.setCenter(coords);  // Directly use the coordinates since the projection is EPSG:4326
        view.setZoom(12);  // Set the desired zoom level for city
    }
    
    
     // Call specific functions for each city
     if (selectedCity === 'agra') {
        Agra();
    } else if (selectedCity === 'aligarh') {
        Aligarh();
    } else if (selectedCity === 'lucknow') {
        LucknowFunction(); // Call the function for Lucknow
    } else if (selectedCity === 'ayodhya') {
        AyodhyaFunction(); // Call the function for Ayodhya
    } else if (selectedCity === 'ghaziabad') {
        GhaziabadFunction(); // Call the function for Ghaziabad
    } else if (selectedCity === 'gorakhpur') {
        GorakhpurFunction(); // Call the function for Gorakhpur
    } else if (selectedCity === 'shahjahapur') {
        ShahjahapurFunction(); // Call the function for Shahjahapur
    } else if (selectedCity === 'prayagraj') {
        PrayagrajFunction(); // Call the function for Prayagraj
    } else if (selectedCity === 'kanpur') {
        KanpurFunction(); // Call the function for Kanpur
    } else if (selectedCity === 'varanasi') {
        VaranasiFunction(); // Call the function for Varanasi
    } else if (selectedCity === 'meerut') {
        MeerutFunction(); // Call the function for Meerut
    } else if (selectedCity === 'bareilly') {
        BareillyFunction(); // Call the function for Bareilly
    } else if (selectedCity === 'moradabad') {
        MoradabadFunction(); // Call the function for Moradabad
    } else if (selectedCity === 'saharanpur') {
        SaharanpurFunction(); // Call the function for Saharanpur
    } else if (selectedCity === 'jhansi') {
        JhansiFunction(); // Call the function for Jhansi
    } else if (selectedCity === 'firozabad') {
        FirozabadFunction(); // Call the function for Firozabad
    } else if (selectedCity === 'mathura') {
        MathuraFunction(); // Call the function for Mathura
    }

    //------------------------- dashboard button redirecting to particular page -----------------------
    dashboardButton.onclick = function() {
        if (selectedCity === 'lucknow') {
            window.location.href = '../templates/lucknow.html';
        } 
        else if (selectedCity === 'ayodhya') {
            window.location.href = '../templates/ayodhya.html';

        }
        else if (selectedCity === 'ghaziabad') {
            window.location.href = 'http://localhost:8080/Nagar_Nigam_Dashboard/index.html';
        }
         else if (selectedCity === 'gorakhpur') {
            window.location.href = '../templates/gorakhpur.html';
        }
        else if (selectedCity === 'shahjahapur') {
            window.location.href = '../templates/shahjahanpur.html';
        } 
        else if (selectedCity === 'prayagraj') {
            window.location.href = '../templates/prayagraj.html';
        }
        else if (selectedCity === 'kanpur') {
            window.location.href = '../templates/kanpur.html';
        } 
        else if (selectedCity === 'agra') {
            window.location.href = '../templates/agra.html';
        }
        else if (selectedCity === 'varanasi') {
           window.location.href = '../templates/varanasi.html';
       }
       else if (selectedCity === 'meerut') {
           window.location.href = '../templates/Meerut.html';
       } 
       else if (selectedCity === 'bareilly') {
           window.location.href = '../templates/bareilly.html';
       }
       else if (selectedCity === 'aligarh') {
           window.location.href = '../templates/aligarh.html';
       } 
       else if (selectedCity === 'moradabad') {
           window.location.href = '../templates/moradabad.html';

        }  
       else if (selectedCity === 'saharanpur') {
            window.location.href = '../templates/saharanpur.html';
        } 
        else if (selectedCity === 'jhansi') {
            window.location.href = '../templates/jhansi.html';
        }
        else if (selectedCity === 'firozabad') {
            window.location.href = '../templates/Firozabad.html';
        } 
        else if (selectedCity === 'mathura') {
            window.location.href = '../templates/mathura.html';}
  
    };
  
    // Create the selection field for the years (CM-Grid Roads options)
    var yearSelect = document.createElement('select');
    yearSelect.className = 'select-field select-year';
    yearSelect.id = "roadSelector";

    // Define the options based on the selected city
    const cmGridOptions = {
        lucknow: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1"  id="lko_cm_22">Phase 1</option>
        <option value="GPR" >GPR Layer</option>
       
         `
        //  <option value="2022-2023" id="lko_cm_22">2022-2023</option>
        //  <option value="2023-2024" id="lko_cm_23">2023-2024</option>
        //  <option value="2024-2025" id="lko_cm_24">2024-2025</option>
         ,
        ayodhya: `
            <option value="">CM-Grid Roads</option>
            <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        ghaziabad: `
            <option value="">CM-Grid Roads</option>
            <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
           
        `,
        gorakhpur: `
            <option value="">CM-Grid Roads</option>
             <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        shahjahapur: `
        <option value="">CM-Grid Roads</option>
         <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
         `,
        prayagraj: `
            <option value="">CM-Grid Roads</option>
            <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        kanpur: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        agra: `
            <option value="">CM-Grid Roads</option>
            <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,      
        varanasi: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        meerut: `
        <option value="">CM-Grid Roads</option>
         <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `, 
        bareilly: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        aligarh: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        moradabad: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `, 
        saharanpur: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        jhansi: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        firozabad: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `, 
        mathura: `
        <option value="">CM-Grid Roads</option>
        <option value="Phase1">Phase 1</option>
            <option value="Phase2">Phase 2</option>
        `,
        default: `
            <option value="">CM-Grid Roads</option>
        `
    };

    // Set options based on selected city or default
    yearSelect.innerHTML = cmGridOptions[selectedCity] || '';


    // Append the button and selection field to the new container
    buttonAndSelectContainer.appendChild(dashboardButton);
    buttonAndSelectContainer.appendChild(yearSelect);
    buttonContainer.appendChild(buttonAndSelectContainer);

    updateCards(selectedCity);
    
        // Add a change event listener for the year select dropdown
        // / Add a change event listener for the year select dropdown
        yearSelect.addEventListener('change', function() {
            var selectedYear = this.value;
            if (selectedCity && selectedYear) {
                callFunctionForCityAndYear(selectedCity, selectedYear);
            }
            // Show or hide the legend based on the selected value
            var selectedValue = yearSelect.value;  // Define selectedValue here
            // Show or hide the legend based on the selected value
            var legendBox = document.getElementById('gpr-legend');
            if (selectedValue === 'GPR') {
                // Show the GPR legend if "GPR Layer" is selected
                legendBox.classList.add('visible');
            } else {
                // Hide the GPR legend if any other option is selected
                legendBox.classList.remove('visible');
            }
        });
});


// Data for the cards for each city
const cityCardData = {
    default: [
        { title: ' Total Road Count', content: 'Total: 337881' },
        { title: ' Total Road Length', content: '41348.63 km' },
        { title: 'Total Above 10m Road Count', content: '10496' },
        { title: 'Total Above 10m Road Length', content: '5174.21 km' },
       
    ],

    agra: [
        { title: 'Road Count', content: 'Total: 18167' },
        { title: 'Road Length', content: '2591.49 km' },
        { title: 'Above 10m Road Count', content: '771' },
        { title: 'Above 10m Road Length', content: '314.2 km' },
    ],

    aligarh: [
        { title: 'Road Count', content: 'Total: 14690' },
        { title: 'Road Length', content: '1980.01 km' },
        { title: 'Above 10m Road Count', content: '388' },
        { title: 'Above 10m Road Length', content: '199.05 km' },
       
    ],

    ayodhya: [
        { title: 'Road Count', content: 'Total: 10549' },
        { title: 'Road Length', content: '1178.98 km' },
        { title: 'Above 10m Road Count', content: '278' },
        { title: 'Above 10m Road Length', content: '149.21 km' },
       
       
    ],

    bareilly: [
        { title: 'Road Count', content: 'Total: 15800' },
        { title: 'Road Length', content: '1621.63km' },
        { title: 'Above 10m Road Count', content: '453' },
        { title: 'Above 10m Road Length', content: '160 km' },
    ],

    firozabad: [
        { title: 'Road Count', content: 'Total: 6053' },
        { title: 'Road Length', content: '809.04 km' },
        { title: 'Above 10m Road Count', content: '92' },
        { title: 'Above 10m Road Length', content: '54.28 km' },
    ],

    ghaziabad: [
        { title: 'Road Count', content: 'Total: 19128' },
        { title: 'Road Length', content: '2774.13 km' },
        { title: 'Above 10m Road Count', content: '767' },
        { title: 'Above 10m Road Length', content: '387.18 km' },
    ],

    gorakhpur: [
        { title: 'Road Count', content: 'Total: 16121' },
        { title: 'Road Length', content: '2136.17 km' },
        { title: 'Above 10m Road Count', content: '585' },
        { title: 'Above 10m Road Length', content: '286.14 km' },
       
    ],

    jhansi: [
        { title: 'Road Count', content: 'Total: 10845' },
        { title: 'Road Length', content: '1810.17 km' },
        { title: 'Above 10m Road Count', content: '298' },
        { title: 'Above 10m Road Length', content: '154.98 km' },
    ],

    kanpur: [
        { title: 'Road Count', content: 'Total: 23017' },
        { title: 'Road Length', content: '3776.6 km' },
        { title: 'Above 10m Road Count', content: '347' },
        { title: 'Above 10m Road Length', content: '302.96 km' },
       
    ],

    prayagraj:  [
        { title: 'Road Count', content: 'Total:16046' },
        { title: 'Road Length', content: '3089.39 km' },
        { title: 'Above 10m Road Count', content: '1026' },
        { title: 'Above 10m Road Length', content: '557.35 km' },
       
    ],
    lucknow: [
        { title: 'Road Count', content: 'Total: 82354' },
        { title: 'Road Length', content: '9480.73 km' },
        { title: 'Above 10m Road Count', content: '2872' },
        { title: 'Above 10m Road Length', content: '1404.53 km' },
        // { title: 'Below 10m Road', content: 'Municipal' },
       
    ],
    
    mathura: [
        { title: 'Road Count', content: 'Total: 12970' },
        { title: 'Road Length', content: '712.39 km' },
        { title: 'Above 10m Road Count', content: '285' },
        { title: 'Above 10m Road Length', content: '207.37 km' },   
     ],

    meerut: [
        { title: 'Road Count', content: 'Total: 19282' },
        { title: 'Road Length', content: '2947.2 km' },
        { title: 'Above 10m Road Count', content: '637' },
        { title: 'Above 10m Road Length', content: '353.49 km' },
      
    ],
    
    moradabad: [
        { title: 'Road Count', content: 'Total: 8331' },
        { title: 'Road Length', content: '1129.45 km' },
        { title: 'Above 10m Road Count', content: '545' },
        { title: 'Above 10m Road Length', content: '205.4 km' },       
    ],

    saharanpur: [
        { title: 'Road Count', content: 'Total: 9811' },
        { title: 'Road Length', content: '1399.36 km' },
        { title: 'Above 10m Road Count', content: '310' },
        { title: 'Above 10m Road Length', content: '143.23 km' },
       
    ],

    shahjahapur: [
        { title: 'Road Count', content: 'Total: 6558' },
        { title: 'Road Length', content: '623.98 km' },
        { title: 'Above 10m Road Count ', content: '182' },
        { title: 'Above 10m Road Length', content: '115.47 km' },
       
    ],
   
    varanasi: [
        { title: 'Road Count', content: 'Total: 30226' },
        { title: 'Road Length', content: '2272.63 km' },
        { title: 'Above 10m Road Count', content: '701' },
        { title: 'Above 10m Road Length', content: '276.51 km' },
       
    ],
   
  
};

// Function to add cards dynamically with unique colors
function addCards(cardData) {
    const container = document.querySelector('.cards-container');
    container.innerHTML = ''; // Clear existing cards

    cardData.forEach(card => {
        // Create card div
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style.backgroundColor = getUniqueColor(); // Set unique color

        // Create card title
        const cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = card.title;

        // Create card content
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        cardContent.innerHTML = card.content;

        // Append title and content to card
        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardContent);

        // Append card to container
        container.appendChild(cardDiv);
    });
}

// Function to update cards based on selected city
function updateCards(city) {
    const cardData = cityCardData[city] || cityCardData['default'];
    addCards(cardData);
}

// Data for the colors
const darkColors = ['#D49868', '#DB8888', '#FFC3A0', '#FF677D', '#45A882', '#CC6868', '#31A2AC', '#C9A655', '#D9BF77'];
let colorIndex = 0;

function getUniqueColor() {
    const color = darkColors[colorIndex % darkColors.length];
    colorIndex++;
    return color;
}
// Show default cards when the page loads
updateCards('default');

//-----------------------nagar nigam select layer -------------------------------
function Agra() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Agra",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function Aligarh() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Aligarh",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function AyodhyaFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Ayodhaya",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function BareillyFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Bareilly",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function FirozabadFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: "http://localhost:8080/geoserver/above_10m/wms?",
        params: {
          LAYERS: "above_10m:Firozabad",
        },
        ratio: 1,
        serverType: "geoserver",
      }),
    });
    map.addLayer(currentLayer);
}

function GhaziabadFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Ghaziabad",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function GorakhpurFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Gorakhpur",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function JhansiFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Jhansi",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function KanpurFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Kanpur",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function MoradabadFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Moradabad",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function MeerutFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "	above_10m:Meerut_New10m",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function PrayagrajFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Prayagraj_above10m",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function SaharanpurFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "	above_10m:saharanpur_new",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function ShahjahapurFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Shahjahanpur",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function VaranasiFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Varanasi",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

function LucknowFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:lnn_roads10",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}


function MathuraFunction() {
    // removeCurrentLayer();
    currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: "http://localhost:8080/geoserver/above_10m/wms?",
            params: {
              LAYERS: "above_10m:Mathura_New10m",
            },
            ratio: 1,
            serverType: "geoserver",
          }),
    });
    map.addLayer(currentLayer);
}

//-----------------------CM grid year wise -------------------------------
function callFunctionForCityAndYear(city, year) {
    if (city === 'lucknow') {
        if (year === 'Phase1') {
            performLucknowPhase1Action();
        } else if (year === 'GPR') {
            performLucknowPhase2Action();
        }
    } 
    else if (city === 'aligarh') {
        if (year === 'Phase1') {
            performAligarhPhase1Action();
        } else if (year === 'Phase2') {
            performAligarhPhase2Action();
        }
    } 
    else if (city === 'ayodhya') {
        if (year === 'Phase1') {
            performAyodhyaPhase1Action();
        } else if (year === 'Phase2') {
            performAyodhyaPhase2Action();
        }
    } 
    else if (city === 'bareilly') {
        if (year === 'Phase1') {
            performBareillyPhase1Action();
        } else if (year === 'Phase2') {
            performBareillyPhase2Action();
        }
    } 
    else if (city === 'firozabad') {
        if (year === 'Phase1') {
            performFirojabadPhase1Action();
        } else if (year === 'Phase2') {
            performFirojabadPhase2Action();
        }
    } 
    else if (city === 'ghaziabad') {
        if (year === 'Phase1') {
            performGhaziabadPhase1Action();
        } else if (year === 'Phase2') {
            performGhaziabadPhase2Action();
        }
    }
    else if (city === 'gorakhpur') {
        if (year === 'Phase1') {
            performGorakhpurPhase1Action();
        } else if (year === 'Phase2') {
            performGorakhpurPhase2Action();
        }
    } 
    else if (city === 'jhansi') {
        if (year === 'Phase1') {
            performJhansiPhase1Action();
        } else if (year === 'Phase2') {
            performJhansiPhase2Action();
        }
    } 
    else if (city === 'kanpur') {
        if (year === 'Phase1') {
            performKanpurPhase1Action();
        } else if (year === 'Phase2') {
            performKanpurPhase2Action();
        }
    } 
    else if (city === 'moradabad') {
        if (year === 'Phase1') {
            performMoradabadPhase1Action();
        } else if (year === 'Phase2') {
            performMoradabadPhase2Action();
        }
    } 
    else if (city === 'meerut') {
        if (year === 'Phase1') {
            performMeerutPhase1Action();
        } else if (year === 'Phase2') {
            performMeerutPhase2Action();
        }
    } 
    else if (city === 'prayagraj') {
        if (year === 'Phase1') {
            performPrayagrajPhase1Action();
        } else if (year === 'Phase2') {
            performPrayagrajPhase2Action();
        }
    } 
    else if (city === 'saharanpur') {
        if (year === 'Phase1') {
            performSaharanpurPhase1Action();
        } else if (year === 'Phase2') {
            performSaharanpurPhase2Action();
        }
    } 
    else if (city === 'shahjahapur') {
        if (year === 'Phase1') {
            performShahjahapurPhase1Action();
        } else if (year === 'Phase2') {
            performShahjahapurPhase2Action();
        }
    } 
    else if (city === 'varanasi') {
        if (year === 'Phase1') {
            performVaranasiPhase1Action();
        } else if (year === 'Phase2') {
            performVaranasiPhase2Action();
        }
    } 
    else if (city === 'mathura') {
        if (year === 'Phase1') {
            performMathuraPhase1Action();
        } else if (year === 'Phase2') {
            performMathuraPhase2Action();
        }
    } 
    // Add other cities and year actions here...
}
var currentLayer=null;
//------------------- Define functions for Lucknow
function performLucknowPhase1Action() {
    console.log('Fetching data for Lucknow 2022-2023');
   
        removeCurrentLayer();
        // clearVectorLayers();
    
        // Create the WMS layer
        currentLayer = new ol.layer.Image({
            title: 'Zone Boundary',
            source: new ol.source.ImageWMS({
                url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
                params: {
                    'LAYERS': 'All_CM_Grid_Road:Lucknow_phase_1',
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
    
    function  performAligarhPhase1Action() {
        console.log('Fetching data for Lucknow 2023-2024');
         // Create the WMS layer
         currentLayer = new ol.layer.Image({
            title: 'CM Grid Road',
            source: new ol.source.ImageWMS({
                url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
                params: {
                    'LAYERS': 'All_CM_Grid_Road:Aligarh_Phase_1',
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
function  performAyodhyaPhase1Action() {
    console.log('Fetching data for Lucknow 2023-2024');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Ayodhaya_Phase1',
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
function  performBareillyPhase1Action() {
    console.log('Fetching data for Bareilly phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Bareilly_Phase_1',
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
function  performFirojabadPhase1Action() {
    console.log('Fetching data for Lucknow 2023-2024');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Firozabad_Phase_1',
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
//-------------------- Define functions for ghaziabad
function performGhaziabadPhase1Action() {
    console.log('Fetching data for ghaziabad Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Ghaziabad_Phase_1',
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

function performGorakhpurPhase1Action() {
    console.log('Fetching data for ghaziabad Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Gorakhpur_Phase_1',
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
function performKanpurPhase1Action() {
    console.log('Fetching data for ghaziabad Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Kanpur_Phase_1',
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

function performJhansiPhase1Action() {
    console.log('Fetching data for ghaziabad Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Jhansi_Phase_1',
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

function performMoradabadPhase1Action() {
    console.log('Fetching data for ghaziabad Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Moradabad_Phase_1',
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
function performMeerutPhase1Action() {
    console.log('Fetching data for ghaziabad Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Meerut_Phase_1',
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
function performPrayagrajPhase1Action() {
    console.log('Fetching data for Prayagraj Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Prayagraj_Phase_1',
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
function performSaharanpurPhase1Action() {
    console.log('Fetching data for Saharanpur Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Saharanpur_Phase_1',
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
function  performShahjahapurPhase1Action() {
    console.log('Fetching data for Shahjahpur Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Shahjahanpur_Phase_1',
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
function  performVaranasiPhase1Action() {
    console.log('Fetching data for Varanasi Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Varanasi_Phase1',
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

function  performMathuraPhase1Action() {
  //  removeCurrentLayer();
  //  clearAllVectorLayers();
    console.log('Fetching data for ghaziabad Phase1');
     // Create the WMS layer
     currentLayer = new ol.layer.Image({
        title: 'CM Grid Road',
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/All_CM_Grid_Road/wms',
            params: {
                'LAYERS': 'All_CM_Grid_Road:Mathura_Phase_1',
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
//------------------function for Phase2-------

function performLucknowPhase2Action() {
    removeCurrentLayer();
    console.log('Fetching data for Lucknow 2024-2025');

     currentLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
            params: {
                'LAYERS': 'LNN_Summary:GPR_Data',
                'TILED': true
            },
            ratio: 1,
            serverType: 'geoserver'
        })
    });

    map.addLayer(currentLayer);
    GPR_Road();

}

function GPR_Road() {
    // Create a popup element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'absolute';
    //  popup.style.background = 'white';
    popup.style.border = '3px solid black';
    popup.style.padding = '0px';
     popup.style.width = '160px';
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
                      <table style=background-color:white; >
                     
                       <tr style=background-color:skyblue;><td> <strong>Name</strong></td><td> ${properties.name || 'N/A'}</td></tr>
                         <tr style=background-color:skyblue;><td> <strong>Diameter</strong></td><td> ${properties.diameter || 'N/A'}</td></tr>

                      <tr style=background-color:skyblue;><td> <strong>Depth.</strong></td><td> ${properties.depth || 'N/A'}</td></tr>
                                
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



// function performLucknowPhase2Action() {
//     console.log('Fetching data for Lucknow 2024-2025');
//     let currentLayer = new ol.layer.Image({
//         source: new ol.source.ImageWMS({
//             url: 'http://localhost:8080/geoserver/LNN_Summary/wms',
//             params: {
//                 'LAYERS': 'LNN_Summary:GPR_Data',
//                 'TILED': true
//             },
//             ratio: 1,
//             serverType: 'geoserver'
//         })
//     });

//     map.addLayer(currentLayer);
   
// }

function performAyodhyaPhase2Action() {
    console.log('Fetching data for Ayodhya 2024-2025');
   
}

function performghazi2023Action() {
    console.log('Fetching data for ghaziabad 2023-2024');
   
}








// // Add base layer and district & UP layers here
// const districtLayer = L.layerGroup().addTo(map); // Add your district layer
// const upLayer = L.layerGroup().addTo(map); // Add your UP layer

// // Create a function to update layers based on selection
// function updateMapLayer(selectedNagarNigam) {
//     // Clear existing layers
//     districtLayer.clearLayers();
//     upLayer.clearLayers();

//     if (selectedNagarNigam) {
//         // Logic to display the Nagar Nigam layer
//     //    const nagarNigamLayer = L.layerGroup().addTo(map); // Create Nagar Nigam Layer
//         // Add your specific Nagar Nigam markers or features here
//     }

//     // Always keep district and UP layers
//     districtLayer.addTo(map);
//     upLayer.addTo(map);
// }

// // Event listener for the dropdown
// document.getElementById('nagarNigamSelect').addEventListener('change', function () {
//     const selectedValue = this.value;
//     updateMapLayer(selectedValue);
// });

function removeCurrentLayer() {
    if (currentLayer) {  // Check if there's a current layer on the map
        map.removeLayer(currentLayer);  // Remove the current layer from the map
        currentLayer = null;  // Reset the currentLayer variable
    }
}

