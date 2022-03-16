
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PercussionDialog extends Serenity.EntityDialog<PercussionRow, any> {
        protected getFormKey() { return PercussionForm.formKey; }
        protected getIdProperty() { return PercussionRow.idProperty; }
        protected getLocalTextPrefix() { return PercussionRow.localTextPrefix; }
        protected getNameProperty() { return PercussionRow.nameProperty; }
        protected getService() { return PercussionService.baseUrl; }

        protected form = new PercussionForm(this.idPrefix);

    }
}