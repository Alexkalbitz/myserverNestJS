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
const global_error_filter_1 = require("../../global.error.filter");
const list_dto_1 = require("./list.dto");
const list_service_1 = require("./list.service");
let ListController = class ListController {
    constructor(listService) {
        this.listService = listService;
    }
    getAllLists() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.listService.getAllLists();
        });
    }
    createNewList(newList) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.listService.createNewList(newList);
        });
    }
};
__decorate([
    common_1.Get('/getAllLists'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListController.prototype, "getAllLists", null);
__decorate([
    common_1.Post('/createList'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_dto_1.ListDto]),
    __metadata("design:returntype", Promise)
], ListController.prototype, "createNewList", null);
ListController = __decorate([
    common_1.Controller('/api'),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.UseFilters(global_error_filter_1.GlobalErrorFilter),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListController);
exports.ListController = ListController;
//# sourceMappingURL=list.controller.js.map