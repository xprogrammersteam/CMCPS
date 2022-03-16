
namespace CMCPS.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.AdmissionCcDetails")]
    [BasedOnRow(typeof(Entities.AdmissionCcDetailsRow), CheckNames = true)]
    public class AdmissionCcDetailsForm
    {
        public Int32 PrComplaintsId { get; set; }
        public String Days { get; set; }
    }
}