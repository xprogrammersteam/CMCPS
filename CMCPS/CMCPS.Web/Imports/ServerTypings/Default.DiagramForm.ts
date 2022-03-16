namespace CMCPS.Default {
    export interface DiagramForm {
        DiagramName: Serenity.StringEditor;
    }

    export class DiagramForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Diagram';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DiagramForm.init)  {
                DiagramForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DiagramForm, [
                    'DiagramName', w0
                ]);
            }
        }
    }
}

