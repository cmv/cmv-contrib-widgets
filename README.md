# cmv-contrib-widgets

User contributed widgets for the [Configurable Map Viewer (CMV)](https://github.com/DavidSpriggs/ConfigurableViewerJSAPI) project.

Have a widget to add? See [Contributing](https://github.com/DavidSpriggs/cmv-contrib-widgets#contributing).

## Widgets

| Widget | Description |
| :----: | ----------- |
| [Identify Panel](https://github.com/dougrchamberlain/IdentifyPanel) | TitlePane widget to allow identify results to be viewed on the side instead of in a popup/infowindow. |
| [Navigation Toolbar](https://github.com/friendde/ArcGIS_JS_NavigationTools) | A toolbar for simple map navigation including previous and next extent tracker. |
| [Layer Swapper](https://github.com/jebu75/cmv-layer-swapper) | Title pane widget to allow swapping in/out a configurable list of dynamic or tile layers. |
| [Projections](https://github.com/tr3vorm/cmv-projections-widget) | TitlePane widget for showing coordinates in selected projections. |
| [Google Analytics](https://github.com/jebu75/cmv-google-analytics) | Sends Google Analytics events based on configurable parameters.
| [App Settings](https://github.com/roemhildtg/CMV_Widgets/tree/master/AppSettings_Widget) | Allows the user to save and share the current state of the map extent and visible layers via localStorage and URL |
| [Related Records](https://github.com/roemhildtg/CMV_Widgets/tree/master/RelatedRecordTable_Widget) | Queries related records of feature layers and displays results in a tabbed dgrid tables. |

## Contributing

Create a repo for your widget. To list your widget here, simply add a row to the above widgets table with a link to your repo and description via a Pull Request.

Please follow these guidelines:

1. In your repo include a `README.md` with:
  1. an example configuration object.
  2. additional documentation as needed.
  3. include the CMV version the widget built with.
2. Make sure to include a screenshot in your `README.md` of your widget in action.
3. Make sure your code is lint free. Use the included `.jshintrc` file for linting.
