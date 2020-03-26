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
var TagEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const item_entity_1 = require("../item/item.entity");
let TagEntity = TagEntity_1 = class TagEntity {
    static createFromDto(dto) {
        const entity = new TagEntity_1();
        entity.id = dto.id;
        entity.name = dto.name;
        return entity;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], TagEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TagEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], TagEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], TagEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.ManyToMany(type => item_entity_1.ItemEntity, item => item.id),
    __metadata("design:type", Array)
], TagEntity.prototype, "items", void 0);
TagEntity = TagEntity_1 = __decorate([
    typeorm_1.Entity()
], TagEntity);
exports.TagEntity = TagEntity;
//# sourceMappingURL=tag.entity.js.map