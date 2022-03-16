namespace CMCPS.Default {
    export interface OperationNoteRow {
        Id?: number;
        AdmissionId?: number;
        Date?: string;
        Age?: string;
        PinNumber?: string;
        UnitId?: number;
        UnitNumber?: string;
        UnitRegNo?: string;
        BedNumber?: string;
        HospitalRegNo?: string;
        AdmissionDate?: string;
        PatientName?: string;
        SexId?: number;
        Sex?: string;
        Weight?: string;
        BloodGroup?: string;
        Type?: Modules.Default.Admission.OperationType;
        StartTime?: string;
        EndTime?: string;
        DiagnosisId?: number;
        AddtoDiagnosis?: string;
        DiagnosisName?: string;
        Diagnosis?: string;
        IsView?: boolean;
        IndicationId?: number;
        AddtoIndication?: string;
        IndicationName?: string;
        Indication?: string;
        AnesthesiaId?: number;
        AddtoAnesthesia?: string;
        AnesthesiaName?: string;
        Anesthesia?: string;
        PositionId?: number;
        AddtoPosition?: string;
        PositionName?: string;
        Position?: string;
        IncisionId?: number;
        AddtoIncision?: string;
        IncisionName?: string;
        Incision?: string;
        Doctor?: string;
        Diagram?: string;
        OperationId?: number;
        OperationName?: string;
        Findings?: string;
        Procedures?: string;
        HistopathologyId?: number;
        AddtoHistopathology?: string;
        Histopathology?: string;
        SpecialNoteId?: number;
        AddtoSpecialNote?: string;
        SpecialNote?: string;
        InstructionsId?: number;
        AddtoInstructions?: string;
        Instructions?: string;
        FurtherPlanId?: number;
        AddtoFurtherPlan?: string;
        FurtherPlan?: string;
        SurgeonId?: number;
        AddtoSurgeon?: string;
        Surgeon?: string;
        AssistantSurgeonId?: number;
        AddtoAssistantSurgeon?: string;
        AssistantSurgeon?: string;
        AnesthetistId?: number;
        AddtoAnesthetist?: string;
        Anesthetist?: string;
        OtSisterId?: number;
        AddtoOtSister?: string;
        OtSister?: string;
        OtAttendantId?: number;
        AddtoOtAttendant?: string;
        OtAttendant?: string;
        PhotoUrl?: string;
    }

    export namespace OperationNoteRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PatientName';
        export const localTextPrefix = 'Default.OperationNote';
        export const lookupKey = 'Default.OperationNote';

        export function getLookup(): Q.Lookup<OperationNoteRow> {
            return Q.getLookup<OperationNoteRow>('Default.OperationNote');
        }

        export declare const enum Fields {
            Id = "Id",
            AdmissionId = "AdmissionId",
            Date = "Date",
            Age = "Age",
            PinNumber = "PinNumber",
            UnitId = "UnitId",
            UnitNumber = "UnitNumber",
            UnitRegNo = "UnitRegNo",
            BedNumber = "BedNumber",
            HospitalRegNo = "HospitalRegNo",
            AdmissionDate = "AdmissionDate",
            PatientName = "PatientName",
            SexId = "SexId",
            Sex = "Sex",
            Weight = "Weight",
            BloodGroup = "BloodGroup",
            Type = "Type",
            StartTime = "StartTime",
            EndTime = "EndTime",
            DiagnosisId = "DiagnosisId",
            AddtoDiagnosis = "AddtoDiagnosis",
            DiagnosisName = "DiagnosisName",
            Diagnosis = "Diagnosis",
            IsView = "IsView",
            IndicationId = "IndicationId",
            AddtoIndication = "AddtoIndication",
            IndicationName = "IndicationName",
            Indication = "Indication",
            AnesthesiaId = "AnesthesiaId",
            AddtoAnesthesia = "AddtoAnesthesia",
            AnesthesiaName = "AnesthesiaName",
            Anesthesia = "Anesthesia",
            PositionId = "PositionId",
            AddtoPosition = "AddtoPosition",
            PositionName = "PositionName",
            Position = "Position",
            IncisionId = "IncisionId",
            AddtoIncision = "AddtoIncision",
            IncisionName = "IncisionName",
            Incision = "Incision",
            Doctor = "Doctor",
            Diagram = "Diagram",
            OperationId = "OperationId",
            OperationName = "OperationName",
            Findings = "Findings",
            Procedures = "Procedures",
            HistopathologyId = "HistopathologyId",
            AddtoHistopathology = "AddtoHistopathology",
            Histopathology = "Histopathology",
            SpecialNoteId = "SpecialNoteId",
            AddtoSpecialNote = "AddtoSpecialNote",
            SpecialNote = "SpecialNote",
            InstructionsId = "InstructionsId",
            AddtoInstructions = "AddtoInstructions",
            Instructions = "Instructions",
            FurtherPlanId = "FurtherPlanId",
            AddtoFurtherPlan = "AddtoFurtherPlan",
            FurtherPlan = "FurtherPlan",
            SurgeonId = "SurgeonId",
            AddtoSurgeon = "AddtoSurgeon",
            Surgeon = "Surgeon",
            AssistantSurgeonId = "AssistantSurgeonId",
            AddtoAssistantSurgeon = "AddtoAssistantSurgeon",
            AssistantSurgeon = "AssistantSurgeon",
            AnesthetistId = "AnesthetistId",
            AddtoAnesthetist = "AddtoAnesthetist",
            Anesthetist = "Anesthetist",
            OtSisterId = "OtSisterId",
            AddtoOtSister = "AddtoOtSister",
            OtSister = "OtSister",
            OtAttendantId = "OtAttendantId",
            AddtoOtAttendant = "AddtoOtAttendant",
            OtAttendant = "OtAttendant",
            PhotoUrl = "PhotoUrl"
        }
    }
}

