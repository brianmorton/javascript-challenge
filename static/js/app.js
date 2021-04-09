// from data.js
var tableData = data;

var tbody = d3.select("tbody");
//select button and form
var filtbutton = d3.select("#filter-btn");
var form = d3.select("#form");


//d3 function append tr for object
tableData.forEach(function(ufoReport) {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
//Append to cell in the row for each value with td per entry
    var cell = row.append("td");
//append text to cell
    cell.text(value);
   });
 });


//button on click function
filtbutton.on("click", textpull);

textpull
//pull from text field
function testfunc() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputdate = inputElement.property("value");
  return inputdate;
}

//test function
function textpull() 
{
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputdate = inputElement.property("value");
  //run filter statement
  var filteredData = tableData.filter(tableData => tableData.datetime === inputdate);
  return filteredData;
}

//error not defined? 
console.log(filteredData);

//rerun cell update function
