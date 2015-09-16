# cmv-contrib-widgets

User contributed widgets for the [Configurable Map Viewer (CMV)](https://github.com/DavidSpriggs/ConfigurableViewerJSAPI) project.

Have a widget to add? See [Contributing](https://github.com/DavidSpriggs/cmv-contrib-widgets#contributing).

## Widgets

| Widget | Description |
| :----: | ----------- |
| [Add WMS Layers dynamically ](https://github.com/vojvod/CMV_addWMSLayer_Widget) | A double widget for adding WMS Layers using a combobox or a textbox. |
| [Advanced Search Widget ](https://github.com/vojvod/CMV_AdvancedSearch_Widget) | Used together with [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget to query feature layers. With this widget you can: 1.search by attributes 2. search by location 3. search by address 4. search by other selected features. |
| [App Settings](https://github.com/roemhildtg/CMV_Widgets#appsettings) | Allows the user to save and share the current state of the map extent and visible layers via localStorage and URL. |
| [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) | A highly configurable widget to display the results of one or more QueryTasks. |
| [Disclaimer](https://github.com/tmcgee/cmv-widgets#disclaimer) | A simple yet configurable disclaimer widget. |
| [Drag and Drop](http://github.com/BrianBunker/cmv-widgets/tree/master//DnD) | Add data to the map viewer by dragging and dropping resources onto the map or widget. |
| [Dynamic Feature Layer Renderer ](https://github.com/vojvod/CMV_Renderer_Widget) | It renders and adds a feature layer on the map dynamically. It can be used for map services hosted in ArcGIS for Server version 10.1 or above. |
| [ElevationsProfile](https://github.com/ERS-Long/ElevationsProfile) | TitlePane widget to draw elevation profile. |
| [Export](https://github.com/tmcgee/cmv-widgets#export) | Export features from the [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget or other widgets that have a [dgrid](http://dgrid.io). |
| [Extract](https://github.com/tr3vorm/cmv-extract-widget) | TitlePane widget to extract selected layer from current extents using geoprocessing tool  (clip and ship). |
| [Goto Coordinate](http://github.com/BrianBunker/cmv-widgets/tree/master//Goto) | Center the map at a specific location in geographic, UTM, or MGRS coordinates. |
| [Heatmap Toggle](https://github.com/roemhildtg/CMV_Widgets#heatmap) | Toggle a heat map on point layers using the dynamic sublayer menu. |
| [Identify Panel](https://github.com/dougrchamberlain/IdentifyPanel) | TitlePane widget to allow identify results to be viewed on the side instead of in a popup/infowindow. |
| [Google Analytics](https://github.com/jebu75/cmv-google-analytics) | Sends Google Analytics events based on configurable parameters.
| [Layer Swapper](https://github.com/jebu75/cmv-layer-swapper) | Title pane widget to allow swapping in/out a configurable list of dynamic or tile layers. |
| [Map Refresh Timer Widget](https://github.com/vojvod/CMV_MapRefreshTimer_Widget) | It refreshes the map layers periodically. You can set the preferred map layers and the refresh timer interval. |
| [Metadata Dialog](https://github.com/roemhildtg/CMV_Widgets#metadatadialog) | Query and display the sublayers metadata dialog using the dynamic sublayer menu. |
| [Navigation Hash](http://github.com/BrianBunker/cmv-widgets/tree/master//MapNavigationHash) | Display the map center point in the url and use the browser back/forward buttons as previous/next extent buttons. |
| [Navigation Toolbar](https://github.com/friendde/ArcGIS_JS_NavigationTools) | A toolbar for simple map navigation including previous and next extent tracker. |
| [Nearby](http://github.com/BrianBunker/cmv-widgets/tree/master//Nearby) | Discover features within a radius or drivetime of a map click location. |
| [PointClustering](https://github.com/ERS-Long/PointClustering) | PointClustering of point sublayer (CMV1.3.4) |
| [Print Plus](https://github.com/tmcgee/cmv-widgets/tree/master#print-plus) | An updated version of the PrintPlus widget originally created by [@LarryStout](https://github.com/LarryStout). |
| [Projections](https://github.com/tr3vorm/cmv-projections-widget) | TitlePane widget for showing coordinates in selected projections, and for showing a specified location. |
| [Related Records](https://github.com/roemhildtg/CMV_Widgets#relatedrecordstable) | Queries related records of feature layers and displays results in a tabbed dgrid tables. |
| [Search](https://github.com/tmcgee/cmv-widgets#search) | Used in conjunction with the [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget to provide a user interface for querying feature layers, tables and related records. |
| [TimeSlider](https://github.com/roemhildtg/CMV_Widgets#timeslider) | Control the current display of all time enabled layers on the map using a simple Esri TimeSlider widget. |
| [TimeSlider Advanced](https://github.com/vojvod/CMV_TimeSlider_Widget) | Control all time enabled layers on the map. It allows you to set the startTime and endTime dynamically. |
| [Zoom To Feature](https://github.com/tmcgee/cmv-widgets#zoom-to-feature) | A simple widget to provide a drop-down list of features to zoom to on the map. Similar to bookmarks but driven by actual data in a Map Service. |

## Contributing

Create a repo for your widget. To list your widget here, simply add a row to the above widgets table with a link to your repo and description via a Pull Request.

Please follow these guidelines:

1. In your repo include a `README.md` with:
  1. an example configuration object.
  2. additional documentation as needed.
  3. include the CMV version the widget built with.
2. Make sure to include a screenshot in your `README.md` of your widget in action.
3. Make sure your code is lint free. Use the included `.jshintrc` file for linting.
