namespace CMCPS.Default {
    export interface PathologyForm {
        PathologyName: Serenity.StringEditor;
    }

    export class PathologyForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Pathology';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PathologyForm.init)  {
                PathologyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PathologyForm, [
                    'PathologyName', w0
                ]);
            }
        }
    }
}

