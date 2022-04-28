import { app } from "electron";
import { isExportDeclaration, textSpanContainsPosition } from "typescript";
import { utils } from "../main/base/utils";
import * as path from "path";
import {Store} from "../main/base/store";


test("getPath dummy value", () => {
    expect(utils.getPath("dummy")).toBe(undefined);
});

test("getPath empty value", () => {
    expect(utils.getPath("")).toBe(undefined);
});

test("getPath srcPath", () => {
    expect(utils.getPath("srcPath")).toBe(String(path.join(__dirname, "..")));
});

test("getPath rendererPath", () => {
    expect(utils.getPath("rendererPath")).toBe(String(path.join(__dirname, "../renderer")));
});

test("getPath mainPath", () => {
    expect(utils.getPath("mainPath")).toBe(String(path.join(__dirname, "../main")));
});

test("getPath resourcePath", () => {
    expect(utils.getPath("resourcePath")).toBe(String(path.join(__dirname, "../../resources")));
});

test("getPath i18nPath", () => {
    expect(utils.getPath("i18nPath")).toBe(String(path.join(__dirname, "../i18n")));
});

test("getPath i18nPathSrc", () => {
    expect(utils.getPath("i18nPathSrc")).toBe(String(path.join(__dirname, "../i18n/source")));
});

test("getLocale key exists", () => {
    expect(utils.getLocale("en_US", "action.addToLibrary")).toBe("Add to Library");
});

test("getLocale key does not exist", () => {
    expect(utils.getLocale("en_US", "dummy")).toBe(undefined);
});

test("getLocale non English", () => {
    expect(utils.getLocale("fr_FR", "about.thanks")).toBe("Un grand merci à l'équipe de la Cider Collective et à tous nos contributeurs.");
});

/*test('create Store', () => {
    expect(Store.cfg.get.name).toBe('cider-config');
});*/