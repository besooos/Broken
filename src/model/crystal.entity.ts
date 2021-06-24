// item.entity.ts
import { Entity, Property } from '@mikro-orm/core';
import { Base } from './base.entity';

@Entity()
export class Crystal extends Base {
  @Property()
  name: string;

  @Property()
  category: string;

  @Property()
  photo_URL: string;

  @Property()
  short_description: string;
}