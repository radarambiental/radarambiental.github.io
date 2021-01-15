var wms_layers = [];

var format_Pases_0 = new ol.format.GeoJSON();
var features_Pases_0 = format_Pases_0.readFeatures(json_Pases_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pases_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pases_0.addFeatures(features_Pases_0);
var lyr_Pases_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pases_0, 
                style: style_Pases_0,
                interactive: false,
                title: '<img src="styles/legend/Pases_0.png" /> Países'
            });
var format_Biomas_1 = new ol.format.GeoJSON();
var features_Biomas_1 = format_Biomas_1.readFeatures(json_Biomas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biomas_1.addFeatures(features_Biomas_1);
var lyr_Biomas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biomas_1, 
                style: style_Biomas_1,
                interactive: false,
    title: 'Biomas<br />\
    <img src="styles/legend/Biomas_1_0.png" /> <br />\
    <img src="styles/legend/Biomas_1_1.png" /> Amazônia<br />\
    <img src="styles/legend/Biomas_1_2.png" /> Caatinga<br />\
    <img src="styles/legend/Biomas_1_3.png" /> Cerrado<br />\
    <img src="styles/legend/Biomas_1_4.png" /> Mata Atlântica<br />\
    <img src="styles/legend/Biomas_1_5.png" /> Pampa<br />\
    <img src="styles/legend/Biomas_1_6.png" /> Pantanal<br />'
        });
var format_Estados_2 = new ol.format.GeoJSON();
var features_Estados_2 = format_Estados_2.readFeatures(json_Estados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estados_2.addFeatures(features_Estados_2);
var lyr_Estados_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estados_2, 
                style: style_Estados_2,
                interactive: false,
                title: '<img src="styles/legend/Estados_2.png" /> Estados'
            });
var format_PeixeBoidaAmaznia_3 = new ol.format.GeoJSON();
var features_PeixeBoidaAmaznia_3 = format_PeixeBoidaAmaznia_3.readFeatures(json_PeixeBoidaAmaznia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeixeBoidaAmaznia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeixeBoidaAmaznia_3.addFeatures(features_PeixeBoidaAmaznia_3);
var lyr_PeixeBoidaAmaznia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PeixeBoidaAmaznia_3, 
                style: style_PeixeBoidaAmaznia_3,
                interactive: false,
                title: '<img src="styles/legend/PeixeBoidaAmaznia_3.png" /> Peixe Boi da Amazônia'
            });
var format_PeixeBoiMarinho_4 = new ol.format.GeoJSON();
var features_PeixeBoiMarinho_4 = format_PeixeBoiMarinho_4.readFeatures(json_PeixeBoiMarinho_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeixeBoiMarinho_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeixeBoiMarinho_4.addFeatures(features_PeixeBoiMarinho_4);
var lyr_PeixeBoiMarinho_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PeixeBoiMarinho_4, 
                style: style_PeixeBoiMarinho_4,
                interactive: false,
                title: '<img src="styles/legend/PeixeBoiMarinho_4.png" /> Peixe Boi Marinho'
            });
var format_PeixeSerra_5 = new ol.format.GeoJSON();
var features_PeixeSerra_5 = format_PeixeSerra_5.readFeatures(json_PeixeSerra_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeixeSerra_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeixeSerra_5.addFeatures(features_PeixeSerra_5);
var lyr_PeixeSerra_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PeixeSerra_5, 
                style: style_PeixeSerra_5,
                interactive: false,
                title: '<img src="styles/legend/PeixeSerra_5.png" /> Peixe Serra'
            });
var format_Piracanjuba_6 = new ol.format.GeoJSON();
var features_Piracanjuba_6 = format_Piracanjuba_6.readFeatures(json_Piracanjuba_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piracanjuba_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piracanjuba_6.addFeatures(features_Piracanjuba_6);
var lyr_Piracanjuba_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Piracanjuba_6, 
                style: style_Piracanjuba_6,
                interactive: false,
                title: '<img src="styles/legend/Piracanjuba_6.png" /> Piracanjuba'
            });
var format_Preguiadecoleira_7 = new ol.format.GeoJSON();
var features_Preguiadecoleira_7 = format_Preguiadecoleira_7.readFeatures(json_Preguiadecoleira_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Preguiadecoleira_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Preguiadecoleira_7.addFeatures(features_Preguiadecoleira_7);
var lyr_Preguiadecoleira_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Preguiadecoleira_7, 
                style: style_Preguiadecoleira_7,
                interactive: false,
                title: '<img src="styles/legend/Preguiadecoleira_7.png" /> Preguiça de coleira'
            });
var format_Siriema_8 = new ol.format.GeoJSON();
var features_Siriema_8 = format_Siriema_8.readFeatures(json_Siriema_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siriema_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siriema_8.addFeatures(features_Siriema_8);
var lyr_Siriema_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Siriema_8, 
                style: style_Siriema_8,
                interactive: false,
                title: '<img src="styles/legend/Siriema_8.png" /> Siriema'
            });
var format_TamanduBandeira_9 = new ol.format.GeoJSON();
var features_TamanduBandeira_9 = format_TamanduBandeira_9.readFeatures(json_TamanduBandeira_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TamanduBandeira_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TamanduBandeira_9.addFeatures(features_TamanduBandeira_9);
var lyr_TamanduBandeira_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TamanduBandeira_9, 
                style: style_TamanduBandeira_9,
                interactive: false,
                title: '<img src="styles/legend/TamanduBandeira_9.png" /> Tamanduá Bandeira'
            });
var format_Tartarugadepente_10 = new ol.format.GeoJSON();
var features_Tartarugadepente_10 = format_Tartarugadepente_10.readFeatures(json_Tartarugadepente_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tartarugadepente_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tartarugadepente_10.addFeatures(features_Tartarugadepente_10);
var lyr_Tartarugadepente_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tartarugadepente_10, 
                style: style_Tartarugadepente_10,
                interactive: false,
                title: '<img src="styles/legend/Tartarugadepente_10.png" /> Tartaruga de pente'
            });
var format_tartarugaoliva_11 = new ol.format.GeoJSON();
var features_tartarugaoliva_11 = format_tartarugaoliva_11.readFeatures(json_tartarugaoliva_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tartarugaoliva_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tartarugaoliva_11.addFeatures(features_tartarugaoliva_11);
var lyr_tartarugaoliva_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tartarugaoliva_11, 
                style: style_tartarugaoliva_11,
                interactive: false,
                title: '<img src="styles/legend/tartarugaoliva_11.png" /> tartaruga oliva'
            });
