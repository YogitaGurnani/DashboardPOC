sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageBox'
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("pocNameSpace.poc.controller.View1", {
		onInit: function () {
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView()));
			this._oComponent.getEventBus().subscribe("NAV_TO_SECTION", this.navToSection,
				this);
		},
		onNavigationItemSelectHandleDetailPage: function (e) {
			var sNavView = e.getParameter('item').getKey();
			this.navToSection(null, null, {
				key: sNavView
			});
		},

		navToSection: function (sChannelId, sEventId, oNav) { // keep the details of the nav container as `${sNavView}Details`
			var navView = oNav.key + "Details";
			this.byId("dashboardNavContainer").to(this.byId(navView).getId());
			this.byId("menuList").setSelectedKey(oNav.key);
		},

		// handle menu toggle
		onPressHandleSideNavigation: function () {
			this.byId("dashboardToolPage").setSideExpanded(!this.byId("dashboardToolPage").getSideExpanded());
		}

	});
});