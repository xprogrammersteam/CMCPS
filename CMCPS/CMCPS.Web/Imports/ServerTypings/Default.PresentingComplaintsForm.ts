namespace CMCPS.Default {
    export interface PresentingComplaintsForm {
        PComplaints: Serenity.StringEditor;
        Note: Serenity.StringEditor;
    }

    export class PresentingComplaintsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PresentingComplaints';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PresentingComplaintsForm.init)  {
                PresentingComplaintsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PresentingComplaintsForm, [
                    'PComplaints', w0,
                    'Note', w0
                ]);
            }
        }
    }
}