var format_Tartarugaverde_12 = new ol.format.GeoJSON();
var features_Tartarugaverde_12 = format_Tartarugaverde_12.readFeatures(json_Tartarugaverde_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tartarugaverde_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tartarugaverde_12.addFeatures(features_Tartarugaverde_12);
var lyr_Tartarugaverde_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tartarugaverde_12, 
                style: style_Tartarugaverde_12,
                interactive: false,
                title: '<img src="styles/legend/Tartarugaverde_12.png" /> Tartaruga verde'
            });
var format_tatarugacabeuda_13 = new ol.format.GeoJSON();
var features_tatarugacabeuda_13 = format_tatarugacabeuda_13.readFeatures(json_tatarugacabeuda_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tatarugacabeuda_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tatarugacabeuda_13.addFeatures(features_tatarugacabeuda_13);
var lyr_tatarugacabeuda_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tatarugacabeuda_13, 
                style: style_tatarugacabeuda_13,
                interactive: false,
                title: '<img src="styles/legend/tatarugacabeuda_13.png" /> tataruga cabeçuda'
            });
var format_tatarugadecouro_14 = new ol.format.GeoJSON();
var features_tatarugadecouro_14 = format_tatarugadecouro_14.readFeatures(json_tatarugadecouro_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tatarugadecouro_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tatarugadecouro_14.addFeatures(features_tatarugadecouro_14);
var lyr_tatarugadecouro_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tatarugadecouro_14, 
                style: style_tatarugadecouro_14,
                interactive: false,
                title: '<img src="styles/legend/tatarugadecouro_14.png" /> tataruga de couro'
            });
var format_Tatubola_15 = new ol.format.GeoJSON();
var features_Tatubola_15 = format_Tatubola_15.readFeatures(json_Tatubola_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tatubola_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tatubola_15.addFeatures(features_Tatubola_15);
var lyr_Tatubola_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tatubola_15, 
                style: style_Tatubola_15,
                interactive: false,
                title: '<img src="styles/legend/Tatubola_15.png" /> Tatu bola'
            });
var format_TatuCanastra_16 = new ol.format.GeoJSON();
var features_TatuCanastra_16 = format_TatuCanastra_16.readFeatures(json_TatuCanastra_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TatuCanastra_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TatuCanastra_16.addFeatures(features_TatuCanastra_16);
var lyr_TatuCanastra_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TatuCanastra_16, 
                style: style_TatuCanastra_16,
                interactive: false,
                title: '<img src="styles/legend/TatuCanastra_16.png" /> Tatu Canastra'
            });
var format_Ticoticodomato_17 = new ol.format.GeoJSON();
var features_Ticoticodomato_17 = format_Ticoticodomato_17.readFeatures(json_Ticoticodomato_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ticoticodomato_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ticoticodomato_17.addFeatures(features_Ticoticodomato_17);
var lyr_Ticoticodomato_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ticoticodomato_17, 
                style: style_Ticoticodomato_17,
                interactive: false,
                title: '<img src="styles/legend/Ticoticodomato_17.png" /> Tico tico do mato'
            });
var format_Tubarobaleia_18 = new ol.format.GeoJSON();
var features_Tubarobaleia_18 = format_Tubarobaleia_18.readFeatures(json_Tubarobaleia_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tubarobaleia_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tubarobaleia_18.addFeatures(features_Tubarobaleia_18);
var lyr_Tubarobaleia_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tubarobaleia_18, 
                style: style_Tubarobaleia_18,
                interactive: false,
                title: '<img src="styles/legend/Tubarobaleia_18.png" /> Tubarão baleia'
            });
var format_Tubarolixa_19 = new ol.format.GeoJSON();
var features_Tubarolixa_19 = format_Tubarolixa_19.readFeatures(json_Tubarolixa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tubarolixa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tubarolixa_19.addFeatures(features_Tubarolixa_19);
var lyr_Tubarolixa_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tubarolixa_19, 
                style: style_Tubarolixa_19,
                interactive: false,
                title: '<img src="styles/legend/Tubarolixa_19.png" /> Tubarão lixa'
            });
var format_Tucanotoco_20 = new ol.format.GeoJSON();
var features_Tucanotoco_20 = format_Tucanotoco_20.readFeatures(json_Tucanotoco_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tucanotoco_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tucanotoco_20.addFeatures(features_Tucanotoco_20);
var lyr_Tucanotoco_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tucanotoco_20, 
                style: style_Tucanotoco_20,
                interactive: false,
                title: '<img src="styles/legend/Tucanotoco_20.png" /> Tucano toco'
            });
var format_Uacari_21 = new ol.format.GeoJSON();
var features_Uacari_21 = format_Uacari_21.readFeatures(json_Uacari_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uacari_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uacari_21.addFeatures(features_Uacari_21);
var lyr_Uacari_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uacari_21, 
                style: style_Uacari_21,
                interactive: false,
                title: '<img src="styles/legend/Uacari_21.png" /> Uacari'
            });
var format_guiaCinzenta_22 = new ol.format.GeoJSON();
var features_guiaCinzenta_22 = format_guiaCinzenta_22.readFeatures(json_guiaCinzenta_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guiaCinzenta_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guiaCinzenta_22.addFeatures(features_guiaCinzenta_22);
var lyr_guiaCinzenta_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_guiaCinzenta_22, 
                style: style_guiaCinzenta_22,
                interactive: false,
                title: '<img src="styles/legend/guiaCinzenta_22.png" /> Águia Cinzenta'
            });
var format_andarilho_23 = new ol.format.GeoJSON();
var features_andarilho_23 = format_andarilho_23.readFeatures(json_andarilho_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_andarilho_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_andarilho_23.addFeatures(features_andarilho_23);
var lyr_andarilho_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_andarilho_23, 
                style: style_andarilho_23,
                interactive: false,
                title: '<img src="styles/legend/andarilho_23.png" /> andarilho'
            });
var format_Araraazul_24 = new ol.format.GeoJSON();
var features_Araraazul_24 = format_Araraazul_24.readFeatures(json_Araraazul_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Araraazul_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Araraazul_24.addFeatures(features_Araraazul_24);
var lyr_Araraazul_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Araraazul_24, 
                style: style_Araraazul_24,
                interactive: false,
                title: '<img src="styles/legend/Araraazul_24.png" /> Arara azul'
            });
var format_Ararajuba_25 = new ol.format.GeoJSON();
var features_Ararajuba_25 = format_Ararajuba_25.readFeatures(json_Ararajuba_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ararajuba_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ararajuba_25.addFeatures(features_Ararajuba_25);
var lyr_Ararajuba_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ararajuba_25, 
                style: style_Ararajuba_25,
                interactive: false,
                title: '<img src="styles/legend/Ararajuba_25.png" /> Ararajuba'
            });
