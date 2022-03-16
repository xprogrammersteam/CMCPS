
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.BreathSound")]
    [BasedOnRow(typeof(Entities.BreathSoundRow), CheckNames = true)]
    public class BreathSoundForm
    {
        public String BreathSoundName { get; set; }
    }
}