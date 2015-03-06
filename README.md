# cmv-contrib-widgets

User contributed widgets for the [Configurable Map Viewer (CMV)](https://github.com/DavidSpriggs/ConfigurableViewerJSAPI) project.

Have a widget to add? See [Contributing](https://github.com/DavidSpriggs/cmv-contrib-widgets#contributing).

## Widgets

| Widget | Description |
| :----: | ----------- |
| [App Settings](https://github.com/roemhildtg/CMV_Widgets/tree/master/AppSettings_Widget) | Allows the user to save and share the current state of the map extent and visible layers via localStorage and URL. |
| [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) | A highly configurable widget to display the results of one or more QueryTasks. |
| [Disclaimer](https://github.com/tmcgee/cmv-widgets#disclaimer) | A simple yet configurable disclaimer widget. |
| [Drag and Drop](http://github.com/BrianBunker/cmv-widgets/tree/master//DnD) | Add data to the map viewer by dragging and dropping resources onto the map or widget. |
| [Export](https://github.com/tmcgee/cmv-widgets#export) | Export features from the [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget or other widgets that have a [dgrid](http://dgrid.io). |
| [Extract](https://github.com/tr3vorm/cmv-extract-widget) | TitlePane widget to extract selected layer from current extents using geoprocessing tool  (clip and ship). |
| [Goto Coordinate](http://github.com/BrianBunker/cmv-widgets/tree/master//Goto) | Center the map at a specific location in geographic, UTM, or MGRS coordinates. |
| [Identify Panel](https://github.com/dougrchamberlain/IdentifyPanel) | TitlePane widget to allow identify results to be viewed on the side instead of in a popup/infowindow. |
| [Google Analytics](https://github.com/jebu75/cmv-google-analytics) | Sends Google Analytics events based on configurable parameters.
| [Layer Swapper](https://github.com/jebu75/cmv-layer-swapper) | Title pane widget to allow swapping in/out a configurable list of dynamic or tile layers. |
| [Navigation Hash](http://github.com/BrianBunker/cmv-widgets/tree/master//MapNavigationHash) | Display the map center point in the url and use the browser back/forward buttons as previous/next extent buttons. |
| [Navigation Toolbar](https://github.com/friendde/ArcGIS_JS_NavigationTools) | A toolbar for simple map navigation including previous and next extent tracker. |
| [Nearby](http://github.com/BrianBunker/cmv-widgets/tree/master//Nearby) | Discover features within a radius or drivetime of a map click location. |
| [Projections](https://github.com/tr3vorm/cmv-projections-widget) | TitlePane widget for showing coordinates in selected projections, and for showing a specified location. |
| [Related Records](https://github.com/roemhildtg/CMV_Widgets/tree/master/RelatedRecordTable_Widget) | Queries related records of feature layers and displays results in a tabbed dgrid tables. |
| [Search](https://github.com/tmcgee/cmv-widgets#search) | Used in conjunction with the [Attributes Tables](https://github.com/tmcgee/cmv-widgets#attributes-tables) widget to provide a user interface for querying feature layers, tables and related records. |
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
