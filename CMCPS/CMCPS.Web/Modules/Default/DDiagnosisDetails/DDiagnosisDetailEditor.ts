/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace CMCPS.Default {
    
    @Serenity.Decorators.registerEditor()
    export class DDiagnosisDetailEditor
        extends Common.GridEditorBase<DDiagnosisDetailsRow> {
        protected getColumnsKey() { return "Default.DDiagnosisDetails"; }
        protected getDialogType() { return DDiagnosisDetailsDialog; }
        protected getLocalTextPrefix() { return DDiagnosisDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add";
        }

        protected validateEntity(row: DDiagnosisDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;
                       row.Diagnosis = DiagnosisRow.getLookup().itemById[row.DiagnosisId].DiagnosisName;

            return true;
        }    
    }
}