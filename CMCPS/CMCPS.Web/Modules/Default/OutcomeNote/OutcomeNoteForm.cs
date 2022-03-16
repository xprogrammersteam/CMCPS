
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.OutcomeNote")]
    [BasedOnRow(typeof(Entities.OutcomeNoteRow), CheckNames = true)]
    public class OutcomeNoteForm
    {
        public String Outcome { get; set; }
    }
}