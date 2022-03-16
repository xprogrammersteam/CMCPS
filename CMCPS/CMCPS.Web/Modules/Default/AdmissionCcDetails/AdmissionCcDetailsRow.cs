
namespace CMCPS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[AdmissionCCDetails]")]
    [DisplayName("Presenting Complaints"), InstanceName("Presenting Complaints")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AdmissionCcDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Complaint Id"), Identity]
        public Int32? ComplaintId
        {
            get { return Fields.ComplaintId[this]; }
            set { Fields.ComplaintId[this] = value; }
        }

        [DisplayName("Admission"), PrimaryKey, ForeignKey(typeof(AdmissionRow)), LeftJoin("o"), Updatable(false)]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }
              
        [LookupEditor(typeof(PresentingComplaintsRow), InplaceAdd = true)]
        [DisplayName("Complaints"), NotNull, ForeignKey("[dbo].[PresentingComplaints]", "PComplaintsId"), LeftJoin("jPrComplaints"), TextualField("PrComplaintsPComplaints")]
        public Int32? PrComplaintsId
        {
            get { return Fields.PrComplaintsId[this]; }
            set { Fields.PrComplaintsId[this] = value; }
        }
        [DisplayName("Complaints"), Expression("jPrComplaints.[PComplaints]")]
        public String PComplaints
        {
            get { return Fields.PComplaints[this]; }
            set { Fields.PComplaints[this] = value; }
        }
        [DisplayName("Days"), Size(50), QuickSearch]
        public String Days
        {
            get { return Fields.Days[this]; }
            set { Fields.Days[this] = value; }
        }

      


        IIdField IIdRow.IdField
        {
            get { return Fields.ComplaintId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Days; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AdmissionCcDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ComplaintId;
            public Int32Field AdmissionId;
            public Int32Field PrComplaintsId;
            public StringField Days;           
            public StringField PComplaints;
           
        }
    }
}
