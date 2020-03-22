"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class MatchNotFoundException extends common_1.NotFoundException {
    constructor() {
        super('The match could not be found');
    }
}
exports.MatchNotFoundException = MatchNotFoundException;
//# sourceMappingURL=match.notfound.exception.js.map