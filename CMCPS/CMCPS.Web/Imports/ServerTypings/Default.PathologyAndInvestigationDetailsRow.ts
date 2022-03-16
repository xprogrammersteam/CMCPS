namespace CMCPS.Default {
    export interface PathologyAndInvestigationDetailsRow {
        Id?: number;
        InvestigationId?: number;
        PathologyId?: number;
        Value?: string;
        PathologyName?: string;
    }

    export namespace PathologyAndInvestigationDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'Default.PathologyAndInvestigationDetails';

        export declare const enum Fields {
            Id = "Id",
            InvestigationId = "InvestigationId",
            PathologyId = "PathologyId",
            Value = "Value",
            PathologyName = "PathologyName"
        }
    }
}

