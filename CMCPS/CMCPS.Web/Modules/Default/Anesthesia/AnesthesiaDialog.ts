
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class AnesthesiaDialog extends Serenity.EntityDialog<AnesthesiaRow, any> {
        protected getFormKey() { return AnesthesiaForm.formKey; }
        protected getIdProperty() { return AnesthesiaRow.idProperty; }
        protected getLocalTextPrefix() { return AnesthesiaRow.localTextPrefix; }
        protected getNameProperty() { return AnesthesiaRow.nameProperty; }
        protected getService() { return AnesthesiaService.baseUrl; }

        protected form = new AnesthesiaForm(this.idPrefix);

    }
}