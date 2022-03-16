
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class IndicationDialog extends Serenity.EntityDialog<IndicationRow, any> {
        protected getFormKey() { return IndicationForm.formKey; }
        protected getIdProperty() { return IndicationRow.idProperty; }
        protected getLocalTextPrefix() { return IndicationRow.localTextPrefix; }
        protected getNameProperty() { return IndicationRow.nameProperty; }
        protected getService() { return IndicationService.baseUrl; }

        protected form = new IndicationForm(this.idPrefix);

    }
}