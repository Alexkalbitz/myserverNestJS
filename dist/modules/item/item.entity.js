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
var ItemEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const list_entity_1 = require("../list/list.entity");
const user_entity_1 = require("../user/user.entity");
const tag_entity_1 = require("../tag/tag.entity");
let ItemEntity = ItemEntity_1 = class ItemEntity {
    static createFromDto(dto) {
        const entity = new ItemEntity_1();
        entity.id = dto.id;
        entity.link = dto.link;
        entity.title = dto.title;
        entity.type = dto.type;
        entity.language = dto.language;
        entity.author = dto.author;
        entity.description = dto.description;
        return entity;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ItemEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ItemEntity.prototype, "link", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ItemEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ItemEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ItemEntity.prototype, "language", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ItemEntity.prototype, "author", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ItemEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ItemEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ItemEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.id),
    __metadata("design:type", user_entity_1.UserEntity)
], ItemEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => list_entity_1.ListEntity, list => list.id),
    __metadata("design:type", list_entity_1.ListEntity)
], ItemEntity.prototype, "list", void 0);
__decorate([
    typeorm_1.ManyToMany(type => tag_entity_1.TagEntity, tag => tag.id),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], ItemEntity.prototype, "tags", void 0);
ItemEntity = ItemEntity_1 = __decorate([
    typeorm_1.Entity()
], ItemEntity);
exports.ItemEntity = ItemEntity;
//# sourceMappingURL=item.entity.js.map