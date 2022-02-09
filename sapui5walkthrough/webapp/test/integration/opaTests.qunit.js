/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["mindset/curtiskettler/sapui5walkthrough/sapui5walkthrough/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
