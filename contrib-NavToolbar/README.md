# NavToolbar

![navtoolsscreenshot](https://cloud.githubusercontent.com/assets/7818309/4076966/d57254fe-2ebe-11e4-9590-2988bf24bd38.JPG)

## Adding to CMV
```javascript
panes: {
	// left: {
	// 	splitter: true
	// },
	// right: {
	// 	id: 'sidebarRight',
	// 	placeAt: 'outer',
	// 	region: 'right',
	// 	splitter: true,
	// 	collapsible: true
	// },
	// bottom: {
	// 	id: 'sidebarBottom',
	// 	placeAt: 'outer',
	// 	splitter: true,
	// 	collapsible: true,
	// 	region: 'bottom'
	// },
	top: {
		id: 'sidebarTop',
		placeAt: 'outer',
		collapsible: true,
		region: 'top'
	}
},
widgets: {
	navtools: {
    		include: true, // false will not load widget
    		id: 'navtools',
    		type: 'contentPane', // can be titlePane
    		canFloat: false, // if titlePane, can use true
    		path: 'gis/dijit/NavTools',
    		title: 'Navigation Tools', // title appears if titlePane
    		open: false, // this value is used for titlePane
    		position: 0, // use your position value as needed
    		placeAt: 'top', // top looks best if contentPane, your choice
    		options: { // map and mapClickMode are required to use the widget
        		map: true, // true required
	        	mapClickMode: true // true required
    		}
	},
```
