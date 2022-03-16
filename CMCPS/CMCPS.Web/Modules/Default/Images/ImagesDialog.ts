
namespace CMCPS.Default {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class ImagesDialog extends Serenity.EntityDialog<ImagesRow, any> {
        protected getFormKey() { return ImagesForm.formKey; }
        protected getIdProperty() { return ImagesRow.idProperty; }
        protected getLocalTextPrefix() { return ImagesRow.localTextPrefix; }
        protected getNameProperty() { return ImagesRow.nameProperty; }
        protected getService() { return ImagesService.baseUrl; }        
        protected form: ImagesForm;
        constructor() {
            super();
            this.form = new ImagesForm(this.idPrefix);

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

                        });

                }

            });



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