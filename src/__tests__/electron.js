import {app} from "electron";

export const ipcRenderer = {
    on: jest.fn()
};

export const isPackaged = {
    on : app
};

export const getPath = {
    on: jest.fn()
};

module.exports = {
    app: {
        isPackaged: jest.fn().mockReturnValue('.')
    }
}