import { app } from "electron";
import { isExportDeclaration, textSpanContainsPosition } from "typescript";
import { utils } from "../main/base/utils";
import * as path from "path";
import {Store} from "../main/base/store";
import {BrowserWindow} from "../main/base/browserwindow";
import {resolve} from "path";

//WHITE BOX UTILS

//FAILS HAS EXTRA SRC
test("getPath", () => {
    expect(utils.getPath("srcPath")).toBe(String(path.join(__dirname, "..")));
});

test("getPathReturn", () => {
    expect.stringContaining(utils.getPath("srcPath"));
});


//Tests that getApp function returns app
test("getApp", () => {
    utils.getApp();
    expect(utils.getApp()).toBe(app);
});

//test locale key when it equals en_US
//FAILS path for i18n is set in the utils file to be C:\Users\hcmor\IdeaProjects\CiderTesting\src\src\i18n which has 2 SRC values
//instead of 1
//rest of getLocale is unreachable due to this let statement error
test("getLocale key exists", () => {
    expect(utils.getLocale("en_US", "action.addToLibrary")).toBe("Add to Library");
});

//Testing if getStoreValue returns
// FAILS "Cannot read properties of undefined (reading 'get')"
//TODO using mock to try and get it
test("getStoreValue", async () => {
    const util = jest.mock('../main/base/utils');
    jest.mock('../main/base/store.ts');
    const s = new Store;
    jest.mock('../__tests__/electron.js')
    jest.mock('../main/base/app')
    module.exports = {
        app: {
            isPackaged: jest.fn().mockReturnValue('.')
        }
    }
    utils.getStoreValue("action.addToLibrary");

});

//TODO Cannot read properties of undefined reading
test("getStore", () => {
    jest.mock('../main/base/utils');
    const util = new utils();
    jest.mock('../main/base/store.ts');
    const s = new Store();
    utils.getStore();
});

//TODO undefined set
test("setStoreValue", () => {
    jest.mock('../main/base/utils');
    const util = new utils();

    jest.mock('../main/base/store.ts');
    const s = new Store();

    expect(utils.setStoreValue("action.addToLibrary","Add to Library"));
});

test("getWindow", () => {
    jest.mock('../main/base/utils');
    jest.mock('../main/base/store.ts');
    jest.mock('../main/base/browserwindow');
    expect.any(utils.getWindow());
});

//Passes but its not implemented yet so no expected
test("loadPluginFrontEnd", () => {
    utils.loadPluginFrontend("../main/plugins/chromecast");
});

//TODO mocking for all following this webcontent
test("loadJSPluginFrontEnd", () => {
    jest.mock('../main/base/utils.ts');
    jest.mock('../main/base/browserwindow.ts');
    utils.loadJSFrontend("../main/plugins/chromecast");
});

test("playbackPause", () => {
    utils.playback.pause();
});

test("playbackPlay", () => {
    utils.playback.play();
});

test("playbackPlayPause", () => {
    utils.playback.playPause();
});

test("playbackNext", () => {
    utils.playback.next();
});

test("playbackPrevious", () => {
    utils.playback.previous();
});

//TODO is packaged error
test("checkForUpdate", () => {
    utils.checkForUpdate();
});




//From utils.test.ts




/*test('create Store', () => {
    expect(Store.cfg.get.name).toBe('cider-config');
});*/