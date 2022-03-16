
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class ImagesGrid extends Serenity.EntityGrid<ImagesRow, any> {
        protected getColumnsKey() { return 'Default.Images'; }
        protected getDialogType() { return ImagesDialog; }
        protected getIdProperty() { return ImagesRow.idProperty; }
        protected getLocalTextPrefix() { return ImagesRow.localTextPrefix; }
        protected getService() { return ImagesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}