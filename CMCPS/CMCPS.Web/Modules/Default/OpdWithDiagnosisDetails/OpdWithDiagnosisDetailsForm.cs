
namespace CMCPS.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.OpdWithDiagnosisDetails")]
    [BasedOnRow(typeof(Entities.OpdWithDiagnosisDetailsRow), CheckNames = true)]
    public class OpdWithDiagnosisDetailsForm
    {
        public Int32 DiagnosisId { get; set; }
        
    }
}