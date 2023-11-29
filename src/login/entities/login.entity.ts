import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('role')
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    roleName: string

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    modifiedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date

    @Column({
        nullable: true
    })
    createdBy: number

    @Column({
        nullable: true
    })
    modifiedBy: number
}







@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        nullable: true
    })
    password: string

    @Column({
        nullable: true
    })
    email: string;
 
   @ManyToOne(() => Role, role => role.id)
   @JoinColumn({ name: 'roleId' })
   roleId: number;

    @Column({
        default: false,
        type: 'boolean'
    })
    isVerified: Boolean;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    modifiedAt: Date;

    @Column({
        nullable: true
    })
    createdBy: number

    @Column({
        nullable: true
    })
    modifiedBy: number

    @DeleteDateColumn()
    deletedAt: Date

}

