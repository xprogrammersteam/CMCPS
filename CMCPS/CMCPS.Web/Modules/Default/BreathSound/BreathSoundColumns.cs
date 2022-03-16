
namespace CMCPS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.BreathSound")]
    [BasedOnRow(typeof(Entities.BreathSoundRow), CheckNames = true)]
    public class BreathSoundColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BreathSoundId { get; set; }
        [EditLink]
        public String BreathSoundName { get; set; }
    }
}