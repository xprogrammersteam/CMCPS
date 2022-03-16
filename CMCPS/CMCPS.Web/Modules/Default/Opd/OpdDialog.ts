
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OpdDialog extends Serenity.EntityDialog<OpdRow, any> {
        protected getFormKey() { return OpdForm.formKey; }
        protected getIdProperty() { return OpdRow.idProperty; }
        protected getLocalTextPrefix() { return OpdRow.localTextPrefix; }
        protected getNameProperty() { return OpdRow.nameProperty; }
        protected getService() { return OpdService.baseUrl; }

        protected form = new OpdForm(this.idPrefix);
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Opd Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Opd',
                getParams: () => ({
                    OpdId: this.get_entityId()
                })
            }));

            return buttons;
        }
        protected updateInterface() {
            super.updateInterface();
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }
    }
}