using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS
{
    public partial class EditTimeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "CMCPS.EditTimeEditor";

        public EditTimeEditorAttribute()
            : base(Key)
        {
        }

        public Boolean ShowSeconds
        {
            get { return GetOption<Boolean>("showSeconds"); }
            set { SetOption("showSeconds", value); }
        }
    }
}

