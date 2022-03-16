
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.PNote")]
    [BasedOnRow(typeof(Entities.PNoteRow), CheckNames = true)]
    public class PNoteForm
    {
        public String NoteName { get; set; }
    }
}