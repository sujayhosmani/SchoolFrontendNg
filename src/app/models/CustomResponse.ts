
export class CustomResponse{
    public Status: Number;
    public Data: any;
    public Error: String;

    constructor(Status: Number, Data: any, Error: String){
        this.Status = Status;
        this.Data = Data;
        this.Error = Error;
    }
}


export class CustomRequest{
    public Data: any;

    constructor(Data: any){
        this.Data = Data;

    }
}