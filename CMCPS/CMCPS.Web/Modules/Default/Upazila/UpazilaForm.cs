
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Upazila")]
    [BasedOnRow(typeof(Entities.UpazilaRow), CheckNames = true)]
    public class UpazilaForm
    {
        
        public Int32 DistrictId { get; set; }
        public String UpazilaName { get; set; }
    }
}