//<editor-fold defaultstate="collapsed" desc="Global variables">

var map;

var mapDom = $('#stationMap');

var popup       = document.getElementById('stationMapPopup');
var close       = $('#stationMapPopupClose');

/* Ship Display [DOM elements] */
var mapShipName = $('#stationMapShipName');
var mapShipMMSI = $('#stationMapShipMMSI');
var mapShipIMO = $('#stationMapShipIMO');
var mapShipStations = $('#stationMapShipStations');
var mapShipButton = $('#stationMapShipButton');
//</editor-fold>

//<editor-fold defaultstate="collapsed" desc="Map">

function Map(target, view, layers, controls, interactions, overlays) {
    this.interactions = interactions;
    this.controls = controls;
    this.layers = layers;
    this.overlays = overlays;
    this.popup = overlays[0];
    this.view = view;
    this.target = target;
    this.domObject = $('#' + this.target);
    this.object = new ol.Map({
        interactions: this.interactions,
        controls: this.controls,
        layers: this.layers,
        overlays: overlays,
        renderer: 'canvas',
        target: this.target,
        view: this.view
    });
};

Map.ratio = ol.has.DEVICE_PIXEL_RATIO > 3 ? 3 : Math.round(ol.has.DEVICE_PIXEL_RATIO);
Map.scale = 1 / Map.ratio;
Map.timeout = null;

Map.tile = {
    ratio: Map.ratio > 1 ? 2 : 1,
    src: Map.ratio > 1 ? 'bright@2x' : 'bright',
};

Map.ship = {
    features: new ol.source.Vector({wrapX: false}),
    size: 26 * Map.ratio,
    icon: 'https://www.aishub.net/images/map/@' + Map.ratio+'/',
    cursor: 'https://www.aishub.net/images/map/@'+ Map.ratio + '/selector.png',
    cursorSize: 42 * Map.ratio ,
    count: 0,
    zoom: 15,
    selected: undefined,
    mode: "number", // number | type | class
    view: false
};

Map.station = {
    features: new ol.source.Vector({wrapX: false}),
    size: 35 * Map.ratio,
    icon: 'https://www.aishub.net/images/map/@' + Map.ratio+'/',
    cursor: 'https://www.aishub.net/images/map/@'+ Map.ratio + '/selector.png',
    cursorSize: 42 * Map.ratio ,
    count: 0,
    zoom: 9,
    selected: undefined
};


Map.DMS = function (coordinates) {
    // type { 1-> latitude, 2-> longitude}
    var type = 1;
    var output = '';

    var abscoordinate;
    var coordinatedegrees;
    var coordinateminutes;
    var tempcoordinateminutes;
    var coordinateseconds;

    coordinates.forEach(
        function (coordinate) {
            abscoordinate = Math.abs(coordinate)
            coordinatedegrees = Math.floor(abscoordinate);

            coordinateminutes = (abscoordinate - coordinatedegrees) / (1 / 60);
            tempcoordinateminutes = coordinateminutes;
            coordinateminutes = Math.floor(coordinateminutes);
            coordinateseconds = (tempcoordinateminutes - coordinateminutes) / (1 / 60);
            coordinateseconds = Math.round(coordinateseconds * 10);
            coordinateseconds /= 10;
            coordinateseconds = Math.ceil(coordinateseconds);

            if (coordinatedegrees < 10)
                coordinatedegrees = "0" + coordinatedegrees;

            if (coordinatedegrees < 100 && type === 2)
                coordinatedegrees = "0" + coordinatedegrees;

            if (coordinateminutes < 10)
                coordinateminutes = "0" + coordinateminutes;

            if (coordinateseconds < 10)
                coordinateseconds = "0" + coordinateseconds;


            if (type === 1)
            {
                cardinal = coordinate >= 0 ? 'N' : 'S';
            }
            else
            {
                cardinal = coordinate >= 0 ? 'E' : 'W';
            }

            output += '<strong>' + cardinal + '</strong> ' +
                coordinatedegrees.toString() + '&deg; ' +
                coordinateminutes.toString() + '\' ' +
                coordinateseconds.toString() + '"';
            if (type === 1)
            {
                output += '&nbsp;&nbsp;';
                type++;
            }
        }
    );

    return output;

};

Map.cordinates = function (latitude, longitude) {
    return ol.proj.transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857');
};

