# Geovisto Legend Tool
Extension of the [Geovisto core library](https://github.com/geovisto/geovisto) which provides the legend tool.

This repository is a snapshot of Geoviosto `tools/legend` derived from the development repository: 
[geovisto/geovisto-map.](https://github.com/geovisto/geovisto-map)


![sample](https://raw.githubusercontent.com/geovisto/geovisto-legend/master/sample.png)

## Usage

```js
import {
    GeovistoLegendTool
} from 'geovisto-legend';
import 'geovisto-legend/dist/index.css';

// ,,,

// create instance of map with given props
const map = Geovisto.createMap({
    // ...
    tools?: Geovisto.createMapToolsManager([
        // instances of Geovisto tools (extensions) which will be directly used in the map
        // ...
        GeovistoLegendTool.createTool({
            id: "geovisto-tool-legend",
        }),
    ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
    // initial settings of the map can be overriden by the map config - JSON structure providing user settings 
    // ...
    tools?: [
        // config of Geovisto tools (extensions) used in the map
        {
            "type": "geovisto-tool-legend",
            "id": "geovisto-tool-legend",
            "enabled": true,
            "tools": [
                "geovisto-tool-layer-choropleth",
                "geovisto-tool-layer-marker"
            ]
        }
    ]
}));
```

## Installation

```
npm install --save geovisto-legend
```

Peer dependencies:
```
npm install --save geovisto leaflet
```

This package serves as an extension of Geovisto core using the API for Geovisto tools (extensions). Follow Geovisto core on [Github](https://github.com/geovisto/geovisto).

## License

[MIT](https://github.com/geovisto/geovisto-legend/blob/master/LICENSE)
