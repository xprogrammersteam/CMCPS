

namespace CMCPS.Modules.Default.History
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PNatalHistory]")]
    [DisplayName("Natal History"), InstanceName("Natal History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Historuy")]
    public class NatalHistoryRow : Row, IIdRow
    {
        [DisplayName("P Natal Id"), Column("PBNatalHistoryId"), Identity]
        public Int32? PbNatalHistoryId
        {
            get { return Fields.PbNatalHistoryId[this]; }
            set { Fields.PbNatalHistoryId[this] = value; }
        }

        [DisplayName("Admission"), NotNull, ForeignKey("[dbo].[Admission]", "AdmissionId"), LeftJoin("jAdmission"), TextualField("AdmissionHistoryOfPresentIllness")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Natal History"), NotNull, ForeignKey("[dbo].[Natal]", "NatalId"), LeftJoin("jNatal"), TextualField("Natal")]
        public Int32? NatalId
        {
            get { return Fields.NatalId[this]; }
            set { Fields.NatalId[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.PbNatalHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NatalHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PbNatalHistoryId;
            public Int32Field AdmissionId;
            public Int32Field NatalId;


        }
    }
}