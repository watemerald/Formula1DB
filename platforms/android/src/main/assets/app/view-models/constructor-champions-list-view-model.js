var _ = require('underscore');

var ObservableArray = require("data/observable-array").ObservableArray;
var config = require("../shared/config");
var getRequest = require("../shared/getRequest");

function ConstructorStandingsListViewModel(items) {
    var viewModel = new ObservableArray(items);
    
    
    viewModel.load = function() {
        var url = config.apiUrl + "constructorStandings/1.json";
        var current = 0
        
        getRequest(url, current, config.defaultResponseRows)
        .then(function(r) {return r.json();})
        .then(function(res) {
            var total = parseInt(res.MRData.total, 10);
            
            _.each(res.MRData.StandingsTable.StandingsLists, function(element) {
                var standings = element.ConstructorStandings[0];
                var points = standings.points;
                var wins = standings.wins;
                var constructor = standings.Constructor;
                
                viewModel.push({
                   season: element.season,
                   points: points,
                   wins: wins,
                   constructorId: constructor.constructorId,
                   name: constructor.name
                });
            });
            current = current + config.defaultResponseRows;            
            while (current < total) {
                getRequest(url, current, config.defaultResponseRows)
                .then(function(r) {return r.json();})
                .then(function(res) {
                    _.each(res.MRData.StandingsTable.StandingsLists, function(element) {
                        var standings = element.ConstructorStandings[0];
                        var points = standings.points;
                        var wins = standings.wins;
                        var constructor = standings.Constructor;
                        
                        viewModel.push({
                            season: element.season,
                            points: points,
                            wins: wins,
                            constructorId: constructor.constructorId,
                            name: constructor.name
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

module.exports = ConstructorStandingsListViewModel;