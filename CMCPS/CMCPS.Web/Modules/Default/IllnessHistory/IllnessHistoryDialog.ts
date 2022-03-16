
namespace CMC.Default {

    @Serenity.Decorators.registerClass()
    export class IllnessHistoryDialog extends Serenity.EntityDialog<IllnessHistoryRow, any> {
        protected getFormKey() { return IllnessHistoryForm.formKey; }
        protected getIdProperty() { return IllnessHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return IllnessHistoryRow.localTextPrefix; }
        protected getService() { return IllnessHistoryService.baseUrl; }

        protected form = new IllnessHistoryForm(this.idPrefix);

    }
}