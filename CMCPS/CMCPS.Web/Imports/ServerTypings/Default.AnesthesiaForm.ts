namespace CMCPS.Default {
    export interface AnesthesiaForm {
        AnesthesiaName: Serenity.StringEditor;
    }

    export class AnesthesiaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Anesthesia';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnesthesiaForm.init)  {
                AnesthesiaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AnesthesiaForm, [
                    'AnesthesiaName', w0
                ]);
            }
        }
    }
}

