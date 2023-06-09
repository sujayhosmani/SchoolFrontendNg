export class AppSettings {
    // public static BaseUrl = 'https://jayschool.azurewebsites.net/api/school/';
    // public static BaseUrl = 'http://20.197.31.247/api/';
    public static BaseUrl = 'http://151.106.113.253/api/';
    public static isBusy = false;
}

export const AppConstants = {
    authenticate: AppSettings.BaseUrl + 'login',
    login: AppSettings.BaseUrl + 'login',
    register: AppSettings.BaseUrl + 'registration',
    addStudent: AppSettings.BaseUrl + 'school/add',
    addSubject: AppSettings.BaseUrl + 'timetable/addSubject',
    deleteSubject: AppSettings.BaseUrl + 'school/delSubject',
    addTeacher: AppSettings.BaseUrl + 'Teachers/add',
    getCTR: AppSettings.BaseUrl + 'Teachers/getClassTeacher',
    getAllTeachers: AppSettings.BaseUrl + 'Teachers/teachers',
    getById: AppSettings.BaseUrl + 'getbyid/',
    fileUpload: AppSettings.BaseUrl + 'FileDoc/UploadFile',
    getAllStudents: AppSettings.BaseUrl + 'school/getAllStudents',
    getSubjects: AppSettings.BaseUrl + "timetable/getSubjects",
    getTimeTable: AppSettings.BaseUrl + "school/getTimeTable",
    getFullTimeTable: AppSettings.BaseUrl + 'timetable/getFullTimeTable',
    addTimeTable: AppSettings.BaseUrl + "timetable/addTimeTable",
    getCTS: AppSettings.BaseUrl + "timetable/getCTS",
    getTodayClass: AppSettings.BaseUrl + "school/getTodayClass",
    addCTS: AppSettings.BaseUrl + "timetable/addCTS",
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
    defaultClass: "5",
    defaultSection: "A",
}