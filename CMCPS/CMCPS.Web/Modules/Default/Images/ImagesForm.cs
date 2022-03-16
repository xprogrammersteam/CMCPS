
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Images")]
    [BasedOnRow(typeof(Entities.ImagesRow), CheckNames = true)]
    public class ImagesForm
    {
        [Category("Patient Info")]
        [OneThirdWidth]
        public Int32 AdmissionId { get; set; }

        [OneThirdWidth, DefaultValue("now"), DisplayFormat("dd-MM-yyyy")]
        public DateTime EntryDate { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Age { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Sex { get; set; }
        [OneThirdWidth, ReadOnly(true), DateFormatter(DisplayFormat = "dd-MM-yyyy")]
        public DateTime AdmissionDate { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String Weight { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BloodGroup { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String PinNumber { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String UnitNumber { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String UnitRegNo { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String BedNumber { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public String HospitalRegNo { get; set; }
        [Category("Images")]
        [MultipleImageUploadEditor(FilenameFormat = "Images/~", CopyToHistory = true)]
        public String Image { get; set; }
    }
}