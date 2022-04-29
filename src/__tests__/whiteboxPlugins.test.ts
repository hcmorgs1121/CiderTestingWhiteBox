import * as fs from 'fs';
import * as path from 'path';

import { utils } from "../main/base/utils";
import {BrowserWindow} from "../main/base/browserwindow";
import {Plugins} from "../main/base/plugins";
import {resolve} from "path";
import {Store} from "../main/base/store";

test("getPluginFromMap", () => {

    jest.mock('../main/base/plugins');
    const plug = new Plugins();
    const {
        app
    } = require('electron');
    expect.any(plug.getPlugins());
});


