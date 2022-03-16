namespace CMCPS {
    @Serenity.Decorators.registerEditor()
    export class LKNamePinNumber extends Serenity.LookupEditorBase<LKNamePinNumberOptions, any> {
        constructor(container: JQuery, opt?: LKNamePinNumberOptions) {
            super(container, opt);

            container.data("patientName", opt.PatientName);
            container.data("pinNumber", opt.PinNumber);
        }
        public getSelect2Options() {
            var selec2Options = super.getSelect2Options();

            selec2Options.formatResult = this.myFormatResult;
            selec2Options.formatSelection = this.myFormatSelection;

            return selec2Options;
        }
        protected myFormatSelection(item: Serenity.Select2Item): string {
            if (item === undefined)
                return null;

            var name = item.source[this.element.data("patientName")];
            var pin = item.source[this.element.data("pinNumber")];

            var title = "Name: " + name;
            title += " - " + pin;

            return "<div title='" + title + "'><b>" + name + "</b>&nbsp;-&nbsp;" + pin + "</div>";
        }
        protected myFormatResult(item: Serenity.Select2Item) {
            var name = item.source[this.element.data("patientName")];
            var pin = item.source[this.element.data("pinNumber")];

            var title = "Code: " + name;
            title += " - " + pin;

            var markup = '<div class="row">' +
                '<div class="col-xs-2" style="white-space: nowrap"><b>' + name + "</b>" + "</div>" +
                '<div class="col-xs-10"><small>' + pin + '</small></div>' +
                '</div>';

            // This for search on code and description
            item.text = name + " " + pin;

            return markup;
        }
    }

    export interface LKNamePinNumberOptions extends Serenity.LookupEditorOptions {
        PatientName: string;
        PinNumber: string;
    }
}