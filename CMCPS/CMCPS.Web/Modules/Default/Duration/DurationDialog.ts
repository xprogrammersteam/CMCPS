
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DurationDialog extends Serenity.EntityDialog<DurationRow, any> {
        protected getFormKey() { return DurationForm.formKey; }
        protected getIdProperty() { return DurationRow.idProperty; }
        protected getLocalTextPrefix() { return DurationRow.localTextPrefix; }
        protected getNameProperty() { return DurationRow.nameProperty; }
        protected getService() { return DurationService.baseUrl; }

        protected form = new DurationForm(this.idPrefix);

    }
}