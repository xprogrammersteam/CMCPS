namespace CMCPS.Default {
    export interface AssistantSurgeonForm {
        AssistantSurgeonName: Serenity.StringEditor;
    }

    export class AssistantSurgeonForm extends Serenity.PrefixedContext {
        static formKey = 'Default.AssistantSurgeon';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssistantSurgeonForm.init)  {
                AssistantSurgeonForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AssistantSurgeonForm, [
                    'AssistantSurgeonName', w0
                ]);
            }
        }
    }
}

