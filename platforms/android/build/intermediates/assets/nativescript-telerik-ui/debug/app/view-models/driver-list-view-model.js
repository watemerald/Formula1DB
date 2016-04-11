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
        
        // fetch(config.apiUrl + "drivers.json")
        getRequest(config.apiUrl + "drivers.json", 0, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) {
        //    console.log(res); 
            var total = parseInt(res.MRData.total, 10);
            var current = config.defaultResponseRows;
            
            _.each(res.MRData.DriverTable.Drivers, function(element) {
                viewModel.push(element);
            });
            
            while (current < total) {
                console.log(current);
                getRequest(config.apiUrl + "drivers.json", current, config.defaultResponseRows)
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