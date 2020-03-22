import { MatchDto } from './match.dto';
import { TEAM } from '../../shared/team.enum';
export declare class MatchEntity {
    id: string;
    homeTeam: TEAM;
    guestTeam: TEAM;
    homeTeamGoals: number;
    guestTeamGoals: number;
    isMatchFinished: boolean;
    numberOfViewers: number;
    static createFromDto(dto: MatchDto): MatchEntity;
}
