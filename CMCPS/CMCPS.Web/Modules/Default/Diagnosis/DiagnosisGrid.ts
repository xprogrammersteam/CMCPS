
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DiagnosisGrid extends Serenity.EntityGrid<DiagnosisRow, any> {
        protected getColumnsKey() { return 'Default.Diagnosis'; }
        protected getDialogType() { return DiagnosisDialog; }
        protected getIdProperty() { return DiagnosisRow.idProperty; }
        protected getLocalTextPrefix() { return DiagnosisRow.localTextPrefix; }
        protected getService() { return DiagnosisService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}