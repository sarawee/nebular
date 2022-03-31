"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const testing_1 = require("@angular-devkit/schematics/testing");
const path = require("path");
const collectionPath = path.join(__dirname, '../collection.json');
describe('new-component', () => {
    it('works', (done) => {
        const runner = new testing_1.SchematicTestRunner('schematics', collectionPath);
        runner.runSchematicAsync('new-component', {}, schematics_1.Tree.empty())
            .subscribe((tree) => {
            expect(tree.files).toEqual([]);
            done();
        });
    });
});
//# sourceMappingURL=index_spec.js.map