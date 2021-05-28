import { Address } from "./Student";

export class Teacher{
    // salary details and payment histories and documents/resume about teacher
        public Id: String;
        public TeacherId: String;
        public FirstName: String;
        public Gender: String;
        public DateOfBirth: String;
        public TeacherPh: String;
        public DateOfJoining: String;
        public Qualification: String;
        public Experience: String;
        public isCTR: boolean;
        public isCTRClass: String;
        public isCTRSection: String;
        
        public PermanentAddress: Address;

        public TSubjects: TeacherSubjects[];        
        public ImageUrl: String;
        public Email: String;    
        public Description: String;
        public CurrentAddress: Address;
       
        
        public Password: String;
        public LastName: String;
}

export class TeacherSubjects
{
    public subject: String;
    // public classes: TeacherClasses[];
}

export class TeacherClasses
{
    public Std: String;
    public Section: String;
}