
namespace CMCPS.Modules.Default.History
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PAntenatalHistory]")]
    [DisplayName("Antenatal History"), InstanceName("Antenatal History")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.History")]
    public class AntenatalHistoryRow : Row, IIdRow
    {
        [DisplayName("P Antenatal Id"), Column("PBAntenatalHistoryId"), Identity]
        public Int32? PbAntenatalHistoryId
        {
            get { return Fields.PbAntenatalHistoryId[this]; }
            set { Fields.PbAntenatalHistoryId[this] = value; }
        }

        [DisplayName("Admission"), NotNull, ForeignKey("[dbo].[Admission]", "AdmissionId"), LeftJoin("jAdmission"), TextualField("AdmissionHistoryOfPresentIllness")]
        public Int32? AdmissionId
        {
            get { return Fields.AdmissionId[this]; }
            set { Fields.AdmissionId[this] = value; }
        }

        [DisplayName("Antenatal History"), NotNull, ForeignKey("[dbo].[Antenatal]", "AntenatalId"), LeftJoin("jAntenatal"), TextualField("Antenatal")]
        public Int32? AntenatalId
        {
            get { return Fields.AntenatalId[this]; }
            set { Fields.AntenatalId[this] = value; }
        }

        //[DisplayName("Antenatal History"), NotNull, ForeignKey("[dbo].[Antenatal]", "AntenatalId"), LeftJoin("jAntenatal"), TextualField("Antenatal")]
        //public Int32? BirthHistoryId
        //{
        //    get { return Fields.BirthHistoryId[this]; }
        //    set { Fields.BirthHistoryId[this] = value; }
        //}





        IIdField IIdRow.IdField
        {
            get { return Fields.PbAntenatalHistoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AntenatalHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PbAntenatalHistoryId;
            public Int32Field AdmissionId;
            public Int32Field AntenatalId;

            
        }
    }
}