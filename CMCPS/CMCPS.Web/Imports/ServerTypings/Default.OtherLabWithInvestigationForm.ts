namespace CMCPS.Default {
    export interface OtherLabWithInvestigationForm {
        OtherLabId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
    }

    export class OtherLabWithInvestigationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OtherLabWithInvestigation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OtherLabWithInvestigationForm.init)  {
                OtherLabWithInvestigationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(OtherLabWithInvestigationForm, [
                    'OtherLabId', w0,
                    'Value', w1
                ]);
            }
        }
    }
}

