
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class PostNatalGrid extends Serenity.EntityGrid<PostNatalRow, any> {
        protected getColumnsKey() { return 'Default.PostNatal'; }
        protected getDialogType() { return PostNatalDialog; }
        protected getIdProperty() { return PostNatalRow.idProperty; }
        protected getLocalTextPrefix() { return PostNatalRow.localTextPrefix; }
        protected getService() { return PostNatalService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}