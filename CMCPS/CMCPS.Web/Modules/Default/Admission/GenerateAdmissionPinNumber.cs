using CMCPS.Default.Entities;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMCPS.Modules.Default.Admission
{
    public class GenerateAdmissionPinNumber
    {
        public static string GetPIN(DateTime date)
        {
            string pin = "";
            using (var connection = Serenity.Data.SqlConnections.NewFor<AdmissionRow>())
            {
                var o = AdmissionRow.Fields;
                var OpdList = connection.List<AdmissionRow>(q => q
                    .SelectTableFields());
                var year = date.Year;
                var pateintListByYear = OpdList.Where(m => Convert.ToDateTime(m.Date).Year == date.Year).ToList();
                int pateintCount = 10000 + (pateintListByYear.Count + 1);
                //var reg = pateintCount.Substring(pateintCount.Length - 3);
                pin = year + "-" + pateintCount;
            }
            return pin;
        }
    }
}