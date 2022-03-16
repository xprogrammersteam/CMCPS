using Serenity.ComponentModel;
using System.ComponentModel;
namespace CMCPS.Modules.Default.Admission
{
    [EnumKey("Default.CommonFixedValue")]
    public enum Religion
    {
        [Description("Islam")]
        Islam = 1,
        [Description("Hinduism")]
        Hinduism = 2,
        [Description("Buddhists")]
        Buddhists = 3,
        [Description("Christians")]
        Christians = 4,
        [Description("Animists")]
        Animists = 5

    }

    public enum MaritalStatus
    {
        [Description("Married")]
        Married = 1,
        [Description("Unmarried")]
        Unmarried = 2,
        [Description("Others")]
        Others = 3
    }
    public enum MenarcheCycle
    {
        [Description("Regular")]
        Regular = 1,
        [Description("Irregular")]
        Irregular = 2
    }
    public enum BloodTransfusion
    {
        [Description("Yes")]
        Yes = 1,
        [Description("No")]
        No = 2,
    }

    public enum EmergencyContactRelation
    {
        [Description("Father's")]
        Married = 1,
        [Description("Mother's")]
        Unmarried = 2,
        [Description("Brother")]
        Brother = 3,
        [Description("Sister")]
        Sister = 4,
        [Description("Others")]
        Others = 5
    }

    public enum Result
    {
        [Description("Cured")]
        Cured = 1,
        [Description("Improved")]
        Improved = 2,
        [Description("Expired")]
        Expired = 3,
        [Description("DORB")]
        DORB = 4,       
    }
    public enum LymphNode
    {
        [Description("Palpable")]
        Palpable = 1,
        [Description("Not Palpable")]
        NotPalpable = 2
    }
    public enum Immunization
    {
        [Description("Immunized")]
        Immunized = 1,
        [Description("Not Immunized")]
        NotImmunized = 2

    }

    public enum AppearanceEnum
    {
        [Description("Normal")]
        Normal = 1,
        [Description("ill")]
        ill = 2
    }
    public enum DecuibitusEnum
    {
        [Description("On choice")]
        Onchoice = 1,
        [Description("Supine")]
        Supine=2,
        [Description("Propped up")]
        Proppedup=3,
        [Description("lateral")]
        ill = 4
    }
    public enum Behaviour
    {
        [Description("Co-operative")]
        Cooperative = 1,
        [Description("Non cooperative ")]
        Noncooperative = 2
    }
    public enum Bodybuilt
    {
        [Description("Average")]
        Average = 1,
        [Description("Short stature")]
        shortstature = 2,
        [Description("Tall")]
        Tall = 3
    }
    public enum GeneralEnum
    {
        [Description("Absent")]
        Absent = 1,
        [Description("Mild")]
        Mild = 2,
        [Description("Moderate")]
        Moderate = 3,
        [Description("Severe")]
        Severe=4
    }
    public enum CyanosisEnum
    {
        [Description("Absent")]
        Absent = 1,
        [Description("central")]
        central = 2,
        [Description("peripheral")]
        peripheral = 3
    }
    public enum ClubbingEnum
    {
        [Description("Absent")]
        Absent = 1,
        [Description("Selected")]
        Selected = 2,
        [Description("Generalized")]
        Generalized = 3
    }
    public enum MusclesEnum
    {
        [Description("Wasted")]
        Wasted = 1,
        [Description("Normal")]
        Normal = 2,
        [Description("Working")]
        Working = 3
    }
    public enum GeneralPartEnum
    {
        [Description("Absent")]
        Absent = 1,
        [Description("Present")]
        Present = 2
    }
    public enum NeckveinsEnum
    {
        [Description("Engorged")]
        Engorged = 1,
        [Description("Not engorged")]
        Notengorged = 2
    }
    public enum LymphEnum
    {
        [Description("Not palpable")]
        Notpalpable = 1,
        [Description("Palpable")]
        Palpable = 2
    }
    public enum ConsistencyEnum
    {
        [Description("Soft")]
        Soft = 1,
        [Description("Firm")]
        Firm = 2,
        [Description("Hard")]
        Hard = 2,
    }
    public enum FixationEnum
    {
        [Description("Not fixed")]
        NotFixed = 1,
        [Description("Fixed")]
        Fixed = 2
    }
    public enum temperatureEnum
    {
        [Description("Not raied")]
        Notraied = 1,
        [Description("Raised")]
        raised= 2
    }

