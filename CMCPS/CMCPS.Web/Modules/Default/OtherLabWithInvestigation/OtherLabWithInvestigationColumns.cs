
namespace CMCPS.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.OtherLabWithInvestigation")]
    [BasedOnRow(typeof(Entities.OtherLabWithInvestigationRow), CheckNames = true)]
    public class OtherLabWithInvestigationColumns
    {
        
        [EditLink]
        public String OtherLabName { get; set; }
        
        public String Value { get; set; }
    }
}