
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.BloodGroups")]
    [BasedOnRow(typeof(Entities.BloodGroupsRow), CheckNames = true)]
    public class BloodGroupsForm
    {
        public String BloodGroup { get; set; }
    }
}