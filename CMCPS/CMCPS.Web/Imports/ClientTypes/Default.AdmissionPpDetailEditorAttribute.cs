using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS.Default
{
    public partial class AdmissionPpDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CMCPS.Default.AdmissionPpDetailEditor";

        public AdmissionPpDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}

