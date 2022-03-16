
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PercussionHistoryDialog extends Serenity.EntityDialog<PercussionHistoryRow, any> {
        protected getFormKey() { return PercussionHistoryForm.formKey; }
        protected getIdProperty() { return PercussionHistoryRow.idProperty; }
        protected getLocalTextPrefix() { return PercussionHistoryRow.localTextPrefix; }
        protected getService() { return PercussionHistoryService.baseUrl; }

        protected form = new PercussionHistoryForm(this.idPrefix);

    }
}