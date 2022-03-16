
namespace CMCPS.Default {

    @Serenity.Decorators.registerFormatter()
    export class PatientListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList2 = ctx.value;
            if (!idList2)
                return "";

            var byId= Default.AdmissionRow.getLookup().itemById;
            let z: Default.AdmissionRow;
            return idList2 = byId[idList2] ? byId[idList2].Name + ' ' + byId[idList2].UnitRegNumber : idList2;
        }
    }
}