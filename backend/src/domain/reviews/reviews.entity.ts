import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BasicEntity } from '../../config/basic.entity';
import { UsersEntity } from '../users/users.entity';

export enum RatingScore {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
}

@Entity('reviews')
export class ReviewsEntity extends BasicEntity {
  @Column({ length: 128 })
  text: string;

  @Column({ enum: RatingScore })
  ratingScore: RatingScore;

  @OneToOne(() => UsersEntity, { cascade: ['insert', 'update', 'soft-remove'] })
  @JoinColumn()
  author: UsersEntity;

  @ManyToOne(() => UsersEntity, (user) => user.reviews)
  user: UsersEntity;
}
