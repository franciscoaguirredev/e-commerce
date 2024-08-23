import { MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { unique: true, nullable: true })
    @MaxLength(50)
    name: string;

    
}