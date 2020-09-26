import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LogAnalyzer extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeStamp: string;

    @Column()
    logDetail: string;
}