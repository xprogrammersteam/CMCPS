
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class MealsGrid extends Serenity.EntityGrid<MealsRow, any> {
        protected getColumnsKey() { return 'Default.Meals'; }
        protected getDialogType() { return MealsDialog; }
        protected getIdProperty() { return MealsRow.idProperty; }
        protected getLocalTextPrefix() { return MealsRow.localTextPrefix; }
        protected getService() { return MealsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}