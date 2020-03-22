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
var MatchEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const team_enum_1 = require("../../shared/team.enum");
let MatchEntity = MatchEntity_1 = class MatchEntity {
    constructor() {
        this.isMatchFinished = false;
    }
    static createFromDto(dto) {
        const entity = new MatchEntity_1();
        entity.homeTeam = dto.homeTeam;
        entity.guestTeam = dto.guestTeam;
        entity.homeTeamGoals = dto.homeTeamGoals;
        entity.guestTeamGoals = dto.guestTeamGoals;
        entity.isMatchFinished = dto.isMatchFinished;
        entity.numberOfViewers = dto.numberOfViewers;
        return entity;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], MatchEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: team_enum_1.TEAM,
    }),
    __metadata("design:type", String)
], MatchEntity.prototype, "homeTeam", void 0);
__decorate([
    typeorm_1.Column({
        type: 'enum',
        enum: team_enum_1.TEAM,
    }),
    __metadata("design:type", String)
], MatchEntity.prototype, "guestTeam", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MatchEntity.prototype, "homeTeamGoals", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MatchEntity.prototype, "guestTeamGoals", void 0);
__decorate([
    typeorm_1.Column({
        type: 'bool',
        default: false,
    }),
    __metadata("design:type", Boolean)
], MatchEntity.prototype, "isMatchFinished", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
    }),
    __metadata("design:type", Number)
], MatchEntity.prototype, "numberOfViewers", void 0);
MatchEntity = MatchEntity_1 = __decorate([
    typeorm_1.Entity()
], MatchEntity);
exports.MatchEntity = MatchEntity;
//# sourceMappingURL=match.entity.js.map