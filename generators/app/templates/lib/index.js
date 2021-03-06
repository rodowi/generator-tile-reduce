#!/usr/bin/env node

var tileReduce = require('tile-reduce')
var path = require('path')

var numFeatures = 0

tileReduce({
  bbox: [-117.31, 32.78, -114.06, 29.82],
  zoom: 12,
  map: path.join(__dirname, '/map.js'),
  sources: [
    {
      name: 'osm',
      mbtiles: path.join(__dirname, '../data/osm.mbtiles')
    }
  ]
})
.on('reduce', num => {
  numFeatures += num
})
.on('end', () => console.log('count: %d', numFeatures))