Map.updateEvent = function () {
    if (Map.timeout !== null) {
        clearTimeout(Map.timeout);
    }
    Map.timeout = setTimeout(function () {
        Map.timeout = null;
        Map.updateLayers();
    }, 200);
};

Map.updateLayers = function () {

    // boundingBox
    var boundingBox = map.view.calculateExtent(map.object.getSize());
    var down = ol.proj.transform([boundingBox[0], boundingBox[1]], 'EPSG:3857', 'EPSG:4326');
    var up = ol.proj.transform([boundingBox[2], boundingBox[3]], 'EPSG:3857', 'EPSG:4326');
    boundingBox = [down[0], down[1], up[0], up[1]];

    $.getJSON("https://www.aishub.net/station/" + options.widgets.stationMap.id + "/map.json",
        {
            minLat: parseFloat(boundingBox[1].toFixed(5)),
            maxLat: parseFloat(boundingBox[3].toFixed(5)),
            minLon: parseFloat(boundingBox[0].toFixed(5)),
            maxLon: parseFloat(boundingBox[2].toFixed(5)),
            mode: Map.ship.mode,
            zoom: Map.zoom,
            view: Map.ship.view,
            t: Math.floor(Date.now() / 1000)
        }
              dataType: 'jsonp'
        , function (data) {


            Map.ship.features.clear();
            Map.ship.count = data.positions.length;

            // add select marker
            if (typeof Map.ship.selected !== 'undefined') {
                Map.ship.features.addFeature(Map.ship.selected);
            }

            var feature;

            data.positions.forEach(function (data) {
                if (data.lat != 0 && data.lon != 0) {
                    feature = new Ship(
                        [data.lat, data.lon],
                        data.imo,
                        data.mmsi,
                        data.ship_name,
                        data.cog,
                        data.sog,
                        data.heading,
                        data.eta,
                        data.tst,
                        data.icon,
                        data.type
                    );

                    Map.ship.features.addFeature(feature);
                }
            });

            // fit map on cruise
            if(!Map.ship.view && Map.ship.count > 0){
                map.object.getView().fit(ol.proj.transformExtent(data.extent, 'EPSG:4326', 'EPSG:3857'), {
                    size: map.object.getSize(),
                    constrainResolution: true,
                    duration: 800,
                });
                Map.ship.view = true;
            }
        });

    
    if(options.widgets.stationMap.lat !== 0 && options.widgets.stationMap.lon !== 0){
        if(Map.zoom > 11){
            Map.station.features.clear();
        } else if (Map.station.features.getFeatures().length  === 0){
            Map.station.features.addFeature(new Station([options.widgets.stationMap.lat, options.widgets.stationMap.lon], 'Station'));
        }
    }

};

Map.prototype.selectShips = function (evt) {

    var result = Map.ship.features.forEachFeatureInExtent(
        ol.extent.boundingExtent([
            this.object.getCoordinateFromPixel([evt.pixel[0] - (Map.ship.size/2), evt.pixel[1] - (Map.ship.size/2)]),
            this.object.getCoordinateFromPixel([evt.pixel[0] + (Map.ship.size/2), evt.pixel[1] + (Map.ship.size/2)])
        ]),
        function (feature) {
            return feature;
        }
    );

    if (typeof result !== 'undefined')
    {
        Ship.display(result);
    }
};



Map.prototype.init = function (){

    $( ".mapTypeSelector" ).change(function() {

        var value = $(this).val();

        if(value != Map.ship.mode){
            Map.ship.mode = value;
            Map.updateLayers();
        }
    });
    Map.updateLayers();
    setInterval(function(){
        if(window.browserTab){
            Map.updateLayers();
        }
    }, 60000);

    // Events
    Map.view.on('change:resolution', function () {
        Map.updateEvent();

    });

    this.object.on('moveend', function () {
        Map.updateEvent();
        Map.zoom = map.object.getView().getZoom();
    });

    this.object.on('click', function (evt) {
        map.selectShips(evt);
    });

    close.click(function(){
        map.popup.setPosition(undefined);
        close.blur();
        return false;
    });

    // Add Station
    if(options.widgets.stationMap.lat != 0 && options.widgets.stationMap.lon != 0){
        Map.station.features.addFeature(new Station([options.widgets.stationMap.lat, options.widgets.stationMap.lon], 'Station'));
    }

    popup.style.display = 'block';
};


