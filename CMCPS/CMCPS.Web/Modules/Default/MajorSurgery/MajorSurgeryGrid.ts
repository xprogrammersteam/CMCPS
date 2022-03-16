
namespace CMC.Default {

    @Serenity.Decorators.registerClass()
    export class MajorSurgeryGrid extends Serenity.EntityGrid<MajorSurgeryRow, any> {
        protected getColumnsKey() { return 'Default.MajorSurgery'; }
        protected getDialogType() { return MajorSurgeryDialog; }
        protected getIdProperty() { return MajorSurgeryRow.idProperty; }
        protected getLocalTextPrefix() { return MajorSurgeryRow.localTextPrefix; }
        protected getService() { return MajorSurgeryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}