/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CMCPS {

    @Serenity.Decorators.registerClass()
    export class InvestigationEditor extends Common.GridEditorBase<InvestigationRow> {
        protected getColumnsKey() { return "Default.Investigation"; }
        protected getDialogType() { return InvestigationDialog; }
        protected getLocalTextPrefix() { return InvestigationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.AdmissionId = Q.toId(row.AdmissionId);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.AdmissionId === row.AdmissionId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in order details!');
                return false;
            }

            //row.ProductName = ProductRow.getLookup().itemById[row.ProductID].ProductName;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
}