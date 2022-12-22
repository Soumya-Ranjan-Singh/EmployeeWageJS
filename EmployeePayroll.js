class EmployeePayrollData{
    //properties
    id;
    name;
    salary;
    gender;
    startDate;

    //constructors
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter methods
    get getId() {return this.id;}
    get getName() {return this.name;}
    get getSalary() {return this.salary;}
    get getGender() {return this.gender;}
    get getStartDate() {return this.startDate;}
    set setId(id) {
        let idRegex = RegExp("^[1-9]$");
        if(idRegex.test(id)) this.id = id;
        else throw 'ID is incorrect';
    }
    set setName(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name)) this.name = name;
        else throw 'Name is incorrect';
    }
    set setSalary(salary) {
        let salaryRegex = RegExp("^[1-9]$");
        if(salaryRegex.test(salary)) this.salary = salary;
        else throw 'Salary is incorrect';
    }
    set setGender(gender) {
        let genderRegex = RegExp("^[M,F]{1}$");
        if(genderRegex.test(gender)) this.gender = gender;
        else throw 'Gender is incorrect';
    }
    set setStartDate(startDate) {
        let startDateRegex = RegExp("^\\d[1980-2022]{4}-\\d[01-12]{2}-\\d[01-31]{2}$");
        if(startDateRegex.test(startDate)) this.startDate = startDate;
        else throw 'Start Date is incorrect';
    }
    
    //toString method
    toString(){
        const options={year:'numeric', month:'long', day:'numeric'};
        const empDate=this.startDate==undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id="+this.id+" : name="+this.name+" : salary="+this.salary+
        " : gender="+this.gender+" : Start Date="+empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",3000,"M",new Date(2018,07,15));
process.stdout.write(employeePayrollData.toString()+"\n");
try{
    employeePayrollData.setName="Jon";
    process.stdout.write(employeePayrollData.toString()+"\n");
}
catch(exception){
    console.error(exception);
}
let employeePayrollData2=new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
process.stdout.write(employeePayrollData2.toString()+"\n");
try{
    employeePayrollData2.setId=0;
    process.stdout.write(employeePayrollData2.toString()+"\n");
}
catch(exception){
    console.error(exception);
}
try{
    employeePayrollData2.setId=-1;
    process.stdout.write(employeePayrollData2.toString()+"\n");
}
catch(exception){
    console.error(exception);
}
try{
    employeePayrollData2.setSalary=-1;
    process.stdout.write(employeePayrollData2.toString()+"\n");
}
catch(exception){
    console.error(exception);
}
try{
    employeePayrollData2.setSalary=0;
    process.stdout.write(employeePayrollData2.toString()+"\n");
}
catch(exception){
    console.error(exception);
}
try{
    employeePayrollData2.setGender="G";
    process.stdout.write(employeePayrollData2.toString()+"\n");
}
catch(exception){
    console.error(exception);
}
try{
    employeePayrollData2.setStartDate=new Date(2023,01,01);
    process.stdout.write(employeePayrollData2.toString()+"\n");
}
catch(exception){
    console.error(exception);
}