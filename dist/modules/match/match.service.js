"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const match_dto_1 = require("./match.dto");
const typeorm_1 = require("@nestjs/typeorm");
const match_entity_1 = require("./match.entity");
const match_notfound_exception_1 = require("./exceptions/match.notfound.exception");
const match_repository_1 = require("./match.repository");
let MatchService = class MatchService {
    constructor(matchRepository) {
        this.matchRepository = matchRepository;
    }
    getAllMatches(finished) {
        return __awaiter(this, void 0, void 0, function* () {
            let allMatches = [];
            if (finished !== undefined) {
                allMatches = yield this.matchRepository.find({ where: { isMatchFinished: finished } });
            }
            else {
                allMatches = yield this.matchRepository.find();
            }
            return allMatches.map((match) => match_dto_1.MatchDto.createFromEntity(match));
        });
    }
    createNewMatch(match) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMatchEntity = match_entity_1.MatchEntity.createFromDto(match);
            const savedMatch = yield this.matchRepository.save(newMatchEntity);
            return match_dto_1.MatchDto.createFromEntity(savedMatch);
        });
    }
    getMatchById(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundMatch = yield this.matchRepository.findOne(matchId);
            if (!foundMatch) {
                throw new match_notfound_exception_1.MatchNotFoundException();
            }
            return match_dto_1.MatchDto.createFromEntity(foundMatch);
        });
    }
    updateMatch(matchId, match) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchToBeChanged = yield this.matchRepository.findOne(matchId);
            if (!matchToBeChanged) {
                throw new match_notfound_exception_1.MatchNotFoundException();
            }
            const { homeTeamGoals, guestTeamGoals } = match;
            matchToBeChanged.homeTeamGoals = homeTeamGoals;
            matchToBeChanged.guestTeamGoals = guestTeamGoals;
            const updatedMatch = yield this.matchRepository.save(matchToBeChanged);
            return match_dto_1.MatchDto.createFromEntity(updatedMatch);
        });
    }
    finishMatch(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchToBeFinished = yield this.matchRepository.findOne(matchId);
            if (!matchToBeFinished) {
                throw new match_notfound_exception_1.MatchNotFoundException();
            }
            matchToBeFinished.isMatchFinished = true;
            const finishedMatch = yield this.matchRepository.save(matchToBeFinished);
            return match_dto_1.MatchDto.createFromEntity(finishedMatch);
        });
    }
    deleteMatch(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchToBeDeleted = yield this.matchRepository.findOne(matchId);
            if (!matchToBeDeleted) {
                throw new match_notfound_exception_1.MatchNotFoundException();
            }
            yield this.matchRepository.delete(matchId);
        });
    }
    deleteAllMatches() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.matchRepository.clear();
        });
    }
    scoreHomeGoal(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundMatch = yield this.matchRepository.findOne(matchId);
            if (!foundMatch) {
                throw new match_notfound_exception_1.MatchNotFoundException();
            }
            foundMatch.homeTeamGoals++;
            const updatedMatch = yield this.matchRepository.save(foundMatch);
            return match_dto_1.MatchDto.createFromEntity(updatedMatch);
        });
    }
    scoreGuestGoal(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundMatch = yield this.matchRepository.findOne(matchId);
            if (!foundMatch) {
                throw new match_notfound_exception_1.MatchNotFoundException();
            }
            foundMatch.guestTeamGoals++;
            const updatedMatch = yield this.matchRepository.save(foundMatch);
            return match_dto_1.MatchDto.createFromEntity(updatedMatch);
        });
    }
};
MatchService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(match_repository_1.MatchRepository)),
    __metadata("design:paramtypes", [match_repository_1.MatchRepository])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map