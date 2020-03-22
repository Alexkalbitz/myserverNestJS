import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { MatchDto } from './match.dto';
import { TEAM } from '../../shared/team.enum';
import { TagEntity } from 'modules/tag/tag.entity';

@Entity()
export class MatchEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({
        type: 'enum',
        enum: TEAM,
    })
    public homeTeam: TEAM;

    @Column({
        type: 'enum',
        enum: TEAM,
    })
    public guestTeam: TEAM;

    @Column()
    public homeTeamGoals: number;

    @Column()
    public guestTeamGoals: number;

    @Column({
        type: 'bool',
        default: false,
    })
    public isMatchFinished: boolean = false;

    @Column({
        nullable: true,
    })
    public numberOfViewers: number;

    @ManyToMany(type => TagEntity, tag => tag.id)
    @JoinTable()
    tags: Promise<TagEntity[]>;


    public static createFromDto(dto: MatchDto): MatchEntity {
        const entity = new MatchEntity();
        entity.homeTeam = dto.homeTeam;
        entity.guestTeam = dto.guestTeam;
        entity.homeTeamGoals = dto.homeTeamGoals;
        entity.guestTeamGoals = dto.guestTeamGoals;
        entity.isMatchFinished = dto.isMatchFinished;
        entity.numberOfViewers = dto.numberOfViewers;
        return entity;
    }
}