    public enum FeedingHistory
    {

        [Description("Breast fed")] Breastfed = 1,
        [Description("Artficial feeding")] Artficialfeeding = 2

    }

    public enum FamilyHistoryDisease
    {
        [Description("Yes")] Yes = 1,
        [Description("No")] No = 2
    }
    public enum PPActivity
    {
        [Description("sedentary")] Yes = 1,
        [Description("work")] No = 2
    }
    public enum ExaminationRegion
    {
        [Description("Abdomen")]
        Abdomen = 1,
        [Description("Chest")]
        Chest = 2,
        [Description("Limb")]
        Limb = 3,
        [Description("Head & Neck")]
        HeadNeck = 4,
        [Description("Back")]
        Back = 5,
        [Description("Perineum")]
        Perineum = 6
    }
    public enum Site
    {
        [Description("Cervical")]
        Cervical = 1,
        [Description("Axillary")]
        Axillary = 2,
        [Description("Inguinal")]
        Inguinal = 3,
        [Description("Other")]
        Other = 4
       
    }
    public enum Designation
    {
        [Description("Professor")]
        Professor = 1,
        [Description("Associate Professor")]
        AssociateProfessor = 2,
        [Description("Assistant Professor")]
        AssistantProfessor = 3,
        [Description("Consultant")]
        Consultant = 4,
        [Description("Registrar")]
        Registrar =5,
        [Description("Assistant Registrar")]
        AssistantRegistrar = 6,
        [Description("Resident Doctor")]
        ResidentDoctor = 7,
        [Description("Intern Doctor")]
        InternDoctor = 8
    }
    public enum SignMeningeal
    {
        [Description("Yes")]
        Yes = 1,
        [Description("No")]
        No = 2
    }
    public enum OperationType
    {
        [Description("Routine")]
        Routine = 1,
        [Description("Emergency")]
        Emergency = 2
    }
    public enum TypeOfPatient
    {
        [Description("Old")]
        Old = 1,
        [Description("New")]
        New = 2
    }
    public enum RhythmEnum
    {
        [Description("Regular")]
        Regular = 1,
        [Description("Irregular")]
        Irregular = 2
    }
    public enum ShapeChest
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Barrel")]
        Barrel = 2,
        [Description("Pigeon")]
        Pigeon = 3,
        [Description("Pectus")]
        Pectus = 4,
    }
    public enum PositionTrachea
    {
        [Description("Central")]
        Central = 1,
        [Description("Deviated to left")]
        DeviatedL = 2,
        [Description("Deviated to right")]
        DeviatedR = 3
    }
    public enum PositionApexBeat
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Shifted")]
        Shifted = 2
    }
    public enum SkinEnum
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Abnormal")]
        Abnormal = 2
    }
    public enum VocalFremitus
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Increased")]
        Increased = 2,
        [Description("Decreased")]
        Decreased = 3
    }
    public enum Percussion
    {
        [Description("Resonant")]
        Resonant = 1,
        [Description("Hyper resonant")]
        Hyper = 2,
        [Description("Dull")]
        Dull = 3
    }

    public enum NoneDate
    {
        [Description("None")]
        None=1
    }
    public enum VolumeEnum
    {
        [Description("Normal")]
        Normal = 1,
        [Description("High")]
        High = 2,
        [Description("Low")]
        Low = 3
    }

    public enum CharacterEnum
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Slow Rising")]
        Slow = 2,
        [Description("Collapsing")]
        Collapsing = 3,
        [Description("Bigeminal")]
        bigeminal = 4,
        [Description("Bisferiens ")]
        Bisferiens=5,
        [Description("Pulsus Paradoxus")]
        Pulsus=6,
        [Description("Pulsus Alternans")]
        PulsusAlt=7
    }

    public enum ConditionEnum
    {
        [Description("Normal")]
        Normal=1,
        [Description("Thickened")]
        Thickened=2
    }
    public enum NeckVenisEnum
    {
        [Description("Engorged")]
        Engorged = 1,
        [Description("Not engorged")]
        Notengorged = 2
    }

    public enum Precordium
    {
        [Description("No")]
        No = 1,
        [Description("Apex beat")]
        ApexBeat = 2,
        [Description("Parasternal")]
        parasternal = 3,
        [Description("Root of the neck")]
        RootNeck = 4,
        [Description("Epigastric ")]
        Epigastric = 5
    }
}