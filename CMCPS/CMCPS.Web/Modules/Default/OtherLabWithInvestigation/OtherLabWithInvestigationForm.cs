
namespace CMCPS.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.OtherLabWithInvestigation")]
    [BasedOnRow(typeof(Entities.OtherLabWithInvestigationRow), CheckNames = true)]
    public class OtherLabWithInvestigationForm
    {
        public Int32 OtherLabId { get; set; }
        public String Value { get; set; }
    }
}