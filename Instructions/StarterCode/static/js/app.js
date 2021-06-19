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
    })
});