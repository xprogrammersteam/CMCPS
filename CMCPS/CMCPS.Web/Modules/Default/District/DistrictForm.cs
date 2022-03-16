
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.District")]
    [BasedOnRow(typeof(Entities.DistrictRow), CheckNames = true)]
    public class DistrictForm
    {
        public String DistrictName { get; set; }
    }
}