
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class DischargeDialog extends Serenity.EntityDialog<DischargeRow, any> {
        protected getFormKey() { return DischargeForm.formKey; }
        protected getIdProperty() { return DischargeRow.idProperty; }
        protected getLocalTextPrefix() { return DischargeRow.localTextPrefix; }
        protected getNameProperty() { return DischargeRow.nameProperty; }
        protected getService() { return DischargeService.baseUrl; }

        protected form = new DischargeForm(this.idPrefix);
        constructor() {
            super();
            //this.form.Meal.ca
            $('.Meal .caption').hide();

            this.form.AdmissionId.changeSelect2(x => {

                var admissionId = Q.toId(this.form.AdmissionId.value);
                if (admissionId != "") {

                    AdmissionService.Retrieve({ EntityId: admissionId },
                        response => {
                            this.form.Age.value = response.Entity.Age;
                            this.form.AdmissionDate.value = response.Entity.Date;
                            this.form.Sex.value = response.Entity.Sex;
                            this.form.PinNumber.value = response.Entity.PinNumber;
                            this.form.UnitNumber.value = response.Entity.UnitNumber;
                            this.form.UnitRegNo.value = response.Entity.UnitRegNumber;
                            this.form.BedNumber.value = response.Entity.BedNumber;
                            this.form.HospitalRegNo.value = response.Entity.HospitalRegNumber;
                            this.form.Weight.value = response.Entity.Weight;
                            this.form.BloodGroup.value = response.Entity.BloodGroup;
                            var opId = Q.toId(response.Entity.OperationNoteId);
                            if (opId != null) {
                                OperationNoteService.Retrieve({ EntityId: opId },
                                    response => {

                                        this.form.OperationId.value = response.Entity.OperationId;
                                        this.form.OperationDate.value = response.Entity.Date;
                                        this.form.Findings.value = response.Entity.Findings;
                                        this.form.Procedures.value = response.Entity.Procedures;
                                        if (response.Entity.Diagnosis == null) {
                                            this.form.Diagnosis.getGridField().toggle(false);
                                        }
                                        else {
                                            this.form.Diagnosis.getGridField().toggle(true);
                                            this.form.Diagnosis.value = response.Entity.Diagnosis;
                                        }
                                        if (response.Entity.Indication == null) {
                                            this.form.Indication.getGridField().toggle(false);
                                        }
                                        else {
                                            this.form.Indication.getGridField().show();
                                            this.form.Indication.value = response.Entity.Indication;
                                        }
                                        if (response.Entity.Anesthesia == null) {
                                            this.form.Anesthesia.getGridField().toggle(true);
                                        }
                                        else {
                                            this.form.Anesthesia.getGridField().show();
                                            this.form.Anesthesia.value = response.Entity.Anesthesia;
                                        }
                                        if (response.Entity.Position == null) {
                                            this.form.Position.getGridField().hide();
                                        }
                                        else {
                                            this.form.Position.getGridField().show();
                                            this.form.Position.value = response.Entity.Position;
                                        }
                                        if (response.Entity.Incision == null) {
                                            this.form.Incision.getGridField().hide();
                                        }
                                        else {
                                            this.form.Incision.getGridField().show();
                                            this.form.Incision.value = response.Entity.Incision;
                                        }

                                        if (response.Entity.Histopathology == null) {
                                            this.form.Histopathology.getGridField().hide();
                                        }
                                        else {
                                            this.form.Histopathology.getGridField().show();
                                            this.form.Histopathology.value = response.Entity.Histopathology;
                                        }
                                        if (response.Entity.SpecialNote == null) {
                                            this.form.SpecialNote.getGridField().hide();
                                        }
                                        else {
                                            this.form.SpecialNote.getGridField().show();
                                            this.form.SpecialNote.value = response.Entity.SpecialNote;
                                        }
                                        if (response.Entity.Instructions == null) {
                                            this.form.Instructions.getGridField().hide();
                                        }
                                        else {
                                            this.form.Instructions.getGridField().show();
                                            this.form.Instructions.value = response.Entity.Instructions;
                                        }
                                        if (response.Entity.FurtherPlan == null) {
                                            this.form.FurtherPlan.getGridField().hide();
                                        }
                                        else {
                                            this.form.FurtherPlan.getGridField().show();
                                            this.form.FurtherPlan.value = response.Entity.FurtherPlan;
                                        }
                                    }
                                )
                            }
                            else {
                                this.form.Diagnosis.value = "";
                                this.form.Indication.value = "";
                                this.form.Anesthesia.value = "";
                                this.form.Position.value = "";
                                this.form.Incision.value = "";
                                this.form.Histopathology.value = "";
                                this.form.SpecialNote.value = "";
                                this.form.Instructions.value = "";
                                this.form.FurtherPlan.value = "";
                                this.form.OperationDate.value = "";
                                this.form.Findings.value = "";
                                this.form.Procedures.value = "";
                                this.form.OperationId.value = "";
                            }


                        });

                    var criteria: any;

                    InvestigationService.List({
                        Criteria: Serenity.Criteria.and(criteria, [[InvestigationRow.Fields.AdmissionId], '=', admissionId])
                    },
                        response => {
                            var en = response.Entities
                            if (response.Entities.length == 0) {
                                this.form.Cbc.value = "";
                                this.form.Creatinine.value = "";
                                this.form.Urea.value = "";
                                this.form.Sugar.value = "";
                                this.form.Albumin.value = "";
                                this.form.Calcium.value = "";
                                this.form.BloodCulture.value = "";
                                this.form.Crp.value = "";
                                this.form.Bt.value = "";
                                this.form.Ct.value = "";
                                this.form.ProthrombinTime.value = "";
                                this.form.Aptt.value = "";
                                this.form.OptionToAddHematology.value = "";
                                this.form.Na.value = "";
                                this.form.K.value = "";
                                this.form.Cl.value = "";
                                this.form.HCO3.value = "";
                                this.form.Cxr.value = "";
                                this.form.Axr.value = "";
                                this.form.XrayKub.value = "";
                                this.form.Axr.value = "";
                                this.form.Usg.value = "";
                                this.form.BaEnema.value = "";
                                this.form.BaMealFollowThrough.value = "";
                                this.form.Mcu.value = "";
                                this.form.Rgu.value = "";
                                this.form.Ivu.value = "";
                                this.form.CtScan.value = "";
                                this.form.Mri.value = "";
                                this.form.OptionToAddImaging.value = "";
                            }
                            for (var entity of en) {

                                if (entity.Cbc == null) {
                                    this.form.Cbc.getGridField().hide();
                                }
                                else {
                                    this.form.Cbc.getGridField().show();
                                    this.form.Cbc.value = entity.Cbc;
                                }
                                if (entity.Creatinine == null) {
                                    this.form.Creatinine.getGridField().hide();
                                }
                                else {
                                    this.form.Creatinine.getGridField().show();
                                    this.form.Creatinine.value = entity.Creatinine;
                                }
                                if (entity.Urea == null) {
                                    this.form.Urea.getGridField().hide();
                                }
                                else {
                                    this.form.Urea.getGridField().show();
                                    this.form.Urea.value = entity.Urea;
                                }
                                if (entity.Sugar == null) {
                                    this.form.Sugar.getGridField().hide();
                                }
                                else {
                                    this.form.Sugar.getGridField().show();
                                    this.form.Sugar.value = entity.Sugar;
                                }
                                if (entity.Albumin == null) {
                                    this.form.Albumin.getGridField().hide();
                                }
                                else {
                                    this.form.Albumin.getGridField().show();
                                    this.form.Albumin.value = entity.Albumin;
                                }
                                if (entity.Calcium == null) {
                                    this.form.Calcium.getGridField().hide();
                                }
                                else {
                                    this.form.Calcium.getGridField().show();
                                    this.form.Calcium.value = entity.Calcium;
                                }
                                if (entity.BloodCulture == null) {
                                    this.form.BloodCulture.getGridField().hide();
                                }
                                else {
                                    this.form.BloodCulture.getGridField().show();
                                    this.form.BloodCulture.value = entity.BloodCulture;
                                }
                                if (entity.Crp == null) {
                                    this.form.Crp.getGridField().hide();
                                }
                                else {
                                    this.form.Crp.getGridField().show();
                                    this.form.Crp.value = entity.Crp;
                                }
                                if (entity.Bt == null) {
                                    this.form.Bt.getGridField().hide();
                                }
                                else {
                                    this.form.Bt.getGridField().show();
                                    this.form.Bt.value = entity.Bt;
                                }
                                if (entity.Ct == null) {
                                    this.form.Ct.getGridField().hide();
                                }
                                else {
                                    this.form.Ct.getGridField().show();
                                    this.form.Ct.value = entity.Ct;
                                }
                                if (entity.ProthrombinTime == null) {
                                    this.form.ProthrombinTime.getGridField().hide();
                                }
                                else {
                                    this.form.ProthrombinTime.getGridField().show();
                                    this.form.ProthrombinTime.value = entity.ProthrombinTime;
                                }
                                if (entity.Aptt == null) {
                                    this.form.Aptt.getGridField().hide();
                                }
                                else {
                                    this.form.Aptt.getGridField().show();
                                    this.form.Aptt.value = entity.Aptt;
                                }
                                if (entity.OptionToAddHematology == null) {
                                    this.form.OptionToAddHematology.getGridField().hide();
                                }
                                else {
                                    this.form.OptionToAddHematology.getGridField().show();
                                    this.form.OptionToAddHematology.value = entity.OptionToAddHematology;
                                }
                                if (entity.Na == null) {
                                    this.form.Na.getGridField().hide();
                                }
                                else {
                                    this.form.Na.getGridField().show();
                                    this.form.Na.value = entity.Na;
                                }
                                if (entity.K == null) {
                                    this.form.K.getGridField().hide();
                                }
                                else {
                                    this.form.K.getGridField().show();
                                    this.form.K.value = entity.K;
                                }
                                if (entity.Cl == null) {
                                    this.form.Cl.getGridField().hide();
                                }
                                else {
                                    this.form.Cl.getGridField().show();
                                    this.form.Cl.value = entity.Cl;
                                }
                                if (entity.HCO3 == null) {
                                    this.form.HCO3.getGridField().hide();
                                }
                                else {
                                    this.form.HCO3.getGridField().show();
                                    this.form.HCO3.value = entity.HCO3;
                                }
                                if (entity.Cxr == null) {
                                    this.form.Cxr.getGridField().hide();
                                }
                                else {
                                    this.form.Cxr.getGridField().show();
                                    this.form.Cxr.value = entity.Cxr;
                                }
                                if (entity.Axr == null) {
                                    this.form.Axr.getGridField().hide();
                                }
                                else {
                                    this.form.Axr.getGridField().show();
                                    this.form.Axr.value = entity.Axr;
                                }
                                if (entity.XrayKub == null) {
                                    this.form.XrayKub.getGridField().hide();
                                }
                                else {
                                    this.form.XrayKub.getGridField().show();
                                    this.form.XrayKub.value = entity.XrayKub;
                                }
                                if (entity.Usg == null) {
                                    this.form.Usg.getGridField().hide();
                                }
                                else {
                                    this.form.Usg.getGridField().show();
                                    this.form.Usg.value = entity.Usg;
                                }
                                if (entity.BaEnema == null) {
                                    this.form.BaEnema.getGridField().hide();
                                }
                                else {
                                    this.form.BaEnema.getGridField().show();
                                    this.form.BaEnema.value = entity.BaEnema;
                                }
                                if (entity.BaMealFollowThrough == null) {
                                    this.form.BaMealFollowThrough.getGridField().hide();
                                }
                                else {
                                    this.form.BaMealFollowThrough.getGridField().show();
                                    this.form.BaMealFollowThrough.value = entity.BaMealFollowThrough;
                                }
                                if (entity.Mcu == null) {
                                    this.form.Mcu.getGridField().hide();
                                }
                                else {
                                    this.form.Mcu.getGridField().show();
                                    this.form.Mcu.value = entity.Mcu;
                                }
                                if (entity.Rgu == null) {
                                    this.form.Rgu.getGridField().hide();
                                }
                                else {
                                    this.form.Rgu.getGridField().show();
                                    this.form.Rgu.value = entity.Rgu;
                                }
                                if (entity.Ivu == null) {
                                    this.form.Ivu.getGridField().hide();
                                }
                                else {
                                    this.form.Ivu.getGridField().show();
                                    this.form.Ivu.value = entity.Ivu;
                                }
                                if (entity.CtScan == null) {
                                    this.form.CtScan.getGridField().hide();
                                }
                                else {
                                    this.form.CtScan.getGridField().show();
                                    this.form.CtScan.value = entity.CtScan;
                                }
                                if (entity.Mri == null) {
                                    this.form.Mri.getGridField().hide();
                                }
                                else {
                                    this.form.Mri.getGridField().show();
                                    this.form.Mri.value = entity.Mri;
                                }
                                if (entity.OptionToAddImaging == null) {
                                    this.form.OptionToAddImaging.getGridField().hide();
                                }
                                else {
                                    this.form.OptionToAddImaging.getGridField().show();
                                    this.form.OptionToAddImaging.value = entity.OptionToAddImaging;
                                }
                            }
                        });
                    //OperationNoteService.List({
                    //    Criteria: Serenity.Criteria.and(criteria, [[OperationNoteRow.Fields.AdmissionId], '=', admissionId])
                    //},
                    //    (response) => {
                    //        var en = response.Entities;

                    //        if (en.length==0) {
                    //            this.form.Diagnosis.value = "";
                    //            this.form.Indication.value = "";
                    //            this.form.Anesthesia.value = "";
                    //            this.form.Position.value = "";
                    //            this.form.Incision.value = "";
                    //            this.form.Histopathology.value = "";
                    //            this.form.SpecialNote.value = "";
                    //            this.form.Instructions.value = "";
                    //            this.form.FurtherPlan.value = "";
                    //            this.form.OperationDate.value = "";
                    //            this.form.Findings.value = "";
                    //            this.form.Procedures.value = "";
                    //            this.form.OperationId.value = "";

                    //        }


                    //        for (var entity of en) {

                    //            this.form.OperationId.value = entity.OperationId;
                    //            this.form.OperationDate.value = entity.Date;
                    //            this.form.Findings.value = entity.Findings;
                    //            this.form.Procedures.value = entity.Procedures;
                    //            if (entity.Diagnosis == null) {
                    //                this.form.Diagnosis.getGridField().toggle(false);
                    //            }
                    //            else {
                    //                this.form.Diagnosis.getGridField().toggle(true);
                    //                this.form.Diagnosis.value = entity.Diagnosis;
                    //            }
                    //            if (entity.Indication == null) {
                    //                this.form.Indication.getGridField().toggle(false);
                    //            }
                    //            else {
                    //                this.form.Indication.getGridField().show();
                    //                this.form.Indication.value = entity.Indication;
                    //            }
                    //            if (entity.Anesthesia == null) {
                    //                this.form.Anesthesia.getGridField().toggle(true);
                    //            }
                    //            else {
                    //                this.form.Anesthesia.getGridField().show();
                    //                this.form.Anesthesia.value = entity.Anesthesia;
                    //            }
                    //            if (entity.Position == null) {
                    //                this.form.Position.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Position.getGridField().show();
                    //                this.form.Position.value = entity.Position;
                    //            }
                    //            if (entity.Incision == null) {
                    //                this.form.Incision.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Incision.getGridField().show();
                    //                this.form.Incision.value = entity.Incision;
                    //            }

                    //            if (entity.Histopathology == null) {
                    //                this.form.Histopathology.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Histopathology.getGridField().show();
                    //                this.form.Histopathology.value = entity.Histopathology;
                    //            }
                    //            if (entity.SpecialNote == null) {
                    //                this.form.SpecialNote.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.SpecialNote.getGridField().show();
                    //                this.form.SpecialNote.value = entity.SpecialNote;
                    //            }
                    //            if (entity.Instructions == null) {
                    //                this.form.Instructions.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Instructions.getGridField().show();
                    //                this.form.Instructions.value = entity.Instructions;
                    //            }
                    //            if (entity.FurtherPlan == null) {
                    //                this.form.FurtherPlan.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.FurtherPlan.getGridField().show();
                    //                this.form.FurtherPlan.value = entity.FurtherPlan;
                    //            }
                    //        }
                    //    });

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
                title: 'Discharge Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Discharge',
                getParams: () => ({
                    DischargeID: this.get_entityId()
                })
            }));

            return buttons;
        }
        public addtoArea() {
            //var meal = "খাওয়ার পরে";
            //if (this.form.Meal.value == true) {
            //    meal = "খাওয়ার আগে";
            //}
            if (this.form.MedicineId.value != "") {
                if (this.form.DoaseId.value != "") {
                    if (this.form.DurationId.value != "") {
                        var meal = "";
                        if (this.form.Meal.value != "") {
                            meal = " (" + this.form.Meal.text + ") ------ ";
                        }

                        if (this.form.Advice.value == "") {

                            this.form.Advice.value = this.form.MedicineId.text + "\n              " + this.form.DoaseId.text + " ------" + meal + this.form.DurationId.text + ",";
                        }
                        else {

                            this.form.Advice.value = this.form.Advice.value + "\n" + this.form.MedicineId.text + "\n              " + this.form.DoaseId.text + " ------" + meal + this.form.DurationId.text + ",";
                        }
                        this.form.MedicineId.value = "";
                        this.form.DoaseId.value = "";
                        this.form.DurationId.value = "";
                        this.form.Meal.value = "";
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
                            var opId = Q.toId(response.Entity.OperationNoteId);
                            if (opId != null) {
                                OperationNoteService.Retrieve({ EntityId: opId },
                                    response => {

                                        this.form.OperationId.value = response.Entity.OperationId;
                                        this.form.OperationDate.value = response.Entity.Date;
                                        this.form.Findings.value = response.Entity.Findings;
                                        this.form.Procedures.value = response.Entity.Procedures;
                                        if (response.Entity.Diagnosis == null) {
                                            this.form.Diagnosis.getGridField().toggle(false);
                                        }
                                        else {
                                            this.form.Diagnosis.getGridField().toggle(true);
                                            this.form.Diagnosis.value = response.Entity.Diagnosis;
                                        }
                                        if (response.Entity.Indication == null) {
                                            this.form.Indication.getGridField().toggle(false);
                                        }
                                        else {
                                            this.form.Indication.getGridField().show();
                                            this.form.Indication.value = response.Entity.Indication;
                                        }
                                        if (response.Entity.Anesthesia == null) {
                                            this.form.Anesthesia.getGridField().toggle(true);
                                        }
                                        else {
                                            this.form.Anesthesia.getGridField().show();
                                            this.form.Anesthesia.value = response.Entity.Anesthesia;
                                        }
                                        if (response.Entity.Position == null) {
                                            this.form.Position.getGridField().hide();
                                        }
                                        else {
                                            this.form.Position.getGridField().show();
                                            this.form.Position.value = response.Entity.Position;
                                        }
                                        if (response.Entity.Incision == null) {
                                            this.form.Incision.getGridField().hide();
                                        }
                                        else {
                                            this.form.Incision.getGridField().show();
                                            this.form.Incision.value = response.Entity.Incision;
                                        }

                                        if (response.Entity.Histopathology == null) {
                                            this.form.Histopathology.getGridField().hide();
                                        }
                                        else {
                                            this.form.Histopathology.getGridField().show();
                                            this.form.Histopathology.value = response.Entity.Histopathology;
                                        }
                                        if (response.Entity.SpecialNote == null) {
                                            this.form.SpecialNote.getGridField().hide();
                                        }
                                        else {
                                            this.form.SpecialNote.getGridField().show();
                                            this.form.SpecialNote.value = response.Entity.SpecialNote;
                                        }
                                        if (response.Entity.Instructions == null) {
                                            this.form.Instructions.getGridField().hide();
                                        }
                                        else {
                                            this.form.Instructions.getGridField().show();
                                            this.form.Instructions.value = response.Entity.Instructions;
                                        }
                                        if (response.Entity.FurtherPlan == null) {
                                            this.form.FurtherPlan.getGridField().hide();
                                        }
                                        else {
                                            this.form.FurtherPlan.getGridField().show();
                                            this.form.FurtherPlan.value = response.Entity.FurtherPlan;
                                        }
                                    }
                                )
                            }
                            else {
                                this.form.Diagnosis.value = "";
                                this.form.Indication.value = "";
                                this.form.Anesthesia.value = "";
                                this.form.Position.value = "";
                                this.form.Incision.value = "";
                                this.form.Histopathology.value = "";
                                this.form.SpecialNote.value = "";
                                this.form.Instructions.value = "";
                                this.form.FurtherPlan.value = "";
                                this.form.OperationDate.value = "";
                                this.form.Findings.value = "";
                                this.form.Procedures.value = "";
                                this.form.OperationId.value = "";
                            }


                        });

                    var criteria: any;
                    InvestigationService.List({
                        Criteria: Serenity.Criteria.and(criteria, [[InvestigationRow.Fields.AdmissionId], '=', admissionId])
                    },
                        response => {
                            var en = response.Entities

                            for (var entity of en) {

                                if (entity.Cbc == null) {
                                    this.form.Cbc.getGridField().hide();
                                }
                                else {
                                    this.form.Cbc.getGridField().show();
                                    this.form.Cbc.value = entity.Cbc;
                                }
                                if (entity.Creatinine == null) {
                                    this.form.Creatinine.getGridField().hide();
                                }
                                else {
                                    this.form.Creatinine.getGridField().show();
                                    this.form.Creatinine.value = entity.Creatinine;
                                }
                                if (entity.Urea == null) {
                                    this.form.Urea.getGridField().hide();
                                }
                                else {
                                    this.form.Urea.getGridField().show();
                                    this.form.Urea.value = entity.Urea;
                                }
                                if (entity.Sugar == null) {
                                    this.form.Sugar.getGridField().hide();
                                }
                                else {
                                    this.form.Sugar.getGridField().show();
                                    this.form.Sugar.value = entity.Sugar;
                                }
                                if (entity.Albumin == null) {
                                    this.form.Albumin.getGridField().hide();
                                }
                                else {
                                    this.form.Albumin.getGridField().show();
                                    this.form.Albumin.value = entity.Albumin;
                                }
                                if (entity.Calcium == null) {
                                    this.form.Calcium.getGridField().hide();
                                }
                                else {
                                    this.form.Calcium.getGridField().show();
                                    this.form.Calcium.value = entity.Calcium;
                                }
                                if (entity.BloodCulture == null) {
                                    this.form.BloodCulture.getGridField().hide();
                                }
                                else {
                                    this.form.BloodCulture.getGridField().show();
                                    this.form.BloodCulture.value = entity.BloodCulture;
                                }
                                if (entity.Crp == null) {
                                    this.form.Crp.getGridField().hide();
                                }
                                else {
                                    this.form.Crp.getGridField().show();
                                    this.form.Crp.value = entity.Crp;
                                }
                                if (entity.Bt == null) {
                                    this.form.Bt.getGridField().hide();
                                }
                                else {
                                    this.form.Bt.getGridField().show();
                                    this.form.Bt.value = entity.Bt;
                                }
                                if (entity.Ct == null) {
                                    this.form.Ct.getGridField().hide();
                                }
                                else {
                                    this.form.Ct.getGridField().show();
                                    this.form.Ct.value = entity.Ct;
                                }
                                if (entity.ProthrombinTime == null) {
                                    this.form.ProthrombinTime.getGridField().hide();
                                }
                                else {
                                    this.form.ProthrombinTime.getGridField().show();
                                    this.form.ProthrombinTime.value = entity.ProthrombinTime;
                                }
                                if (entity.Aptt == null) {
                                    this.form.Aptt.getGridField().hide();
                                }
                                else {
                                    this.form.Aptt.getGridField().show();
                                    this.form.Aptt.value = entity.Aptt;
                                }
                                if (entity.OptionToAddHematology == null) {
                                    this.form.OptionToAddHematology.getGridField().hide();
                                }
                                else {
                                    this.form.OptionToAddHematology.getGridField().show();
                                    this.form.OptionToAddHematology.value = entity.OptionToAddHematology;
                                }
                                if (entity.Na == null) {
                                    this.form.Na.getGridField().hide();
                                }
                                else {
                                    this.form.Na.getGridField().show();
                                    this.form.Na.value = entity.Na;
                                }
                                if (entity.K == null) {
                                    this.form.K.getGridField().hide();
                                }
                                else {
                                    this.form.K.getGridField().show();
                                    this.form.K.value = entity.K;
                                }
                                if (entity.Cl == null) {
                                    this.form.Cl.getGridField().hide();
                                }
                                else {
                                    this.form.Cl.getGridField().show();
                                    this.form.Cl.value = entity.Cl;
                                }
                                if (entity.HCO3 == null) {
                                    this.form.HCO3.getGridField().hide();
                                }
                                else {
                                    this.form.HCO3.getGridField().show();
                                    this.form.HCO3.value = entity.HCO3;
                                }
                                if (entity.Cxr == null) {
                                    this.form.Cxr.getGridField().hide();
                                }
                                else {
                                    this.form.Cxr.getGridField().show();
                                    this.form.Cxr.value = entity.Cxr;
                                }
                                if (entity.Axr == null) {
                                    this.form.Axr.getGridField().hide();
                                }
                                else {
                                    this.form.Axr.getGridField().show();
                                    this.form.Axr.value = entity.Axr;
                                }
                                if (entity.XrayKub == null) {
                                    this.form.XrayKub.getGridField().hide();
                                }
                                else {
                                    this.form.XrayKub.getGridField().show();
                                    this.form.XrayKub.value = entity.XrayKub;
                                }
                                if (entity.Usg == null) {
                                    this.form.Usg.getGridField().hide();
                                }
                                else {
                                    this.form.Usg.getGridField().show();
                                    this.form.Usg.value = entity.Usg;
                                }
                                if (entity.BaEnema == null) {
                                    this.form.BaEnema.getGridField().hide();
                                }
                                else {
                                    this.form.BaEnema.getGridField().show();
                                    this.form.BaEnema.value = entity.BaEnema;
                                }
                                if (entity.BaMealFollowThrough == null) {
                                    this.form.BaMealFollowThrough.getGridField().hide();
                                }
                                else {
                                    this.form.BaMealFollowThrough.getGridField().show();
                                    this.form.BaMealFollowThrough.value = entity.BaMealFollowThrough;
                                }
                                if (entity.Mcu == null) {
                                    this.form.Mcu.getGridField().hide();
                                }
                                else {
                                    this.form.Mcu.getGridField().show();
                                    this.form.Mcu.value = entity.Mcu;
                                }
                                if (entity.Rgu == null) {
                                    this.form.Rgu.getGridField().hide();
                                }
                                else {
                                    this.form.Rgu.getGridField().show();
                                    this.form.Rgu.value = entity.Rgu;
                                }
                                if (entity.Ivu == null) {
                                    this.form.Ivu.getGridField().hide();
                                }
                                else {
                                    this.form.Ivu.getGridField().show();
                                    this.form.Ivu.value = entity.Ivu;
                                }
                                if (entity.CtScan == null) {
                                    this.form.CtScan.getGridField().hide();
                                }
                                else {
                                    this.form.CtScan.getGridField().show();
                                    this.form.CtScan.value = entity.CtScan;
                                }
                                if (entity.Mri == null) {
                                    this.form.Mri.getGridField().hide();
                                }
                                else {
                                    this.form.Mri.getGridField().show();
                                    this.form.Mri.value = entity.Mri;
                                }
                                if (entity.OptionToAddImaging == null) {
                                    this.form.OptionToAddImaging.getGridField().hide();
                                }
                                else {
                                    this.form.OptionToAddImaging.getGridField().show();
                                    this.form.OptionToAddImaging.value = entity.OptionToAddImaging;
                                }
                            }
                        });
                    //OperationNoteService.List({
                    //    Criteria: Serenity.Criteria.and(criteria, [[OperationNoteRow.Fields.AdmissionId], '=', admissionId])
                    //},
                    //    (response) => {
                    //        var en = response.Entities;

                    //        for (var entity of en) {
                    //            this.form.OperationId.value = entity.OperationId.toString();
                    //            this.form.OperationDate.value = entity.Date;
                    //            this.form.Findings.value = entity.Findings;
                    //            this.form.Procedures.value = entity.Procedures;
                    //            if (entity.Diagnosis == null) {
                    //                this.form.Diagnosis.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Diagnosis.getGridField().show();
                    //                this.form.Diagnosis.value = entity.Diagnosis;
                    //            }
                    //            if (entity.Indication == null) {
                    //                this.form.Indication.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Indication.getGridField().show();
                    //                this.form.Indication.value = entity.Indication;
                    //            }
                    //            if (entity.Anesthesia == null) {
                    //                this.form.Anesthesia.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Anesthesia.getGridField().show();
                    //                this.form.Anesthesia.value = entity.Anesthesia;
                    //            }
                    //            if (entity.Position == null) {
                    //                this.form.Position.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Position.getGridField().show();
                    //                this.form.Position.value = entity.Position;
                    //            }
                    //            if (entity.Incision == null) {
                    //                this.form.Incision.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Incision.getGridField().show();
                    //                this.form.Incision.value = entity.Incision;
                    //            }

                    //            if (entity.Histopathology == null) {
                    //                this.form.Histopathology.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Histopathology.getGridField().show();
                    //                this.form.Histopathology.value = entity.Histopathology;
                    //            }
                    //            if (entity.SpecialNote == null) {
                    //                this.form.SpecialNote.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.SpecialNote.getGridField().show();
                    //                this.form.SpecialNote.value = entity.SpecialNote;
                    //            }
                    //            if (entity.Instructions == null) {
                    //                this.form.Instructions.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.Instructions.getGridField().show();
                    //                this.form.Instructions.value = entity.Instructions;
                    //            }
                    //            if (entity.FurtherPlan == null) {
                    //                this.form.FurtherPlan.getGridField().hide();
                    //            }
                    //            else {
                    //                this.form.FurtherPlan.getGridField().show();
                    //                this.form.FurtherPlan.value = entity.FurtherPlan;
                    //            }
                    //        }
                    //    });
                }
            }

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }

    }
}