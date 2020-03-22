"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const match_entity_1 = require("./match.entity");
let MatchRepository = class MatchRepository extends typeorm_1.Repository {
    getNumberOfWinsForTeam(team) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder('match')
                .select('count(match.id)', 'wins')
                .where(new typeorm_1.Brackets((qb) => {
                qb.where('match.homeTeam = :team', { team })
                    .andWhere('match.homeTeamGoals > match.guestTeamGoals');
            }))
                .orWhere(new typeorm_1.Brackets((qb) => {
                qb.where('match.guestTeam = :team', { team })
                    .andWhere('match.guestTeamGoals > match.homeTeamGoals');
            }))
                .getRawOne()
                .then((raw) => raw.wins);
        });
    }
    getNumberOfDrawsForTeam(team) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder('match')
                .select('count(match.id)', 'draws')
                .where(new typeorm_1.Brackets((qb) => {
                qb.where('match.homeTeam = :team', { team })
                    .orWhere('match.guestTeam = :team', { team });
            }))
                .andWhere('match.homeTeamGoals = match.guestTeamGoals')
                .getRawOne()
                .then((raw) => raw.draws);
        });
    }
};
MatchRepository = __decorate([
    typeorm_1.EntityRepository(match_entity_1.MatchEntity)
], MatchRepository);
exports.MatchRepository = MatchRepository;
//# sourceMappingURL=match.repository.js.map