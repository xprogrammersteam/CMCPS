
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class FurtherPlanDialog extends Serenity.EntityDialog<FurtherPlanRow, any> {
        protected getFormKey() { return FurtherPlanForm.formKey; }
        protected getIdProperty() { return FurtherPlanRow.idProperty; }
        protected getLocalTextPrefix() { return FurtherPlanRow.localTextPrefix; }
        protected getNameProperty() { return FurtherPlanRow.nameProperty; }
        protected getService() { return FurtherPlanService.baseUrl; }

        protected form = new FurtherPlanForm(this.idPrefix);

    }
}