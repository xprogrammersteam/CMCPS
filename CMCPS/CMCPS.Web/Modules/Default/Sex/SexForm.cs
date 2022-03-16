
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Sex")]
    [BasedOnRow(typeof(Entities.SexRow)/*, CheckNames = true*/)]
    public class SexForm
    {
        public String Sex { get; set; }
        public String Note { get; set; }
    }
}