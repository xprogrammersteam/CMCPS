
namespace CMCPS.Default.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Default.DDiagnosisDetails")]
    [BasedOnRow(typeof(Entities.DDiagnosisDetailsRow), CheckNames = true)]
    public class DDiagnosisDetailsColumns
    {        
        [EditLink]
        public String Diagnosis { get; set; }       
     
    }
}