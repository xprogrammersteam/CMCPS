namespace CMCPS.Default {
    export interface OperationNoteForm {
        AdmissionId: Serenity.LookupEditor;
        Date: Serenity.DateEditor;
        Age: Serenity.StringEditor;
        AdmissionDate: Serenity.DateEditor;
        Sex: Serenity.StringEditor;
        PinNumber: Serenity.StringEditor;
        UnitNumber: Serenity.StringEditor;
        UnitRegNo: Serenity.StringEditor;
        BedNumber: Serenity.StringEditor;
        HospitalRegNo: Serenity.StringEditor;
        Weight: Serenity.StringEditor;
        BloodGroup: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        StartTime: EditTimeEditor;
        EndTime: EditTimeEditor;
        IsView: Serenity.BooleanEditor;
        DiagnosisId: Serenity.LookupEditor;
        AddtoDiagnosis: Serenity.StringEditor;
        IndicationId: Serenity.LookupEditor;
        AddtoIndication: Serenity.StringEditor;
        Diagnosis: Serenity.TextAreaEditor;
        Indication: Serenity.TextAreaEditor;
        AnesthesiaId: Serenity.LookupEditor;
        AddtoAnesthesia: Serenity.StringEditor;
        PositionId: Serenity.LookupEditor;
        AddtoPosition: Serenity.StringEditor;
        Anesthesia: Serenity.TextAreaEditor;
        Position: Serenity.TextAreaEditor;
        IncisionId: Serenity.LookupEditor;
        AddtoIncision: Serenity.StringEditor;
        Incision: Serenity.TextAreaEditor;
        Diagram: Serenity.ImageUploadEditor;
        OperationId: Serenity.LookupEditor;
        Findings: Serenity.TextAreaEditor;
        Procedures: Serenity.TextAreaEditor;
        HistopathologyId: Serenity.LookupEditor;
        AddtoHistopathology: Serenity.StringEditor;
        SpecialNoteId: Serenity.LookupEditor;
        AddtoSpecialNote: Serenity.StringEditor;
        Histopathology: Serenity.TextAreaEditor;
        SpecialNote: Serenity.TextAreaEditor;
        InstructionsId: Serenity.LookupEditor;
        AddtoInstructions: Serenity.StringEditor;
        FurtherPlanId: Serenity.LookupEditor;
        AddtoFurtherPlan: Serenity.StringEditor;
        Instructions: Serenity.TextAreaEditor;
        FurtherPlan: Serenity.TextAreaEditor;
        PhotoUrl: Serenity.ImageUploadEditor;
        SurgeonId: Serenity.LookupEditor;
        AddtoSurgeon: Serenity.StringEditor;
        AssistantSurgeonId: Serenity.LookupEditor;
        AddtoAssistantSurgeon: Serenity.StringEditor;
        Surgeon: Serenity.TextAreaEditor;
        AssistantSurgeon: Serenity.TextAreaEditor;
        AnesthetistId: Serenity.LookupEditor;
        AddtoAnesthetist: Serenity.StringEditor;
        OtSisterId: Serenity.LookupEditor;
        AddtoOtSister: Serenity.StringEditor;
        Anesthetist: Serenity.TextAreaEditor;
        OtSister: Serenity.TextAreaEditor;
        OtAttendantId: Serenity.LookupEditor;
        AddtoOtAttendant: Serenity.StringEditor;
        OtAttendant: Serenity.TextAreaEditor;
    }

    export class OperationNoteForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OperationNote';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OperationNoteForm.init)  {
                OperationNoteForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.EnumEditor;
                var w4 = EditTimeEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.ImageUploadEditor;

                Q.initFormType(OperationNoteForm, [
                    'AdmissionId', w0,
                    'Date', w1,
                    'Age', w2,
                    'AdmissionDate', w1,
                    'Sex', w2,
                    'PinNumber', w2,
                    'UnitNumber', w2,
                    'UnitRegNo', w2,
                    'BedNumber', w2,
                    'HospitalRegNo', w2,
                    'Weight', w2,
                    'BloodGroup', w2,
                    'Type', w3,
                    'StartTime', w4,
                    'EndTime', w4,
                    'IsView', w5,
                    'DiagnosisId', w0,
                    'AddtoDiagnosis', w2,
                    'IndicationId', w0,
                    'AddtoIndication', w2,
                    'Diagnosis', w6,
                    'Indication', w6,
                    'AnesthesiaId', w0,
                    'AddtoAnesthesia', w2,
                    'PositionId', w0,
                    'AddtoPosition', w2,
                    'Anesthesia', w6,
                    'Position', w6,
                    'IncisionId', w0,
                    'AddtoIncision', w2,
                    'Incision', w6,
                    'Diagram', w7,
                    'OperationId', w0,
                    'Findings', w6,
                    'Procedures', w6,
                    'HistopathologyId', w0,
                    'AddtoHistopathology', w2,
                    'SpecialNoteId', w0,
                    'AddtoSpecialNote', w2,
                    'Histopathology', w6,
                    'SpecialNote', w6,
                    'InstructionsId', w0,
                    'AddtoInstructions', w2,
                    'FurtherPlanId', w0,
                    'AddtoFurtherPlan', w2,
                    'Instructions', w6,
                    'FurtherPlan', w6,
                    'PhotoUrl', w7,
                    'SurgeonId', w0,
                    'AddtoSurgeon', w2,
                    'AssistantSurgeonId', w0,
                    'AddtoAssistantSurgeon', w2,
                    'Surgeon', w6,
                    'AssistantSurgeon', w6,
                    'AnesthetistId', w0,
                    'AddtoAnesthetist', w2,
                    'OtSisterId', w0,
                    'AddtoOtSister', w2,
                    'Anesthetist', w6,
                    'OtSister', w6,
                    'OtAttendantId', w0,
                    'AddtoOtAttendant', w2,
                    'OtAttendant', w6
                ]);
            }
        }
    }
}

