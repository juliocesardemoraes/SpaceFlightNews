import { getModelForClass, prop } from "@typegoose/typegoose";

class ArticleClass {
  @prop()
  public id!: Number;
  @prop()
  public title!: String;
  @prop()
  public url!: String;
  @prop()
  public imageUrl!: String;
  @prop()
  public newsSite!: String;
  @prop()
  public summary!: String;
  @prop()
  public publishedAt!: Date;
  @prop()
  public updatedAt!: Date;
  @prop()
  public featured!: Boolean;
  @prop()
  public launches: any;
  @prop()
  public events!: any;
}
const ArticleModel = getModelForClass(ArticleClass);

export default ArticleModel;
