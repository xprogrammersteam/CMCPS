using CMCPS.Administration.Entities;
using Serenity;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMCPS.Modules.Common
{
    public class GetCurrentUserName
    {
        public static string GetCurrentUser()
        {
            string userName = WebSecurityHelper.HttpContextUsername;
            List<UserRow> doctorList;
            using (var connection = Serenity.Data.SqlConnections.NewFor<UserRow>())
            {
                var o = UserRow.Fields;
                doctorList = connection.List<UserRow>(q => q
                    .SelectTableFields()
                    .Select(o.Designation)
                    .Where(o.Username==userName)).ToList();

                String doctor = "";
                foreach (var item in doctorList)
                {
                    doctor = item.DisplayName + ", " + item.Designation;
                }
                return doctor;
            }
            //return OpdList;

        }
    }
}