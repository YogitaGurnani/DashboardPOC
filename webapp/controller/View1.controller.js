sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageBox'
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("pocNameSpace.poc.controller.View1", {
		onInit: function () {
			
		},
			onPressButton : function(){
				MessageBox.alert("Welcome to Dashboard");
			}
		});
});