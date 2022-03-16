/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace CMCPS.Default {
   
    @Serenity.Decorators.registerEditor()
    export class AdmissionCcDetailEditor
        extends Common.GridEditorBase<AdmissionCcDetailsRow> {
        protected getColumnsKey() { return "Default.AdmissionCcDetails"; }
        protected getDialogType() { return AdmissionCcDetailsDialog; }
        protected getLocalTextPrefix() { return AdmissionCcDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add";
        }

        protected validateEntity(row: AdmissionCcDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.PComplaints = PresentingComplaintsRow.getLookup().itemById[row.PrComplaintsId].PComplaints;

            return true;
        }    
    }
}