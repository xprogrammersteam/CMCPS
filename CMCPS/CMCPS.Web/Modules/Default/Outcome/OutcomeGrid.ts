
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OutcomeGrid extends Serenity.EntityGrid<OutcomeRow, any> {
        protected getColumnsKey() { return 'Default.Outcome'; }
        protected getDialogType() { return OutcomeDialog; }
        protected getIdProperty() { return OutcomeRow.idProperty; }
        protected getLocalTextPrefix() { return OutcomeRow.localTextPrefix; }
        protected getService() { return OutcomeService.baseUrl; }

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
                field: 'Print Outcome',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="Outcome Details">' +
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
                        reportKey: 'Default.Outcome',
                        params: {
                            OutcomeID: item.OutcomeId
                        }
                    });
                }
                else if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        CMCPS.Default.OutcomeService.Delete({
                            EntityId: item.OutcomeId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }
    }
}