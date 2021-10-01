import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('advertisers')
class Advertiser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    city: string;

    @Column('text')
    segment: string;
}

export default Advertiser;