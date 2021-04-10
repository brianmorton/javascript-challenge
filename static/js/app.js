// from data.js
var tableData = data;
//empty array for filtering
//var filteredData = [];

//select html 
var tbody = d3.select("tbody");
//select button and form
var filtbutton = d3.selectAll("#filter-btn");
var form = d3.select("#form");

//wrap in function argurement 
function buildTable(data){
  tbody.html("");
  //d3 foreach append tr for object
data.forEach(function(ufoReport) {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
//Append to cell in the row for each value with td per entry
    var cell = row.append("td");
//append text to cell
    cell.text(value);
   });
 });
};

//button on click function
filtbutton.on("click", textpull);


//test function
function testfunc() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputdate = inputElement.property("value");
  console.log("input data: ", inputdate);
  return inputdate;
}

//pull from text field function
function textpull() 
{
  //d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputdate = inputElement.property("value");
  var filteredData = tableData;
  //run filter statement
  filteredData = filteredData.filter(table => table.datetime === inputdate);
  console.log(filteredData);
  buildTable(filteredData);
};

buildTable(tableData);

