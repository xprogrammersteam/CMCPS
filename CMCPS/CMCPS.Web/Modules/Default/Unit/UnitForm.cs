
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Unit")]
    [BasedOnRow(typeof(Entities.UnitRow), CheckNames = true)]
    public class UnitForm
    {
        public String UnitNumber { get; set; }
        public String Note { get; set; }
    }
}