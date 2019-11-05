export class orders {
  public constructor (
    public order_id:number,
    public bill_id:number,
    public bill_date:Date,
    public order_status:string,
    public order_amt:number,
    public order_payment:string,
    public order_discount:number,
    public order_ispaid:string,
    public order_spc_instruction:string,
    public order_gross_amt:number,
    public order_total_amt:number,
    public fk_u_EmailId?:string,
    public fk_d_id?:number,
    public d_id?:number,
    public d_name?:string,
    public d_address?:string,
    public d_mobileno?:string,
    public d_EmailId?:string,
    public u_EmailId?:string,
    public u_Name?:string,
    public u_Address?:string,
    public u_gender?:string,
    public u_Type?:string,
    public u_password?:string,
    public u_mobileno?:number,
    public u_dob?:Date,
    public u_img?:string
  )
  {}
}
