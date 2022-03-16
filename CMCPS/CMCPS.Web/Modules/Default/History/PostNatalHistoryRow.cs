

namespace CMCPS.Modules.Default.History
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PBPostNatalHistory]")]
    [DisplayName("Post Natal History"), InstanceName("Post Natal History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Historyy")]
    public class PostNatalHistoryRow : Row, IIdRow
    {
        [DisplayName("P Post Natal Id"), Column("PBPostNatalHistoryId"), Identity]
        public Int32? PBPostNatalHistoryId
        {
            get { return Fields.PBPostNatalHistoryId[this]; }
            set { Fields.PBPostNatalHistoryId[this] = value; }
        }

        [DisplayName("Admission"), NotNull, ForeignKey("[dbo].[Admission]", "AdmissionId"), LeftJoin("jAdmission"), TextualField("AdmissionHistoryOfPresentIllness")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Post Natal History"), NotNull, ForeignKey("[dbo].[PostNatal]", "PostNatalId"), LeftJoin("jPostNatal"), TextualField("PostNatal")]
        public Int32? PostNatalId
        {
            get { return Fields.PostNatalId[this]; }
            set { Fields.PostNatalId[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.PBPostNatalHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PostNatalHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PBPostNatalHistoryId;
            public Int32Field AdmissionId;
            public Int32Field PostNatalId;


        }
    }
}