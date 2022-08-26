import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType() // Added for type-graphql
@Entity()
export class Post {
  [OptionalProps]?: "createdAt" | "updatedAt";

  @Field(() => Int) // Added for type-graphql, if this decorator is not added, this field cannot be queried
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: "text" })
  title!: string;
}
