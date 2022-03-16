
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BirthHistoryDialog extends Serenity.EntityDialog<BirthHistoryRow, any> {
        protected getFormKey() { return BirthHistoryForm.formKey; }
        protected getIdProperty() { return BirthHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return BirthHistoryRow.localTextPrefix; }
        protected getNameProperty() { return BirthHistoryRow.nameProperty; }
        protected getService() { return BirthHistoryService.baseUrl; }

        protected form = new BirthHistoryForm(this.idPrefix);

    }
}