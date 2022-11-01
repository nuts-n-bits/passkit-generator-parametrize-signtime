import { Field } from "./Field";
export declare type TransitType = "PKTransitTypeAir" | "PKTransitTypeBoat" | "PKTransitTypeBus" | "PKTransitTypeGeneric" | "PKTransitTypeTrain";
export declare const TransitType: any;
export interface PassFields {
    auxiliaryFields: (Field & {
        row?: number;
    })[];
    backFields: Field[];
    headerFields: Field[];
    primaryFields: Field[];
    secondaryFields: Field[];
    transitType?: TransitType;
}
export declare const PassFields: any;
