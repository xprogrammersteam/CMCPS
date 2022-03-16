
namespace CMCPS.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.DDiagnosisDetails")]
    [BasedOnRow(typeof(Entities.DDiagnosisDetailsRow), CheckNames = true)]
    public class DDiagnosisDetailsForm
    {
        public Int32 DiagnosisId { get; set; }
        
    }
}