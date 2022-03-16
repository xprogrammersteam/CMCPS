
namespace CMCPS.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AdmissionDialog extends Serenity.EntityDialog<AdmissionRow, any> {
        protected getFormKey() { return AdmissionForm.formKey; }
        protected getIdProperty() { return AdmissionRow.idProperty; }
        protected getLocalTextPrefix() { return AdmissionRow.localTextPrefix; }
        protected getNameProperty() { return AdmissionRow.nameProperty; }
        protected getService() { return AdmissionService.baseUrl; }

        protected form = new AdmissionForm(this.idPrefix);

        constructor() {
            super();
            
            this.form.LymphNode.changeSelect2(x => {
                var lymphNode = Q.toId(this.form.LymphNode.value);
                if (lymphNode == 1) {
                    this.form.Site.getGridField().toggle(true);
                    this.form.Size.getGridField().toggle(true);
                    this.form.Tenderness.getGridField().toggle(true);
                    this.form.Consistency.getGridField().toggle(true);
                    this.form.Fixation.getGridField().toggle(true);
                    this.form.LocalTemperature.getGridField().toggle(true);
                    this.form.DischargingSinus.getGridField().toggle(true);
                }
                else {
                    this.form.Site.getGridField().toggle(false);
                    this.form.Size.getGridField().toggle(false);
                    this.form.Tenderness.getGridField().toggle(false);
                    this.form.Consistency.getGridField().toggle(false);
                    this.form.Fixation.getGridField().toggle(false);
                    this.form.LocalTemperature.getGridField().toggle(false);
                    this.form.DischargingSinus.getGridField().toggle(false);
                }

            });

            this.form.IsNAD.change(x => {
                var rr = Q.toId(this.form.IsNAD.value);
                if (rr == "false") {
                    this.form.RR.getGridField().toggle(true);
                    this.form.Muscles.getGridField().toggle(true);
                    this.form.Stridor.getGridField().toggle(true);
                    this.form.CyanosisReSelect.getGridField().toggle(true);
                    this.form.ClubbingReSelect.getGridField().toggle(true);
                    this.form.NicotineStain.getGridField().toggle(true);
                    this.form.Asterixis.getGridField().toggle(true);
                    this.form.JVPReSelect.getGridField().toggle(true);
                    this.form.LymphReSelect.getGridField().toggle(true);
                    this.form.ScarMark.getGridField().toggle(true);
                    this.form.Swelling.getGridField().toggle(true);
                    this.form.ShapeChest.getGridField().toggle(true);
                    this.form.VisibleVein.getGridField().toggle(true);
                    this.form.ApexBeat.getGridField().toggle(true);
                    this.form.SupraclavicularIndrawing.getGridField().toggle(true);
                    this.form.TrachealTag.getGridField().toggle(true);
                    this.form.ICTSitu.getGridField().toggle(true);
                    this.form.RadiationMark.getGridField().toggle(true);
                    this.form.PositionTrachea.getGridField().toggle(true);
                    this.form.PositionApexBeat.getGridField().toggle(true);
                    this.form.VocalFremitus.getGridField().toggle(true);
                    this.form.ChestExpansibility.getGridField().toggle(true);
                    this.form.PercussionList.getGridField().toggle(true);
                    this.form.AuscultationList.getGridField().toggle(true);
                    this.form.BreathSoundList.getGridField().toggle(true);
                    this.form.VocalResonanceList.getGridField().toggle(true);
                    this.form.AddedSound.getGridField().toggle(true);
                    this.form.Rhonchi.getGridField().toggle(true);
                    this.form.Crepitation.getGridField().toggle(true);
                    this.form.Rub.getGridField().toggle(true);
                    this.form.RR.value = this.form.RespRate.value;
                    this.form.CyanosisReSelect.value = this.form.Cyanosis.value;
                    this.form.ClubbingReSelect.value = this.form.Clubbing.value;
                    this.form.JVPReSelect.value = this.form.JVP.value;
                    this.form.LymphReSelect.value = this.form.LymphNode.value;
                }
                else {
                    this.form.RR.getGridField().toggle(false);
                    this.form.Muscles.getGridField().toggle(false);
                    this.form.Stridor.getGridField().toggle(false);
                    this.form.CyanosisReSelect.getGridField().toggle(false);
                    this.form.ClubbingReSelect.getGridField().toggle(false);
                    this.form.NicotineStain.getGridField().toggle(false);
                    this.form.Asterixis.getGridField().toggle(false);
                    this.form.JVPReSelect.getGridField().toggle(false);
                    this.form.LymphReSelect.getGridField().toggle(false);
                    this.form.ScarMark.getGridField().toggle(false);
                    this.form.Swelling.getGridField().toggle(false);
                    this.form.ShapeChest.getGridField().toggle(false);
                    this.form.VisibleVein.getGridField().toggle(false);
                    this.form.ApexBeat.getGridField().toggle(false);
                    this.form.SupraclavicularIndrawing.getGridField().toggle(false);
                    this.form.TrachealTag.getGridField().toggle(false);
                    this.form.ICTSitu.getGridField().toggle(false);
                    this.form.RadiationMark.getGridField().toggle(false);
                    this.form.PositionTrachea.getGridField().toggle(false);
                    this.form.PositionApexBeat.getGridField().toggle(false);
                    this.form.VocalFremitus.getGridField().toggle(false);
                    this.form.ChestExpansibility.getGridField().toggle(false);
                    this.form.PercussionList.getGridField().toggle(false);
                    this.form.AuscultationList.getGridField().toggle(false);
                    this.form.BreathSoundList.getGridField().toggle(false);
                    this.form.VocalResonanceList.getGridField().toggle(false);
                    this.form.AddedSound.getGridField().toggle(false);
                    this.form.Rhonchi.getGridField().toggle(false);
                    this.form.Crepitation.getGridField().toggle(false);
                    this.form.Rub.getGridField().toggle(false);
                }
            });

            this.form.AddedSound.changeSelect2(x => {
                var addedSound = Q.toId(this.form.AddedSound.value);
                if (addedSound == "1") {
                    this.form.Rhonchi.getGridField().toggle(false);
                    this.form.Crepitation.getGridField().toggle(false);
                    this.form.Rub.getGridField().toggle(false);
                }
            });
            this.form.Skin.changeSelect2(x => {
                var skin = Q.toId(this.form.Skin.value);
                if (skin == "2") {
                    this.form.SkinText.getGridField().toggle(true);
                }
                else {
                    this.form.SkinText.getGridField().toggle(false);
                }
            });
            this.form.AddedSound.change(x => {
                var addedSound = Q.toId(this.form.AddedSound.value);
                if (addedSound == null) {
                    this.form.Rhonchi.getGridField().toggle(true);
                    this.form.Crepitation.getGridField().toggle(true);
                    this.form.Rub.getGridField().toggle(true);
                }
            });
            var btnMajorSurgery = $('.AddtoMajorSurgery')[0];
            var btnAgeAtMenarcheLabel = $('.AgeAtMenarcheLabel')[0];
            var btnAgeAtMenarcheLabel1 = $('.AgeAtMenarcheLabel1')[0];
            var btnAgeAtMenarcheLabel2 = $('.AgeAtMenarcheLabel2')[0];

            btnAgeAtMenarcheLabel.innerHTML = `
                <span class="label label-default AgeAtMenarcheLabel" style="font-size:15px">years</span>`;

            btnAgeAtMenarcheLabel1.innerHTML = `
                <span class="label label-default AgeAtMenarcheLabel1" style="font-size:15px">years</span>`;
            btnAgeAtMenarcheLabel2.innerHTML = `
                <span class="label label-default AgeAtMenarcheLabel1" style="font-size:15px">years</span>`;
            btnMajorSurgery.innerHTML = `
                <a href= "javascript:;" class="btn btn-success AddMajorSurgery"> <i class="fa fa-fw fa-plus-circle"> </i>Add</a>`;

            $('.AddtoMajorSurgery').click(e => this.addtoMajorSurgeryArea());

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();
            
            this.form.Site.getGridField().toggle(false);
            this.form.Size.getGridField().toggle(false);
            this.form.Tenderness.getGridField().toggle(false);
            this.form.Consistency.getGridField().toggle(false);
            this.form.Fixation.getGridField().toggle(false);
            this.form.LocalTemperature.getGridField().toggle(false);
            this.form.DischargingSinus.getGridField().toggle(false);
            this.form.RR.getGridField().toggle(false);
            this.form.Muscles.getGridField().toggle(false);
            this.form.Stridor.getGridField().toggle(false);
            this.form.CyanosisReSelect.getGridField().toggle(false);
            this.form.ClubbingReSelect.getGridField().toggle(false);
            this.form.NicotineStain.getGridField().toggle(false);
            this.form.Asterixis.getGridField().toggle(false);
            this.form.JVPReSelect.getGridField().toggle(false);
            this.form.LymphReSelect.getGridField().toggle(false);
            this.form.ScarMark.getGridField().toggle(false);
            this.form.Swelling.getGridField().toggle(false);
            this.form.ShapeChest.getGridField().toggle(false);
            this.form.VisibleVein.getGridField().toggle(false);
            this.form.ApexBeat.getGridField().toggle(false);
            this.form.SupraclavicularIndrawing.getGridField().toggle(false);
            this.form.TrachealTag.getGridField().toggle(false);
            this.form.ICTSitu.getGridField().toggle(false);
            this.form.RadiationMark.getGridField().toggle(false);
            this.form.PositionTrachea.getGridField().toggle(false);
            this.form.PositionApexBeat.getGridField().toggle(false);
            this.form.VocalFremitus.getGridField().toggle(false);
            this.form.ChestExpansibility.getGridField().toggle(false);
            this.form.PercussionList.getGridField().toggle(false);
            this.form.AuscultationList.getGridField().toggle(false);
            this.form.BreathSoundList.getGridField().toggle(false);
            this.form.VocalResonanceList.getGridField().toggle(false);
            this.form.AddedSound.getGridField().toggle(false);
            this.form.Rhonchi.getGridField().toggle(false);
            this.form.Crepitation.getGridField().toggle(false);
            this.form.Rub.getGridField().toggle(false);
            this.form.SkinText.getGridField().toggle(false);
            if (this.isNew())
                this.form.Socioeconomichistory.value = "Lower Class\nMiddle Class\nUpper Class";
                this.form.IsNAD.value = true;
                this.form.Skin.value = "1";
        }
        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(CMCPS.Common.ReportHelper.createToolButton({
                title: 'Admission Details',
                cssClass: 'export-pdf-button',
                reportKey: 'Default.Admission',
                getParams: () => ({
                    AdmissionID: this.get_entityId()
                })
            }));

            return buttons;
        }
        public addtoMajorSurgeryArea() {
            if (this.form.MajorSurgeryId.value != null) {
                if (this.form.MajorSurgery.value == "") {
                    this.form.MajorSurgery.value = this.form.MajorSurgeryId.text;
                }
                else {

                    this.form.MajorSurgery.value = this.form.MajorSurgery.value + "\n" + this.form.MajorSurgeryId.text;
                }
            }
        }
        
    }
} 