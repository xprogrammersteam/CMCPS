/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AdmissionCcDetailsDialog extends
        Common.GridEditorDialog<AdmissionCcDetailsRow> {
        protected getFormKey() { return AdmissionCcDetailsForm.formKey; }
        protected getNameProperty() { return AdmissionCcDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return AdmissionCcDetailsRow.localTextPrefix; }

        protected form: AdmissionCcDetailsForm;

        constructor() {
            super();
            this.form = new AdmissionCcDetailsForm(this.idPrefix);
        }
    }
}