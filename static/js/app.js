// from data.js
var tableData = data;

var tbody = d3.select("tbody");
//select button and form
// not targeting correctly?
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


 var inputdate = [`1/1/2010`]
//button on click function
filtbutton.on("click", textpull);

//test function
function testfunc() {
  d3.event.preventDefault();
  console.log(this);
}

//pull from text field
function textpull() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  inputdate = inputElement.property("value");
  return inputdate;

}
console.log('inputdata', inputdate) 

//run filter statement
//issue here
  var filteredData = tableData.filter(function (date) {
    return date.datetime === inputdate;
  });

  console.log(filteredData);


//rerun cell update function
