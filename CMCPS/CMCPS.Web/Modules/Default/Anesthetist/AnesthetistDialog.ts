
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AnesthetistDialog extends Serenity.EntityDialog<AnesthetistRow, any> {
        protected getFormKey() { return AnesthetistForm.formKey; }
        protected getIdProperty() { return AnesthetistRow.idProperty; }
        protected getLocalTextPrefix() { return AnesthetistRow.localTextPrefix; }
        protected getNameProperty() { return AnesthetistRow.nameProperty; }
        protected getService() { return AnesthetistService.baseUrl; }

        protected form = new AnesthetistForm(this.idPrefix);

    }
}