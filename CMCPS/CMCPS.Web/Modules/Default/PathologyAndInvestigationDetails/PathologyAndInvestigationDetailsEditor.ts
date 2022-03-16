///<reference path="../../Common/Helpers/GridEditorBase.ts" />
namespace CMCPS.Default {
   
    @Serenity.Decorators.registerEditor()
    export class PathologyAndInvestigationDetailsEditor
        extends Common.GridEditorBase<PathologyAndInvestigationDetailsRow> {
        protected getColumnsKey() { return "Default.PathologyAndInvestigationDetails"; }
        protected getDialogType() { return PathologyAndInvestigationDetailsDialog; }
        protected getLocalTextPrefix() { return PathologyAndInvestigationDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add";
        }
        protected validateEntity(row: PathologyAndInvestigationDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.PathologyName = PathologyRow.getLookup().itemById[row.PathologyId].PathologyName;           

            return true;
        }    
    }
}