//<editor-fold defaultstate="collapsed" desc="Map [Properties]">

// MAP INTERATIONS
Map.interactions = ol.interaction.defaults({
    altShiftDragRotate:false,
    pinchRotate:false
});

// MAP CONTROLS
Map.controls = [
    new ol.control.Zoom({duration:200}), //250
    new ol.control.ScaleLine({'units':'imperial'}),
    new ol.control.ZoomToExtent({label:' ', extent:[-22953122.349699005, -14519366.396825798, 26162254.545223847, 20233187.135199293]}),
    new ol.control.MousePosition({
        coordinateFormat: function (c) {
            if (window.innerWidth >= 1025)
            {
                var lat = parseFloat(c[1]).toFixed(5);
                var lon = c[0];
                lon -= parseInt(lon / 360) * 360;
                if (lon > 180) {
                    lon -= 360;
                } else if (lon < -180) {
                    lon += 360;
                }
                lon = parseFloat(lon).toFixed(5);

                lat_pos = parseInt(lat).toString().length;
                lon_pos = parseInt(lon).toString().length;

                if (lat < 0 && lat > -1) {
                    lat_pos = 2;
                }
                ;
                if (lon < 0 && lon > -1) {
                    lon_pos = 2;
                }
                ;

                lat_txt = new Array(4 - lat_pos).join("&nbsp;").toString() + lat.toString();
                lon_txt = new Array(5 - lon_pos).join("&nbsp;").toString() + lon.toString();


                var cordinateBox = $('.latlon');
                var scaleLineBox = $('.ol-scale-line');

                cordinateBox.show();
                scaleLineBox.css('left', 220);

                $('#map').mouseout(function () {
                    cordinateBox.hide();
                    scaleLineBox.css('left', 8);
                });

                return 'Lat:<strong>' + lat_txt + '</strong>&nbsp;&nbsp;Lon:<strong>' + lon_txt + '</strong><br>' + Map.DMS([lat, lon]);
            }
            else {
                return '';
            }
        },
        className: 'latlon desktop',
        target: '',
        projection: 'EPSG:4326'
    })
];


// MAP LAYERS
Map.layers = [
    // |1| tile layer
    new ol.layer.Tile({
        preload: Infinity,
        source: new ol.source.XYZ({
            url: 'https://map.vesselfinder.net/' + Map.tile.src + '/{z}/{x}/{y}.png',
            tilePixelRatio: Map.tile.ratio,
            wrapX: false
        })
    }),
    // |2| vector layer - ships
    new ol.layer.Vector({
        source: Map.ship.features
    }),
    // |3| vector layer - stations
    new ol.layer.Vector({
        source: Map.station.features
    }),
];

// MAP OVERLAYS
Map.overlays = [
    // |1| popup
    new ol.Overlay(({
        element: popup,
        autoPan: true,
        positioning:'center-center',
        autoPanAnimation: {
            duration: 250
        }
    }))
];


Map.center = Map.cordinates(parseFloat(options.widgets.stationMap.lat),parseFloat(options.widgets.stationMap.lon));
Map.zoom   = 2;


Map.view = new ol.View({
    center: Map.center,
    zoom: Map.zoom,
    minZoom: 1,
    maxZoom: 18,
    extent: [-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244]
});



//</editor-fold>

//</editor-fold>


//<editor-fold defaultstate="collapsed" desc="Map [Ship]">

function Ship(cordinates, imo, mmsi, ship_name, cog, sog, heading, eta, tst, icon, type) {

    cordinates[0] = parseFloat(cordinates[0]);
    cordinates[1] = parseFloat(cordinates[1]);

    this.object = new ol.Feature({
        geometry: new ol.geom.Point(Map.cordinates(cordinates[0], cordinates[1])),
        imo: imo,
        mmsi: mmsi,
        ship_name: ship_name,
        cog: cog,
        sog: sog,
        heading: heading,
        eta: eta,
        tst: tst,
        icon: icon,
        type: type
    });

    Ship.setStyle(this.object);

    return this.object;
}

