/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace CMCPS.Default {
   
    @Serenity.Decorators.registerEditor()
    export class AdmissionPpDetailEditor
        extends Common.GridEditorBase<AdmissionPpDetailsRow> {
        protected getColumnsKey() { return "Default.AdmissionPpDetails"; }
        protected getDialogType() { return AdmissionPpDetailsDialog; }
        protected getLocalTextPrefix() { return AdmissionPpDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add";
        }

        protected validateEntity(row: AdmissionPpDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;
            row.SmokingId = AdmissionPpDetailsRow.getLookup().itemById[row.SmokingId].SmokingId;

            return true;
        }    
    }
}