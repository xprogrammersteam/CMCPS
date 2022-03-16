
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InvestigationDialog extends Serenity.EntityDialog<InvestigationRow, any> {
        protected getFormKey() { return InvestigationForm.formKey; }
        protected getIdProperty() { return InvestigationRow.idProperty; }
        protected getLocalTextPrefix() { return InvestigationRow.localTextPrefix; }
        protected getNameProperty() { return InvestigationRow.nameProperty; }
        protected getService() { return InvestigationService.baseUrl; }
        protected form: InvestigationForm;
       
        constructor() {
            super();
            this.form = new InvestigationForm(this.idPrefix);
          
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
      
     
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Investigation Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Investigation',
                getParams: () => ({
                    InvestigationID: this.get_entityId()
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