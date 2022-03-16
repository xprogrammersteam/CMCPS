
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AdmissionPpDetailsDialog extends Serenity.EntityDialog<AdmissionPpDetailsRow, any> {
        protected getFormKey() { return AdmissionPpDetailsForm.formKey; }
        protected getIdProperty() { return AdmissionPpDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return AdmissionPpDetailsRow.localTextPrefix; }
        protected getService() { return AdmissionPpDetailsService.baseUrl; }

        protected form = new AdmissionPpDetailsForm(this.idPrefix);

    }
}