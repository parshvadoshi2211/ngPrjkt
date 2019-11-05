export class orDetails {
  public constructor (
    public od_id:number,
    public price:number,
    public fk_pro_id?:number,
    public fk_order_id?:number,

    public order_id?:number,
    public pro_id?:number,
    public pro_name?:string
  ) {}
}
