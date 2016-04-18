var _ = require('underscore');

var ObservableArray = require("data/observable-array").ObservableArray;
var Observable = require("data/observable").Observable;

var config = require("../shared/config");
var getRequest = require("../shared/getRequest");


function SeasonDetailsViewModel(season) {
    
    var races = new ObservableArray([]);
    
    var viewModel = new Observable({
        season: season,
        races: races
    }) 
    // var driverList = [];
    
    viewModel.load = function() {
        var url = config.apiUrl + season +  ".json";
        var current = 0
        
        getRequest(url, current, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) {
            // viewModel.set("driver", res.MRData.DriverTable.Drivers[0]);
            // viewModel.loadDetails(res.MRData.DriverTable.Drivers[0]);
            _.each(res.MRData.RaceTable.Races, function(element) {
               races.push(element); 
            });
        }, function(error) {
            console.log(error);
        });
        
    }
    
    return viewModel;
}

module.exports = SeasonDetailsViewModel;