var format_Ariranha_26 = new ol.format.GeoJSON();
var features_Ariranha_26 = format_Ariranha_26.readFeatures(json_Ariranha_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ariranha_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ariranha_26.addFeatures(features_Ariranha_26);
var lyr_Ariranha_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ariranha_26, 
                style: style_Ariranha_26,
                interactive: false,
                title: '<img src="styles/legend/Ariranha_26.png" /> Ariranha'
            });
var format_baleiafranca_27 = new ol.format.GeoJSON();
var features_baleiafranca_27 = format_baleiafranca_27.readFeatures(json_baleiafranca_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baleiafranca_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baleiafranca_27.addFeatures(features_baleiafranca_27);
var lyr_baleiafranca_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_baleiafranca_27, 
                style: style_baleiafranca_27,
                interactive: false,
                title: '<img src="styles/legend/baleiafranca_27.png" /> baleia franca'
            });
var format_BaleiaJubarte_28 = new ol.format.GeoJSON();
var features_BaleiaJubarte_28 = format_BaleiaJubarte_28.readFeatures(json_BaleiaJubarte_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaleiaJubarte_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaleiaJubarte_28.addFeatures(features_BaleiaJubarte_28);
var lyr_BaleiaJubarte_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BaleiaJubarte_28, 
                style: style_BaleiaJubarte_28,
                interactive: false,
                title: '<img src="styles/legend/BaleiaJubarte_28.png" /> Baleia Jubarte'
            });
var format_Besourodechifre_29 = new ol.format.GeoJSON();
var features_Besourodechifre_29 = format_Besourodechifre_29.readFeatures(json_Besourodechifre_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Besourodechifre_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Besourodechifre_29.addFeatures(features_Besourodechifre_29);
var lyr_Besourodechifre_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Besourodechifre_29, 
                style: style_Besourodechifre_29,
                interactive: false,
                title: '<img src="styles/legend/Besourodechifre_29.png" /> Besouro de chifre'
            });
var format_Bugio_30 = new ol.format.GeoJSON();
var features_Bugio_30 = format_Bugio_30.readFeatures(json_Bugio_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bugio_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bugio_30.addFeatures(features_Bugio_30);
var lyr_Bugio_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bugio_30, 
                style: style_Bugio_30,
                interactive: false,
                title: '<img src="styles/legend/Bugio_30.png" /> Bugio'
            });
var format_Caopato_31 = new ol.format.GeoJSON();
var features_Caopato_31 = format_Caopato_31.readFeatures(json_Caopato_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caopato_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caopato_31.addFeatures(features_Caopato_31);
var lyr_Caopato_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caopato_31, 
                style: style_Caopato_31,
                interactive: false,
                title: '<img src="styles/legend/Caopato_31.png" /> Cação pato'
            });
var format_Cachalote_32 = new ol.format.GeoJSON();
var features_Cachalote_32 = format_Cachalote_32.readFeatures(json_Cachalote_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cachalote_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cachalote_32.addFeatures(features_Cachalote_32);
var lyr_Cachalote_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cachalote_32, 
                style: style_Cachalote_32,
                interactive: false,
                title: '<img src="styles/legend/Cachalote_32.png" /> Cachalote'
            });
var format_CachorrodoMatovinagre_33 = new ol.format.GeoJSON();
var features_CachorrodoMatovinagre_33 = format_CachorrodoMatovinagre_33.readFeatures(json_CachorrodoMatovinagre_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CachorrodoMatovinagre_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CachorrodoMatovinagre_33.addFeatures(features_CachorrodoMatovinagre_33);
var lyr_CachorrodoMatovinagre_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CachorrodoMatovinagre_33, 
                style: style_CachorrodoMatovinagre_33,
                interactive: false,
                title: '<img src="styles/legend/CachorrodoMatovinagre_33.png" /> Cachorro do Mato vinagre'
            });
var format_CervodoPantanal_34 = new ol.format.GeoJSON();
var features_CervodoPantanal_34 = format_CervodoPantanal_34.readFeatures(json_CervodoPantanal_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CervodoPantanal_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CervodoPantanal_34.addFeatures(features_CervodoPantanal_34);
var lyr_CervodoPantanal_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CervodoPantanal_34, 
                style: style_CervodoPantanal_34,
                interactive: false,
                title: '<img src="styles/legend/CervodoPantanal_34.png" /> Cervo do Pantanal'
            });
var format_ChorordeGois_35 = new ol.format.GeoJSON();
var features_ChorordeGois_35 = format_ChorordeGois_35.readFeatures(json_ChorordeGois_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChorordeGois_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChorordeGois_35.addFeatures(features_ChorordeGois_35);
var lyr_ChorordeGois_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChorordeGois_35, 
                style: style_ChorordeGois_35,
                interactive: false,
                title: '<img src="styles/legend/ChorordeGois_35.png" /> Chororó de Goiás'
            });
var format_Chororzinhodebon_36 = new ol.format.GeoJSON();
var features_Chororzinhodebon_36 = format_Chororzinhodebon_36.readFeatures(json_Chororzinhodebon_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chororzinhodebon_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chororzinhodebon_36.addFeatures(features_Chororzinhodebon_36);
var lyr_Chororzinhodebon_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chororzinhodebon_36, 
                style: style_Chororzinhodebon_36,
                interactive: false,
                title: '<img src="styles/legend/Chororzinhodebon_36.png" /> Chororózinho de boné '
            });
var format_Codornamineira_37 = new ol.format.GeoJSON();
var features_Codornamineira_37 = format_Codornamineira_37.readFeatures(json_Codornamineira_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codornamineira_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codornamineira_37.addFeatures(features_Codornamineira_37);
var lyr_Codornamineira_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Codornamineira_37, 
                style: style_Codornamineira_37,
                interactive: false,
                title: '<img src="styles/legend/Codornamineira_37.png" /> Codorna mineira'
            });
var format_Coraldefogo_38 = new ol.format.GeoJSON();
var features_Coraldefogo_38 = format_Coraldefogo_38.readFeatures(json_Coraldefogo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coraldefogo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coraldefogo_38.addFeatures(features_Coraldefogo_38);
var lyr_Coraldefogo_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coraldefogo_38, 
                style: style_Coraldefogo_38,
                interactive: false,
                title: '<img src="styles/legend/Coraldefogo_38.png" /> Coral de fogo'
            });
var format_Cuicadecolete_39 = new ol.format.GeoJSON();
var features_Cuicadecolete_39 = format_Cuicadecolete_39.readFeatures(json_Cuicadecolete_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuicadecolete_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuicadecolete_39.addFeatures(features_Cuicadecolete_39);
var lyr_Cuicadecolete_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuicadecolete_39, 
                style: style_Cuicadecolete_39,
                interactive: false,
                title: '<img src="styles/legend/Cuicadecolete_39.png" /> Cuica de colete'
            });
