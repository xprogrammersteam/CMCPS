namespace CMCPS.Default {
    export interface PathologyAndInvestigationDetailsForm {
        PathologyId: Serenity.LookupEditor;
        Value: Serenity.StringEditor;
    }

    export class PathologyAndInvestigationDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PathologyAndInvestigationDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PathologyAndInvestigationDetailsForm.init)  {
                PathologyAndInvestigationDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(PathologyAndInvestigationDetailsForm, [
                    'PathologyId', w0,
                    'Value', w1
                ]);
            }
        }
    }
}

