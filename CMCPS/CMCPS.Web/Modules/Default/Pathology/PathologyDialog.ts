
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PathologyDialog extends Serenity.EntityDialog<PathologyRow, any> {
        protected getFormKey() { return PathologyForm.formKey; }
        protected getIdProperty() { return PathologyRow.idProperty; }
        protected getLocalTextPrefix() { return PathologyRow.localTextPrefix; }
        protected getNameProperty() { return PathologyRow.nameProperty; }
        protected getService() { return PathologyService.baseUrl; }

        protected form = new PathologyForm(this.idPrefix);

    }
}