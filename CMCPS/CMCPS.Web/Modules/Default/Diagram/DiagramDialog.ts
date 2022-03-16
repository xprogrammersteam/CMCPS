
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DiagramDialog extends Serenity.EntityDialog<DiagramRow, any> {
        protected getFormKey() { return DiagramForm.formKey; }
        protected getIdProperty() { return DiagramRow.idProperty; }
        protected getLocalTextPrefix() { return DiagramRow.localTextPrefix; }
        protected getNameProperty() { return DiagramRow.nameProperty; }
        protected getService() { return DiagramService.baseUrl; }

        protected form = new DiagramForm(this.idPrefix);

    }
}