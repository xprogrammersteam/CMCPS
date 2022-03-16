/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OtherLabWithInvestigationDialog extends
        Common.GridEditorDialog<OtherLabWithInvestigationRow> {
        protected getFormKey() { return OtherLabWithInvestigationForm.formKey; }
        protected getNameProperty() { return OtherLabWithInvestigationRow.nameProperty; }
        protected getLocalTextPrefix() { return OtherLabWithInvestigationRow.localTextPrefix; }

        protected form: OtherLabWithInvestigationForm;

        constructor() {
            super();
            this.form = new OtherLabWithInvestigationForm(this.idPrefix);
        }
    }
}