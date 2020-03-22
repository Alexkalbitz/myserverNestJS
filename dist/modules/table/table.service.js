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
const table_dto_1 = require("./table.dto");
const typeorm_1 = require("@nestjs/typeorm");
const team_enum_1 = require("../../shared/team.enum");
const match_repository_1 = require("../match/match.repository");
let TableService = class TableService {
    constructor(matchRepository) {
        this.matchRepository = matchRepository;
    }
    calculateAndReturnTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const entries = yield this.calculatePositions();
            return this.sortByPoints(entries);
        });
    }
    calculatePositions() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all(Object.values(team_enum_1.TEAM).map((team) => {
                return this.calculatePointsForTeam(team);
            }));
        });
    }
    calculatePointsForTeam(team) {
        return __awaiter(this, void 0, void 0, function* () {
            const [numOfWins, numOfDraws,] = yield Promise.all([
                this.matchRepository.getNumberOfWinsForTeam(team),
                this.matchRepository.getNumberOfDrawsForTeam(team),
            ]);
            const points = Number(numOfWins) * 3 + Number(numOfDraws);
            return table_dto_1.TableEntryDto.create(team, points);
        });
    }
    sortByPoints(entries) {
        return entries.sort((first, second) => {
            return first.points > second.points
                ? -1
                : 1;
        });
    }
};
TableService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(match_repository_1.MatchRepository)),
    __metadata("design:paramtypes", [match_repository_1.MatchRepository])
], TableService);
exports.TableService = TableService;
//# sourceMappingURL=table.service.js.map