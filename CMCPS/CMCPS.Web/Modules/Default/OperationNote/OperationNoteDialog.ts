
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OperationNoteDialog extends Serenity.EntityDialog<OperationNoteRow, any> {
        protected getFormKey() { return OperationNoteForm.formKey; }
        protected getIdProperty() { return OperationNoteRow.idProperty; }
        protected getLocalTextPrefix() { return OperationNoteRow.localTextPrefix; }
        protected getNameProperty() { return OperationNoteRow.nameProperty; }
        protected getService() { return OperationNoteService.baseUrl; }

        protected form: OperationNoteForm;
        constructor() {
            super();
            this.form = new OperationNoteForm(this.idPrefix);

            this.form.AdmissionId.changeSelect2(x => {

                var admissionId = Q.toId(this.form.AdmissionId.value);
                if (admissionId != "") {
                    AdmissionService.Retrieve({ EntityId: admissionId },
                        response => {
                            this.form.Age.value = response.Entity.Age;
                            this.form.AdmissionDate.value = response.Entity.Date;
                            this.form.PinNumber.value = response.Entity.PinNumber;
                            this.form.UnitNumber.value = response.Entity.UnitNumber;
                            this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            this.form.BedNumber.value = response.Entity.BedNumber;
                            this.form.Sex.value = response.Entity.Sex;
                            this.form.Weight.value = response.Entity.Weight;
                            this.form.BloodGroup.value = response.Entity.BloodGroup;
                            this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                        });
                }
            });
            this.form.OperationId.changeSelect2(x => {

                var operationId = Q.toId(this.form.OperationId.value);
                if (operationId != "") {
                    OperationService.Retrieve({ EntityId: operationId },
                        response => {
                            this.form.Findings.value = response.Entity.Findings;
                            this.form.Procedures.value = response.Entity.Procedures;
                            
                        });
                }
            });


            var btnDiagnosis = $('.AddtoDiagnosis')[0];

            btnDiagnosis.innerHTML = `
                <a href= "javascript:;" class="btn btn-success DetailAdd"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.DetailAdd').click(e => this.addtoDiagnosisArea());


            var btnIndication = $('.AddtoIndication')[0];

            btnIndication.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddIndication"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddIndication').click(e => this.addtoIndicationArea());

            var btnAnesthesia = $('.AddtoAnesthesia')[0];

            btnAnesthesia.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddAnesthesia"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddAnesthesia').click(e => this.addtoAnesthesiaArea());


            var btnPosition = $('.AddtoPosition')[0];

            btnPosition.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddPosition"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddPosition').click(e => this.addtoPositionArea());

            var btnIncision = $('.AddtoIncision')[0];

            btnIncision.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddIncision"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddIncision').click(e => this.addtoIncisionArea());


            //var btnDiagram = $('.AddtoDiagram')[0];

            //btnDiagram.innerHTML = `
            //    <a href= "javascript:;" class="btn btn-success AddDiagram"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            //$('.AddDiagram').click(e => this.addtoDiagramArea());


            var btnHistopathology = $('.AddtoHistopathology')[0];

            btnHistopathology.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddHistopathology"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddHistopathology').click(e => this.addtoHistopathologyArea());


            var btnSpecialNote = $('.AddtoSpecialNote')[0];

            btnSpecialNote.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddSpecialNote"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddSpecialNote').click(e => this.addtoSpecialNoteArea());

            var btnInstructions = $('.AddtoInstructions')[0];

            btnInstructions.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddInstructions"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddInstructions').click(e => this.addtoInstructionsArea());


            var btnFurtherPlan = $('.AddtoFurtherPlan')[0];

            btnFurtherPlan.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddFurtherPlan"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddFurtherPlan').click(e => this.addtoFurtherPlanArea());

            var btnSurgeon = $('.AddtoSurgeon')[0];

            btnSurgeon.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddSurgeon"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddSurgeon').click(e => this.addtoSurgeonArea());


            var btnAssistantSurgeon = $('.AddtoAssistantSurgeon')[0];

            btnAssistantSurgeon.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddAssistantSurgeon"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddAssistantSurgeon').click(e => this.addtoAssistantSurgeonArea());

            var btnAnesthetist = $('.AddtoAnesthetist')[0];

            btnAnesthetist.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddAnesthetist"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddAnesthetist').click(e => this.addtoAnesthetistArea());


            var btnOtSister = $('.AddtoOtSister')[0];

            btnOtSister.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddOtSister"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddOtSister').click(e => this.addtoOtSisterArea());

            var btnOtAttendant = $('.AddtoOtAttendant')[0];

            btnOtAttendant.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddOtAttendant"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddOtAttendant').click(e => this.addtoOtAttendantArea());

        }
        public addtoDiagnosisArea() {
            if (this.form.DiagnosisId.value != null) {
                if (this.form.Diagnosis.value == "") {
                    this.form.Diagnosis.value = this.form.DiagnosisId.text;
                }
                else {

                    this.form.Diagnosis.value = this.form.Diagnosis.value + "\n" + this.form.DiagnosisId.text;
                }
            }
        }
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Operation Note Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.OperationNote',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }
        public addtoIndicationArea() {
            if (this.form.IndicationId.value != null) {
                if (this.form.Indication.value == "") {
                    this.form.Indication.value = this.form.IndicationId.text;
                }
                else {

                    this.form.Indication.value = this.form.Indication.value + "\n" + this.form.IndicationId.text;
                }
            }
        }
        public addtoAnesthesiaArea() {
            if (this.form.AnesthesiaId.value != null) {
                if (this.form.Anesthesia.value == "") {
                    this.form.Anesthesia.value = this.form.AnesthesiaId.text;
                }
                else {

                    this.form.Anesthesia.value = this.form.Anesthesia.value + "\n" + this.form.AnesthesiaId.text;
                }
            }
        }
        public addtoPositionArea() {
            if (this.form.PositionId.value != null) {
                if (this.form.Position.value == "") {
                    this.form.Position.value = this.form.PositionId.text;
                }
                else {

                    this.form.Position.value = this.form.Position.value + "\n" + this.form.PositionId.text;
                }
            }
        }
        public addtoIncisionArea() {
            if (this.form.IncisionId.value != null) {
                if (this.form.Incision.value == "") {
                    this.form.Incision.value = this.form.IncisionId.text;
                }
                else {

                    this.form.Incision.value = this.form.Incision.value + "\n" + this.form.IncisionId.text;
                }
            }
        }
        //public addtoDiagramArea() {
        //    if (this.form.DiagramId.value != null) {
        //        if (this.form.Diagram.value == "") {
        //            this.form.Diagram.value = this.form.DiagramId.text;
        //        }
        //        else {

        //            this.form.Diagram.value = this.form.Diagram.value + "\n" + this.form.DiagramId.text;
        //        }
        //    }
        //}

        
        public addtoHistopathologyArea() {
            if (this.form.HistopathologyId.value != null) {
                if (this.form.Histopathology.value == "") {
                    this.form.Histopathology.value = this.form.HistopathologyId.text;
                }
                else {

                    this.form.Histopathology.value = this.form.Histopathology.value + "\n" + this.form.HistopathologyId.text;
                }
            }
        }
        
        public addtoSpecialNoteArea() {
            if (this.form.SpecialNoteId.value != null) {
                if (this.form.SpecialNote.value == "") {
                    this.form.SpecialNote.value = this.form.SpecialNoteId.text;
                }
                else {

                    this.form.SpecialNote.value = this.form.SpecialNote.value + "\n" + this.form.SpecialNoteId.text;
                }
            }
        }

        public addtoInstructionsArea() {
            if (this.form.InstructionsId.value != null) {
                if (this.form.Instructions.value == "") {
                    this.form.Instructions.value = this.form.InstructionsId.text;
                }
                else {

                    this.form.Instructions.value = this.form.Instructions.value + "\n" + this.form.InstructionsId.text;
                }
            }
        }
        public addtoFurtherPlanArea() {
            if (this.form.FurtherPlanId.value != null) {
                if (this.form.FurtherPlan.value == "") {
                    this.form.FurtherPlan.value = this.form.FurtherPlanId.text;
                }
                else {

                    this.form.FurtherPlan.value = this.form.FurtherPlan.value + "\n" + this.form.FurtherPlanId.text;
                }
            }
        }
        public addtoSurgeonArea() {
            if (this.form.SurgeonId.value != null) {
                if (this.form.Surgeon.value == "") {
                    this.form.Surgeon.value = this.form.SurgeonId.text;
                }
                else {

                    this.form.Surgeon.value = this.form.Surgeon.value + "\n" + this.form.SurgeonId.text;
                }
            }
        }
        public addtoAssistantSurgeonArea() {
            if (this.form.AssistantSurgeonId.value != null) {
                if (this.form.AssistantSurgeon.value == "") {
                    this.form.AssistantSurgeon.value = this.form.AssistantSurgeonId.text;
                }
                else {

                    this.form.AssistantSurgeon.value = this.form.AssistantSurgeon.value + "\n" + this.form.AssistantSurgeonId.text;
                }
            }
        }


        public addtoAnesthetistArea() {
            if (this.form.AnesthetistId.value != null) {
                if (this.form.Anesthetist.value == "") {
                    this.form.Anesthetist.value = this.form.AnesthetistId.text;
                }
                else {

                    this.form.Anesthetist.value = this.form.Anesthetist.value + "\n" + this.form.AnesthetistId.text;
                }
            }
        }

        public addtoOtSisterArea() {
            if (this.form.OtSisterId.value != null) {
                if (this.form.OtSister.value == "") {
                    this.form.OtSister.value = this.form.OtSisterId.text;
                }
                else {

                    this.form.OtSister.value = this.form.OtSister.value + "\n" + this.form.OtSisterId.text;
                }
            }
        }
        public addtoOtAttendantArea() {
            if (this.form.OtAttendantId.value != null) {
                if (this.form.OtAttendant.value == "") {
                    this.form.OtAttendant.value = this.form.OtAttendantId.text;
                }
                else {

                    this.form.OtAttendant.value = this.form.OtAttendant.value + "\n" + this.form.OtAttendantId.text;
                }
            }
        }
        protected updateInterface() {
            super.updateInterface();

            if (this.isEditMode()) {
                Serenity.EditorUtils.setReadOnly(this.form.AdmissionId, true);
                var admissionId = Q.toId(this.form.AdmissionId.value);
                if (admissionId != "") {
                    AdmissionService.Retrieve({ EntityId: admissionId },
                        response => {
                            this.form.Age.value = response.Entity.Age;
                            this.form.AdmissionDate.value = response.Entity.Date;
                            this.form.PinNumber.value = response.Entity.PinNumber;
                            this.form.UnitNumber.value = response.Entity.UnitNumber;
                            this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            this.form.BedNumber.value = response.Entity.BedNumber;
                            this.form.Sex.value = response.Entity.Sex;
                            this.form.Weight.value = response.Entity.Weight;
                            this.form.BloodGroup.value = response.Entity.BloodGroup;
                            this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                        });
                }
            }

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }
    }
}