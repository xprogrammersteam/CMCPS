/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DDiagnosisDetailsDialog extends
        Common.GridEditorDialog<DDiagnosisDetailsRow> {
        protected getFormKey() { return DDiagnosisDetailsForm.formKey; }
        protected getNameProperty() { return DDiagnosisDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return DDiagnosisDetailsRow.localTextPrefix; }

        protected form: DDiagnosisDetailsForm;

        constructor() {
            super();
            this.form = new DDiagnosisDetailsForm(this.idPrefix);
        }
    }
}