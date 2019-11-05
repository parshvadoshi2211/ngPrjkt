export class deliverdetails {
  public constructor (
    public detail_id:number,
    public fk_d_id?:number,
    public fk_u_EmailId?:string,
    public fk_order_id?:number,
    public detail_Address?:string,

    public u_EmailId?:string,
    // public u_Name?:string,
    public u_Address?:string,

    public d_id?:number,
    // public d_name?:string,

    public order_id?:number,
    public bill_id?:number,
    public order_total_amt?:number
  ){}
};
