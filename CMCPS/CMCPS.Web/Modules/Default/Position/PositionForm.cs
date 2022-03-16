
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Position")]
    [BasedOnRow(typeof(Entities.PositionRow), CheckNames = true)]
    public class PositionForm
    {
        public String PositionName { get; set; }
    }
}