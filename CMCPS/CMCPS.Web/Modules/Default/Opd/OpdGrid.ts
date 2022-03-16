
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    export class OpdGrid extends Serenity.EntityGrid<OpdRow, any> {
        protected getColumnsKey() { return 'Default.Opd'; }
        protected getDialogType() { return OpdDialog; }
        protected getIdProperty() { return OpdRow.idProperty; }
        protected getLocalTextPrefix() { return OpdRow.localTextPrefix; }
        protected getService() { return OpdService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                grid: this,               
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Opd/ListExcel',
                separator: true
            }));

            buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                grid: this,
                reportTitle: "Outdoor Patient's Summary Report",
                fileName: "Outdoor_Patient's_Summary_Report",
                separator: true,

                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
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
                field: 'Print Opd',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="Opd Details">' +
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
                        reportKey: 'Default.Opd',
                        params: {
                            OpdId: item.OpdId
                        }
                    });
                }
                else if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        CMCPS.Default.OpdService.Delete({
                            EntityId: item.OpdId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }
    }
}