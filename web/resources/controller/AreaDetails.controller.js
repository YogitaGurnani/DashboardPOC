sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/viz/ui5/api/env/Format",
	"sap/viz/ui5/format/ChartFormatter"
], function (Controller, Format, ChartFormatter) {
	"use strict";

	return Controller.extend("pocNameSpace.poc.controller.AreaDetails", {

		onInit: function () {
			var oData = {
				"businessData": [{
					"GROUP_TYPE": "PIECE_1",
					"GROUP_VOLUME": 1,
					"DISPLAY_NAME": "Pump 0023"
				}, {
					"GROUP_TYPE": "PIECE_2",
					"GROUP_VOLUME": 2,
					"DISPLAY_NAME": "Pump 0034"
				}, {
					"GROUP_TYPE": "PIECE_3",
					"GROUP_VOLUME": 3,
					"DISPLAY_NAME": "Pump 0223"
				}, {
					"GROUP_TYPE": "PIECE_5",
					"GROUP_VOLUME": 4,
					"DISPLAY_NAME": "Hydraulic Blades 3304"
				}, {
					"GROUP_TYPE": "PIECE_6",
					"GROUP_VOLUME": 5,
					"DISPLAY_NAME": "Shaft 3345"
				}, {
					"GROUP_TYPE": "PIECE_7",
					"GROUP_VOLUME": 6,
					"DISPLAY_NAME": "Rotor 3345"
				}, {
					"GROUP_TYPE": "PIECE_8",
					"GROUP_VOLUME": 7,
					"DISPLAY_NAME": "Hydraulic Blades 34"
				}, {
					"GROUP_TYPE": "PIECE_9",
					"GROUP_VOLUME": 8,
					"DISPLAY_NAME": "Turbine Controller 334"
				}, {
					"GROUP_TYPE": "PIECE_10",
					"GROUP_VOLUME": 9,
					"DISPLAY_NAME": "Model 2234"
				}, {
					"GROUP_TYPE": "PIECE_11",
					"GROUP_VOLUME": 10,
					"DISPLAY_NAME": "Shaft 3349"
				}, {
					"GROUP_TYPE": "PIECE_12",
					"GROUP_VOLUME": 11,
					"DISPLAY_NAME": "Hydraulic Blades 11"
				}, {
					"GROUP_TYPE": "PIECE_13",
					"GROUP_VOLUME": 12,
					"DISPLAY_NAME": "Hydraulic Blades 12"
				}, {
					"GROUP_TYPE": "PIECE_14",
					"GROUP_VOLUME": 13,
					"DISPLAY_NAME": "Motor 13"
				}, {
					"GROUP_TYPE": "PIECE_15",
					"GROUP_VOLUME": 14,
					"DISPLAY_NAME": "Motor 14"
				}, {
					"GROUP_TYPE": "PIECE_16",
					"GROUP_VOLUME": 15,
					"DISPLAY_NAME": "Wheel 15"
				}, {
					"GROUP_TYPE": "PIECE_17",
					"GROUP_VOLUME": 16,
					"DISPLAY_NAME": "Wheel 16"
				}, {
					"GROUP_TYPE": "PIECE_18",
					"GROUP_VOLUME": 17,
					"DISPLAY_NAME": "Wheel 17"
				}, {
					"GROUP_TYPE": "PIECE_19",
					"GROUP_VOLUME": 18,
					"DISPLAY_NAME": "Wheel 18"
				}, {
					"GROUP_TYPE": "PIECE_20",
					"GROUP_VOLUME": 19,
					"DISPLAY_NAME": "Blade 19"
				}, {
					"GROUP_TYPE": "PIECE_21",
					"GROUP_VOLUME": 21,
					"DISPLAY_NAME": "Blade 20"
				}, {
					"GROUP_TYPE": "PIECE_N",
					"GROUP_VOLUME": 21,
					"DISPLAY_NAME": "Blade 3345"
				}]
			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel);

			var oVizFrame = this.byId('DueDateGridFrame');
			oVizFrame.setVizProperties({
				title: {
					text: "Asset Inventory"
				}
			});
			var oVizPopover = this.byId('vizPopover');
			//console.log(oVizPopover)
			oVizPopover.connect(oVizFrame.getVizUid());
		}

	});

});