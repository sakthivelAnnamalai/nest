// src/heroes/hero.entity.ts


import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('heroes')
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({nullable:true})
  createdAt:Date;


  @UpdateDateColumn({nullable:true})
   modifiedAt:Date;


  @DeleteDateColumn({nullable:true})
  deletedAt:Date;


}
@Entity('heroines')
export class Heroine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ nullable: true })
  createdAt:Date;


  @UpdateDateColumn({nullable:true})
  modifiedAt: Date;

  @DeleteDateColumn({nullable:true})
  deletedAt:Date;

}

@Entity("main")
export class Main {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mName: string;

  @ManyToOne(() => Hero, (hero) => hero.id)
  @JoinColumn({ name: "heroId" })
  heroId: Hero;

  @ManyToOne(() => Heroine, (heroine) => heroine.id)
  @JoinColumn({ name: "heroinId" })
  heroineId: Heroine;

  @Column()
  rDate: Date;

  @Column()
  collection: number;

  @Column()
  rating: number;

  @CreateDateColumn({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  modifiedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;

  @Column({ default: 1 })
  createdBy: number;

  @Column({ nullable: true })
  modifiedBy: number;

}

