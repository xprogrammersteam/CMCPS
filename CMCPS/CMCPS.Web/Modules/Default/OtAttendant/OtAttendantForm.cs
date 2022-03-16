
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OtAttendant")]
    [BasedOnRow(typeof(Entities.OtAttendantRow), CheckNames = true)]
    public class OtAttendantForm
    {
        public String OtAttendantName { get; set; }
    }
}