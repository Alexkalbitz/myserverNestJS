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
var ListEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user//user.entity");
const group_entity_1 = require("../group/group.entity");
let ListEntity = ListEntity_1 = class ListEntity {
    static createFromDto(dto) {
        const entity = new ListEntity_1();
        entity.id = dto.id;
        entity.public = dto.public;
        entity.name = dto.name;
        return entity;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ListEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], ListEntity.prototype, "public", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ListEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ListEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ListEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.id),
    __metadata("design:type", user_entity_1.UserEntity)
], ListEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToMany(type => group_entity_1.GroupEntity, group => group.lists),
    __metadata("design:type", Array)
], ListEntity.prototype, "groups", void 0);
ListEntity = ListEntity_1 = __decorate([
    typeorm_1.Entity()
], ListEntity);
exports.ListEntity = ListEntity;
//# sourceMappingURL=list.entity.js.map