var format_Cuxi_40 = new ol.format.GeoJSON();
var features_Cuxi_40 = format_Cuxi_40.readFeatures(json_Cuxi_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuxi_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuxi_40.addFeatures(features_Cuxi_40);
var lyr_Cuxi_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuxi_40, 
                style: style_Cuxi_40,
                interactive: false,
                title: '<img src="styles/legend/Cuxi_40.png" /> Cuxiú'
            });
var format_Gatodospampas_41 = new ol.format.GeoJSON();
var features_Gatodospampas_41 = format_Gatodospampas_41.readFeatures(json_Gatodospampas_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gatodospampas_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gatodospampas_41.addFeatures(features_Gatodospampas_41);
var lyr_Gatodospampas_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gatodospampas_41, 
                style: style_Gatodospampas_41,
                interactive: false,
                title: '<img src="styles/legend/Gatodospampas_41.png" /> Gato dos pampas'
            });
var format_GatoMaracaj_42 = new ol.format.GeoJSON();
var features_GatoMaracaj_42 = format_GatoMaracaj_42.readFeatures(json_GatoMaracaj_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GatoMaracaj_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GatoMaracaj_42.addFeatures(features_GatoMaracaj_42);
var lyr_GatoMaracaj_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GatoMaracaj_42, 
                style: style_GatoMaracaj_42,
                interactive: false,
                title: '<img src="styles/legend/GatoMaracaj_42.png" /> Gato Maracajá'
            });
var format_GbiNeon_43 = new ol.format.GeoJSON();
var features_GbiNeon_43 = format_GbiNeon_43.readFeatures(json_GbiNeon_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GbiNeon_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GbiNeon_43.addFeatures(features_GbiNeon_43);
var lyr_GbiNeon_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GbiNeon_43, 
                style: style_GbiNeon_43,
                interactive: false,
                title: '<img src="styles/legend/GbiNeon_43.png" /> Góbi Neon'
            });
var format_Guariba_44 = new ol.format.GeoJSON();
var features_Guariba_44 = format_Guariba_44.readFeatures(json_Guariba_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guariba_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guariba_44.addFeatures(features_Guariba_44);
var lyr_Guariba_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Guariba_44, 
                style: style_Guariba_44,
                interactive: false,
                title: '<img src="styles/legend/Guariba_44.png" /> Guariba'
            });
var format_Jacudebarrigacastanha_45 = new ol.format.GeoJSON();
var features_Jacudebarrigacastanha_45 = format_Jacudebarrigacastanha_45.readFeatures(json_Jacudebarrigacastanha_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jacudebarrigacastanha_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jacudebarrigacastanha_45.addFeatures(features_Jacudebarrigacastanha_45);
var lyr_Jacudebarrigacastanha_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jacudebarrigacastanha_45, 
                style: style_Jacudebarrigacastanha_45,
                interactive: false,
                title: '<img src="styles/legend/Jacudebarrigacastanha_45.png" /> Jacu de barriga castanha'
            });
var format_Jacucaca_46 = new ol.format.GeoJSON();
var features_Jacucaca_46 = format_Jacucaca_46.readFeatures(json_Jacucaca_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jacucaca_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jacucaca_46.addFeatures(features_Jacucaca_46);
var lyr_Jacucaca_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jacucaca_46, 
                style: style_Jacucaca_46,
                interactive: false,
                title: '<img src="styles/legend/Jacucaca_46.png" /> Jacucaca'
            });
var format_LoboGuar_47 = new ol.format.GeoJSON();
var features_LoboGuar_47 = format_LoboGuar_47.readFeatures(json_LoboGuar_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoboGuar_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoboGuar_47.addFeatures(features_LoboGuar_47);
var lyr_LoboGuar_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LoboGuar_47, 
                style: style_LoboGuar_47,
                interactive: false,
                title: '<img src="styles/legend/LoboGuar_47.png" /> Lobo Guará'
            });
var format_MacacoAranha_48 = new ol.format.GeoJSON();
var features_MacacoAranha_48 = format_MacacoAranha_48.readFeatures(json_MacacoAranha_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MacacoAranha_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacacoAranha_48.addFeatures(features_MacacoAranha_48);
var lyr_MacacoAranha_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MacacoAranha_48, 
                style: style_MacacoAranha_48,
                interactive: false,
                title: '<img src="styles/legend/MacacoAranha_48.png" /> Macaco Aranha'
            });
var format_Macacopregodecrista_49 = new ol.format.GeoJSON();
var features_Macacopregodecrista_49 = format_Macacopregodecrista_49.readFeatures(json_Macacopregodecrista_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Macacopregodecrista_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Macacopregodecrista_49.addFeatures(features_Macacopregodecrista_49);
var lyr_Macacopregodecrista_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Macacopregodecrista_49, 
                style: style_Macacopregodecrista_49,
                interactive: false,
                title: '<img src="styles/legend/Macacopregodecrista_49.png" /> Macaco prego de crista'
            });
var format_macacoprego_50 = new ol.format.GeoJSON();
var features_macacoprego_50 = format_macacoprego_50.readFeatures(json_macacoprego_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_macacoprego_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macacoprego_50.addFeatures(features_macacoprego_50);
var lyr_macacoprego_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_macacoprego_50, 
                style: style_macacoprego_50,
                interactive: false,
                title: '<img src="styles/legend/macacoprego_50.png" /> macaco prego'
            });
var format_Mamiferos_51 = new ol.format.GeoJSON();
var features_Mamiferos_51 = format_Mamiferos_51.readFeatures(json_Mamiferos_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mamiferos_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mamiferos_51.addFeatures(features_Mamiferos_51);
var lyr_Mamiferos_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mamiferos_51, 
                style: style_Mamiferos_51,
                interactive: false,
                title: '<img src="styles/legend/Mamiferos_51.png" /> Mamiferos'
            });
var format_Micoleodecaradourada_52 = new ol.format.GeoJSON();
var features_Micoleodecaradourada_52 = format_Micoleodecaradourada_52.readFeatures(json_Micoleodecaradourada_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Micoleodecaradourada_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Micoleodecaradourada_52.addFeatures(features_Micoleodecaradourada_52);
var lyr_Micoleodecaradourada_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Micoleodecaradourada_52, 
                style: style_Micoleodecaradourada_52,
                interactive: false,
                title: '<img src="styles/legend/Micoleodecaradourada_52.png" /> Mico leão de cara dourada'
            });
