/**
 * @see https://developer.apple.com/documentation/walletpasses/pass/barcodes
 */
export declare type BarcodeFormat = "PKBarcodeFormatQR" | "PKBarcodeFormatPDF417" | "PKBarcodeFormatAztec" | "PKBarcodeFormatCode128";
export interface Barcode {
    altText?: string;
    messageEncoding?: string;
    format: BarcodeFormat;
    message: string;
}
export declare const Barcode: any;