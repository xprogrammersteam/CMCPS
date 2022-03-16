namespace CMCPS.Default {
    export interface MajorSurgeryForm {
        MajorSurgeryName: Serenity.StringEditor;
    }

    export class MajorSurgeryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.MajorSurgery';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MajorSurgeryForm.init)  {
                MajorSurgeryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MajorSurgeryForm, [
                    'MajorSurgeryName', w0
                ]);
            }
        }
    }
}

