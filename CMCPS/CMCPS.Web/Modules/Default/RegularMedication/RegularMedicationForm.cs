
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.RegularMedication")]
    [BasedOnRow(typeof(Entities.RegularMedicationRow), CheckNames = true)]
    public class RegularMedicationForm
    {
        public String RegularMedicationName { get; set; }
    }
}