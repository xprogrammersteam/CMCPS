
namespace CMCPS.Default {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class NoteDialog extends Serenity.EntityDialog<NoteRow, any> {
        protected getFormKey() { return NoteForm.formKey; }
        protected getIdProperty() { return NoteRow.idProperty; }
        protected getLocalTextPrefix() { return NoteRow.localTextPrefix; }
        protected getNameProperty() { return NoteRow.nameProperty; }
        protected getService() { return NoteService.baseUrl; }

        protected form: NoteForm;
        constructor() {
            super();
            this.form = new NoteForm(this.idPrefix);

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

            var fieldButton = $('.AddtoNote')[0];

            fieldButton.innerHTML = `
                <a href= "javascript:;" class="btn btn-success DetailAdd"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.DetailAdd').click(e => this.AddtoNote());

        }
        public AddtoNote() {
            if (this.form.PNoteId.value != null) {
                if (this.form.Note.value == "") {
                    this.form.Note.value = this.form.PNoteId.text;
                }
                else {

                    this.form.Note.value = this.form.Note.value + "\n" + this.form.PNoteId.text;
                }
            }
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Note Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Note',
                getParams: () => ({
                     NoteID: this.get_entityId()
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