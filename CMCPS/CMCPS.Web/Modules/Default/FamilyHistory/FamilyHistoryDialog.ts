
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class FamilyHistoryDialog extends Serenity.EntityDialog<FamilyHistoryRow, any> {
        protected getFormKey() { return FamilyHistoryForm.formKey; }
        protected getIdProperty() { return FamilyHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return FamilyHistoryRow.localTextPrefix; }
        protected getNameProperty() { return FamilyHistoryRow.nameProperty; }
        protected getService() { return FamilyHistoryService.baseUrl; }

        protected form = new FamilyHistoryForm(this.idPrefix);

    }
}