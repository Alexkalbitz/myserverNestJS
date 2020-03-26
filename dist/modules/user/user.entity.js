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
var UserEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const group_entity_1 = require("../group/group.entity");
let UserEntity = UserEntity_1 = class UserEntity {
    static createFromDto(dto) {
        const entity = new UserEntity_1();
        entity.id = dto.id;
        entity.password = dto.password;
        entity.email = dto.email;
        entity.name = dto.name;
        return entity;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.ManyToOne(type => UserEntity_1, user => user.id),
    __metadata("design:type", Array)
], UserEntity.prototype, "friends", void 0);
__decorate([
    typeorm_1.ManyToMany(type => group_entity_1.GroupEntity, group => group.users),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], UserEntity.prototype, "groups", void 0);
UserEntity = UserEntity_1 = __decorate([
    typeorm_1.Entity()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map