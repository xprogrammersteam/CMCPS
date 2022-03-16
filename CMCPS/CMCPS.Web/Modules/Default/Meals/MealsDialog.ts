
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class MealsDialog extends Serenity.EntityDialog<MealsRow, any> {
        protected getFormKey() { return MealsForm.formKey; }
        protected getIdProperty() { return MealsRow.idProperty; }
        protected getLocalTextPrefix() { return MealsRow.localTextPrefix; }
        protected getNameProperty() { return MealsRow.nameProperty; }
        protected getService() { return MealsService.baseUrl; }

        protected form = new MealsForm(this.idPrefix);

    }
}