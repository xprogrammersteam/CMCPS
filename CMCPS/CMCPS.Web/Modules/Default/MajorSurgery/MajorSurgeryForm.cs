
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.MajorSurgery")]
    [BasedOnRow(typeof(Entities.MajorSurgeryRow), CheckNames = true)]
    public class MajorSurgeryForm
    {
        public String MajorSurgeryName { get; set; }
    }
}