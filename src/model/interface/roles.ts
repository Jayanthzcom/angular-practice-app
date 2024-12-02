export interface IRole{
    roleId: number,
    role: string
}

export interface IClient{
    clientId: number,
    contactPersonName: string,
    companyName : String,
    address: string,
    city: string,
    pincode: string,
    state: string,
    employeeStrength: number,
    gstNo: string,
    contactNo: string,
    regNo: string
}

export interface IProject {
    empName:         string;
    empId:           number;
    empCode:         string;
    empEmailId:      string;
    empDesignation:  string;
    projectName:     string;
    startDate:       Date;
    expectedEndDate: Date;
    clientName:      string;
    clientProjectId: number;
}

export interface IEmployee{
      empName:string,
      empId: number,
      empCode:string,
      empEmailId:string,
      empDesignation: string,
      role: string
}


export interface APIResponseModal{
    message: string,
    result:boolean,
    data: any,

}