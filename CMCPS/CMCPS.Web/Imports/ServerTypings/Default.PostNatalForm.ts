namespace CMCPS.Default {
    export interface PostNatalForm {
        PostNatalName: Serenity.StringEditor;
    }

    export class PostNatalForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PostNatal';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PostNatalForm.init)  {
                PostNatalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PostNatalForm, [
                    'PostNatalName', w0
                ]);
            }
        }
    }
}

