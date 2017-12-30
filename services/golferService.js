app.service("golferService", function ($state) {
    var _golfers = [];
    var _golferId = 0;
    this.currentGolfer = null;
    var Golfer = function (id, firstName, lastName, email, password, age, handicap, bio) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.handicap = handicap;
        this.locations = {
            losAngeles: false,
            orangeCounty: false,
            riverside: false
        };
        this.availability = {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        };
        this.bio = bio;
    }
    _golfers.push(new Golfer(_golferId++, "Jason", "Bardlow", "jasonb@gmail.com", "password", "29", "17", "Hi, I'm Jason and I am going to be the next Phil Mickelson."))
    _golfers[0].availability.saturday=true
    _golfers[0].availability.sunday=true
    _golfers[0].locations.riverside=true
    _golfers[0].locations.orangeCounty=true
    _golfers.push(new Golfer(_golferId++, "David", "Airhead", "davida@gmail.com", "password", "30", "15", "Hi, I'm David and I am going to be the next Sergio Garcia."))
    _golfers[1].availability.monday=true
    _golfers[1].availability.tuesday=true
    _golfers[1].availability.wednesday=true
    _golfers[1].locations.losAngeles=true
    _golfers[1].locations.orangeCounty=true
    _golfers.push(new Golfer(_golferId++, "Jared", "Airhead", "jareda@gmail.com", "password", "26", "20", "Hi, I'm Jared and I am going to be the next Jason Day."))
    _golfers[2].availability.thursday=true
    _golfers[2].availability.friday=true
    _golfers[2].availability.saturday=true
    _golfers[2].locations.losAngeles=true
    _golfers[2].locations.orangeCounty=true
    _golfers[2].locations.riverside=true
    _golfers.push(new Golfer(_golferId++, "Brett", "Morita", "brettm@gmail.com", "password", "33", "21", "Hi, I'm Brett and I am going to be the next Jordan Speith."))
    _golfers[3].availability.saturday=true
    _golfers[3].availability.sunday=true
    _golfers[3].locations.orangeCounty=true
    _golfers.push(new Golfer(_golferId++, "Nick", "Rodriguez", "nickr@gmail.com", "password", "28", "16", "Hi, I'm Nick and I am going to be the next Rory McIlroy."))
    _golfers[4].availability.monday=true
    _golfers[4].availability.tuesday=true
    _golfers[4].availability.wednesday=true
    _golfers[4].availability.thursday=true
    _golfers[4].availability.friday=true
    _golfers[4].availability.saturday=true
    _golfers[4].availability.sunday=true
    _golfers[4].locations.losAngeles=true
    _golfers[4].locations.riverside=true
    console.log(_golfers);
    this.getGolfers = function () { // get all golfers
        return _golfers;
    }
    this.getGolferById = function (id) { // get one by id
        if (id == "" || id == null || id == undefined) {
            var _golfer = {}
            return _golfer
        }
        else {
            for (var i = 0; i < _golfers.length; i++) {
                if (_golfers[i].id == id) {
                    return _golfers[i];
                }
            }
        }
    }
    this.addGolfer = function (golfer) { // add a golfer
        golfer.id = _golferId++;
        _golfers.unshift(golfer)
        $state.go("app.golfers")
        console.log(golfer);
    }
    this.updateGolfer = function (golfer) { // update a golfers profile
        for (var i = 0; i < _golfers.length; i++) {
            if (_golfers[i].id == golfer.id) {
                _golfers.splice(i, 1, golfer)
                $state.go("app.golfer", { id: golfer.id })
                console.log(_golfers);
            }
        }
    }
    this.deleteGolfer = function (id) { // delete a golfer from the array
        for (var i = 0; i < _golfers.length; i++) {
            if (_golfers[i].id == id) {
                _golfers.splice(i, 1);
                $state.go("app.golfers");
            }
        }
    }
    // login function
    this.login = function (golfer) {
        console.log(golfer)
        for (var i = 0; i < _golfers.length; i++) {
            if (_golfers[i].email == golfer.email && _golfers[i].password == golfer.password) { // making sure email and password match
                this.currentGolfer = _golfers[i]
                console.log(this.currentgolfer);

                $state.go("app.golfer", { id: _golfers[i].id }) // go to that golfer's profile
            }
        } 
    }
    // logout function
    this.logout = function () {
        this.currentGolfer = null;
        console.log(_golfers);
        $state.go("app.home") // go back to home page
    }
    this.getCurrentGolfer = function(){
        return this.currentGolfer;
    }
})