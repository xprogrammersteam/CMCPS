
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ComplicationNote")]
    [BasedOnRow(typeof(Entities.ComplicationNoteRow), CheckNames = true)]
    public class ComplicationNoteForm
    {
        public String ComplicationNote { get; set; }
    }
}