using CMCPS.Default.Entities;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMCPS.Modules.Default.Opd
{
    public class GenerateOpdPinNumber
    {
        public static string GetPIN(DateTime date)
        {
            string regNo = "";
            using (var connection = Serenity.Data.SqlConnections.NewFor<OpdRow>())
            {
                var o = OpdRow.Fields;
                var OpdList = connection.List<OpdRow>(q => q
                    .SelectTableFields());
                var year = date.Year;
                var pateintListByYear = OpdList.Where(m=>Convert.ToDateTime(m.Date).Year==date.Year).ToList();
                int pateintCount = 1000 + (pateintListByYear.Count + 1);              
                //var reg = pateintCount.Substring(pateintCount.Length - 3);
                regNo = "OPD" + "-" + year + "-" + pateintCount;
            }
            return regNo;
        }
    }
}