 

var  OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

    Stadia_AlidadeSmoothDark = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

var map = L.map('map', {
    zoom: 5,
    layers: [OpenStreetMap, Stadia_AlidadeSmoothDark, Stadia_AlidadeSmooth, Esri_WorldImagery]
});

var baseMaps = {
    "Stadia Alidade Smooth Dark": Stadia_AlidadeSmoothDark,
    "Stadia Alidade Smooth": Stadia_AlidadeSmooth,
    "Esri World Imagery": Esri_WorldImagery,
    "Open Street Map": OpenStreetMap,
};

L.control.layers(baseMaps).addTo(map);


// var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// var osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// var osm = new L.TileLayer(osmUrl, {
//     minZoom: 20,
//     maxZoom: 18,
//     attribution: osmAttrib
// });

// map.addLayer(osm);
// map.setView(new L.LatLng(12.5657, 104.9910), 7);
// var osm2 = new L.TileLayer(osmUrl, {
//     minZoom: 4,
//     maxZoom: 13,
//     attribution: osmAttrib
// });
// var miniMap = new L.Control.MiniMap(osm2, {
//     toggleDisplay: true, collapsedWidth: 20, collapsedHeight: 20
// }).addTo(map);


/// for geojson with pop up
function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            var popupText = "Province name: " + feature.properties.HRName
                + "<br>Location: " + feature.properties.HRParent
                // + "<br><a href='" + feature.properties.url + "'>More info</a>";
            layer.bindPopup(popupText); }
        });
    dataLayer.addTo(map);
}

$.getJSON("https://raw.githubusercontent.com/rsmapunit/rsmapunit.github.io/main/cambodia.geojson", function(data) { addDataToMap(data, map); });

////for geojson point only
// function addDataToMap(data, map) {
//     var dataLayer = L.geoJson(data);
//     dataLayer.addTo(map);
// }

// $.getJSON("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson", function(data) { addDataToMap(data, map); });


