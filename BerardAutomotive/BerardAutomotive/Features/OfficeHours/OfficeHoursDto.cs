using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BerardAutomotive.Features.OfficeHours
{
    public class OfficeHoursDto
    {
        public int Id { get; set; }
        public DateTimeOffset Office_Hours { get; set; }
    }
}
