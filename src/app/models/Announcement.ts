import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('announcements')
class Announcement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    id_advertiser: string;

    @Column('text')
    segment: string;

    @Column('text')
    type: string;

    @Column('text')
    location: string;

    @Column('text')
    url: string;
}

export default Announcement;