var activeStream = d3.geoPath()
    .projection(projection)
    .stream({
        point: function(x, y) { ... }, // Handle points
        lineStart: function() { ... }, // Handle line start
        lineEnd: function() { ... }    // Handle line end
    });
