export class Student {
    public Id: String;
    public Name: String;
    public AdmissionNo: String;
    public Class: String;
    public Section: String;
    public Gender: String;
    public DateOfBirth: String;
    public FatherName: String;
    public MotherName: String;
    public MotherPh: String;
    public FatherPh: String;
    public TotalPaidFee: String;
    public DateOfJoining: String;
    
    
    public Email: String;
    public FatherOccupation: String;
    public MotherOccupation: String;
    public ImageUrl: String;
    public PermanentAddress: Address;
    public CurrentAddress: Address;

    public StudentId: String;
    public ClassNsection: String;
    public RollNo: String;

    public AdmissionCopy: String;
    public Password: String;
}

export class Address {
    public Location: String;
    public FullAddress: String;
    public State: String;
    public Pin: String;
    public City: String;
}