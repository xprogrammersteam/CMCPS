
namespace CMCPS.Default {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()

    export class OutcomeDialog extends Serenity.EntityDialog<OutcomeRow, any> {
        protected getFormKey() { return OutcomeForm.formKey; }
        protected getIdProperty() { return OutcomeRow.idProperty; }
        protected getLocalTextPrefix() { return OutcomeRow.localTextPrefix; }
        protected getNameProperty() { return OutcomeRow.nameProperty; }
        protected getService() { return OutcomeService.baseUrl; }

        protected form: OutcomeForm;
        constructor() {
            super();
            this.form = new OutcomeForm(this.idPrefix);

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
                            this.form.Weight.value = response.Entity.Weight;
                            this.form.BloodGroup.value = response.Entity.BloodGroup;
                            this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });

                }

            });

            var fieldButton = $('.AddtoOutCome')[0];

            fieldButton.innerHTML = `
                <a href= "javascript:;" class="btn btn-success DetailAdd"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.DetailAdd').click(e => this.AddtoOutCome());

        }
        public AddtoOutCome() {
            if (this.form.OutcomeNoteId.value != null) {
                if (this.form.OutcomeName.value == "") {
                    this.form.OutcomeName.value = this.form.OutcomeNoteId.text;
                }
                else {

                    this.form.OutcomeName.value = this.form.OutcomeName.value + "\n" + this.form.OutcomeNoteId.text;
                }
            }
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Outcome Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Outcome',
                getParams: () => ({
                    OutcomeID: this.get_entityId()
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
                            this.form.FinalDiagnosis.value = response.Entity.FinalDiagnosis;
                        });
                }
            }

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }


    }
}