var ndx;
    d3.csv("data/flood.csv").then(function(old_data) {
    array_srok= []
    array_khum = []
    array_khet = []
    array_para = []
    array_area_1 = []
    array_hect = []
    array_headwork = []
    array_history = []
    array_health = []
    array_irripro = []
    array_pagoda = []
    array_school = []
    array_canal = []
    array_building = []
    array_FAM19 = []
    array_MAL19 = []
    array_FEM19 = []
    array_FAM17 = []
    array_MAL17 = []
    array_FEM17 = []
    array_village_n = []
    array_settel_h = []
    array_orchard = []
    array_crop = []
    array_paddy_h = []
    array_urban_h = []


    for (var i = 0; i < old_data.length; i++) {
        var array = old_data[i].srok.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_1 = old_data[i].khum.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_2 = old_data[i].khet.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_3 = old_data[i].para.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_4 = old_data[i].area_1.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_5 = old_data[i].hect.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_6 = old_data[i].headwork.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_7 = old_data[i].history.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_8 = old_data[i].health.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_9 = old_data[i].irripro.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_10 = old_data[i].pagoda.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_11 = old_data[i].school.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_12 = old_data[i].canal.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_13 = old_data[i].building.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_14 = old_data[i].FAM19.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_15 = old_data[i].MAL19.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_16 = old_data[i].FEM19.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_17 = old_data[i].FAM17.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_18 = old_data[i].MAL17.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_19 = old_data[i].FEM17.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_20 = old_data[i].vilage_n.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_21 = old_data[i].settel_h.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_22 = old_data[i].orchard.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_23 = old_data[i].crop.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_24 = old_data[i].paddy_h.replace(/\s*\,\s*/g, ",").trim().split(",");
        var array_25 = old_data[i].urban_h.replace(/\s*\,\s*/g, ",").trim().split(",");
        array_srok.push(array);
        array_khum.push(array_1);
        array_khet.push(array_2);
        array_para.push(array_3);
        array_area_1.push(array_4);
        array_hect.push(array_5);
        array_headwork.push(array_6);
        array_history.push(array_7);
        array_health.push(array_8);
        array_irripro.push(array_9);
        array_pagoda.push(array_10);
        array_school.push(array_11);
        array_canal.push(array_12);
        array_building.push(array_13);
        array_FAM19.push(array_14);
        array_MAL19.push(array_15);
        array_FEM19.push(array_16);
        array_FAM17.push(array_17);
        array_MAL17.push(array_18);
        array_FEM17.push(array_19);
        array_village_n.push(array_20);
        array_settel_h.push(array_21);
        array_orchard.push(array_22);
        array_crop.push(array_23);
        array_paddy_h.push(array_24);
        array_urban_h.push(array_25);
        
    };
    var data = []
    for (var i = 0; i < old_data.length; i++) {
        data.push({
            srok: array_srok[i],
            khum: array_khum[i],
            khet: array_khet[i],
            para: array_para[i],
            area_1: array_area_1[i],
            hect: array_hect[i],
            headwork: array_headwork[i],
            history: array_history[i],
            health: array_health[i],
            irripro: array_irripro[i],
            pagoda: array_pagoda[i],
            school: array_school[i],
            canal: array_canal[i],
            building: array_building[i],
            FAM19: array_FAM19[i],
            MAL19: array_MAL19[i],
            FEM19: array_FEM19[i],
            FAM17: array_FAM17[i],
            MAL17: array_MAL17[i],
            FEM17: array_FEM17[i],
            village_n: array_village_n[i],
            settel_h: array_settel_h[i],
            orchard: array_orchard[i],
            crop: array_crop[i],
            paddy_h: array_paddy_h[i],
            urban_h: array_urban_h[i],
            lat: old_data[i].lat,
            long: old_data[i].long,
        });
    };

    // console.log(data);

    // function remove_empty_bins(source_group) {
    //     return {
    //         all: function() {
    //             return source_group.all().filter(function(d) {
    //                 return d.value != 0;
    //             });
    //         }
    //     };
    // }


    ndx = crossfilter(data);

    var locationDim = ndx.dimension(function(d) {
        return [d["lat"],
            d["long"],
            d["srok"],
            d["khum"],
            d["khet"],
            d["para"],
            d["area_1"],
            d["hect"],
            d["headwork"],
            d["history"],
            d["health"],
            d["irripro"],
            d["pagoda"],
            d["school"],
            d["canal"],
            d["building"],
            d["FAM19"],
            d["MAL19"],
            d["FEM19"],
            d["FAM17"],
            d["MAL17"],
            d["FEM17"],
            d["village_n"],
            d["settel_h"],
            d["orchard"],
            d["crop"],
            d["paddy_h"],
            d["urban_h"],

        ];
    });

    var srokDim = ndx.dimension(function(d) {
        return d["srok"];
    }, true);

    var khumDim = ndx.dimension(function(d) {
        return d["khum"];
    }, true);
    var khumDim = ndx.dimension(function(d) {
        return d["khum"];
    }, true);
    var khetDim = ndx.dimension(function(d) {
        return d["khet"];
    }, true);

    var paraDim = ndx.dimension(function(d) {
        return d["para"];
    }, true);

    var area_1Dim = ndx.dimension(function(d) {
        return d["area_1"];
    }, true);
    var hectDim = ndx.dimension(function(d) {
        return d["hect"];
    }, true);
    var allDim = ndx.dimension(function(d) {
        return d;
    });
    
    // var khetGroup = srokDim.group().reduceSum(function(d) {
    //     return d.khet;
    //     }, true);
        


    var groupname = "marker-select";
    var all = ndx.groupAll();
    var locationGroup = locationDim.group().reduce(function(p, v) {
            p["lat"] = v["lat"]
            p["long"] = v["long"]
            p["srok"] = v["srok"]
            p["khum"] = v["khum"]
            p["khet"] = v["khet"]
            p["para"] = v["para"]
            p["area_1"] = v["area_1"]
            p["hect"] = v["hect"]
            p["headwork"] = v["headwork"]
            p["history"] = v["history"]
            p["health"] = v["health"]
            p["irripro"] = v["irripro"]
            p["pagoda"] = v["pagoda"]
            p["school"] = v["school"]
            p["canal"] = v["canal"]
            p["building"] = v["building"]
            p["FAM19"] = v["FAM19"]
            p["MAL19"] = v["MAL19"]
            p["FEM19"] = v["FEM19"]
            p["FAM17"] = v["FAM17"]
            p["MAL17"] = v["MAL17"]
            p["FEM17"] = v["FEM17"]
            p["village_n"] = v["village_n"]
            p["settel_h"] = v["settel_h"]
            p["orchard"] = v["orchard"]
            p["crop"] = v["crop"]
            p["paddy_h"] = v["paddy_h"]
            p["urban_h"] = v["urban_h"]
                ++p.count;
            return p;
        },
        function(p, v) {
            --p.count;
            return p;
        },
        function() {
            return {
                count: 0
            };
        });

    var srokGroup = srokDim.group().reduceCount();
    var khumGroup = khumDim.group().reduceCount();
    var khetGroup = khetDim.group().reduceCount();
    // var paraGroup = paraDim.group().reduceCount();
    var schoolGroup = khumDim.group().reduceSum(function(d) {
        return d.school;
        }, true);
        
    // var area_1Group = area_1Dim.group().reduceCount();
    var pagodaGroup = khumDim.group().reduceSum(function(d) {
        return d.pagoda;
        }, true);
    // var hectGroup = hectDim.group().reduceCount();
    var healthGroup = khumDim.group().reduceSum(function(d) {
        return d.health;
        }, true);




    // nonEmptyHist_year = remove_empty_bins(data_cGroup1)

    var srokChart = dc.pieChart('#chart-ring-srok', groupname);
    var khumChart = dc.rowChart('#chart-ring-khum', groupname);
    var khumAxisChart = new dc.axisChart('#khum-row-axis', groupname);
    var khetChart = dc.pieChart("#chart-ring-khet", groupname);
    // var road_lenAxisChart = new dc.axisChart('#road_len-row-axis', groupname);
    var schoolChart = dc.rowChart('#chart-ring-school', groupname);
    var schoolAxisChart = new dc.axisChart('#school-row-axis', groupname);
    var pagodaChart = dc.pieChart('#chart-ring-pagoda', groupname);
    // var pagodaAxisChart = new dc.axisChart('#pagoda-row-axis', groupname);
    var healthChart = dc.rowChart("#chart-ring-health", groupname);
    var healthAxisChart = new dc.axisChart('#health-row-axis', groupname);

    var dataTableCount = dc.dataCount('.dc-dataTable-count', groupname);
    var dataTable = dc_datatables.datatable('#data-table', groupname);
    var dataCount = dc.dataCount('.dc-dataTitle-count', groupname);

    var d3SchemeCategory20c = ['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9']

    var paperMarkers = dc_leaflet.markerChart("#cluster-map-anchor", groupname)
        .dimension(locationDim)
        .group(locationGroup)
        .map(map)
        .valueAccessor(function(kv) {
            return kv.value.count;
        })
        .locationAccessor(function(kv) {
            return [kv.value.lat, kv.value.long];
        })
        .showMarkerTitle(false)
        .fitOnRender(true)
        .fitOnRedraw(true)
        .filterByArea(true)
        .cluster(true)
        .popup(function(kv, marker) {

            return "<dt><span style='font-weight:bolder'>Province: </span> </dt> <dd>" + kv.value.khet + "<dd>"+
            "<dt><span style='font-weight:bolder'>District: </span> </dt> <dd>" + kv.value.srok + "<dd>" +
            "<dt><span style='font-weight:bolder'>Commune: </span> </dt> <dd>" + kv.value.khum + "<dd>" +
            "<dt><span style='font-weight:bolder'>Parameter : </span> </dt> <dd>" + kv.value.para + "<dd>"+
            "<dt><span style='font-weight:bolder'>Area : </span> </dt> <dd>" + kv.value.area_1 + "<dd>"+
            "<dt><span style='font-weight:bolder'>Hectare: </span> </dt> <dd>" + kv.value.hect + "<dd>"+
            "<dt><span style='font-weight:bolder'>Headwork: </span> </dt> <dd>" + kv.value.headwork + "<dd>" +
            "<dt><span style='font-weight:bolder'>History: </span> </dt> <dd>" + kv.value.history + "<dd>" +
            "<dt><span style='font-weight:bolder'>Health: </span> </dt> <dd>" + kv.value.health + "<dd>" +
            "<dt><span style='font-weight:bolder'>Irrigation Project: </span> </dt> <dd>" + kv.value.irripro + "<dd>"+ 
            "<dt><span style='font-weight:bolder'>Pagoda: </span> </dt> <dd>" + kv.value.pagoda + "<dd>"+
            "<dt><span style='font-weight:bolder'>School: </span> </dt> <dd>" + kv.value.school + "<dd>"+
            "<dt><span style='font-weight:bolder'>Canal: </span> </dt> <dd>" + kv.value.canal + "<dd>" +
            "<dt><span style='font-weight:bolder'>Building: </span> </dt> <dd>" + kv.value.building + "<dd>"+
            "<dt><span style='font-weight:bolder'>FAM19: </span> </dt> <dd>" + kv.value.FAM19 + "<dd>" +
            "<dt><span style='font-weight:bolder'>MAL19: </span> </dt> <dd>" + kv.value.MAL19 + "<dd>" +
            "<dt><span style='font-weight:bolder'>FEM19: </span> </dt> <dd>" + kv.value.FEM19 + "<dd>" +
            "<dt><span style='font-weight:bolder'>FAM17: </span> </dt> <dd>" + kv.value.FAM17 + "<dd>" +
            "<dt><span style='font-weight:bolder'>MAL17: </span> </dt> <dd>" + kv.value.MAL17 + "<dd>" +
            "<dt><span style='font-weight:bolder'>FEM17: </span> </dt> <dd>" + kv.value.FEM17 + "<dd>" +
            "<dt><span style='font-weight:bolder'>Village_n: </span> </dt> <dd>" + kv.value.village_n + "<dd>" +
            "<dt><span style='font-weight:bolder'>Settel_h: </span> </dt> <dd>" + kv.value.settel_h + "<dd>" +
            "<dt><span style='font-weight:bolder'>Orchard: </span> </dt> <dd>" + kv.value.orchard + "<dd>"+
            "<dt><span style='font-weight:bolder'>Crop: </span> </dt> <dd>" + kv.value.crop + "<dd>" + 
            "<dt><span style='font-weight:bolder'>Paddy_h: </span> </dt> <dd>" + kv.value.paddy_h + "<dd>" +
            "<dt><span style='font-weight:bolder'>Urban_h: </span> </dt> <dd>" + kv.value.urban_h + "<dd>" 
        })
        .clusterOptions({
            spiderfyOnMaxZoom: true,
            spiderLegPolylineOptions: {
                weight: 3,
                color: '#000',
                opacity: 0.8
            }
        });

    srokChart
        .width(300)
        .height(280)
        // .slicesCap(400)
        .innerRadius(40)
        .externalLabels(200)
        // .externalRadiusPadding(30)
        // .drawPaths(true)
        .dimension(srokDim)
        .group(srokGroup)
        .legend(new dc.HtmlLegend()
            .container('#srok-legend')
            .horizontal(false)
            .highlightSelected(true));

    // khumChart
    //     .width(300)
    //     .height(280)
    //     .externalLabels(200)
    //     .dimension(khumDim)
    //     .innerRadius(40)
    //     .group(khumGroup)
    //     .legend(new dc.HtmlLegend()
    //         .container('#khum-legend')
    //         .horizontal(false)
    //         .highlightSelected(true))
    khumChart
        .width(300)
        .height(10080)
        .margins({
            left: 10,
            top: 15,
            right: 10,
            bottom: 0
        })
        .dimension(khumDim)
        .group(khumGroup)
        .elasticX(true)
        // .colors("#1ca3ec")
        .ordering(function(d) {
            return -d.value;
        })
        .xAxis().ticks(10)
    khumAxisChart
        .margins({
            left: 10,
            top: 0,
            right: 10,
            bottom: 10
        })
        .height(50)
        .width(300)
        .dimension(khumDim)
        .group(khumGroup)
        .elastic(true);


    khetChart
        .width(300)
        .height(280)
        .externalLabels(200)
        .dimension(khetDim)
        .innerRadius(40)
        .group(khetGroup)
        .legend(new dc.HtmlLegend()
            .container('#khet-legend')
            .horizontal(false)
            .highlightSelected(true))

    // road_lenAxisChart
    //     .margins({
    //         left: 10,
    //         top: 0,
    //         right: 10,
    //         bottom: 10
    //     })
    //     .height(180)
    //     .width(300)
    //     .dimension(seletedDim)
    //     .group(road_lenGroup)
    //     .elastic(true)
    //     .renderlet(function(chart) {
    //         chart.selectAll("g.x text")
    //             .attr('dx', '-35')
    //             .attr('transform', "rotate(-45)");
    //     });
    
    schoolChart
        .width(300)
        .height(10080)
        .margins({
            left: 10,
            top: 15,
            right: 10,
            bottom: 0
        })
        .dimension(khumDim)
        .group(schoolGroup)
        .elasticX(true)
        // .colors("#1ca3ec")
        .ordering(function(d) {
            return -d.value;
        })
        .xAxis().ticks(15)
    schoolAxisChart
        .margins({
            left: 10,
            top: 0,
            right: 10,
            bottom: 10
        })
        .height(50)
        .width(300)
        .dimension(khumDim)
        .group(schoolGroup)
        .elastic(true);


    // pagodaChart
    //     .width(300)
    //     .height(10000)
    //     .margins({
    //         left: 10,
    //         top: 15,
    //         right: 10,
    //         bottom: 0
    //     })
    //     .dimension(khumDim)
    //     // .ordinalColors(['#ff0000', '#A6F230', '#157EE8', '#c6dbef', '#dadaeb'])
    //     .group(pagodaGroup)
    //     .elasticX(true)
    //     // .colors("#215979")
    //     .ordering(function(d) {
    //         return -d.value;
    //     })
    //     .xAxis().ticks(15)
    // pagodaAxisChart
    //     .margins({
    //         left: 10,
    //         top: 0,
    //         right: 10,
    //         bottom: 10
    //     })
    //     .height(50)
    //     .width(300)
    //     .dimension(khumDim)
    //     .group(pagodaGroup)
    //     .elastic(true);

    pagodaChart
        .width(300)
        .height(280)
        // .slicesCap(400)
        .innerRadius(40)
        .externalLabels(200)
        // .externalRadiusPadding(30)
        // .drawPaths(true)
        .dimension(khumDim)
        .group(pagodaGroup)
        .legend(new dc.HtmlLegend()
            .container('#pagoda-legend')
            .horizontal(false)
            .highlightSelected(true));



    healthChart
        .width(300)
        .height(10000)
        .margins({
            left: 10,
            top: 15,
            right: 10,
            bottom: 0
        })
        .dimension(khumDim)
        // .ordinalColors(['#ff0000', '#A6F230', '#157EE8', '#c6dbef', '#dadaeb'])
        .group(healthGroup)
        .elasticX(true)
        // .colors("#215979")
        .ordering(function(d) {
            return -d.value;
        })
        .xAxis().ticks(15)
    healthAxisChart
        .margins({
            left: 10,
            top: 0,
            right: 10,
            bottom: 10
        })
        .height(50)
        .width(300)
        .dimension(khumDim)
        .group(healthGroup)
        .elastic(true);


    dataCount
        .dimension(ndx)
        .group(all);

    dataTableCount
        .dimension(ndx)
        .group(all)

    dataTable
        .dimension(allDim)
        .group(function(d) {
            return 'Data Counts';
        })
        .size(10)
        .columns([{
                label: 'Province',
                type: 'string',
                format: function(d) {
                    return d["khet"];
                }

            }, {
                label: 'District',
                type: 'string',
                format: function(d) {
                    return d["srok"];
                }
            
            }, {
                label: 'Commune',
                type: 'string',
                format: function(d) {
                    return d["khum"];
                }
            
            }, {
                label: 'Parameter',
                type: 'num',
                format: function(d) {
                    return d["para"];
                }

            }, {
                label: 'Area',
                type: 'num',
                format: function(d) {
                    return d["area_1"];
                }

            }, {
                label: 'Hectare',
                type: 'num',
                format: function(d) {
                    return d["hect"];
                }    
            }, {
                label: 'Headwork',
                type: 'num',
                format: function(d) {
                    return d["headwork"];
                }   
            }, {
                label: 'History',
                type: 'num',
                format: function(d) {
                    return d["history"];
                } 
            }, {
                label: 'Health',
                type: 'num',
                format: function(d) {
                    return d["health"];
                } 
            }, {
                label: 'Irrigation project',
                type: 'num',
                format: function(d) {
                    return d["irripro"];
                } 
            }, {
                label: 'Pagoda',
                type: 'num',
                format: function(d) {
                    return d["pagoda"];
                }
            }, {
                label: 'School',
                type: 'num',
                format: function(d) {
                    return d["school"];
                }
            }, {
                label: 'Canal',
                type: 'num',
                format: function(d) {
                    return d["canal"];
                }
            }, {
                label: 'Building',
                type: 'num',
                format: function(d) {
                    return d["building"];
                }
            }, {
                label: 'FAM19',
                type: 'num',
                format: function(d) {
                    return d["FAM19"];
                }
            }, {
                label: 'MAL19',
                type: 'num',
                format: function(d) {
                    return d["MAL19"];
                }
            }, {
                label: 'FEM19',
                type: 'num',
                format: function(d) {
                    return d["FEM19"];
                }
            }, {
                label: 'FAM17',
                type: 'num',
                format: function(d) {
                    return d["FAM17"];
                }
            }, {
                label: 'MAL17',
                type: 'num',
                format: function(d) {
                    return d["MAL17"];
                }
            }, {
                label: 'FEM17',
                type: 'num',
                format: function(d) {
                    return d["FEM17"];
                }
            }, {
                label: 'Village number',
                type: 'num',
                format: function(d) {
                    return d["village_n"];
                }
            }, {
                label: 'Settel_h',
                type: 'num',
                format: function(d) {
                    return d["settel_h"];
                }
            }, {
                label: 'Orchard',
                type: 'num',
                format: function(d) {
                    return d["orchard"];
                }
            }, {
                label: 'Crop',
                type: 'num',
                format: function(d) {
                    return d["crop"];
                }
            }, {
                label: 'Paddy_h',
                type: 'num',
                format: function(d) {
                    return d["paddy_h"];
                }
            }, {
                label: 'Urban_h',
                type: 'num',
                format: function(d) {
                    return d["urban_h"];
                }
            }
        ])


    .sortBy(function(d) {
            return d.srok;
        })
        .order(d3.ascending)
        .options({
            "scrollX": true
        })
        .on('renderlet', function(table) {
            table.selectAll('.dc-table-group').classed('info', true);
        });

    d3.selectAll('a#all').on('click', function() {
        dc.filterAll(groupname);
        dc.renderAll(groupname);
    });

    d3.selectAll('a#srok').on('click', function() {
        srokChart.filterAll(groupname);
        dc.redrawAll(groupname);
    });
    d3.selectAll('a#khum').on('click', function() {
        khumChart.filterAll(groupname);
        dc.redrawAll(groupname);
    });
    d3.selectAll('a#khet').on('click', function() {
        khetChart.filterAll(groupname);
        dc.redrawAll(groupname);
    });

    d3.selectAll('a#school').on('click', function() {
        schoolChart.filterAll(groupname);
        dc.redrawAll(groupname);
    });

    d3.selectAll('a#pagoda').on('click', function() {
        pagodaChart.filterAll(groupname);
        dc.redrawAll(groupname);
    });
    d3.selectAll('a#hect').on('click', function() {
        hectChart.filterAll(groupname);
        dc.redrawAll(groupname);
    });

    $("#mapReset").on('click', function() {
        paperMarkers.map().setView([12.5657, 104.9910], 3);
    });

    dc.renderAll(groupname);
    dc.redrawAll(groupname);

});
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

var offset = 70;
$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

var navOffset = $('.navbar').height();

$('.navbar li a').click(function(event) {
    var href = $(this).attr('href');

    event.preventDefault();
    window.location.hash = href;

    $(href)[0].scrollIntoView();
    window.scrollBy(0, -navOffset);
});
