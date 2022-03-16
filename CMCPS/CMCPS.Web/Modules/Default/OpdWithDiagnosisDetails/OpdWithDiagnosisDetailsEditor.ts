/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace CMCPS.Default {
    
    @Serenity.Decorators.registerEditor()
    export class OpdWithDiagnosisDetailsEditor
        extends Common.GridEditorBase<OpdWithDiagnosisDetailsRow> {
        protected getColumnsKey() { return "Default.OpdWithDiagnosisDetails"; }
        protected getDialogType() { return OpdWithDiagnosisDetailsDialog; }
        protected getLocalTextPrefix() { return OpdWithDiagnosisDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add";
        }

        protected validateEntity(row: OpdWithDiagnosisDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;
                       row.Diagnosis = DiagnosisRow.getLookup().itemById[row.DiagnosisId].DiagnosisName;

            return true;
        }    
    }
}