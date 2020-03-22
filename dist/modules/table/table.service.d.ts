import { TableEntryDto } from './table.dto';
import { MatchRepository } from '../match/match.repository';
export declare class TableService {
    private readonly matchRepository;
    constructor(matchRepository: MatchRepository);
    calculateAndReturnTable(): Promise<TableEntryDto[]>;
    private calculatePositions;
    private calculatePointsForTeam;
    private sortByPoints;
}
