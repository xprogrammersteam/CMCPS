
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class AdmissionGrid extends Serenity.EntityGrid<AdmissionRow, any> {
        protected getColumnsKey() { return 'Default.Admission'; }
        protected getDialogType() { return AdmissionDialog; }
        protected getIdProperty() { return AdmissionRow.idProperty; }
        protected getLocalTextPrefix() { return AdmissionRow.localTextPrefix; }
        protected getService() { return AdmissionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        //getSlickOptions() {
        //    var opt = super.getSlickOptions();
        //    //opt.rowHeight = 36;
        //    opt.defaultColumnWidth = 100;
        //    return opt;
        //}
        //Export To Excel & PDF
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(CMCPS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Admission/ListExcel',
                separator: true
            }));

            buttons.push(CMCPS.Common.PdfExportHelper.createToolButton({
                grid: this,
                reportTitle: "Patient's Summary Report",
                fileName: "Patient's_Summary_Report",
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
                field: 'Print Admission',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="Admission Details">' +
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
                        reportKey: 'Default.Admission',
                        params: {
                            AdmissionID: item.AdmissionId
                        }
                    });
                }
                else if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        CMCPS.Default.AdmissionService.Delete({
                            EntityId: item.AdmissionId,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
            }
        }
    }
}