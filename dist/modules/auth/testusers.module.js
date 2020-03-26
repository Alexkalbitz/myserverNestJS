"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const testusers_service_1 = require("./testusers.service");
let TestUsersModule = class TestUsersModule {
};
TestUsersModule = __decorate([
    common_1.Module({
        providers: [testusers_service_1.TestUsersService],
        exports: [testusers_service_1.TestUsersService],
    })
], TestUsersModule);
exports.TestUsersModule = TestUsersModule;
//# sourceMappingURL=testusers.module.js.map