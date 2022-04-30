import { appData } from './appdata';

export default function getAppData(dataKey: string) {
    return appData[dataKey];
}