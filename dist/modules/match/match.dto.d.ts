import { MatchEntity } from './match.entity';
import { TEAM } from '../../shared/team.enum';
export declare class MatchDto {
    homeTeam: TEAM;
    guestTeam: TEAM;
    homeTeamGoals: number;
    guestTeamGoals: number;
    isMatchFinished: boolean;
    numberOfViewers: number;
    static createFromEntity(matchEntity: MatchEntity): MatchDto;
}
