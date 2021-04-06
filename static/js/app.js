// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var filtbutton = d3.select(".button");


//d3 function append tr for object
 data.forEach(function(ufoReport) {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
//Append to cell in the row for each value with td per entry
    var cell = row.append("td");
//append text to cell
    cell.text(value);
   });
 });



//button on click function


//filtbutton.on("click", function() {
//console.log('test button click')
//}


//pull from text field


//run filter statement



//rerun cell update function