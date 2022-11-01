import { Semantics } from "./Semantics";
/**
 * @see https://developer.apple.com/documentation/walletpasses/passfieldcontent
 */
export interface Field {
    attributedValue?: string | number | Date;
    changeMessage?: string;
    dataDetectorTypes?: string[];
    label?: string;
    textAlignment?: string;
    key: string;
    value: string | number | Date;
    semantics?: Semantics;
    dateStyle?: string;
    ignoresTimeZone?: boolean;
    isRelative?: boolean;
    timeStyle?: string;
    currencyCode?: string;
    numberStyle?: string;
}
export declare const Field: any;
