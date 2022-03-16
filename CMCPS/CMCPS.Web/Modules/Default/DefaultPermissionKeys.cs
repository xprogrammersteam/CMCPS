
using Serenity.Extensibility;
using System.ComponentModel;

namespace CMCPS.Default
{
    [NestedPermissionKeys]
    [DisplayName("Default")]
    public class PermissionKeys
    {
        [Description("[General]")]
        public const string General = "Default:General";
        [DisplayName("Admissions")]
        public class Admission
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Default:Customer:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Default:Customer:Modify";
            public const string View = "Default:Customer:View";
        }

        [DisplayName("Follow Up")]
        public class FollowUp
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Default:Customer:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Default:Customer:Modify";
            public const string View = "Default:Customer:View";
        }

        [DisplayName("Discharge")]
        public class Discharge
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Default:Customer:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Default:Customer:Modify";
            public const string View = "Default:Customer:View";
        }

        [DisplayName("Outdoor Patient")]
        public class OutdoorPatient
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Default:Customer:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Default:Customer:Modify";
            public const string View = "Default:Customer:View";
        }


    }
}
