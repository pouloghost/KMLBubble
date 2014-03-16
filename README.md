KMLBubble
=========
using java generate data and js to inflate bubbles in KML placemark description

the discription will include four parts:

    the data part: a script element with a json object(data) inside.
    the display part: a body with a div(id = wrapper) for the displayment.
    the logic part: an iframe(name = jsCall) for global functions.
    the user defined part: Other functions can be put into this iframe(name == user) for reuse. 
        must have a string called template, this is the innerHTML of wrapper. 
        can implement some hooks for the processes. 
        pls put the element interactions here.

the data object should follow this rule: [{id:val, id:val ...} , ...].
    aka an array of objects, each object represents a data for one page. 
        inside one object, the id should be the same as the element id, 
        the val should be the data for the element, 
        i.e. text for span.innerHTML, imagesrc for image.src, etc.
