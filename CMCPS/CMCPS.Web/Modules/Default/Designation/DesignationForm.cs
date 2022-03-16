
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Designation")]
    [BasedOnRow(typeof(Entities.DesignationRow), CheckNames = true)]
    public class DesignationForm
    {
        public String DesignationName { get; set; }
    }
}