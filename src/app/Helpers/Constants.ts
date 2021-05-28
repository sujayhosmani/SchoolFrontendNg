export class AppSettings {
    // public static BaseUrl = 'https://jayschool.azurewebsites.net/api/school/';
    public static BaseUrl = 'http://20.197.31.247/api/';

    public static isBusy = false;
}

export const AppConstants = {
    authenticate: AppSettings.BaseUrl + 'login',
    login: AppSettings.BaseUrl + 'login',
    register: AppSettings.BaseUrl + 'registration',
    addStudent: AppSettings.BaseUrl + 'school/add',
    addSubject: AppSettings.BaseUrl + 'school/addSubject',
    deleteSubject: AppSettings.BaseUrl + 'school/delSubject',
    addTeacher: AppSettings.BaseUrl + 'Teachers/add',
    getCTR: AppSettings.BaseUrl + 'Teachers/getClassTeacher',
    getAllTeachers: AppSettings.BaseUrl + 'Teachers/teachers',
    getById: AppSettings.BaseUrl + 'getbyid/',
    getAllStudents: AppSettings.BaseUrl + 'school/getAllStudents',
    getSubjects: AppSettings.BaseUrl + "school/getSubjects",
    getTimeTable: AppSettings.BaseUrl + "school/getTimeTable",
    getFullTimeTable: AppSettings.BaseUrl + 'school/getFullTimeTable',
    addTimeTable: AppSettings.BaseUrl + "school/addTimeTable",
    getCTS: AppSettings.BaseUrl + "Teachers/getCTS",
    getTodayClass: AppSettings.BaseUrl + "school/getTodayClass",
    addCTS: AppSettings.BaseUrl + "Teachers/addCTS",
    method: {
        get: "GET",
        post: "POST"
    },
    res:{
        status: "Status",
        data: "Data",
        error:"Error"
    },
    classes: ["1","2","3","4","5","6","7","8","9","10","11","12"],
    sections: ["A","B","C","D","E","F","G","H"],
    defaultClass: "10",
    defaultSection: "C",
}