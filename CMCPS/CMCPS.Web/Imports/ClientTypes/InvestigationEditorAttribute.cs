using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS
{
    public partial class InvestigationEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CMCPS.InvestigationEditor";

        public InvestigationEditorAttribute()
            : base(Key)
        {
        }
    }
}

