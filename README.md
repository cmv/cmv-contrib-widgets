# cmv-contrib-widgets

User contributed widgets for the [Configurable Map Viewer (CMV)](https://github.com/DavidSpriggs/ConfigurableViewerJSAPI) project.

Have a widget to add? See [Contributing](https://github.com/DavidSpriggs/cmv-contrib-widgets#contributing).

## Layer Widgets

Widgets that add new types of layers and additional layer data to a map.

| Widget | Description |
| :----: | ----------- |
| [Add WMS Layers dynamically ](https://github.com/vojvod/CMV_addWMSLayer_Widget) | A double widget for adding WMS Layers using a combobox or a textbox. |
| [Drag and Drop](http://github.com/BrianBunker/cmv-widgets/tree/master//DnD) | Add data to the map viewer by dragging and dropping resources onto the map or widget. |
| [Dynamic Feature Layer Renderer ](https://github.com/vojvod/CMV_Renderer_Widget) | It renders and adds a feature layer on the map dynamically. It can be used for map services hosted in ArcGIS for Server version 10.1 or above. |
| [Heatmap Toggle](https://github.com/roemhildtg/CMV_Widgets#heatmap) | Toggle a heat map on point layers using the dynamic sublayer menu. |
| [Layer Labels](https://github.com/tmcgee/cmv-widgets/tree/master#layer-labels) | A simple widget to add labels for one or more Feature Layers. |
| [Layer Swapper](https://github.com/jebu75/cmv-layer-swapper) | Title pane widget to allow swapping in/out a configurable list of dynamic or tile layers. |
| [Layer Toggle](https://github.com/tmcgee/cmv-widgets/tree/master#layer-toggle) | A simple widget to toggle the visibility of a set of layers. Only a single layer in the set can be visible at any time. All others are turned off when the target layer's visibility is set. |
| [NEXRAD](https://github.com/goriliukasbuxton/Nexrad) | NEXRAD weather radar widget. |
| [PointClustering](https://github.com/ERS-Long/PointClustering) | PointClustering of point sublayer (CMV1.3.4) |
| [Toggle StreetView Tiles](https://github.com/tmcgee/cmv-widgets#toggle-streetview-tiles) | Used in conjunction with the CMV StreetView widget or the [Open External Map](https://github.com/tmcgee/cmv-widgets#open-external-map) widget. Shows a StreetView tiles layer when waiting for a map click to get coordinates for the respective widgets. |
| [WMS Basemaps](https://github.com/ishiland/cmv-wms-basemaps) | Simulates a WMS Layer as a basemap by reordering the WMS layer to the bottom layer. This works in place of the core CMV basemap widget. |

## Data, Search, And Query Widgets

Widgets that extract and manipulate the display of data in the application. 

| Widget | Description |
| :----: | ----------- |
| [Advanced Search Widget ](https://github.com/vojvod/CMV_AdvancedSearch_Widget) | Used together with [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget to query feature layers. With this widget you can: 1.search by attributes 2. search by location 3. search by address 4. search by other selected features. |
| [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) | A highly configurable widget to display the results of one or more Query, Find or Geoprocessor Tasks. |
| [Export](https://github.com/tmcgee/cmv-widgets#export) | Export features from the [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget or other widgets. Features can be exported in tabular formats such as Excel and CSV as well as spatial formats such as Esri shapefiles, KML and GeoJSON.
| [Export to shapefile](https://github.com/aspetkov/cmv-widgets/tree/master/JS2Shapefile) | A javascript library for generating ESRI shapefiles in the client from Arcgis javascript map graphics with supporting a UTF-8 encoding.
| [Extract](https://github.com/tr3vorm/cmv-extract-widget) | TitlePane widget to extract selected layer from current extents using geoprocessing tool  (clip and ship). |
| [Identify Panel](https://github.com/dougrchamberlain/IdentifyPanel) | TitlePane widget to allow identify results to be viewed on the side instead of in a popup/infowindow. |
| [Nearby](http://github.com/BrianBunker/cmv-widgets/tree/master//Nearby) | Discover features within a radius or drivetime of a map click location. |
| [Query Statistics](https://github.com/cwdotgis/cmv-widgets/tree/master/widgets) | Query summary statistics for a selected feature service's features in the current map view. |
| [Related Records](https://github.com/roemhildtg/CMV_Widgets#relatedrecordstable) | Queries related records of feature layers and displays results in a tabbed dgrid tables. |
| [Report](https://github.com/tmcgee/cmv-widgets#report) | Highly configurable widget used to create a mult-page PDF report from a single feature or multiple features. |
| [Search](https://github.com/tmcgee/cmv-widgets#search) | Used in conjunction with the [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget to provide a user interface for querying feature layers, tables and related records. |


## Time Widgets

Widgets that control and modify time (and potentially spacetime). 

| Widget | Description |
| :----: | ----------- |
| [Map Refresh Timer Widget](https://github.com/vojvod/CMV_MapRefreshTimer_Widget) | It refreshes the map layers periodically. You can set the preferred map layers and the refresh timer interval. |
| [TimeSlider](https://github.com/roemhildtg/CMV_Widgets#timeslider) | Control the current display of all time enabled layers on the map using a simple Esri TimeSlider widget. |
| [TimeSlider Advanced](https://github.com/vojvod/CMV_TimeSlider_Widget) | Control all time enabled layers on the map. It allows you to set the startTime and endTime dynamically. |

## Map Navigation and Control Widgets

Widgets that display and modify various aspects of the map. 

| Widget | Description |
| :----: | ----------- |
| [FullScreen](https://github.com/tmcgee/cmv-widgets#fullscreen) | A simple widget containing a button to toggle the CMV map to a maximized full screen view and restore it to the original dimensions. |
| [Google nearby](https://github.com/aspetkov/cmv-widgets/tree/master/GoogleNearby) | Discover objects within a radius of a map click location from Google database. Add export on the objects to shapefile. |
| [Goto Coordinate](http://github.com/BrianBunker/cmv-widgets/tree/master//Goto) | Center the map at a specific location in geographic, UTM, or MGRS coordinates. |
| [Map Extent Widget](https://github.com/ERS-Long/MapExtent) | CMV Widget to get map extent and zoom level. |
| [Navigation Hash](http://github.com/BrianBunker/cmv-widgets/tree/master//MapNavigationHash) | Display the map center point in the url and use the browser back/forward buttons as previous/next extent buttons. |
| [Navigation Toolbar](https://github.com/friendde/ArcGIS_JS_NavigationTools) | A toolbar for simple map navigation including previous and next extent tracker. |
| [Open External Map](https://github.com/tmcgee/cmv-widgets/tree/master#open-external-map) | Open maps in an external window for Google Hybrid, Google StreetView, Bing Hybrid, Bing Bird's Eye, Bing Streetside, MapQuest and OpenStreetMap. The map is centered on the coordinates based on a map click or Latitude and Longitude values provided by the user. Can be combined with the [Toggle StreetView Tiles](https://github.com/tmcgee/cmv-widgets#toggle-streetview-tiles) widget to show the availability of Google StreetView while clicking on the map. |
| [Projections](https://github.com/tr3vorm/cmv-projections-widget) | TitlePane widget for showing coordinates in selected projections, and for showing a specified location. |
| [What3Words](https://github.com/tmcgee/cmv-widgets#what3words) | A simple widget to send a 3 word address or lat/lng to what3words and zoom the map to the resulting location. The lat/lng and 3 word address for the location are displayed from the search result. |
| [Zoom To Extent](https://github.com/evermanwa/Zoom-To-Extent) | Zoom to a specific area on the map based off of a drawn extent. |
| [Zoom To Feature](https://github.com/tmcgee/cmv-widgets#zoom-to-feature) | A simple widget to provide a drop-down list of features to zoom to on the map. Similar to bookmarks but driven by actual data in a Map Service. |

## Geoprocessing, Utilities, and Share Widgets

| Widget | Description |
| :----: | ----------- |
| [App Settings](https://github.com/roemhildtg/CMV_Widgets#appsettings) | Allows the user to save and share the current state of the map extent and visible layers via localStorage and URL. |
| [Disclaimer](https://github.com/tmcgee/cmv-widgets#disclaimer) | A simple yet configurable disclaimer widget. |
| [ElevationsProfile](https://github.com/ERS-Long/ElevationsProfile) | TitlePane widget to draw elevation profile. |
| [ElevationsProfileTable](https://github.com/goriliukasbuxton/ElevationProfile2) | Bottom Pane widget to draw elevation profile. |(https://github.com/tmcgee/cmv-widgets#attributes-tables) widget or other widgets that have a [dgrid](http://dgrid.io). |
| [Geoprocessor](https://github.com/tmcgee/cmv-widgets#geoprocessor) | An example widget demonstrating the display of results from a Geoprocessing Task in the [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget. |
| [Google Analytics](https://github.com/jebu75/cmv-google-analytics) | Sends Google Analytics events based on configurable parameters.
| [MessageBox](https://github.com/tmcgee/cmv-widgets/tree/master#messagebox) | Show an Alert or Confirmation modal dialog box. Intended to be called from other widgets. |
| [Metadata Dialog](https://github.com/roemhildtg/CMV_Widgets#metadatadialog) | Query and display the sublayers metadata dialog using the dynamic sublayer menu. |
| [Print Plus](https://github.com/tmcgee/cmv-widgets/tree/master#print-plus) | An updated version of the PrintPlus widget originally created by [@LarryStout](https://github.com/LarryStout). |
| [QR Code](https://github.com/tmcgee/cmv-widgets/tree/master#qr-code) | Shows a QR code for the current map to open mobile applications on your phone/tablet. |
| [Share](https://github.com/tmcgee/cmv-widgets#share) | Share your map by using Facebook, Twitter, Google+, E-Mail, Link, or embedded iFrame code. |

## Contributing

Create a repo for your widget. To list your widget here, simply add a row to the above widgets table with a link to your repo and description via a Pull Request.

Please follow these guidelines:

1. In your repo include a `README.md` with:
  1. an example configuration object.
  2. additional documentation as needed.
  3. include the CMV version the widget built with.
2. Make sure to include a screenshot in your `README.md` of your widget in action.
3. Make sure your code is lint free. Use the included `.jshintrc` file for linting.
