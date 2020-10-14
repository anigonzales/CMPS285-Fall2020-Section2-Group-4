using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BerardAutomotive.Features.OfficeHours
{
    public class LoginDto
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public long PhoneNumber { get; set; }
        public String Email { get; set; }

    }
}