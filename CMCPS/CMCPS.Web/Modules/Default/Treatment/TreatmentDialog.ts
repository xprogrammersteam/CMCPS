
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TreatmentDialog extends Serenity.EntityDialog<TreatmentRow, any> {
        protected getFormKey() { return TreatmentForm.formKey; }
        protected getIdProperty() { return TreatmentRow.idProperty; }
        protected getLocalTextPrefix() { return TreatmentRow.localTextPrefix; }
        protected getNameProperty() { return TreatmentRow.nameProperty; }
        protected getService() { return TreatmentService.baseUrl; }

        
        protected form: TreatmentForm;
        constructor() {
            super();
            this.form = new TreatmentForm(this.idPrefix);

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
            this.form.MedicineId.changeSelect2(a => {
                var medicineId = Q.toId(this.form.MedicineId.value);
                if (medicineId != "") {
                    this.form.DoaseId.value = "13";
                    this.form.DurationId.value = "25";
                }

            });

            var btnAdd = $('.AddToArea')[0];

            btnAdd.innerHTML = `
                <a href= "javascript:;" class="btn btn-success DetailAdd"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.DetailAdd').click(e => this.addtoArea());



        }
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Treatment Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Treatment',
                getParams: () => ({
                    TreatmentId: this.get_entityId()
                })
            }));

            return buttons;
        }
        public addtoArea() {
           
            if (this.form.MedicineId.value != "") {
                if (this.form.DoaseId.value != "") {
                    if (this.form.DurationId.value != "") {
                        if (this.form.Treatment.value == "") {

                            this.form.Treatment.value = this.form.MedicineId.text + "\n          " + this.form.DoaseId.text + " ------ " + this.form.DurationId.text + ",";
                        }
                        else {

                            this.form.Treatment.value = this.form.Treatment.value + "\n" + this.form.MedicineId.text + "\n          " + this.form.DoaseId.text + " ------" + this.form.DurationId.text + ",";
                        }
                        this.form.MedicineId.value = "";
                        this.form.DoaseId.value = "";
                        this.form.DurationId.value = "";
                       
                    }
                    else {
                        Q.alert("Please select duration");
                    }
                }
                else {
                    Q.alert("Please select dose");
                }

            }
            else {
                Q.alert("Please select medicine");
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