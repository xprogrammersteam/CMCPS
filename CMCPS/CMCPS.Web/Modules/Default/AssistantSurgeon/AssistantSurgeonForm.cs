
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.AssistantSurgeon")]
    [BasedOnRow(typeof(Entities.AssistantSurgeonRow), CheckNames = true)]
    public class AssistantSurgeonForm
    {
        public String AssistantSurgeonName { get; set; }
    }
}