import { IBaseModuleConfig } from "../BaseModule.js";

export interface IPassportConfig extends IBaseModuleConfig {
  scorerApiKey: string;
  cachePath: string;
  cacheTime: number;
  trustedIssuers: string[];
  refreshCooldown: number;
  stampDeduplicationTime: number;
  stampScoring: {[stamp: string]: number};
  boostFactor: {[score: number]: number};
  skipProxyCheckScore: number;
  skipHostingCheckScore: number;
  allowGuestRefresh: boolean;
  guestRefreshCooldown: number;
}

export const defaultConfig: IPassportConfig = {
  enabled: false,
  scorerApiKey: null,
  cachePath: null,
  cacheTime: 86400,
  trustedIssuers: [ "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC" ],
  refreshCooldown: 300,
  stampDeduplicationTime: 86400 * 3,
  stampScoring: {},
  boostFactor: {},
  skipProxyCheckScore: 0,
  skipHostingCheckScore: 0,
  allowGuestRefresh: false,
  guestRefreshCooldown: 0,
}