Ship.setStyle = function (object) {

    var status;
    var rotation;

    var speed = parseInt(object.get('sog'));

    if (parseInt(object.get('sog')) < 1.0)
    {
        status = 's';
        rotation = 0;
    }
    else
    {
        status = 'i';

        if (parseInt(object.get('heading')) === 511)
        {
            rotation = parseInt(object.get('cog'));
        }
        else
        {
            rotation = parseInt(object.get('heading'));
        }
        rotation = ((rotation * Math.PI) / 180);
    }

    object.setStyle(
        new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [(Map.ship.size/2), (Map.ship.size/2)],
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                offset: [0,0],
                size: [Map.ship.size, Map.ship.size],
                src: Map.ship.icon+Map.ship.mode+'/'+object.get('icon')+status+'.png',
                scale: Map.scale,
                rotation:  parseInt(rotation)//  radians
            })),
            text: new ol.style.Text({
                font: '13px �xo 2,sans-serif',
                text: Map.zoom < Map.ship.zoom ? '' : object.get('ship_name'),
                fill: new ol.style.Fill({
                    color: '#fff'
                }),
                offsetX: 26,
                offsetY: 0,
                textAlign: 'left',
                stroke: new ol.style.Stroke({
                    color: '#235786',
                    width: 7
                })
            }),
            zIndex: 990
        })
    );
};

Ship.setStyleSelected = function() {

    var style = new ol.style.Style({
        image: new ol.style.Icon(({
            anchor: [(Map.ship.cursorSize/2), (Map.ship.cursorSize/2)],
            anchorXUnits: 'pixels',
            anchorYUnits: 'pixels',
            size: [Map.ship.cursorSize, Map.ship.cursorSize],
            src: Map.ship.cursor,
            scale: Map.scale
        })),
        zIndex: 991
    });

    if(Map.ship.selected !== undefined)
    {
        if(Map.ship.selected.getStyle() === null)
        {
            Map.ship.selected.setStyle(style);
        }
    }
}

Ship.displayparam = function (param, field) {

    if (param.toString().length > 0)
    {
        field.html(param);
    }
    else
    {
        field.html('N/A');
    }
};

Ship.setUrlParam = function (url, field) {

    if (url.toString().length > 0)
    {
        field.attr('href', url);
    }
};

Ship.display = function (feature) {

    Ship.moveSelector(feature);

    $.getJSON("https://www.aishub.net/vessel/" + feature.get('mmsi') + "/info.json",{}, function (data) {

        map.popup.setPosition(feature.getGeometry().getCoordinates());

        // title
        Ship.displayparam(data.ship_name, mapShipName);

        // mmsi
        Ship.displayparam(data.mmsi, mapShipMMSI);
        Ship.displayparam(data.imo, mapShipIMO);
        Ship.displayparam(data.stations, mapShipStations);

        // Button
        Ship.setUrlParam(data.url, mapShipButton);

    });
};

Ship.moveSelector = function (selected){
    if(Map.ship.selected === undefined)
    {
        Map.ship.selected = new ol.Feature({
            geometry: selected.getGeometry(),
            ship_name: 'selector',
            imo: selected.get('imo'),
            mmsi: selected.get('mmsi')
        });

        Ship.setStyleSelected();

        Map.ship.features.addFeature(Map.ship.selected);
    }
    else
    {
        Ship.setStyleSelected();

        Map.ship.selected.set('imo', selected.get('imo'));
        Map.ship.selected.set('mmsi', selected.get('mmsi'));
        Map.ship.selected.setGeometry(selected.getGeometry());
    }

};

Ship.hideSelector = function() {
    if(Map.ship.selected !== undefined)
    {
        Map.ship.selected.setStyle(null);
    }
};

//</editor-fold>


function Station(cordinates, name) {

    cordinates[0] = parseFloat(cordinates[0]);
    cordinates[1] = parseFloat(cordinates[1]);

    this.object = new ol.Feature({
        geometry: new ol.geom.Point(Map.cordinates(cordinates[0], cordinates[1])),
        name: name,
    });

    Station.setStyle(this.object);

    return this.object;
}

Station.setStyle = function (object) {

    object.setStyle(
        new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [(Map.station.size/2), (Map.station.size/2)],
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                offset: [0,0],
                size: [Map.station.size, Map.station.size],
                src: Map.station.icon+'station.png',
                scale: Map.scale
            })),
            zIndex: 880
        })
    );
};



//<editor-fold defaultstate="collapsed" desc="Document [Ready]">

$(function () {
    map = new Map('stationMap', Map.view, Map.layers, Map.controls, Map.interactions,Map.overlays);
    map.init();
});

//</editor-fold>
