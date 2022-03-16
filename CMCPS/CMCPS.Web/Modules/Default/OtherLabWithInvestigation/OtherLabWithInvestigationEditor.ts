/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace CMCPS.Default {
   
    @Serenity.Decorators.registerEditor()
    export class OtherLabWithInvestigationEditor
        extends Common.GridEditorBase<OtherLabWithInvestigationRow> {
        protected getColumnsKey() { return "Default.OtherLabWithInvestigation"; }
        protected getDialogType() { return OtherLabWithInvestigationDialog; }
        protected getLocalTextPrefix() { return OtherLabWithInvestigationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add";
        }
        protected validateEntity(row: OtherLabWithInvestigationRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.OtherLabName = OtherLabRow.getLookup().itemById[row.OtherLabId].Name;           

            return true;
        }    
    }
}