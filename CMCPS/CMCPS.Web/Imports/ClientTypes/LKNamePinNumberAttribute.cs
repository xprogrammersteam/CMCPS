using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace CMCPS
{
    public partial class LKNamePinNumberAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "CMCPS.LKNamePinNumber";

        public LKNamePinNumberAttribute()
            : base(Key)
        {
        }

        public String PatientName
        {
            get { return GetOption<String>("PatientName"); }
            set { SetOption("PatientName", value); }
        }

        public String PinNumber
        {
            get { return GetOption<String>("PinNumber"); }
            set { SetOption("PinNumber", value); }
        }
    }
}

