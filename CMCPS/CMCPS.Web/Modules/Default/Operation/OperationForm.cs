
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Operation")]
    [BasedOnRow(typeof(Entities.OperationRow), CheckNames = true)]
    public class OperationForm
    {
        public String OperationName { get; set; }
        [TextAreaEditor(Rows =15)]
        public String Findings { get; set; }
        [TextAreaEditor(Rows = 15)]
        public String Procedures { get; set; }
    }
}