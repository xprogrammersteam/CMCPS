
namespace CMCPS.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.PathologyAndInvestigationDetails")]
    [BasedOnRow(typeof(Entities.PathologyAndInvestigationDetailsRow), CheckNames = true)]
    public class PathologyAndInvestigationDetailsColumns
    {
        
        [EditLink]
        public String PathologyName { get; set; }
        
        public String Value { get; set; }
    }
}