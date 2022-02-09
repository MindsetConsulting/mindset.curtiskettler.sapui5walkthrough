/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mindsetcurtiskettler.sapui5walkthrough./sapui5walkthrough/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
