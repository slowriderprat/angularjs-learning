myApp.filter('isIndian', () => {
    return (isIndian) => {
        switch(isIndian){
            case 1: 
                return 'Yes';
            case 2:
                return 'No';
            case 3:
                return 'Not disclosed'
        }
    }
})

myApp.filter('convertSalary', () => {
    return(salary) => {
        salary = salary * 10230;
        return salary;
    }
})