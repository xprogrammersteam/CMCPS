namespace CMCPS.Default {
    export interface BloodGroupsForm {
        BloodGroup: Serenity.StringEditor;
    }

    export class BloodGroupsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BloodGroups';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BloodGroupsForm.init)  {
                BloodGroupsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BloodGroupsForm, [
                    'BloodGroup', w0
                ]);
            }
        }
    }
}

