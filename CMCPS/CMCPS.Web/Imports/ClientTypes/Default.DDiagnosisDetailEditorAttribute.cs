using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS.Default
{
    public partial class DDiagnosisDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CMCPS.Default.DDiagnosisDetailEditor";

        public DDiagnosisDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}

