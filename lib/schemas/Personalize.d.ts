/**
 * @see https://developer.apple.com/documentation/walletpasses/personalize
 */
declare type RequiredPersonalizationFields = "PKPassPersonalizationFieldName" | "PKPassPersonalizationFieldPostalCode" | "PKPassPersonalizationFieldEmailAddress" | "PKPassPersonalizationFieldPhoneNumber";
export interface Personalize {
    description: string;
    requiredPersonalizationFields: RequiredPersonalizationFields[];
    termsAndConditions?: string;
}
export declare const Personalize: any;
export {};
