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
const match_service_1 = require("./match.service");
const match_dto_1 = require("./match.dto");
const global_error_filter_1 = require("../../global.error.filter");
const common_2 = require("@nestjs/common");
let MatchController = class MatchController {
    constructor(matchService) {
        this.matchService = matchService;
    }
    getAllMatches(finished) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.matchService.getAllMatches(finished);
        });
    }
    getMatchById(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.matchService.getMatchById(matchId);
        });
    }
    createNewMatch(newMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.matchService.createNewMatch(newMatch);
        });
    }
    updateMatch(matchId, updatedMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.matchService.updateMatch(matchId, updatedMatch);
        });
    }
    finishMatch(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.matchService.finishMatch(matchId);
        });
    }
    homeTeamShotAGoal(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.matchService.scoreHomeGoal(matchId);
        });
    }
    guestTeamShotAGoal(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.matchService.scoreGuestGoal(matchId);
        });
    }
    deleteMatch(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.matchService.deleteMatch(matchId);
        });
    }
    deleteAllMatches() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.matchService.deleteAllMatches();
        });
    }
};
__decorate([
    common_1.Get('/matches'),
    __param(0, common_1.Query('finished')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getAllMatches", null);
__decorate([
    common_1.Get('/match/:matchId'),
    __param(0, common_1.Param('matchId', common_2.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getMatchById", null);
__decorate([
    common_1.Post('/match'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [match_dto_1.MatchDto]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "createNewMatch", null);
__decorate([
    common_1.Put('/match/:id'),
    __param(0, common_1.Param('id', common_2.ParseUUIDPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, match_dto_1.MatchDto]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "updateMatch", null);
__decorate([
    common_1.Patch('/match/:id/finish'),
    __param(0, common_1.Param('id', common_2.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "finishMatch", null);
__decorate([
    common_1.Patch('/match/:id/homegoal'),
    __param(0, common_1.Param('id', common_2.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "homeTeamShotAGoal", null);
__decorate([
    common_1.Patch('/match/:id/guestgoal'),
    __param(0, common_1.Param('id', common_2.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "guestTeamShotAGoal", null);
__decorate([
    common_1.Delete('/match/:id'),
    common_1.HttpCode(204),
    __param(0, common_1.Param('id', common_2.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "deleteMatch", null);
__decorate([
    common_1.Delete('/matches'),
    common_1.HttpCode(204),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "deleteAllMatches", null);
MatchController = __decorate([
    common_1.Controller('/api'),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.UseFilters(global_error_filter_1.GlobalErrorFilter),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map