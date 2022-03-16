
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AntenatalDialog extends Serenity.EntityDialog<AntenatalRow, any> {
        protected getFormKey() { return AntenatalForm.formKey; }
        protected getIdProperty() { return AntenatalRow.idProperty; }
        protected getLocalTextPrefix() { return AntenatalRow.localTextPrefix; }
        protected getNameProperty() { return AntenatalRow.nameProperty; }
        protected getService() { return AntenatalService.baseUrl; }

        protected form = new AntenatalForm(this.idPrefix);

    }
}