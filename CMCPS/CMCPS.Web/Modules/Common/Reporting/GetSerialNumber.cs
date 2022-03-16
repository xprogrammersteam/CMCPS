using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMCPS.Modules.Common.Reporting
{
    public class GetSerialNumber
    {
        public string Number(int number)
        {
            if (number == 1)
            {
                return "a";
            }
            else if (number == 2)
            {
                return "b";
            }
            else if (number == 3)
            {
                return "c";
            }
            else if (number == 4)
            {
                return "d";
            }
            else if (number == 5)
            {
                return "e";
            }
            else if (number == 6)
            {
                return "f";
            }
            else if (number == 7)
            {
                return "g";
            }
            else if (number == 8)
            {
                return "h";
            }
            else if (number == 9)
            {
                return "i";
            }
            else if (number == 10)
            {
                return "j";
            }
            else if (number == 11)
            {
                return "k";
            }
            else
            {
                return "l";
            }
        }
    }
}