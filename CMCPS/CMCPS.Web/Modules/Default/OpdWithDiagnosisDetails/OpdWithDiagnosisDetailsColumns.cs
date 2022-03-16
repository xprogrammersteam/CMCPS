
namespace CMCPS.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.OpdWithDiagnosisDetails")]
    [BasedOnRow(typeof(Entities.OpdWithDiagnosisDetailsRow), CheckNames = true)]
    public class OpdWithDiagnosisDetailsColumns
    {        
        [EditLink]
        public String Diagnosis { get; set; }       
     
    }
}