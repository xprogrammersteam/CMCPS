namespace CMCPS {
    @Serenity.Decorators.element("<input type='number' min='0' max='23'/>")
    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly])
    export class EditTimeEditor extends Serenity.Widget<EditTimeEditorOptions> {
        constructor(input: JQuery, opt: EditTimeEditorOptions) {
            super(input, opt);

            input.addClass('hours');

            let spanStyle = 'style="margin-left: 6px; min-width: 10px; max-width: 10px;"';
            let stdClass = 'editor s-EditTimeEditor ';
            let colon1 = $('<span ' + spanStyle + ' />').text(':').addClass(stdClass + 'colon1').insertAfter(input);
            let minutes = $('<input type="number" min="0" max="59"/>').addClass(stdClass + 'minutes').addClass('flexify').insertAfter(colon1);
            if (opt.showSeconds) {
                let colon2 = $('<span ' + spanStyle + ' />').text(':').addClass(stdClass + 'colon2').insertAfter(minutes);
                $('<input type="number" min="0" max="59"/>').addClass(stdClass + 'seconds').addClass('flexify').insertAfter(colon2);
            }
        }

        // Implement get and set
        public get value(): string {
            let hours = this.element.val();
            hours = ("0" + hours).slice(-2);
            let mins = this.element.siblings('.minutes').val();
            mins = ("0" + mins).slice(-2);

            let retVal = hours + ':' + mins;

            if (this.options.showSeconds) {
                let secs = this.element.siblings('.seconds').val()
                secs = ("0" + secs).slice(-2);
                retVal += ':' + secs;
            }

            return retVal;
        }

        public set value(value: string) {
            if (!value)
                return;
            let vals = value.split(':');
            this.element.val(vals[0]);
            this.element.siblings('.minutes').val(vals[1]);
            if (this.options.showSeconds)
                this.element.siblings('.seconds').val(vals[2]);
        }

        public getEditValue(property, target) {
            target[property.name] = this.value;
        }

        public setEditValue(source, property) {
            this.value = source[property.name];
        }

        // Implement get and set read-only
        get_readOnly(): boolean {
            return !(this.element.attr('readonly') == null);
        }

        set_readOnly(value: boolean): void {
            if (value) {
                this.element.attr('readonly', 'readonly').addClass('readonly');
                this.element.nextAll('.s-EditTimeEditor:not(span)').attr('readonly', 'readonly').addClass('readonly');
            }
            else {
                this.element.removeAttr('readonly').removeClass('readonly');
                this.element.nextAll('.s-EditTimeEditor:not(span)').removeAttr('readonly').removeClass('readonly');
            }
        }
    }

    export interface EditTimeEditorOptions {
        showSeconds?: boolean;
    }
}