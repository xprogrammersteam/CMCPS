
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class ImmunizationHistoryDialog extends Serenity.EntityDialog<ImmunizationHistoryRow, any> {
        protected getFormKey() { return ImmunizationHistoryForm.formKey; }
        protected getIdProperty() { return ImmunizationHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return ImmunizationHistoryRow.localTextPrefix; }
        protected getService() { return ImmunizationHistoryService.baseUrl; }

        protected form = new ImmunizationHistoryForm(this.idPrefix);

    }
}