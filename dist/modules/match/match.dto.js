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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const team_enum_1 = require("../../shared/team.enum");
class MatchDto {
    static createFromEntity(matchEntity) {
        const match = new MatchDto();
        match.homeTeam = matchEntity.homeTeam;
        match.guestTeam = matchEntity.guestTeam;
        match.homeTeamGoals = matchEntity.homeTeamGoals;
        match.guestTeamGoals = matchEntity.guestTeamGoals;
        match.isMatchFinished = matchEntity.isMatchFinished;
        if (matchEntity.numberOfViewers) {
            match.numberOfViewers = matchEntity.numberOfViewers;
        }
        return match;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(team_enum_1.TEAM),
    __metadata("design:type", String)
], MatchDto.prototype, "homeTeam", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(team_enum_1.TEAM),
    __metadata("design:type", String)
], MatchDto.prototype, "guestTeam", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], MatchDto.prototype, "homeTeamGoals", void 0);
__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], MatchDto.prototype, "guestTeamGoals", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], MatchDto.prototype, "numberOfViewers", void 0);
exports.MatchDto = MatchDto;
//# sourceMappingURL=match.dto.js.map