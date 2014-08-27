# NavToolbar

Add some documentation, screenshot, etc.

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
	navtoolbar: {
		include: true,
		id: 'navtoolbar',
		type: 'containerNode',
		path: 'gis/dijit/NavTools',
		placeAt: 'top',
		options: {}
	}
}
```
