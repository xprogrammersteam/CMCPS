
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Medicine")]
    [BasedOnRow(typeof(Entities.MedicineRow), CheckNames = true)]
    public class MedicineForm
    {
        public String MedicineName { get; set; }
    }
}