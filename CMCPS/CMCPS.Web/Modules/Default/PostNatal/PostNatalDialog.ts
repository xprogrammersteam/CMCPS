
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PostNatalDialog extends Serenity.EntityDialog<PostNatalRow, any> {
        protected getFormKey() { return PostNatalForm.formKey; }
        protected getIdProperty() { return PostNatalRow.idProperty; }
        protected getLocalTextPrefix() { return PostNatalRow.localTextPrefix; }
        protected getNameProperty() { return PostNatalRow.nameProperty; }
        protected getService() { return PostNatalService.baseUrl; }

        protected form = new PostNatalForm(this.idPrefix);

    }
}