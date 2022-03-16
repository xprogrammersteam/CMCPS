using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS.Default
{
    public partial class AdmissionCcDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CMCPS.Default.AdmissionCcDetailEditor";

        public AdmissionCcDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}

