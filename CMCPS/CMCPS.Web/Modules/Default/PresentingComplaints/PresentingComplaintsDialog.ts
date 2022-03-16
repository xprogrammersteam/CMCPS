
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PresentingComplaintsDialog extends Serenity.EntityDialog<PresentingComplaintsRow, any> {
        protected getFormKey() { return PresentingComplaintsForm.formKey; }
        protected getIdProperty() { return PresentingComplaintsRow.idProperty; }
        protected getLocalTextPrefix() { return PresentingComplaintsRow.localTextPrefix; }
        protected getNameProperty() { return PresentingComplaintsRow.nameProperty; }
        protected getService() { return PresentingComplaintsService.baseUrl; }

        protected form = new PresentingComplaintsForm(this.idPrefix);

    }
}