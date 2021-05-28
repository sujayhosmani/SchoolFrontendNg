import { CTSModel } from "./CTSModel";
import { SubjectModel } from "./Subjects";
import { Teacher } from "./Teacher";

export class TimeTable2{
    public  Id: String;
    public  FromTime: any;
    public  Std: String;
    public  Section: String;
    public  weekSub: WeekSubjects[];
    public  EndTime: any;
    public  Duration: String;
    public  UploadedById: String;
}

export class WeekSubjects{
    public  Week: String
    public  CTSId: String;
}

export class FullTimeTable{
    public  timeTable: TimeTable2[];
    public  ctsModel:CTSModel[];
    public  subjects: SubjectModel[];
   public  teacher: Teacher[];
}
