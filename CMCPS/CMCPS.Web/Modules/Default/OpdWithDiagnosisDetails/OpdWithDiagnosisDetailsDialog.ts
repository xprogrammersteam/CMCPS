/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OpdWithDiagnosisDetailsDialog extends
        Common.GridEditorDialog<OpdWithDiagnosisDetailsRow> {
        protected getFormKey() { return OpdWithDiagnosisDetailsForm.formKey; }
        protected getNameProperty() { return OpdWithDiagnosisDetailsRow.nameProperty; }
        protected getLocalTextPrefix() { return OpdWithDiagnosisDetailsRow.localTextPrefix; }

        protected form: OpdWithDiagnosisDetailsForm;

        constructor() {
            super();
            this.form = new OpdWithDiagnosisDetailsForm(this.idPrefix);
        }
    }
}