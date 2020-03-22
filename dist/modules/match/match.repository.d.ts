import { Repository } from 'typeorm';
import { MatchEntity } from './match.entity';
import { TEAM } from '../../shared/team.enum';
export declare class MatchRepository extends Repository<MatchEntity> {
    getNumberOfWinsForTeam(team: TEAM): Promise<number>;
    getNumberOfDrawsForTeam(team: TEAM): Promise<number>;
}
