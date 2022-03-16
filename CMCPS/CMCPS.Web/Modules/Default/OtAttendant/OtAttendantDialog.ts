
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OtAttendantDialog extends Serenity.EntityDialog<OtAttendantRow, any> {
        protected getFormKey() { return OtAttendantForm.formKey; }
        protected getIdProperty() { return OtAttendantRow.idProperty; }
        protected getLocalTextPrefix() { return OtAttendantRow.localTextPrefix; }
        protected getNameProperty() { return OtAttendantRow.nameProperty; }
        protected getService() { return OtAttendantService.baseUrl; }

        protected form = new OtAttendantForm(this.idPrefix);

    }
}