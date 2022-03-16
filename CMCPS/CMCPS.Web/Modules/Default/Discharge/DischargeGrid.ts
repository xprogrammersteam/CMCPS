
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class DischargeGrid extends Serenity.EntityGrid<DischargeRow, any> {
        protected getColumnsKey() { return 'Default.Discharge'; }
        protected getDialogType() { return DischargeDialog; }
        protected getIdProperty() { return DischargeRow.idProperty; }
        protected getLocalTextPrefix() { return DischargeRow.localTextPrefix; }
        protected getService() { return DischargeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns() {
            var columns = super.getColumns();
            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            columns.splice(1, 0, {
                field: 'Print Discharge',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="Treatment Details">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {
                    CMCPS.Common.ReportHelper.execute({
                        reportKey: 'Default.Discharge',
                        params: {
                            DischargeID: item.DischargeId
                        }
                    });
                }
                else if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        CMCPS.Default.DischargeService.Delete({
                            EntityId: item.DischargeId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }
    }
}