myApp.controller("testController", function ($scope, $http, $log, stringService, $location, $anchorScroll) {
    $scope.message = "Angular.js Tutorial"

    let employee = {
        firstName: "David",
        lastName: "John",
        gender: "Male"
    }
    $scope.employee = employee;
    $scope.empView = 'emp.html' 

    let country = {
        name: "India",
        flag: "./Images/india.jpg"
    }
    $scope.country = country;

    // Event Hanling
    let technologies = [
        {
            name: 'ANGULAR',
            likes: 5,
            dislikes: 0
        },
        {
            name: 'JAVA',
            likes: 0,
            dislikes: 2
        },
        {
            name: 'REACT',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'C#',
            likes: 1,
            dislikes: 1
        },
        {
            name: 'PYTHON',
            likes: 3,
            dislikes: 1
        }
    ]
    $scope.technologies = technologies;

    $scope.like = function (i) {
        $scope.technologies[i].likes++;
    }

    $scope.dislike = function (i) {
        $scope.technologies[i].dislikes++;
    }



    // Filter, Pipes, Formatting, Sorting
    let employees = [
        {
            firstName: "David",
            lastName: "John",
            gender: "Male",
            salary: 55000.856,
            dob: new Date("July 23, 1996"),
            indian: 2
        }, {
            firstName: "Pratik",
            lastName: "Srivastava",
            gender: "Male",
            salary: 90000.50,
            dob: new Date("October 16, 1997"),
            indian: 1
        }, {
            firstName: "Abc",
            lastName: "Xyz",
            gender: "Female",
            salary: 80000,
            dob: new Date("October 23, 1998"),
            indian: 3
        }, {
            firstName: "John",
            lastName: "John",
            gender: "Male",
            salary: 55000.856,
            dob: new Date("July 23, 1996"),
            indian: 2
        }, {
            firstName: "Barack",
            lastName: "linkon",
            gender: "Male",
            salary: 55000.856,
            dob: new Date("March 07, 1990"),
            indian: 2
        },
    ];
    $scope.employees = employees;
    $scope.rowLimit = 5;
    $scope.sortBy = "firstName"
    $scope.reverseSort = false;

    $scope.sortData = (column) => {
        $scope.reverseSort = ($scope.sortBy == column) ? !$scope.reverseSort : false;
        $scope.sortBy = column;
    }

    $scope.getSortClass = (column) => {
        if ($scope.sortBy == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
    }

    $scope.search = (item) => {
        if ($scope.searchText == undefined) {
            return true;
        } else {
            if (item.firstName.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true
            } else {
                return false;
            }
        }
    }

    // $http service
    $http({
        method: 'GET',
        url: 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'
    }).then(function(response) {
        $scope.empList = response?.data;
        $log.info(response);
    }, function(error){
        $log.info(error);
    })

    // Custom service
    $scope.transformString = function(input) {
        $scope.output = stringService.processString(input);
    }

    // anchorscroll
    $scope.scrollTo = (scrollLocation) => {
        $location.hash(scrollLocation);
        $anchorScroll();
    }
})