var format_MorceguinhodoCerrado_53 = new ol.format.GeoJSON();
var features_MorceguinhodoCerrado_53 = format_MorceguinhodoCerrado_53.readFeatures(json_MorceguinhodoCerrado_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MorceguinhodoCerrado_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MorceguinhodoCerrado_53.addFeatures(features_MorceguinhodoCerrado_53);
var lyr_MorceguinhodoCerrado_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MorceguinhodoCerrado_53, 
                style: style_MorceguinhodoCerrado_53,
                interactive: false,
                title: '<img src="styles/legend/MorceguinhodoCerrado_53.png" /> Morceguinho do Cerrado'
            });
var format_OnaParda_54 = new ol.format.GeoJSON();
var features_OnaParda_54 = format_OnaParda_54.readFeatures(json_OnaParda_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OnaParda_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OnaParda_54.addFeatures(features_OnaParda_54);
var lyr_OnaParda_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OnaParda_54, 
                style: style_OnaParda_54,
                interactive: false,
                title: '<img src="styles/legend/OnaParda_54.png" /> Onça Parda'
            });
var format_OnaPintada_55 = new ol.format.GeoJSON();
var features_OnaPintada_55 = format_OnaPintada_55.readFeatures(json_OnaPintada_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OnaPintada_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OnaPintada_55.addFeatures(features_OnaPintada_55);
var lyr_OnaPintada_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OnaPintada_55, 
                style: style_OnaPintada_55,
                interactive: false,
                title: '<img src="styles/legend/OnaPintada_55.png" /> Onça Pintada'
            });
var format_PacuPrata_56 = new ol.format.GeoJSON();
var features_PacuPrata_56 = format_PacuPrata_56.readFeatures(json_PacuPrata_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PacuPrata_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PacuPrata_56.addFeatures(features_PacuPrata_56);
var lyr_PacuPrata_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PacuPrata_56, 
                style: style_PacuPrata_56,
                interactive: false,
                title: '<img src="styles/legend/PacuPrata_56.png" /> Pacu Prata'
            });
var format_Pacu_57 = new ol.format.GeoJSON();
var features_Pacu_57 = format_Pacu_57.readFeatures(json_Pacu_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pacu_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pacu_57.addFeatures(features_Pacu_57);
var lyr_Pacu_57 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pacu_57, 
                style: style_Pacu_57,
                interactive: false,
                title: '<img src="styles/legend/Pacu_57.png" /> Pacu'
            });
var format_Papamoscasdocampo_58 = new ol.format.GeoJSON();
var features_Papamoscasdocampo_58 = format_Papamoscasdocampo_58.readFeatures(json_Papamoscasdocampo_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Papamoscasdocampo_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Papamoscasdocampo_58.addFeatures(features_Papamoscasdocampo_58);
var lyr_Papamoscasdocampo_58 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Papamoscasdocampo_58, 
                style: style_Papamoscasdocampo_58,
                interactive: false,
                title: '<img src="styles/legend/Papamoscasdocampo_58.png" /> Papa moscas do campo'
            });
var format_PapagaiodePeitoRoxo_59 = new ol.format.GeoJSON();
var features_PapagaiodePeitoRoxo_59 = format_PapagaiodePeitoRoxo_59.readFeatures(json_PapagaiodePeitoRoxo_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PapagaiodePeitoRoxo_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PapagaiodePeitoRoxo_59.addFeatures(features_PapagaiodePeitoRoxo_59);
var lyr_PapagaiodePeitoRoxo_59 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PapagaiodePeitoRoxo_59, 
                style: style_PapagaiodePeitoRoxo_59,
                interactive: false,
                title: '<img src="styles/legend/PapagaiodePeitoRoxo_59.png" /> Papagaio de Peito Roxo'
            });
var format_Patomergulho_60 = new ol.format.GeoJSON();
var features_Patomergulho_60 = format_Patomergulho_60.readFeatures(json_Patomergulho_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Patomergulho_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Patomergulho_60.addFeatures(features_Patomergulho_60);
var lyr_Patomergulho_60 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Patomergulho_60, 
                style: style_Patomergulho_60,
                interactive: false,
                title: '<img src="styles/legend/Patomergulho_60.png" /> Pato mergulhão'
            });

