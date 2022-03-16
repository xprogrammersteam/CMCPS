
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Immunization")]
    [BasedOnRow(typeof(Entities.ImmunizationRow), CheckNames = true)]
    public class ImmunizationForm
    {
        public String ImmunizationName { get; set; }
    }
}