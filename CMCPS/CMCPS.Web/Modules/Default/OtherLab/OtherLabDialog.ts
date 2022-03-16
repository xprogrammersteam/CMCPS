
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OtherLabDialog extends Serenity.EntityDialog<OtherLabRow, any> {
        protected getFormKey() { return OtherLabForm.formKey; }
        protected getIdProperty() { return OtherLabRow.idProperty; }
        protected getLocalTextPrefix() { return OtherLabRow.localTextPrefix; }
        protected getNameProperty() { return OtherLabRow.nameProperty; }
        protected getService() { return OtherLabService.baseUrl; }

        protected form = new OtherLabForm(this.idPrefix);

    }
}