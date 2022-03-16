namespace CMCPS.Modules.Common.Reporting {
    export interface ReportHeadingRow {
        Id?: number;
        CompanyName?: string;
        Department?: string;
        LogoLeft?: string;
        LogoRight?: string;
    }

    export namespace ReportHeadingRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Common.ReportHeading';
        export const lookupKey = 'Common.Reporting';

        export function getLookup(): Q.Lookup<ReportHeadingRow> {
            return Q.getLookup<ReportHeadingRow>('Common.Reporting');
        }

        export declare const enum Fields {
            Id = "Id",
            CompanyName = "CompanyName",
            Department = "Department",
            LogoLeft = "LogoLeft",
            LogoRight = "LogoRight"
        }
    }
}

