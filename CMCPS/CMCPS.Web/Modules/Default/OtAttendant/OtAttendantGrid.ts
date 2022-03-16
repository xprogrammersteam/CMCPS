
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OtAttendantGrid extends Serenity.EntityGrid<OtAttendantRow, any> {
        protected getColumnsKey() { return 'Default.OtAttendant'; }
        protected getDialogType() { return OtAttendantDialog; }
        protected getIdProperty() { return OtAttendantRow.idProperty; }
        protected getLocalTextPrefix() { return OtAttendantRow.localTextPrefix; }
        protected getService() { return OtAttendantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}