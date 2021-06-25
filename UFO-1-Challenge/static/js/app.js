
// YOUR CODE HERE!
// from data.js
var tableData = data;
var tbody = d3.select("tbody")
// YOUR CODE HERE!
data.forEach(function(tableData){
    console.log(tableData)
});


data.forEach(function(tableData){
    console.log(tableData);
    var row = tbody.append("tr");
});

data.forEach(function(tableData){
    console.log(tableData);
    var row = tbody.append("tr");

    Object.entries(tableData).forEach(function([key,value]){
        console.log(key,value)
    })
});

data.forEach(function(tableData){
    console.log(tableData);
    var row = tbody.append("tr");

    Object.entries(tableData).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("th");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
button.on("click", function(){
    d3.event.preventDefault();
    tbody.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(item => item.datetime === inputValue);
    filteredData.forEach(function(dateData){
        var row =tbody.append("tr");
        Object.entries(dateData).forEach(function([value]){
        var cell=tbody.append("th");
        cell.text(value);
        });
    
});    
});

