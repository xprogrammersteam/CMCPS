
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PositionDialog extends Serenity.EntityDialog<PositionRow, any> {
        protected getFormKey() { return PositionForm.formKey; }
        protected getIdProperty() { return PositionRow.idProperty; }
        protected getLocalTextPrefix() { return PositionRow.localTextPrefix; }
        protected getNameProperty() { return PositionRow.nameProperty; }
        protected getService() { return PositionService.baseUrl; }

        protected form = new PositionForm(this.idPrefix);

    }
}