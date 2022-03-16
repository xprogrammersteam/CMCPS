
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class FurtherPlanGrid extends Serenity.EntityGrid<FurtherPlanRow, any> {
        protected getColumnsKey() { return 'Default.FurtherPlan'; }
        protected getDialogType() { return FurtherPlanDialog; }
        protected getIdProperty() { return FurtherPlanRow.idProperty; }
        protected getLocalTextPrefix() { return FurtherPlanRow.localTextPrefix; }
        protected getService() { return FurtherPlanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}