
namespace CMCPS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.PostNatal")]
    [BasedOnRow(typeof(Entities.PostNatalRow), CheckNames = true)]
    public class PostNatalForm
    {
        public String PostNatalName { get; set; }
    }
}