lyr_Pases_0.setVisible(true);lyr_Biomas_1.setVisible(true);lyr_Estados_2.setVisible(true);lyr_PeixeBoidaAmaznia_3.setVisible(true);lyr_PeixeBoiMarinho_4.setVisible(true);lyr_PeixeSerra_5.setVisible(true);lyr_Piracanjuba_6.setVisible(true);lyr_Preguiadecoleira_7.setVisible(true);lyr_Siriema_8.setVisible(true);lyr_TamanduBandeira_9.setVisible(true);lyr_Tartarugadepente_10.setVisible(true);lyr_tartarugaoliva_11.setVisible(true);lyr_Tartarugaverde_12.setVisible(true);lyr_tatarugacabeuda_13.setVisible(true);lyr_tatarugadecouro_14.setVisible(true);lyr_Tatubola_15.setVisible(true);lyr_TatuCanastra_16.setVisible(true);lyr_Ticoticodomato_17.setVisible(true);lyr_Tubarobaleia_18.setVisible(true);lyr_Tubarolixa_19.setVisible(true);lyr_Tucanotoco_20.setVisible(true);lyr_Uacari_21.setVisible(true);lyr_guiaCinzenta_22.setVisible(true);lyr_andarilho_23.setVisible(true);lyr_Araraazul_24.setVisible(true);lyr_Ararajuba_25.setVisible(true);lyr_Ariranha_26.setVisible(true);lyr_baleiafranca_27.setVisible(true);lyr_BaleiaJubarte_28.setVisible(true);lyr_Besourodechifre_29.setVisible(true);lyr_Bugio_30.setVisible(true);lyr_Caopato_31.setVisible(true);lyr_Cachalote_32.setVisible(true);lyr_CachorrodoMatovinagre_33.setVisible(true);lyr_CervodoPantanal_34.setVisible(true);lyr_ChorordeGois_35.setVisible(true);lyr_Chororzinhodebon_36.setVisible(true);lyr_Codornamineira_37.setVisible(true);lyr_Coraldefogo_38.setVisible(true);lyr_Cuicadecolete_39.setVisible(true);lyr_Cuxi_40.setVisible(true);lyr_Gatodospampas_41.setVisible(true);lyr_GatoMaracaj_42.setVisible(true);lyr_GbiNeon_43.setVisible(true);lyr_Guariba_44.setVisible(true);lyr_Jacudebarrigacastanha_45.setVisible(true);lyr_Jacucaca_46.setVisible(true);lyr_LoboGuar_47.setVisible(true);lyr_MacacoAranha_48.setVisible(true);lyr_Macacopregodecrista_49.setVisible(true);lyr_macacoprego_50.setVisible(true);lyr_Mamiferos_51.setVisible(true);lyr_Micoleodecaradourada_52.setVisible(true);lyr_MorceguinhodoCerrado_53.setVisible(true);lyr_OnaParda_54.setVisible(true);lyr_OnaPintada_55.setVisible(true);lyr_PacuPrata_56.setVisible(true);lyr_Pacu_57.setVisible(true);lyr_Papamoscasdocampo_58.setVisible(true);lyr_PapagaiodePeitoRoxo_59.setVisible(true);lyr_Patomergulho_60.setVisible(true);
var layersList = [lyr_Pases_0,lyr_Biomas_1,lyr_Estados_2,lyr_PeixeBoidaAmaznia_3,lyr_PeixeBoiMarinho_4,lyr_PeixeSerra_5,lyr_Piracanjuba_6,lyr_Preguiadecoleira_7,lyr_Siriema_8,lyr_TamanduBandeira_9,lyr_Tartarugadepente_10,lyr_tartarugaoliva_11,lyr_Tartarugaverde_12,lyr_tatarugacabeuda_13,lyr_tatarugadecouro_14,lyr_Tatubola_15,lyr_TatuCanastra_16,lyr_Ticoticodomato_17,lyr_Tubarobaleia_18,lyr_Tubarolixa_19,lyr_Tucanotoco_20,lyr_Uacari_21,lyr_guiaCinzenta_22,lyr_andarilho_23,lyr_Araraazul_24,lyr_Ararajuba_25,lyr_Ariranha_26,lyr_baleiafranca_27,lyr_BaleiaJubarte_28,lyr_Besourodechifre_29,lyr_Bugio_30,lyr_Caopato_31,lyr_Cachalote_32,lyr_CachorrodoMatovinagre_33,lyr_CervodoPantanal_34,lyr_ChorordeGois_35,lyr_Chororzinhodebon_36,lyr_Codornamineira_37,lyr_Coraldefogo_38,lyr_Cuicadecolete_39,lyr_Cuxi_40,lyr_Gatodospampas_41,lyr_GatoMaracaj_42,lyr_GbiNeon_43,lyr_Guariba_44,lyr_Jacudebarrigacastanha_45,lyr_Jacucaca_46,lyr_LoboGuar_47,lyr_MacacoAranha_48,lyr_Macacopregodecrista_49,lyr_macacoprego_50,lyr_Mamiferos_51,lyr_Micoleodecaradourada_52,lyr_MorceguinhodoCerrado_53,lyr_OnaParda_54,lyr_OnaPintada_55,lyr_PacuPrata_56,lyr_Pacu_57,lyr_Papamoscasdocampo_58,lyr_PapagaiodePeitoRoxo_59,lyr_Patomergulho_60];
lyr_Pases_0.set('fieldAliases', {'ScaleRank': 'ScaleRank', 'LabelRank': 'LabelRank', 'FeatureCla': 'FeatureCla', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'NAME': 'NAME', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'NAME_FORMA': 'NAME_FORMA', 'TERR_': 'TERR_', 'NAME_SORT': 'NAME_SORT', 'MAP_COLOR': 'MAP_COLOR', 'POP_EST': 'POP_EST', 'GDP_MD_EST': 'GDP_MD_EST', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_N3': 'ISO_N3', });
lyr_Biomas_1.set('fieldAliases', {'NOME': 'NOME', 'AREA': 'AREA', });
lyr_Estados_2.set('fieldAliases', {'MSLINK': 'MSLINK', 'MAPID': 'MAPID', 'CODIGO': 'CODIGO', 'AREA_1': 'AREA_1', 'PERIMETRO_': 'PERIMETRO_', 'GEOCODIGO': 'GEOCODIGO', 'NOME': 'NOME', 'AREA_TOT_G': 'AREA_TOT_G', });
lyr_PeixeBoidaAmaznia_3.set('fieldAliases', {'Id': 'Id', });
lyr_PeixeBoiMarinho_4.set('fieldAliases', {'Id': 'Id', });
lyr_PeixeSerra_5.set('fieldAliases', {'Id': 'Id', });
lyr_Piracanjuba_6.set('fieldAliases', {'Id': 'Id', });
lyr_Preguiadecoleira_7.set('fieldAliases', {'Id': 'Id', });
lyr_Siriema_8.set('fieldAliases', {'Id': 'Id', });
lyr_TamanduBandeira_9.set('fieldAliases', {'Id': 'Id', });
lyr_Tartarugadepente_10.set('fieldAliases', {'Id': 'Id', });
lyr_tartarugaoliva_11.set('fieldAliases', {'Id': 'Id', });
lyr_Tartarugaverde_12.set('fieldAliases', {'Id': 'Id', });
lyr_tatarugacabeuda_13.set('fieldAliases', {'Id': 'Id', });
lyr_tatarugadecouro_14.set('fieldAliases', {'Id': 'Id', });
lyr_Tatubola_15.set('fieldAliases', {'Id': 'Id', });
lyr_TatuCanastra_16.set('fieldAliases', {'Id': 'Id', });
lyr_Ticoticodomato_17.set('fieldAliases', {'Id': 'Id', });
lyr_Tubarobaleia_18.set('fieldAliases', {'Id': 'Id', });
lyr_Tubarolixa_19.set('fieldAliases', {'Id': 'Id', });
lyr_Tucanotoco_20.set('fieldAliases', {'Id': 'Id', });
lyr_Uacari_21.set('fieldAliases', {'Id': 'Id', });
lyr_guiaCinzenta_22.set('fieldAliases', {'Id': 'Id', });
lyr_andarilho_23.set('fieldAliases', {'Id': 'Id', });
lyr_Araraazul_24.set('fieldAliases', {'Id': 'Id', });
lyr_Ararajuba_25.set('fieldAliases', {'Id': 'Id', });
lyr_Ariranha_26.set('fieldAliases', {'Id': 'Id', });
lyr_baleiafranca_27.set('fieldAliases', {'Id': 'Id', });
lyr_BaleiaJubarte_28.set('fieldAliases', {'Id': 'Id', });
lyr_Besourodechifre_29.set('fieldAliases', {'Id': 'Id', });
lyr_Bugio_30.set('fieldAliases', {'Id': 'Id', });
lyr_Caopato_31.set('fieldAliases', {'Id': 'Id', });
lyr_Cachalote_32.set('fieldAliases', {'Id': 'Id', });
lyr_CachorrodoMatovinagre_33.set('fieldAliases', {'Id': 'Id', });
lyr_CervodoPantanal_34.set('fieldAliases', {'Id': 'Id', });
lyr_ChorordeGois_35.set('fieldAliases', {'Id': 'Id', });
lyr_Chororzinhodebon_36.set('fieldAliases', {'Id': 'Id', });
lyr_Codornamineira_37.set('fieldAliases', {'Id': 'Id', });
lyr_Coraldefogo_38.set('fieldAliases', {'Id': 'Id', });
lyr_Cuicadecolete_39.set('fieldAliases', {'Id': 'Id', });
lyr_Cuxi_40.set('fieldAliases', {'Id': 'Id', });
lyr_Gatodospampas_41.set('fieldAliases', {'Id': 'Id', });
lyr_GatoMaracaj_42.set('fieldAliases', {'Id': 'Id', });
lyr_GbiNeon_43.set('fieldAliases', {'Id': 'Id', });
lyr_Guariba_44.set('fieldAliases', {'Id': 'Id', });
lyr_Jacudebarrigacastanha_45.set('fieldAliases', {'Id': 'Id', });
lyr_Jacucaca_46.set('fieldAliases', {'Id': 'Id', });
lyr_LoboGuar_47.set('fieldAliases', {'Id': 'Id', });
lyr_MacacoAranha_48.set('fieldAliases', {'Id': 'Id', });
lyr_Macacopregodecrista_49.set('fieldAliases', {'Id': 'Id', });
lyr_macacoprego_50.set('fieldAliases', {'Id': 'Id', });
lyr_Mamiferos_51.set('fieldAliases', {'Id': 'Id', 'Especie': 'Especie', });
lyr_Micoleodecaradourada_52.set('fieldAliases', {'Id': 'Id', });
lyr_MorceguinhodoCerrado_53.set('fieldAliases', {'Id': 'Id', });
lyr_OnaParda_54.set('fieldAliases', {'Id': 'Id', });
lyr_OnaPintada_55.set('fieldAliases', {'Id': 'Id', });
lyr_PacuPrata_56.set('fieldAliases', {'Id': 'Id', });
lyr_Pacu_57.set('fieldAliases', {'Id': 'Id', });
lyr_Papamoscasdocampo_58.set('fieldAliases', {'Id': 'Id', });
lyr_PapagaiodePeitoRoxo_59.set('fieldAliases', {'Id': 'Id', });
lyr_Patomergulho_60.set('fieldAliases', {'Id': 'Id', });
lyr_Pases_0.set('fieldImages', {'ScaleRank': 'Range', 'LabelRank': 'Range', 'FeatureCla': 'TextEdit', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'TextEdit', 'LEVEL': 'TextEdit', 'TYPE': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'TextEdit', 'NAME': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'NAME_FORMA': 'TextEdit', 'TERR_': 'TextEdit', 'NAME_SORT': 'TextEdit', 'MAP_COLOR': 'TextEdit', 'POP_EST': 'TextEdit', 'GDP_MD_EST': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_N3': 'TextEdit', });
lyr_Biomas_1.set('fieldImages', {'NOME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Estados_2.set('fieldImages', {'MSLINK': 'TextEdit', 'MAPID': 'TextEdit', 'CODIGO': 'TextEdit', 'AREA_1': 'TextEdit', 'PERIMETRO_': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'NOME': 'TextEdit', 'AREA_TOT_G': 'TextEdit', });
lyr_PeixeBoidaAmaznia_3.set('fieldImages', {'Id': '', });
lyr_PeixeBoiMarinho_4.set('fieldImages', {'Id': '', });
lyr_PeixeSerra_5.set('fieldImages', {'Id': '', });
lyr_Piracanjuba_6.set('fieldImages', {'Id': '', });
lyr_Preguiadecoleira_7.set('fieldImages', {'Id': '', });
lyr_Siriema_8.set('fieldImages', {'Id': '', });
lyr_TamanduBandeira_9.set('fieldImages', {'Id': '', });
lyr_Tartarugadepente_10.set('fieldImages', {'Id': '', });
lyr_tartarugaoliva_11.set('fieldImages', {'Id': '', });
lyr_Tartarugaverde_12.set('fieldImages', {'Id': '', });
lyr_tatarugacabeuda_13.set('fieldImages', {'Id': '', });
lyr_tatarugadecouro_14.set('fieldImages', {'Id': '', });
lyr_Tatubola_15.set('fieldImages', {'Id': '', });
lyr_TatuCanastra_16.set('fieldImages', {'Id': '', });
lyr_Ticoticodomato_17.set('fieldImages', {'Id': '', });
lyr_Tubarobaleia_18.set('fieldImages', {'Id': '', });
lyr_Tubarolixa_19.set('fieldImages', {'Id': '', });
lyr_Tucanotoco_20.set('fieldImages', {'Id': '', });
lyr_Uacari_21.set('fieldImages', {'Id': '', });
lyr_guiaCinzenta_22.set('fieldImages', {'Id': '', });
lyr_andarilho_23.set('fieldImages', {'Id': '', });
lyr_Araraazul_24.set('fieldImages', {'Id': '', });
lyr_Ararajuba_25.set('fieldImages', {'Id': '', });
lyr_Ariranha_26.set('fieldImages', {'Id': '', });
lyr_baleiafranca_27.set('fieldImages', {'Id': '', });
lyr_BaleiaJubarte_28.set('fieldImages', {'Id': '', });
lyr_Besourodechifre_29.set('fieldImages', {'Id': '', });
lyr_Bugio_30.set('fieldImages', {'Id': '', });
lyr_Caopato_31.set('fieldImages', {'Id': '', });
lyr_Cachalote_32.set('fieldImages', {'Id': '', });
lyr_CachorrodoMatovinagre_33.set('fieldImages', {'Id': '', });
lyr_CervodoPantanal_34.set('fieldImages', {'Id': '', });
lyr_ChorordeGois_35.set('fieldImages', {'Id': '', });
lyr_Chororzinhodebon_36.set('fieldImages', {'Id': '', });
lyr_Codornamineira_37.set('fieldImages', {'Id': '', });
lyr_Coraldefogo_38.set('fieldImages', {'Id': '', });
lyr_Cuicadecolete_39.set('fieldImages', {'Id': '', });
lyr_Cuxi_40.set('fieldImages', {'Id': '', });
lyr_Gatodospampas_41.set('fieldImages', {'Id': '', });
lyr_GatoMaracaj_42.set('fieldImages', {'Id': '', });
lyr_GbiNeon_43.set('fieldImages', {'Id': '', });
lyr_Guariba_44.set('fieldImages', {'Id': '', });
lyr_Jacudebarrigacastanha_45.set('fieldImages', {'Id': '', });
lyr_Jacucaca_46.set('fieldImages', {'Id': '', });
lyr_LoboGuar_47.set('fieldImages', {'Id': '', });
lyr_MacacoAranha_48.set('fieldImages', {'Id': '', });
lyr_Macacopregodecrista_49.set('fieldImages', {'Id': '', });
lyr_macacoprego_50.set('fieldImages', {'Id': '', });
lyr_Mamiferos_51.set('fieldImages', {'Id': '', 'Especie': '', });
lyr_Micoleodecaradourada_52.set('fieldImages', {'Id': '', });
lyr_MorceguinhodoCerrado_53.set('fieldImages', {'Id': '', });
lyr_OnaParda_54.set('fieldImages', {'Id': '', });
lyr_OnaPintada_55.set('fieldImages', {'Id': '', });
lyr_PacuPrata_56.set('fieldImages', {'Id': '', });
lyr_Pacu_57.set('fieldImages', {'Id': '', });
lyr_Papamoscasdocampo_58.set('fieldImages', {'Id': '', });
lyr_PapagaiodePeitoRoxo_59.set('fieldImages', {'Id': '', });
lyr_Patomergulho_60.set('fieldImages', {'Id': '', });
lyr_Pases_0.set('fieldLabels', {'ScaleRank': 'no label', 'LabelRank': 'no label', 'FeatureCla': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'NAME': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'NAME_FORMA': 'no label', 'TERR_': 'no label', 'NAME_SORT': 'no label', 'MAP_COLOR': 'no label', 'POP_EST': 'no label', 'GDP_MD_EST': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_N3': 'no label', });
lyr_Biomas_1.set('fieldLabels', {'NOME': 'no label', 'AREA': 'no label', });
lyr_Estados_2.set('fieldLabels', {'MSLINK': 'no label', 'MAPID': 'no label', 'CODIGO': 'no label', 'AREA_1': 'no label', 'PERIMETRO_': 'no label', 'GEOCODIGO': 'no label', 'NOME': 'no label', 'AREA_TOT_G': 'no label', });
lyr_PeixeBoidaAmaznia_3.set('fieldLabels', {'Id': 'no label', });
lyr_PeixeBoiMarinho_4.set('fieldLabels', {'Id': 'no label', });
lyr_PeixeSerra_5.set('fieldLabels', {'Id': 'no label', });
lyr_Piracanjuba_6.set('fieldLabels', {'Id': 'no label', });
lyr_Preguiadecoleira_7.set('fieldLabels', {'Id': 'no label', });
lyr_Siriema_8.set('fieldLabels', {'Id': 'no label', });
lyr_TamanduBandeira_9.set('fieldLabels', {'Id': 'no label', });
lyr_Tartarugadepente_10.set('fieldLabels', {'Id': 'no label', });
lyr_tartarugaoliva_11.set('fieldLabels', {'Id': 'no label', });
lyr_Tartarugaverde_12.set('fieldLabels', {'Id': 'no label', });
lyr_tatarugacabeuda_13.set('fieldLabels', {'Id': 'no label', });
lyr_tatarugadecouro_14.set('fieldLabels', {'Id': 'no label', });
lyr_Tatubola_15.set('fieldLabels', {'Id': 'no label', });
lyr_TatuCanastra_16.set('fieldLabels', {'Id': 'no label', });
lyr_Ticoticodomato_17.set('fieldLabels', {'Id': 'no label', });
lyr_Tubarobaleia_18.set('fieldLabels', {'Id': 'no label', });
lyr_Tubarolixa_19.set('fieldLabels', {'Id': 'no label', });
lyr_Tucanotoco_20.set('fieldLabels', {'Id': 'no label', });
lyr_Uacari_21.set('fieldLabels', {'Id': 'no label', });
lyr_guiaCinzenta_22.set('fieldLabels', {'Id': 'no label', });
lyr_andarilho_23.set('fieldLabels', {'Id': 'no label', });
lyr_Araraazul_24.set('fieldLabels', {'Id': 'no label', });
lyr_Ararajuba_25.set('fieldLabels', {'Id': 'no label', });
lyr_Ariranha_26.set('fieldLabels', {'Id': 'no label', });
lyr_baleiafranca_27.set('fieldLabels', {'Id': 'no label', });
lyr_BaleiaJubarte_28.set('fieldLabels', {'Id': 'no label', });
lyr_Besourodechifre_29.set('fieldLabels', {'Id': 'no label', });
lyr_Bugio_30.set('fieldLabels', {'Id': 'no label', });
lyr_Caopato_31.set('fieldLabels', {'Id': 'no label', });
lyr_Cachalote_32.set('fieldLabels', {'Id': 'no label', });
lyr_CachorrodoMatovinagre_33.set('fieldLabels', {'Id': 'no label', });
lyr_CervodoPantanal_34.set('fieldLabels', {'Id': 'no label', });
lyr_ChorordeGois_35.set('fieldLabels', {'Id': 'no label', });
lyr_Chororzinhodebon_36.set('fieldLabels', {'Id': 'no label', });
lyr_Codornamineira_37.set('fieldLabels', {'Id': 'no label', });
lyr_Coraldefogo_38.set('fieldLabels', {'Id': 'no label', });
lyr_Cuicadecolete_39.set('fieldLabels', {'Id': 'no label', });
lyr_Cuxi_40.set('fieldLabels', {'Id': 'no label', });
lyr_Gatodospampas_41.set('fieldLabels', {'Id': 'no label', });
lyr_GatoMaracaj_42.set('fieldLabels', {'Id': 'no label', });
lyr_GbiNeon_43.set('fieldLabels', {'Id': 'no label', });
lyr_Guariba_44.set('fieldLabels', {'Id': 'no label', });
lyr_Jacudebarrigacastanha_45.set('fieldLabels', {'Id': 'no label', });
lyr_Jacucaca_46.set('fieldLabels', {'Id': 'no label', });
lyr_LoboGuar_47.set('fieldLabels', {'Id': 'no label', });
lyr_MacacoAranha_48.set('fieldLabels', {'Id': 'no label', });
lyr_Macacopregodecrista_49.set('fieldLabels', {'Id': 'no label', });
lyr_macacoprego_50.set('fieldLabels', {'Id': 'no label', });
lyr_Mamiferos_51.set('fieldLabels', {'Id': 'no label', 'Especie': 'no label', });
lyr_Micoleodecaradourada_52.set('fieldLabels', {'Id': 'no label', });
lyr_MorceguinhodoCerrado_53.set('fieldLabels', {'Id': 'no label', });
lyr_OnaParda_54.set('fieldLabels', {'Id': 'no label', });
lyr_OnaPintada_55.set('fieldLabels', {'Id': 'no label', });
lyr_PacuPrata_56.set('fieldLabels', {'Id': 'no label', });
lyr_Pacu_57.set('fieldLabels', {'Id': 'no label', });
lyr_Papamoscasdocampo_58.set('fieldLabels', {'Id': 'no label', });
lyr_PapagaiodePeitoRoxo_59.set('fieldLabels', {'Id': 'no label', });
lyr_Patomergulho_60.set('fieldLabels', {'Id': 'header label', });
lyr_Patomergulho_60.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});