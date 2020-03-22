import { MatchDto } from './match.dto';
import { MatchRepository } from './match.repository';
export declare class MatchService {
    private readonly matchRepository;
    constructor(matchRepository: MatchRepository);
    getAllMatches(finished?: boolean): Promise<MatchDto[]>;
    createNewMatch(match: MatchDto): Promise<MatchDto>;
    getMatchById(matchId: string): Promise<MatchDto>;
    updateMatch(matchId: string, match: MatchDto): Promise<MatchDto>;
    finishMatch(matchId: string): Promise<MatchDto>;
    deleteMatch(matchId: string): Promise<void>;
    deleteAllMatches(): Promise<void>;
    scoreHomeGoal(matchId: string): Promise<MatchDto>;
    scoreGuestGoal(matchId: string): Promise<MatchDto>;
}
