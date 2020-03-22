import { MatchService } from './match.service';
import { MatchDto } from './match.dto';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    getAllMatches(finished: boolean): Promise<MatchDto[]>;
    getMatchById(matchId: string): Promise<MatchDto>;
    createNewMatch(newMatch: MatchDto): Promise<MatchDto>;
    updateMatch(matchId: string, updatedMatch: MatchDto): Promise<MatchDto>;
    finishMatch(matchId: string): Promise<MatchDto>;
    homeTeamShotAGoal(matchId: string): Promise<MatchDto>;
    guestTeamShotAGoal(matchId: string): Promise<MatchDto>;
    deleteMatch(matchId: string): Promise<void>;
    deleteAllMatches(): Promise<void>;
}
