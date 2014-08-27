define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'esri/toolbars/navigation',
	'dijit/form/Button',
	'dojo/_base/lang',
	'dojo/on',
	'dojo/text!./NavTools/templates/NavTools.html',
	'xstyle/css!./NavTools/css/NavTools.css'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Navigation, Button, lang, on, NavToolbarTemplate, css) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        widgetsInTemplate: true,
        templateString: NavToolbarTemplate,
        navToolbar: null,
        postCreate: function(){
          this.navToolbar = new Navigation(this.map);
          this.navToolbar.on('onExtentHistoryChange', lang.hitch(this, 'extentHistoryChangeHandler'));
		},

        zoomIn: function() {
			this.navToolbar.activate(Navigation.ZOOM_IN);
        },
        zoomOut: function() {
			this.navToolbar.activate(Navigation.ZOOM_OUT);
        },
        fullExtent: function () {
			this.navToolbar.zoomToFullExtent();
        },		
		prevExtent: function () {
			this.navToolbar.zoomToPrevExtent();
        },
        nextExtent: function () {
			this.navToolbar.zoomToNextExtent();
        },		
		pan: function () {
            this.navToolbar.activate(Navigation.PAN);
        },
		deactivate: function () {
			this.navToolbar.deactivate();
        },

        disconnectMapClick: function() {
			this.mapClickMode.current = 'nav';
        },
        
		connectMapClick: function() {
            this.mapClickMode.current = this.mapClickMode.defaultMode;
        },
		
		extentHistoryChangeHandler: function (evt) {
            this.navToolbar.deactivate();
            this.connectMapClick();
        }
	});
});