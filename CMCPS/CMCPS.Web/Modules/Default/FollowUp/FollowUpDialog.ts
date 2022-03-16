
namespace CMCPS.Default {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class FollowUpDialog extends Serenity.EntityDialog<FollowUpRow, any> {
        protected getFormKey() { return FollowUpForm.formKey; }
        protected getIdProperty() { return FollowUpRow.idProperty; }
        protected getLocalTextPrefix() { return FollowUpRow.localTextPrefix; }
        protected getNameProperty() { return FollowUpRow.nameProperty; }
        protected getService() { return FollowUpService.baseUrl; }
       
        protected form = new FollowUpForm(this.idPrefix);
        constructor() {
            super();
          
            this.form.AdmissionId.changeSelect2(x => {

                var admissionId = Q.toId(this.form.AdmissionId.value);
                if (admissionId != "") {
                    AdmissionService.Retrieve({ EntityId: admissionId },
                        response => {
                            this.form.Age.value = response.Entity.Age;
                            this.form.Sex.value = response.Entity.Sex;
                            this.form.AdmissionDate.value = response.Entity.Date;
                            this.form.PinNumber.value = response.Entity.PinNumber;
                            this.form.UnitNumber.value = response.Entity.UnitNumber;
                            this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            this.form.BedNumber.value = response.Entity.BedNumber;
                            this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            this.form.Weight.value = response.Entity.Weight;
                            this.form.BloodGroup.value = response.Entity.BloodGroup;
                        });
                }
            });

           
            var fieldButton = $('.AddtoDiagnosis')[0];

            fieldButton.innerHTML = `
                <a href= "javascript:;" class="btn btn-success DetailAdd"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.DetailAdd').click(e => this.addtoGrid());


            var fieldbtn = $('.AddtoComplaint')[0];

            fieldbtn.innerHTML = `
                <a href= "javascript:;" class="btn btn-success DetailAddComplaint"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.DetailAddComplaint').click(e => this.addtoComplaint());

        }
        public addtoComplaint() {
            if (this.form.ChiefComplaintId.value != null) {
                if (this.form.ChiefComplaint.value == "") {
                    this.form.ChiefComplaint.value = this.form.ChiefComplaintId.text;
                }
                else {

                    this.form.ChiefComplaint.value = this.form.ChiefComplaint.value + "\n" + this.form.ChiefComplaintId.text;
                }
            }
        }

        public addtoGrid() {
            if (this.form.DiagnosisId.value != null) {
                if (this.form.Diagnosis.value=="") {
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
                title: 'Follow Up Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.FollowUp',
                getParams: () => ({
                    FollowUpID: this.get_entityId()
                })
            }));

            return buttons;
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
                            this.form.Sex.value = response.Entity.Sex;
                            this.form.AdmissionDate.value = response.Entity.Date;
                            this.form.PinNumber.value = response.Entity.PinNumber;
                            this.form.UnitNumber.value = response.Entity.UnitNumber;
                            this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            this.form.BedNumber.value = response.Entity.BedNumber;
                            this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            this.form.Weight.value = response.Entity.Weight;
                            this.form.BloodGroup.value = response.Entity.BloodGroup;
                        });
                }
            }

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }
    }
}