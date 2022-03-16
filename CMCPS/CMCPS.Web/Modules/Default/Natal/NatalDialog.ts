
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class NatalDialog extends Serenity.EntityDialog<NatalRow, any> {
        protected getFormKey() { return NatalForm.formKey; }
        protected getIdProperty() { return NatalRow.idProperty; }
        protected getLocalTextPrefix() { return NatalRow.localTextPrefix; }
        protected getNameProperty() { return NatalRow.nameProperty; }
        protected getService() { return NatalService.baseUrl; }

        protected form = new NatalForm(this.idPrefix);

    }
}