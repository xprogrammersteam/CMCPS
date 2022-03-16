using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS.Default
{
    public partial class PatientListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CMCPS.Default.PatientListFormatter";

        public PatientListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

