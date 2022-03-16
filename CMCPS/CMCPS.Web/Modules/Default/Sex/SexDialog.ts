
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class SexDialog extends Serenity.EntityDialog<SexRow, any> {
        protected getFormKey() { return SexForm.formKey; }
        protected getIdProperty() { return SexRow.idProperty; }
        protected getLocalTextPrefix() { return SexRow.localTextPrefix; }
        protected getNameProperty() { return SexRow.nameProperty; }
        protected getService() { return SexService.baseUrl; }

        protected form = new SexForm(this.idPrefix);

    }
}