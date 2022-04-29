import { app } from "electron";
import { isExportDeclaration, textSpanContainsPosition } from "typescript";
import { utils } from "../main/base/utils";
import * as path from "path";
import {Store} from "../main/base/store";
import {BrowserWindow} from "../main/base/browserwindow";


beforeEach(()  => {
    let bw : BrowserWindow;

});

test("startWatcher", () => {
    jest.mock('../main/base/utils');
    const util = new utils();

    jest.mock('../main/base/store');
    const s = new Store();

    jest.mock('../main/base/browserwindow');
    const b = new BrowserWindow();

    b.StartWatcher("../main/plugins/chromecast");
});

test("createWindow", () => {
    jest.mock('../main/base/utils');
    const util = new utils();

    jest.mock('../main/base/store');
    const s = new Store();

    jest.mock('../main/base/browserwindow');
    const b = new BrowserWindow();

    expect.any(b.createWindow());
});

test("verifyFiles", () => {
    jest.mock('../main/base/utils');
    const util = new utils();

    jest.mock('../main/base/store');
    const s = new Store();

    jest.mock('../main/base/browserwindow');
    const b = new BrowserWindow();
});