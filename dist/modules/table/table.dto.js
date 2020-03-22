"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TableEntryDto {
    static create(team, points) {
        const dto = new TableEntryDto();
        dto.team = team;
        dto.points = points;
        return dto;
    }
}
exports.TableEntryDto = TableEntryDto;
//# sourceMappingURL=table.dto.js.map