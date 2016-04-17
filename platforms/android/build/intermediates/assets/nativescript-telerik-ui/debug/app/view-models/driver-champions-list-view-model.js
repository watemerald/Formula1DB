var _ = require('underscore');

var ObservableArray = require("data/observable-array").ObservableArray;
var config = require("../shared/config");
var getRequest = require("../shared/getRequest");

function DriverStandingsListViewModel(items) {
    var viewModel = new ObservableArray(items);
    
    
    viewModel.load = function() {
        var url = config.apiUrl + "driverStandings/1.json";
        var current = 0
        
        getRequest(url, current, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) {
            var total = parseInt(res.MRData.total, 10);
            
            _.each(res.MRData.StandingsTable.StandingsLists, function(element) {
                var standings = element.DriverStandings[0];
                var driver = standings.Driver;
                var points = standings.points;
                var wins = standings.wins;
                var constructors = standings.Constructors;
                
                viewModel.push({
                    season: element.season,
                    points: points,
                    wins: wins,
                    driverId: driver.driverId,
                    givenName: driver.givenName,
                    familyName: driver.familyName
                });
            });
            current = current + config.defaultResponseRows;            
            while (current < total) {
                getRequest(url, current, config.defaultResponseRows)
                .then(function(r) {return r.json();})
                .then(function(res) {
                    _.each(res.MRData.StandingsTable.StandingsLists, function(element) {
                        var standings = element.DriverStandings[0];
                        var driver = standings.Driver;
                        var points = standings.points;
                        var wins = standings.wins;
                        var constructors = standings.Constructors;
                        
                        viewModel.push({
                            season: element.season,
                            points: points,
                            wins: wins,
                            driverId: driver.driverId,
                            givenName: driver.givenName,
                            familyName: driver.familyName
                        });
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

module.exports = DriverStandingsListViewModel;