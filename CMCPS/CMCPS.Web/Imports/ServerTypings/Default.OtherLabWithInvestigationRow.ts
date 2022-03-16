namespace CMCPS.Default {
    export interface OtherLabWithInvestigationRow {
        Id?: number;
        InvestigationId?: number;
        OtherLabId?: number;
        Value?: string;
        OtherLabName?: string;
    }

    export namespace OtherLabWithInvestigationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'Default.OtherLabWithInvestigation';

        export declare const enum Fields {
            Id = "Id",
            InvestigationId = "InvestigationId",
            OtherLabId = "OtherLabId",
            Value = "Value",
            OtherLabName = "OtherLabName"
        }
    }
}

