"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const match_repository_1 = require("../match/match.repository");
const table_controller_1 = require("./table.controller");
const table_service_1 = require("./table.service");
let TableModule = class TableModule {
};
TableModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([match_repository_1.MatchRepository]),
        ],
        controllers: [
            table_controller_1.TableController,
        ],
        providers: [
            table_service_1.TableService,
        ],
    })
], TableModule);
exports.TableModule = TableModule;
//# sourceMappingURL=table.module.js.map