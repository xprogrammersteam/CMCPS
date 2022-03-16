
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ComplicationDialog extends Serenity.EntityDialog<ComplicationRow, any> {
        protected getFormKey() { return ComplicationForm.formKey; }
        protected getIdProperty() { return ComplicationRow.idProperty; }
        protected getLocalTextPrefix() { return ComplicationRow.localTextPrefix; }
        protected getNameProperty() { return ComplicationRow.nameProperty; }
        protected getService() { return ComplicationService.baseUrl; }

        
        protected form: ComplicationForm;
        constructor() {
            super();
            this.form = new ComplicationForm(this.idPrefix);

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

            var fieldButton = $('.AddtoComplication')[0];

            fieldButton.innerHTML = `
                <a href= "javascript:;" class="btn btn-success DetailAdd"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.DetailAdd').click(e => this.addtoComplication());

        }
        public addtoComplication() {
            if (this.form.ComplicationNoteId.value != null) {
                if (this.form.ComplicationName.value == "") {
                    this.form.ComplicationName.value = this.form.ComplicationNoteId.text;
                }
                else {

                    this.form.ComplicationName.value = this.form.ComplicationName.value + "\n" + this.form.ComplicationNoteId.text;
                }
            }
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Complication Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Complication',
                getParams: () => ({
                    ComplicationId: this.get_entityId()
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