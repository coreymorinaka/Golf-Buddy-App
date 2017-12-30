app.service("coursesService", function ($state, $http) {
    var _courses = [];
    var _courseId = 0;
    this.currentcourse = null;
    var Course = function (id, name, address, phoneNumber, totalYards, slope, website) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.totalYards = totalYards;
        this.slope = slope;
        this.website = website;
    }
    _courses.push(new Course(_courseId++, "River View Golf Course", "1800 W Santa Clara Ave, Santa Ana, CA 92706", "(714) 543-1115", "6190", "120", "http://riverviewgolf.com/"))

    _courses.push(new Course(_courseId++, "Anaheim Hills Golf Course", "6501 East Nohl Ranch Road, Anaheim, CA 92807", "(714) 998-3041", "6142", "124", "https://www.anaheimhillsgc.com/"))

    _courses.push(new Course(_courseId++, "Oak Quarry Golf Club", "7151 Sierra Ave, Riverside, CA 92509", "(951) 685-1440", "6600", "133", "http://www.oakquarry.com/"))

    _courses.push(new Course(_courseId++, "Eagle Glen Golf Club", "1800 Eagle Glen Pkwy, Corona, CA 92883", "(951) 278-2842", "6279", "131", "http://www.eagleglengc.com/"))

    _courses.push(new Course(_courseId++, "Alhambra Golf Course", "630 S Almansor St, Alhambra, CA 91801", "(626) 570-5059", "5266", "114", "http://www.alhambragolf.com/"))

    _courses.push(new Course(_courseId++, "Los Amigos Golf Course", "7295 Quill Dr, Downey, CA 90242", "(562) 923-9696", "6212", "118", "http://www.losamigosgc.com/"))
    console.log(_courses);
    this.getCourse = function () { // get all courses
        return _courses;
    }
    this.getCourseById = function (id) { // get one by id
        if (id == "" || id == null || id == undefined) {
            var _course = {}
            return _course
        }
        else {
            for (var i = 0; i < _courses.length; i++) {
                if (_courses[i].id == id) {
                    return _courses[i];
                }
            }
        }
    }
    this.addCourse = function (course) { // add a course
        course.id = _courseId++;
        _courses.unshift(course)
        $state.go("app.courses")
        console.log(course);
    }
    this.updateCourse = function (course) { // update a courses
        for (var i = 0; i < _courses.length; i++) {
            if (_courses[i].id == course.id) {
                _courses.splice(i, 1, course)
                $state.go("app.courses")
                console.log(_courses);
            }
        }
    }
    this.deleteCourse = function (id) { // delete a course from the array
        console.log(id);
        for (var i = 0; i < _courses.length; i++) {
            if (_courses[i].id == id) {
                console.log(i)
                _courses.splice(i, 1);
            }
        }
    }
})