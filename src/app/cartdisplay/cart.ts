export class carts {
  public constructor (
    public cart_id:number,
    public cart_qty:number,
    public fk_u_EmailId?:string,
    public fk_pro_id?:number,
    public u_EmailId?:string,
    public u_Name?:string,
    public u_Address?:string,
    // public u_gender?:string,
    // public u_type?:string,
    // public u_password?:string,
    // public u_mobileno?:number,
    // public u_dob?:Date,
    public u_img?:string,
    public pro_id?:number,
    public pro_name?:string,
    public pro_price?:number,
    public pro_qty?:number,
    // public pro_mfg?:string,
    // public pro_img?:string,
    // public pro_info?:string,
    public fk_cat_id?:number
  ) { }
};
