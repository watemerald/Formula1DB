var _ = require('underscore');

var ObservableArray = require("data/observable-array").ObservableArray;
var config = require("../shared/config");
var getRequest = require("../shared/getRequest");

var Driver = require("../shared/data-models/drivers/driver");
var DriversList = require("../shared/data-models/drivers/driversList");

function DriverListViewModel(items) {
    var viewModel = new ObservableArray(items);
    // var driverList = [];
    
    viewModel.load = function() {
        var url = config.apiUrl + "drivers.json";
        var current = 0
        
        // fetch(config.apiUrl + "drivers.json")
        getRequest(url, current, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) {
        //    console.log(res); 
            var total = parseInt(res.MRData.total, 10);
            
            _.each(res.MRData.DriverTable.Drivers, function(element) {
                viewModel.push(element);
            });
            current = current + config.defaultResponseRows;            
            while (current < total) {
                // console.log(current);
                getRequest(url, current, config.defaultResponseRows)
                .then(function(r) {return r.json();})
                .then(function(res) {
                    _.each(res.MRData.DriverTable.Drivers, function(element) {
                        viewModel.push(element);
                    });
                }, function(error) {
                    console.log(error);
                });
                current = current + config.defaultResponseRows;
            }
        }, function(error) {
            console.log(error);
        });
        
    }
    
    return viewModel;
}

module.exports = DriverListViewModel;