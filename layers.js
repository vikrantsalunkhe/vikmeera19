var wms_layers = [];

var format_bus_stop_0 = new ol.format.GeoJSON();
var features_bus_stop_0 = format_bus_stop_0.readFeatures(json_bus_stop_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bus_stop_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bus_stop_0.addFeatures(features_bus_stop_0);
var lyr_bus_stop_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bus_stop_0, 
                style: style_bus_stop_0,
                popuplayertitle: "bus_stop",
                interactive: true,
                title: '<img src="styles/legend/bus_stop_0.png" /> bus_stop'
            });
var format_school_stop_1 = new ol.format.GeoJSON();
var features_school_stop_1 = format_school_stop_1.readFeatures(json_school_stop_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_stop_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_stop_1.addFeatures(features_school_stop_1);
var lyr_school_stop_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_school_stop_1, 
                style: style_school_stop_1,
                popuplayertitle: "school_stop",
                interactive: true,
                title: '<img src="styles/legend/school_stop_1.png" /> school_stop'
            });
var format_study_area_new_2 = new ol.format.GeoJSON();
var features_study_area_new_2 = format_study_area_new_2.readFeatures(json_study_area_new_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_study_area_new_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_study_area_new_2.addFeatures(features_study_area_new_2);
var lyr_study_area_new_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_study_area_new_2, 
                style: style_study_area_new_2,
                popuplayertitle: "study_area_new",
                interactive: true,
                title: '<img src="styles/legend/study_area_new_2.png" /> study_area_new'
            });
var format_roadswgs1984_3 = new ol.format.GeoJSON();
var features_roadswgs1984_3 = format_roadswgs1984_3.readFeatures(json_roadswgs1984_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadswgs1984_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadswgs1984_3.addFeatures(features_roadswgs1984_3);
var lyr_roadswgs1984_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadswgs1984_3, 
                style: style_roadswgs1984_3,
                popuplayertitle: "roadswgs1984",
                interactive: true,
                title: '<img src="styles/legend/roadswgs1984_3.png" /> roadswgs1984'
            });

lyr_bus_stop_0.setVisible(true);lyr_school_stop_1.setVisible(true);lyr_study_area_new_2.setVisible(true);lyr_roadswgs1984_3.setVisible(true);
var layersList = [lyr_bus_stop_0,lyr_school_stop_1,lyr_study_area_new_2,lyr_roadswgs1984_3];
lyr_bus_stop_0.set('fieldAliases', {'Bus_stop_n': 'Bus_stop_n', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Time1': 'Time1', 'Time2': 'Time2', });
lyr_school_stop_1.set('fieldAliases', {'Name_of_Sc': 'Name_of_Sc', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Board Type': 'Board Type', 'Time': 'Time', });
lyr_study_area_new_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'STATE': 'STATE', 'VILLAGE': 'VILLAGE', 'TEHSIL': 'TEHSIL', 'DISTRICT': 'DISTRICT', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_roadswgs1984_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'Shape_Leng': 'Shape_Leng', });
lyr_bus_stop_0.set('fieldImages', {'Bus_stop_n': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Time1': '', 'Time2': '', });
lyr_school_stop_1.set('fieldImages', {'Name_of_Sc': '', 'Latitude': '', 'Longitude': '', 'Board Type': '', 'Time': '', });
lyr_study_area_new_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'STATE': 'TextEdit', 'VILLAGE': 'TextEdit', 'TEHSIL': 'TextEdit', 'DISTRICT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_roadswgs1984_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_bus_stop_0.set('fieldLabels', {'Bus_stop_n': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Time1': 'inline label - visible with data', 'Time2': 'inline label - visible with data', });
lyr_school_stop_1.set('fieldLabels', {'Name_of_Sc': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Board Type': 'inline label - visible with data', 'Time': 'inline label - visible with data', });
lyr_study_area_new_2.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'VILLAGE': 'inline label - visible with data', 'TEHSIL': 'inline label - visible with data', 'DISTRICT': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Le_1': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_roadswgs1984_3.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'ref': 'inline label - visible with data', 'type': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_roadswgs1984_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});