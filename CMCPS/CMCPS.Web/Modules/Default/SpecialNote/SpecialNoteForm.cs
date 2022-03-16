
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.SpecialNote")]
    [BasedOnRow(typeof(Entities.SpecialNoteRow), CheckNames = true)]
    public class SpecialNoteForm
    {
        public String SpecialNoteName { get; set; }
    }
}