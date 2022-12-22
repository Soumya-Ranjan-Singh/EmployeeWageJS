class EmployeePayrollData{
    //properties
    id;
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
    get name() {return this._name;}
    set name(name) {this._name=name;}

    //toString method
    toString(){
        const options={year:'numeric', month:'long', day:'numeric'};
        const empDate=this.startDate==undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US", options);
        return "id="+this.id+" : name="+this.name+" : salary="+this.salary+
                " : gender="+this.gender+" : Start Date="+empDate;
    }
}

let employeePayrollData=new EmployeePayrollData(1,"Mark",3000,"M",new Date(2018,07,15));
process.stdout.write(employeePayrollData.toString()+"\n");
employeePayrollData.name="John";
process.stdout.write(employeePayrollData.toString()+"\n");
let employeePayrollData2=new EmployeePayrollData(2,"Terrisa",30000,"F",new Date());
process.stdout.write(employeePayrollData2.toString());