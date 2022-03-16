using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS.Default
{
    public partial class BirthHistoryListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "CMCPS.Default.BirthHistoryListFormatter";

        public BirthHistoryListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

