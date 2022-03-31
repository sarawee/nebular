"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyModuleImportToFilePath = exports.importPath = exports.generateCurrentDirImport = exports.removeExtension = void 0;
const path_1 = require("path");
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
function removeExtension(filePath) {
    return path_1.parse(filePath).name;
}
exports.removeExtension = removeExtension;
/**
 * @param filePath part of the path relative to current directory
 */
function generateCurrentDirImport(filePath) {
    const path = core_1.normalize(core_1.join(core_1.dirname(filePath), removeExtension(filePath)));
    return `.${core_1.NormalizedSep}${path}`;
}
exports.generateCurrentDirImport = generateCurrentDirImport;
/**
 * Returns import string for the 'to' parameter relative to 'from' parameter. Both paths must be absolute.
 * Removes file extension.
 * @param from path to file which should import 'to' file
 * @param to path to file which should be imported
 */
function importPath(from, to) {
    const relativePath = core_1.relative(core_1.dirname(from), core_1.dirname(to));
    if (relativePath.startsWith('.')) {
        return relativePath;
    }
    if (!relativePath) {
        return generateCurrentDirImport(core_1.basename(to));
    }
    return generateCurrentDirImport(core_1.join(relativePath, core_1.basename(to)));
}
exports.importPath = importPath;
function lazyModuleImportToFilePath(lazyRoutePath) {
    const matches = /import\('(.+)'\)/m.exec(lazyRoutePath);
    if (matches) {
        const path = matches[1];
        return path + '.ts';
    }
    throw new schematics_1.SchematicsException(`Can't find lazy module import in ${lazyRoutePath}`);
}
exports.lazyModuleImportToFilePath = lazyModuleImportToFilePath;
//# sourceMappingURL=path.js.map