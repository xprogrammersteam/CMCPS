
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.PresentingComplaints")]
    [BasedOnRow(typeof(Entities.PresentingComplaintsRow), CheckNames = true)]
    public class PresentingComplaintsForm
    {
        public String PComplaints { get; set; }
        public String Note { get; set; }
    }
}