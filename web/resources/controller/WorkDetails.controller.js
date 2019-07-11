sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("pocNameSpace.poc.controller.WorkDetails", {

		onInit: function () {
			var oRiskModel = new sap.ui.model.json.JSONModel({
				impactLevels: [{
					name: "Insignificant"
				}, {
					name: "Minor"
				}, {
					name: "Moderate"
				}, {
					name: "Major"
				}, {
					name: "Catastrophic"
				}],
				probabilityLevels: [{
					name: "Almost Certain"
				}, {
					name: "Likely"
				}, {
					name: "Moderate"
				}, {
					name: "Unlikely"
				}, {
					name: "Rare"
				}],
				riskRatings: [{
					impact: "Insignificant",
					probability: "Almost Certain",
					rating: "Medium"
				}, {
					impact: "Minor",
					probability: "Almost Certain",
					rating: "High"
				}, {
					impact: "Moderate",
					probability: "Almost Certain",
					rating: "High"
				}, {
					impact: "Major",
					probability: "Almost Certain",
					rating: "Extreme"
				}, {
					impact: "Catastrophic",
					probability: "Almost Certain",
					rating: "Extreme"
				}, {
					impact: "Insignificant",
					probability: "Likely",
					rating: "Medium"
				}, {
					impact: "Minor",
					probability: "Likely",
					rating: "Medium"
				}, {
					impact: "Moderate",
					probability: "Likely",
					rating: "High"
				}, {
					impact: "Major",
					probability: "Likely",
					rating: "High"
				}, {
					impact: "Catastrophic",
					probability: "Likely",
					rating: "Extreme"
				}, {
					impact: "Insignificant",
					probability: "Moderate",
					rating: "Low"
				}, {
					impact: "Minor",
					probability: "Moderate",
					rating: "Medium"
				}, {
					impact: "Moderate",
					probability: "Moderate",
					rating: "High"
				}, {
					impact: "Major",
					probability: "Moderate",
					rating: "High"
				}, {
					impact: "Catastrophic",
					probability: "Moderate",
					rating: "High"
				}, {
					impact: "Insignificant",
					probability: "Unlikely",
					rating: "Low"
				}, {
					impact: "Minor",
					probability: "Unlikely",
					rating: "Low"
				}, {
					impact: "Moderate",
					probability: "Unlikely",
					rating: "Medium"
				}, {
					impact: "Major",
					probability: "Unlikely",
					rating: "Medium"
				}, {
					impact: "Catastrophic",
					probability: "Unlikely",
					rating: "High"
				}, {
					impact: "Insignificant",
					probability: "Rare",
					rating: "Low"
				}, {
					impact: "Minor",
					probability: "Rare",
					rating: "Low"
				}, {
					impact: "Moderate",
					probability: "Rare",
					rating: "Medium"
				}, {
					impact: "Major",
					probability: "Rare",
					rating: "Medium"
				}, {
					impact: "Catastrophic",
					probability: "Rare",
					rating: "High"
				}],
				currentImpactLevel: "Moderate",
				currentProbabilityLevel: "Moderate"
			});
			this.getView().setModel(oRiskModel);
		},
		onChartDataSelectedOrDeselected: function (oEvent) {
			var oSelectedDataSet = oEvent.getParameter("data")[0],
				oModel = this.getView().getModel();

			switch (oEvent.getId()) {
			case 'selectData':
				oModel.setProperty("/currentImpactLevel", oSelectedDataSet.data.Impact);
				oModel.setProperty("/currentProbabilityLevel", oSelectedDataSet.data.Probability);
				break;

			case 'deselectData':
				if (oModel.getProperty("/currentImpactLevel") !== oSelectedDataSet.data.Impact || oModel.getProperty("/currentProbabilityLevel") !==
					oSelectedDataSet.data.Probability) {
					// new one is selected already- nothing to do
					return;
				}

				oModel.setProperty("/currentImpactLevel", "");
				oModel.setProperty("/currentProbabilityLevel", "");
				break;
			}
		},

		onChartRenderingComplete: function () {
			this.updateSelectionInChart();
		},

		updateSelectionInChart: function () {
			var oChart = this.byId("riskMatrixChart"),
				oModel = this.getView().getModel();
			var scales = [{
				'feed': 'color',
				'palette': ["#d32030", "#61a656", "#848f94"]
			}];
			oChart.setVizScales(scales);
			oChart.vizSelection([{
				data: {
					Impact: oModel.getProperty("/currentImpactLevel"),
					Probability: oModel.getProperty("/currentProbabilityLevel")
				}
			}], {
				clearSelection: true
			});

		},

		onRiskInputParameterChanged: function () {
			this.updateSelectionInChart();
		},

		onRiskMatrixPressed: function (oEvent) {
			var oSource = oEvent.getSource(),
				sImpactLevel, sProbabilityLevel;
			jQuery.each(oSource.getCustomData(), function (i, oCustomData) {
				switch (oCustomData.getKey()) {
				case "riskMatrixImpactLevel":
					sImpactLevel = oCustomData.getValue();
					break;
				case "riskMatrixProbabilityLevel":
					sProbabilityLevel = oCustomData.getValue();
					break;
				}
			});

			var oModel = this.getView().getModel();
			if (oModel.getProperty("/currentImpactLevel") === sImpactLevel && oModel.getProperty("/currentProbabilityLevel") ===
				sProbabilityLevel) {
				oModel.setProperty("/currentImpactLevel", "");
				oModel.setProperty("/currentProbabilityLevel", "");
			} else {
				oModel.setProperty("/currentImpactLevel", sImpactLevel);
				oModel.setProperty("/currentProbabilityLevel", sProbabilityLevel);
			}
		},

		formatRiskRating: function (vProbabilityLevel, vImpactLevel) {
			if (!vImpactLevel || !vProbabilityLevel) {
				return;
			}

			var oModel = this.getView().getModel(),
				vRating;
			if (oModel) {
				jQuery.each(oModel.getProperty("/riskRatings"), function (i, oData) {
					if (oData.impact === vImpactLevel && oData.probability === vProbabilityLevel) {
						vRating = oData.rating;
					}
				});
			}
			return vRating;
		},

		formatRiskRatingBackgroundColor: function (vProbabilityLevel, vImpactLevel) {
			debugger;
			var vRating = this.formatRiskRating(vProbabilityLevel, vImpactLevel);
			switch (vRating) {
			case 'Low':
				return sap.ui.core.ValueState.Success;
			case 'Medium':
				return sap.ui.core.ValueState.Warning;
			case 'High':
			case 'Extreme':
				return sap.ui.core.ValueState.Error;
			}
		},

		formatRatingAsChartMeasure: function (vRating) {
			switch (vRating) {
			case 'Low':
				return 1;
			case 'Medium':
				return 2;
			case 'High':
				return 2;
			case 'Extreme':
				return 3;
			}
		}

	});

});