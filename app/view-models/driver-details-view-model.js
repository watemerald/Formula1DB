var _ = require('underscore');

var ObservableArray = require("data/observable-array").ObservableArray;
var Observable = require("data/observable").Observable;

var config = require("../shared/config");
var getRequest = require("../shared/getRequest");


function DriverDetailsViewModel(driverId) {
    
    var viewModel = new Observable({
        driverId: driverId
    }) 
    // var driverList = [];
    
    viewModel.load = function() {
        var url = config.apiUrl + "drivers/" + driverId +  ".json";
        var current = 0
        
        getRequest(url, current, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) {
            // viewModel.set("driver", res.MRData.DriverTable.Drivers[0]);
            viewModel.loadDetails(res.MRData.DriverTable.Drivers[0]);
        }, function(error) {
            console.log(error);
        });
        
    }
    
    viewModel.loadDetails = function(driver) {
        viewModel.set("name", driver.givenName + " " + driver.familyName);
        viewModel.set("nationality", driver.nationality);
        viewModel.set("dateOfBirth", driver.dateOfBirth);
        viewModel.set("driverCode", driver.code || "--");
        viewModel.set("permanentNumber", driver.permanentNumber || "--");
        viewModel.set("url", driver.url);
        
    }
    
    return viewModel;
}

module.exports = DriverDetailsViewModel;