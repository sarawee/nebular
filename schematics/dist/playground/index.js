"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePlayground = void 0;
const schematics_1 = require("@angular-devkit/schematics");
function generatePlayground() {
    return schematics_1.chain([
        schematics_1.schematic('playground-module', {}),
        schematics_1.schematic('playground-components', {}),
    ]);
}
exports.generatePlayground = generatePlayground;
//# sourceMappingURL=index.js.map