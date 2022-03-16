using Serenity.Navigation;
//using MyPages = CMC.Default.Pages;
using MyPages = CMCPS.Default.Pages;

[assembly: NavigationMenu(1000, "Admissions", icon: "fa-anchor")]
[assembly: NavigationLink(1001, "Admissions/Admission Entry", typeof(MyPages.AdmissionController), icon: null)]

[assembly: NavigationMenu(1100, "Investigation", icon: "fa-anchor")]
[assembly: NavigationLink(1101, "Investigation/Investigation Entry", typeof(MyPages.InvestigationController), icon: null)]

[assembly: NavigationMenu(1200, "Treatment", icon: "fa-anchor")]
[assembly: NavigationLink(1201, "Treatment/Treatment Entry", typeof(MyPages.TreatmentController), icon: null)]

[assembly: NavigationMenu(2000, "Follow Up", icon: "fa-anchor")]
[assembly: NavigationLink(2001, "Follow Up/Follow Up Entry", typeof(MyPages.FollowUpController), icon: null)]

[assembly: NavigationMenu(2500, "Operative Note", icon: "fa-anchor")]
[assembly: NavigationLink(2501, "Operative Note/Operative Note Entry", typeof(MyPages.OperationNoteController), icon: null)]

[assembly: NavigationMenu(3000, "Discharge", icon: "fa-anchor")]
[assembly: NavigationLink(3001, "Discharge/Discharge Entry", typeof(MyPages.DischargeController), icon: null)]

[assembly: NavigationMenu(4000, "Outdoor Patient", icon: "fa-anchor")]
[assembly: NavigationLink(4001, "Outdoor Patient/Outdoor Patient Entry", typeof(MyPages.OpdController), icon: null)]

[assembly: NavigationMenu(4500, "Complication", icon: "fa-anchor")]
[assembly: NavigationLink(4501, "Complication/Complication Entry", typeof(MyPages.ComplicationController), icon: null)]

[assembly: NavigationMenu(5000, "Note", icon: "fa-anchor")]
[assembly: NavigationLink(5001, "Note/Note Entry", typeof(MyPages.NoteController), icon: null)]

[assembly: NavigationMenu(5500, "Outcome", icon: "fa-anchor")]
[assembly: NavigationLink(5501, "Outcome/Outcome Entry", typeof(MyPages.OutcomeController), icon: null)]

[assembly: NavigationMenu(6000, "Images", icon: "fa-anchor")]
[assembly: NavigationLink(6001, "Images/Images Entry", typeof(MyPages.ImagesController), icon: null)]

[assembly: NavigationMenu(9000, "Setups", icon: "fa-anchor")]
[assembly: NavigationLink(9001, "Setups/Bed", typeof(MyPages.BedController), icon: null)]
[assembly: NavigationLink(9002, "Setups/Birth History", typeof(MyPages.BirthHistoryController), icon: null)]
[assembly: NavigationLink(9003, "Setups/Family History", typeof(MyPages.FamilyHistoryController), icon: null)]
[assembly: NavigationLink(9004, "Setups/Presenting Complaints", typeof(MyPages.PresentingComplaintsController), icon: null)]
[assembly: NavigationLink(9005, "Setups/Unit", typeof(MyPages.UnitController), icon: null)]
[assembly: NavigationLink(9007, "Setups/Diagnosis", typeof(MyPages.DiagnosisController), icon: null)]
[assembly: NavigationLink(9008, "Setups/District", typeof(MyPages.DistrictController), icon: null)]
[assembly: NavigationLink(9009, "Setups/Upazila", typeof(MyPages.UpazilaController), icon: null)]
[assembly: NavigationLink(9010, "Setups/Antenatal", typeof(MyPages.AntenatalController), icon: null)]
[assembly: NavigationLink(9011, "Setups/Natal", typeof(MyPages.NatalController), icon: null)]
[assembly: NavigationLink(9012, "Setups/Post Natal", typeof(MyPages.PostNatalController), icon: null)]
[assembly: NavigationLink(9013, "Setups/Investigation", typeof(MyPages.InvestigationController), icon: null)]
[assembly: NavigationLink(9014, "Setups/Other Lab", typeof(MyPages.OtherLabController), icon: null)]
[assembly: NavigationLink(9015, "Setups/Pathology", typeof(MyPages.PathologyController), icon: null)]
[assembly: NavigationLink(9016, "Setups/Blood Groups", typeof(MyPages.BloodGroupsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Images", typeof(MyPages.ImagesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Ward", typeof(MyPages.WardController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Ill Ness", typeof(MyPages.IllNessController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Illness History", typeof(MyPages.IllnessHistoryController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Major Surgery", typeof(MyPages.MajorSurgeryController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Immunization", typeof(MyPages.ImmunizationController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Immunization History", typeof(MyPages.ImmunizationHistoryController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Regular Medication", typeof(MyPages.RegularMedicationController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Admission Pp Details", typeof(MyPages.AdmissionPpDetailsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Percussion", typeof(MyPages.PercussionController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Percussion History", typeof(MyPages.PercussionHistoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Auscultation", typeof(MyPages.AuscultationController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Auscultation History", typeof(MyPages.AuscultationHistoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Breath Sound", typeof(MyPages.BreathSoundController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Breath Sound History", typeof(MyPages.BreathSoundHistoryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Vocal Resonance", typeof(MyPages.VocalResonanceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Vocal Resonance History", typeof(MyPages.VocalResonanceHistoryController), icon: null)]