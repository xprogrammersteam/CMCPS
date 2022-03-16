///<reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PathologyAndInvestigationDetailsDialog extends
        Common.GridEditorDialog<PathologyAndInvestigationDetailsRow> {
        protected getFormKey() { return PathologyAndInvestigationDetailsForm.formKey; }
        protected getNameProperty() { return PathologyAndInvestigationDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return PathologyAndInvestigationDetailsRow.localTextPrefix; }

        protected form: PathologyAndInvestigationDetailsForm;

        constructor() {
            super();
            this.form = new PathologyAndInvestigationDetailsForm(this.idPrefix);
        }
    }
}