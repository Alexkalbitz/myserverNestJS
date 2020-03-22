import { TEAM } from '../../shared/team.enum';
export declare class TableEntryDto {
    team: TEAM;
    points: number;
    static create(team: TEAM, points: number): TableEntryDto;
}
