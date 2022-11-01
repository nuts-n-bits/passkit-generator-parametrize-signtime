import { Buffer } from "buffer";
export interface CertificatesSchema {
    wwdr: string | Buffer;
    signerCert: string | Buffer;
    signerKey: string | Buffer;
    signerKeyPassphrase?: string;
}
export declare const CertificatesSchema: any;
