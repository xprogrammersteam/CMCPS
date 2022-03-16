
namespace CMCPS.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.PathologyAndInvestigationDetails")]
    [BasedOnRow(typeof(Entities.PathologyAndInvestigationDetailsRow), CheckNames = true)]
    public class PathologyAndInvestigationDetailsForm
    {
        public Int32 PathologyId { get; set; }
        public String Value { get; set; }
    }
}