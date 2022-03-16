
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class BedDialog extends Serenity.EntityDialog<BedRow, any> {
        protected getFormKey() { return BedForm.formKey; }
        protected getIdProperty() { return BedRow.idProperty; }
        protected getLocalTextPrefix() { return BedRow.localTextPrefix; }
        protected getNameProperty() { return BedRow.nameProperty; }
        protected getService() { return BedService.baseUrl; }

        protected form = new BedForm(this.idPrefix);

    }
}